# アーキテクチャ

(TBD)

## エントリーポイント

GROWI 本体がプラグインパッケージを検出[^detect]すると、GROWI 本体はそれぞれのプラグインの [メタデータ](/ja/dev/plugin/metadata.html) を解析します。この時、クライアントサイドとサーバーサイドそれぞれのエントリーポイントとなるメソッドを記憶します。

[^detect]: 検出のタイミングは、クライアントサイドでは webpack によるクライアントビルド時、サーバーサイドではサーバー起動時です。

### クライアントサイドでの呼び出し

- ブラウザによって GROWI クライアントの初期化が行われる際に、プラグインのエントリーポイントのメソッドを呼び出します
  - この時、1つの引数が渡されます
    1. 本体側の [unstated](https://github.com/jamiebuilds/unstated) Container 実装である [AppContainer](https://github.com/weseek/growi/blob/master/packages/app/src/client/services/AppContainer.js) インスタンス

### サーバーサイドでの呼び出し

- GROWI サーバー起動時、プラグインのエントリーポイントのメソッドを呼び出します
  - この時、2つの引数が渡されます
    1. [Crowi](https://github.com/weseek/growi/blob/master/packages/app/src/server/crowi/index.js) インスタンス
    1. [Express](https://expressjs.com) の [Application](https://expressjs.com/ja/4x/api.html#app) インスタンス
