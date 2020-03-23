# ファイルアップロード設定

[[toc]]

## 概要

GROWI ページへのファイルアップロードに関する設定について紹介します。

## アップロード先の指定

GROWI ページの添付ファイルの保存先は、環境変数によりMongoDB GridFS、AWS S3、Google Cloud Storage、ローカルファイルシステムから選択できます。デフォルトでは AWS S3 が選択されています。

::: danger
ファイル保存先を途中で変更すると、これまでにアップロードしたファイル等へのアクセスができなくなりますのでご注意ください。
:::

### MongoDB GridFS へのアップロード

GROWI データの保存先に指定している MongoDB に [GridFS](https://docs.mongodb.com/manual/core/gridfs/) を利用し、ファイルを保存します。

利用するには以下のように環境変数を設定し、GROWI を再起動してください。

- `FILE_UPLOAD` : 'mongodb'

### AWS S3 へのアップロード

App 設定画面の AWS 設定にて登録されている AWS S3 Bucketにファイルを保存します。

利用するには以下のように環境変数を設定し、GROWI を再起動してください。`FILE_UPLOAD` が未設定の場合も AWS S3 へのファイルアップロードが採用されます。

- `FILE_UPLOAD` : 'aws' (Default)

AWS S3 Bucket のセットアップが未完了の場合は、[こちら](../management-cookbook/app-settings.html#aws-設定)を参考にセットアップしてください。

### Google Cloud Storage へのアップロード

環境変数で指定された Google Cloud Storage にファイルを保存します。

利用するには、[こちら](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) を参考に、GCP のサービスアカウントキー の JSON ファイルを用意した後、以下のように環境変数を設定し、GROWI を再起動してください。

- `FILE_UPLOAD` : 'gcs' 
- `GCS_API_KEY_JSON_PATH` : [(GROWIのルートディレクトリから見た) GCP サービスアカウントキー の JSON ファイルのパス]
- `GCS_BUCKET` : [GCS のバケット名] 

### ファイルシステムへのアップロード

GROWI サーバーから見たローカルファイルシステムにファイルを保存します。

利用するには以下のように環境変数を設定し、GROWI を再起動してください。

- `FILE_UPLOAD` : 'local' 

##  添付ファイルのサイズ制限

以下の環境変数により、一度にアップロードできるファイルのサイズ上限と全ページに添付されているファイルの累計サイズの上限を設定することができます。いずれも単位は `bytes` です。デフォルトではいずれの値も `Infinity` となっており、ファイルサイズは制限されません。

- `MAX_FILE_SIZE` : [アップロード可能なファイルのサイズ上限(bytes)]
- `FILE_UPLOAD_TOTAL_LIMIT` : [アップロードされたファイルの累計サイズ上限(bytes)]