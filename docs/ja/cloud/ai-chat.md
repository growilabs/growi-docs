# GROWI AI 機能

## GROWI AI 機能とは

- v7.1 で GROWI に追加された OpenAI をナレッジに活用できる機能です。
- GROWI.cloud では、[GROWI AI クレジット](./ai-credit) が無ければ GROWI AI 機能をご利用いただけません。
  - (ユーザー自身が用意したAPIキーを使用する場合を除く)
- ※2024年11月現在、β版で提供している機能です。
  - サービス内容の変更が発生することや正式版のサービスの提供自体が中止される可能性もありますので、予めご了承ください。

## GROWI AI 機能の利用を開始する

- GROWI.cloud へログイン後、GROWI アプリの管理画面から AI 機能の項目の「編集」ボタンを押下し、設定を開始してください。
- GROWI AI 機能の利用に必要な OpenAI の API キー(プロジェクト API キー、サービスアカウント、など) は、GROWI.cloud サービスにて準備することもお客様自身で準備いただくことも可能です。
- 編集画面の各設定項目は、下記「AI機能の各種項目の設定」の節をご参照ください。

### AI機能の各種項目の設定

GROWI AI 機能を有効にするためには、まず、編集画面に切り替えて『「AI機能」を有効にする』トグルを選択します。
<img :src="$withBase('/assets/images/ja/ai-chat_1.png')" alt="ai-chat_1.png">

#### GROWI.cloud が提供する OpenAI プロジェクトを使用する場合 (Hosted)

- Hosted の OpenAI プロジェクトを初めて使用する場合、Hosted を選択した状態でプロジェクトタイプを選択し、「+追加」ボタンを押します。
- GROWI.cloud がホストする OpenAI の API キーには数に上限があります。
  - 1 GROWI アプリあたり 1 つまで
- 追加されたプロジェクトを選択し、「更新する」ボタンを押下することで AI 機能を有効化できます。
- <span class="text-danger">※Hosted の場合、GROWI AI クレジットの残高がなくなると AI 機能が利用停止され、GROWI AI クレジットを再度購入するまで AI 機能のご利用を再開できません。</span>
<img :src="$withBase('/assets/images/ja/ai-chat_2.png')" alt="ai-chat_1.png">

#### ユーザー自身が用意した OpenAI プロジェクトを使用する場合 (Owned)

- Owned の場合、まずお客様にて OpenAI のプロジェクトをご用意いただく必要があります。
- ご用意いただいた OpenAI プロジェクトの情報を基に、以下のとおりに項目を埋めてプロジェクトを追加します。(画像参照)
- 追加されたプロジェクトを選択し、「更新する」ボタンを押下することで GROWI の AI 機能を有効化できます。
<img :src="$withBase('/assets/images/ja/ai-chat_3.png')" alt="ai-chat_1.png">

### GROWI の設定を行う

- AI 機能を実際にご利用いただくためには GROWI アプリ上でもセットアップが必要です。
- 設定方法の詳細は、[GROWI AI 機能のセットアップと管理](/ja/admin-guide/management-cookbook/ai-function.md) をご参照ください。
