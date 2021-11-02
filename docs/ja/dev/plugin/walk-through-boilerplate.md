# ボイラープレートを探検する

このページでは、プラグインを開発する際の参考として、ボイラープレートプロジェクト [growi-plugin-boilerplate](https://github.com/weseek/growi-plugin-boilerplate) でどのような処理が行われているかを見ていきます。


## growi-plugin-boilerplate で可能になること

growi-plugin-boilerplate をインストールすると、`$foo` タグおよび `$bar` タグが利用可能になります。(より詳しい説明は [カスタムタグ](./custom-tag.md) ページをご覧ください)

利用時の全体の流れは以下のようになります。

1. ユーザーが Markdown 入力中、`$foo` タグおよび `$bar` タグを利用する
1. Markdown レンダラーに登録された [BasicInterceptor](/en/api/commons/util/basic-interceptor.md) 拡張が上記タグの利用を検出し、React Component を描画
    - `$foo` タグの場合は `Foo` コンポーネント、`$bar` タグの場合は `Bar` コンポーネントを描画する
1. `Bar` コンポーネントは、初期化後に REST によるサーバーサイド API アクセスを行い、取得した情報を描画


クライアントサイドの動作
---------------------

クライアントサイドの詳細を見ていきましょう。

- エントリーポイントは `src/client-entry.js` です
    ::: tip
    エントリーポイントの概要については、[アーキテクチャ](./architecture.md) のページを確認してください
    :::
- `interceptorManager` に対し、2つの [BasicInterceptor](/en/api/commons/util/basic-interceptor.md) 拡張クラスのインスタンスを登録しています


### 2つの [BasicInterceptor](/en/api/commons/util/basic-interceptor.md) 拡張

- `FooBarPreRenderInterceptor`
    - このクラスは、本体側が Markdown の解析段階で発火するイベントに反応するような設計になっています
        - `isInterceptWhen` メソッドの処理によります
    - 上記イベントが起こると、`process` メソッドがトリガされ、ユーザーが入力したタグパターンに合致する記述があるかを調べます
        ::: tip
        プラグインタグの解析用のライブラリとして [customTagUtils](https://docs.growi.org/api/commons/plugin/util/custom-tag-utils.html) を利用できます
    - `$foo()` または `$bar()` の形にマッチした箇所があった場合、後に React Component を描画するための特殊なIDを持つ DOM に置き換えられます
- `FooBarPostRenderInterceptor`
    - HTML のレンダリング後、`FooBarPreRenderInterceptor` で用意された特殊なIDを持つ DOM を対象に、React Component を描画する処理を行います
    - 同時に、カスタムタグのコンテキストデータを作成します
        ::: tip
        カスタムタグの書式を parse してコンテキストデータを作成するためのライブラリとして [TagContext](https://docs.growi.org/api/commons/plugin/model/tag-context.html) を利用できます
    - `$foo` タグの場合は `FooContext`、`$bar` タグの場合は `BarContext` インスタンスを生成し、React Component に渡します


React Component
--------------

### 初期化

Foo コンポーネントおよび Bar コンポーネントが初期化されると、`componentWillMount` で [ステートキャッシュ](./custom-tag.md#ステートキャッシュ) からのステートデータの復元が行われます。キャッシュが見つからなかった場合は改めてコンテキストデータの parse を行います。

### Foo コンポーネント

Foo コンポーネントは、タグのオプションの値を表示するだけの単純な機能のみが実装されています。

[クイックスタート#プラグインの利用](./quick-start.md#プラグインの利用) にあったように、

```
$foo()
```

だけではエラー表示になります。これは `FooContext` の parse 時に、`range` オプションの存在をチェックし、存在しない場合に例外を throw しているからです。

そこで、タグの記述を以下のように変えます。

```
$foo(range=1:10)
```

`1:10` は、スタートを 1 、エンドを 10 とする表現です。
これで parse 処理で例外が発生しなくなり、`Foo` コンポーネントは `fooContext.getOptRange()` から `range` オプションの値を受け取って、正常なアウトプットを行います。

::: tip
カスタムタグのオプションとして Range Expression を適用した値の parse 処理は、[OptionParser](https://docs.growi.org/api/commons/plugin/util/option-parser.html) ライブラリの `parseRange` メソッドの利用が便利です
:::


### Bar コンポーネント

Bar コンポーネントは、サーバーに対する Rest API アクセスを行います。

[クイックスタート#プラグインの利用](./quick-start.md#プラグインの利用) にあったように、

```
$bar()
```

と記述すると、`axios` を利用して `/_api/plugin/bar/author` への HTTP GET リクエストが行われます。(実際の通信内容も確認するとよいでしょう)

URL から分かるように、この route は Bar コンポーネント専用に新たに作成されたものであり、GROWI 本体であらかじめ用意されているものではありません。route の登録については [カスタム route](./custom-route.md) ページ および、この後の [サーバーサイドの動作](#サーバーサイドの動作) セクションをご覧ください。

通信に成功すると、結果オブジェクトから取り出された `res.data.author.username` がステートにセットされ、ローディングスピナーの代わりに表示されるようになります。

#### ステートキャッシュの作成

- `src/client/js/util/TagCacheManagerFactory.js`
- `TagCacheManager` を利用するにあたり、2つのキーを渡しています
    - 第一引数に、プラグイン独自の識別子
    - 第二引数に、カスタムタグ利用時の識別子生成器
        - `$foo` タグまたは `$bar` タグのメソッドおよびオプション値を繋げ、描画時の同一性を定義しています


#### スタイル(CSS)

Bar コンポーネントのローディング時、スピナーが明滅していることに気付きます。これは `src/client/css/bar.css` で定義されているアニメーションで、`Bar.jsx` 内でインポートされることで GROWI アプリケーションに適用されます。

::: warning
このように取り込まれた CSS は直接 head エレメント内に展開されるため、GROWI アプリケーション全体をスコープに適用されることに注意してください。
:::


サーバーサイドの動作
------------------

サーバーサイドの詳細を見ていきましょう。

- エントリーポイントは `src/server-entry.js` です
    ::: tip
    エントリーポイントの概要については、[アーキテクチャ](./architecture.md) のページを確認してください
    :::
- `src/server/routes` を require しています

### ルーティング

- `src/server/routes` 下の `index.js` および `bar.js` で、Express の新たな route `/_api/plugin/bar/author` を定義しています
- アクションに相当する middleware では以下のような処理を行っています
    1. 簡単な `req.query` の値チェック
    1. `Page` モデルを利用して該当するページデータを取得
    1. 作成者の population
    1. 作成者のデータをレスポンス body に入れて HTTP Status 200 で送出


カスタマイズガイド
----------------

以上で growi-plugin-boilerplate の探検は終了です。紹介したコードは多かったかもしれませんが、カスタムタグの実現というスコープでは、独自にロジックの実装が必要なクラスは多くありません。

以下にカスタマイズする際のポイントを列挙します。上から順に少しずつ改変して実装することで、比較的簡単にオリジナルのカスタムタグを実装することが可能です。

- [メタデータ](metadata.md)に関しては特に編集する必要はない
- `BasicInterceptor` 拡張に関しては、ほとんどの部分を流用できる
    - PreRenderInterceptor は、実装したいタグのパターンの差し替えのみ
    - PostRenderInterceptor は、実装したいタグの数に応じてコンテキストクラスの初期化コードと、それに対応する React Component レンダリングコードを追加する
- コンテキストクラスと React Component は、カスタムタグのモデルとビューに相当する
    - オプション値の parse のロジックをコンテキストクラスのメソッドとして実装
    - オプション値によって変更するアウトプットを React Component に実装
- パフォーマンス対策として、`TagCacheManagerFactory` を実装
    - 各 React Component の 正常系/異常系 それぞれで、出力結果を左右するステートオブジェクトをキャッシュするように `tagCacheManager.cacheState()` を呼び出し
- サーバーからデータを取得したい場合は REST API リクエストを行う
    - プラグイン独自のデータ取得を行いたい場合は、新たにサーバーサイドに route を定義できる
