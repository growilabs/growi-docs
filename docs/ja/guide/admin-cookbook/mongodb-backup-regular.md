# MongoDB の定期バックアップ

[[toc]]

## 前提条件

* バックアップ/リストアは、[weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) を利用します

#### 必要なもの

* docker
* バックアップファイルをアップロードするための AWS S3 バケット
  * S3 バケットへのアクセス権を持った IAM ユーザーのアクセスキーおよびシークレットキー

::: tip
事前に [MongoDB のバックアップ/リストア](mongodb-backup.md) ページを確認することをお勧めします
:::

## バックアップ用コンテナの起動

1. CRONMODE を true に設定したコンテナを起動します
    ```bash
    docker run --rm \
      -e MONGODB_HOST=<Target MongoDB Host> \
      -e AWS_ACCESS_KEY_ID=<Your IAM Access Key ID> \
      -e AWS_SECRET_ACCESS_KEY=<Your IAM Secret Access Key> \
      -e S3_TARGET_BUCKET_URL=<Target S3 Bucket URL (s3://...)> \
      -e CRONMODE=true \
      -e "CRON_EXPRESSION=0 4 * * *" \
      weseek/mongodb-awesome-backup
    ```
2. 対象となる MongoDB サーバーの全てのデータベースを、毎日 AM 4:00 にバックアップするコンテナが起動します

#### バックアップの世代管理

* (執筆者・PR募集)

::: tip
その他のオプションは [weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) を参照してください
:::

## docker-compose による管理

::: tip
GROWI を growi-[docker-compose](../getting-started/docker-compose.md) で管理している場合、更に簡単にバックアップ用コンテナを起動できます
:::

* [weseek/growi-docker-compose](https://github.com/weseek/growi-docker-compose/tree/master/examples/backup-mongodb-data) の [Example](https://github.com/weseek/growi-docker-compose/tree/master/examples/backup-mongodb-data) を参考に、以下の手順を行います

1. clone
    ```bash
    git clone https://github.com/weseek/growi-docker-compose.git growi
    cd growi
    ```
2. `docker-compose.override.yml` をルートディレクトリにコピー
    ```bash
    cp -p examples/backup-mongodb-data/docker-compose.override.yml .
    ```
3. `docker-compose.override.yml` を編集し、`CRON_EXPRESSION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `S3_TARGET_BUCKET_URL`に環境に合わせた値を入力します
    ```yaml
    (略)
    ...
    environment:
      - CRONMODE=true
      - CRON_EXPRESSION=0 4 * * *
      - AWS_ACCESS_KEY_ID=${Your IAM Access Key ID}
      - AWS_SECRET_ACCESS_KEY=${Your IAM Secret Access Key}
      - S3_TARGET_BUCKET_URL=s3://${Your Bucket Name}/
    ...
    (略)
    ```
4. ```bash
   docker-compose up
   ```
