# ナレッジアシスタント

## ナレッジアシスタントとは

- ナレッジアシスタントは、ユーザーの質問に対して、GROWI 内の情報をもとにチャット形式で質問に回答する機能です。
- GROWI v7.1.0 以降のバージョンで利用可能です。

## ナレッジアシスタントが取り扱うデータについて

- GROWI AI 連携機能では、 OpenAI の `Vector Store` へ文書をアップロードして機械学習の対象とします。
- GROWI が OpenAI へアップロードするのは、パブリックなページのみです。
- AI 連携機能が有効な場合、ページの作成・更新・複製のアクションが起こったときに、ページの本文ほか機械学習に必要なメタデータを `Vector Store` へアップロードします。
- 既に存在するページを一括でアップロードするには、「[Vector Store のリビルド](/ja/admin-guide/management-cookbook/setup-ai.md#vector-store-のリビルド)」を行ってください。

## ナレッジアシスタントの使い方

- GROWI 画面のトップバーに「AI」と書かれた吹き出しのアイコンがあります。  

<img :src="$withBase('/assets/images/ja/ai-knowledge-assistant_1.png')" alt="ai-knowledge-assistant_1.png" class="border">

- アイコンを押すとナレッジアシスタント (ベータ) のモーダルが開きます。  

<img :src="$withBase('/assets/images/ja/ai-knowledge-assistant_2.png')" alt="ai-knowledge-assistant_2.png" class="border">

- 「ききたいことを入力してください」という入力欄に自由に質問を入力して送信します。  

<img :src="$withBase('/assets/images/ja/ai-knowledge-assistant_3.png')" alt="ai-knowledge-assistant_3.png" class="border">

- 回答の生成を待ちます。  

<img :src="$withBase('/assets/images/ja/ai-knowledge-assistant_4.png')" alt="ai-knowledge-assistant_4.png" class="border">

- ナレッジアシスタントによって生成された回答が返ってきます。  

<img :src="$withBase('/assets/images/ja/ai-knowledge-assistant_5.png')" alt="ai-knowledge-assistant_5.png" class="border">
