# 環境変数の設定

## 設定ファイル

* `config/env.dev.js`

## 開発時のみ利用可能な環境変数

|env variable|desc|
|---|---|
|`PLUGIN_NAMES_TOBE_LOADED`|開発時にロードする GROWI プラグインリストを指定します<br>詳しくは [プラグイン開発](../plugin/) を参照してください|
|`DEV_HTTPS`|`resource/certs/localhost` にある自己署名証明書を利用し、Express サーバーを HTTPS で起動します|
