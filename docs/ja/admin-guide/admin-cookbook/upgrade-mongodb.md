# MongoDB のアップグレード

[[toc]]

::: warning
この項目の内容は、以下の GROWI バーションアップ時に必要な場合があります。

- [v6.1.x へのアップグレード](/ja/admin-guide/upgrading/61x.html)
- [v4.2.x へのアップグレード](/ja/admin-guide/upgrading/42x.html)
- [v3.4.x へのアップグレード](/ja/admin-guide/upgrading/34x.html)

:::

<!-- textlint-disable weseek/no-doubled-joshi -->
<!-- textlint-disable weseek/sentence-length -->
GROWI のバージョン v4.1.x から v4.2.x にアップグレードする場合は、以下のセクションのうち、「v3.4からv3.6(またはv3.6からv4.0)」から「v4.2からv4.4」までを上から順に一つずつ操作する必要があります。

GROWI のバージョン v6.0.x から v6.1.x にアップグレードする場合は、以下のセクションのうち、「v4.4からv5.0」から「v5.0からv6.0」までを上から順に一つずつ操作する必要があります。
<!-- textlint-enable weseek/sentence-length -->
<!-- textlint-enable weseek/no-doubled-joshi -->

## MongoDB v3.4 から v3.6 へのアップグレード

::: tip Note
GROWI v3.3以前を利用したことがない場合、本セクションは飛ばして構いません。
::: 

v3.4 から v3.6 へのアップグレードは[こちら](https://docs.mongodb.com/manual/release-notes/3.6-upgrade-standalone/index.html)を参照してください。

## MongoDB v3.6 から v4.0 へのアップグレード

v3.6 から v4.0 へのアップグレードは[こちら](https://docs.mongodb.com/manual/release-notes/4.0-upgrade-standalone/index.html)を参照してください。

## MongoDB v4.0 から v4.2 へのアップグレード

v4.0 から v4.2 へのアップグレードは[こちら](https://docs.mongodb.com/manual/release-notes/4.2-upgrade-standalone/index.html)を参照してください。

## MongoDB v4.2 から v4.4 へのアップグレード

v4.2 から v4.4 へのアップグレードは[こちら](https://docs.mongodb.com/manual/release-notes/4.4-upgrade-standalone/index.html)を参照してください。

## MongoDB v4.4 から v5.0 へのアップグレード

v4.4 から v5.0  へのアップグレードは[こちら](https://docs.mongodb.com/manual/release-notes/5.0-upgrade-standalone/index.html)を参照してください。

## MongoDB v5.0 から v6.0 へのアップグレード

v5.0 から v6.0 へのアップグレードは[こちら](https://docs.mongodb.com/manual/release-notes/6.0-upgrade-standalone/index.html)を参照してください。

## 付録A: docker ユーザーのためのアップグレード手順例

以下は MongoDB を v5.0 から v6.0 にアップグレードする場合の例です。  
実際の MongoDB コンテナ名を `MONGO_CONTAINER_NAME` に設定してください。

1. MongoDB v5.0 起動中に以下を実行

    ```bash
    export MONGO_VERSION=5.0
    export MONGO_CONTAINER_NAME=mymongodb
    docker exec $MONGO_CONTAINER_NAME mongo --eval 'db.adminCommand( { setFeatureCompatibilityVersion: "'$MONGO_VERSION'" } )'
    ```

1. MongoDB v5.0 を停止
1. MongoDB v6.0 を起動

## 付録B: docker-compose ユーザーのためのアップグレード手順例

以下は MongoDB を v5.0 から v6.0 にアップグレードする場合の例です。  
実際の MongoDB サービス名を `MONGO_SERVICE_NAME` に設定してください。

1. MongoDB v5.0 起動中に以下を実行

    ```bash
    export MONGO_VERSION=5.0
    export MONGO_SERVICE_NAME=mymongodb
    docker-compose exec $MONGO_SERVICE_NAME mongo --eval 'db.adminCommand( { setFeatureCompatibilityVersion: "'$MONGO_VERSION'" } )'
    ```

1. MongoDB v5.0 を停止
1. yml 内の MongoDB の指定バージョンを変更
1. MongoDB v6.0 を起動
