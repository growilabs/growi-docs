# 開発を始めましょう

## Git の操作について

::: tip
ブランチ操作、reset, rebase 操作に慣れていない人は必ず Git Graph を利用し、樹形図を常に確認しながら開発を進めるようにしてください。
:::

## 初回起動

GROWI-Dev devcontainer 内のターミナルで作業します。

### 依存ライブラリの取得

`turbo` コマンドで `bootstrap` スクリプトを実行してください。

``` bash
turbo run bootstrap
```

代わりに、`pnpm` コマンドを使うこともできます。

``` bash
cd ${project root dir}
pnpm install
```

::: danger
`npm install`, `yarn` は利用しないでください
:::


### アプリケーション開発用サーバーの起動

ターミナルを開き、開発用のサーバーを起動します。  
`Ctrl-C`で終了できます。

1. `cd apps/app`
1. `turbo run dev`
   - Express サーバー、Next.js 開発用サーバーを起動します
   - 依存するサブパッケージの `dev` script を実行したあと、本体の `dev` スクリプトが実行されます
   - apps/app 配下のファイル群の変更を検知し、リビルドします

### サブパッケージのオートビルド

サブパッケージは本体(`apps/app`)とは別のパッケージ `packages/*` で管理されており、本体の `dev` スクリプトでは変更検知および自動ビルドが走りません。  
サブパッケージのソースコードの変更を検知しながらコーディングを行うには、新たにターミナルを開いて以下のコマンドを実行してください。  

以下の例は `packages/core` パッケージをウォッチする例です。`Ctrl-C`で終了できます。

1. `cd packages/core`
1. `turbo run watch`


## 2回目以降の起動

毎回、上記の [初回起動](#初回起動) のセクションを全て実行してください。

## npm スクリプトリスト

開発で使う主なスクリプトの紹介です。  
全てのコマンドは `apps/app/package.json` の script セクションを参照してください。

::: tip
以下のコマンドは `apps/app` ディレクトリ下で実行してください。
:::

|command|詳細|
|--|--|
|`dev`|開発用に Express サーバーを起動します<br>ファイルを監視し、変更時に自動でリビルドします。|
|`dev:migrate:create`|マイグレーションファイルを作成します。|
|`dev:migrate:status`|マイグレーションの適用状態をチェックします。|
|`dev:migrate:up`|全ての未適用のマイグレーションを適用します。|
|`dev:migrate:down`|適用済みのマイグレーションのうち、最新のもの1つを適用前の状態に戻します。|
|`dev:migrate`|*[エイリアス]* `migrate:up` を実行します|
|`lint`|コードの linting を実施します。|
|`test`|単体テスト、統合テストを実行します。|


## Production 用の成果物をビルドして起動

::: tip
以下のコマンドは `apps/app` ディレクトリ下で実行してください。
:::

1. 依存ライブラリの取得

    ``` bash
    turbo run bootstrap
    ```

1. Production 用にビルド

    ```bash
    turbo run build
    ```


## MongoDB for VS Code を利用してデータベースにアクセスする

<https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode>

追加する接続先: `mongodb://mongo`
