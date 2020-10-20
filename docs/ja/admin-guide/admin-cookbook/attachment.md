# ファイルアップロード設定

[[toc]]

## 概要

GROWI ページへのファイルアップロードに関する設定について紹介します。この設定が完了すると、ページへのファイルの添付、プロフィール画像の設定ができるようになります。

## アップロード先の指定

GROWI ページの添付ファイルの保存先は以下を利用できます。各詳細を参考に環境変数 `FILE_UPLOAD` にて指定してください。

- MongoDB
- AWS S3
- Google Cloud Storage
- ローカルファイルシステム

環境変数 `FILE_UPLOAD` が未指定の場合は管理画面のアプリ設定(`/admin/app/`)のファイルアップロード設定から AWS S3, GCS を選択できます。

::: danger
ファイル保存先を途中で変更すると、これまでにアップロードしたファイル等へのアクセスができなくなりますのでご注意ください。
:::

### MongoDB へのアップロード

GROWI データの保存先に指定している MongoDB に [GridFS](https://docs.mongodb.com/manual/core/gridfs/) を利用し、ファイルを保存します。

利用するには以下のように環境変数を設定し、GROWI を再起動してください。

- `FILE_UPLOAD` : 'mongodb'

### AWS S3 へのアップロード

AWS S3 Bucket にファイルを保存します。

環境変数 `FILE_UPLOAD` を 'aws' とするか、指定せずに GROWI のアプリ設定(`/admin/app`)内のファイルアップロード設定でファイルアップロード方法を `AWS` にすると利用できます。

AWS S3 Bucket の設定方法は[こちら](../management-cookbook/app-settings.html#aws-設定)を参考にしてください。

### Google Cloud Storage へのアップロード

Google Cloud Storage にファイルを保存します。

環境変数 `FILE_UPLOAD` を 'gcs' とするか、指定せずに GROWI のアプリ設定(`/admin/app`)内のファイルアップロード設定でファイルアップロード方法を `GCP` にすると利用できます。

[こちら](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) を参考に GCS の情報を取得し、以下の環境変数またはファイルアップロード設定のフォームに設定してください。

- `GCS_API_KEY_JSON_PATH` : [(GROWIのルートディレクトリから見た) GCP サービスアカウントキー の JSON ファイルのパス]
- `GCS_BUCKET` : [GCS のバケット名] 
- `GCS_UPLOAD_NAMESPACE` : [バケット内に作成するファイルアップロード用のディレクトリ名]

### ファイルシステムへのアップロード

GROWI サーバーから見たローカルファイルシステムにファイルを保存します。

利用するには以下のように環境変数を設定し、GROWI を再起動してください。

- `FILE_UPLOAD` : 'local'

##  添付ファイルのサイズ制限

以下の環境変数により、一度にアップロードできるファイルのサイズ上限と全ページに添付されているファイルの累計サイズの上限を設定することができます。いずれも単位は `bytes` です。デフォルトではいずれの値も `Infinity` となっており、ファイルサイズは制限されません。

- `MAX_FILE_SIZE` : [アップロード可能なファイルのサイズ上限(bytes)]
- `FILE_UPLOAD_TOTAL_LIMIT` : [アップロードされたファイルの累計サイズ上限(bytes)]