# システムの起動

## 初回起動

GROWI-Dev devcontainer 内のターミナルで作業します。

### 依存ライブラリの取得

npx を用いて lerna bootstrap を実行します。

``` bash
npx lerna bootstrap
```

::: danger
monorepo を採用しているため、依存関係管理には [lerna](https://lerna.js.org/) を使います。
`yarn install` または、`npm install` は利用しないでください
:::

### データマイグレーション

``` bash
cd packages/app
yarn migrate
```

### フロントエンド・バックエンドサーバーの起動

新たに2つのターミナルを作成し、それぞれフロントエンドビルドのサーバー、バックエンドのサーバーを起動します。  
それぞれ、`Ctrl-C`で終了することが出来ます。

#### フロントエンド開発用サーバー

1. `cd packages/app`
1. `yarn dev:client`
   - クライアントコードをビルドし、webpack-dev-server を起動します
   - クライアント用ファイル群の変更を検知し、リビルドします

#### バックエンド開発用サーバー

1. `cd packages/app`
1. `yarn dev:server`
   - Express サーバーを起動します
   - サーバー用ファイル群の変更を検知し、Express サーバーをリスタートします


## 2回目以降の起動

毎回、上記の [初回起動](#初回起動) のセクションを全て実行してください。

[依存ライブラリの取得](#依存ライブラリの取得) のセクションは、node_modules 内に lerna パッケージが存在する場合、yarn 経由で実行可能です。

``` bash
yarn lerna bootstrap
```

## production 用の成果物をビルドして起動

上記の [初回起動](#初回起動) のセクションを参考に、以下を実行してください。

1. 依存ライブラリの取得
1. production 用にフロントエンドをビルドし、バックエンドサーバーを起動

    ```bash
    yarn start
    ```

## npm コマンドリスト

開発で使う主なコマンド紹介です。

::: tip
以下のコマンドは `packages/app` ディレクトリ下で実行してください。
:::

|command|詳細|
|--|--|
|`dev:client`|開発用にクライアントのビルドを行い、webpack-dev-server を起動します<br>ファイルを監視し、変更時に自動で再ビルドします。|
|`dev:server`|開発用に Express サーバーを起動します<br>ファイルを監視し、変更時に自動で再起動します。|
|`test`|単体テスト、統合テストを実行します。|
|`lint`|コードの linting を実施します。|
|`migrate:create`|マイグレーションファイルを作成します。|
|`migrate:status`|マイグレーションの適用状態をチェックします。|
|`migrate:up`|全ての未適用のマイグレーションを適用します。|
|`migrate:down`|適用済みのマイグレーションのうち、最新のもの1つを適用前の状態に戻します。|
|`migrate`|*[エイリアス]* `migrate:up` を実行します|
