# Custom bot with proxy 設定

  Custom bot with proxy を Slack のワークスペースに導入するには、Slack アプリを作成・編集する必要があります。手順は以下の通りです。

## Custom bot with proxy を作成する前に

1. `packages/slackbot-proxy` の配下に 新規ファイル`.env.development.local`を作成します。
1. 作成したファイルに任意の環境変数`SERVER_URI`を入力してください。

例: `SERVER_URI=http://localhost:8080`

1. GROWI 本体サーバーとプロキシ用サーバー(`slackbot-proxy`)の両方を立ち上げてください。  
  プロキシ用サーバーは`yarn`, `yarn dev`で起動することができます。

1. 管理画面の Slack 連携 にて **Custom bot with proxy** を選択してください。
  ![slack-bot-selecting-custom-bot-with-proxy](/assets/images/slack-bot-selecting-custom-bot-with-proxy.png)

## Custom bot with proxy を作成する

1. Slack API の[アプリページ](https://api.slack.com/apps)に移動し、「Create New App」をクリックします。

   ![slack-custom-bot1](/assets/images/slack-custom-bot1.png)

1. 「Create a Slack App」の ①「App Name」にはアプリの名前を、②「Development Slack Workspace」には
   GROWI bot を追加したいワークスペースを選択します。

1. 「Create App」をクリックします。

   ![slack-custom-bot2](/assets/images/slack-custom-bot2.png)

## Custom bot with proxy のスコープを設定する

1. 作成した Slack App の **Features** から **OAuth & Permissions** をクリックします。

  ![slack-bot-oauth-and-permissions-introduction-no-check](/assets/images/slack-bot-oauth-and-permissions-introduction-no-check.png)

1. **Add an OAuth Scope** をクリックします。

  ![slack-bot-scope-add-oauth-click](/assets/images/slack-bot-scope-add-oauth-click.png)

1. **commands**, **chat:write**, **team:read** を選択します。

  以下のように表示されたら、スコープの設定は完了です。
  ![slack-bot-scope-selected](/assets/images/slack-bot-scope-selected.png)

## Request URL 設定

### Interactivity & Shortcuts

  1. 作成した Slack App の **Features** から **Interactivity Shortcuts** をクリックします。
    ![slack-bot-interactivity-shortcuts-introduction](/assets/images/slack-bot-interactivity-shortcuts-introduction.png)

  1. **Interactivity** 右側にあるボタンを On にします。
    ![slack-bot-interactivity-shortcuts-enable-button](/assets/images/slack-bot-interactivity-shortcuts-enable-button.png)

  1. Request URL を以下のように入力してください。

- `https://{連携させたい proxy のドメイン名}/slack/interactions`
  - 例 `https://example.com/slack/interactions`

      ![slack-bot-interactiviry-shortcuts-for-with-proxy](/assets/images/slack-bot-interactiviry-shortcuts-for-with-proxy.png)

    1. 入力が完了したら、右下の **Save Changes** ボタンをクリックしてください。

### Slash Commands

  1. 作成した Slack App の **Features** から **Slash Commands** をクリックします。
    ![slash-commands-introduction](/assets/images/slash-commands-introduction.png)

  1. **Create New Command** をクリックします。
    ![slash-commands-create-new-command](/assets/images/slash-commands-create-new-command.png)

      - Command に /growi と入力してください。
      - Request URL には、`https://example.com/slack/commands` と入力してください
      - Short Description も入力必須のため、適当なご説明を入力してください。
      - Usage Hint に関しては任意なので、適宜入力してください。
      - Escape channels, users, and links sent to your app に関しては任意なので、適宜入力してください。
      - 入力が完了したら、右下の **Save** ボタンをクリックしてください。

  ![slash-commands-create](/assets/images/slash-commands-create.png)

## Redirect URL 設定

### OAuth & Permissions

1. 作成した Slack App の **Features** から **OAuth & Permissions** をクリックします。
1. **Redirect URLs** の **Add New Redirect URL** ボタンをクリックします。
  ![slash-commands-introduction](/assets/images/slack-bot-auth-and-permisions1.png)

1. 入力欄が表示されるので、`https://{連携させたい proxy のドメイン名}/slack/oauth_redirect` を入力してください。
    - 例 `https://example.com/slack/oauth_redirect`

    ![slash-commands-introduction](/assets/images/slack-bot-auth-and-permisions2.png)

1. 入力したら **Add** ボタン をクリックしてください。
1. **Save URLs** ボタンをクリックして 入力したURLを保存します。
  

## Custom bot with proxy を Slack のワークスペースへインストールする

  1. 作成した Slack App の **Settings** から **Manage distribution** をクリックします。
  1. **Embeddable Slack Button** の **Add to Slack** ボタンを押します。
  1. 遷移先の画面にて、Allowをクリックします。
  ![slack-bot-install-your-app-transition-destination](/assets/images/slack-bot-install-your-app-transition-destination.png)
  1. **Congratulations!** と表示されたらInstallが完了です。
  1. GROWI bot を使いたいチャンネルに @example を使用して招待します。
  ![slack-bot-install-to-workspace-joined-bot](/assets/images/slack-bot-install-to-workspace-joined-bot.png)
  ![slack-bot-install-your-app-introduction-to-channel](/assets/images/slack-bot-install-your-app-introduction-to-channel.png)

  ::: warning
  `Illegal state, try it again.`と表示される場合は、**Go to install page** を押し、表示される **Add to Slack** ボタンから再度インストールを行ってください。
  :::


## GROWI Custom Bot with proxy サービスへの登録
  
1. GROWI Custom Bot with proxy サービスへの登録を開きます。  
  **Access Token の発行** に各種トークンにアクセストークンが2種生成されていることを確認できます。
  アクセストークンは必要に応じて再発行できます。
1. Slack上で `/growi register` と打ちます。
![slack-bot-add-workspace](/assets/images/slack-bot-register-modal.png)
1. 表示されるモーダルの GROWI URL に、対象 GROWI の URL を保存します。
1. 上記で発行されている Access Token Proxy to GROWI と Access Token GROWI to Proxy を入れ **Submit** ボタンを押します。

![slack-bot-update-proxy-url](/assets/images/slack-bot-update-proxy-url.png)

成功した場合、 proxy サーバーの URL が表示されます。

![slack-bot-input-proxy-url](/assets/images/slack-bot-input-proxy-url.png)

上記で取得した proxy サーバーの URL を **Official bot 連携** の proxy URL に入力し更新します。

## Custom bot with proxy の接続テストを実行する

1. 「Test connection」をクリックし、GROWI-Bot を招待した Slack チャンネルを入力します。
  ![slack-bot-test-introduction](/assets/images/slack-bot-test-introduction-custom-with-proxy.png)

2. 「Test」 ボタンをクリックします。

- 成功の場合  
    **Successfully sent to Slack workspace.** が Logs に表示され、
    赤丸で囲った部分に緑色のチェックマークが表示されます。GROWI-Bot を招待した Slack チャンネルで確認してみましょう。
  - GROWI 側
      ![slack-bot-test-success](/assets/images/slack-bot-test-success-custom-with-proxy.png)
  - Slack 側
      ![slack-bot-test-success-at-slack-app](/assets/images/slack-bot-test-success-at-slack-app.png)

- 失敗の場合  
  [接続テスト時のエラーログ](./slack-integration.html#接続テスト時のエラーログ)を参照してください。


全ての設定が完了したら [GROWI bot でできること](./slack-integration.html#growi-bot-でできること)を参照してください。
