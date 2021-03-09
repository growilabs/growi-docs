# Slack 連携

## 概要
<!-- TODO: GW-5376 作成した図を用いて、botの概要を記述する -->

GROWI では、 Incoming Webhook を利用した Slack 通知が可能です。  
1つの GROWI につき 1つのワークスペースを登録でき、ワークスペースに属する全てのチャンネルに通知できます。

### Custom bot (non-proxy) のセットアップ

#### Slack appで Bot を新規作成する
<!-- TODO: GW-5326 「slack appでbot新規作成するまで」を記述 (日本語) -->

#### スコープを設定する
<!-- TODO: GW-5332 スコープの設定方法を記述する(日本語) -->

#### 各 Request URL を設定する
<!-- TODO: GW-5336 スラッシュコマンドなど各RequestURLのセット方法を記述(日本語) -->

#### Bot を Slack のワークスペースへインストールする
<!-- TODO: GW-5337 botをslackにインストールできるところまで記述(日本語) -->


<!-- ### Official bot のセットアップ -->


<!-- ### Custom bot (with-proxy) のセットアップ -->


### Incoming webhook のセットアップ
<!-- TODO: GW-5372 「Slack/Mattermost への通知」の内容を適切なタイトルの下に移動させる -->
通知を行う Slack ワークスペースを設定します。

1. 管理画面のセキュリティ設定ページ(/admin/notification)にアクセスします。
2. Slack Incoming Webhooks 設定の必要事項を入力し、更新ボタンを押します。

- **Webhook URL**  
[Incoming Webhooks](https://slack.com/services/new/incoming-webhook) で取得できます。


- **Slack アプリより Incoming Webhook を優先する**  
このオプションをオンにすると、 Slack App が有効になっていても GROWI は Incoming Webhook を使用します。

### 設定が反映されているかの確認

上記の設定後、ページの編集モード画面に Slack 通知フォームが追加されます。  

![slack1](./images/slack1.png)

ページの保存・更新時に 入力したチャンネルに Slack 通知が届きます。  
この方法で通知を行うことを GROWI では **User Trigger Notification** といいます。

User Trigger Notificationの設定方法は[こちら](../management-cookbook/external-notification.html#user-trigger-notification-設定)を参照してください。

## Slack bot でできること

### ワークスペース内の全文検索
<!-- TODO: GW-5375 全文検索の方法を記述(日本語) -->

<!-- ### 複数ワークスペースの横断検索 (TBD) -->


<!-- ### Slack ログの記録 (TBD) -->