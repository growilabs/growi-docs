# 起動

## 初回起動

### リポジトリの clone

```bash
$ git clone https://github.com/weseek/growi.git
```

### 実行環境のバージョンの確認

[開発環境の構築\#バージョンの確認](construct.md#bjonno) を参照

### 開発用データストアの準備

[開発環境の構築\#開発環境の依存インフラの準備](construct.md#noinfurano) で作成した Docker 利用可能な環境で以下を実行

```bash
git clone https://github.com/weseek/growi-docker-compose.git
cd growi-docker-compose
docker-compose -f docker-compose.dev.yml up
```

以下のコンテナ群が起動します

| Product | Port | Desc |
| --- | --- | --- |
| MongoDB | 27017 |  |
| ElasticSearch | 9200 |  |
| [elasticsearch-head](https://github.com/mobz/elasticsearch-head) | 9100 | A web front end for an Elasticsearch cluster |

`docker-compose.dev.yml`は、以下のコンテナを起動します

### 依存ライブラリの取得

```bash
$ yarn
```

{% hint style="danger" %}
`npm install`は利用しないでください
{% endhint %}

### フロントエンド・バックエンドサーバーの起動

1. `npm run build`
   1. クライアントをビルドし、webpack-dev-server を起動します
   2. クライアント用ファイル群の変更を検知し、リビルドします
2. `npm run server`
   1. Express サーバーを起動します
   2. サーバー用ファイル群の変更を検知し、Express サーバーをリスタートします

それぞれ、`Ctrl-C`で終了します

### ElasticSearch の有効化

1. `config/env.dev.js`を編集し、以下の行を有効化
   1. ```javascript
      ELASTICSEARCH_URI: 'http://localhost:9200/growi',
      ```
2. Express サーバーを再起動

## 2回目以降の起動

上記の [初回起動](launch.md#chu-hui-qi) のセクションを参考に、以下を実行

1. 実行環境のバージョンの確認
2. コンテナ群の起動
3. 依存ライブラリの取得
4. フロントエンド・バックエンドサーバーの起動

## List of npm commands

\(執筆中\)

