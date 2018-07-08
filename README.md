# README

[![](https://user-images.githubusercontent.com/1638767/38254268-d4476bbe-3793-11e8-964c-8865d690baff.png)](https://growi.org)

## Features

* **Pluggable**
  * You can find plugins from [npm](https://www.npmjs.com/browse/keyword/growi-plugin) or [github](https://github.com/search?q=topic%3Agrowi-plugin)!
* **Features**
  * Create hierarchical pages with markdown
  * Support Authentication with LDAP / Active Directory 
  * Slack Incoming Webhooks Integration
  * [...etc](features.md)
* [**Docker Ready**](https://hub.docker.com/r/weseek/growi)
* [**Docker Compose Ready**](https://github.com/weseek/growi-docker-compose)
  * [Multiple sites](management-cookbook/multi-app.md)
  * [Let's Encrypt による HTTPS 運用](management-cookbook/lets-encrypt-niyoru-https.md)
* Support IE11 \(Experimental\)

## Environment Variables

* **Required**
  * MONGO\_URI: URI to connect to MongoDB.
* **Option**
  * NODE\_ENV: `production` OR `development`.
  * PORT: Server port. default: `3000`
  * REDIS\_URL: URI to connect to Redis \(to session store\).
  * ELASTICSEARCH\_URI: URI to connect to Elasticearch.
  * PLANTUML\_URI: URI to connect to [PlantUML](http://plantuml.com/) server.
  * BLOCKDIAG\_URI: URI to connect to [blockdiag](http://http://blockdiag.com/) server.
  * PASSWORD\_SEED: A password seed used by password hash generator.
  * SECRET\_TOKEN: A secret key for verifying the integrity of signed cookies.
  * SESSION\_NAME: The name of the session ID cookie to set in the response by Express. default: `connect.sid`
  * FILE\_UPLOAD: `aws` \(default\), `local`, `none`

