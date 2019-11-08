# ファイルのアップロード設定

[[toc]]

## 概要

- GROWI ページの添付ファイルの保存先は、環境変数によりMongoDB GridFS、AWS S3、Google Cloud Storage、ローカルファイルシステムから選択できます。
- ファイル保存先を途中で変更すると、これまでにアップロードしたファイル等へのアクセスができなくなりますのでご注意ください。

## MongoDB GridFS へのアップロード

- GROWI データの保存先に指定している MongoDB にファイルが保存されます。
- 環境変数 `FILE_UPLOAD` に `mongodb` を設定し、GROWI を起動することで MongoDB にファイルがアップロードされるようになります。

## AWS S3 へのアップロード

- App 設定画面の AWS 設定にて登録されている AWS S3 Bucketにファイルが保存されます。
- 環境変数 `FILE_UPLOAD` の `aws` を設定し、GROWI を起動することで GROWI に登録してある AWS S3 Bucket の `attachment` フォルダ配下にファイルがアップロードされるようになります。
- AWS S3 Bucket のセットアップが未完了の場合は、[こちら](../management-cookbook/aws-s3-bucket-setting.md)を参考にセットアップしてください。

## Google Cloud Storage へのアップロード

- 環境変数で指定された Google Cloud Storage にファイルが保存されます。
- 環境変数 `FILE_UPLOAD` に `gcs`、 `GCS_API_KEY_JSON_PATH` に GCP API の json パス、`GCS_BUCKET` に GCS Bucket 名を設定し、GROWI を起動することで MongoDB にファイルがアップロードされるようになります。

## ファイルシステムへのアップロード

- GROWI が立ち上がっているPCのファイルシステムにファイルが保存されます。
- 環境変数 `FILE_UPLOAD` に `local` を設定し、GROWI を起動することでPCのファイルシステムの `public/uploads/attachment` ディレクトリ配下にファイルがアップロードされるようになります。