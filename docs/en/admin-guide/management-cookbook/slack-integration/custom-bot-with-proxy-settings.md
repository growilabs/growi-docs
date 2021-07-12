
# Custom bot with proxy settings

【Diagram】
![diagram-for-custom-bot-with-proxy](/assets/images/slack-bot-outline-custom-with-proxy.png)

To deploy a custom bot without proxy in your Slack workspace,
  you need to create and edit a Slack app.
  The steps are as follows.

## Before creating Custom bot with proxy

  1. Create a new file `.env.development.local` under `packages/slackbot-proxy`.
  1. Please input any environment variable `SERVER_URI` to the created file above.

  e.g. `SERVER_URI=http://localhost:8080`

  1. Start both the GROWI main server and the proxy server(`slackbot-proxy`).  
    You can start the proxy server with `yarn` and `yarn dev` commands.

  1. Select **Custom bot with proxy** from the Slack Integration section
   of the admin panel.

  ![slack-bot-selecting-custom-bot-with-proxy](/assets/images/slack-bot-selecting-custom-bot-with-proxy.png)

## Create Custom bot with proxy

  1. Go to the [App Page](https://api.slack.com/apps) of the Slack API and click
   **Create New App** button.

   ![slack-custom-bot1](/assets/images/slack-custom-bot1.png)

  1. In the **Create a Slack App** section, ① input the name of your app in the
    **App Name** field and ② select the workspace where you want to add the GROWI
    bots in the **Development Slack Workspace**.

  1. Click the **Create App** button.

  ![slack-custom-bot2](/assets/images/slack-custom-bot2.png)


## Set Custom bot with proxy Scopes

  1. In the Slack App you created, go to **Features** and click **OAuth & Permissions**.
    ![slack-bot-oauth-and-permissions-introduction](/assets/images/slack-bot-oauth-and-permissions-introduction.png)
  1. Click the **Add an OAuth Scope** button.
    ![slack-bot-scope-add-oauth-click](/assets//images/slack-bot-scope-add-oauth-click.png)
  1. Select **commands**, **chat: write** and **team:read**.  
    When the following OAuth Scope is displayed, the scope setting will be completed.
    ![slack-bot-scope-selected](/assets//images/slack-bot-scope-selected.png)

## Request URL settings

### Interactivity & Shortcuts

  1. In the Slack App you created, go to **Features** and click **Interactivity Shortcuts**.
     ![slack-bot-interactivity-shortcuts-introduction](/assets/images/slack-bot-interactivity-shortcuts-introduction.png)

  1. Turn on the button on the right side of **Interactivity**.
     ![slack-bot-interactivity-shortcuts-enable-button](/assets/images/slack-bot-interactivity-shortcuts-enable-button.png)

  1. Input the Request URL as follows.

     - https:// your GROWI domain /\_api/v3/slack-integration/interactions
       - e.g. **<https://example.com/_api/v3/slack-integration/interactions>**

     ![slack-bot-interactivity-shortcuts-creation](/assets/images/slack-bot-interactivity-shortcuts-creation.png)

  1. When the Request URL has been correctly entered, click the **Save Changes** button.

### Slash Commands

  1. In the Slack App you created, go to **Features** and click **Slash Commands**.

  <!-- ![slash-commands-introduction](/assets/images/slash-commands-introduction.png) -->

  1. Click the **Create New Command** button.

      ![slash-commands-create-new-command](/assets/images/slash-commands-create-new-command.png)

      - Input `/growi` for Command.
      - For RequestURL, input `https://example.com/_api/v3/slack-integration/commands`.
      - Short Description is also required, so please input an appropriate description.
      - The Usage Hint is optional, so please input it accordingly.
      - The Escape channels, users, and links sent to your app is optional,
       so input it accordingly.
      - When you are done, click **Save** button.

      ![slash-commands-create](/assets/images/slash-commands-create.png)

## Install the Custom bot with proxy in your Slack workspace

  1. In the Slack App you created, go to **Settings** and click **Basic Information**.
  1. Click the **Install your app**.
    ![slack-bot-install-your-app-introduction](/assets/images/slack-bot-install-your-app-introduction.png)
  1. Click the **Install to Workspace**.
    ![slack-bot-install-to-workspace](/assets/images/slack-bot-install-to-workspace.png)
  1. On the destination screen, Click the **Allow** button.
    ![slack-bot-install-your-app-transition-destination](/assets/images/slack-bot-install-your-app-transition-destination.png)
  1. If you see a green check mark to the right of Install your app,
      the installation is complete in your workspace.
    ![slack-bot-install-your-app-complete](/assets/images/slack-bot-install-your-app-complete.png)
  1. Invite the channel you want to use the GROWI bot on using @example.
    ![slack-bot-install-to-workspace-joined-bot](/assets/images/slack-bot-install-to-workspace-joined-bot.png)
    ![slack-bot-install-your-app-introduction-to-channel](/assets/images/slack-bot-install-your-app-introduction-to-channel.png)

## Redirect URL setting

### OAuth & Permissions

  1. In the Slack App you created, go to **Features** and click **OAuth & Permissions**.
  1. Click on the **Add New Redirect URL** button of **Redirect URLs**.
    ![slash-commands-introduction](/assets/images/slack-bot-auth-and-permisions1.png)

  1. when displayed input form, please input `https://{your proxy domain name}/slack/oauth_redirect`.
      - e.g. `https://example.com/slack/oauth_redirect`

      ![slash-commands-introduction](/assets/images/slack-bot-auth-and-permisions2.png)

  1. Click on the **Add** button.
  1. Save the URL by clicking on the **Save URLs** button.

## Manage Distribution settings
<!-- TODO: GW-6475 [Custom bot with proxy]「Manage Distribution を設定する」を記述する(en) -->

## Install Custom bot with proxy in your Slack workspace

  1. In the Slack App you created, go to **Settings** and click **Basic Information**.
  1. Click the **Install your app**.
    ![slack-bot-install-your-app-introduction](/assets/images/slack-bot-install-your-app-introduction.png)
  1. Click the **Install to Workspace**.
    ![slack-bot-install-to-workspace](/assets/images/slack-bot-install-to-workspace.png)
  1. On the destination screen, Click the **Allow** button.
    ![slack-bot-install-your-app-transition-destination](/assets/images/slack-bot-install-your-app-transition-destination.png)
  1. If you see a green check mark to the right of Install your app,
  　　the installation is complete in your workspace.
    ![slack-bot-install-your-app-complete](/assets/images/slack-bot-install-your-app-complete.png)
  1. Invite the channel you want to use the GROWI bot on using @example.
    ![slack-bot-install-to-workspace-joined-bot](/assets/images/slack-bot-install-to-workspace-joined-bot.png)
    ![slack-bot-install-your-app-introduction-to-channel](/assets/images/slack-bot-install-your-app-introduction-to-channel.png)


## Register Custom bot with proxy Service
<!-- TODO: GW-6770 中身がない -->

## Run connectivity test of Custom bot with proxy

  1. Click **Test connection** and input the Slack channel to which invited GROWI-Bot.
    ![slack-bot-test-introduction](/assets/images/slack-bot-test-introduction.png)

  2. Click on the **Test** button.  

      - In case of success
          **Successfully sent to Slack workspace.** will be displayed at Logs.
          Green checkmarks will appear in red circles. Check the channel to
          which you invited GROWI-Bot.
        - GROWI side
            ![slack-bot-test-success](/assets/images/slack-bot-test-success.png)
        - Slack side
            ![slack-bot-test-success-at-slack-app](/assets/images/slack-bot-test-success-at-slack-app.png)

      <!-- TODO: GW-6770 URLが正しく遷移していない（ドキュメント内リンクに遷移しない） -->
      - In case of failure  
           See [Error logs for connectivity test](/admin-guide/management-cookbook/slack-integration/#error-logs-for-connectivity-test)
        <!-- TODO: GW-6770 URLが正しく遷移していない（ドキュメント内リンクに遷移しない） -->
        Once you are all set up, see [what you can do with a GROWI-bot](/admin-guide/management-cookbook/slack-integration/#check-the-connected-growi)
