# Slack 連携

## 概要

GROWI では、 Slack 連携の方法として、1. GROWI bot と 2. Incoming Webhook の 2 種類の方法があります。

1. GROWI bot

<!-- TODO: GW-5376 作成した図を用いて、botの概要を記述する -->

2. Incoming Webhook

Incoming Webhook は、Slack への通知ができる機能です。
ワークスペースに属するチャンネルのいずれかを選択して通知を行う事ができます。

### Custom bot (non-proxy) 設定

#### Slack app で Bot を新規作成する

<!-- TODO: GW-5326 「slack appでbot新規作成するまで」を記述 (日本語) -->

#### スコープを設定する

<!-- TODO: GW-5332 スコープの設定方法を記述する(日本語) -->

#### 各 Request URL を設定する

<!-- TODO: GW-5336 スラッシュコマンドなど各RequestURLのセット方法を記述(日本語) -->

#### Bot を Slack のワークスペースへインストールする

<!-- TODO: GW-5337 botをslackにインストールできるところまで記述(日本語) -->

<!-- ### Official bot 設定 -->

<!-- ### Custom bot (with-proxy) 設定 -->

### Incoming webhook 設定

<!-- TODO: GW-5372 「Slack/Mattermost への通知」の内容を適切なタイトルの下に移動させる -->

通知を行う Slack ワークスペースを設定します。

1. 管理画面のセキュリティ設定ページ(/admin/notification)にアクセスします。
2. Slack Incoming Webhooks 設定の必要事項を入力し、更新ボタンを押します。

- **Webhook URL**  
  [Incoming Webhooks](https://slack.com/services/new/incoming-webhook) で取得できます。

### 設定が反映されているかの確認

上記の設定後、ページの編集モード画面に Slack 通知フォームが追加されます。

![slack1](./images/slack1.png)

ページの保存・更新時に 入力したチャンネルに Slack 通知が届きます。  
この方法で通知を行うことを GROWI では **User Trigger Notification** といいます。

User Trigger Notification の設定方法は[こちら](../management-cookbook/external-notification.html#user-trigger-notification-設定)を参照してください。

## Slack bot でできること

### ワークスペース内の全文検索

1. GROWI-BOT を使いたいチャンネルに招待します。
   ![full-text-search-introduction-to-channel](./images/full-text-search-introduction-to-channel.png)
1. /growi search [keywords] を入力すると検索結果が表示されます。

   - 例: /growi search example
     ![full-text-search-display-result-command](./images/full-text-search-display-result-command.png)
   - 検索結果
     ![full-text-search-display-result](./images/full-text-search-display-result.png)
   - **Share** ボタンをクリックすると、チャンネル内に共有されます。
     ![full-text-search-share](./images/full-text-search-share.png)
   - **Next** ボタンをクリックすると、次の検索結果を表示します。
     <!-- TODO post pictures after https://youtrack.weseek.co.jp/issue/GW-5283 -->

<!-- ### 複数ワークスペースの横断検索 (TBD) -->

<!-- ### Slack ログの記録 (TBD) -->
