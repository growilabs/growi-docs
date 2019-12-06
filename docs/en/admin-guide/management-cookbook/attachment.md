# File Upload Settings

[[toc]]

## Overview

This chapter introduces how to chenge the destination to upload attachment files. 

## File Upload Destination

Save files to MongoDB GridFS, AWS S3, Google Cloud Storage or local file system when upload attachment files to GROWI pages. This depends on environment variables.

::: danger
Warning: Change file upload destination, disable to access uploaded files.
:::

### Upload Files to MongoDB GridFS

GROWI データの保存先に指定している MongoDB に [GridFS](https://docs.mongodb.com/manual/core/gridfs/) を利用し、ファイルを保存します。

利用するには以下のように環境変数を設定し、GROWI を再起動してください。

- `FILE_UPLOAD` : 'mongodb'

### Upload Files to AWS S3

App 設定画面の AWS 設定にて登録されている AWS S3 Bucketにファイルを保存します。

利用するには以下のように環境変数を設定し、GROWI を再起動してください。`FILE_UPLOAD` が未設定の場合も AWS S3 へのファイルアップロードが採用されます。

- `FILE_UPLOAD` : 'aws' (Default)

AWS S3 Bucket のセットアップが未完了の場合は、[こちら](../management-cookbook/aws-s3-bucket-setting.md)を参考にセットアップしてください。

### Upload Files to Google Cloud Storage

環境変数で指定された Google Cloud Storage にファイルを保存します。

利用するには、[こちら](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) を参考に、GCP のサービスアカウントキー の json ファイルを用意した後、ファイルシステム以下のように環境変数を設定し、GROWI を再起動してください。

- `FILE_UPLOAD` : 'gcs' 
- `GCS_API_KEY_JSON_PATH` : [(GROWIのルートディレクトリから見た) GCP サービスアカウントキー の jsonファイルのパス]
- `GCS_BUCKET` : [GCS のバケット名] 

### Upload Files to Local File System

GROWI サーバーから見たローカルファイルシステムにファイルを保存します。

利用するには以下のように環境変数を設定し、GROWI を再起動してください。

- `FILE_UPLOAD` : 'local' 

##  Limit File Size 

以下の環境変数により、一度にアップロードできるファイルのサイズ上限と全ページに添付されているファイルの累計サイズの上限を設定することができます。いずれも単位は `bytes` です。デフォルトではいずれの値も `Infinity` となっており、ファイルサイズは制限されません。

- `MAX_FILE_SIZE` : [アップロード可能なファイルのサイズ上限(bytes)]
- `FILE_UPLOAD_TOTAL_LIMIT` : [アップロードされたファイルの累計サイズ上限(bytes)]