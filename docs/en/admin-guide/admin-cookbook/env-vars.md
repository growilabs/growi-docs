# Environment Variables

| Enviroment Variable | Description | Default Value |
| ------------------- | ----------: | ------------- |
| `MONGO_URI` | URI to connect to MongoDB. | `mongodb://localhost/growi` |
| `NO_CDN` | If `true`, system doesn't use CDN, all resources will be downloaded from CDN when build client, and served by the GROWI Express server. | `false` |
| `ELASTICSEARCH_URI` | URI to connect to Elasticearch. | |
| `REDIS_URI` | URI to connect to Redis (use it as a session store instead of MongoDB). | |
| `PASSWORD_SEED` | A password seed used by password hash generator. | |
| `SECRET_TOKEN` | A secret key for verifying the integrity of signed cookies. | |
| `SESSION_NAME` | The name of the session ID cookie to set in the response by Express. | `connect.sid` |
| `SAML_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` | If `true`, the system uses only the value of the environment variable as the value of the SAML option that can be set via the environment variable. | `false` |
| `FORCE_WIKI_MODE` | Forces wiki mode. | `undefined` |
| | : `undefined` Publicity will be configured by the admin security page settings | |
| | : `public` Forces all pages to become public | |
| | : `private` Forces all pages to become private | |
| `FORMAT_NODE_LOG` | If `false`, Output server log as JSON. (Enabled only when `NODE_ENV=production`) | `true` |
| `MATHJAX` | (TBD) | |
| `USER_UPPER_LIMIT` | (TBD) | |
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
| `GCS_API_KEY_JSON_PATH` | Path of the JSON file that contains [service account key to authenticate to GCP API](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) | |
| `GCS_BUCKET` | Name of the GCS bucket | |
| `GCS_UPLOAD_NAMESPACE` | Directory name to create in the bucket | |
| **Option to integrate with external systems** | | |
| `HACKMD_URI` | URI to connect to [HackMD(CodiMD)](https://hackmd.io/) server. | |
| | This server must load the GROWI agent. [Here's how to prepare it](/en/admin-guide/admin-cookbook/integrate-with-hackmd.html). | |
| `HACKMD_URI_FOR_SERVER` | URI to connect to [HackMD(CodiMD)](https://hackmd.io/) server from GROWI Express server. If not set, `HACKMD_URI` will be used. | |
| `PLANTUML_URI` | URI to connect to [PlantUML](http://plantuml.com/) server. | |
| `BLOCKDIAG_URI` | URI to connect to [blockdiag](http://http://blockdiag.com/) server. | |
| `DRAWIO_URI` | URI to connect to [diagrams.net(draw.io)](https://www.diagrams.net/) server. | |
| **Option (Overwritable in admin page)** | | |
| `APP_SITE_URL` | Site URL. e.g. `https://example.com`, `https://example.com:8080` | |
| `LOCAL_STRATEGY_ENABLED` | Enable or disable ID/Pass login | |
| `LOCAL_STRATEGY_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` | Prioritize env vars than values in DB for some ID/Pass login options | |
| `SAML_ENABLED` | Enable or disable SAML | |
| `SAML_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` | Prioritize env vars than values in DB for some SAML options | |
| `SAML_ENTRY_POINT` | IdP entry point | |
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


