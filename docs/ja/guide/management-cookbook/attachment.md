# ファイルのアップロード設定

[[toc]]

## 概要

GROWI ページの添付ファイルの保存先は、MongoDB GridFS、AWS S3、ローカルファイルシステムから選択できます。MongoDB GridFS の場合は GROWI データの保存先に指定している DB にファイルが保存されます。AWS S3 を保存先に指定するにはあらかじめ S3 Bucket のセットアップを行う必要があります。

## MongoDB GridFS へのアップロード

GROWI データの保存先に指定している MongoDB にファイルが保存されます。環境変数 `FILE_UPLOAD` を `mongodb` に設定し、GROWI を起動することで MongoDB にファイルがアップロードされるようになります。

## AWS S3 へのアップロード

### S3 Bucket のセットアップ手順

- AWS コンソールにサインインし、AWS S3 の[ダッシュボード](https://s3.console.aws.amazon.com/s3)にアクセスします。
- 登録したい S3 Bucket のリージョンとバケット名を確認します。
- [AWS IAM のセキュリティ認証情報ページ](https://console.aws.amazon.com/iam/home?#/security_credentials)にて、AWS アカウントのAccess Key ID および Secret Access Key を作成し、保管してください
- GROWI の App 管理画面のAWS設定に上記過程で確認した情報を入力してください。
- MinIOなど、S3互換APIを持つ他のオブジェクトストレージサービスを使用する場合は、そのエンドポイントの URL をカスタムエンドポイントに入力してください。

App 設定画面の AWS 設定にて登録されている AWS S3 Bucketにファイルが保存されます。環境変数 `FILE_UPLOAD` を `aws` に設定し、GROWI を起動することで AWS S3 にファイルがアップロードされるようになります。

## ファイルシステムへのアップロード

GROWI が立ち上がっているPCのファイルシステムにファイルが保存されます。環境変数 `FILE_UPLOAD` を `local` に設定し、GROWI を起動することでPCのファイルシステムの `public/uploads/attachment` ディレクトリ配下にファイルがアップロードされるようになります。