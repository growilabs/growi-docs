# ファイルアップロード設定

[[toc]]

## 概要

GROWI ページへのファイルアップロードに関する設定について紹介します。

## アップロード先の指定

GROWI ページの添付ファイルの保存先は以下を利用できます。詳細は[こちら](../management-cookbook/app-settings.html#ファイルアップロード設定)を参照してください。

- Amazon S3
- Google Cloud Storage
- MongoDB
- ローカルファイルシステム

### 環境変数によるアップロード先の指定

::: danger
ファイル保存先を途中で変更すると、これまでにアップロードしたファイル等へのアクセスができなくなりますのでご注意ください。
:::

添付ファイルの保存先を環境変数によって指定したい場合は、環境変数 `FILE_UPLOAD_USES_ONLY_ENV_VAR_FOR_FILE_UPLOAD_TYPE` を `true` にし、以下の表を参考に環境変数 `FILE_UPLOAD` の値を設定してください。

| アップロード先 | `FILE_UPLOAD` |
| --- | --- |
| Amazon S3 | `aws` |
| Google Cloud Storage | `gcs` |
| MongoDB | `mongodb` |
| ローカルファイルシステム | `local` |

環境変数による保存先の指定が有効な場合、ファイルアップロード設定での保存先の指定は無効となり、変更もできなくなります。

### 環境変数による Google Cloud Storage 設定

ファイルアップロード設定で GCS 設定のファームの値が空欄の場合、以下の環境変数を利用します。

- Api Key Json Path: `GCS_API_KEY_JSON_PATH`
- バケット名: `GCS_BUCKET`
- Name Space: `GCS_UPLOAD_NAMESPACE`

#### 環境変数による GCS 設定の固定

GCS 設定を環境変数によって固定したい場合は、環境変数 `GCS_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` を `true` にし、上記の環境変数に値を入れてください。未設定の場合は、null が入ります。

環境変数による GCS 設定の固定が有効な場合、ファイルアップロード設定での GCS 設定のフォームの値は無効となり、変更もできなくなります。

## 添付ファイルのサイズ制限

以下の環境変数により、一度にアップロードできるファイルのサイズ上限と全ページに添付されているファイルの累計サイズの上限を設定することができます。いずれも単位は `bytes` です。デフォルトではいずれの値も `Infinity` となっており、ファイルサイズは制限されません。

- `MAX_FILE_SIZE` : [アップロード可能なファイルのサイズ上限(bytes)]
- `FILE_UPLOAD_TOTAL_LIMIT` : [アップロードされたファイルの累計サイズ上限(bytes)]
