# AlmaLinux OS

[[toc]]

## 概要

この章ではAlmaLinux OS 9 にGROWIをインストールする方法を紹介します。AlmaLinux OS 8 は現在未検証です。

セットアップに必要となるソフトウェアは以下の通りです。

* node.js 18.x or 20.x
* npm 6.x
* yarn
* MongoDB 4.4 以上 \(6.0 以上を推奨\)
* \(Option\) Elasticsearch 7.x or 8.x
* \(Optional\) systemd
* \(Optional\) Apache or nginx

<!-- textlint-disable weseek/no-doubled-joshi -->
Optional となっているものは必須ではありません。ただし、本項ではこれら全てを利用し、全文検索できる GROWI を Apache or nginx でリバースプロキシする環境を構築し、systemd でホストと同時に起動させる方法を説明します。
<!-- textlint-enable weseek/no-doubled-joshi -->

## node.js 20.x & npm のインストール

### NodeSource repository を利用する

<!-- textlint-disable weseek/no-dead-link -->
[https://rpm.nodesource.com/](https://rpm.nodesource.com/)からNode.js のインストールスクリプトを取得します。作業ディレクトリはホームディレクトリです。
<!-- textlint-enable weseek/no-dead-link -->

```text
$ cd ~
$ curl -sL https://rpm.nodesource.com/setup_20.x -o nodesource_setup.sh
```

取得したスクリプトを実行します。

```text
$ sudo bash nodesource_setup.sh
```

これにより `dnf` 経由で node.js が取得できるようになったので、 `dnf` コマンドでインストールを行います。

```text
$ sudo dnf install -y nodejs
```

GROWI では yarn を用いたパッケージインストールを利用するため、ここで `yarn` コマンドをインストールしておきます。

```text
$ curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
$ sudo dnf install -y yarn
```

また、GROWI では Turborepo を用いてビルドを行うため、`turbo` コマンドをインストールします。

```text
$ sudo yarn global add turbo
```

Node.js, npm, yarn のインストールが完了したら、インストールしたバージョンを確認しましょう。

```text
$ node -v
v20.12.2
$ npm -v
10.5.0
$ yarn -v
1.22.19
$ turbo --version
1.13.3
```

## Elasticsearch

### インストール

[公式ページ](https://www.elastic.co/guide/en/elasticsearch/reference/current/rpm.html) に従い、インストールを進めます。 ここでは Elasticsearch 8.x をインストールします。

まず、 Elasticsearch を実行できるように JDK17 をインストールします。

```text
$ sudo dnf install -y java-17-openjdk
```

パッケージをインストールするために、Elasticsearch レポジトリの GPG キーを追加します。

```text
$ sudo rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch
```

Elasticsearch のレポジトリを追加します。以下の内容を`/etc/yum.repos.d/elasticsearch.repo` に書き込みます。

```text
[elasticsearch]
name=Elasticsearch repository for 8.x packages
baseurl=https://artifacts.elastic.co/packages/8.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=0
autorefresh=1
type=rpm-md
```

これで、dnf 経由で Elasticsearch がインストールできるようになったため、インストールを行います。

```text
$ sudo dnf install -y --enablerepo=elasticsearch elasticsearch
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
$ dnf list --installed elasticsearch
インストール済みパッケージ
elasticsearch.x86_64                   8.13.3-1                   @elasticsearch
```

### TLS の無効化

Elasticsearch 8.x では、デフォルトでは TLS 通信のみ受け付ける設定です。GROWI からは、HTTP で通信するため、設定を変更する必要があります。

`/etc/elasticsearch/elasticsearch.yml` を編集し、以下の差分を参考に3箇所の設定を true から false に変更します。

また、`cluster.initial_master_nodes: ["localhost"]` の行頭に `#` を挿入し、コメントアウトします。（クラスタ構成しない場合）

```diff
--- old/elasticsearch.yml       2024-05-03 07:01:49.040484865 +0900
+++ new/elasticsearch.yml       2024-05-03 07:00:47.613622273 +0900
@@ -89,24 +89,24 @@
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
 # Create a new cluster with the current node only
 # Additional nodes can still join the cluster later
-cluster.initial_master_nodes: ["localhost"]
+#cluster.initial_master_nodes: ["localhost"]

 # Allow HTTP API connections from anywhere
 # Connections are encrypted and require user authentication
```

### GROWI に必要な Elasticsearch プラグインのインストール

以下の Elasticsearch plugin をインストールします。

* [Japanese \(kuromoji\) Analysis plugin](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-kuromoji.html)
* [ICU Analysis Plugin](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu.html)

まずは、Elasticsearch plugin をインストールするために利用するコマンドを検索します。

```text
$ rpm -ql elasticsearch | grep bin | grep plugin
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
     Loaded: loaded (/usr/lib/systemd/system/elasticsearch.service; enabled; preset: disabled)
     Active: active (running) since Thu 2024-05-02 23:16:51 JST; 29s ago
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

[公式ページ](https://docs.mongodb.com/v6.0/tutorial/install-mongodb-on-red-hat/) に従ってインストールを実施します。 バージョンは、MongoDB 6.0 です。

レポジトリを追加します。 `/etc/yum.repos.d/mongodb-org-6.0.repo` を作成し、以下の内容を書き込みます。

```text
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/9/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://pgp.mongodb.com/server-6.0.asc
```

これで、dnf 経由で MongoDB がインストールできるようになったため、インストールを行います。

```text
$ sudo dnf install -y mongodb-org
```

インストールが完了したら、 パッケージのバージョンを確認します。

```text
$ dnf list --installed "mongodb-org*"
インストール済みパッケージ
mongodb-org.x86_64                           6.0.15-1.el9       @mongodb-org-6.0
mongodb-org-database.x86_64                  6.0.15-1.el9       @mongodb-org-6.0
mongodb-org-database-tools-extra.x86_64      6.0.15-1.el9       @mongodb-org-6.0
mongodb-org-mongos.x86_64                    6.0.15-1.el9       @mongodb-org-6.0
mongodb-org-server.x86_64                    6.0.15-1.el9       @mongodb-org-6.0
mongodb-org-tools.x86_64                     6.0.15-1.el9       @mongodb-org-6.0
```

`systemctl` コマンドを使って、MongoDB の自動起動設定を有効化し、起動します。

```text
$ sudo systemctl enable --now mongod
```

正常に起動しているか確認します。

```text
$ systemctl status mongod
● mongod.service - MongoDB Database Server
     Loaded: loaded (/usr/lib/systemd/system/mongod.service; enabled; preset: disabled)
     Active: active (running) since Thu 2024-05-02 23:33:45 JST; 11s ago
...
```

## GROWI

### Git LFS の導入

GROWI では、フォントファイルなどを [Git Large File Storage (LFS)](https://git-lfs.com/)で管理しています。そのため、`git-lfs` がインストールされていない状態で `git clone` を行うと正しくビルドが行えません。

GROWI のソースコードの取得に先立ち、`git-lfs` をインストールします。

```text
$ sudo dnf install -y git-lfs
```

### インストール

[https://github.com/growilabs/growi](https://github.com/growilabs/growi) からソースコードを取得し、[https://github.com/growilabs/growi/releases](https://github.com/growilabs/growi/releases) にて、最新の安定版のバージョンを確認します。

ここでは `/opt/growi` 配下にインストールする手順を記載しています。

```text
$ sudo mkdir -p /opt/
$ cd /opt/
$ sudo git clone https://github.com/growilabs/growi /opt/growi
$ cd /opt/growi

# タグの確認
$ sudo git tag -l
...
v6.3.3
v6.3.4
v6.3.x-base
v7.0.0
v7.0.1
v7.0.2
v7.0.x-base
...

# RC がついていない最新版を利用
$ sudo git checkout -b v7.0.2 refs/tags/v7.0.2
```

ソースコードを clone した後に、`yarn` コマンドを利用して、 GROWI に必要なパッケージをインストールします。

```text
$ cd /opt/growi
$ sudo yarn
```

### ビルド

パッケージのインストールが完了したら、ビルドを行います。

```text
$ sudo yarn app:build
```

これには、しばらく時間がかかります。

### ファイアウォールの状態確認と一時的なポート開放

GROWI の起動確認を行う前にファイアウォールが有効になっていないか確認します。（他のホストのブラウザから起動確認を行う場合）

```text
$ systemctl status firewalld
● firewalld.service - firewalld - dynamic firewall daemon
     Loaded: loaded (/usr/lib/systemd/system/firewalld.service; enabled; preset: enabled)
     Active: active (running) since Thu 2024-05-02 22:15:43 JST; 2h 5min ago
```

上記のように active (running) と表示されている場合は、GROWI が使用する 3000 番ポートを一時的に開放します。

```text
$ sudo firewall-cmd --add-port=3000/tcp
success
```

### 起動確認

ビルドが完了したら、起動確認を行います。

ここでは MongoDB と Elasticsearch が同一ホストで稼働していることを前提としています。

`MONGO_URI` と `ELASTICSEARCH_URI` は環境に合わせて適宜書き換えてください。

```text
$ sudo \
MONGO_URI=mongodb://localhost:27017/growi \
ELASTICSEARCH_URI=http://localhost:9200/growi \
yarn app:server

...
# 以下のメッセージが表示されるまでしばらく待つ
{"name":"growi:crowi","hostname":"localhost.localdomain","pid":97032,"level":30,"msg":"[production] Express server is listening on port 3000","time":"2024-05-02T15:01:15.996Z","v":0}
```

`http://<hostname or ip address>:3000/` にアクセスし、初回セットアップ画面が表示されることを確認します。

### systemd による自動起動の設定

「[systemd による自動起動](/ja/admin-guide/admin-cookbook/launch-with-systemd.html)」を参照してください。

## リバースプロキシの設定

ここでは、起動した GROWI に対してリバースプロキシを行うための設定例を記載します。

### ファイアウォールでの HTTPS サービスの開放

ファイアウォールが有効になっている場合、HTTPS サービスを開放します。

```text
$ sudo firewall-cmd --add-service=https --permanent
success
$ sudo firewall-cmd --reload
success
```

### SELinux の設定変更

Apache や Nginx が、ネットワークまたはリモートポートへの接続を開始できるように SELinux の設定を変更します。

```text
sudo setsebool -P httpd_can_network_connect 1
```

### Apache

#### インストール

```text
$ sudo dnf install httpd
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
$ sudo systemctl enable --now httpd
```

### Nginx のインストールと設定

#### インストール


```text
$ sudo dnf install -y nginx
```

#### リバースプロキシの設定例

`/etc/nginx/conf.d/growi.conf` のようなファイルを作成し、設定を書き込みます。
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
    listen 443 ssl http2;
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
