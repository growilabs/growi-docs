---
pageClass: admin-cookbook-env-vars
---

# Environment Variables

<!-- textlint-disable weseek/use-si-units -->

| Enviroment Variable | Description | Default Value |
| ------------------- | ----------  | ------------- |
| `APP_SITE_URL` | Site URL. e.g. `https://example.com`, `https://example.com:8080` | |
| `MONGO_URI` | URI to connect to MongoDB. | `mongodb://localhost/growi` |
| `PASSWORD_SEED` | A password seed used by the password hash generator. | |
| `SECRET_TOKEN` | A secret key for verifying the integrity of signed cookies. | |
| `SESSION_NAME` | The name of the session ID cookie to set in the response by Express. | `connect.sid` |
| `FORCE_WIKI_MODE` | Forces wiki mode. | `undefined` |
| | : `undefined` Publicity will be configured by the admin security page settings | |
| | : `public` Forces all pages to become public | |
| | : `private` Forces all pages to become private | |
| `DISABLE_LINK_SHARING` | Disable link sharing feature | `false` |
| `FORMAT_NODE_LOG` | If `false`, Output server log as JSON. (Enabled only when `NODE_ENV=production`) | `true` |
| `USER_UPPER_LIMIT` | (TBD) | |
| `MIN_PASSWORD_LENGTH` | Minimum password length that users can set. | 8 |
| `DEFAULT_EMAIL_PUBLISHED` | Default setting for publishing new user email addresses. | `true` |
| `SSR_MAX_REVISION_BODY_LENGTH` | <!-- textlint-disable weseek/terminology --> Maximum number of characters for the body to be Server Side Rendered (SSR). Pages with a body length exceeding this value will no longer be SSR, but will still be rendered on the client side without any issues. <!-- textlint-enable weseek/terminology --> | 3000 |
| `S2CMSG_PUBSUB_CONNECTIONS_LIMIT` | Maximum number of connections for all clients that receive push messages. | 5000 |
| `S2CMSG_PUBSUB_CONNECTIONS_LIMIT_FOR_GUEST` | Maximum number of connections for guest clients that receive push messages. | 2000 |
| `S2CMSG_PUBSUB_CONNECTIONS_LIMIT_FOR_ADMIN` | Maximum number of connections for admin users in admin pages.<br>(This is isolated from `S2CMSG_PUBSUB_CONNECTIONS_LIMIT`)  | 100 |
| `AUDIT_LOG_ENABLED` | If `true`, the Audit Log feature is enabled | `false` |
| `ACTIVITY_EXPIRATION_SECONDS` | Number of seconds to keep the audit log. Audit logs are automatically deleted after a set number of seconds have elapsed since they were created. | `2592000` |
| `AUDIT_LOG_ACTION_GROUP_SIZE` |  Size of action groups to be collected in the audit log (can be `SMALL`, `MEDIUM`, or `LARGE`) | `SMALL` |
| `AUDIT_LOG_ADDITIONAL_ACTIONS` | Add individual actions not included in the action group specified by `AUDIT_LOG_ACTION_GROUP_SIZE`, in CSV format (comma-separated string). | |
| `AUDIT_LOG_EXCLUDE_ACTIONS` | Exclude individual actions in the action group specified by `AUDIT_LOG_ACTION_GROUP_SIZE`, in CSV format (comma-separated string). | |
| `TRUST_PROXY_BOOL` | A boolean [that can be set to the `trust proxy` settings for Express](https://expressjs.com/en/guide/behind-proxies.html) prioritized than `TRUST_PROXY_CSV` and `TRUST_PROXY_HOPS`. | |
| `TRUST_PROXY_CSV` | A CSV value [that can be set to the `trust proxy` settings for Express](https://expressjs.com/en/guide/behind-proxies.html) prioritized than `TRUST_PROXY_HOPS`. | |
| `TRUST_PROXY_HOPS` | A number value [that can be set to the `trust proxy` settings for Express](https://expressjs.com/en/guide/behind-proxies.html). | |
| **Option for file uploading** | | |
| `FILE_UPLOAD` | Attached files storage. | `aws` |
| | : `aws` Amazon Web Service S3 (needs AWS settings on Admin page) | |
| | : `gcs` Google Cloud Storage (needs settings with environment variables) | |
| | : `mongodb` MongoDB GridFS (Setting-less) | |
| | : `local` Server's Local file system (Setting-less) | |
| | : `none` Disable file uploading | |
| `FILE_UPLOAD_DISABLED` | If `true`, file uploading will be disabled. However, the files can be still viewed. | `false` |
| `MAX_FILE_SIZE` | The maximum file size limit for uploads (bytes). | `Infinity` |
| `FILE_UPLOAD_TOTAL_LIMIT` | Total capacity limit for uploads (bytes). | `Infinity` |
| `S3_OBJECT_ACL` | Object ACL. ([Reference: Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl))<br />Set `private` to disable. **(Recommended)** | `public-read` |
| `S3_LIFETIME_SEC_FOR_TEMPORARY_URL` | Time to keep the cache of signed URLs (number of seconds) | 120 |
| `GCS_API_KEY_JSON_PATH` | Path of the JSON file that contains [service account key to authenticate to GCP API](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) | |
| `GCS_BUCKET` | Name of the GCS bucket | |
| `GCS_UPLOAD_NAMESPACE` | Directory name to create in the bucket | |
| `GCS_LIFETIME_SEC_FOR_TEMPORARY_URL` | Time to keep the cache of signed URLs (number of seconds)| 120 |
| `GCS_REFERENCE_FILE_WITH_RELAY_MODE` | If `true`, the GROWI server sends the attachment data (relay mode). In the case of `false` (default value), the users download data from GCS directly by [Signed URLs](https://cloud.google.com/storage/docs/access-control/signed-urls) created by the server. | `false` |
| `GCS_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` | Prioritize env vars over values in DB for some GCS options. | `false` |
| `AZURE_TEANANT_ID` | ID of the application's Microsoft Entra tenant. | |
| `AZURE_CLIENT_ID` | ID of a Microsoft Entra application. | |
| `AZURE_CLIENT_SECRET` | One of the application's client secrets. | |
| `AZURE_STORAGE_ACCOUNT_NAME` | Storage Account Name | |
| `AZURE_STORAGE_CONTAINER_NAME` | Container Name | |
| `AZURE_LIFETIME_SEC_FOR_TEMPORARY_URL` | Time to keep the cache of signed URLs (number of seconds)| 120 |
| `AZURE_REFERENCE_FILE_WITH_RELAY_MODE` |If `true`, the GROWI server sends the attachment data (relay mode). In the case of `false` (default value), the users download data from Azure(Blob) directly by [Shared Access Signatured URLs](https://learn.microsoft.com/en-US/azure/storage/common/storage-sas-overview) created by the server. | `false` |
| `AZURE_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` | Prioritize env vars over values in DB for some Azure(Blob) options.  | `false` |
| **Option for full-text search** | | |
| `ELASTICSEARCH_URI` | URI to connect to Elasticsearch. | |
| `ELASTICSEARCH_VERSION` | Elasticsearch major version that system connects to. (`7` or `8` can be specified) | `8` |
| `ELASTICSEARCH_MAX_BODY_LENGTH_TO_INDEX` | The maximum number of characters per page to create an index. Pages with a body length exceeding this value will not be indexed. | 100000 |
| `ELASTICSEARCH_REINDEX_BULK_SIZE` | The number of page documents to process at once when reindexing | 100 |
| `ELASTICSEARCH_REINDEX_ON_BOOT` | Recreate the index on system boot | `false` |
| `ELASTICSEARCH_REQUEST_TIMEOUT` | Timeout for requests to the Elasticsearch server (msec) | 8000 |
| `ELASTICSEARCH_REJECT_UNAUTHORIZED` | Turn off certificate verification when connecting with HTTPS schema. | `false` |
| **Option to integrate with external systems** | | |
| `REDIS_URI` | URI to connect to Redis (use it as a session store instead of MongoDB). | |
| `NCHAN_URI` | URI to connect to Nginx [Nchan](https://nchan.io/) server. | |
| `HACKMD_URI` | URI to connect to [HackMD(CodiMD)](https://hackmd.io/) server. | |
| | This server must load the GROWI agent. [Here's how to prepare it](/en/admin-guide/admin-cookbook/integrate-with-hackmd.html). | |
| `HACKMD_URI_FOR_SERVER` | URI to connect to [HackMD(CodiMD)](https://hackmd.io/) server from GROWI Express server. If not set, `HACKMD_URI` will be used. | |
| `PLANTUML_URI` | URI to connect to [PlantUML](https://plantuml.com/en/) server. | |
| `DRAWIO_URI` | URI to connect to [diagrams.net(draw.io)](https://www.diagrams.net/) server. | |
| `S2SMSG_PUBSUB_SERVER_TYPE` |  | |
| | : `nchan` Nginx [Nchan](https://nchan.io/) | |
| | : `redis` (Not implemented yet) | |
| `S2SMSG_PUBSUB_NCHAN_PUBLISH_PATH` | Publisher endpoint path for Nchan server | `/pubsub` |
| `S2SMSG_PUBSUB_NCHAN_SUBSCRIBE_PATH` | Subscriber endpoint path for Nchan server | `/pubsub` |
| `S2SMSG_PUBSUB_NCHAN_CHANNEL_ID` | The channel ID to connect to Nchan server | |
| `PROMSTER_ENABLED` | Enable [Promster](https://github.com/tdeekens/promster) server | `false` |
| `PROMSTER_PORT` | The port to launch Promster server | 7788 |
| `SLACKBOT_TYPE` | Type of Slack Bot to use when linking with Slack |  |
| `SLACKBOT_WITHOUT_PROXY_SIGNING_SECRET` | Signing Secret string used for Custom Bot without proxy environment |  |
| `SLACKBOT_WITHOUT_PROXY_BOT_TOKEN` | Bot Token string used for Custom Bot without proxy environment |  |
| `SLACKBOT_WITH_PROXY_PROXY_URI` | URI of slackbot-proxy server used for Custom Bot with proxy environment |  |
| `SLACKBOT_WITH_PROXY_SALT_FOR_GTOP` | Salt (for GROWI to Proxy) when generating tokens for the Official Bot or Custom Bot with proxy environment | `gtop` |
| `SLACKBOT_WITH_PROXY_SALT_FOR_PTOG` | Salt (for GROWI to Proxy) when generating tokens for the Official Bot or Custom Bot with proxy environment | `ptog` |
| **AI function** |  |  |
| `AI_ENABLED` | Enable or disable AI function |  |
| `OPENAI_SERVICE_TYPE` | Type of AI service |  |
|  | `openai` | Use "OpenAI" <!-- TODO: add "`azure-openai`: Use "Azure OpenAI"" -->|
| `OPENAI_API_KEY` | API key for using OpenAI services |  |
| **Option (Overwritable in admin page)** | | |
| `APP_SITE_URL_USES_ONLY_ENV_VARS` | Prioritize env vars over values in DB for Site URL | `false` |
| `FILE_UPLOAD_USES_ONLY_ENV_VAR_FOR_FILE_UPLOAD_TYPE` | Prioritize env var over value in DB for File Upload Type | `false` |
| `LOCAL_STRATEGY_ENABLED` | Enable or disable ID/Pass login | |
| `LOCAL_STRATEGY_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` | Prioritize env vars over values in DB for some ID/Pass login options | `false` |
| `SAML_ENABLED` | Enable or disable SAML | |
| `SAML_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` | Prioritize env vars over values in DB for some SAML options | `false` |
| `SAML_ENTRY_POINT` | IdP entry point | |
| `SAML_ISSUER` | Issuer string to supply to IdP | |
| `SAML_ATTR_MAPPING_ID` | Attribute map for ID | |
| `SAML_ATTR_MAPPING_USERNAME` | Attribute map for username | |
| `SAML_ATTR_MAPPING_MAIL` | Attribute map for email | |
| `SAML_ATTR_MAPPING_FIRST_NAME` | Attribute map for first name | |
| `SAML_ATTR_MAPPING_LAST_NAME` | Attribute map for last name | |
| `SAML_CERT` | PEM-encoded X.509 signing certificate string to validate the response from IdP | |
| `OAUTH_GOOGLE_CLIENT_ID` | Google API client ID for OAuth login. | |
| `OAUTH_GOOGLE_CLIENT_SECRET` | Google API client secret for OAuth login. | |
| `OAUTH_GITHUB_CLIENT_ID` | GitHub API client ID for OAuth login. | |
| `OAUTH_GITHUB_CLIENT_SECRET` | GitHub API client secret for OAuth login. | |
| `OAUTH_TWITTER_CONSUMER_KEY` | Twitter consumer key(API key) for OAuth login. | |
| `OAUTH_TWITTER_CONSUMER_SECRET` | Twitter consumer secret(API secret) for OAuth login. | |

<!-- textlint-enable weseek/sentence-length -->
