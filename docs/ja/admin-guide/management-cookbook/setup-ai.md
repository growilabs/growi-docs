# AI 連携機能のセットアップと管理

OpenAI による AI 連携機能を利用するための設定方法を紹介します。

<ContextualBlock context="docs-growi-org">

## OpenAI との接続設定

OpenAI の API キー等の取得に関しては、OpenAIのヘルプを参考にしてください。

- 環境変数に以下を設定します
  - `AI_ENABLED` に `true` を指定
  - `OPENAI_SERVICE_TYPE` にサービスの種別を指定
    - 例: `OpenAI` なら `openai` を指定
  - `OPENAI_API_KEY` に OpenAI サービスで取得した API キーを指定
  - (任意)`OPENAI_LIMIT_LEARNABLE_PAGE_COUNT_PER_ASSISTANT` に1つのナレッジアシスタントが学習できるページの上限数を指定 (デフォルトは 3000)

</ContextualBlock>

## ナレッジアシスタント機能

### アプリ上で接続確認

<ContextualBlock context="docs-growi-org">

ナレッジアシスタントに必要な環境変数が設定されている場合、GROWI 画面のトップバーにナレッジアシスタントのアイコンが表示されます。

</ContextualBlock>


<ContextualBlock context="help-growi-cloud">

AI 機能が有効になっている場合、GROWI 画面のトップバーにナレッジアシスタントのアイコンが表示されます。

</ContextualBlock>

<img :src="$withBase('/assets/images/ja/setup-ai_1.png')" alt="setup-ai_1">

<ContextualBlock context="docs-growi-org">

- 環境変数が正しく指定されているにもかかわらず、接続できない旨のエラーが表示される場合は OpenAI の状態と OpenAI との連携の設定を再度確認してください。

</ContextualBlock>

<ContextualBlock context="help-growi-cloud">

- 設定を有効にしているにもかかわらず AI 連携機能が正常に利用できない場合
  - [GROWI AI 機能](/ja/cloud/growi-ai-features.html) の設定と [GROWI AI クレジット](/ja/cloud/growi-ai-credit.html) の残高をご確認ください。
  - 上記をご確認のうえ、問題を解消できない場合は [GROWI.cloud サポートへのお問い合わせ窓口](https://growi.cloud/contact) までお問い合わせください。

</ContextualBlock>

### Vector Store のリビルド

- 「Vector Store のリビルド」を行うことで、GROWI 上のすべてのパブリックなページのデータを `Vector Store` にアップロードします。
  - AI 連携機能では、 `Vector Store` にアップロードされた文書を対象に機械学習します。
- 既存の GROWI に新たに AI 連携機能を導入する場合は、「Vector Store のリビルド」を行うことをお勧めします。  
  <img :src="$withBase('/assets/images/ja/setup-ai_2.png')" alt="setup-ai_2">
