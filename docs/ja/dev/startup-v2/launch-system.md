# システムの起動

## 初回起動

GROWI-Dev devcontainer 内のターミナルで作業します。

### 依存ライブラリの取得

lerna が入っていないので npx で実行します。

``` bash
npx lerna bootstrap
```

::: danger
`yarn` または、`npm install` は利用しないでください
:::

### データマイグレーション

``` bash
yarn migrate
```

### フロントエンド・バックエンドサーバーの起動

新たに2つのターミナルを作成し、それぞれフロントエンドビルドのサーバー、バックエンドのサーバーを起動します。

1. `yarn build`
   1. クライアントをビルドし、webpack-dev-server を起動します
   2. クライアント用ファイル群の変更を検知し、リビルドします
1. `yarn server`
   1. Express サーバーを起動します
   2. サーバー用ファイル群の変更を検知し、Express サーバーをリスタートします

それぞれ、`Ctrl-C`で終了することが出来ます。


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

|command|詳細|
|--|--|
|**`build`**|`build:dev:watch` を実行します|
|`build:dev`|開発用にクライアントのビルドを行います（自動で再ビルドしない）|
|`build:dev:watch`|開発用にクライアントのビルドを行います（変更時に自動で再ビルドします）|
|`build:prod`|プロダクション用にクライアントのビルドを行います|
|**`server`**|`server:dev:watch` を実行します|
|`server:dev`|開発用にサーバーを起動します|
|`server:dev:watch`|ファイルを監視して変更時に自動で再起動します|
|`server:prod`|プロダクション用にサーバーを起動します|
|`start`|`build:prod` と `server:prod` を実行します|
