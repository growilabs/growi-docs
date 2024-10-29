# ナレッジアシスタント

## ナレッジアシスタントとは

- OpenAI API を利用して GROWI 内に蓄積されているナレッジを横断的に活用し、投げかけた質問への回答を返してくれるチャットボットです。
- 2024年11月現在、β版で提供しています。

## ナレッジアシスタントでできること

- GROWI に蓄積されている情報を、対話形式で検索できます。

## ナレッジアシスタントご利用開始の方法

- GROWI AI 機能には、OpenAI を使用しますが、GROWI.cloud がホストする OpenAI と, お客様ご自身でご利用中の OpenAI のどちらもご利用いただけます。
- GROWI.cloud がホストする OpenAI サーバーには数に上限があります。
  - 1 GROWI アプリあたり 1 つまで
- GROWI.cloud へログイン後、GROWI アプリの管理画面から AI 機能の項目の「編集」ボタンを押下し、設定を開始してください。
  - 編集画面の各設定項目は、下記「AI機能の各種項目の設定」の節をご覧ください。

### AI機能の各種項目の設定

ナレッジアシスタントを有効にするためには、まず、編集画面に切り替えて『「AI機能」を有効にする』トグルを選択します。
<img :src="$withBase('/assets/images/ja/ai-chat_1.png')" alt="ai-chat_1.png">

#### GROWI.cloud が提供する OpenAI プロジェクトを使用する場合 (Hosted)

- Hosted の OpenAI プロジェクトを初めて使用する場合、Hosted を選択した状態でプロジェクトタイプを選択し、「+追加」ボタンを押します。
- 追加されたプロジェクトを選択し、「更新する」ボタンを押下することで AI 機能を有効化できます。
- <span class="text-danger">※Hosted の場合、GROWI AI クレジットの残高が無いと、AI 機能が利用停止され、 GROWI AI クレジットを再度購入するまで AI 機能のご利用を再開できません。</span>
<img :src="$withBase('/assets/images/ja/ai-chat_2.png')" alt="ai-chat_1.png">

#### ユーザー自身が用意した OpenAI プロジェクトを使用する場合 (Owned)

- Owned の場合、まずお客様にて OpenAI のプロジェクトをご用意いただく必要があります。
- ご用意いただいた OpenAI プロジェクトの情報を基に、以下のとおりに項目を埋めてプロジェクトを追加します。(画像参照)
- 追加されたプロジェクトを選択し、「更新する」ボタンを押下することで AI 機能を有効化できます。
<img :src="$withBase('/assets/images/ja/ai-chat_3.png')" alt="ai-chat_1.png">
