# AI 連携機能のセットアップと管理

OpenAI 連携による AI 検索機能を利用するための設定方法を紹介します。

<ContextualBlock context="docs-growi-org">

## OpenAI との接続設定

OpenAI の API キー等の取得に関しては、OpenAIのヘルプを参考にしてください。

- 環境変数に以下を設定します
  - `AI_ENABLED` に `true` を指定
  - `OPENAI_SERVICE_TYPE` にサービスの種別を指定
    - 例: `OpenAI` なら `openai` を指定
  - `OPENAI_ASSISTANT_NAME_SUFFIX` に固有な値を指定
  - `OPENAI_API_KEY` に OpenAI サービスで取得した API キーを指定
- ※現在は、本機能に関するセットアップ用 UI の提供はありません。
  - AI 連携機能の設定は環境変数による指定のみ可能です。

</ContextualBlock>

## アプリ上で接続確認

- 環境変数 `OPENAI_SERVICE_TYPE` ほか、OpenAI との連携に必要な環境変数が設定されている場合、GROWI 画面のトップバーに AI 検索アイコンが出現します。
  - 環境変数は、管理者メニューの「Wiki管理トップ」ページで確認できます。

  <img :src="$withBase('/assets/images/ja/setup-ai_1.png')" alt="setup-ai_1">

<ContextualBlock context="docs-growi-org">

- 環境変数が正しく指定されているにもかかわらず、接続できない旨のエラーが表示される場合は OpenAI の状態と OpenAI との連携の設定を再度確認してください。

</ContextualBlock>

<ContextualBlock context="help-growi-cloud">

- 設定を有効にしているにもかかわらず AI 連携機能が正常に利用できない場合
  - [GROWI AI 機能](/ja/cloud/ai-chat.md) の設定と [GROWI AI クレジット](/ja/cloud/ai-credit.md) の残高をご確認ください。
  - 上記をご確認のうえ、問題を解消できない場合は [GROWI.cloud サポートへのお問い合わせ窓口](https://growi.cloud/contact) までお問い合わせください。

</ContextualBlock>

## Vector Store のリビルド

- AI 連携機能では、 OpenAI の `Vector Store` へ文書をアップロードして機械学習の対象とします。
- AI 連携機能が有効な場合、パブリックなページの作成・更新時にページの本文ほか機械学習に必要なメタデータを `Vector Store` へアップロードしますが、既存のページについてはページを更新しない限り学習対象となりません。
- 「Vector Store のリビルド」を行うことで、すべてのパブリックなページを `Vector Store` に取り込ませることができます。
- 既存の GROWI に、新たに AI 連携機能を導入する場合は特に、機能を十分に活用するためにも、はじめに「Vector Store のリビルド」を行うことをお勧めします。  
  <img :src="$withBase('/assets/images/ja/setup-ai_2.png')" alt="setup-ai_2">
