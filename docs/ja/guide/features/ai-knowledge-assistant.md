# AIナレッジアシスタント

## AIナレッジアシスタントとは

AIナレッジアシスタント（以下、「ナレッジアシスタント」と呼びます）は、ユーザーの質問に対して、GROWI 内の情報をもとにチャット形式で質問に回答する機能です。

GROWI v7.1.0 以降のバージョンで利用可能であり、v7.2.0 以降では各ユーザーが任意のページ群に特化したナレッジアシスタントを自由に作成できるようになりました。

## ナレッジアシスタントが取り扱うデータについて

GROWI AI 連携機能では、OpenAI の Vector Store へ文書をアップロードして機械学習の対象とします。

AI 連携機能が有効な場合、ページの作成・更新・複製・削除のアクションが起こったときに、ページの本文ほか機械学習に必要なメタデータを Vector Store へアップロードします。

## ナレッジアシスタント機能の特徴

### 新旧バージョンの機能比較

ナレッジアシスタントはバージョンによって機能や特性が大きく異なります。v7.1.0で導入された初期バージョンと比較して、v7.2.0以降では機能が大幅に拡張されています。特に重要な変更点として、権限付きページも学習対象に変わりました。

::: warning
v7.2.0以降のバージョンでは、権限制限のあるページ（自分のみ、特定グループのみなどが設定されているページ）も学習対象に含めることができるようになりました。このため、アシスタント作成時および共有設定時には、機密情報や制限付き情報の取り扱いに十分注意する必要があります。特にアシスタントを共有する場合は、意図しない情報漏洩が起こらないよう慎重に設定してください。
:::

|  | 旧バージョン (v7.1.0) | 新バージョン (v7.2.0以降) |
|---|---|---|
| 学習対象にできるページ | 公開権限が「公開」のページのみ | アシスタント作成者のアクセス可能なすべてのページ |
| カスタマイズ性 | - | 任意のページ群に特化したアシスタントを作成できる |
| 情報管理 | - | 権限付きページも学習対象となるため注意が必要 |
| アシスタントの共有設定 | - | 個人用・チーム用など個別に選択できる |

## ナレッジアシスタントの作成手順

### 新規アシスタントの追加画面を開く

1. 左サイドバーの 「AI」ボタンをクリックします。
1. 「アシスタントを追加する」ボタンをクリックします。

    <img :src="$withBase('/assets/images/ja/add-assistant-button.png')" alt="add-assistant-button.png" class="border">

### アシスタント名を入力する

表示された新規アシスタントの追加画面で、以下を入力します。

1. アシスタント名 : アシスタントの一覧画面に表示される名前
1. アシスタントのメモ(任意) : 用途などを自由に記載（アシスタントの処理には影響しません）

    <img :src="$withBase('/assets/images/ja/add-assistant-modal-1.png')" alt="add-assistant-modal-1.png" class="border">

### アシスタントの共有設定をする

1. アシスタントの共有をクリックし、アシスタントの共有設定モーダルを表示します。

   <img :src="$withBase('/assets/images/ja/add-assistant-modal-2.png')" alt="add-assistant-modal-2.png" class="border">

1. 作成したアシスタントを他のユーザーと共有したい場合は、ボタンをクリックして有効にします。

    <img :src="$withBase('/assets/images/ja/assistant-sharing-1.png')" alt="assistant-sharing-1.png" class="border">

1. 学習対象にするページを設定します。
    - 学習対象のページを、ページのアクセス権限設定により絞り込めます。
    - アシスタント作成者が閲覧できるページのみ選択できます。

    <img :src="$withBase('/assets/images/ja/assistant-sharing-2.png')" alt="assistant-sharing-2.png" class="border">

1. アシスタントの共有範囲:
    - 作成したアシスタントの共有範囲を設定できます。
    - デフォルトアシスタントとして設定できるのは、共有範囲が「全体公開」に設定されたアシスタントのみです。

    <img :src="$withBase('/assets/images/ja/assistant-sharing-3.png')" alt="assistant-sharing-3.png" class="border">

::: tip
<!-- textlint-disable weseek/no-doubled-joshi -->
アシスタントが権限制限ページを参照している場合、そのアシスタントを、本来それらのページにアクセスできないユーザーと共有しようとすると、アシスタント作成時に「共有範囲の確認」という警告メッセージが表示されます。これにより、意図しない情報漏洩を防止します。
<!-- textlint-enable weseek/no-doubled-joshi -->

<img :src="$withBase('/assets/images/ja/assistant-sharing-4.png')" alt="assistant-sharing-4.png" class="border">

:::

### 参照ページを追加する

アシスタントが参照するページを設定できます。1つのナレッジアシスタントが参照できるページは、配下ページを含め、デフォルト設定では 3000 ページまでです。

<ContextualBlock context="docs-growi-org">

この上限数は、[GROWI AI オプションの環境変数](/ja/admin-guide/admin-cookbook/env-vars.html)で変更できます。

</ContextualBlock>


1. 参照ページをクリックし、参照ページの設定モーダルを表示します。
1. 「ページを追加する」ボタンを押すと、参照可能なすべてのページリストが表示されます。
1. 参照ページとして設定したいページをクリックします。
1. 配下ページも含めるかどうかのチェックボックスにチェックを入れます。
1. 「完了」ボタンを押します。
1. 「ページを追加する」ボタンの下に、参照ページとして設定されたページのパスが表示されます (配下ページも含めた場合は、末尾のパスが `/*` になります)
1. 他にも追加したい場合は、また「ページを追加する」ボタンから同様の作業を繰り返します。

<img :src="$withBase('/assets/images/ja/add-assistant-modal-3.png')" alt="add-assistant-modal-3.png" class="border">

<img :src="$withBase('/assets/images/ja/add-referencepaages-1.png')" alt="add-referencepaages-1.png" class="border">

### 参照ページを削除する

一度設定した参照ページを削除したい場合は、ごみ箱アイコンで削除できます。

<img :src="$withBase('/assets/images/ja/remove-referencepaages-1.png')" alt="remove-referencepaages-1.png" class="border">

### アシスタントへの指示を設定する

アシスタントごとに独自の応答スタイルや行動指針を設定できる機能です。これは OpenAI の [Create Run API](https://platform.openai.com/docs/api-reference/runs/createRun) の `additional_instructions` パラメータを通じて実現されます。

例えば、「初心者向けに基本的な用語から説明してください」や「システム管理者向けに技術的詳細を含めて説明してください」などと指示することで、同じ質問に対しても、ユーザーの状況や好みに合わせた柔軟な応答生成ができます。

<img :src="$withBase('/assets/images/ja/add-assistant-modal-4.png')" alt="add-assistant-modal-4.png" class="border">

## ナレッジアシスタントの使い方

1. ナレッジアシスタント一覧から利用したいアシスタントを選択してチャットを開始できます。
1. チャットウィンドウに質問を入力すると、アシスタントが GROWI 内の参照ページをもとに回答します。

<img :src="$withBase('/assets/images/ja/start-chat-1.png')" alt="start-chat-1.png" class="border">

## デフォルトアシスタント

任意のナレッジアシスタントを、「デフォルトアシスタント」として登録できます。

- デフォルトアシスタントは、上部のページツールボタンの「AI」吹き出しアイコンから1クリックで起動できます。
- アシスタント一覧でデフォルトアシスタントに設定したいアシスタントの横にある「★」マークをクリックすることで設定できます。
  - デフォルトアシスタントとして設定されているときは 「★」、設定されていないときは 「☆」の表示になります。
- アシスタントの共有範囲が「全体公開」のものだけがデフォルトアシスタントに設定できます。また、デフォルトアシスタントの設定は管理者権限を持つユーザーのみが行えます。

<img :src="$withBase('/assets/images/ja/ai-default-knowledge-assistant-balloon.png')" alt="ai-default-knowledge-assistant-balloon.png" class="border">

<img :src="$withBase('/assets/images/ja/ai-default-knowledge-assistant-setting.png')" alt="ai-default-knowledge-assistant-setting.png" class="border">

## チャット履歴について

ナレッジアシスタントとの対話はすべて履歴として保存され、後から参照できます。

- チャット履歴はユーザーごとに保存され、過去の質問と回答を確認できます。
- チャット履歴はアシスタントごとに整理されており、複数のナレッジアシスタントを使い分けている場合も、それぞれの会話を個別に参照できます。
- 各アシスタントのツリーを展開すると、過去のスレッドが表示されます。

<img :src="$withBase('/assets/images/ja/ai-chat-history-1.png')" alt=".ai-chat-history-1.png" class="border">

### チャット履歴の保存期間

- 各スレッドは、最後の会話から3日間保存されます。
- 3日間が経過すると、スレッドは自動的に削除されます。
- 既存のスレッドを開いて新しい質問をすると、そのスレッドの保存期間が再び3日間に延長されます。

<ContextualBlock context="docs-growi-org">

## 環境変数

ナレッジアシスタント機能の利用には、環境変数の設定が必要です。

詳細は [AI 連携機能のセットアップと管理](/ja/admin-guide/management-cookbook/setup-ai.html) や [GROWI AI オプションの環境変数](/ja/admin-guide/admin-cookbook/env-vars.html)をご参照ください。

</ContextualBlock>
