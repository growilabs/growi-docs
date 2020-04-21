# Slack/Mattermost への通知

## 概要
GROWI では、 Incoming Webhook を利用した Slack 通知が可能です。  
1つの GROWI につき 1つのワークスペースを登録でき、ワークスペースに属する全てのチャンネルに通知できます。

## Slack Configuration 設定
通知を行う Slack ワークスペースを設定します。

1. 管理画面のセキュリティ設定ページ(/admin/notification)にアクセスします。
2. Slack Incoming Webhooks 設定の必要事項を入力し、更新ボタンを押します。

- **Wrbhook URL**  
[Incoming Webhooks](https://itizawa.slack.com/apps/new/A0F7XDUAZ--incoming-webhook-) で取得できます。

- **Slack アプリより Incoming Webhook を優先する**  
このオプションをオンにすると、 Slack App が有効になっていても GROWI は Incoming Webhook を使用します。

### 設定が反映されているかの確認
上記の設定後、ページの編集モード画面に Slack 通知フォームが追加されます。  

![slack1](./images/slack1.png)

ページの保存・更新時に 入力したチャンネルにSlack 通知が飛びます。  
この方法で通知を行うことを GROWI では **User Trigger Notification** といいます。

## User Trigger Notification 設定
ユーザー自身が発信する Slack 通知を設定できます。

### 設定方法
<!-- TODO-GW-836  -->
(TBD)

## Global Notification 設定
Wiki 利用者が何らかのアクションをしたタイミングで発信される Slack 通知を設定できます。

### 設定方法
<!-- TODO-GW-837  -->
(TBD)
