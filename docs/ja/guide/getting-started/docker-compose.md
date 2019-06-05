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

Docker for Windows を使用します。[https://www.docker.com/docker-windows](https://www.docker.com/docker-windows)の「DOWNLOAD FROM DOCKER STORE」というボタンをクリックし、次に「Please Login Download」をクリックします。ログイン画面に遷移するので事前に作成した Docker ID にてログインします。すると「Get Docker」ボタンからインストーラーをダウンロードできるのでダウンロードし、実行します。インストールが完了した後、Docker for Windows を起動すると、ログイン画面が表示されるのでログインしてください。これで docker コマンドが使えるようになります。

#### for Mac

Docker for Mac を使用します。[https://docs.docker.com/docker-for-mac/install/](https://docs.docker.com/docker-for-mac/install/) の「Download from Docker Hub」というボタンをクリックし、次に「Please Login Download」をクリックします。ログイン画面に遷移するので事前に作成した Docker ID にてログインします。すると「Get Docker」ボタンからインストーラーをダウンロードできるのでダウンロードし、実行します。以下のコマンドが実行可能であればインストール完了です。

```text
$ docker version
```

## growi-docker-compose

### インストール

[https://github.com/weseek/growi-docker-compose](https://github.com/weseek/growi-docker-compose) の「Clone or download」ボタンから、ソースコードをダウンロードします。

### GROWI の起動確認

コマンドプロンプト(もしくはターミナル)を開き、ダウンロードしたフォルダ内にて以下のコマンドを実行します。

```text
docker-compose up
```

`http://<hostname or ip address>:3000/` にアクセスし、初回セットアップ画面が表示されることを確認します。

## Elasticsearch plugin

### GROWI の全文探索機能に必要な Elasticsearch プラグインのインストール

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

