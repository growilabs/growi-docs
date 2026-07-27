# 全文検索のセットアップと監査ログのインデックス管理

Elasticsearch による全文検索機能のセットアップ方法と、監査ログのインデックス管理について紹介します。

<ContextualBlock context="docs-growi-org">

## 各環境における Elasticsearch の起動と接続

Elasticsearch サーバーの起動と接続に関しては、システム管理者のページを参考にしてください。

- docker-compose
  - [growilabs/growi-docker-compose](https://github.com/growilabs/growi-docker-compose) を利用している場合はデフォルトで Elasticsearch が起動されるので、追加で設定する必要はありません。
- ubuntu
  - [こちら](/ja/admin-guide/getting-started/ubuntu-server.html#elasticsearch)を参考にインストールおよび起動してください。
  - 起動した Elasticsearch の URI を GROWI の環境変数 `ELASTICSEARCH_URI` に設定してください。
- centOS
  - [こちら](/ja/admin-guide/getting-started/centos.html#elasticsearch)を参考にインストールおよび起動してください。
  - 起動した Elasticsearch の URI を GROWI の環境変数 `ELASTICSEARCH_URI` に設定してください。

</ContextualBlock>

## アプリ上で接続確認

<ContextualBlock context="docs-growi-org">

- 環境変数 `ELASTICSEARCH_URI` によって Elasticsearch の URI が指定され、正常に接続されている場合、GROWI 画面のトップバーに検索窓が表示されます。
  また、管理画面の **Elasticsearch 管理** ページ（サイドバーメニューの表示名。以前は「全文検索管理」）で接続および Elasticsearch インデックスの状態を確認できます。
  このページは「ページデータ管理」と「監査ログのインデックス管理」の 2 つのセクションで構成されています。

</ContextualBlock>

<ContextualBlock context="help-growi-cloud">

- Elasticsearch が正常に接続されている場合、GROWI 画面のトップバーに検索窓が表示されます。
  また、管理画面の **Elasticsearch 管理** ページで接続および Elasticsearch インデックスの状態を確認できます。
  このページは「ページデータ管理」と「監査ログのインデックス管理」の 2 つのセクションで構成されています。

</ContextualBlock>

<img :src="$withBase('/assets/images/ja/setup-search-system1.png')" alt="setup-search-system1">

- 正常に接続できない旨のエラーが表示される場合は Elasticsearch の状態を再度確認してください。

## ページデータのインデックスのリビルド

Elasticsearch による検索機能は、検索用 DB のデータと Mongo DB に存在するデータの整合が取れていることを前提として正常な検索機能を実現します。そのため DB を直接操作するなどの行為によりこれらの DB 間で不整合が起きた場合、検索機能が正常に動作しません。

そのような場合に、Elasticsearch 管理ページの「ページデータ管理」セクションにてインデックスのリビルドを行うことで、検索機能を復旧できます。

[ページデータのインデックスのリビルド]ボタンにてインデックスのリビルドを実行できます。この作業は完了までに数秒かかります。

## ページデータのインデックスの正規化

インデックスの処理が中断された場合、インデックスは以下のように破損状態と表示されます。（リビルドが継続している場合も同様の表示になりますので継続中の場合は処理が完了するまで待ってください。）

<img :src="$withBase('/assets/images/ja/setup-search-system2.png')" alt="setup-search-system2">

破損したインデックスに対して、インデックスの正規化を行うことで以前のリビルド結果のインデックスで検索機能を利用できます。

## 監査ログのインデックス管理

監査ログ（Audit Log）機能を有効にしている場合、Elasticsearch 管理ページの「監査ログのインデックス管理」セクションで、監査ログ用インデックスのリビルドおよび正規化を行えます。操作方法は上記のページデータのインデックスと同様です。

Elasticsearch への同期に失敗した監査ログが存在する場合はこのセクションに警告が表示されるため、その際はインデックスのリビルドを行ってください。

<ContextualBlock context="docs-growi-org">

監査ログ機能が無効な場合はこのセクションを操作できません。有効にする場合は環境変数 `AUDIT_LOG_ENABLED` を `true` に設定してください（詳細は[環境変数](/ja/admin-guide/admin-cookbook/env-vars.html)を参照）。

<img :src="$withBase('/assets/images/ja/setup-search-system3.png')" alt="setup-search-system3">

</ContextualBlock>
