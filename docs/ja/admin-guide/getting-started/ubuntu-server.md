# Ubuntu Server

[[toc]]

## 概要

この章では Ubuntu Server 22.04 \(Jammy\) に GROWI をインストールする方法を紹介します。 他のバージョンは現在未検証です。

セットアップに必要となるソフトウェアは以下の通りです。

* node.js 18.x or 20.x
* npm 6.x
* pnpm
* MongoDB 4.4 以上 \(6.0 以上を推奨\)
* \(Option\) Elasticsearch 7.x or 8.x
* \(Option\) systemd
* \(Option\) Apache or nginx

<!-- textlint-disable weseek/no-doubled-joshi -->
Optional となっているものは必須ではありません。ただし、本項ではこれら全てを利用し、全文検索できる GROWI を Apache or nginx でリバースプロキシする環境を構築し、systemd でホストと同時に起動させる方法を説明します。
<!-- textlint-enable weseek/no-doubled-joshi -->

## node.js 20.x & npm のインストール

### NodeSource repository を利用する

<!-- textlint-disable weseek/no-dead-link -->
[https://deb.nodesource.com/](https://deb.nodesource.com/) から Node.js のインストールスクリプトを取得します。作業ディレクトリはホームディレクトリで作業します。
<!-- textlint-enable weseek/no-dead-link -->

```text
$ cd ~
$ curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
```

取得したスクリプトを実行します。

```text
$ sudo bash nodesource_setup.sh
```

これにより `apt` 経由で node.js が取得できるようになったので、 `apt` コマンドでインストールを行います。

```text
$ sudo apt install nodejs
```

GROWI では pnpm を用いたパッケージインストールを利用するため、ここで `pnpm` コマンドをインストールしておきます。

```text
$ curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sudo sh -
$ sudo pnpm setup
```

また、GROWI では Turborepo を用いてビルドを行うため、`turbo` コマンドをインストールします。

```text
$ sudo pnpm add turbo --global
```

Node.js, npm, pnpm, turbo のインストールが完了したら、インストールしたバージョンを確認しましょう。

```text
$ nodejs -v
v20.12.2
$ npm -v
10.5.0
$ pnpm -v
9.12.2
$ turbo --version
2.1.3
```

## Elasticsearch

### インストール

[公式ページ](https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html) に従い、インストールを進めます。 ここでは Elasticsearch 8.x をインストールします。

まず、Elasticsearch を実行できるように JDK17 をインストールします。

```text
$ sudo apt install openjdk-17-jdk
```

パッケージをインストールするために、Elasticsearch レポジトリの GPG キーを追加します。

```text
$ wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo gpg --dearmor -o /usr/share/keyrings/elasticsearch-keyring.gpg
```

Elasticsearch のレポジトリを追加します。

```text
$ sudo echo "deb [signed-by=/usr/share/keyrings/elasticsearch-keyring.gpg] https://artifacts.elastic.co/packages/8.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-8.x.list
```

これで、apt 経由で Elasticsearch がインストールできるようになったため、インストールを行います。

```text
$ sudo apt update && sudo apt install elasticsearch
```

インストールが完了すると、elasticユーザーのデフォルトパスワードが表示されるので、念のためどこかにメモしておきましょう。

```text
--------------------------- Security autoconfiguration information ------------------------------ 
Authentication and authorization are enabled. 
TLS for the transport and HTTP layers is enabled and configured. 
The generated password for the elastic built-in superuser is : ～～～～～～～
```

ここで Elasticsearch に割り当てるメモリを調整します。メモリの割り当ては個人ユースであれば 256MB で十分です。チーム規模、ページの量に応じて変更してください。

```text
$ sudo vim /etc/elasticsearch/jvm.options
# IMPORTANT: JVM heap size のコメントブロックの後に追記
-Xms256m
-Xmx256m
```

インストールが完了したら、 パッケージのバージョンを確認します。

```text
$ dpkg -l elasticsearch
Desired=Unknown/Install/Remove/Purge/Hold
| Status=Not/Inst/Conf-files/Unpacked/halF-conf/Half-inst/trig-aWait/Trig-pend
|/ Err?=(none)/Reinst-required (Status,Err: uppercase=bad)
||/ Name           Version      Architecture Description
+++-==============-============-============-=====================================================
ii  elasticsearch  8.13.2       amd64        Distributed RESTful search engine built for the cloud
```

### TLS の無効化

Elasticsearch 8.x では、デフォルトでは TLS 通信のみ受け付ける設定です。GROWI からは、HTTP で通信するため、設定を変更する必要があります。

`/etc/elasticsearch/elasticsearch.yml` を編集し、以下の差分を参考に3箇所の設定を true から false に変更します。

```diff
diff -uNr old/elasticsearch.yml new/elasticsearch.yml
--- old/elasticsearch.yml       2024-04-30 13:36:37.106652641 +0000
+++ new/elasticsearch.yml       2024-04-30 13:38:07.739773922 +0000
@@ -89,18 +89,18 @@
 # --------------------------------------------------------------------------------

 # Enable security features
-xpack.security.enabled: true
+xpack.security.enabled: false

 xpack.security.enrollment.enabled: true

 # Enable encryption for HTTP API client connections, such as Kibana, Logstash, and Agents
 xpack.security.http.ssl:
-  enabled: true
+  enabled: false
   keystore.path: certs/http.p12

 # Enable encryption and mutual authentication between cluster nodes
 xpack.security.transport.ssl:
-  enabled: true
+  enabled: false
   verification_mode: certificate
   keystore.path: certs/transport.p12
   truststore.path: certs/transport.p12
```


### GROWI に必要な Elasticsearch プラグインのインストール

以下の Elasticsearch plugin をインストールします。

* [Japanese \(kuromoji\) Analysis plugin](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-kuromoji.html)
* [ICU Analysis Plugin](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu.html)

まずは、Elasticsearch plugin をインストールするために利用するコマンドを検索します。

```text
$ dpkg -L elasticsearch | grep bin | grep plugin
/usr/share/elasticsearch/bin/elasticsearch-plugin
```

上記で出力されたコマンドを利用して、 analysis-kuromoji plugin と analysis-icu plugin をインストールします。

```text
# analysis-kuromoji のインストール
$ sudo /usr/share/elasticsearch/bin/elasticsearch-plugin install analysis-kuromoji

# analysis-icu plugin のインストール
$ sudo /usr/share/elasticsearch/bin/elasticsearch-plugin install analysis-icu
```

### Elasticsearch の起動と自動起動設定の有効化

`systemctl` コマンドを使って、Elasticsearch の自動起動設定を有効化し、起動します。

```text
$ sudo systemctl enable --now elasticsearch
```

正常に起動しているか確認します。

```text
$ systemctl status elasticsearch
● elasticsearch.service - Elasticsearch
     Loaded: loaded (/lib/systemd/system/elasticsearch.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2024-05-03 08:46:23 JST; 11min ago
...
```

また、http で通信できることを確認します。

```text
$ curl http://localhost:9200/
{
  "name" : "localhost.localdomain",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "_na_",
  "version" : {
    "number" : "8.13.3",
    "build_flavor" : "default",
    "build_type" : "rpm",
    "build_hash" : "617f7b76c4ebcb5a7f1e70d409a99c437c896aea",
    "build_date" : "2024-04-29T22:05:16.051731935Z",
    "build_snapshot" : false,
    "lucene_version" : "9.10.0",
    "minimum_wire_compatibility_version" : "7.17.0",
    "minimum_index_compatibility_version" : "7.0.0"
  },
  "tagline" : "You Know, for Search"
}
```

## MongoDB

### インストール

[公式ページ](https://www.mongodb.com/docs/v6.0/tutorial/install-mongodb-on-ubuntu/) に従ってインストールを実施します。 バージョンは、MongoDB 6.0 です。

まずは、`apt` のために public key をインポートします。

```text
curl -fsSL https://www.mongodb.org/static/pgp/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

レポジトリを追加します。ここでは Ubuntu 20.04 と Ubuntu 22.04 の例を記載しています。

**Ubuntu 20.04**

```text
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

**Ubuntu 22.04**

```text
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

```

レポジトリの追加まで完了したため、MongoDB のインストールを行います。

```text
$ sudo apt update && sudo apt install mongodb-org
```

インストールが完了したら、 パッケージのバージョンを確認します。

```text
$ dpkg-query -l "mongodb-org*:amd64"
Desired=Unknown/Install/Remove/Purge/Hold
| Status=Not/Inst/Conf-files/Unpacked/halF-conf/Half-inst/trig-aWait/Trig-pend
|/ Err?=(none)/Reinst-required (Status,Err: uppercase=bad)
||/ Name                             Version      Architecture Description
+++-================================-============-============-===================================================================
ii  mongodb-org                      6.0.15       amd64        MongoDB open source document-oriented database system (metapackage)
ii  mongodb-org-database             6.0.15       amd64        MongoDB open source document-oriented database system (metapackage)
ii  mongodb-org-database-tools-extra 6.0.15       amd64        Extra MongoDB database tools
ii  mongodb-org-mongos               6.0.15       amd64        MongoDB sharded cluster query router
ii  mongodb-org-server               6.0.15       amd64        MongoDB database server
ii  mongodb-org-shell                6.0.15       amd64        MongoDB shell client
ii  mongodb-org-tools                6.0.15       amd64        MongoDB tools
```

`systemctl` コマンドを使って、MongoDB の自動起動設定を有効化し、起動します。

```text
$ sudo systemctl enable --now mongod
```

正常に起動しているか確認します。

```text
$ systemctl status mongod
● mongod.service - MongoDB Database Server
     Loaded: loaded (/lib/systemd/system/mongod.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2024-05-03 08:45:35 JST; 14min ago
...
```

## GROWI

### Git LFS の導入

GROWI では、フォントファイルなどを [Git Large File Storage (LFS)](https://git-lfs.com/)で管理しています。そのため、`git-lfs` がインストールされていない状態で `git clone` を行うと正しくビルドが行えません。

GROWI のソースコードの取得に先立ち、`git-lfs` をインストールします。

```text
$ sudo apt update && sudo apt install git-lfs
```

### インストール

[https://github.com/weseek/growi](https://github.com/weseek/growi) からソースコードを取得し、[https://github.com/weseek/growi/releases](https://github.com/weseek/growi/releases) にて、最新の安定版のバージョンを確認します。

ここでは `/opt/growi` 配下にインストールする手順を記載しています。

```text
$ sudo mkdir -p /opt/
$ cd /opt/
$ sudo git clone https://github.com/weseek/growi /opt/growi
$ cd /opt/growi

# タグの確認
$ sudo git tag -l
...
v6.3.3
v6.3.4
v7.0.0
v7.0.1
v7.0.2
...

# RC がついていない最新版を利用
$ sudo git checkout -b v7.0.2 refs/tags/v7.0.2
```

ソースコードを clone した後に、`pnpm` コマンドを利用して、 GROWI に必要なパッケージをインストールします。

```text
$ cd /opt/growi
$ sudo pnpm install
```

### ビルド

パッケージのインストールが完了したら、ビルドを行います。

```text
$ sudo npm run app:build
```

これには、しばらく時間がかかります。

### 起動確認

ビルドが完了したら、起動確認を行います。

ここでは MongoDB と Elasticsearch が同一ホストで稼働していることを前提としています。

`MONGO_URI` と `ELASTICSEARCH_URI` は環境に合わせて適宜書き換えてください。

```text
$ sudo \
MONGO_URI=mongodb://localhost:27017/growi \
ELASTICSEARCH_URI=http://localhost:9200/growi \
npm run app:server

...
# 以下のメッセージが表示されるまでしばらく待つ
{"name":"growi:crowi","hostname":"growi-server","pid":29259,"level":30,"msg":"[production] Express server is listening on port 3000","time":"2024-04-30T21:50:05.549Z","v":0}
```

`http://<hostname or ip address>:3000/` にアクセスし、初回セットアップ画面が表示されることを確認します。

### systemd による自動起動の設定

「[systemd による自動起動](/ja/admin-guide/admin-cookbook/launch-with-systemd.html)」を参照してください。

## リバースプロキシの設定

ここでは、起動した GROWI に対してリバースプロキシを行うための設定例を記載します。

### Apache

#### インストール

```text
$ sudo apt update && sudo apt -y install apache2
```

#### 必要なモジュールの有効化

proxy, proxy\_http, proxy\_wstunnel module をインストールします。

```text
$ sudo a2enmod proxy proxy_http proxy_wstunnel
```

#### リバースプロキシの設定例

ここではリバースプロキシに関する箇所を抜粋して記載しています。

```text
<IfModule mod_ssl.c>
  <VirtualHost _default_:443>
    ...
    ###
    # reverse proxy to crowi
    # Header に Host: example.com を追加するため
    ProxyPreserveHost On
    # HTTPS利用時: Header に x-forwarded-proto: https を追加するため
    RequestHeader set x-forwarded-proto 'https'
    # Apache では static assets で 304 が返らないことがあるので ETag を無効化する
    <ifModule mod_headers.c>
            Header unset ETag
    </ifModule>
    FileETag None

    # socket.io の path を rewrite する
    RewriteEngine On
    RewriteCond %{REQUEST_URI}  ^/socket.io            [NC]
    RewriteCond %{QUERY_STRING} transport=websocket    [NC]
    RewriteRule /(.*) ws://localhost:3000/$1 [P,L]

    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
    ...
  </VirtualHost>
</IfModule>
```

#### 自動起動の設定

```text
$ sudo systemctl enable --now apache2
```

### Nginx のインストールと設定

#### インストール

```text
$ sudo apt update && sudo apt -y install nginx
```

#### リバースプロキシの設定例

ここでは HTTPS を利用する設定例を記載しています。 &lt;server&gt; など&lt;&gt;で囲まれている箇所は、適宜環境に合わせて設定してください。

```text
upstream growi {
    server localhost:3000;
}

map $http_upgrade $connection_upgrade {
    default Upgrade;
    ''      close;
}

server {
    listen 443 ssl http;
    server_name <server>;
    ssl_certificate <cert_file>;
    ssl_certificate_key <key_file>;

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Port $server_port;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://growi;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_read_timeout 900s;
    }
}

server {
    listen 80;
    server_name <server>;
    return 301 https://$server_name$request_uri;
}
```

設定ファイルに問題がないことを確認します。

```text
$ sudo nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

#### 自動起動の設定

```text
$ sudo systemctl enable --now nginx
```
