# ファイルアップロード設定

[[toc]]

## 概要

GROWI ページへのファイルアップロードに関する設定について紹介します。

## 添付ファイル保存先の指定

GROWI ページの添付ファイルの保存先は以下を利用できます。詳細は[こちら](/ja/admin-guide/management-cookbook/app-settings.html#ファイルアップロード設定)を参照してください。

- Amazon S3
- Google Cloud Storage
- Azure Blob Storage
- MongoDB
- ローカルファイルシステム

### 環境変数による添付ファイル保存先の固定

::: danger
ファイル保存先を途中で変更すると、これまでにアップロードしたファイル等へのアクセスができなくなりますのでご注意ください。
:::

<!-- textlint-disable weseek/sentence-length -->
添付ファイルの保存先を環境変数によって固定したい場合は、環境変数 `FILE_UPLOAD_USES_ONLY_ENV_VAR_FOR_FILE_UPLOAD_TYPE` を `true` にし、以下の表を参考に環境変数 `FILE_UPLOAD` の値を設定してください。
<!-- textlint-enable weseek/sentence-length -->

| 保存先 | `FILE_UPLOAD` |
| --- | --- |
| Amazon S3 | `aws` |
| Google Cloud Storage | `gcs` |
| Azure Blob Storage | `azure` |
| MongoDB | `mongodb` |
| ローカルファイルシステム | `local` |

環境変数 `FILE_UPLOAD_USES_ONLY_ENV_VAR_FOR_FILE_UPLOAD_TYPE` によって保存先が固定されている場合、管理画面で設定した保存先は無効となります。

### 環境変数による Google Cloud Storage 設定

ファイルアップロード設定内の GCS 設定のフォームで値を指定していない場合は、以下のデフォルト値を利用します。

- API Key Json Path: `GCS_API_KEY_JSON_PATH`
- バケット名: `GCS_BUCKET`
- Name Space: `GCS_UPLOAD_NAMESPACE`

#### 環境変数による GCS 設定の固定

GCS 設定を環境変数によって固定したい場合は、環境変数 `GCS_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` を `true` にし、上記の環境変数に値を入れてください。未設定の場合は、null が入ります。

<!-- textlint-disable weseek/sentence-length -->
環境変数 `GCS_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` による GCS 設定の固定が有効な場合、ファイルアップロード設定での GCS 設定のフォームの値は無効となり、変更もできなくなります。
<!-- textlint-enable weseek/sentence-length -->

### 環境変数による Azure Blob Storage 設定

ファイルアップロード設定内の Azure(Blob) 設定のフォームで値を指定していない場合は、以下のデフォルト値を利用します。

- テナントID: `AZURE_TANANT_ID`
- クライアントID: `AZURE_CLIENT_ID`
- クライアントシークレット: `AZURE_CLIENT_SECRET`
- ストレージアカウント名: `AZURE_STORAGE_ACCOUNT_NAME`
- コンテナ名: `AZURE_STORAGE_CONTAINER_NAME`

#### 環境変数による Azure(Blob) 設定の固定

Azure(Blob) 設定を環境変数によって固定したい場合は、環境変数 `AZURE_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` を `true` にし、上記の環境変数に値を入れてください。未設定の場合は、null が入ります。

<!-- textlint-disable weseek/sentence-length -->
環境変数 `AZURE_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` による Azure(Blob) 設定の固定が有効な場合、ファイルアップロード設定での Azure(Blob) 設定のフォームの値は無効となり、変更もできなくなります。
<!-- textlint-enable weseek/sentence-length -->

## 添付ファイルのサイズ制限

以下の環境変数により、一度にアップロードできるファイルのサイズ上限と全ページに添付されているファイルの累計サイズの上限を設定できます。いずれも単位は `bytes` です。デフォルトではいずれの値も `Infinity` となっており、ファイルサイズは制限されません。

- `MAX_FILE_SIZE` : [アップロード可能なファイルのサイズ上限(bytes)]
- `FILE_UPLOAD_TOTAL_LIMIT` : [アップロードされたファイルの累計サイズ上限(bytes)]

## 添付ファイル参照方法

v4.2.3 より 添付ファイル参照方法に変更が加わりました。

Amazon S3, Google Cloud Storage を利用する場合、下記の2種類の方法から選択できます。  
なお、v4.2.3 以降はデフォルトが Redirect Mode になります。

完全なセキュリティーが必要な場合のみ、  
[管理画面のアプリ設定](/ja/admin-guide/management-cookbook/app-settings.html#ファイルアップロード設定)から
Relay Mode に変更してください。

### Relay Mode (オプショナル / v4.2.2 以前のデフォルト仕様)

<!-- https://dev.growi.org/5fd8424f2271ae00481ed2e8 -->
<img :src="$withBase('/assets/images/fileUpload1.png')" alt="fileUpload1">

Relay Mode では GROWI サーバーが Cloud Service との通信を中継し、クライアントにデータをリレー配信します。

クライアントは GROWI サーバーとの通信しか行わないため、  
ファイル参照に関してはセキュリティー的には最も安全な手段となります。

ただしリレーの特性上、画像の数や容量、リクエスト数に応じて GROWI サーバーと Cloud Service との間のトラフィックが増大するというデメリットがあります。

### Redirect Mode (v4.2.3 以降のデフォルト仕様)

<!-- https://dev.growi.org/5fd8424f2271ae00481ed2e8 -->
<img :src="$withBase('/assets/images/fileUpload2.png')" alt="fileUpload2">

Redirect Mode では Cloud Service にファイル参照用の署名付きURLの発行を依頼し、  
それをクライアントに知らせ、リダイレクトを促します。

クライアントは受け取った署名付きURLにアクセスし、Cloud Service から画像を直接取得します。

GROWI サーバーはトラフィックを中継せず、各クライアントが直接 Cloud Service から画像を受け取ります。
そのため、画像の数や容量、リクエスト数によって GROWI サーバーに負荷がかからず、全体的に優れたパフォーマンスを発揮できます。

また署名付きURLの発行時は十分に短い失効期間が設定されるため、セキュリティ上もバランスの取れた仕様となっています。

GROWI サーバーは失効期間と同じ長さだけ署名付きURLをキャッシュします(デフォルトでは120秒)。  
キャッシュを保持する秒数は[環境変数](/ja/admin-guide/admin-cookbook/env-vars.html)で設定できます。

- AWS(S3)
  - `S3_LIFETIME_SEC_FOR_TEMPORARY_URL`
- GCP(GCS)  
  - `GCS_LIFETIME_SEC_FOR_TEMPORARY_URL`
- Azure(Blob)
  - `AZURE_LIFETIME_SEC_FOR_TEMPORARY_URL`

