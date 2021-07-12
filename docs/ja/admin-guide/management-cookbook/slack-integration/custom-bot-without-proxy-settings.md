# Custom bot without proxy 設定

【概念図】
![diagram-for-custom-bot-without-bot](/assets/images/slack-bot-outline-custom-without-proxy.png)

Custom bot without proxy を Slack のワークスペースに導入するには、Slack アプリを作成・編集する必要があります。手順は以下の通りです。

## Custom bot without proxy を作成する前に

GROWI 本体サーバーを立ち上げてください。

## Bot type の選択

管理画面の Slack 連携 にて **Custom bot without proxy** を選択してください。

![slack-bot-selecting-custom-bot-without-proxy](/assets/images/slack-bot-selecting-custom-bot-without-proxy.png)


## Slack app を作成する

1. Slack API の[アプリページ](https://api.slack.com/apps)に移動し、「Create New App」をクリックします。
  ![slack-custom-bot1](/assets/images/slack-custom-bot1.png)


1. 「Create a Slack App」の ①「App Name」にはアプリの名前を、②「Development Slack Workspace」には
  GROWI bot を追加したいワークスペースを選択します。

1. 「Create App」をクリックします。
  ![slack-custom-bot2](/assets/images/slack-custom-bot2.png)


## スコープを設定する

1. 作成した Slack App の **Features** から **OAuth & Permissions** をクリックします。
  ![slack-bot-oauth-and-permissions-introduction-no-check](/assets/images/slack-bot-oauth-and-permissions-introduction-no-check.png)
1. **Add an OAuth Scope** をクリックします。
  ![slack-bot-scope-add-oauth-click](/assets/images/slack-bot-scope-add-oauth-click.png)
1. **commands**, **chat:write**, **team:read** を選択します。
  以下のように表示されたら、スコープの設定は完了です。  
  ![slack-bot-scope-selected](/assets/images/slack-bot-scope-selected.png)

## Interactivity & Shortcuts の Request URL を設定する

1. 作成した Slack App の **Features** から **Interactivity Shortcuts** をクリックします。
  ![slack-bot-interactivity-shortcuts-introduction](/assets/images/slack-bot-interactivity-shortcuts-introduction.png)

1. **Interactivity** 右側にあるボタンを On にします。
  ![slack-bot-interactivity-shortcuts-enable-button](/assets/images/slack-bot-interactivity-shortcuts-enable-button.png)

1. Request URL を以下のように入力してください。

- https://{連携させたい GROWI のドメイン名}/\_api/v3/slack-integration/interactions
- 例 `https://example.com/_api/v3/slack-integration/interactions`

  ![slack-bot-interactivity-shortcuts-creation](/assets/images/slack-bot-interactivity-shortcuts-creation.png)

1. 入力が完了したら、**Save Changes** をクリックしてください。

## スラッシュコマンドの作成

1. 作成した Slack App の **Features** から **Slash Commands** をクリックします。
  ![slash-commands-introduction](/assets/images/slash-commands-introduction.png)

1. **Create New Command** をクリックします。
  ![slash-commands-create-new-command](/assets/images/slash-commands-create-new-command.png)

    - Command に /growi と入力してください。
    - Request URL には、`https://example.com/_api/v3/slack-integration/commands` と入力してください
    - Short Description も入力必須のため、適当なご説明を入力してください。
    - Usage Hint に関しては任意なので、適宜入力してください。
    - Escape channels, users, and links sent to your app に関しては任意なので、適宜入力してください。
    - 入力が完了したら、**Save** をクリックしてください。

  ![slash-commands-create](/assets/images/slash-commands-create.png)

## Custom bot without proxy を Slack のワークスペースへインストールする

1. 作成した Slack App の **Settings** から **Basic Information** をクリックします。
1. **Install your app** をクリックします。
  ![slack-bot-install-your-app-introduction](/assets/images/slack-bot-install-your-app-introduction.png)
1. **Install to Workspace** をクリックします。
  ![slack-bot-install-to-workspace](/assets/images/slack-bot-install-to-workspace.png)
1. 遷移先の画面にて、**Allow**をクリックします。
  ![slack-bot-install-your-app-transition-destination](/assets/images/slack-bot-install-your-app-transition-destination.png)
1. Install your app の右側に 緑色のチェックがつけばワークスペースへのインストール完了です。
  ![slack-bot-install-your-app-complete](/assets/images/slack-bot-install-your-app-complete.png)
1. GROWI bot を使いたいチャンネルに @example を使用して招待します。
  ![slack-bot-install-to-workspace-joined-bot](/assets/images/slack-bot-install-to-workspace-joined-bot.png)
  ![slack-bot-install-your-app-introduction-to-channel](/assets/images/slack-bot-install-your-app-introduction-to-channel.png)

## Signing Secret と Bot User OAuth Token の設定

Signing Secret と Bot User OAuth Token の設定を行う前に、作成した Bot でそれぞれの値を確認します。

### Signing Secret の確認方法

1. 作成した Slack App の **Settings** から **Basic Information** をクリックします。
  ![slack-bot-basic-information](/assets/images/slack-bot-basic-information.png)

1. App Credentials の **Signing Secret** の **show** ボタンを押して確認します。
  ![slack-bot-signing-secret](/assets/images/slack-bot-signing-secret.png)

### Bot User OAuth Token の確認方法

1. 作成した Slack App の **Settings** から **OAuth and Permissions** をクリックします。
  ![slack-bot-oauth-and-permissions-introduction](/assets/images/slack-bot-oauth-and-permissions-introduction.png)

1. **OAuth Tokens for Your Team** の **Bot User Oauth Token** から確認します。
  ![slack-bot-oauth-and-permissions](/assets/images/slack-bot-oauth-and-permissions.png)

確認した **Signing Secret** と **Bot User OAuth Token** は 1. 管理画面で入力して設定する方法 と 2. 環境変数で設定する方法の
2 種類の方法があります。管理画面で直接入力する方が容易です。
また、環境変数と管理画面の両方に入力した場合は、管理画面で入力した値が優先されるので、管理画面での入力をおすすめします。

1. 管理画面で直接入力する方法

- 管理画面の Slack 連携をクリックし、**Signing Secret** と **Bot User OAuth Token** を入力して
   **Update** ボタンをクリックします。
  ![slack-bot-register-introduction](/assets/images/slack-bot-register-introduction.png)
- 赤丸で囲った部分に緑色のチェックマークが表示されたら登録完了です。
    ![slack-bot-register-secrets](/assets/images/slack-bot-register-secrets.png)

1. 環境変数で設定する方法

  環境変数 `SLACK_SIGNING_SECRET` と `SLACK_BOT_TOKEN` に確認した値を代入してください。

## Custom Bot without proxy の接続テストを実行する

1. 「Test connection」をクリックし、GROWI-Bot を招待した Slack チャンネルを入力します。
  ![slack-bot-test-introduction](/assets/images/slack-bot-test-introduction.png)


2. 「Test」 ボタンをクリックします。

- 成功の場合  
  **Successfully sent to Slack workspace.** が Logs に表示され、赤丸で囲った部分に緑色のチェックマークが表示されます。GROWI-Bot を招待した Slack チャンネルで確認してみましょう。
  - GROWI 側
    ![slack-bot-test-success](/assets/images/slack-bot-test-success.png)  
  - Slack 側
    ![slack-bot-test-success-at-slack-app](/assets/images/slack-bot-test-success-at-slack-app.png)  

- 失敗の場合  
  [接続テスト時のエラーログ](/admin-guide/management-cookbook/slack-integration/#接続テスト時のエラーログ)を参照してください。

全ての設定が完了したら [GROWI bot でできること](/admin-guide/management-cookbook/slack-integration/#growi-bot-でできること)を参照してください。
