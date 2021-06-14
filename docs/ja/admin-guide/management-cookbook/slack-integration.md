# Slack 連携

## 概要

GROWI では、 Slack 連携の方法として、1. GROWI bot と 2. Incoming Webhook の 2 種類の方法があります。

### 1. GROWI bot

GROWI bot は GROWI 開発チーム が開発した Slack App の一つです。任意の Slack ワークスペースにインストールすることで、GROWI からの通知だけでなくチャットからの全文検索実行や会話まとめなど様々な機能を利用することができるようになります。

#### Official bot (推奨)

【概念図】
![diagram-for-official-bot](../../../.vuepress/public/assets/images/slack-bot-outline-official.png)

Official GROWI bot は GROWI 開発チーム が無償で提供・運用している GROWI bot です。[slack app directory](https://wsgrowi.slack.com/apps) で公開されており、どなたでも利用できます。

#### Custom bot without proxy

【概念図】
![diagram-for-custom-bot-without-bot](../../../.vuepress/public/assets/images/slack-bot-outline-custom-without-proxy.png)

Custom bot without proxy は Slack bot を作成し、お使いの GROWI と紐付けを行うことで、Slack から GROWI の 機能の一部を使用することができます。

#### Custom bot with proxy

【概念図】
![diagram-for-custom-bot-with-proxy](../../../.vuepress/public/assets/images/slack-bot-outline-custom-with-proxy.png)

Custom bot with proxy は Slack bot を作成し、proxy サーバーを立ち上げ・設定することで、Official bot と同様の手順で GROWI の機能の一部を使用することができます。

### 2. Incoming Webhook

Incoming Webhook も Slack 連携を行う手段の一つですが、GROWI bot とは異なり、Slack への通知に特化しています。チャットからの全文検索など GROWI bot にある機能の多くは使うことができませんが、その分簡単にセットアップできます。詳しくは[通知の種類/設定方法](/ja/admin-guide/management-cookbook/external-notification.html#通知の種類-設定方法)をご覧ください。

## 各種 Bot のセットアッップ
### Custom bot without proxy 設定

Custom bot without proxy を Slack のワークスペースに導入するには、Slack アプリを作成・編集する必要があります。手順は以下の通りです。

#### Slack app を作成する前に

GROWI 本体サーバーを立ち上げてください。後述する Event Subscription の応答に必要となります。

#### BotType の選択
管理画面の Slack 連携 にて Custom bot without proxy を選択してください。

#### Slack app を作成する

1. Slack API の[アプリページ](https://api.slack.com/apps)に移動し、「Create New App」をクリックします。

   ![slack-custom-bot1](../../../.vuepress/public/assets/images/slack-custom-bot1.png)

1. 「Create a Slack App」の ①「App Name」にはアプリの名前を、②「Development Slack Workspace」には
   GROWI bot を追加したいワークスペースを選択します。

1. 「Create App」をクリックします。

   ![slack-custom-bot2](../../../.vuepress/public/assets/images/slack-custom-bot2.png)

#### スコープを設定する

1. 作成した Slack App の **Features** から **OAuth & Permissions** をクリックします。
   ![slack-bot-oauth-and-permissions-introduction-no-check](../../../.vuepress/public/assets/images/slack-bot-oauth-and-permissions-introduction-no-check.png)
1. **Add an OAuth Scope** をクリックします。
   ![slack-bot-scope-add-oauth-click](../../../.vuepress/public/assets/images/slack-bot-scope-add-oauth-click.png)
1. **commands**, **chat:write**, **team:read** を選択します。
   ![slack-bot-scope-select-commands](../../../.vuepress/public/assets/images/slack-bot-scope-select-commands.png)
   ![slack-bot-scope-select-chat-write](../../../.vuepress/public/assets/images/slack-bot-scope-add-chat-write.png)
   ![slack-bot-scope-select-team-read](../../../.vuepress/public/assets/images/slack-bot-scope-add-team-read.png)

1. 以下のように表示されたら、スコープの設定は完了です。
   ![slack-bot-scope-selected](../../../.vuepress/public/assets/images/slack-bot-scope-selected.png)

#### 各 Request URL を設定する

- **Event Subscriptions** の Request URL を設定する

  1. 作成した Slack App の **Features** から **Event Subscriptions** をクリックします。
     ![slack-bot-event-subscriptions-introduction](../../../.vuepress/public/assets/images/slack-bot-event-subscriptions-introduction.png)

  1. **Enable Events** 右側にあるボタンを On にします。
     ![slack-bot-event-subscriptions-enable-button](../../../.vuepress/public/assets/images/slack-bot-event-sucscriptions-enable-button.png)

  1. Request URL を以下のように入力してください。

      - https:// 連携させたい GROWI のドメイン名 /\_api/v3/slack-bot/commands
        - 例 **https://example.com/_api/v3/slack-bot/commands**

     ![slack-bot-event-subscriptions-creation](../../../.vuepress/public/assets/images/slack-bot-event-sucscriptions-creation.png)

  1. 入力が完了し **Verified** が表示されたら、Slack APP から GROWI サーバーへの通信は成功しています。

- **Interactivity & Shortcuts** の Request URL を設定する

  1. 作成した Slack App の **Features** から **Interactivity Shortcuts** をクリックします。
     ![slack-bot-interactivity-shortcuts-introduction](../../../.vuepress/public/assets/images/slack-bot-interactivity-shortcuts-introduction.png)

  1. **Interactivity** 右側にあるボタンを On にします。
     ![slack-bot-interactivity-shortcuts-enable-button](../../../.vuepress/public/assets/images/slack-bot-interactivity-shortcuts-enable-button.png)

  1. Request URL を以下のように入力してください。

      - https:// 連携させたい GROWI のドメイン名 /\_api/v3/slack-bot/interactions
        - 例 **https://example.com/_api/v3/slack-bot/interactions**

     ![slack-bot-interactivity-shortcuts-creation](../../../.vuepress/public/assets/images/slack-bot-interactivity-shortcuts-creation.png)

  1. 入力が完了したら、**Save Changes** をクリックしてください。

#### スラッシュコマンドの作成

1. 作成した Slack App の **Features** から **Slash Commands** をクリックします。

![slash-commands-introduction](../../../.vuepress/public/assets/images/slash-commands-introduction.png)

2. **Create New Command** をクリックします。

![slash-commands-create-new-command](../../../.vuepress/public/assets/images/slash-commands-create-new-command.png)

- Command に /growi と入力してください。
- RequestURL には、 **https://example.com/_api/v3/slack-bot/commands** と入力してください
- Short Description も入力必須のため、適当なご説明を入力してください。
- Usage Hint に関しては任意なので、適宜入力してください。
- Escape channels, users, and links sent to your app に関しては任意なので、適宜入力してください。
- 入力が完了したら、**Save** をクリックしてください。

![slash-commands-create](../../../.vuepress/public/assets/images/slash-commands-create.png)

#### Bot を Slack のワークスペースへインストールする

1. 作成した Slack App の **Settings** から **Basic Information** をクリックします。
1. **Install your app** をクリックします。
   ![slack-bot-install-your-app-introduction](../../../.vuepress/public/assets/images/slack-bot-install-your-app-introduction.png)
1. **Install to Workspace** をクリックします。
   ![slack-bot-install-to-workspace](../../../.vuepress/public/assets/images/slack-bot-install-to-workspace.png)
1. 遷移先の画面にて、**Allow**をクリックします。
   ![slack-bot-install-your-app-transition-destination](../../../.vuepress/public/assets/images/slack-bot-install-your-app-transition-destination.png)
1. Install your app の右側に 緑色のチェックがつけばワークスペースへのインストール完了です。
   ![slack-bot-install-your-app-complete](../../../.vuepress/public/assets/images/slack-bot-install-your-app-complete.png)
1. GROWI bot を使いたいチャンネルに @example を使用して招待します。
   ![slack-bot-install-to-workspace-joined-bot](../../../.vuepress/public/assets/images/slack-bot-install-to-workspace-joined-bot.png)
   ![slack-bot-install-your-app-introduction-to-channel](../../../.vuepress/public/assets/images/slack-bot-install-your-app-introduction-to-channel.png)

#### Signing Secret と Bot User OAuth Token の設定

Signing Secret と Bot User OAuth Token の設定を行う前に、作成した Bot でそれぞれの値を確認します。

**Signing Secret の確認方法**

1. 作成した Slack App の **Settings** から **Basic Information** をクリックします。
   ![slack-bot-basic-information](../../../.vuepress/public/assets/images/slack-bot-basic-information.png)

1. App Credentials の **Signing Secret** の **show** ボタンを押して確認します。
   ![slack-bot-signing-secret](../../../.vuepress/public/assets/images/slack-bot-signing-secret.png)

**Bot User OAuth Token の確認方法**

1. 作成した Slack App の **Settings** から **OAuth and Permissions** をクリックします。
   ![slack-bot-oauth-and-permissions-introduction](../../../.vuepress/public/assets/images/slack-bot-oauth-and-permissions-introduction.png)
1. **OAuth Tokens for Your Team** の **Bot User Oauth Token** から確認します。
   ![slack-bot-oauth-and-permissions](../../../.vuepress/public/assets/images/slack-bot-oauth-and-permissions.png)

確認した Signing Secret と Bot User OAuth Token は 1. 管理画面で入力して設定する方法 と 2. 環境変数で設定する方法の 2 種類の方法があります。管理画面で直接入力する方が容易です。また、環境変数と管理画面の両方に入力した場合は、管理画面で入力した値が優先されるので、管理画面での入力をおすすめします。

1. 管理画面で直接入力する方法

管理画面の Slack 連携をクリックし、Signing Secret と Bot User OAuth Token を入力して **Update** をクリックします。

![slack-integration](../../../.vuepress/public/assets/images/slack-integration-introduction.png)

2. 環境変数で設定する方法

環境変数 `SLACK_SIGNING_SECRET` と `SLACK_BOT_TOKEN` に確認した値を代入してください。

### Official bot のセットアップ
(TBD)
### Custom bot with proxy のセットアップ
(TBD)
### Incoming webhook のセットアップ

<!-- TODO: GW-5372 「Slack/Mattermost への通知」の内容を適切なタイトルの下に移動させる -->

### Incoming webhook 設定

<!-- TODO: GW-5372 「Slack/Mattermost への通知」の内容を適切なタイトルの下に移動させる -->

通知を行う Slack ワークスペースを設定します。

1. 管理画面のセキュリティ設定ページ(/admin/notification)にアクセスします。
2. Slack Incoming Webhooks 設定の必要事項を入力し、更新ボタンを押します。

- **Webhook URL**  
  [Incoming Webhooks](https://slack.com/services/new/incoming-webhook) で取得できます。

### 設定が反映されているかの確認

上記の設定後、ページの編集モード画面に Slack 通知フォームが追加されます。

![slack1](../../../.vuepress/public/assets/images/slack1.png)

ページの保存・更新時に 入力したチャンネルに Slack 通知が届きます。  
この方法で通知を行うことを GROWI では **User Trigger Notification** といいます。

User Trigger Notification の設定方法は[こちら](../management-cookbook/external-notification.html#user-trigger-notification-設定)を参照してください。

## Slack bot でできること

### ワークスペース内の全文検索

1. /growi search [keyword(s)] を入力すると検索結果が表示されます。

   - 例: /growi search example
     ![slack-bot-full-text-search-display-result-command](../../../.vuepress/public/assets/images/slack-bot-full-text-search-display-result-command.png)
   - 検索結果
     ![slack-bot-full-text-search-display-result](../../../.vuepress/public/assets/images/slack-bot-full-text-search-display-result.png)
   - **Next** ボタンをクリックすると、次の検索結果を表示します。
     ![slack-bot-full-text-search-click-next](../../../.vuepress/public/assets/images/slack-bot-full-text-search-click-next.png)
   - **Share** ボタンをクリックすると、チャンネル内に共有されます。
     ![slack-bot-full-text-search-click-share](../../../.vuepress/public/assets/images/slack-bot-full-text-search-click-share.png)

<!-- ### 複数ワークスペースの横断検索 (TBD) -->

<!-- ### Slack ログの記録 (TBD) -->
