# MongoDB のアップグレード

[[toc]]

::: warning
この項目の内容は、以下の GROWI バーションアップ時に必要になることがあります。

- [v4.2.x へのアップグレード](../upgrading/42x.md)
- [v3.4.x へのアップグレード](../upgrading/34x.md)

:::

GROWI のバージョン v4.1.x から v4.2.x にアップグレードする場合は、以下のセクションを上から順に一つずつ操作する必要があります。

## MongoDB v3.4 から v3.6 へのアップグレード

v3.4 から v3.6 へのアップグレードは[こちら](https://docs.mongodb.com/manual/release-notes/3.6-upgrade-standalone/index.html)を参照してください。

## MongoDB v3.6 から v4.0 へのアップグレード

v3.6 から v4.0 へのアップグレードは[こちら](https://docs.mongodb.com/manual/release-notes/4.0-upgrade-standalone/index.html)を参照してください。

## MongoDB v4.0 から v4.2 へのアップグレード

v4.0 から v4.2 へのアップグレードは[こちら](https://docs.mongodb.com/manual/release-notes/4.2-upgrade-standalone/index.html)を参照してください。

## MongoDB v4.2 から v4.4 へのアップグレード

v4.2 から v4.4 へのアップグレードは[こちら](https://docs.mongodb.com/manual/release-notes/4.4-upgrade-standalone/index.html)を参照してください。

## 付録A: docker ユーザーのためのアップグレード手順例

以下は MongoDB を v4.2 から v4.4 にアップグレードする場合の例です。  
実際の MongoDB コンテナ名を `MONGO_CONTAINER_NAME` に設定してください。

1. MongoDB v4.2 起動中に以下を実行

    ```bash
    export MONGO_VERSION=4.2
    export MONGO_CONTAINER_NAME=mymongodb
    docker exec $MONGO_CONTAINER_NAME mongo --eval 'db.adminCommand( { setFeatureCompatibilityVersion: "'$MONGO_VERSION'" } )'
    ```

1. MongoDB v4.2 を停止
1. MongoDB v4.4 を起動

## 付録B: docker-compose ユーザーのためのアップグレード手順例

以下は MongoDB を v4.2 から v4.4 にアップグレードする場合の例です。  
実際の MongoDB サービス名を `MONGO_CONTAINER_NAME` に設定してください。

1. MongoDB v4.2 起動中に以下を実行

    ```bash
    export MONGO_VERSION=4.2
    export MONGO_SERVICE_NAME=mymongodb
    docker-compose exec $MONGO_SERVICE_NAME mongo --eval 'db.adminCommand( { setFeatureCompatibilityVersion: "'$MONGO_VERSION'" } )'
    ```

1. MongoDB v4.2 を停止
1. yml 内の MongoDB の指定バージョンを変更
1. MongoDB v4.4 を起動
