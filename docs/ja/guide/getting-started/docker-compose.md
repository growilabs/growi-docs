# docker-compose

[[toc]]

## 概要

この章では docker-compose を用いて GROWI を立ち上げる方法を紹介します。

セットアップに必要となるソフトウェアは以下の通りです。

* Docker
* growi-docker-compose
* Elasticsearch plugin (任意)

Elasticsearch plugin は全文検索機能を利用する場合に必要となります。

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

