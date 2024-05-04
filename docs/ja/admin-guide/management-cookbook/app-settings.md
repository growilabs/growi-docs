# アプリ設定

[[toc]]

<ContextualBlock context="docs-growi-org">

## サイトURL設定

この欄では、GROWI に URL を設定します。

GROWI の **サイト URL 設定は必ず行ってください**。

:::warning
サイト URL が未設定の場合は、GROWI の機能が一部正常に動作しなくなります。
:::

保有するドメインの向き先として `growi.example.com` などに DNS レコードを指定している場合は、ここに設定します。  
ドメインを DNS 設定していない場合は、任意のURLで良いので値を設定してください。

<img :src="$withBase('/assets/images/appsettings10.png')" alt="appsettings10">

環境変数 `APP_SITE_URL` に値が設定されていると、右側の `Environment variables` の欄に設定値が表示されます。  


<img :src="$withBase('/assets/images/appsettings11.png')" alt="appsettings11">

管理画面で編集する `Database` の欄に値が入力されていると、`Database` の欄に設定した値が`Environment variables` の欄より優先されます。  

:::warning
サイト URL が未設定の場合は、GROWI の機能が一部正常に動作しなくなるため、エラーメッセージが表示されます。

管理画面の設定欄、ページのヘッダ部に以下のようにエラーメッセージが表示されます。  
GROWI の **サイト URL 設定は必ず行ってください**。

<img :src="$withBase('/assets/images/appsettings12.png')" alt="appsettings12">

<img :src="$withBase('/assets/images/appsettings13.png')" alt="appsettings13">
:::

</ContextualBlock>

### サイト名

サイト名に設定をした内容は、GROWI のログイン画面及びタイトルとして表示されます。

<img :src="$withBase('/assets/images/appsettings1.png')" alt="appsettings1">

<img :src="$withBase('/assets/images/appsettings2.png')" alt="appsettings2">

### コンフィデンシャル表示

コンフィデンシャル表示欄に記載した内容は、GROWI のヘッダーに表示されます。

<img :src="$withBase('/assets/images/appsettings3.png')" alt="appsettings3">

### 新規ユーザーのデフォルト言語設定

この欄では、英語・日本語・中国語のいずれかを選択します。

<img :src="$withBase('/assets/images/appsettings4.png')" alt="appsettings4">

上記の設定により、GROWI で新規ユーザーを作成する際の、デフォルト設定言語が切り替わります。

<img :src="$withBase('/assets/images/appsettings5.png')" alt="appsettings5">


### ファイルアップロード

GROWI では、ページへの画像以外のファイルのアップロードを可能とするための設定があります。

<img :src="$withBase('/assets/images/appsettings6.png')" alt="appsettings6">

こちらにチェックをしないと、wiki ページの編集時には画像以外のファイルはアップロードできません。

ファイルアップロードを設定することで、ファイルがアップロードできるようになります。

<img :src="$withBase('/assets/images/appsettings8.png')" alt="appsettings8">

以下の表示となっている場合は、ファイルアップロードは機能していません。

<img :src="$withBase('/assets/images/appsettings9.png')" alt="appsettings9">


## メールの設定

GROWI からのメール送信 は、次のどちらかの設定パターンを選択できます。

  1. SMTP サーバーを設定する
  2. AWS の SES を利用する

<img :src="$withBase('/assets/images/appsettings14.png')" alt="appsettings14">

**メール設定がセットアップされていません。** というアラートが表示されている場合、設定フォームが不十分であることを示します。  

### SES を使用する場合の注意点

GROWI では Region の設定ができないので、us-east-1 で送信を試みます。  
us-east-1 以外の Region を使用する場合、SES 側の情報を用いて GROWI 上で SMTP の設定を行いメールを送信することをご検討ください。

### テストメールの送信(SMTPのみ実行可能)

SMTP サーバーを使用する場合、テストメールを送信しメール設定が機能していることを確認できます。

SMTP サーバー設定の更新後、**テストメールを送信**ボタンを押します。

- 成功した場合「テストメールを送信しました」と表示されます。
- 失敗した場合「SMTPを利用したテストメール送信に失敗しました。設定をみなおしてください。」と表示されます。

メール設定が有効の場合、通知設定やユーザー管理でのメール送信が機能し、GROWI からメールが送信されます。

### メール送信機能の例

以下はユーザー管理メニューの**新規ユーザーの仮発行**ウィンドウです。

<img :src="$withBase('/assets/images/appsettings15.png')" alt="appsettings15">

**招待をメールで送信** にチェックをするとメールが機能します。  
メール設定が正しくできていない場合はメールが機能しません。

## ファイルアップロード設定

GROWI ページへの添付ファイルのアップロードに関する設定をします。

### 利用可能な保存先

添付ファイルの保存先は以下を利用できます。

- Amazon S3
- Google Cloud Storage
- MongoDB
- ローカルファイルシステム

#### Amazon S3 へのアップロード

Amazon S3 の Bucket にファイルを保存します。

Amazon S3 の設定方法は[こちら](/ja/admin-guide/management-cookbook/app-settings.html#amazon-s3-bucket-のセットアップ)を参考にしてください。

#### Google Cloud Storage へのアップロード

Google Cloud Storage の Bucket にファイルを保存します。

Google Cloud Storage の設定方法は[こちら](/ja/admin-guide/management-cookbook/app-settings.html#google-cloud-storage-のセットアップ)を参考にしてください。

#### Azure Blob Storage へのアップロード

Azure Blob Storage の コンテナ にファイルを保存します。

Azure Blob Storage の設定方法は[こちら](/ja/admin-guide/management-cookbook/app-settings.html#azure-blob-storage-のセットアップ)を参考にしてください。

#### MongoDB へのアップロード

GROWI データの保存先に指定している MongoDB に [GridFS](https://docs.mongodb.com/manual/core/gridfs/) を利用し、ファイルを保存します。

#### ファイルシステムへのアップロード

GROWI サーバーから見たローカルファイルシステムにファイルを保存します。

### 添付ファイル保存先の変更

保存先はアプリ設定のファイルアップロード設定にて変更できます。

::: danger
ファイル保存先を途中で変更すると、これまでにアップロードしたファイル等へのアクセスができなくなりますのでご注意ください。
:::

<img :src="$withBase('/assets/images/appsettings18.png')" alt="appsettings18">

<ContextualBlock context="docs-growi-org">

::: warning
<!-- textlint-disable weseek/sentence-length -->
ファイルアップロード先が環境変数 `FILE_UPLOAD_USES_ONLY_ENV_VAR_FOR_FILE_UPLOAD_TYPE` によって固定されている場合、ここでのファイルアップロード先の変更はできません。詳細は[こちら](/ja/admin-guide/admin-cookbook/attachment)を参照してください。
<!-- textlint-enable weseek/sentence-length -->
:::

</ContextualBlock>

Amazon S3, Google Cloud Storage を利用する場合はそれぞれ設定が必要です。下記を参照に設定を完了してください。

### Amazon S3 Bucket のセットアップ

Amazon S3(Amazon Simple Storage Service) への接続設定の手順を紹介します。

#### AWS 認証情報の取得

<details><summary>IAM Userを新規に作成する場合(推奨)</summary>

1. [AWS マネジメントコンソール](https://aws.amazon.com/jp/console/) にサインインします。
2. IAMの[IAMユーザー](https://us-east-1.console.aws.amazon.com/iam/home#/users)へ移動します。
3. ユーザーを作成します。
    - ユーザー名: 任意
    - AWS マネジメントコンソールへのユーザーアクセスを提供する: オフ
    - 許可を設定: 何も追加せずに次へ
4. 作成したユーザーを選択します。
5. 許可タブ -> 許可を追加 -> インラインポリシーを作成を選択します。
6. ポリシーエディタのJSONを選択し、以下を追加します。

```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Action": [
				"s3:PutObject",
				"s3:PutObjectAcl",
				"s3:GetObject"
			],
			"Resource": [
				"arn:aws:s3:::*/*"
			]
		}
	]
}
```

::: tip
Resouceの１つ目の*は、後に作成するS3 Bucket名を入力するとよりセキュアです。  
例: `"arn:aws:s3:::growi-attachment-bucket/*"`
:::

7. ポリシー名に任意の名前を入れてポリシーを作成します。
8. 作成したユーザーの詳細 -> セキュリティ認証情報タブ -> アクセスキー -> アクセスキーを作成を選択します。
9. その他を選択 -> アクセスキーを作成します。
10. Access Key ID および Secret Access Key を作成、保管します。

</details>

<details><summary>ログインユーザーの認証情報を利用する場合</summary>

1. [AWS マネジメントコンソール](https://aws.amazon.com/jp/console/) にサインインします。
2. ナビバー右上のアカウント名をクリックすると表示されるドロップダウンから、[マイセキュリティ資格情報](https://console.aws.amazon.com/iam/home?#/security_credentials) を選択します。
3. 「アクセスキー(アクセスキー ID とシークレットアクセスキー)」を展開し、AWS アカウントのAccess Key ID および Secret Access Key を作成、保管します。
4. 「アカウント ID」を展開し、正規ユーザー ID を確認します。

</details>

#### Amazon S3 Bucket 情報の取得、権限変更

1. Amazon S3 の[ダッシュボード](https://s3.console.aws.amazon.com/s3)にアクセスします。
2. 登録したい S3 Bucket のリージョンとバケット名を確認します。
3. 登録したい S3 Bucket を選択し、「アクセス権限」を開きます。
4. 「ブロックパブリックアクセス」の編集ボタンをクリックします。
5. 「新しいアクセスコントロールリスト (ACL) を介して許可されたバケットとオブジェクトへのパブリックアクセスをブロックする」のみチェックを外し、変更を保存します。
6. 「アクセスコントロールリスト」の「バケット所有者のアクセス権」に追加されている AWS アカウントの正規 ID が手順「AWS アカウント情報の取得」の 3. で確認したものと一致していなければ、「他の AWS アカウントのアクセス」に、確認した正規 ID でアカウントを追加します。この時、権限の種類全てにチェックします。

::: tip
Private S3 Bucket(ACL無効、パブリックアクセスをブロック)を利用する場合、GROWIの起動時に環境変数`S3_BUCKET_ACLS_DISABLE=true`を設定する必要があります。
:::

#### GROWI に Bucket を登録

1. GROWI のアプリ設定のファイルアップロード設定にて AWS (S3) を選択し、上記過程で確認した情報を設定してください。

2. MinIO など、S3 互換 API を持つ他のオブジェクトストレージサービスを使用する場合は、そのエンドポイントの URL をカスタムエンドポイントに入力してください。

<img :src="$withBase('/assets/images/appsettings19.png')" alt="appsettings19">

### Google Cloud Storage のセットアップ

1. [こちら](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) を参考に GCS の情報を取得してください。

2. GROWI のアプリ設定のファイルアップロード設定にて GCS を選択し、上記過程で確認した情報を設定してください。

<img :src="$withBase('/assets/images/appsettings20.png')" alt="appsettings20">

- API Key Json Path: [(GROWIのルートディレクトリから見た) GCP サービスアカウントキー の JSON ファイルのパス]
- バケット名: [GCS のバケット名]
- Name Space: [バケット内に作成するファイルアップロード用のディレクトリ名]

### Azure Blob Storage のセットアップ

以下の5つの情報が必要です。
- (a). ディレクトリ (テナント) ID
- (b). アプリケーション (クライアント) ID
- (c). クライアントシークレット
- (d). ストレージアカウント名
- (e). コンテナ名

以下の手順で設定をしながら、必要な情報を取得していきます。

#### Azureで設定
1. [Azure Portal](https://portal.azure.com) に移動

1. トップメニューから「Microsoft Entra ID」に移動し、サイドメニュー「管理＞アプリの登録」から、アプリケーション（ここでは**GROWI**）を新規登録する
    1. ここで情報`(a),(b)`を取得する
1. 登録したアプリケーション(**GROWI**)の詳細画面に移動し、サイドメニュー「管理＞証明書とシークレット」から、「新しいクライアントシークレットを追加する」
    1. ここで情報`(c)`を取得する。（作成直後にしか表示されないので注意）
1. トップメニューから「ストレージアカウント」に移動しストレージアカウントを作成する
    1. ここで情報`(d)`を取得する
1. 作成したストレージアカウントの詳細画面に移動し、サイドメニュー「データストレージ＞コンテナ」から、新しいコンテナを作成する
    1. ここで情報`(e)`を取得する
1. 作成したストレージアカウントの詳細画面に移動し、サイドメニュー「アクセス制御(IAM)」から、「ロール割り当ての追加」
    1. 職務ロール「ストレージ BLOB データ共同作成者」を選択
    1. メンバー選択で、上で登録したアプリを選択
    1. 「レビューと割り当て」をおこなう。

#### GROWI で設定
1. GROWI のアプリ設定のファイルアップロード設定にて Azure(BLOB) を選択し、上記過程で確認した情報を設定してください。

<ContextualBlock context="docs-growi-org">

### 添付ファイル参照方法

Amazon S3, Google Cloud Storage を利用する場合、添付ファイル参照方法を設定できます。

配信方法については [添付ファイル参照方法](/ja/admin-guide/admin-cookbook/attachment.html#添付ファイル参照方法) を参照ください。

</ContextualBlock>

## アンケート設定

アンケートを有効にして、GROWI 開発チームからアンケートを受け取って回答できます。

管理者は `アプリ設定` > `アンケート設定` からアンケートを有効/無効に設定できます。また、ユーザーは設定画面から個別にアンケート機能を有効/無効に設定できます。

送信されるデータにユーザーの個人情報は一切含まれません。
実際に開発チームに送信される回答データは以下のような json 形式のデータです。

```json
{
  "growiInfo": {
    "version": "6.1.0",
    "osInfo": {
      "type": "Linux",
      "platform": "linux",
      "arch": "x64",
      "totalmem": 8349097984
    },
    "appSiteUrl": "https://dev.growi.org",
    "appSiteUrlHashed": "f1de9e489ba88cb15968b97f40f59e8ef0da5ca03ad1f37fc13a2aa45a2512a9",
    "type": "cloud",
    "currentUsersCount": 1,
    "currentActiveUsersCount": 1,
    "wikiType": "open",
    "attachmentType": "gcs"
  },
  "userInfo": {
    "userIdHash": "491cc0533ef24a97cdab23ae634b5c4822586087383e9e3e59ddd464876cecbb",
    "type": "admin",
    "userCreatedAt": "2023-01-24T04:50:59.249Z"
  },
  "answers": [ { "question": "63d75bde2cc143ee8250106a", "value": "3" } ],
  "answeredAt": "2023-01-31T06:00:07.707Z"
}
```

### サイトURLについて

デフォルト設定では、GROWI アプリケーション運用している URL とそのハッシュ値を、それぞれ `appSiteUrl`, `appSiteUrlHashed` というキーで含みます。
運用しているサイトの URL を GROWI 開発チームに対して秘匿したい場合は、`サイト URL を匿名化して送信する` オプションを有効にしてください。
このオプションにより、送信されるのは `appSiteUrlHashed` の値のみになります。
