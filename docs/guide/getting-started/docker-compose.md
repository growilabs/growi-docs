# docker-compose

[[toc]]

## Overview

This chapter introduces the installation process for GROWI with docker-compose.

Software needed for Setup are listed below.

* Docker
* docker-compose

## Download growi-docker-compose

Download or clone source code files from [https://github.com/weseek/growi-docker-compose](https://github.com/weseek/growi-docker-compose) 

```text
git clone https://github.com/weseek/growi-docker-compose.git growi
```

## build GROWI

Excute these commands in downloaded directory

```text
cd growi
docker-compose up
```

Access to `http://localhost:3000/` , if you visit the first setting step (`/installer`), GROWI is starting.

## allow to access GROWI from other hosts

you can allow to access GROWI from other hosts with changing `ports` in `docker-compose.yml`.

**Before**

```text
services:
  app:
    ports:
      - 127.0.0.1:3000:3000
```

**After**

```text
services:
  app:
    ports:
      - 3000:3000
```

## Elasticsearch のメモリ容量を変更

メモリに十分な空き容量がある場合、`docker-compose.yml` ファイル内の `ES_JAVA_OPTS` の値を変更することで、Elasticsearch のヒープ領域を増やすことができます。

```text
environment:
  - "ES_JAVA_OPTS=-Xms2g -Xmx2g"
```

## GROWI のアップグレード

### GROWI を v3.4.x にアップグレードする

以下のページで、v3.3.x 以下の GROWI を利用してる人向けに v3.4.x へのアップグレードの手順を説明しています。

[GROWI v3.4.x へのアップグレード](../upgrading/34x.html)

### コンテナのアップグレード

`growi-docker-compose` をダウンロードしたフォルダにて、コンテナを停止します。

```text
cd growi
docker-compose stop
```

既存の Docker コンテナと Docker イメージを削除します。

```text
docker-compose rm app　mongodb elasticseach
docker rmi weseek/growi:3
```

最新版を pull し、Docker イメージを作成した後、コンテナを立ち上げます。
```text
git pull
docker-compose build
docker-compose up
```

起動後、GROWI App の管理画面の全文検索管理ページ( `/admin/search` )で、インデックスを再構築してください。

## 関連ページ

- 複数の GROWI を立ち上げる

[growi-docker-compose Multiple Sites Example を利用した複数 app の起動手順](../admin-cookbook/multi-app.html)

- HTTPS プロキシを利用する

[growi-docker-compose with HTTPS proxy Example を利用した HTTPS プロキシの利用手順](../admin-cookbook/lets-encrypt.html)

- MongoDB にページデータとユーザーデータのバックアップをとる

[growi-docker-compose with backup MongoDB container example を利用した MongoDB へのバックアップ作成手順](../admin-cookbook/mongodb-backup-regular.html#manage-with-docker-compose)

- HackMD による複数人同時編集機能を利用する

[HackMD(CodiMD) Integration Example を利用した HackMD 統合](../admin-cookbook/integrate-with-hackmd.html#%E6%97%A2%E5%AD%98%E3%81%AE-hackmd-codimd-%E3%81%A8%E9%80%A3%E6%90%BA%E3%81%99%E3%82%8B)