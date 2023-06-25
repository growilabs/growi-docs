# 全文検索機能のセットアップと管理

Elasticsearch による全文検索機能を利用するための設定方法を紹介します。

<ContextualBlock context="docs-growi-org">

## 各環境における Elasticsearch の起動と接続

Elasticsearch サーバーの起動と接続に関しては、システム管理者のページを参考にしてください。

- docker-compose
  - [weseek/growi-docker-compose](https://github.com/weseek/growi-docker-compose) を利用している場合はデフォルトで Elasticsearch が起動されるので、追加で設定する必要はありません。
- ubuntu
  - [こちら](/ja/admin-guide/getting-started/ubuntu-server.html#elasticsearch)を参考にインストールおよび起動してください。
  - 起動した Elasticsearch の URI を GROWI の環境変数 `ELASTICSEARCH_URI` に設定してください。
- centOS
  - [こちら](/ja/admin-guide/getting-started/centos.html#elasticsearch)を参考にインストールおよび起動してください。
  - 起動した Elasticsearch の URI を GROWI の環境変数 `ELASTICSEARCH_URI` に設定してください。

</ContextualBlock>

## アプリ上で接続確認

- 環境変数 `ELASTICSEARCH_URI` によって Elasticsearch の URI が指定され、正常に接続されている場合、GROWI 画面のトップバーに検索窓が表示されます。また、管理画面の全文検索管理ページで接続および Elasticsearch インデックスの状態を確認できます。

  <img :src="$withBase('/assets/images/setup-search-system1.png')" alt="">

- Elasticsearch の URI を指定しているにもかかわらず、以下のような接続できない旨のエラーが表示される場合は Elasticsearch の状態と URI の設定を再度確認してください。

  <img :src="$withBase('/assets/images/setup-search-system2.png')" alt="">

## インデックスのリビルド

Elasticsearch による検索機能は、検索用 DB のデータと Mongo DB に存在するデータの整合が取れていることを前提として正常な検索機能を実現します。そのため DB を直接操作するなどの行為によりこれらの DB 間で不整合が起きた場合、検索機能が正常に動作しません。

そのような場合に、管理画面の全文検索管理ページにてインデックスのリビルドを行うことで、検索機能を復旧できます。

全文検索管理ページの[インデックスのリビルド]ボタンにてインデックスのリビルドを実行できます。この作業は完了までに数秒かかります。

## インデックスの正規化

インデックスの処理が中断された場合、インデックスは以下のように破損状態と表示されます。（リビルドが継続している場合も同様の表示になりますので継続中の場合は処理が完了するまで待ってください。）

<img :src="$withBase('/assets/images/setup-search-system3.png')" alt="">

破損したインデックスに対して、インデックスの正規化を行うことで以前のリビルド結果のインデックスで検索機能を利用できます。






