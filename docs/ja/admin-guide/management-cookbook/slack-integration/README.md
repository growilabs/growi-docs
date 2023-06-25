# Slack 連携

## 概要

GROWI では、 Slack 連携の方法として、1. GROWI bot と 2. Incoming Webhook の 2 種類の方法があります。

### 1. GROWI bot

GROWI bot は GROWI 開発チーム が開発した Slack App の一つです。任意の Slack ワークスペースにインストールすることで、GROWI からの通知だけでなくチャットからの全文検索や会話まとめなど
様々な機能を利用できるようになります。提供されている GROWI bot は以下の 3 種類があります。

#### Official bot (推奨)

【概念図】
<img :src="$withBase('/assets/images/slack-bot-outline-official.png')" alt="diagram-for-official-bot">

Official GROWI bot は GROWI 開発チーム が無償で提供・運用している GROWI bot です。
<!-- textlint-disable weseek/no-dead-link -->
[Slack app directory](https://wsgrowi.slack.com/apps) で公開されており、どなたでも利用できます。
<!-- textlint-enable weseek/no-dead-link -->

#### Custom bot without proxy

【概念図】
<img :src="$withBase('/assets/images/slack-bot-outline-custom-without-proxy.png')" alt="diagram-for-custom-bot-without-bot">

Custom bot without proxy は 自身で Slack bot を作成し、お使いの GROWI と紐付けを行うことで、
Slack から GROWI の 機能の一部を使用できます。

#### Custom bot with proxy

【概念図】
<img :src="$withBase('/assets/images/slack-bot-outline-custom-with-proxy.png')" alt="diagram-for-custom-bot-with-proxy">

<!-- textlint-disable weseek/sentence-length -->
Custom bot with proxy は 自身で Slack bot を作成し、proxy サーバーを立ち上げ・設定することで、
Official bot と同様の手順で GROWI の機能の一部を使用できます。
<!-- textlint-enable weseek/sentence-length -->
### 2. Incoming Webhooks

Incoming Webhook も Slack 連携する手段の一つですが、GROWI bot とは異なり、Slack への通知に特化しています。
チャットからの全文検索など GROWI bot にある機能の多くは使うことができませんが、その分簡単にセットアップできます。詳しくは[通知の種類/設定方法](/ja/admin-guide/management-cookbook/external-notification.html#通知の種類-設定方法)をご覧ください。

## 各種 Bot の設定方法

### Official bot

設定方法は[こちら](/ja/admin-guide/management-cookbook/slack-integration/official-bot-settings.html)をご覧ください。

### Custom bot without proxy

設定方法は[こちら](/ja/admin-guide/management-cookbook/slack-integration/custom-bot-without-proxy-settings.html)をご覧ください。

### Custom bot with proxy

設定方法は[こちら](/ja/admin-guide/management-cookbook/slack-integration/custom-bot-with-proxy-settings.html)をご覧ください。

## 接続テスト時のエラーログ

1. **Channel_not_found**  
   指定したチャンネルに GROWI-Bot を招待していないか、間違ったチャンネルを入力した可能性があります。
   GROWI-Bot が Slack チャンネルに招待されていることを確認の上、適切にチャンネル名を入力してください。
   <img :src="$withBase('/assets/images/slack-bot-test-channel-not-found.png')" alt="slack-bot-test-channel-not-found">

1. **Proxy URL is not registered**  
   Proxy URL が設定されていない可能性があります。Proxy URL を入力してください。
   <img :src="$withBase('/assets/images/slack-bot-errors-proxy-url-is-not-registered.png')" alt="slack-bot-errors-proxy-url-is-not-registered">

1. **Request failed with status code 400**  
   Slack ワークスペースで `/growi register` で Proxy に情報を登録せずに Test ボタンをクリックした可能性があります。
   Slack ワークスペースで `/growi register` を実行し、必要な情報を Proxy に登録してください。
   <img :src="$withBase('/assets/images/slack-bot-errors-400.png')" alt="slack-bot-errors-400">

1. **Request failed with status code 500**  
   すでに Access Token を登録された後、Access Token を再発行してテストを実行した可能性があります。
   [接続中の GROWI を確認する](/ja/admin-guide/management-cookbook/slack-integration/#接続中の-growi-を確認する)を参照して、現在どの GROWI App と連携しているのかを確認してください。
   確認後、[Slack ワークスペースと GROWI App との連携を解除する](/ja/admin-guide/management-cookbook/slack-integration/#slack-ワークスペースと-growi-app-との連携を解除する)
   を参照し、GROWI App との連携を解除してください。連携の解除後、再度登録し直してください。
   <img :src="$withBase('/assets/images/slack-bot-errors-500.png')" alt="slack-bot-errors-500">

1. **The scopes is not appropriate**  
   Slack App を作成した際に設定する Scope が正しくない可能性があります。
   作成した Slack App の OAuth & Permissions から Scope の確認をしてください。
   必要な Scope は **team:read**, **chat:write**, **command** です。
   <img :src="$withBase('/assets/images/slack-bot-errors-scopes-not-appropriate.png')" alt="slack-bot-errors-scopes-not-appropriate">

1. **Cannot read property 'includes' of undefined**  
   Signing Secret や Bot User OAuth Token などの情報が登録されていない可能性があります。正しい値を入力してください。
   <img :src="$withBase('/assets/images/slack-bot-errors-includes-of-undefined.png')" alt="slack-bot-errors-includes-of-undefined">

1. **invalid_auth**  
   Signing Secret や Bot User OAuth Token の値が間違っている可能性があります。正しい値を入力してください。
   <img :src="$withBase('/assets/images/slack-bot-errors-invalid-auth.png')" alt="slack-bot-errors-invalid-auth">

## GROWI bot でできること

GROWI bot の機能については[ユーザーガイド](/ja/guide/features/slack_integration)をご参照ください。

## アイコン

よろしければ、以下のイラストを Custom bot 用のアイコンにお使いください。
<img :src="$withBase('/assets/images/growikun-icon-2000_2000.png')" alt="growikun-icon-2000_2000">

## Incoming webhook 設定

Incoming Webhook による連携は v4.2 系までの推奨機能でしたが、v4.3 系以降は前述の GROWI bot による連携を推奨しています。

通知する Slack ワークスペースを設定します。

1. 管理画面のセキュリティ設定ページ(/admin/notification)にアクセスします。
2. Slack Incoming Webhooks 設定の必要事項を入力し、更新ボタンを押します。

   - **Webhook URL**  
     [Incoming Webhooks](https://slack.com/services/new/incoming-webhook) で取得できます。

### 設定が反映されているかの確認

上記の設定後、ページの編集モード画面に Slack 通知フォームが追加されます。

<img :src="$withBase('/assets/images/slack1.png')" alt="slack1">

ページの保存・更新時に、入力したチャンネルへ Slack 通知が届きます。この方法で通知することを GROWI では **User Trigger Notification** といいます。

User Trigger Notification の設定方法は[こちら](/ja/admin-guide/management-cookbook/external-notification.html#user-trigger-notification-設定)を参照してください。
