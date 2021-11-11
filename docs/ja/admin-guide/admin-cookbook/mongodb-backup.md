# MongoDB のバックアップ/リストア

[[toc]]

## 概要

この章では[weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) を利用したバックアップとリストアの方法を紹介します。

### 必要なもの

* Docker
* バックアップファイルをアップロードするための AWS S3 バケット
  * S3 バケットへのアクセス権を持った IAM ユーザーのアクセスキーおよびシークレットキー

## AWS S3 を利用する方法

### 事前作業

[weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) は、シェルスクリプトを実行するテンポラリなコンテナを作成してバックアップ/リストアを行います。
ただし、そのコンテナ内から MongoDB サーバーへ疎通できるように、以下に示す docker コマンドオプションを追加する必要があります。

#### MongoDB が docker コンテナで動作している場合

コンテナ名を調べる下記コマンドを実行し、コンテナ名\(`${container}`\)を使って`--link ${container}:mongo` オプションを追加してください。

##### e.g.

`docker ps` コマンドでコンテナ名を調べます。

```bash
vagrant@ubuntu-xenial:/etc/docker-compose$ sudo docker ps
CONTAINER ID        IMAGE                           COMMAND                  CREATED             STATUS                   PORTS               NAMES
21a10f879cba        mongo                           "docker-entrypoint.s…"   11 minutes ago      Up 11 minutes            27017/tcp           serene_swartz
man
```

上記コマンドの結果、コンテナ名は `serene_swartzman` と分かるので、追加するオプションは `--link serene_swartz:mongo` となります。

#### MongoDB が docker コンテナ以外で動作している場合

##### Docker ホストの OS が Linux の場合

`--network host` オプションを追加することで、ホストと同一のネットワークを利用できます。

##### Docker for Mac の場合

* (TBD: 執筆者募集)

##### Docker for Windows の場合

* (TBD: 執筆者募集)

### バックアップ手順

1. [weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) コンテナを、クリーンアップオプション\(`--rm`\)付きで実行します

    ```bash
    docker run --rm \
      -e MONGODB_HOST=<Target MongoDB Host> \
      -e AWS_ACCESS_KEY_ID=<Your IAM Access Key ID> \
      -e AWS_SECRET_ACCESS_KEY=<Your IAM Secret Access Key> \
      -e S3_TARGET_BUCKET_URL=<Target S3 bucket URL (s3://...)> \
      weseek/mongodb-awesome-backup
    ```

2. 対象となる MongoDB サーバーの全てのデータベースのデータを取得し、 `backup-YYYYMMdd.tar.bz2`として指定された S3 バケットにアップロードされます

::: tip
その他のオプションは [weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) を参照してください
:::

### リストア手順

1. [weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) コンテナを、クリーンアップオプション\(`--rm`\)付きで実行します

    ```bash
    docker run --rm \
      -e MONGODB_HOST=<Target MongoDB Host> \
      -e AWS_ACCESS_KEY_ID=<Your IAM Access Key ID> \
      -e AWS_SECRET_ACCESS_KEY=<Your IAM Secret Access Key> \
      -e S3_TARGET_BUCKET_URL=<Target S3 bucket URL (s3://...)> \
      -e S3_TARGET_FILE=backup-YYYYMMdd.tar.bz2 \
      weseek/mongodb-awesome-backup restore
    ```

2. 指定された S3 バケット配下にある指定ファイル\(上記例では `backup-YYYYMMdd.tar.bz2` \)がリストアされます
3. GROWI を再起動してください

::: tip
その他のオプションは [weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) を参照してください
:::

## Google Cloud Platform を利用する方法

* (TBD: 執筆者募集)
