---
pageClass: admin-cookbook-env-vars
---


# 環境変数

| 環境変数名 | 説明 | デフォルト値 |
| ------------------- | ---------- | ------------- |
| `APP_SITE_URL` | サイト URL (例: `https://example.com` 、 `https://example.com:8080`) | |
| `MONGO_URI` | 接続する MongoDB サーバーの URI | `mongodb://localhost/growi` |
| `ELASTICSEARCH_VERSION` | 接続する Elasticsearch のメジャーバージョン。(`7` または `8` を指定可能) | `8` |
| `ELASTICSEARCH_URI` | 接続する Elasticsearch サーバーの URI | |
| `ELASTICSEARCH_REQUEST_TIMEOUT` | リクエスト時のタイムアウト(msec) | 8000 |
| `ELASTICSEARCH_REJECT_UNAUTHORIZED` | HTTPS スキーマでの接続時に証明書の検証を行うかどうか | `false` |
| `REDIS_URI` | 接続する Redis サーバーの URI (Redis を MongoDB の代わりにセッションストアとして利用する場合に設定してください） | |
| `PASSWORD_SEED` | パスワードハッシュ生成時に使用されるパスワードシード | |
| `SECRET_TOKEN` | 発行された cookie の正当性を検証するためのシークレットトークン | |
| `SESSION_NAME` | Express からのレスポンスに含まれる cookie 内のセッション ID 名 | `connect.sid` |
| `FORCE_WIKI_MODE` | wiki 閲覧モードの強制指定 | `undefined` |
| | : `undefined` 閲覧権限は管理画面のセキュリティ設定に従います。 | |
| | : `public` 全てのページを強制的にパブリックにします。 | |
| | : `private` 全てのページを強制的に非公開にします。 | |
| `DISABLE_LINK_SHARING` | シェアリンク機能を無効化します。 | `false` |
| `FORMAT_NODE_LOG` |  `false`の場合、サーバーログを JSON 形式で出力します。(`NODE_ENV=production` の時のみ可能) | `true` |
| `USER_UPPER_LIMIT` | (TBD) | |
| `MIN_PASSWORD_LENGTH` | ユーザーが設定可能なパスワードの最短文字数 | 8 |
| `DEFAULT_EMAIL_PUBLISHED` | 新規作成されたユーザーのデフォルトの email 公開設定 | `true` |
| `S2CMSG_PUBSUB_CONNECTIONS_LIMIT` | Push 通知を行う全クライアントの同時接続数上限 | 5000 |
| `S2CMSG_PUBSUB_CONNECTIONS_LIMIT_FOR_GUEST` | Push 通知を行うことのできるゲストユーザーの同時接続数上限 | 2000 |
| `S2CMSG_PUBSUB_CONNECTIONS_LIMIT_FOR_ADMIN` | 管理画面で Push 通知を行うことのできる管理者ユーザーの同時接続数上限<br>(`S2CMSG_PUBSUB_CONNECTIONS_LIMIT`からは独立した値です) | 100 |
| `AUDIT_LOG_ENABLED` | `true` の場合、監査ログ機能が有効になります。| `false` |
| `ACTIVITY_EXPIRATION_SECONDS` | 監査ログの保持期間の秒数。監査ログが作成されてから設定された秒数経過すると自動で削除されます。 | `2592000` |
| `AUDIT_LOG_ACTION_GROUP_SIZE` | 監査ログで収集するアクショングループのサイズ（`SMALL`, `MEDIUM`, `LARGE` が指定可能） | `SMALL` |
| `AUDIT_LOG_ADDITIONAL_ACTIONS` | `AUDIT_LOG_ACTION_GROUP_SIZE` で指定されたアクショングループに含まれないアクションを個別に追加します。CSV形式（カンマ区切りの文字列）で指定します。 | |
| `AUDIT_LOG_EXCLUDE_ACTIONS` | `AUDIT_LOG_ACTION_GROUP_SIZE` で指定されたアクショングループに含まれているアクションを個別に除外します。CSV形式（カンマ区切りの文字列）で指定します。| |
| `TRUST_PROXY_BOOL` | [Express の `trust proxy` に設定可能](https://expressjs.com/ja/guide/behind-proxies.html)な boolean 形式の値。`TRUST_PROXY_CSV` 及び `TRUST_PROXY_HOPS` よりも優先されます。 | |
| `TRUST_PROXY_CSV` | [Express の `trust proxy` に設定可能](https://expressjs.com/ja/guide/behind-proxies.html)な CSV 形式の値。 `TRUST_PROXY_HOPS` よりも優先されます。 | |
| `TRUST_PROXY_HOPS` | [Express の `trust proxy` に設定可能](https://expressjs.com/ja/guide/behind-proxies.html)な number 形式の値。 | |
| `WIP_PAGE_EXPIRATION_SECONDS` | 一度も更新していない [WIP ページ](/ja/guide/features/wip-page.html) の保存期間の秒数。指定された秒数が経過するとページが自動的に削除されます。 | `172800` (2日) |
| **ファイルアップロードオプション** | | |
| `FILE_UPLOAD` | ファイルアップロード先のストレージ | `aws` |
| | : `aws` Amazon Web Service S3 を使用します。(管理ページにて AWS 設定を行う必要があります。) | |
| | : `gcs` Google Cloud Storage を使用します。(環境変数にて使用する GCS を設定する必要があります。) | |
| | : `azure` Azure Blob Storage を使用します。(環境変数にて使用する Azure(Blob) を設定する必要があります。) | |
| | : `mongodb` MongoDB の GridFS　機能を使用します。 (別途の設定は不要です。) | |
| | : `local` ローカルのファイルシステムを使用します。 (別途の設定は不要です。) | |
| | : `none` ファイルアップロードを無効にします。  | |
| `FILE_UPLOAD_DISABLED` | `true` の場合、ファイルアップロード機能を無効にしますが、既にアップロードされている画像の閲覧は可能です。 | `false` |
| `MAX_FILE_SIZE` | アップロード可能なファイルサイズ上限（bytes）。 | `Infinity` |
| `FILE_UPLOAD_TOTAL_LIMIT` | アップロードファイルの総容量の上限（bytes） | `Infinity` |
| `S3_LIFETIME_SEC_FOR_TEMPORARY_URL` | 署名付きURLのキャッシュを保持する期間(秒数) | 120 |
| `GCS_API_KEY_JSON_PATH` |  [GCP API 認証用のサービスアカウントキー](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) を含む JSON ファイルのパス | |
| `GCS_BUCKET` | 利用する GCS バケット名 | |
| `GCS_UPLOAD_NAMESPACE` | バケット内に作成するファイルアップロード用のディレクトリ名 | |
| `GCS_LIFETIME_SEC_FOR_TEMPORARY_URL` | 署名付きURLのキャッシュを保持する期間(秒数)| 120 |
| `GCS_REFERENCE_FILE_WITH_RELAY_MODE` | `true` の場、GROWI サーバーが添付ファイルデータを送信します(relay mode). `false` (デフォルト値)の場合は、その場合ユーザーはサーバーによって作成された [署名付き URL](https://cloud.google.com/storage/docs/access-control/signed-urls) によって GCS から直接データをダウンロードします。| `false` |
| `GCS_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` | `true` の場合、GCS 関連設定の一部はローカル DB の値を参照せず、環境変数の値のみを参照します。 | `false` |
| `AZURE_TEANANT_ID` | 利用するAzureテナント名 | |
| `AZURE_CLIENT_ID` | 登録したアプリのクライアントID | |
| `AZURE_CLIENT_SECRET` | 登録したアプリに追加したクライアントシークレット | |
| `AZURE_STORAGE_ACCOUNT_NAME` | 利用するストレージアカウントの名前 | |
| `AZURE_STORAGE_CONTAINER_NAME` | 利用するコンテナの名前 | |
| `AZURE_LIFETIME_SEC_FOR_TEMPORARY_URL` | 署名付きURLのキャッシュを保持する期間(秒数)| 120 |
| `AZURE_REFERENCE_FILE_WITH_RELAY_MODE` | `true` の場、GROWI サーバーが添付ファイルデータを送信します(relay mode). `false` (デフォルト値)の場合は、その場合ユーザーはサーバーによって作成された [共有アクセス署名付き URL](https://learn.microsoft.com/ja-jp/azure/storage/common/storage-sas-overview) によって Azure(Blob) から直接データをダウンロードします。| `false` |
| `AZURE_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` | `true` の場合、Azure(Blob) 関連設定の一部はローカル DB の値を参照せず、環境変数の値のみを参照します。 | `false` |
| **外部システム連携オプション** | | |
| `NCHAN_URI` | 接続する Nginx [Nchan](https://nchan.io/) サーバーの URI | |
| `HACKMD_URI` | 接続する [HackMD(CodiMD)](https://hackmd.io/) サーバーの URI | |
| | このサーバーは GROWI エージェントをロードする必要があります。 セットアップ方法は[こちら](/en/admin-guide/admin-cookbook/integrate-with-hackmd.html)。| |
| `HACKMD_URI_FOR_SERVER` | GROWI Express サーバーが参照する [HackMD(CodiMD)](https://hackmd.io/) のURI。 未設定の場合は `HACKMD_URI` が使用されます。 | |
| `PLANTUML_URI` | 接続する [PlantUML](https://plantuml.com/ja/) サーバーの URI | |
| `DRAWIO_URI` | 接続する [diagrams.net(draw.io)](https://www.diagrams.net/) サーバーの URI | |
| `S2SMSG_PUBSUB_SERVER_TYPE` |  | |
| | : `nchan` Nginx [Nchan](https://nchan.io/) を利用します | |
| | : `redis` (未実装) | |
| `S2SMSG_PUBSUB_NCHAN_PUBLISH_PATH` | Nchan サーバーの publish エンドポイントのパス | `/pubsub` |
| `S2SMSG_PUBSUB_NCHAN_SUBSCRIBE_PATH` | Nchan サーバーの subscribe エンドポイントのパス | `/pubsub` |
| `S2SMSG_PUBSUB_NCHAN_CHANNEL_ID` | Nchan サーバーの接続チャンネルID | |
| `PROMSTER_ENABLED` | [Promster](https://github.com/tdeekens/promster) サーバーの有効化 | `false` |
| `PROMSTER_PORT` | Promster サーバーを起動するポート | 7788 |
| `SLACKBOT_TYPE` | Slack 連携を行う際に利用する Slack Bot のタイプ |  |
| `SLACKBOT_WITHOUT_PROXY_SIGNING_SECRET` | Custom bot without proxy 環境下で利用する Signing Secret 文字列 |  |
| `SLACKBOT_WITHOUT_PROXY_BOT_TOKEN` | Custom bot without proxy 環境下で利用する Bot トークン文字列 |  |
| `SLACKBOT_WITH_PROXY_PROXY_URI` | Custom bot with proxy 環境下で利用する slackbot-proxy サーバーの URI |  |
| `SLACKBOT_WITH_PROXY_SALT_FOR_GTOP` | Official bot または Custom bot with proxy 環境下で利用するトークンを生成する際の salt (GROWI to Proxy 向き) | `gtop` |
| `SLACKBOT_WITH_PROXY_SALT_FOR_PTOG` | Official bot または Custom bot with proxy 環境下で利用するトークンを生成する際の salt (GROWI to Proxy 向き) | `ptog` |
| **管理設定を上書きする環境変数** | | |
| `APP_SITE_URL_USES_ONLY_ENV_VARS` | `true` の場合、サイト URL の設定値はローカル DB の値を参照せず、環境変数の値のみを参照します。 | `false` |
| `FILE_UPLOAD_USES_ONLY_ENV_VAR_FOR_FILE_UPLOAD_TYPE` |`true` の場合、ファイルアップロードタイプの設定値はローカル DB の値を参照せず、環境変数の値のみを参照します。|`false`|
| `LOCAL_STRATEGY_ENABLED` | `true` の場合、ID/Pass ログインが有効になります。 | |
| `LOCAL_STRATEGY_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` | `true` の場合、ID/Pass オプションの設定値はローカル DB の値を参照せず、環境変数の値のみを参照します。 | `false` |
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
