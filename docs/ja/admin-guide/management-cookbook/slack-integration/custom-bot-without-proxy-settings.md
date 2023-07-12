# Custom bot without proxy 設定

【概念図】
<img :src="$withBase('/assets/images/slack-bot-outline-custom-without-proxy.png')" alt="diagram-for-custom-bot-without-bot">

Custom bot without proxy を Slack のワークスペースに導入するには、Slack アプリを作成・編集する必要があります。手順は以下の通りです。

## Custom bot without proxy を作成する前に

GROWI 本体サーバーを立ち上げてください。

## Bot type の選択

管理画面の Slack 連携 にて **Custom bot without proxy** を選択してください。

<img :src="$withBase('/assets/images/slack-bot-selecting-custom-bot-without-proxy.png')" alt="slack-bot-selecting-custom-bot-without-proxy">


## Slack app を作成する

1. Slack API の[アプリページ](https://api.slack.com/apps)に移動し **Create an App** をクリックします。

   <img :src="$withBase('/assets/images/slack-custom-bot1.png')" alt="slack-custom-bot1">

2. **From an app manifest** をクリックします。

  <img  :src="$withBase('/assets/images/slack-custom-bot2.png')" alt="slack-custom-bot2">

3. アプリをインストールするワークスペースを選択して **Next** をクリックします。

  <img  :src="$withBase('/assets/images/slack-custom-bot3.png')" alt="slack-custom-bot3">

4. **YAML** タブに以下の App Manifest を貼り付けて **Next** をクリックします。

  <img  :src="$withBase('/assets/images/slack-custom-bot4.png')" alt="slack-custom-bot4">

  ```yaml
  _metadata:
    major_version: 1
    minor_version: 1
  display_information:
    name: GROWI BOT
  features:
    bot_user:
      display_name: GROWI BOT
      always_online: false
    slash_commands:
      - command: /growi
        url: https://{GROWI のドメイン名}/_api/v3/slack-integration/commands
        description: Test Bot
        should_escape: false
    unfurl_domains:
      - {GROWI のドメイン名}
  oauth_config:
    redirect_urls:
      - https://{GROWI のドメイン名}/slack/oauth_redirect
    scopes:
      bot:
        - channels:history
        - channels:join
        - chat:write
        - chat:write.public
        - commands
        - groups:history
        - im:history
        - links:read
        - links:write
        - mpim:history
        - team:read
  settings:
    event_subscriptions:
      request_url: https://{GROWI のドメイン名}/_api/v3/slack-integration/events
      bot_events:
        - link_shared
    interactivity:
      is_enabled: true
      request_url: https://{GROWI のドメイン名}/_api/v3/slack-integration/interactions
    org_deploy_enabled: false
    socket_mode_enabled: false
    token_rotation_enabled: false
  ```

5. アプリの概要を確認したら **Create** をクリックしてアプリを作成します。

  <img  :src="$withBase('/assets/images/slack-custom-bot5.png')" alt="slack-custom-bot5">

## Custom bot without proxy を Slack のワークスペースへインストールする

1. 作成した Slack App の **Settings** から **Basic Information** をクリックします。
1. **Install your app** をクリックします。

    <img  :src="$withBase('/assets/images/slack-bot-install-your-app-introduction.png')" alt="slack-bot-install-your-app-introduction">
1. **Install to Workspace** をクリックします。

    <img  :src="$withBase('/assets/images/slack-bot-install-to-workspace.png')" alt="slack-bot-install-to-workspace">
1. 遷移先の画面にて、**Allow**をクリックします。

    <img  :src="$withBase('/assets/images/slack-bot-install-your-app-transition-destination.png')" alt="slack-bot-install-your-app-transition-destination">
1. Install your app の右側に 緑色のチェックがつけばワークスペースへのインストール完了です。

    <img  :src="$withBase('/assets/images/slack-bot-install-your-app-complete.png')" alt="slack-bot-install-your-app-complete">
1. GROWI bot を使いたいチャンネルに @example を使用して招待します。

    <img  :src="$withBase('/assets/images/slack-bot-install-to-workspace-joined-bot.png')" alt="slack-bot-install-to-workspace-joined-bot">
    <img :src="$withBase('/assets/images/slack-bot-install-your-app-introduction-to-channel.png')" alt="slack-bot-install-your-app-introduction-to-channel">

## Signing Secret と Bot User OAuth Token の設定

Signing Secret と Bot User OAuth Token を設定する前に、作成した Bot でそれぞれの値を確認します。

### Signing Secret の確認方法

1. 作成した Slack App の **Settings** から **Basic Information** をクリックします。

    <img  :src="$withBase('/assets/images/slack-bot-basic-information.png')" alt="slack-bot-basic-information">
1. App Credentials の **Signing Secret** の **show** ボタンを押して確認します。

  <img  :src="$withBase('/assets/images/slack-bot-signing-secret.png')" alt="slack-bot-signing-secret">

### Bot User OAuth Token の確認方法

1. 作成した Slack App の **Settings** から **OAuth and Permissions** をクリックします。

    <img  :src="$withBase('/assets/images/slack-bot-oauth-and-permissions-introduction.png')" alt="slack-bot-oauth-and-permissions-introduction">
1. **OAuth Tokens for Your Team** の **Bot User Oauth Token** から確認します。

    <img  :src="$withBase('/assets/images/slack-bot-oauth-and-permissions.png')" alt="slack-bot-oauth-and-permissions">

    確認した **Signing Secret** と **Bot User OAuth Token** は 1. 管理画面で入力して設定する方法 と 2. 環境変数で設定する方法の 2 種類の方法があります。管理画面で直接入力する方が容易です。
    また、環境変数と管理画面の両方に入力した場合は、管理画面で入力した値が優先されるので、管理画面での入力をおすすめします。
    - 1. 管理画面で直接入力する方法

      - 管理画面の Slack 連携をクリックし、**Signing Secret** と **Bot User OAuth Token** を入力して **Update** ボタンをクリックします。

          <img :src="$withBase('/assets/images/slack-bot-register-introduction.png')" alt="slack-bot-register-introduction">
      - 赤丸で囲った部分に緑色のチェックマークが表示されたら登録完了です。

          <img :src="$withBase('/assets/images/slack-bot-register-secrets.png')" alt="slack-bot-register-secrets">
    - 2. 環境変数で設定する方法

      環境変数 `SLACK_SIGNING_SECRET` と `SLACK_BOT_TOKEN` に確認した値を代入してください。

## Custom Bot without proxy の接続テストを実行する

1. 「Test connection」をクリックし、GROWI-Bot を招待した Slack チャンネルを入力します。

    <img  :src="$withBase('/assets/images/slack-bot-test-introduction.png')" alt="slack-bot-test-introduction">
2. 「Test」 ボタンをクリックします。

- 成功の場合  
    **Successfully sent to Slack workspace.** が Logs に表示され、赤丸で囲った部分に緑色のチェックマークが表示されます。GROWI-Bot を招待した Slack チャンネルで確認してみましょう。
  - GROWI 側

      <img :src="$withBase('/assets/images/slack-bot-test-success.png')" alt="slack-bot-test-success">  
  - Slack 側
  
      <img :src="$withBase('/assets/images/slack-bot-test-success-at-slack-app.png')" alt="slack-bot-test-success-at-slack-app">  

- 失敗の場合  
    [接続テスト時のエラーログ](/ja/admin-guide/management-cookbook/slack-integration/#接続テスト時のエラーログ)を参照してください。
    全ての設定が完了したら [GROWI bot でできること](/ja/admin-guide/management-cookbook/slack-integration/#growi-bot-でできること)を参照してください。
