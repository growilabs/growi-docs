# Custom bot without proxy Settings

【Diagram】
![diagram-for-custom-bot-without-proxy](/assets/images/slack-bot-outline-custom-without-proxy.png)

To deploy a custom bot without proxy in your Slack workspace,
  you need to create and edit a Slack app.
  The steps are as follows.

## Before creating Slack app

Start the GROWI main server.

## Select Bot type

Select Custom bot without proxy in Slack Integration of the Management page.

![slack-bot-selecting-custom-bot-without-proxy](/assets/images/slack-bot-selecting-custom-bot-without-proxy.png)

## Create a Slack app

1. Go to the [App Page](https://api.slack.com/apps) of the Slack API and click **Create New App** button.

   ![slack-custom-bot1](/assets/images/slack-custom-bot1.png)

1. In the **Create a Slack App** section, ① input the name of your app in the **App Name** field and ② select the workspace where you want to add the GROWI bots in the **Development Slack Workspace**.

1. Click the [Create App].

  ![slack-custom-bot2](/assets/images/slack-custom-bot2.png)

## Scope settings

1. In the Slack App you created, go to **Features** and click **OAuth & Permissions**.
   ![slack-bot-oauth-and-permissions-introduction](/assets/images/slack-bot-oauth-and-permissions-introduction.png)
1. Click the **Add an OAuth Scope** button.
   ![slack-bot-scope-add-oauth-click](/assets//images/slack-bot-scope-add-oauth-click.png)
1. Select **commands**, **chat: write** and **team:read**.
   When the following OAuth Scope is displayed, the scope setting will be completed.
   ![slack-bot-scope-selected](/assets//images/slack-bot-scope-selected.png)

## Set Request URL of **Interactivity & Shortcuts**

  1. In the Slack App you created, go to **Features** and click **Interactivity Shortcuts**.
     ![slack-bot-interactivity-shortcuts-introduction](/assets/images/slack-bot-interactivity-shortcuts-introduction.png)

  1. Turn on the button on the right side of **Interactivity**.
     ![slack-bot-interactivity-shortcuts-enable-button](/assets/images/slack-bot-interactivity-shortcuts-enable-button.png)

  1. Input the Request URL as follows.

     - https:// your GROWI domain /\_api/v3/slack-integration/interactions
       - e.g. **<https://example.com/_api/v3/slack-integration/interactions>**

     ![slack-bot-interactivity-shortcuts-creation](/assets/images/slack-bot-interactivity-shortcuts-creation.png)

  1. When the Request URL has been correctly entered, click **Save Changes** button.

## Slash Commands

1. In the Slack App you created, go to **Features** and click **Slash Commands**.

<!-- ![slash-commands-introduction](/assets/images/slash-commands-introduction.png) -->

1. Click the **Create New Command** button.

![slash-commands-create-new-command](/assets/images/slash-commands-create-new-command.png)

- Input `/growi` for Command.
- For RequestURL, input `https://example.com/_api/v3/slack-integration/commands`.
- Short Description is also required, so please input an appropriate description.
- The Usage Hint is optional, so please input it accordingly.
- The Escape channels, users, and links sent to your app is optional, so input it accordingly.
- When you are done, click **Save** button.

![slash-commands-create](/assets/images/slash-commands-create.png)

## Install the Custom bot without proxy in your Slack workspace

1. In the Slack App you created, go to **Settings** and click **Basic Information**.
1. Click the **Install your app**.
   ![slack-bot-install-your-app-introduction](/assets/images/slack-bot-install-your-app-introduction.png)
1. Click the **Install to Workspace**.
   ![slack-bot-install-to-workspace](/assets/images/slack-bot-install-to-workspace.png)
1. On the destination screen, Click the **Allow** button.
   ![slack-bot-install-your-app-transition-destination](/assets/images/slack-bot-install-your-app-transition-destination.png)
1. If you see a green check mark to the right of Install your app, the installation is complete in your workspace.
   ![slack-bot-install-your-app-complete](/assets/images/slack-bot-install-your-app-complete.png)
1. Invite the channel you want to use the GROWI bot on using @example.
   ![slack-bot-install-to-workspace-joined-bot](/assets/images/slack-bot-install-to-workspace-joined-bot.png)
   ![slack-bot-install-your-app-introduction-to-channel](/assets/images/slack-bot-install-your-app-introduction-to-channel.png)

## Signing Secret and Bot User OAuth Token settings

Before setting Signing Secret and Bot User OAuth Token, check the values.

### How to check Signing Secret

1. In the Slack App you created, go to **Settings** and click **Basic Information**.

   ![slack-bot-basic-information](/assets/images/slack-bot-basic-information.png)

1. Push **show** button for **Signing Secret** in App Credentials to confirm.
   ![slack-bot-signing-secret](/assets/images/slack-bot-signing-secret.png)

### How to check Bot User OAuth Token

1. In the Slack App you created, go to **Settings** and click **OAuth and Permissions**.
   ![slack-bot-oauth-and-permissions-introduction](/assets/images/slack-bot-oauth-and-permissions-introduction.png)
1. Check **Bot User Oauth Token** in **OAuth Tokens for Your Team**.

   ![slack-bot-oauth-and-permissions](/assets/images/slack-bot-oauth-and-permissions.png)

There are two ways to set Signing Secret and Bot User OAuth Token: 1. Set them in the Management page 2. Set them with environment variables. It is easier to set them in the Management page. Also,
in case that you input values in both the Management page and environment variable, the Management page value will take a priority. That's why settings in the Management page is recommended.

1. How to set them in Management page

- Go to the Slack integration in the Management page and input Signing Secret and Bot User OAuth Token, then click on the **Update** button.

![slack-bot-register-introduction](/assets/images/slack-bot-register-introduction.png)

- When a green checkmark appears in the red circle, registration is completed.  
![slack-bot-register-secrets](/assets/images/slack-bot-register-secrets.png)

1. How to set them with environment variables

Assign `SLACK_SIGNING_SECRET` and `SLACK_BOT_TOKEN` with the values you checked.

## Run connectivity test of Custom bot without proxy

1. Click **Test connection** and input the Slack channel to which invited GROWI-Bot.
  ![slack-bot-test-introduction](/assets/images/slack-bot-test-introduction.png)

2. Click on the **Test** button.  

- In case of success  
  '**Successfully sent to Slack workspace.**' will be displayed at Logs. Green checkmarks will appear in red circles. Check the channel to which you invited GROWI-Bot.
  - GROWI side
    ![slack-bot-test-success](/assets/images/slack-bot-test-success.png)
  - Slack side
    ![slack-bot-test-success-at-slack-app](/assets/images/slack-bot-test-success-at-slack-app.png)

- In case of failure  
  See [Error logs for connectivity test](/admin-guide/management-cookbook/slack-integration/#error-logs-for-connectivity-test)


Once you are all set up, see [what you can do with a GROWI-bot](/admin-guide/management-cookbook/slack-integration/#check-the-connected-growi)
