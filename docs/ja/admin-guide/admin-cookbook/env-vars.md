# 環境変数

| 環境変数名 | 説明 | デフォルト値 |
| ------------------- | ----------: | ------------- |
| `MONGO_URI` | 接続する MongoDB サーバーの URI | `mongodb://localhost/growi` |
| `NO_CDN` | `true` の場合, システムは CDN を使用しません。全てのリソースは、client app 起動時に CDN からダウンロードされ、 GROWI Express server により受け取られます。 | `false` |
| `ELASTICSEARCH_URI` | 接続する Elasticearch サーバーの URI | |
| `REDIS_URI` | 接続する Redis サーバーの URI (Redis を MongoDB の代わりにセッションストアとして利用する場合に設定してください） | |
| `PASSWORD_SEED` | パスワードハッシュ生成時に使用されるパスワードシード | |
| `SECRET_TOKEN` | 発行された cookie の正当性を検証するためのシークレットトークン | |
| `SESSION_NAME` | Express からのレスポンス内にセットされる cookie のセッション ID 名 | `connect.sid` |
| `FORCE_WIKI_MODE` | wiki 閲覧モードの強制指定 | `undefined` |
| | : `undefined` Publicity will be configured by the admin security page settings | |
| | : `public` 全てのページを強制的にパブリックにする | |
| | : `private` 全てのページを強制的に非公開にする | |
| `FORMAT_NODE_LOG` | If `false`, Output server log as JSON. (Enabled only when `NODE_ENV=production`) | `true` |
| `MATHJAX` | (TBD) | |
| `USER_UPPER_LIMIT` | (TBD) | |
| **Option for file uploading** | | |
| `FILE_UPLOAD` | ファイルアップロード先のストレージ | `aws` |
| | : `aws` Amazon Web Service S3 を使用します。(管理ページにて AWS 設定を行う必要があります。) | |
| | : `gcs` Google Cloud Storage を使用します。(環境変数にて使用する GCS を設定する必要があります。) | |
| | : `mongodb` MongoDB の GridFS　機能を使用します。 (別途の設定は不要です。) | |
| | : `local` ローカルのファイルシステムを使用します。 (別途の設定は不要です。) | |
| | : `none` ファイルアップロードが無効になります。 | |
| `FILE_UPLOAD_DISABLED` | If `true`, file uploading will be disabled. However, the files can be still viewed. | `false` |
| `MAX_FILE_SIZE` | The maximum file size limit for uploads (bytes). | `Infinity` |
| `FILE_UPLOAD_TOTAL_LIMIT` | Total capacity limit for uploads (bytes). | `Infinity` |
| `GCS_API_KEY_JSON_PATH` | Path of the JSON file that contains [service account key to authenticate to GCP API](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) | |
| `GCS_BUCKET` | Name of the GCS bucket | |
| `GCS_UPLOAD_NAMESPACE` | Directory name to create in the bucket | |
| **Option to integrate with external systems** | | |
| `HACKMD_URI` | URI to connect to [HackMD(CodiMD)](https://hackmd.io/) server. | |
| | This server must load the GROWI agent. [Here's how to prepare it](/en/admin-guide/admin-cookbook/integrate-with-hackmd.html). | |
| `HACKMD_URI_FOR_SERVER` | URI to connect to [HackMD(CodiMD)](https://hackmd.io/) server from GROWI Express server. If not set, `HACKMD_URI` will be used. | |
| `PLANTUML_URI` | URI to connect to [PlantUML](http://plantuml.com/) server. | |
| `BLOCKDIAG_URI` | URI to connect to [blockdiag](http://http://blockdiag.com/) server. | |
| **Option (Overwritable in admin page)** | | |
| `APP_SITE_URL` | Site URL. e.g. `https://example.com`, `https://example.com:8080` | |
| `LOCAL_STRATEGY_ENABLED` | Enable or disable ID/Pass login | |
| `LOCAL_STRATEGY_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` | Prioritize env vars than values in DB for some ID/Pass login options | |
| `SAML_ENABLED` | SAML 連携を有効にする | |
| `SAML_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` | `true` の場合, SAML オプションの設定値はローカルDBの値を参照せず、環境変数の値のみを参照します。 | `false` |
| `SAML_ENTRY_POINT` | IdP エントリーポイント | |
| `SAML_ISSUER` | Issuer string to supply to IdP | |
| `SAML_ATTR_MAPPING_ID` | Attribute map for id | |
| `SAML_ATTR_MAPPING_USERNAME` | Attribute map for username | |
| `SAML_ATTR_MAPPING_MAIL` | Attribute map for email | |
| `SAML_ATTR_MAPPING_FIRST_NAME` | Attribute map for first name | |
| `SAML_ATTR_MAPPING_LAST_NAME` | Attribute map for last name | |
| `SAML_CERT` | PEM-encoded X.509 signing certificate string to validate the response from IdP | |
| `OAUTH_GOOGLE_CLIENT_ID` | Google API client id for OAuth login. | |
| `OAUTH_GOOGLE_CLIENT_SECRET` | Google API client secret for OAuth login. | |
| `OAUTH_GITHUB_CLIENT_ID` | GitHub API client id for OAuth login. | |
| `OAUTH_GITHUB_CLIENT_SECRET` | GitHub API client secret for OAuth login. | |
| `OAUTH_TWITTER_CONSUMER_KEY` | Twitter consumer key(API key) for OAuth login. | |
| `OAUTH_TWITTER_CONSUMER_SECRET` | Twitter consumer secret(API secret) for OAuth login. | |


