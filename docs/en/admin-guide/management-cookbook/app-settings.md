# AppSettings (TBD)



Make settings for uploaded attachments to the GROWI page.
<!-- [TODO: English translation by gw4283] -->

## App settings

### File Upload Settings

<!-- GROWI has settings that allow you to upload files except images to your page.

![appsettings18](./images/appsettings18.png)

If you do not check here, you will not be able to upload files except
 images when editing a wiki page.

Also, if this check box cannot be checked as shown in the image below,
[File uplooad settings](#ファイルアップロード設定)are not compleated.

![appsettings7](./images/appsettings7.png)

You will be able to upload the file by setting the file upload.

![appsettings8](./images/appsettings8.png)

In case of the following view, file upload is not working.
![appsettings9](./images/appsettings9.png) -->

## ファイルアップロード設定

GROWI ページへの添付ファイルのアップロードに関する設定を行います。

<!-- ### 利用可能な保存先

添付ファイルの保存先は以下を利用できます。

- Amazon S3
- Google Cloud Storage
- MongoDB
- ローカルファイルシステム

#### Amazon S3 へのアップロード

Amazon S3 の Bucket にファイルを保存します。

Amazon S3 の設定方法は[こちら](../management-cookbook/app-settings.html#amazon-s3-bucket-のセットアップ)を参考にしてください。

#### Google Cloud Storage へのアップロード

Google Cloud Storage の Bucket にファイルを保存します。

Google Cloud Storage の設定方法は[こちら](../management-cookbook/app-settings.html#google-cloud-storage-のセットアップ)を参考にしてください。

#### MongoDB へのアップロード

GROWI データの保存先に指定している MongoDB に [GridFS](https://docs.mongodb.com/manual/core/gridfs/) を利用し、ファイルを保存します。

#### ファイルシステムへのアップロード

GROWI サーバーから見たローカルファイルシステムにファイルを保存します。

### 添付ファイル保存先の変更

保存先はアプリ設定のファイルアップロード設定にて変更できます。

::: danger
ファイル保存先を途中で変更すると、これまでにアップロードしたファイル等へのアクセスができなくなりますのでご注意ください。
:::

![appsettings18](./images/appsettings18.png)

::: warning
ファイルアップロード先が環境変数 `FILE_UPLOAD_USES_ONLY_ENV_VAR_FOR_FILE_UPLOAD_TYPE` によって固定されている場合、ここでのファイルアップロード先の変更はできません。詳細は[こちら](../admin-cookbook/attachment)を参照してください。
:::

Amazon S3, Google Cloud Storage を利用する場合はそれぞれ設定が必要です。下記を参照に設定を完了してください。

### Amazon S3 Bucket のセットアップ

Amazon S3(Amazon Simple Storage Service) への接続設定の手順を紹介します。

#### AWS アカウント情報の取得

1. [AWS マネジメントコンソール](https://aws.amazon.com/jp/console/) にサインインし、
ナビバー右上のアカウント名をクリックすると表示されるドロップダウンから、
 [マイセキュリティ資格情報](https://console.aws.amazon.com/iam/home?#/security_credentials) を選択します。
2. 「アクセスキー(アクセスキー ID とシークレットアクセスキー)」を展開し、
AWS アカウントのAccess Key ID および Secret Access Key を作成、保管します。
3. 「アカウント ID」を展開し、正規ユーザー ID を確認します。

#### Amazon S3 Bucket 情報の取得、権限変更

1. Amazon S3 の[ダッシュボード](https://s3.console.aws.amazon.com/s3)にアクセスします。
2. 登録したい S3 Bucket のリージョンとバケット名を確認します。
3. 登録したい S3 Bucket を選択し、「アクセス権限」を開きます。
4. 「ブロックパブリックアクセス」の編集ボタンをクリックし、「新しいアクセスコントロールリスト (ACL) を介して
許可されたバケットとオブジェクトへのパブリックアクセスをブロックする」のみチェックを外し、変更を保存します。
5. 「アクセスコントロールリスト」の「バケット所有者のアクセス権」に追加されている AWS アカウントの正規 ID が
手順「AWS アカウント情報の取得」の 3. で確認したものと一致していなければ、
「他の AWS アカウントのアクセス」に、確認した正規 ID でアカウントを追加します。この時、権限の種類全てにチェックします。

#### GROWI に Bucket を登録

1. GROWI のアプリ設定のファイルアップロード設定にて AWS (S3) を選択し、上記過程で確認した情報を設定してください。

2. MinIO など、S3 互換 API を持つ他のオブジェクトストレージサービスを使用する場合は、
そのエンドポイントの URL をカスタムエンドポイントに入力してください。

![appsettings19](./images/appsettings19.png)

### Google Cloud Storage のセットアップ

1. [こちら](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) を参考に GCS の情報を取得してください。

2. GROWI のアプリ設定のファイルアップロード設定にて GCS を選択し、上記過程で確認した情報を設定してください。

![appsettings20](./images/appsettings20.png)

- Api Key Json Path: [(GROWIのルートディレクトリから見た) GCP サービスアカウントキー の JSON ファイルのパス]
- バケット名: [GCS のバケット名]
- Name Space: [バケット内に作成するファイルアップロード用のディレクトリ名] -->
