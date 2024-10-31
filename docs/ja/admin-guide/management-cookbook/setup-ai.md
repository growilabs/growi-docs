# AI 連携機能のセットアップと管理

OpenAI 連携による AI 検索機能を利用するための設定方法を紹介します。

<ContextualBlock context="docs-growi-org">

## OpenAI との接続設定

OpenAI の API キー取得等に関しては、システム管理者のページを参考にしてください。

- `AI_ENABLED` に `true` を指定
- `OPENAI_SERVICE_TYPE` にサービスの種別を指定
  - 例: `OpenAI` なら `openai` を指定
- `OPENAI_ASSISTANT_NAME_SUFFIX` に固有な値を指定
- `OPENAI_API_KEY` に OpenAI サービスで取得した API キーを指定

</ContextualBlock>

## アプリ上で接続確認

- 環境変数 `OPENAI_SERVICE_TYPE` ほか、OpenAI との連携に必要な環境変数が設定されている場合、GROWI 画面のトップバーに　AI　検索アイコンが出現します。

  <img :src="$withBase('/assets/images/ja/setup-search-system1.png')" alt="setup-search-system1">

<ContextualBlock context="docs-growi-org">

- 環境変数が正しく指定されているにもかかわらず、接続できない旨のエラーが表示される場合は OpenAI の状態と OpenAI との連携の設定を再度確認してください。

</ContextualBlock>

<ContextualBlock context="help-growi-cloud">

- 設定を有効にしているにもかかわらず、 AI 連携が正常に利用できない場合は、[GROWI.cloud サポートへのお問い合わせ窓口](https://growi.cloud/contact) までお問い合わせください。

</ContextualBlock>

## Vector Store のリビルド

- OpenAI では、 `Vector Store` へ学習対象の文書をアップロードして機械学習させます。
- GROWI AI 機能が有効な場合、パブリックなページの作成・更新時にページの本文ほか学習に必要なメタデータなどを `Vector Store` へアップロードしますが、既存のページについてはページを更新しない限り学習対象となりません。
- そこで、「Vector Store のリビルド」を行うことで、パブリックな既存ページすべてを `Vector Store` に取り込ませることができます。
- 既存の GROWI に、新たに GROWI AI 機能を導入する場合は特に、機能を十分に活用するためにも「Vector Store のリビルド」を行うことをお勧めします。
