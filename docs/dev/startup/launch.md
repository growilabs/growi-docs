# 起動

## 初回起動

### リポジトリの clone

``` bash
git clone https://github.com/weseek/growi.git
```

### 実行環境のバージョンの確認

[開発環境の構築#バージョンの確認](dev-env.md#バージョンの確認) を参照

### 開発用データストアの準備

Docker 利用可能な環境で以下を実行

::: tip
Windows の場合は [開発環境の構築#開発環境の依存インフラの準備](dev-env.md#開発環境の依存インフラの準備) で準備した Linux マシンの中で実行する
:::

``` bash
git clone https://github.com/weseek/growi-docker-compose.git
cd growi-docker-compose
docker-compose -f docker-compose.dev.yml up
```

以下のコンテナ群が起動します

| Product | Port | Desc |
| :--- | :--- | :--- |
| MongoDB | 27017 |  |
| ElasticSearch | 9200 |  |
| [elasticsearch-head](https://github.com/mobz/elasticsearch-head) | 9100 | A web front end for an Elasticsearch cluster |

### 依存ライブラリの取得

``` bash
yarn
```

::: danger
`npm install` は利用しないでください
:::

### データマイグレーション

``` bash
npm run migrate
```

### フロントエンド・バックエンドサーバーの起動

1. `yarn build`
   1. クライアントをビルドし、webpack-dev-server を起動します
   2. クライアント用ファイル群の変更を検知し、リビルドします
2. `yarn server`
   1. Express サーバーを起動します
   2. サーバー用ファイル群の変更を検知し、Express サーバーをリスタートします

それぞれ、`Ctrl-C`で終了します

## 2回目以降の起動

上記の [初回起動](launch.md#初回起動) のセクションを参考に、以下を実行

1. 実行環境のバージョンの確認
2. コンテナ群の起動
3. 依存ライブラリの取得
4. データマイグレーション
5. フロントエンド・バックエンドサーバーの起動

## npm コマンドリスト

|command|desc|
|--|--|
|`build`|Same to `build:dev:watch`|
|`build:dev`|Build the client without watching file changes|
|`build:dev:watch`|Watch and Re-build the client|
|`build:prod`|Build the client for production|
|`server`|Same to `server:dev:watch`|
|`server:dev`|Launch the server|
|`server:dev:watch`|Watch and Re-start the server|
|`server:prod`|Launch the server for production|
|`start`|Run `build:prod` and `server:prod`|
