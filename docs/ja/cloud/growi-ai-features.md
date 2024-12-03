# GROWI AI 機能

## GROWI AI 機能とは

- GROWI v7.1.0 にて追加された OpenAI をナレッジに活用できる機能です。
  - 詳しくは [GROWI v7.1.x へのアップグレード](/ja/admin-guide/upgrading/71x.html) のページをご参照ください。
- GROWI.cloud では、[GROWI AI クレジット](./growi-ai-credit.html) が無ければ GROWI AI 機能をご利用いただけません。
  - (ユーザー自身が用意したAPIキーを使用する場合を除く)
- ※2024年11月現在、β版で提供している機能です。
  - サービス内容の変更が発生することや正式版のサービスの提供自体が中止される可能性もありますので、予めご了承ください。

## GROWI.cloud における GROWI AI 機能の利用条件

- GROWI AI 機能は、以下のプランのご契約でご利用いただけます。
  - スモール
  - ミディアム
  - ラージ
  - グランド
  - アンリミテッド

## GROWI AI 機能の利用を開始する

- GROWI.cloud へログイン後、GROWI アプリの管理画面から AI 機能の項目の「編集」ボタンを押下し、設定を開始してください。
- GROWI AI 機能の利用に必要な OpenAI の API キー(プロジェクト API キー、サービスアカウント、など) は、GROWI.cloud サービスにて準備することもお客様自身で準備いただくことも可能です。
- 編集画面の各設定項目は、下記「AI機能の各種項目の設定」の節をご参照ください。

### AI機能の各種項目の設定

GROWI AI 機能を有効にするためには、まず、編集画面に切り替えて `「AI機能」を有効にする` トグルを選択します。

<img :src="$withBase('/assets/images/ja/ai-chat_1.png')" alt="ai-chat_1.png" class="border p-2 my-2">

#### GROWI.cloud が提供する OpenAI プロジェクトを使用する場合 (Hosted)

<img :src="$withBase('/assets/images/ja/ai-chat_2.png')" alt="ai-chat_1.png" class="border p-2 my-2">

- Hosted の OpenAI プロジェクトを初めて使用する場合、Hosted を選択した状態でプロジェクトタイプを選択し、「+追加」ボタンを押します。
- GROWI.cloud がホストする OpenAI の API キーには数に上限があります。
  - 1 GROWI アプリあたり 1 つまで
- 追加されたプロジェクトを選択し、「更新する」ボタンを押下することで AI 機能を有効化できます。
- <span class="text-danger">※組織が保有している GROWI AI クレジットが不足した場合には、組織に含まれる GROWI アプリの AI 機能を停止いたします。</span>
  - 詳しくは [GROWI AI クレジット](./growi-ai-credit.html) をご確認ください


#### ユーザー自身が用意した OpenAI プロジェクトを使用する場合 (Owned)

<img :src="$withBase('/assets/images/ja/ai-chat_3.png')" alt="ai-chat_1.png" class="border p-2 my-2">

- Owned の場合、まずお客様にて OpenAI のプロジェクトをご用意いただく必要があります。
- ご用意いただいた OpenAI プロジェクトの情報を基に、以下のとおりに項目を埋めてプロジェクトを追加します。(画像参照)
- 追加されたプロジェクトを選択し、「更新する」ボタンを押下することで GROWI の AI 機能を有効化できます。

### GROWI の設定を行う

- AI 機能を実際にご利用いただくためには GROWI アプリ上でもセットアップが必要です。
- 設定方法は、[GROWI AI 機能のセットアップと管理](/ja/admin-guide/management-cookbook/setup-ai.html) をご参照ください。
