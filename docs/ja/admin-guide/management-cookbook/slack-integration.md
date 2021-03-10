# Slack 連携

## 概要

<!-- TODO: GW-5376 作成した図を用いて、botの概要を記述する -->

### Custom bot (non-proxy) のセットアップ

#### Slack app で Bot を新規作成する

<!-- TODO: GW-5326 「slack appでbot新規作成するまで」を記述 (日本語) -->

#### スコープを設定する

<!-- TODO: GW-5332 スコープの設定方法を記述する(日本語) -->

#### 各 Request URL を設定する

- Event Subscriptions の Request URL を設定する

  1. 作成した Slack App の **Features** から **Event Subscriptions** をクリックします。
     ![event-subscriptions-introduction](./images/event-subscriptions-introduction.png)

  1. **Enable Events** 右側あるボタンを On にします。
     ![event-subscriptions-enable-button](./images/event-sucscriptions-enable-button.png)

  1. Request URL を以下のように入力してください。

     - https://連携させたい wiki のドメイン名/\_api/v3/slack-bot
       - 例 https://ff9b07497173.ngrok.io/_api/v3/slack-bot

     ![event-subscriptions-creation](./images/event-sucscriptions-creation.png)

  1. 入力が完了したら、Save Change をクリックしてください。

- Interactivity & Shortcuts の Request URL を設定する

  1. 作成した Slack App の **Features** から **Interactivity Shortcuts** をクリックします。
     ![interactivity-shortcuts-introduction](./images/interactivity-shortcuts-introduction.png)

  1. **Interactivity** 右側にあるボタンを On にします。
     ![interactivity-shortcuts-enable-button](./images/interactivity-shortcuts-enable-button.png)

  1. Request URL には先ほど入力したものと同じものを入力してください。
     ![interactivity-shortcuts-creation](./images/interactivity-shortcuts-creation.png)

  1. 入力が完了したら、Save Change をクリックしてください。

#### スラッシュコマンドの作成

1. 作成した Slack App の **Features** から **Slash Commands** をクリックします。

![slash-commands-introduction](./images/slash-commands-introduction.png)

2. **Create New Command** をクリックします。

![slash-commands-create-new-command](./images/slash-commands-create-new-command.png)

- Command に /growi と入力してください。
- RequestURL には、上記で設定した Request URL と同じものを入力してください
- Short Description も入力必須のため、適当なご説明を入力してください。
- Usage Hint に関しては任意なので、適宜入力してください。
- Escape channels, users, and links sent to your app に関しては任意なので、適宜入力してください。
- 入力が完了したら、Save をクリックしてください。

![slash-commands-create](./images/slash-commands-create.png)

#### Bot を Slack のワークスペースへインストールする

<!-- TODO: GW-5337 botをslackにインストールできるところまで記述(日本語) -->

<!-- ### Official bot のセットアップ -->

<!-- ### Custom bot (with-proxy) のセットアップ -->

### Incoming webhook のセットアップ

<!-- TODO: GW-5372 「Slack/Mattermost への通知」の内容を適切なタイトルの下に移動させる -->

## Slack bot でできること

### ワークスペース内の全文検索

<!-- TODO: GW-5375 全文検索の方法を記述(日本語) -->

<!-- ### 複数ワークスペースの横断検索 (TBD) -->

<!-- ### Slack ログの記録 (TBD) -->
