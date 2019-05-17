# CentOS

[[toc]]

## Overview

In this chapter we will introduce the installation process for GROWI on CentOS 7. Installation on CentOS 6 has not been verified.

Software needed for Setup are listed below.

* node.js 8.x \(DO NOT USE 9.x\)
* npm 6.x
* yarn
* MongoDB 3.x
* \(Option\) Elasticsearch 5.x
* \(Option\) systemd
* \(Option\) Apache or nginx

Software listed as 'Option' are not required, but in this document all are used, from constructing an environment using Apache or nginx as a reverse proxy for the full-text search feasible Growi, to simultaneous activation with the host using systemd.

## Install node.js 8.x & npm

### NodeSource repository を利用する

[https://rpm.nodesource.com/](https://rpm.nodesource.com/)からNode.js のインストールスクリプトを取得します。作業ディレクトリはホームディレクトリです。

```text
$ cd ~
$ curl -sL https://rpm.nodesource.com/setup_8.x -o nodesource_setup.sh
```

取得したスクリプトを実行します。

```text
$ sudo bash nodesource_setup.sh
```

これで `yum` 経由で node.js が取得できるようになったので、 `yum` コマンドでインストールを行います。

```text
$ sudo yum install -y nodejs
```

GROWI では yarn を用いたパッケージインストールを利用するため、ここで `yarn` コマンドをインストールしておきます。

```text
$ curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
$ sudo yum install -y yarn
```

Node.js, npm, yarn のインストールが完了したら、インストールしたバージョンを確認しましょう。

```text
$ node -v
v8.15.1
$ npm -v
6.4.1
$ yarn -v
1.15.2
```

## Elasticsearch

### インストール

[公式ページ](https://www.elastic.co/guide/en/elasticsearch/reference/current/rpm.html) に従い、インストールを進めます。 ここでは Elasticsearch 5.x をインストールするために若干の修正をしています

まず、 Elasticsearch を実行できるように JDK8 をインストールします。

```text
$ sudo yum install java-1.8.0-openjdk
```

パッケージをインストールするために、Elasticsearch レポジトリの GPG キーを追加します。

```text
$ sudo rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch
```

Elasticsearch のレポジトリを追加します。以下の内容を`/etc/yum.repos.d/elasticsearch.repo` に書き込みます。

```text
[elasticsearch-5.x]
name=Elasticsearch repository for 5.x packages
baseurl=https://artifacts.elastic.co/packages/5.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=1
autorefresh=1
type=rpm-md
```

これで、yum 経由で Elasticsearch がインストールできるようになったため、インストールを行います。

```text
$ sudo yum install -y elasticsearch
```

インストールが完了したら、Elasticsearch に割り当てるメモリを調整します。メモリの割り当ては個人ユースであれば 256MB で十分です。チーム規模、ページの量に応じて変更してください。

```text
$ sudo vim /etc/elasticsearch/jvm.options
# 編集前
-Xms2g
-Xmx2g

# 編集後
-Xms256m
-Xmx256m
```

インストールが完了したら、 パッケージのバージョンを確認します。

```text
$ yum list installed | grep elasticsearch
elasticsearch.noarch                 5.6.16-1                        @elasticsearch-5.x
```

`systemctl` コマンドを使って、Elasticsearch を起動します。

```text
$ sudo systemctl start elasticsearch
```

elsticsearch の自動起動設定を有効化します。

```text
$ sudo systemctl enable elasticsearch
```

正常に起動しているか確認を行います。

```text
$ sudo systemctl status elasticsearch
```

### GROWI に必要な Elasticsearch プラグインのインストール

以下の Elasticsearch plugin をインストールします

* [Japanese \(kuromoji\) Analysis plugin](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-kuromoji.html)
* [ICU Analysis Plugin](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu.html)

まずは、Elasticsearch plugin をインストールするために利用するコマンドを検索します

```text
$ rpm -ql elasticsearch | grep bin | grep plugin
/usr/share/elasticsearch/bin/elasticsearch-plugin
```

上記で出力されたコマンドを利用して、 analysis-kuromoji plugin と analysis-icu plugin をインストールします

```text
# analysis-kuromoji のインストール
$ sudo /usr/share/elasticsearch/bin/elasticsearch-plugin install analysis-kuromoji

# analysis-icu plugin のインストール
$ sudo /usr/share/elasticsearch/bin/elasticsearch-plugin install analysis-icu
```

## MongoDB

### インストール

[公式ページ](https://docs.mongodb.com/v3.6/tutorial/install-mongodb-on-red-hat/) に従ってインストールを実施します。 バージョンは、MongoDB 3.6 です。

レポジトリの追加を行います。 `/etc/yum.repos.d/mongodb-org-3.6.repo` を作成し、以下の内容を書き込みます。

```text
[mongodb-org-3.6]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.6/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-3.6.asc
```

これで、yum 経由で MongoDB がインストールできるようになったため、インストールを行います。

```text
$ sudo yum install -y mongodb-org
```

インストールが完了したら、 パッケージのバージョンを確認します。

```text
$ yum list installed | grep mongodb
mongodb-org.x86_64                   3.6.11-1.el7               @mongodb-org-3.6
mongodb-org-mongos.x86_64            3.6.11-1.el7               @mongodb-org-3.6
mongodb-org-server.x86_64            3.6.11-1.el7               @mongodb-org-3.6
mongodb-org-shell.x86_64             3.6.11-1.el7               @mongodb-org-3.6
mongodb-org-tools.x86_64             3.6.11-1.el7               @mongodb-org-3.6
```

`systemctl` コマンドを使って、MongoDB を起動します。

```text
$ sudo systemctl start mongod
```

MongoDB の自動起動設定を有効化します。

```text
$ sudo systemctl enable mongod
```

正常に起動しているか確認を行います。

```text
$ sudo systemctl status mongod
```

## GROWI

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
v3.3.7
v3.3.8
v3.3.9
v3.4.0
v3.4.1
v3.4.2
...

# RC がついていない最新版を利用
$ sudo git checkout -b v3.4.2 refs/tags/v3.4.2
```

ソースコードを clone した後に、`yarn` コマンドを利用して、 GROWI に必要なパッケージをインストールします。

```text
$ cd /opt/growi
$ sudo yarn
```

### 起動確認

パッケージのインストールが完了したら、起動確認を行います。

ここでは MongoDB と Elasticsearch が同一ホストで稼働していることを前提としています。

`MONGO_URI` と `ELASTICSEARCH_URI` は環境に合わせて適宜書き換えてください。

```text
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

「[systemd による自動起動](../admin-cookbook/launch-with-systemd.md)」を参照して下さい。

## リバースプロキシの設定

ここでは、起動した GROWI に対してリバースプロキシを行うための設定例を記載します。

### Apache

#### インストール

```text
$ sudo yum install httpd
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
$ sudo systemctl enable httpd
```

### Nginx のインストールと設定

#### インストール

nginx のレポジトリを追加します。`/etc/yum.repos.d/nginx.repo`を作成し、以下の内容を書き込みます。

```text
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1
```

これで、yum 経由で nginx がインストールできるようになったため、インストールを行います。

```text
$ sudo yum install -y nginx
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

```text
$ sudo systemctl enable nginx
```