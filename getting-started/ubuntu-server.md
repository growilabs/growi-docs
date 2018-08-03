# Ubuntu Server

## 概要

この章では Ubuntu Server 16.04 (Xenial) に GROWI をインストールする方法を紹介します。
14.04 や 18.04 は現在未検証です。

セットアップに必要となるソフトウェアは以下の通りです。
* node.js 8.x (DO NOT USE 9.x)
* npm 5.x
* yarn
* Elasticsearch 5.x
* MongoDB 3.x
* systemd
* Apache or nginx

## node.js 8.x & npm のインストール
### NodeSource repository を利用する

https://deb.nodesource.com/ から Node.js をインストールスクリプトを取得します。作業ディレクトリはホームディレクトリで作業します

```shell
$ cd ~
$ curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh
```

取得したスクリプトを実行します。

```shell
$ sudo bash nodesource_setup.sh
```

これで `apt-get` 経由で node.js が取得できるようになったので、 `apt-get` コマンドでインストールを行います。

```shell
$ sudo apt-get install nodejs
```

GROWI では yarn を用いたパッケージインストールを利用するため、ここで `yarn` コマンドをインストールしておきます。

```shell
$ sudo npm install -g yarn
```

Node.js, npm, yarn のインストールが完了したら、インストールしたバージョンを確認しましょう。

```shell
$ nodejs -v
v8.11.3
$ npm -v
5.6.0
$ yarn -v
1.9.2
```

## Elasticsearch
### インストール

[公式ページ](https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html) に従い、インストールを進めます。
ここでは Elasticsearch 5.x をインストールするために若干の修正をしています

まず、Elasticsearch を実行できるように JDK8 をインストールします。

```shell
$ sudo apt-get install openjdk-8-jdk
```

パッケージをインストールするために、Elasticsearch レポジトリの GPG キーを追加します。

```shell
$ wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
```

https 経由で apt コマンドによるインストールを行うために、 `apt-transport-https` パッケージをインストールします。

```shell
$ sudo apt-get install apt-transport-https
```

Elasticsearch のレポジトリを追加します。

```
$ echo "deb https://artifacts.elastic.co/packages/5.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-5.x.list
```

これで、apt-get 経由で Elasticsearch がインストールできるようになったため、インストールを行います。

```shell
$ sudo apt-get update && sudo apt-get install elasticsearch
```

インストールが完了したら、Elasticsearch に割り当てるメモリを調整します。
1GB 割当のところを 256MB に変更します。

```shell
$ sudo vim /etc/elasticsearch/jvm.options
# 編集前
-Xms1g
-Xmx1g

# 編集後
-Xms256m
-Xmx256m
```

インストールが完了したら、 パッケージのバージョンを確認します。

```shell
$ dpkg -l | grep elasticsearch
ii  elasticsearch                    5.6.10                                     all          Elasticsearch is a distributed RESTful search engine built for the cloud. Reference documentation can be found at https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html and the 'Elasticsearch: The Definitive Guide' book can be found at https://www.elastic.co/guide/en/elasticsearch/guide/current/index.html
```

`systemctl` コマンドを使って、Elasticsearch を起動します。

```shell
$ sudo systemctl start elasticsearch
```

elsticsearch の自動起動設定を有効化します。

```shell
$ sudo systemctl enable elasticsearch
```

正常に起動しているか確認を行います。

```shell
$ sudo systemctl status elasticsearch
```

### GROWI に必要な Elasticsearch プラグインのインストール

以下の Elasticsearch plugin をインストールします
- [Japanese (kuromoji) Analysis plugin](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-kuromoji.html)
- [ICU Analysis Plugin](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu.html)

まずは、Elasticsearch plugin をインストールするために利用するコマンドを検索します

```shell
$ dpkg -L elasticsearch | grep bin | grep plugin
/usr/share/elasticsearch/bin/elasticsearch-plugin
```

上記で出力されたコマンドを利用して、 analysis-kuromoji plugin と analysis-icu plugin をインストールします

```shell
# analysis-kuromoji のインストール
$ sudo /usr/share/elasticsearch/bin/elasticsearch-plugin install analysis-kuromoji

# analysis-icu plugin のインストール
$ sudo /usr/share/elasticsearch/bin/elasticsearch-plugin install analysis-icu
```

## MongoDB
### インストール

[公式ページ](https://docs.mongodb.com/v3.6/tutorial/install-mongodb-on-ubuntu/) に従ってインストールを実施します。
バージョンは、MongoDB 3.6 をインストールします

まずは、`apt` のために public key をインポートします。
```shell
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
```

レポジトリの追加を行います。
ここでは Ubuntu 14.04 と Ubuntu 16.04 の例を記載しています。

**Ubuntu 14.04**
```shell
$ echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
```

**Ubuntu 16.04**
```shell
$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
```

レポジトリの追加まで完了したため、MongoDB のインストールを行います。

```shell
$ sudo apt-get update && sudo apt-get install mongodb-server
```

インストールが完了したら、 パッケージのバージョンを確認します。

```shell
ii  mongodb-org                      3.6.6                                      amd64        MongoDB open source document-oriented database system (metapackage)
ii  mongodb-org-mongos               3.6.6                                      amd64        MongoDB sharded cluster query router
ii  mongodb-org-server               3.6.6                                      amd64        MongoDB database server
ii  mongodb-org-shell                3.6.6                                      amd64        MongoDB shell client
ii  mongodb-org-tools                3.6.6                                      amd64        MongoDB tools
```

 `systemctl` コマンドを使って、MongoDB を起動します。

```shell
$ sudo systemctl start mongod
```

MongoDB の自動起動設定を有効化します。

```shell
$ sudo systemctl enable mongod
```

正常に起動しているか確認を行います。

```shell
$ sudo systemctl status mongod
```

## GROWI
### インストール

https://github.com/weseek/growi  からソースコードを取得し、https://github.com/weseek/growi/releases にて、最新の安定版のバージョンを確認します。

ここでは `/opt/growi` 配下にインストールする手順を記載しています。

```shell
$ sudo mkdir -p /opt/
$ cd /opt/
$ sudo git clone https://github.com/weseek/growi /opt/growi
$ cd /opt/growi

# タグの確認
$ sudo git tag -l
...
v3.1.7
v3.1.8
v3.1.8-RC
v3.1.8-RC2
v3.1.9
v3.2.0-RC4
...

# RC がついていない最新版を利用
$ sudo git checkout -b v3.1.9 refs/tags/v3.1.9
```

ソースコードを clone した後に、`yarn` コマンドを利用して、 GROWI に必要なパッケージをインストールします。

```shell
$ sudo /opt/growi/
$ sudo yarn
```

### 起動確認

パッケージのインストールが完了したら、起動確認を行います。

ここでは MongoDB と Elasticsearch が同一ホストで稼働していることを前提としています。

`MONGO_URI` と `ELASTICSEARCH_URI` は環境に合わせて適宜書き換えてください。

```shell
$ sudo \
MONGO_URI=mongodb://localhost:27017/growi \
ELASTICSEARCH_URI=http://localhost:9200/growi \
npm start

...
# 以下のメッセージが表示されるまでしばらく待つ
> growi@3.1.9 server:prod /opt/growi
> env-cmd config/env.prod.js node app.js
```

`http://<hostname or ip address>:3000/` にアクセスし、初回セットアップ画面が表示されることを確認します。

### systemd による自動起動の設定

(TODO)
* systemd の設定は Management Cookbook の「[systemd による自動起動](../management-cookbook/launch-with-systemd.md)」へのリンクを貼る

## リバースプロキシの設定

ここでは、起動した GROWI に対してリバースプロキシを行うための設定例を記載します。

### Apache
#### インストール

```shell
$ sudo apt-get update && sudo apt-get -y install apache2
```

#### 必要なモジュールの有効化
proxy, proxy_http, proxy_wstunnel module をインストールします

```shell
$ sudo a2enmod proxy proxy_http proxy_wstunnel
```

#### リバースプロキシの設定例

ここではリバースプロキシに関する箇所を抜粋して記載しています。

```apache
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

```shell
$ sudo systemctl enable apache2
```

### Nginx のインストールと設定
#### インストール
```shell
$ sudo apt-get update && sudo apt-get -y install nginx
```

#### リバースプロキシの設定例

ここでは HTTPS を利用する設定例を記載しています。
&lt;server&gt; など&lt;&gt;で囲まれている箇所は、適宜環境に合わせて設定してください。

```nginx
upstream growi {
    server localhost:3000;
}

map $http_upgrade $connection_upgrade {
    default Upgrade;
    ''      close;
}

server {
    listen 443 ssl spdy;
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

#### 自動起動の設定

```shell
$ sudo systemctl enable nginx
```