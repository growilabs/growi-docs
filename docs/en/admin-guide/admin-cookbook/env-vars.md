# Environment Variables

## Setting File

* `config/env.dev.js`

## Environment Variables 

|Enviroment Variable|Description|
|---|---|
| **Option** ||
|`NODE_ENV`| `production` OR `development`.|
| `FILE_UPLOAD`| Attached files storage. default: `aws`|
| |: `aws` Amazon Web Service S3 (needs AWS settings on Admin page)|
| |: `gcs` Google Cloud Storage (needs settings with environment variables)|
| |: `mongodb` MongoDB GridFS (Setting-less)|
| |:  `local` Server's Local file system (Setting-less)|
| |: `none`  Disable file uploading|
|`MONGO_GRIDFS_TOTAL_LIMIT`| Total capacity limit of MongoDB GridFS (bytes). default: `Infinity`|
|| MONGO_GRIDFS_TOTAL_LIMIT setting takes precedence over FILE_UPLOAD_TOTAL_LIMIT.|
|`MATHJAX`| |
|`NO_CDN`| If `true`, system doesn't use CDN, all resources will be downloaded from CDN when build client, and served by the GROWI Express server. default: `false`.|
|`ELASTICSEARCH_URI`| URI to connect to Elasticearch.|
| `HACKMD_URI`| URI to connect to [HackMD(CodiMD)](https://hackmd.io/) server.|
|| This server must load the GROWI agent. [Here's how to prepare it](/en/admin-guide/admin-cookbook/integrate-with-hackmd.html).|
|`PLUGIN_NAMES_TOBE_LOADED`|Specify plugins to load for development. See [Plugins](/en/dev/plugin/architecture.md).|
|`PUBLISH_OPEN_API`| Publish GROWI OpenAPI resources with [ReDoc](https://github.com/Rebilly/ReDoc). Visit `/api-docs`.|
| `USER_UPPER_LIMIT`| |
|`FORCE_WIKI_MODE`| Forces wiki mode. default: undefined|
| |: `public`   Forces all pages to become public|
| |: `private`  Forces all pages to become private|
| |: `undefined`  Publicity will be configured by the admin security page settings|
|`DEV_HTTPS`|Start HTTPS express server using self-signed certificate in `resource/certs/localhost`.|

