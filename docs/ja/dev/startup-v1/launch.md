# (旧版) 起動

::: warning
このページで紹介している開発スタートアップは**旧版**です。  
ホストOSで Node.js をセットアップし、実行します。

より快適に開発するには、Dev in Container を採用した [開発スタートアップ v2](./ja/dev/startup-v2/dev-env.html) を利用してください。
:::

## 初回起動

### リポジトリの clone

``` bash
git clone https://github.com/weseek/growi.git
```

### 実行環境のバージョンの確認

[開発環境の構築#バージョンの確認](/ja/dev/startup-v1/dev-env.html#バージョンの確認) を参照してください。

### 開発用データストアの準備

Docker を利用できる環境で以下を実行してください。

::: tip
Windows の場合は [開発環境の構築#開発環境の依存インフラの準備](/ja/dev/startup-v1/dev-env.html#開発環境の依存インフラの準備) で準備した Linux マシンの中で実行する。

docker-compose コマンドがない場合はインストールしよう  
[docker docs公式ページ　Install Docker Compose](https://docs.docker.com/compose/install/)

:::

``` bash
git clone https://github.com/weseek/growi-docker-compose.git
cd growi-docker-compose
docker-compose -f docker-compose.dev.yml up
```

以下のコンテナ群が起動します。

| Product | Port | Desc |
| :--- | :--- | :--- |
| MongoDB | 27017 |  |
| ElasticSearch | 9200 |  |
| [elasticsearch-head](https://github.com/mobz/elasticsearch-head) | 9100 | A web frontend for an Elasticsearch cluster |

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

それぞれ、`Ctrl-C`で終了することが出来ます。

## 2回目以降の起動

上記の [初回起動](#初回起動) のセクションを参考に、以下を実行します。

1. 実行環境のバージョンの確認
2. 開発用データストアの準備
3. 依存ライブラリの取得
4. データマイグレーション
5. フロントエンド・バックエンドサーバーの起動

## npm コマンドリスト

|command|詳細|
|--|--|
|`build`|`build:dev:watch` を実行します|
|`build:dev`|開発用にクライアントのビルドを行います（自動で再ビルドしない）|
|`build:dev:watch`|開発用にクライアントのビルドを行います（変更時に自動で再ビルドします）|
|`build:prod`|プロダクション用にクライアントのビルドを行います|
|`server`|`server:dev:watch` を実行します|
|`server:dev`|開発用にサーバーを起動します|
|`server:dev:watch`|ファイルを監視して変更時に自動で再起動します|
|`server:prod`|プロダクション用にサーバーを起動します|
|`start`|`build:prod` と `server:prod` を実行します|
