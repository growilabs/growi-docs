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
docker-compose up
```

`http://localhost:3000/` にアクセスし、初回セットアップ画面が表示されることを確認します。

## localhost 以外からのアクセス

## Elasticsearch のメモリ容量を変更

## アップグレード

[Upgrade GROWI on docker-compose](../upgrading/upgrade-GROWI-on-docker-compose.md) を参照してください。