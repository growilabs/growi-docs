# docker-compose

[[toc]]

## 概要

この章では docker-compose を用いて GROWI を立ち上げる方法を紹介します。

セットアップには以下のソフトウェアが必要となるため、事前にインストールしてください。

* Docker
* docker-compose

## growi-docker-compose　のダウンロード

[https://github.com/weseek/growi-docker-compose](https://github.com/weseek/growi-docker-compose) の「Clone or download」ボタンから、ソースコードをダウンロードもしくは git コマンドにより clone します。

```text
git clone https://github.com/weseek/growi-docker-compose.git growi
```

## GROWI の起動確認

ダウンロードしたフォルダ内にて以下のコマンドを実行します。

```text
cd growi
docker-compose up
```

`http://localhost:3000/` にアクセスし、初回セットアップ画面が表示されることを確認します。

## localhost 以外からのアクセス


## Elasticsearch のメモリ容量を変更

## 関連ページ

- GROWI をアップグレードする

### v3.4.x へのアップグレード

[Upgrading to GROWI v3.4.x](https://docs.growi.org/guide/upgrading/34x.html) を参照してください。

### app コンテナのアップグレード

```text
# go to growi-docker-compose workdir
cd growi

# stop
docker-compose stop

# remove current container and images
docker-compose rm app
docker rmi weseek/growi:3

# rebuild app container image
git pull
docker-compose build

# start
docker-compose up
```

<!-- [docker-compose 上で立ち上がっている GROWI のアップグレード手順](https://docs.growi.org/guide/upgrading/upgrade-GROWI-on-docker-compose.html)  -->

- 複数の GROWI を立ち上げる

[growi-docker-compose Multiple Sites Example を利用した複数 app の起動手順](https://docs.growi.org/guide/admin-cookbook/multi-app.html)

- HTTPS プロキシを利用する

[growi-docker-compose with HTTPS proxy Example を利用した HTTPS プロキシの利用手順](https://docs.growi.org/guide/admin-cookbook/lets-encrypt.html)

- MongoDB にページデータとユーザーデータのバックアップをとる

[growi-docker-compose with backup MongoDB container example を利用した MongoDB へのバックアップ作成手順](https://docs.growi.org/guide/admin-cookbook/mongodb-backup-regular.html#manage-with-docker-compose)