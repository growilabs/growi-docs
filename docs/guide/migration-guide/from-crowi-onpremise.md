# Migrate from Crowi On-premises

## Overview

- Migrating from Crowi on-premises **v1.6.x** to GROWI on-premises **v3.x**
- Assuming to use the existing MongoDB

::: tip
- Assuming to use the existing Redis or not to use Redis at all.
- GROWI v3.0.7 or later uses MongoDB for the session store if `REDIS_URL` is not set.
:::

::: warning
- The specified version of ElasticSearch and plugins are required.
:::

## Set up Node.js Environment

- Set up Node.js, npm, and yarn. See [README.md#dependencies](https://github.com/weseek/growi/blob/master/README.md#dependencies).
  - Upgrade Node.js to 10.x
  - Install yarn

## Upgrade ElasticSearch and Add Plugins

1. Use v6.6 or later.
1. Install the plugins below.
    - [Japanese (kuromoji) Analysis plugin](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-kuromoji.html)
        ```bash
        sudo bin/elasticsearch-plugin install analysis-kuromoji
        ```
    - [ICU Analysis Plugin](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu.html)
        ```bash
        sudo bin/elasticsearch-plugin install analysis-icu
        ```

## Change the Launch Process

### Before

#### Preparation

```bash
# clone
git clone https://github.com/crowi/crowi.git
cd crowi
# install dependencies and build client
npm install
```

#### Example Launch Script

```bash
export PASSWORD_SEED=somesecretstring
export MONGO_URI=mongodb://MONGO_HOST:MONGO_PORT/crowi
export REDIS_URL=redis://REDIS_HOST:REDIS_PORT/crowi
export ELASTICSEARCH_URI=http://ES_HOST:ES_PORT/crowi
node app.js
```

### After

#### Preparation

```bash
# clone
git clone https://github.com/weseek/growi.git
cd growi
# install dependencies and build client
yarn
npm run build:prod
```

#### Example Launch Script

```bash
export PASSWORD_SEED=somesecretstring                   # no changes
export MONGO_URI=mongodb://MONGO_HOST:MONGO_PORT/crowi  # no changes
export REDIS_URL=redis://REDIS_HOST:REDIS_PORT/crowi    # no changes / remove this line
export ELASTICSEARCH_URI=http://ES_HOST:ES_PORT/crowi   # no changes
npm run server:prod
```
