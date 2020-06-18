---
pageClass: admin-cookbook-env-vars
---


# 環境変数

| 環境変数名 | 説明 | デフォルト値 |
| ------------------- | ---------- | ------------- |
| `MONGO_URI` | 接続する MongoDB サーバーの URI | `mongodb://localhost/growi` |
| `NO_CDN` | `true` の場合、システムは CDN を使用しません。代わりに全てのリソースはクライアントビルド時に CDN からダウンロードされ、利用時は GROWI Express serverからのみ提供されるようになります。 | `false` |
| `ELASTICSEARCH_URI` | 接続する Elasticearch サーバーの URI | |
| `ELASTICSEARCH_REQUEST_TIMEOUT` | リクエスト時のタイムアウト(msec) | 8000 |
| `REDIS_URI` | 接続する Redis サーバーの URI (Redis を MongoDB の代わりにセッションストアとして利用する場合に設定してください） | |
| `PASSWORD_SEED` | パスワードハッシュ生成時に使用されるパスワードシード | |
| `SECRET_TOKEN` | 発行された cookie の正当性を検証するためのシークレットトークン | |
| `SESSION_NAME` | Express からのレスポンスに含まれる cookie 内のセッション ID 名 | `connect.sid` |
| `FORCE_WIKI_MODE` | wiki 閲覧モードの強制指定 | `undefined` |
| | : `undefined` 閲覧権限は管理画面のセキュリティ設定に従います。 | |
| | : `public` 全てのページを強制的にパブリックにします。 | |
| | : `private` 全てのページを強制的に非公開にします。 | |
| `FORMAT_NODE_LOG` |  `false`の場合、サーバーログを JSON 形式で出力します。(`NODE_ENV=production` の時のみ可能) | `true` |
| `MATHJAX` | (TBD) | |
| `USER_UPPER_LIMIT` | (TBD) | |
| **ファイルアップロードオプション** | | |
| `FILE_UPLOAD` | ファイルアップロード先のストレージ | `aws` |
| | : `aws` Amazon Web Service S3 を使用します。(管理ページにて AWS 設定を行う必要があります。) | |
| | : `gcs` Google Cloud Storage を使用します。(環境変数にて使用する GCS を設定する必要があります。) | |
| | : `mongodb` MongoDB の GridFS　機能を使用します。 (別途の設定は不要です。) | |
| | : `local` ローカルのファイルシステムを使用します。 (別途の設定は不要です。) | |
| | : `none` ファイルアップロードを無効にします。  | |
| `FILE_UPLOAD_DISABLED` | `true` の場合、ファイルアップロード機能を無効にしますが、既にアップロードされている画像の閲覧は可能です。 | `false` |
| `MAX_FILE_SIZE` | アップロード可能なファイルサイズ上限（bytes）。 | `Infinity` |
| `FILE_UPLOAD_TOTAL_LIMIT` | アップロードファイルの総容量の上限（bytes） | `Infinity` |
| `GCS_API_KEY_JSON_PATH` |  [GCP API 認証用のサービスアカウントキー](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) を含む JSON ファイルのパス | |
| `GCS_BUCKET` | 利用する GCS バケット名 | |
| `GCS_UPLOAD_NAMESPACE` | バケット内に作成するファイルアップロード用のディレクトリ名 | |
| **外部システム連携オプション** | | |
| `HACKMD_URI` | 接続する [HackMD(CodiMD)](https://hackmd.io/) サーバーの URI | |
| | このサーバーは GROWI エージェントをロードする必要があります。 セットアップ方法は[こちら](/en/admin-guide/admin-cookbook/integrate-with-hackmd.html)。| |
| `HACKMD_URI_FOR_SERVER` | GROWI Express サーバーが参照する [HackMD(CodiMD)](https://hackmd.io/) のURI。 未設定の場合は `HACKMD_URI` が使用されます。 | |
| `PLANTUML_URI` | 接続する [PlantUML](http://plantuml.com/) サーバーの URI | |
| `BLOCKDIAG_URI` | 接続する [blockdiag](http://http://blockdiag.com/) サーバーの URI | |
| `DRAWIO_URI` | 接続する [diagrams.net(draw.io)](https://www.diagrams.net/) サーバーの URI | |
| **管理設定を上書きする環境変数** | | |
| `APP_SITE_URL` | サイト URL (例: `https://example.com` 、 `https://example.com:8080`) | |
| `LOCAL_STRATEGY_ENABLED` | `true` の場合、ID/Pass ログインが有効になります。 | |
| `LOCAL_STRATEGY_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` | `true` の場合、ID/Pass オプションの設定値はローカル DB の値を参照せず、環境変数の値のみを参照します。 | |
| `SAML_ENABLED` | `true` の場合、SAML 連携を有効にします。 | |
| `SAML_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` | `true` の場合、SAML オプションの設定値はローカル DB の値を参照せず、環境変数の値のみを参照します。 | `false` |
| `SAML_ENTRY_POINT` | IdP のエントリーポイント | |
| `SAML_ISSUER` | 認証要求をする issuer (SP) | |
| `SAML_ATTR_MAPPING_ID` | SAML Identity プロバイダ内で一意に識別可能な値を格納している属性 | |
| `SAML_ATTR_MAPPING_USERNAME` | 新規ユーザーのアカウント名 (`username`) に関連付ける属性 | |
| `SAML_ATTR_MAPPING_MAIL` | 新規ユーザーのメールアドレスに関連付ける属性 | |
| `SAML_ATTR_MAPPING_FIRST_NAME` | 新規ユーザーの姓に関連付ける属性 | |
| `SAML_ATTR_MAPPING_LAST_NAME` | 新規ユーザーの名に関連付ける属性 | |
| `SAML_CERT` | IdP からのレスポンスを検証するための PEM エンコードされた X.509 証明書文字列  | |
| `OAUTH_GOOGLE_CLIENT_ID` | OAuth ログインで使用する Google API の クライアント ID | |
| `OAUTH_GOOGLE_CLIENT_SECRET` | OAuth ログインで使用する Google API のクライアントシークレット | |
| `OAUTH_GITHUB_CLIENT_ID` | OAuth ログインで使用する GitHub API のクライアント ID | |
| `OAUTH_GITHUB_CLIENT_SECRET` | OAuth ログインで使用する GitHub API のクライアント シークレット | |
| `OAUTH_TWITTER_CONSUMER_KEY` | OAuth ログインで使用する Twitter カスタマーキー (API キー) | |
| `OAUTH_TWITTER_CONSUMER_SECRET` | OAuth ログインで使用する Twitter カスタマーシークレット(API シークレット) | |


