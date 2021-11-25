# Slack 連携

## 概要

GROWI では、 Slack 連携の方法として、1. GROWI bot と 2. Incoming Webhook の 2 種類の方法があります。

### 1. GROWI bot

GROWI bot は GROWI 開発チーム が開発した Slack App の一つです。任意の Slack ワークスペースにインストールすることで、GROWI からの通知だけでなくチャットからの全文検索や会話まとめなど
様々な機能を利用できるようになります。提供されている GROWI bot は以下の 3 種類があります。

#### Official bot (推奨)

【概念図】
![diagram-for-official-bot](/assets/images/slack-bot-outline-official.png)

Official GROWI bot は GROWI 開発チーム が無償で提供・運用している GROWI bot です。
<!-- textlint-disable weseek/no-dead-link -->
[Slack app directory](https://wsgrowi.slack.com/apps) で公開されており、どなたでも利用できます。
<!-- textlint-enable weseek/no-dead-link -->

#### Custom bot without proxy

【概念図】
![diagram-for-custom-bot-without-bot](/assets/images/slack-bot-outline-custom-without-proxy.png)

Custom bot without proxy は 自身で Slack bot を作成し、お使いの GROWI と紐付けを行うことで、
Slack から GROWI の 機能の一部を使用できます。

#### Custom bot with proxy

【概念図】
![diagram-for-custom-bot-with-proxy](/assets/images/slack-bot-outline-custom-with-proxy.png)

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
   ![slack-bot-test-channel-not-found](/assets/images/slack-bot-test-channel-not-found.png)

1. **Proxy URL is not registered**  
   Proxy URL が設定されていない可能性があります。Proxy URL を入力してください。
   ![slack-bot-errors-proxy-url-is-not-registered](/assets/images/slack-bot-errors-proxy-url-is-not-registered.png)

1. **Request failed with status code 400**  
   Slack ワークスペースで `/growi register` で Proxy に情報を登録せずに Test ボタンをクリックした可能性があります。
   Slack ワークスペースで `/growi register` を実行し、必要な情報を Proxy に登録してください。
   ![slack-bot-errors-400](/assets/images/slack-bot-errors-400.png)

1. **Request failed with status code 500**  
   すでに Access Token を登録された後、Access Token を再発行してテストを実行した可能性があります。
   [接続中の GROWI を確認する](/ja/admin-guide/management-cookbook/slack-integration/#接続中の-growi-を確認する)を参照して、現在どの GROWI App と連携しているのかを確認してください。
   確認後、[Slack ワークスペースと GROWI App との連携を解除する](/ja/admin-guide/management-cookbook/slack-integration/#slack-ワークスペースと-growi-app-との連携を解除する)
   を参照し、GROWI App との連携を解除してください。連携の解除後、再度登録し直してください。
   ![slack-bot-errors-500](/assets/images/slack-bot-errors-500.png)

1. **The scopes is not appropriate**  
   Slack App を作成した際に設定する Scope が正しくない可能性があります。
   作成した Slack App の OAuth & Permissions から Scope の確認をしてください。
   必要な Scope は **team:read**, **chat:write**, **command** です。
   ![slack-bot-errors-scopes-not-appropriate](/assets/images/slack-bot-errors-scopes-not-appropriate.png)

1. **Cannot read property 'includes' of undefined**  
   Signing Secret や Bot User OAuth Token などの情報が登録されていない可能性があります。正しい値を入力してください。
   ![slack-bot-errors-includes-of-undefined](/assets/images/slack-bot-errors-includes-of-undefined.png)

1. **invalid_auth**  
   Signing Secret や Bot User OAuth Token の値が間違っている可能性があります。正しい値を入力してください。
   ![slack-bot-errors-invalid-auth](/assets/images/slack-bot-errors-invalid-auth.png)

## GROWI bot でできること

### ヘルプコマンド

1. `/growi help` を入力すると GROWI bot で使うことができる、コマンド一覧が表示されます。
   ![HackMD Demo](/assets/images/growi-help.gif)

### ページの作成

1. `/growi note` を入力すると GROWI 内に新規ページが作成されます。

![HackMD Demo](/assets/images/growi-note.gif)

### ワークスペース内の全文検索

1. `/growi search [キーワード]` を入力すると検索結果が表示されます。

   - 例: `/growi search example`
     ![slack-bot-full-text-search-display-result-command](/assets/images/slack-bot-full-text-search-display-result-command.png)
   - 検索結果
     ![slack-bot-full-text-search-display-result](/assets/images/slack-bot-full-text-search-display-result.png)
   - **Next** ボタンをクリックすると、次の検索結果を表示します。
     ![slack-bot-full-text-search-click-next](/assets/images/slack-bot-full-text-search-click-next.png)
   - **Share** ボタンをクリックすると、チャンネル内に共有されます。
     ![slack-bot-full-text-search-click-share](/assets/images/slack-bot-full-text-search-click-share.png)

1. Slack ワークスペースを複数の GROWI に登録している場合、複数の GROWI から横断検索できます。(※ Bot type が Official bot と Custom bot with proxy の場合のみ使えます。)

   - 例: `/growi search example`
     ![slack-bot-full-text-search-display-result-command](/assets/images/slack-bot-full-text-search-display-result-command.png)
   - 検索結果
     ![slack-bot-search-multi-growi](/assets/images/slack-bot-search-multi-growi.png)

### Slack チャンネル内の会話からページを作成する (Alpha)

1. `/growi keep` を入力します。
2. `Oldest datetime` にページで使用したい最も古いメッセージの時刻を入力します。
3. `Newest datetime` にページで使用したい最も新しいメッセージの時刻を入力します。
4. `Page path` にページの作成パスを入力し、`Create page` します。 `Oldest datetime` から `Newest datetime` の間の会話が作成されるページに反映されます。

![HackMD Demo](/assets/images/growi-keep.gif)

### Slack 内で GROWI ページのプレビュー (Unfurl 機能)

Unfurl 機能を利用することで Slack に GROWI のリンクを共有した際にスニペットを表示できます。
デフォルトでは無効のため、管理画面から有効化する必要があります。

![slack-bot-unfurl](/assets/images/slack-bot-unfurl.png)

Public ではないページのスニペットは表示されません。
![slack-bot-unfurl-private-page](/assets/images/slack-bot-unfurl-private-page.png)

### 接続中の GROWI を確認する

`/growi status` と入力することで、Slack ワークスペースと連携している GROWI を確認できます。(※ Bot type が Official bot と Custom bot with proxy の場合のみ使えます。)
![slack-bot-growi-status](/assets/images/slack-bot-growi-status.png)

### Slack ワークスペースと GROWI App との連携を解除する

1. `/growi unregister [連携解除したい GROWI App の URL1] [連携解除したい GROWI App の URL2] ...` と入力するとモーダルが表示されます。(※ Bot type が Official bot と Custom bot with proxy の場合のみ使えます。)

   - 入力例: `growi unregister http://example.com http://growi.jp`
     ![slack-bot-unregister-input-eg](/assets/images/slack-bot-unregister-input-eg.png)

   - 表示されるモーダル
     ![slack-bot-unregister-modal](/assets/images/slack-bot-unregister-modal.png)

1. **Submit** ボタンをクリックします。
1. 以下のように表示されたら、連携解除が完了しています。
   ![slack-bot-unregister-completed](/assets/images/slack-bot-unregister-completed.png)

## アイコン

よろしければ、以下のイラストを Custom bot 用のアイコンにお使いください。
![growikun-icon-2000_2000](/assets/images/growikun-icon-2000_2000.png)

## Incoming webhook 設定

Incoming Webhook による連携は v4.2 系までの推奨機能でしたが、v4.3 系以降は前述の GROWI bot による連携を推奨しています。

通知する Slack ワークスペースを設定します。

1. 管理画面のセキュリティ設定ページ(/admin/notification)にアクセスします。
2. Slack Incoming Webhooks 設定の必要事項を入力し、更新ボタンを押します。

   - **Webhook URL**  
     [Incoming Webhooks](https://slack.com/services/new/incoming-webhook) で取得できます。

### 設定が反映されているかの確認

上記の設定後、ページの編集モード画面に Slack 通知フォームが追加されます。

![slack1](/assets/images/slack1.png)

ページの保存・更新時に、入力したチャンネルへ Slack 通知が届きます。この方法で通知することを GROWI では **User Trigger Notification** といいます。

User Trigger Notification の設定方法は[こちら](/ja/admin-guide/management-cookbook/external-notification.html#user-trigger-notification-設定)を参照してください。
