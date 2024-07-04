# 開発を始めましょう

## Git の操作について

::: tip
ブランチ操作、reset, rebase 操作に慣れていない人は必ず Git Graph を利用し、樹形図を常に確認しながら開発を進めるようにしてください。
:::

## 初回起動

GROWI-Dev devcontainer 内のターミナルで作業します。

### 依存ライブラリの取得

npx を用いて lerna bootstrap を実行します。

``` bash
npx lerna bootstrap
```

::: danger
monorepo を採用しているため、依存関係の管理には [lerna](https://lerna.js.org/) を使います。
`yarn install` または、`npm install` は利用しないでください
:::


### アプリケーション開発用サーバーの起動

ターミナルを開き、開発用のサーバーを起動します。  
`Ctrl-C`で終了できます。

1. `cd packages/app`
1. `yarn dev`
   - Express サーバー、Next.js 開発用サーバーを起動します
   - ファイル群の変更を検知し、リビルドします

### プリセットテーマのオートビルド

プリセットテーマのソース(scss)は本体(`packages/app`)とは別のパッケージ `packages/preset-themes` で管理されており、本体の `yarn dev` 時に1度だけビルドされます。
プリセットテーマのルック＆フィールを修正するにあたって開発用サーバーで変更を検知しながらコーディングを行うには、新たにターミナルを開いて以下のコマンドを実行してください。  
`Ctrl-C`で終了できます。

1. `cd packages/preset-themes`
1. `yarn dev`


## 2回目以降の起動

毎回、上記の [初回起動](#初回起動) のセクションを全て実行してください。

[依存ライブラリの取得](#依存ライブラリの取得) のセクションは、node_modules 内に lerna パッケージが存在する場合、yarn 経由で実行可能です。

``` bash
yarn lerna bootstrap
```

## npm コマンドリスト

開発で使う主なコマンド紹介です。  
全てのコマンドは `packages/app/package.json` の script セクションを参照してください。

::: tip
以下のコマンドは `packages/app` ディレクトリ下で実行してください。
:::

|command|詳細|
|--|--|
|`dev`|開発用に Express サーバーを起動します<br>ファイルを監視し、変更時に自動でリビルドします。|
|`test`|単体テスト、統合テストを実行します。|
|`lint`|コードの linting を実施します。|
|`migrate:create`|マイグレーションファイルを作成します。|
|`migrate:status`|マイグレーションの適用状態をチェックします。|
|`migrate:up`|全ての未適用のマイグレーションを適用します。|
|`migrate:down`|適用済みのマイグレーションのうち、最新のもの1つを適用前の状態に戻します。|
|`migrate`|*[エイリアス]* `migrate:up` を実行します|


## production 用の成果物をビルドして起動

::: tip
以下のコマンドはリポジトリのルートディレクトリで実行してください。
:::

1. 依存ライブラリの取得

    ``` bash
    npx lerna bootstrap
    ```

1. production 用にビルド

    ```bash
    yarn lerna run build
    ```
