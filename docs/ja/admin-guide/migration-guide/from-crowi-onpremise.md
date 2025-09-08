# Crowi (オンプレミス) からの移行

## 概要

- Crowi オンプレミス **v1.6.x** から、GROWI オンプレミス **v3.x** への移行を想定
- MongoDB は既存のものをそのまま利用することを想定

::: tip
- Redis は既存のものをそのまま利用することを想定、もしくは利用しなくても構わない
- GROWI v3.0.7 以降では、`REDIS_URL` が設定されていない場合は MongoDB をセッションストアとして利用するため
:::

::: warning
- ElasticSearch サーバーは指定バージョンの利用とプラグイン追加が必要
:::

## Node.js 実行環境の準備

- [README.md#dependencies](https://github.com/growilabs/growi/blob/master/README.md#dependencies) を参考に、Node.js, npm, yarn をセットアップする
  - Node.js は 10.x にアップグレード
  - yarn は新規インストール

## ElasticSearch のバージョンアップ及びプラグイン追加

1. バージョン 6.6 以上を利用する  
1. 以下のプラグインをインストールする
    - [Japanese (kuromoji) Analysis plugin](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-kuromoji.html)
        ```bash
        sudo bin/elasticsearch-plugin install analysis-kuromoji
        ```
    - [ICU Analysis Plugin](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu.html)
        ```bash
        sudo bin/elasticsearch-plugin install analysis-icu
        ```

## 起動手順の変更

### Before

#### 事前準備

```bash
# clone
git clone https://github.com/crowi/crowi.git
cd crowi
# install dependencies and build client
npm install
```

#### 起動スクリプト例

```bash
export PASSWORD_SEED=somesecretstring
export MONGO_URI=mongodb://MONGO_HOST:MONGO_PORT/crowi
export REDIS_URL=redis://REDIS_HOST:REDIS_PORT/crowi
export ELASTICSEARCH_URI=http://ES_HOST:ES_PORT/crowi
node app.js
```

### After

#### 事前準備

```bash
# clone
git clone https://github.com/growilabs/growi.git
cd growi
# install dependencies and build client
yarn
npm run build:prod
```

#### 起動スクリプト変更例

```bash
export PASSWORD_SEED=somesecretstring                   # 変更無し
export MONGO_URI=mongodb://MONGO_HOST:MONGO_PORT/crowi  # 変更無し
export REDIS_URL=redis://REDIS_HOST:REDIS_PORT/crowi    # 変更無しまたは削除
export ELASTICSEARCH_URI=http://ES_HOST:ES_PORT/crowi   # 変更無し
npm run server:prod
```
