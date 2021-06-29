# Slack 連携

## 概要

  GROWI では、 Slack 連携の方法として、1. GROWI bot と 2. Incoming Webhook の 2 種類の方法があります。

### 1. GROWI bot

  GROWI bot は GROWI 開発チーム が開発した Slack App の一つです。任意の Slack ワークスペースにインストールすることで、
  GROWI からの通知だけでなくチャットからの全文検索実行や会話まとめなど様々な機能を利用することができるようになります。

#### Official bot (推奨)

  【概念図】
  ![diagram-for-official-bot](../../../.vuepress/public/assets/images/slack-bot-outline-official.png)

  Official GROWI bot は GROWI 開発チーム が無償で提供・運用している GROWI bot です。
  [slack app directory](https://wsgrowi.slack.com/apps) で公開されており、どなたでも利用できます。

#### Custom bot without proxy

  【概念図】
  ![diagram-for-custom-bot-without-bot](../../../.vuepress/public/assets/images/slack-bot-outline-custom-without-proxy.png)

  Custom bot without proxy は Slack bot を作成し、お使いの GROWI と紐付けを行うことで、
  Slack から GROWI の 機能の一部を使用することができます。

#### Custom bot with proxy

  【概念図】
  ![diagram-for-custom-bot-with-proxy](../../../.vuepress/public/assets/images/slack-bot-outline-custom-with-proxy.png)

  Custom bot with proxy は Slack bot を作成し、proxy サーバーを立ち上げ・設定することで、
  Official bot と同様の手順で GROWI の機能の一部を使用することができます。

### 2. Incoming Webhook

  Incoming Webhook も Slack 連携を行う手段の一つですが、GROWI bot とは異なり、Slack への通知に特化しています。
  チャットからの全文検索など GROWI bot にある機能の多くは使うことができませんが、その分簡単にセットアップできます。詳しくは[通知の種類/設定方法](/ja/admin-guide/management-cookbook/external-notification.html#通知の種類-設定方法)をご覧ください。


## Official bot 設定

### BotTypeの選択

  管理画面の Slack 連携 にて **Official bot** を選択してください。

  ![slack-bot-selecting-official-bot](../../../.vuepress/public/assets/images/slack-bot-selecting-official-bot.png)

### Official bot を Slack のワークスペースへインストールする

  1. **Slack ワークスペースを追加** ボタンをクリックします。

      ![slack-bot-add-a-slack-workspace](../../../.vuepress/public/assets/images/slack-bot-add-a-slack-workspace.png)

  1. **Integration Procedure** に新規のアコーディオンが生成されるので、①「Install Bot to Slack」のタブをクリックして開きます。
  1. **Install now** ボタンをクリックします。

      ![slack-bot-install-now-for-official](../../../.vuepress/public/assets/images/slack-bot-install-now-for-official.png)

  1. Slack app directory のリンクに飛ぶので、「Add to Slack」ボタンを押して自身の Slack work space にインストールします。
    <!-- TODO: GW-6420 [Official] app directoryの写真を挿入(GW4836 ブロック) -->

### GROWI Official Bot with proxy サービスへの登録

  1. GROWI Custom Bot with proxy サービスへの登録を開きます。  
    **Access Token の発行** に各種トークンにアクセストークンが2種生成されていることを確認できます。
    アクセストークンは必要に応じて再発行できます。
  1. Slack上で `/growi register` と打ちます。
  ![slack-bot-add-workspace](../../../.vuepress/public/assets/images/slack-bot-register-modal.png)
  1. 表示されるモーダルの GROWI URL に、対象 GROWI の URL を保存します。
  1. 上記で発行されている Access Token Proxy to GROWI と Access Token GROWI to Proxy を入れ
   **Submit** ボタンを押します。

  ![slack-bot-update-proxy-url](../../../.vuepress/public/assets/images/slack-bot-update-proxy-url.png)

  成功した場合、 proxy サーバーの URL が表示されます。

  ![slack-bot-input-proxy-url](../../../.vuepress/public/assets/images/slack-bot-input-proxy-url.png)

  上記で取得した proxy サーバーの URL を **Official bot 連携** の proxy URL に入力し更新します。

### Official Bot with proxy の接続テストを実行する

1. 「Test connection」をクリックし、GROWI-Bot を招待した Slack チャンネルを入力します。
  ![slack-bot-test-introduction](../../../.vuepress/public/assets/images/slack-bot-test-introduction.png)

2. 「Test」 ボタンをクリックします。

- 成功の場合  
  **Successfully sent to Slack workspace.** が Logs に表示され、
  赤丸で囲った部分に緑色のチェックマークが表示されます。GROWI-Bot を招待した Slack チャンネルで確認してみましょう。
  - GROWI 側
    ![slack-bot-test-success](../../../.vuepress/public/assets/images/slack-bot-test-success.png)
  - Slack 側
    ![slack-bot-test-success-at-slack-app](../../../.vuepress/public/assets/images/slack-bot-test-success-at-slack-app.png)

- 失敗の場合  
  [接続テスト時のエラーログ](./slack-integration.html#接続テスト時のエラーログ)を参照してください。


全ての設定が完了したら [GROWI bot でできること](./slack-integration.html#growi-bot-でできること)を参照してください。

## Custom bot without proxy 設定

  Custom bot without proxy を Slack のワークスペースに導入するには、Slack アプリを作成・編集する必要があります。手順は以下の通りです。

### Custom bot without proxy を作成する前に

  GROWI 本体サーバーを立ち上げてください。

### Bot type の選択

  管理画面の Slack 連携 にて **Custom bot without proxy** を選択してください。

  ![slack-bot-selecting-custom-bot-without-proxy](../../../.vuepress/public/assets/images/slack-bot-selecting-custom-bot-without-proxy.png)


### Slack app を作成する

  1. Slack API の[アプリページ](https://api.slack.com/apps)に移動し、「Create New App」をクリックします。

  ![slack-custom-bot1](../../../.vuepress/public/assets/images/slack-custom-bot1.png)

  1. 「Create a Slack App」の ①「App Name」にはアプリの名前を、②「Development Slack Workspace」には
    GROWI bot を追加したいワークスペースを選択します。

  1. 「Create App」をクリックします。

  ![slack-custom-bot2](../../../.vuepress/public/assets/images/slack-custom-bot2.png)

### スコープを設定する

  1. 作成した Slack App の **Features** から **OAuth & Permissions** をクリックします。
    ![slack-bot-oauth-and-permissions-introduction-no-check](../../../.vuepress/public/assets/images/slack-bot-oauth-and-permissions-introduction-no-check.png)
  1. **Add an OAuth Scope** をクリックします。
    ![slack-bot-scope-add-oauth-click](../../../.vuepress/public/assets/images/slack-bot-scope-add-oauth-click.png)
  1. **commands**, **chat:write**, **team:read** を選択します。
    以下のように表示されたら、スコープの設定は完了です。  
    ![slack-bot-scope-selected](../../../.vuepress/public/assets/images/slack-bot-scope-selected.png)

### Interactivity & Shortcuts の Request URL を設定する

  1. 作成した Slack App の **Features** から **Interactivity Shortcuts** をクリックします。
    ![slack-bot-interactivity-shortcuts-introduction](../../../.vuepress/public/assets/images/slack-bot-interactivity-shortcuts-introduction.png)

  1. **Interactivity** 右側にあるボタンを On にします。
    ![slack-bot-interactivity-shortcuts-enable-button](../../../.vuepress/public/assets/images/slack-bot-interactivity-shortcuts-enable-button.png)

  1. Request URL を以下のように入力してください。

- https://{連携させたい GROWI のドメイン名}/\_api/v3/slack-integration/interactions
- 例 `https://example.com/_api/v3/slack-integration/interactions`

  ![slack-bot-interactivity-shortcuts-creation](../../../.vuepress/public/assets/images/slack-bot-interactivity-shortcuts-creation.png)

  1. 入力が完了したら、**Save Changes** をクリックしてください。

### スラッシュコマンドの作成

  1. 作成した Slack App の **Features** から **Slash Commands** をクリックします。
    ![slash-commands-introduction](../../../.vuepress/public/assets/images/slash-commands-introduction.png)

  1. **Create New Command** をクリックします。
    ![slash-commands-create-new-command](../../../.vuepress/public/assets/images/slash-commands-create-new-command.png)

      - Command に /growi と入力してください。
      - Request URL には、`https://example.com/_api/v3/slack-integration/commands` と入力してください
      - Short Description も入力必須のため、適当なご説明を入力してください。
      - Usage Hint に関しては任意なので、適宜入力してください。
      - Escape channels, users, and links sent to your app に関しては任意なので、適宜入力してください。
      - 入力が完了したら、**Save** をクリックしてください。

  ![slash-commands-create](../../../.vuepress/public/assets/images/slash-commands-create.png)

### Custom bot without proxy を Slack のワークスペースへインストールする

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

### Signing Secret と Bot User OAuth Token の設定

  Signing Secret と Bot User OAuth Token の設定を行う前に、作成した Bot でそれぞれの値を確認します。

#### Signing Secret の確認方法

1. 作成した Slack App の **Settings** から **Basic Information** をクリックします。
   ![slack-bot-basic-information](../../../.vuepress/public/assets/images/slack-bot-basic-information.png)

1. App Credentials の **Signing Secret** の **show** ボタンを押して確認します。
   ![slack-bot-signing-secret](../../../.vuepress/public/assets/images/slack-bot-signing-secret.png)

#### Bot User OAuth Token の確認方法

1. 作成した Slack App の **Settings** から **OAuth and Permissions** をクリックします。
   ![slack-bot-oauth-and-permissions-introduction](../../../.vuepress/public/assets/images/slack-bot-oauth-and-permissions-introduction.png)

1. **OAuth Tokens for Your Team** の **Bot User Oauth Token** から確認します。
   ![slack-bot-oauth-and-permissions](../../../.vuepress/public/assets/images/slack-bot-oauth-and-permissions.png)

  確認した **Signing Secret** と **Bot User OAuth Token** は 1. 管理画面で入力して設定する方法 と 2. 環境変数で設定する方法の
  2 種類の方法があります。管理画面で直接入力する方が容易です。
  また、環境変数と管理画面の両方に入力した場合は、管理画面で入力した値が優先されるので、管理画面での入力をおすすめします。

1. 管理画面で直接入力する方法

- 管理画面の Slack 連携をクリックし、**Signing Secret** と **Bot User OAuth Token** を入力して
   **Update** ボタンをクリックします。
  ![slack-bot-register-introduction](../../../.vuepress/public/assets/images/slack-bot-register-introduction.png)
- 赤丸で囲った部分に緑色のチェックマークが表示されたら登録完了です。
    ![slack-bot-register-secrets](../../../.vuepress/public/assets/images/slack-bot-register-secrets.png)

1. 環境変数で設定する方法

  環境変数 `SLACK_SIGNING_SECRET` と `SLACK_BOT_TOKEN` に確認した値を代入してください。

### Custom Bot without proxy の接続テストを実行する

1. 「Test connection」をクリックし、GROWI-Bot を招待した Slack チャンネルを入力します。
  ![slack-bot-test-introduction](../../../.vuepress/public/assets/images/slack-bot-test-introduction.png)


2. 「Test」 ボタンをクリックします。

- 成功の場合  
  **Successfully sent to Slack workspace.** が Logs に表示され、赤丸で囲った部分に緑色のチェックマークが表示されます。GROWI-Bot を招待した Slack チャンネルで確認してみましょう。
  - GROWI 側
    ![slack-bot-test-success](../../../.vuepress/public/assets/images/slack-bot-test-success.png)  
  - Slack 側
    ![slack-bot-test-success-at-slack-app](../../../.vuepress/public/assets/images/slack-bot-test-success-at-slack-app.png)  

- 失敗の場合  
  [接続テスト時のエラーログ](./slack-integration.html#接続テスト時のエラーログ)を参照してください。

## Custom bot with proxy 設定

  Custom bot with proxy を Slack のワークスペースに導入するには、Slack アプリを作成・編集する必要があります。手順は以下の通りです。

### Custom bot with proxy を作成する前に

  1. `packages/slackbot-proxy` の配下に 新規ファイル`.env.development.local`を作成します。
  1. 作成したファイルに任意の環境変数`SERVER_URI`を入力してください。

  例: `SERVER_URI=http://localhost:8080`

  1. GROWI 本体サーバーとプロキシ用サーバー(`slackbot-proxy`)の両方を立ち上げてください。  
    プロキシ用サーバーは`yarn`, `yarn dev`で起動することができます。

  1. 管理画面の Slack 連携 にて **Custom bot with proxy** を選択してください。

  ![slack-bot-selecting-custom-bot-with-proxy](../../../.vuepress/public/assets/images/slack-bot-selecting-custom-bot-with-proxy.png)

### Custom bot with proxy を作成する

1. Slack API の[アプリページ](https://api.slack.com/apps)に移動し、「Create New App」をクリックします。

   ![slack-custom-bot1](../../../.vuepress/public/assets/images/slack-custom-bot1.png)

1. 「Create a Slack App」の ①「App Name」にはアプリの名前を、②「Development Slack Workspace」には
   GROWI bot を追加したいワークスペースを選択します。

1. 「Create App」をクリックします。

   ![slack-custom-bot2](../../../.vuepress/public/assets/images/slack-custom-bot2.png)

### Custom bot with proxy のスコープを設定する

1. 作成した Slack App の **Features** から **OAuth & Permissions** をクリックします。
  ![slack-bot-oauth-and-permissions-introduction-no-check](../../../.vuepress/public/assets/images/slack-bot-oauth-and-permissions-introduction-no-check.png)
1. **Add an OAuth Scope** をクリックします。
  ![slack-bot-scope-add-oauth-click](../../../.vuepress/public/assets/images/slack-bot-scope-add-oauth-click.png)
1. **commands**, **chat:write**, **team:read** を選択します。
  以下のように表示されたら、スコープの設定は完了です。
  ![slack-bot-scope-selected](../../../.vuepress/public/assets/images/slack-bot-scope-selected.png)

### Request URL 設定

#### Interactivity & Shortcuts

  1. 作成した Slack App の **Features** から **Interactivity Shortcuts** をクリックします。
    ![slack-bot-interactivity-shortcuts-introduction](../../../.vuepress/public/assets/images/slack-bot-interactivity-shortcuts-introduction.png)

  1. **Interactivity** 右側にあるボタンを On にします。
    ![slack-bot-interactivity-shortcuts-enable-button](../../../.vuepress/public/assets/images/slack-bot-interactivity-shortcuts-enable-button.png)

  1. Request URL を以下のように入力してください。

- `https://{連携させたい proxy のドメイン名}/slack/interactions`
  - 例 `https://example.com/slack/interactions`

      ![slack-bot-interactiviry-shortcuts-for-with-proxy](../../../.vuepress/public/assets/images/slack-bot-interactiviry-shortcuts-for-with-proxy.png)

    1. 入力が完了したら、右下の **Save Changes** ボタンをクリックしてください。

#### Slash Commands

  1. 作成した Slack App の **Features** から **Slash Commands** をクリックします。
    ![slash-commands-introduction](../../../.vuepress/public/assets/images/slash-commands-introduction.png)

  1. **Create New Command** をクリックします。
    ![slash-commands-create-new-command](../../../.vuepress/public/assets/images/slash-commands-create-new-command.png)

      - Command に /growi と入力してください。
      - Request URL には、`https://example.com/slack/commands` と入力してください
      - Short Description も入力必須のため、適当なご説明を入力してください。
      - Usage Hint に関しては任意なので、適宜入力してください。
      - Escape channels, users, and links sent to your app に関しては任意なので、適宜入力してください。
      - 入力が完了したら、右下の **Save** ボタンをクリックしてください。

  ![slash-commands-create](../../../.vuepress/public/assets/images/slash-commands-create.png)

### Redirect URL 設定

#### OAuth & Permissions

  1. 作成した Slack App の **Features** から **OAuth & Permissions** をクリックします。
  1. **Redirect URLs** の **Add New Redirect URL** ボタンをクリックします。
    ![slash-commands-introduction](../../../.vuepress/public/assets/images/slack-bot-auth-and-permisions1.png)

  1. 入力欄が表示されるので、`https://{連携させたい proxy のドメイン名}/slack/oauth_redirect` を入力してください。
      - 例 `https://example.com/slack/oauth_redirect`

      ![slash-commands-introduction](../../../.vuepress/public/assets/images/slack-bot-auth-and-permisions2.png)

  1. 入力したら **Add** ボタン をクリックしてください。
  1. **Save URLs** ボタンをクリックして 入力したURLを保存します。
  

### Manage Distribution を設定する
<!-- TODO: GW-6329 [Custom bot with proxy]「Manage Distribution を設定する」を記述する(ja)) -->

### Custom bot with proxy を Slack のワークスペースへインストールする

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

### GROWI Custom Bot with proxy サービスへの登録
  
  1. GROWI Custom Bot with proxy サービスへの登録を開きます。  
    **Access Token の発行** に各種トークンにアクセストークンが2種生成されていることを確認できます。
    アクセストークンは必要に応じて再発行できます。
  1. Slack上で `/growi register` と打ちます。
  ![slack-bot-add-workspace](../../../.vuepress/public/assets/images/slack-bot-register-modal.png)
  1. 表示されるモーダルの GROWI URL に、対象 GROWI の URL を保存します。
  1. 上記で発行されている Access Token Proxy to GROWI と Access Token GROWI to Proxy を入れ **Submit** ボタンを押します。

  ![slack-bot-update-proxy-url](../../../.vuepress/public/assets/images/slack-bot-update-proxy-url.png)

  成功した場合、 proxy サーバーの URL が表示されます。

  ![slack-bot-input-proxy-url](../../../.vuepress/public/assets/images/slack-bot-input-proxy-url.png)

  上記で取得した proxy サーバーの URL を **Official bot 連携** の proxy URL に入力し更新します。

### Custom bot with proxy の接続テストを実行する

  1. 「Test connection」をクリックし、GROWI-Bot を招待した Slack チャンネルを入力します。
    ![slack-bot-test-introduction](../../../.vuepress/public/assets/images/slack-bot-test-introduction-custom-with-proxy.png)

  2. 「Test」 ボタンをクリックします。

- 成功の場合  
    **Successfully sent to Slack workspace.** が Logs に表示され、
    赤丸で囲った部分に緑色のチェックマークが表示されます。GROWI-Bot を招待した Slack チャンネルで確認してみましょう。
  - GROWI 側
      ![slack-bot-test-success](../../../.vuepress/public/assets/images/slack-bot-test-success-custom-with-proxy.png)
  - Slack 側
      ![slack-bot-test-success-at-slack-app](../../../.vuepress/public/assets/images/slack-bot-test-success-at-slack-app.png)

- 失敗の場合  
  [接続テスト時のエラーログ](./slack-integration.html#接続テスト時のエラーログ)を参照してください。


全ての設定が完了したら [GROWI bot でできること](./slack-integration.html#growi-bot-でできること)を参照してください。

## 接続テスト時のエラーログ

1. **Channel_not_found**  
   指定したチャンネルに GROWI-Bot を招待していないか、間違ったチャンネルを入力した可能性があります。
   GROWI-Bot が Slack チャンネルに招待されていることを確認の上、適切にチャンネル名を入力してください。
   ![slack-bot-test-channel-not-found](../../../.vuepress/public/assets/images/slack-bot-test-channel-not-found.png)

1. **Cannot read property '0' of null**  
   Proxy URL が設定されていない可能性があります。Proxy URL を入力してください。
   ![slack-bot-errors-property-0-of-null](../../../.vuepress/public/assets/images/slack-bot-errors-property-0-of-null.png)

1. **Request failed with status code 400**  
   Slack ワークスペースで `/growi register` で Proxy に情報を登録せずに Test ボタンをクリックした可能性があります。
   Slack ワークスペースで `/growi register` を実行し、必要な情報を Proxy に登録してください。
   ![slack-bot-errors-400](../../../.vuepress/public/assets/images/slack-bot-errors-400.png)

1. **Request failed with status code 500**  
   すでに Access Token を登録された後、Access Token を再発行してテストを実行した可能性があります。
   [接続中の GROWI を確認する](./slack-integration.html#接続中の-GROWI-を確認する)を参照して、
   現在どの GROWI App と連携しているのかを確認してください。
   確認ができましたら、[Slack ワークスペースと GROWI App との連携を解除する](./slack-integration.html#slack-ワークスペースと-growi-app-s-との連携を解除する)を参照していただき、GROWI App との連携を解除してください。
   連携を解除することができたら、再度登録し直してください。
   ![slack-bot-errors-500](../../../.vuepress/public/assets/images/slack-bot-errors-500.png)
  
1. **The scopes is not appropriate**  
    Slack App を作成した際に設定する Scope が正しくない可能性があります。
    作成した Slack App の OAuth & Permissions から Scope の確認をしてください。
    必要な Scope は **team:read**, **chat:write**, **command** です。
    ![slack-bot-errors-scopes-not-appropriate](../../../.vuepress/public/assets/images/slack-bot-errors-scopes-not-appropriate.png)

1. **Cannot read property 'includes' of undefined**  
    Signing Secret や Bot User OAuth Token などの情報が登録されていない可能性があります。正しい値を入力してください。
    ![slack-bot-errors-includes-of-undefined](../../../.vuepress/public/assets/images/slack-bot-errors-includes-of-undefined.png)

1. **invalid_auth**  
    Signing Secret や Bot User OAuth Token の値が間違っている可能性があります。正しい値を入力してください。
    ![slack-bot-errors-invalid-auth](../../../.vuepress/public/assets/images/slack-bot-errors-invalid-auth.png)

## GROWI bot でできること

### ワークスペース内の全文検索

1. `/growi search [キーワード]` を入力すると検索結果が表示されます。

   - 例: `/growi search example`
     ![slack-bot-full-text-search-display-result-command](../../../.vuepress/public/assets/images/slack-bot-full-text-search-display-result-command.png)
   - 検索結果
     ![slack-bot-full-text-search-display-result](../../../.vuepress/public/assets/images/slack-bot-full-text-search-display-result.png)
   - **Next** ボタンをクリックすると、次の検索結果を表示します。
     ![slack-bot-full-text-search-click-next](../../../.vuepress/public/assets/images/slack-bot-full-text-search-click-next.png)
   - **Share** ボタンをクリックすると、チャンネル内に共有されます。
     ![slack-bot-full-text-search-click-share](../../../.vuepress/public/assets/images/slack-bot-full-text-search-click-share.png)

1. Slack ワークスペースを複数の GROWI に登録している場合、複数の GROWI から横断検索することができます。(※ Bot type が Official bot と Custom bot with proxy の場合のみ使えます。)

    - 例: `/growi search example`
        ![slack-bot-full-text-search-display-result-command](../../../.vuepress/public/assets/images/slack-bot-full-text-search-display-result-command.png)
    - 検索結果
        <!-- TODO 6581 -->
        ![slack-bot-search-multi-growi](../../../.vuepress/public/assets/images/slack-bot-search-multi-growi.png)

### 接続中の GROWI を確認する

`/growi status` と入力することで、Slack ワークスペースと連携している GROWI を確認することができます。(※ Bot type が Official bot と Custom bot with proxy の場合のみ使えます。)
![slack-bot-growi-status](../../../.vuepress/public/assets/images/slack-bot-growi-status.png)

### Slack ワークスペースと GROWI App との連携を解除する

  1. `/growi unregister [連携解除したい GROWI App の URL1] [連携解除したい GROWI App の URL2] ...` と入力するとモーダルが表示されます。(※ Bot type が Official bot と Custom bot with proxy の場合のみ使えます。)

     - 入力例: `growi unregister http://example.com http://growi.jp`
     ![slack-bot-unregister-input-eg](../../../.vuepress/public/assets/images/slack-bot-unregister-input-eg.png)

     - 表示されるモーダル
     ![slack-bot-unregister-modal](../../../.vuepress/public/assets/images/slack-bot-unregister-modal.png)

  1. **Submit** ボタンをクリックします。
  1. 以下のように表示されたら、連携解除が完了しています。
    ![slack-bot-unregister-completed](../../../.vuepress/public/assets/images/slack-bot-unregister-completed.png)

## Incoming webhook 設定

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
