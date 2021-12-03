# 環境変数の設定

## 設定ファイル

* `packages/app/.env*`
* `packages/slackbot-proxy/.env*`

[dotenv-flow](https://github.com/kerimdzhanov/dotenv-flow) を確認してください。

## 開発時のみ利用できる環境変数

|環境変数|詳細|
|---|---|
|`PLUGIN_NAMES_TOBE_LOADED`|開発時にロードする GROWI プラグインリストを指定します。詳しくは [プラグイン](/ja/dev/plugin/architecture.html) を参照してください。|
|`DEV_HTTPS`|`resource/certs/localhost` にある自己署名証明書を利用し、Express サーバーを HTTPS で起動します。|
