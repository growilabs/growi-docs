# docker-compose

[[toc]]

## 概要

この章では docker-compose を用いて GROWI を立ち上げる方法を紹介します。

セットアップに必要となるソフトウェアは以下の通りです。

* node.js 10.x \(DO NOT USE 11.x\)
* npm 6.x
* yarn
* Git
* Docker
* growi-docker-compose
* Elasticsearch plugin

## node.js 10.x & npm のインストール

### nodist を利用する(for Windows)
[https://github.com/marcelklehr/nodist/releases](https://github.com/marcelklehr/nodist/releases) からインストール用ファイル NodistSetup-vX.X.X.exe をダウンロードし、実行します。

コマンドプロンプトにて、以下のコマンドが使用可能であることを確認できれば、インストール完了です。

```text
$ nodist -v
0.9.1
```

インストールが完了したら、node.js および npm をインストールします。

```text
$ nodeist global 10
```

続いて、[https://yarnpkg.com/ja/docs/install](https://yarnpkg.com/ja/docs/install) から Windows版の yarn インストール用ファイルをダウンロードし、実行します。

Node.js, npm, yarn のインストールが完了したら、インストールしたバージョンを確認しましょう。

```text
$ node -v
v10.15.3
$ npm -v
6.4.1
$ yarn -v
1.16.1
```


### nodebrew を利用する(for MacOS)
まず、homebrew をインストールします。[https://brew.sh/index_ja](https://brew.sh/index_ja) の記載の通り、以下のスプリクトをターミナルに貼り付けて実行します。

```text
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

homebrew のインストールが完了したら、以下のコマンドをターミナルにて実行し、nodebrew をインストールします。

```text
$ brew install nodebrew
```

以下のコマンドを実行し、help が表示されたらインストール完了です。
```text
$ nodebrew help
nodebrew 1.0.0

Usage:
    nodebrew help                         Show this message
    nodebrew install <version>            Download and install <version> (compile from source)
    nodebrew install-binary <version>     Download and install <version> (binary file)
    nodebrew uninstall <version>          Uninstall <version>
    nodebrew use <version>                Use <version>
    nodebrew list                         List installed versions
    nodebrew ls                           Alias for `list`
    nodebrew ls-remote                    List remote versions
    nodebrew ls-all                       List remote and installed versions
    nodebrew alias <key> <value>          Set alias
    nodebrew unalias <key>                Remove alias
    nodebrew clean <version> | all        Remove source file
    nodebrew selfupdate                   Update nodebrew
    nodebrew migrate-package <version>    Install global NPM packages contained in <version> to current version
    nodebrew exec <version> -- <command>  Execute <command> using specified <version>

Example:
    # install from binary
    nodebrew install-binary v0.10.22

    # use a specific version number
    nodebrew use v0.10.22

    # io.js
    nodebrew install-binary io@v1.0.0
    nodebrew use io@v1.0.0
```

インストールが完了したら、以下のコマンドを実行し、セットアップを行います。

```text
nodebrew setup
```

続いて以下のコマンドを実行し、PATH の設定を行います。

```text
$ echo "export PATH=\$HOME/.nodebrew/current/bin:\$PATH" >> ~/.bash_profile
$ source ~/.bash_profile
```

( 上記では .bash_profile に設定を記述していますが、環境に合わせて適切なファイルを指定してください。)

nodebrew を用いて、Node.js と npm をインストールします。

```text
nodebrew install-binary v10.x
```

続いて、homebrew で Yarn をインストールします。

```text
brew install yarn
```

Node.js, npm, yarn のインストールが完了したら、インストールしたバージョンを確認しましょう。

```text
$ node -v
v10.15.3
$ npm -v
6.4.1
$ yarn -v
1.16.1
```

###  NodeSource repository を利用する(for CentOS, Ubuntu)

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

## Git

### インストール

#### for Windows

#### for Mac

## Docker

### Docker ID の作成

Docker をインストールするにあたり、Docker ID を作成する必要があるので、事前に [https://store.docker.com/signup](https://store.docker.com/signup) にてサインアップを行いアカウントを作成してください。

### インストール

#### for Windows

Docker for Windows を使用します。[https://www.docker.com/docker-windows](https://www.docker.com/docker-windows)の「DOWNLOAD FROM DOCKER STORE」というボタンをクリックし、次に「Please Login Download」をクリックします。ログイン画面に遷移するので事前に作成した Docker ID にてログインします。すると「Get Docker」ボタンからインストーラーをダウンロードできるのでダウンロードし、実行します。インストールが完了した後、Docker for Windows を起動すると、ログイン画面が表示されるのでログインしてください。

#### for Mac

Docker for Mac を使用します。[https://docs.docker.com/docker-for-mac/install/](https://docs.docker.com/docker-for-mac/install/) の「Download from Docker Hub」というボタンをクリックし、次に「Please Login Download」をクリックします。ログイン画面に遷移するので事前に作成した Docker ID にてログインします。すると「Get Docker」ボタンからインストーラーをダウンロードできるのでダウンロードし、実行します。以下のコマンドが実行可能であればインストール完了です。

```text
$ docker version
```

## growi-docker-compose

### インストール

[https://github.com/weseek/growi-docker-compose](https://github.com/weseek/growi-docker-compose) からソースコードを取得します。

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