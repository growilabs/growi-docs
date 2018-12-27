# Logger

::: tip
GROWI は [Bunyan](https://github.com/trentm/node-bunyan) および [browser-bunyan](https://github.com/philmander/browser-bunyan) を利用しています。

また、古いコードでは [debug](https://www.npmjs.com/package/debug) を利用してログを出力していますが、 `debug()` は Bunyan の `logger.debug()` に置き換えられます。
:::

## ログレベル

* ログレベルの定義は [Bunyan#Levels](https://github.com/trentm/node-bunyan#levels) を参照してください

デフォルトでは環境毎に以下のログレベルが設定されています。

* Development
  * `info`
* Production
  * `info`

## ログの記録

[Bunyan#Log Method API](https://github.com/trentm/node-bunyan#log-method-api) を参照してください。

## ログの出力設定の変更

以下の2つの方法でログの出力設定を行う事ができます。

### 環境毎の設定ファイルを編集する

* Development
  * `config/logger/config.dev.js`
* Production
  * `config/logger/config.prod.js`

#### 設定ルール
* `${ログネームスペース}: '${ログレベル}',` の形式で列挙してください  
    e.g.
    ```java{4,5}
    module.exports = {
      default: 'info',

      'growi:crowi': 'debug',
      'growi:routes:login-passport': 'debug',
    }
    ```
* デフォルトのログレベルは、キー `default` で変更することができます

### 環境変数で設定する

::: warning
環境変数による設定は、上記の設定ファイルの設定を上書きします
:::

#### 設定ルール

* `${ログレベルの大文字表現}=${ログネームスペース1},${ログネームスペース2}, ...`

e.g.
```bash
DEBUG=growi:crowi,growi:routes:login-passport
WARN=growi:crowi:express-init
```