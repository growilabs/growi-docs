# MongoDB のバックアップ/リストア

## 前提条件

* バックアップ/リストアは、[weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) を利用します

#### 必要なもの

* docker
* バックアップファイルをアップロードするための AWS S3 バケット
  * S3 バケットへのアクセス権を持った IAM ユーザーのアクセスキーおよびシークレットキー

## バックアップ手順

1. [weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) コンテナを、クリーンアップオプション\(`--rm`\)付きで実行します
   1. ```text
      docker run --rm \
        -e MONGODB_HOST=<Target MongoDB Host> \
        -e AWS_ACCESS_KEY_ID=<Your IAM Access Key ID> \
        -e AWS_SECRET_ACCESS_KEY=<Your IAM Secret Access Key> \
        -e S3_TARGET_BUCKET_URL=<Target S3 Bucket URL (s3://...)> \
        weseek/mongodb-awesome-backup
      ```
2. 対象となる MongoDB サーバーの全てのデータベースのデータを取得し、 `backup-YYYYMMdd.tar.bz2`として指定された S3 バケットにアップロードされます

{% hint style="info" %}
その他のオプションは [weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) を参照してください
{% endhint %}

## リストア手順

1. [weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) コンテナを、クリーンアップオプション\(`--rm`\)付きで実行します
   1. ```bash
      docker run --rm \
        -e MONGODB_HOST=<Target MongoDB Host> \
        -e AWS_ACCESS_KEY_ID=<Your IAM Access Key ID> \
        -e AWS_SECRET_ACCESS_KEY=<Your IAM Secret Access Key> \
        -e S3_TARGET_BUCKET_URL=<Target S3 Bucket URL (s3://...)> \
        -e S3_TARGET_FILE=backup-YYYYMMdd.tar.bz2 \
        weseek/mongodb-awesome-backup restore
      ```
2. 指定された S3 バケット配下にある指定ファイル\(上記例では `backup-YYYYMMdd.tar.bz2` \)がリストアされます
3. GROWI を再起動してください

{% hint style="info" %}
その他のオプションは [weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) を参照してください
{% endhint %}



