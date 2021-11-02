# クイックスタート

::: tip
以下の説明は、[開発環境の構築](../startup/dev-env.md) および [起動](../startup/launch.md) ページで紹介されている環境が構築されている前提で記述されています
:::

プラグインを開発するのに最も簡単な方法は、ボイラープレートである [growi-plugin-boilerplate](https://github.com/weseek/growi-plugin-boilerplate) をコピーし、それを元にオリジナルのリポジトリを作ることです。

Clone とリネーム
--------------

```bash
git clone https://github.com/weseek/growi-plugin-boilerplate
mv growi-plugin-boilerplate growi-plugin-myplugin
```

命名規則に注意してください。
GROWI は、[Node.js のモジュール解決](https://nodejs.org/dist/latest-v10.x/docs/api/modules.html#modules_loading_from_node_modules_folders) の仕組みを利用し、
`growi-plugin-` プレフィクスを持つパッケージを自動検出します。
そのため、開発対象のプラグインのディレクトリは `growi-plugin-*` の形式かつ GROWI 本体からロード可能なモジュールディレクトリに配置される必要があります。

通常は以下のようなディレクトリ構成をおすすめします。

```
- somewhere
    - growi                         <-- GROWI
    - node_modules
        - growi-plugin-my-plugin    <-- Your Plugin to develop
```

次に、`package.json` を書き換えます。最低限必要なのは `name` の値です。

```json
...
"name": "growi-plugin-myplugin",
...
```

こちらもディレクトリ名と同様に `growi-plugin-` プレフィクスを付けてください。

依存関係解決
-----------

プラグインが必要とするパッケージをインストールします。`growi-plugin-myplugin` ディレクトリ下で実行してください。

``` bash
yarn
```

::: danger
`npm install` は利用しないでください
:::


開発環境の起動
--------------

本番環境でプラグインを利用する場合は、あらかじめ npm パッケージとして公開された GROWI プラグインを `yarn` を用いてインストールしますが、開発時はその手順は不要です。

代わりに設定ファイルにリストされたプラグインを擬似的にインストールされた状態として扱うことで、`npm link` による設定を行う事無くシームレスな開発を実現しています。


### 本体の設定

1. GROWI のフロントエンドサーバー・バックエンドサーバーが起動している場合は両方とも終了させる
1. GROWI 本体側の設定ファイル `config/env.dev.js` を編集

    ```
    module.exports = {
      ...

      PLUGIN_NAMES_TOBE_LOADED: [
        'growi-plugin-myplugin',
      ],

      ...
    };
    ```

### 本体の起動

- フロントエンドサーバーの起動
    - [起動](../startup/launch.html) ページの内容に従って起動
    - クライアントビルド時に以下のログを確認
        ```
        ...

        > node bin/generate-plugin-definitions-source.js
        
        12:52:55.765Z  INFO growi:bin:generate-plugin-definitions-source: Detected plugins:  []
        12:52:55.770Z  INFO growi:bin:generate-plugin-definitions-source: Detected plugins from PLUGIN_NAMES_TOBE_LOADED:  [ 'growi-plugin-myplugin' ]

        ...
        ```
- サーバー
    - [起動](../startup/launch.html) ページの内容に従って起動
    - サーバー起動時に以下のログを確認
        ```
        ...

        13:17:03.647Z  INFO growi:plugins:PluginService: load plugin 'growi-plugin-myplugin'
        
        ...
        ```

プラグイン側のソースの編集をトリガに、自動でクライアントビルドとサーバー再起動が行われます。


プラグインの利用
---------------

それでは使ってみましょう。

[growi-plugin-boilerplate](https://github.com/weseek/growi-plugin-boilerplate) のソースコードを何も改変していなければ、Markdown 中で `$foo` タグと `$bar` タグが利用可能になります。


### `$foo` タグ

任意のページを編集し、以下を入力してください。

```
$foo()
```

出力は以下のようになるはずです。

> $foo() (-> Error: set 'range' option. e.g. 'range=1:10')

これは、`$foo` タグが `range` オプションを必須のパラメータとして取るように実装されているためです。
入力を以下のように変更します。

```
$foo(range=1:10)
```

すると出力は以下のように変わります。

> FooContext has been parsed! - range: 1 - 10



### `$bar` タグ

次はサーバーと通信を行う実装のサンプルです。
任意のページを編集し、以下を入力してください。

```
$bar()
```

サーバーとの通信後、以下を出力するはずです。

> The author of this page is "someone".

"someone" の部分は、編集中のページの作成者のユーザー名か、あるいは未作成のページの場合は現在ログイン中のユーザーの名前が表示されます。
