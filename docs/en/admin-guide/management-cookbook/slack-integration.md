# Slack Integration

## Overview

GROWI provides two methods of Slack integration: 1. GROWI bots and 2. Incoming Webhooks.

### 1. GROWI bots

GROWI bots are Slack Apps developed by the GROWI development team. By installing it in Slack workspaces, you can not only receive notifications from GROWI, but also execute full-text searches from chats, summarize conversations, and use various other functions.

#### Official bot 【Recommended】

Official bot is a free GROWI bot provided and operated by the GROWI development team. It is available at [slack app directory](https://wsgrowi.slack.com/apps) and anyone can use this service.

【Diagram】
![diagram-for-official-bot](../../../.vuepress/public/assets/images/slack-bot-outline-official.png)

#### Custom bot without proxy

Custom bot without proxy allows you to create a Slack bot and link it to your GROWI so that you can use some of the GROWI features from Slack.

【Diagram】
![diagram-for-custom-bot-without-proxy](../../../.vuepress/public/assets/images/slack-bot-outline-custom-without-proxy.png)

#### Custom bot with proxy

Custom bot with proxy allows you to create a Slack bot, set up and configure a proxy server, and use some of the features of GROWI in the same way as the Official bot.

【Diagram】
![diagram-for-custom-bot-with-proxy](../../../.vuepress/public/assets/images/slack-bot-outline-custom-with-proxy.png)

### 2. Incoming Webhooks

<!-- TODO Imple link after https://youtrack.weseek.co.jp/issue/GW-5452 -->

Incoming Webhooks is another way to do Slack integration, but unlike GROWI bots, it is focused on notifications to Slack. It does not have many features like GROWI bots, such as full-text search from chat, but it is easier to set up. For more information, please click here.

<!-- [通知の種類/設定方法](/ja/admin-guide/management-cookbook/external-notification.html#通知の種類-設定方法). -->

## Official bot Settings

### Select Bot type

  Select **Official bot** from the Slack Integration section of the admin panel.

  ![slack-bot-selecting-official-bot](../../../.vuepress/public/assets/images/slack-bot-selecting-official-bot.png)

### Install Official bot in your Slack workspace

  1. Click the **Add a Slack Workspace** button.

      ![slack-bot-add-a-slack-workspace](../../../.vuepress/public/assets/images/slack-bot-add-a-slack-workspace.png)

  1. A new accordion will be generated in **Integration Procedure**. Click on the tab "① Install Bot to Slack" to open it.
  1. Click the **Install now** button.

      ![slack-bot-install-now-for-official](../../../.vuepress/public/assets/images/slack-bot-install-now-for-official.png)

  1. Once redirected to the Slack app directory, click the "Add to Slack" button to install it on the Slack work space.
    <!-- TODO: Insert picture of GW-6420 [Official] app directory (GW4836 block) -->

### Register for the GROWI Official Bot Proxy service

  1. Open "Register for GROWI Official Bot Proxy Service".  
    Note that two access tokens have been generated for each token in the **Issue Access Token** section.
    The access tokens can be reissued as needed.

  1. On Slack, type `/growi register`.
  ![slack-bot-add-workspace](../../../.vuepress/public/assets/images/slack-bot-register-modal.png)

  1. Save the URL of the target GROWI in the GROWI URL of the modal to be displayed.
  1. Enter the Access Token Proxy to GROWI and Access Token GROWI to Proxy issued above.
   Click the **Submit** button.

  ![slack-bot-update-proxy-url](../../../.vuepress/public/assets/images/slack-bot-update-proxy-url.png)

  If successful, the URL of the proxy server will be displayed.

  ![slack-bot-input-proxy-url](../../../.vuepress/public/assets/images/slack-bot-input-proxy-url.png)

  Enter the URL of the proxy server obtained above into the proxy URL for **Official bot integration** and update it.

### Run connectivity test of Official bot

1. Click "Test connection" and enter the Slack channel to which GROWI-Bot is invited.
  ![slack-bot-test-introduction](../../../.vuepress/public/assets/images/slack-bot-test-introduction.png)

2. Click the "Test" button.

- In case of success  
  **Successfully sent to Slack workspace.** will be displayed in Logs, and
  Let's check it out on the Slack channel where you invited GROWI-Bot.
  - GROWI side
    ![slack-bot-test-success](../../../.vuepress/public/assets/images/slack-bot-test-success.png)
  - Slack side
    ![slack-bot-test-success-at-slack-app](../../../.vuepress/public/assets/images/slack-bot-test-success-at-slack-app.png)

- In case of failure  
  See [Error logs for connectivity test](./slack-integration.html#error-logs-for-connectivity-test)


Once you are all set up, see [what you can do with a GROWI-bot](./slack-integration.html#check-the-connected-growi)


## Custom bot without proxy Settings

  To deploy a custom bot without proxy in your Slack workspace,
   you need to create and edit a Slack app.
   The steps are as follows.

### Before creating Slack app

Start the GROWI main server.

### Select Bot type

Select Custom bot without proxy in Slack Integration of the Management page.

### Create a Slack app

1. Go to the [App Page](https://api.slack.com/apps) of the Slack API and click **Create New App** button.

   ![slack-custom-bot1](../../../.vuepress/public/assets/images/slack-custom-bot1.png)

1. In the [Create a Slack App] section, ① input the name of your app in the [App Name] field and ② select the workspace where you want to add the GROWI bots in the [Development Slack Workspace].

1. Click the [Create App].

   ![slack-custom-bot2](../../../.vuepress/public/assets/images/slack-custom-bot2.png)

### Scope settings

1. In the Slack App you created, go to **Features** and click **OAuth & Permissions**.
   ![slack-bot-oauth-and-permissions-introduction](../../../.vuepress/public/assets/images/slack-bot-oauth-and-permissions-introduction.png)
1. Click the **Add an OAuth Scope** button.
   ![slack-bot-scope-add-oauth-click](../../../.vuepress/public/assets//images/slack-bot-scope-add-oauth-click.png)
1. Select **commands**, **chat: write** and **team:read**.
   When the following OAuth Scope is displayed, the scope setting will be completed.
   ![slack-bot-scope-selected](../../../.vuepress/public/assets//images/slack-bot-scope-selected.png)

### Set Request URL of **Interactivity & Shortcuts**

  1. In the Slack App you created, go to **Features** and click **Interactivity Shortcuts**.
     ![slack-bot-interactivity-shortcuts-introduction](../../../.vuepress/public/assets/images/slack-bot-interactivity-shortcuts-introduction.png)

  1. Turn on the button on the right side of **Interactivity**.
     ![slack-bot-interactivity-shortcuts-enable-button](../../../.vuepress/public/assets/images/slack-bot-interactivity-shortcuts-enable-button.png)

  1. Input the Request URL as follows.

     - https:// your GROWI domain /\_api/v3/slack-integration/interactions
       - e.g. **<https://example.com/_api/v3/slack-integration/interactions>**

     ![slack-bot-interactivity-shortcuts-creation](../../../.vuepress/public/assets/images/slack-bot-interactivity-shortcuts-creation.png)

  1. When the Request URL has been correctly entered, click **Save Changes** button.

### Create Slash Commands

1. In the Slack App you created, go to **Features** and click **Slash Commands**.

<!-- ![slash-commands-introduction](../../../.vuepress/public/assets/images/slash-commands-introduction.png) -->

1. Click the **Create New Command** button.

![slash-commands-create-new-command](../../../.vuepress/public/assets/images/slash-commands-create-new-command.png)

- Input `/growi` for Command.
- For RequestURL, input `https://example.com/_api/v3/slack-integration/commands`.
- Short Description is also required, so please input an appropriate description.
- The Usage Hint is optional, so please input it accordingly.
- The Escape channels, users, and links sent to your app is optional, so input it accordingly.
- When you are done, click **Save** button.

![slash-commands-create](../../../.vuepress/public/assets/images/slash-commands-create.png)

### Install the Custom bot without proxy in your Slack workspace

1. In the Slack App you created, go to **Settings** and click **Basic Information**.
1. Click the **Install your app**.
   ![slack-bot-install-your-app-introduction](../../../.vuepress/public/assets/images/slack-bot-install-your-app-introduction.png)
1. Click the **Install to Workspace**.
   ![slack-bot-install-to-workspace](../../../.vuepress/public/assets/images/slack-bot-install-to-workspace.png)
1. On the destination screen, Click the **Allow** button.
   ![slack-bot-install-your-app-transition-destination](../../../.vuepress/public/assets/images/slack-bot-install-your-app-transition-destination.png)
1. If you see a green check mark to the right of Install your app, the installation is complete in your workspace.
   ![slack-bot-install-your-app-complete](../../../.vuepress/public/assets/images/slack-bot-install-your-app-complete.png)
1. Invite the channel you want to use the GROWI bot on using @example.
   ![slack-bot-install-to-workspace-joined-bot](../../../.vuepress/public/assets/images/slack-bot-install-to-workspace-joined-bot.png)
   ![slack-bot-install-your-app-introduction-to-channel](../../../.vuepress/public/assets/images/slack-bot-install-your-app-introduction-to-channel.png)

### Signing Secret and Bot User OAuth Token settings

Before setting Signing Secret and Bot User OAuth Token, check the values.

#### How to check Signing Secret

1. In the Slack App you created, go to **Settings** and click **Basic Information**.

   ![slack-bot-basic-information](../../../.vuepress/public/assets/images/slack-bot-basic-information.png)

1. Push **show** button for **Signing Secret** in App Credentials to confirm.
   ![slack-bot-signing-secret](../../../.vuepress/public/assets/images/slack-bot-signing-secret.png)

#### How to check Bot User OAuth Token

1. In the Slack App you created, go to **Settings** and click **OAuth and Permissions**.
   ![slack-bot-oauth-and-permissions-introduction](../../../.vuepress/public/assets/images/slack-bot-oauth-and-permissions-introduction.png)
1. Check **Bot User Oauth Token** in **OAuth Tokens for Your Team**.

   ![slack-bot-oauth-and-permissions](../../../.vuepress/public/assets/images/slack-bot-oauth-and-permissions.png)

There are two ways to set Signing Secret and Bot User OAuth Token: 1. Set them in the Management page 2. Set them with environment variables. It is easier to set them in the Management page. Also,
in case that you input values in both the Management page and environment variable, the Management page value will take a priority. That's why settings in the Management page is recommended.

1. How to set them in Management page

- Go to the Slack integration in the Management page and input Signing Secret and Bot User OAuth Token, then click on the **Update** button.

![slack-bot-register-introduction](../../../.vuepress/public/assets/images/slack-bot-register-introduction.png)

- When a green checkmark appears in the red circle, registration is completed.  
![slack-bot-register-secrets](../../../.vuepress/public/assets/images/slack-bot-register-secrets.png)

1. How to set them with environment variables

Assign `SLACK_SIGNING_SECRET` and `SLACK_BOT_TOKEN` with the values you checked.

### Run connectivity test of Custom bot without proxy

1. Click **Test connection** and input the Slack channel to which invited GROWI-Bot.
  ![slack-bot-test-introduction](../../../.vuepress/public/assets/images/slack-bot-test-introduction.png)

2. Click on the **Test** button.  

- In case of success  
  '**Successfully sent to Slack workspace.**' will be displayed at Logs. Green checkmarks will appear in red circles. Check the channel to which you invited GROWI-Bot.
  - GROWI side
    ![slack-bot-test-success](../../../.vuepress/public/assets/images/slack-bot-test-success.png)
  - Slack side
    ![slack-bot-test-success-at-slack-app](../../../.vuepress/public/assets/images/slack-bot-test-success-at-slack-app.png)

- In case of failure  
  See [Error logs for connectivity test](./slack-integration.html#error-logs-for-connectivity-test)

## Custom bot with proxy settings

  To deploy a custom bot without proxy in your Slack workspace,
    you need to create and edit a Slack app.
    The steps are as follows.

### Before creating Custom bot with proxy
<!-- TODO: GW-6481 「Custom bot with proxy settings」を記述する(en) 2 -->

### Create Custom bot with proxy
<!-- TODO: GW-6481 「Custom bot with proxy settings」を記述する(en) 2 -->

### Set Custom bot with proxy Scopes
<!-- TODO: GW-6481 「Custom bot with proxy settings」を記述する(en) 2 -->

### Request URL settings

#### Interactivity & Shortcuts
<!-- TODO: GW-6481 「Custom bot with proxy settings」を記述する(en) 2 -->

#### Slash Commands

  1. In the Slack App you created, go to **Features** and click **Slash Commands**.

  <!-- ![slash-commands-introduction](../../../.vuepress/public/assets/images/slash-commands-introduction.png) -->

  1. Click the **Create New Command** button.

      ![slash-commands-create-new-command](../../../.vuepress/public/assets/images/slash-commands-create-new-command.png)

      - Input `/growi` for Command.
      - For RequestURL, input `https://example.com/_api/v3/slack-integration/commands`.
      - Short Description is also required, so please input an appropriate description.
      - The Usage Hint is optional, so please input it accordingly.
      - The Escape channels, users, and links sent to your app is optional, so input it accordingly.
      - When you are done, click **Save** button.

      ![slash-commands-create](../../../.vuepress/public/assets/images/slash-commands-create.png)

### Install the Custom bot with proxy in your Slack workspace

  1. In the Slack App you created, go to **Settings** and click **Basic Information**.
  1. Click the **Install your app**.
    ![slack-bot-install-your-app-introduction](../../../.vuepress/public/assets/images/slack-bot-install-your-app-introduction.png)
  1. Click the **Install to Workspace**.
    ![slack-bot-install-to-workspace](../../../.vuepress/public/assets/images/slack-bot-install-to-workspace.png)
  1. On the destination screen, Click the **Allow** button.
    ![slack-bot-install-your-app-transition-destination](../../../.vuepress/public/assets/images/slack-bot-install-your-app-transition-destination.png)
  1. If you see a green check mark to the right of Install your app,
      the installation is complete in your workspace.
    ![slack-bot-install-your-app-complete](../../../.vuepress/public/assets/images/slack-bot-install-your-app-complete.png)
  1. Invite the channel you want to use the GROWI bot on using @example.
    ![slack-bot-install-to-workspace-joined-bot](../../../.vuepress/public/assets/images/slack-bot-install-to-workspace-joined-bot.png)
    ![slack-bot-install-your-app-introduction-to-channel](../../../.vuepress/public/assets/images/slack-bot-install-your-app-introduction-to-channel.png)

### Redirect URL setting

#### OAuth & Permissions
<!-- TODO: GW-6481 「Custom bot with proxy settings」を記述する(en) 2 -->

### Manage Distribution settings
<!-- TODO: GW-6475 [Custom bot with proxy]「Manage Distribution を設定する」を記述する(en) -->

### Install Custom bot with proxy in your Slack workspace

  1. In the Slack App you created, go to **Settings** and click **Basic Information**.
  1. Click the **Install your app**.
    ![slack-bot-install-your-app-introduction](../../../.vuepress/public/assets/images/slack-bot-install-your-app-introduction.png)
  1. Click the **Install to Workspace**.
    ![slack-bot-install-to-workspace](../../../.vuepress/public/assets/images/slack-bot-install-to-workspace.png)
  1. On the destination screen, Click the **Allow** button.
    ![slack-bot-install-your-app-transition-destination](../../../.vuepress/public/assets/images/slack-bot-install-your-app-transition-destination.png)
  1. If you see a green check mark to the right of Install your app,
  　　the installation is complete in your workspace.
    ![slack-bot-install-your-app-complete](../../../.vuepress/public/assets/images/slack-bot-install-your-app-complete.png)
  1. Invite the channel you want to use the GROWI bot on using @example.
    ![slack-bot-install-to-workspace-joined-bot](../../../.vuepress/public/assets/images/slack-bot-install-to-workspace-joined-bot.png)
    ![slack-bot-install-your-app-introduction-to-channel](../../../.vuepress/public/assets/images/slack-bot-install-your-app-introduction-to-channel.png)


### Register Custom bot with proxy Service


### Run connectivity test of Custom bot with proxy

  1. Click **Test connection** and input the Slack channel to which invited GROWI-Bot.
    ![slack-bot-test-introduction](../../../.vuepress/public/assets/images/slack-bot-test-introduction.png)

  2. Click on the **Test** button.  

      - In case of success
          '**Successfully sent to Slack workspace.**' will be displayed at Logs.
          Green checkmarks will appear in red circles. Check the channel to
          which you invited GROWI-Bot.
        - GROWI side
            ![slack-bot-test-success](../../../.vuepress/public/assets/images/slack-bot-test-success.png)
        - Slack side
            ![slack-bot-test-success-at-slack-app](../../../.vuepress/public/assets/images/slack-bot-test-success-at-slack-app.png)

      - In case of failure  
           See [Error logs for connectivity test](./slack-integration.html#error-logs-for-connectivity-test)

        Once you are all set up, see [what you can do with a GROWI-bot](./slack-integration.html#check-the-connected-growi)


<!-- TODO: GW-5372 「Slack/Mattermost への通知」の内容を適切なタイトルの下に移動させる -->

### Incoming webhook settings

<!-- TODO: GW-5372 「Slack/Mattermost への通知」の内容を適切なタイトルの下に移動させる -->

Set up a Slack workspace for notifications.

1. Access the security settings page (/admin/notification) in the Management page.
1. Input the required information for the Slack Incoming Webhooks setting, and click the Update button.

- **Webhook URL**  
  You can get it at [Incoming Webhooks](https://slack.com/services/new/incoming-webhook).

### Check if the settings are reflected

After the above settings, a Slack notification form will be added to the edit mode screen of the page.

![slack1](../../../.vuepress/public/assets/images/slack1.png)

When a page is saved or updated, a notification will be sent to the Slack channel you inputted.  
This notification fucntion is called as **User Trigger Notification** in GROWI.

<!-- TODO Imple link after https://youtrack.weseek.co.jp/issue/GW-5452 -->

For details on how to configure User Trigger Notification, please refer to here.

<!-- [通知の種類/設定方法](/ja/admin-guide/management-cookbook/external-notification.html#user-trigger-notification-設定). -->

## Error logs for connectivity test

1. **Channel_not_found**  
    if you have not invited GROWI-Bot to the Slack channel or inputted
    the wrong channel, **Channel_not_found** error will be displayed in the logs.
    Please make sure that GROWI-Bot has been invited to the Slack channel,
    and the channel name has been inputted appropriately.
   ![slack-bot-test-channel-not-found](../../../.vuepress/public/assets/images/slack-bot-test-channel-not-found.png)

1. **Cannot read property '0' of null**  
    The Proxy URL may not be set, please input the Proxy URL.
   ![slack-bot-errors-property-0-of-null](../../../.vuepress/public/assets/images/slack-bot-errors-property-0-of-null.png)

1. **Request failed with status code 400**  
   You may have clicked the Test button in the Slack workspace
   without registering information to the Proxy with `/growi register`.
   Please run `/growi register` in the Slack workspace
   and register the necessary information to the Proxy.
   ![slack-bot-errors-400](../../../.vuepress/public/assets/images/slack-bot-errors-400.png)

1. **Request failed with status code 500**  
   You may have already registered an Access Token
   and then reissued the Access Token to run the test.
   [Check the connected GROWI](./slack-integration.html#Check-the-connected-GROWI)
   to check which GROWI App(s) you are currently connected to.
   Once you have confirmed this,
   click [Unregister the Slack workspace from the GROWI App(s)](./slack-integration.html#Unregister-the-Slack-workspace-from-the-GROWI-App(s)),
   and then unregister the GROWI App(s). If you are able to unregister,
   please register again.
   ![slack-bot-errors-500](../../../.vuepress/public/assets/images/slack-bot-errors-500.png)
  
1. **The scopes is not appropriate**  
   You may not set correct Scopes when you create the Slack App.
   Please check the Scopes from OAuth & Permissions of the Slack App you created.
   The required Scopes are **team:read**, **chat:write**, and **command**.
  ![slack-bot-errors-scopes-not-appropriate](../../../.vuepress/public/assets/images/slack-bot-errors-scopes-not-appropriate.png)

1. **Cannot read property 'includes' of undefined**  
   You may not register the information such as Signing Secret
   and Bot User OAuth Token. Please register the correct values.
    ![slack-bot-errors-includes-of-undefined](../../../.vuepress/public/assets/images/slack-bot-errors-includes-of-undefined.png)

1. **invalid_auth**  
    You may not register incorrect Signing Secret or Bot User OAuth Token.
    Please register the correct values.
    ![slack-bot-errors-invalid-auth](../../../.vuepress/public/assets/images/slack-bot-errors-invalid-auth.png)


## What you can do with a Slack bot ?

### Full-text search in a workspace

1. If you input `/growi search [keyword(s)]`, the search results will be displayed.
   - e.g. `/growi search example`
     ![slack-bot-full-text-search-display-result-command](../../../.vuepress/public/assets/images/slack-bot-full-text-search-display-result-command.png)
   - Search results.
     ![slack-bot-full-text-search-display-result](../../../.vuepress/public/assets/images/slack-bot-full-text-search-display-result.png)
   - Click the **Next** button to display the next search result.
     ![slack-bot-full-text-search-click-next](../../../.vuepress/public/assets/images/slack-bot-full-text-search-click-next.png)
   - Click the **Share** button to share it within the channel.
     ![slack-bot-full-text-search-click-share](../../../.vuepress/public/assets/images/slack-bot-full-text-search-click-share.png)

### Check the connected GROWI

By typing `/growi status`, you can see the GROWI App(s) that is connected to the Slack workspace.
![slack-bot-growi-status](../../../.vuepress/public/assets/images/slack-bot-growi-status.png)

### Search pages from multi GROWI

By registering your Slack workspace with multi GROWI Apps, you will be able to search across them.
Please search for `/growi search [keyword(s)]` in your workspace.

- e.g.: `/growi search example`
     ![slack-bot-full-text-search-display-result-command](../../../.vuepress/public/assets/images/slack-bot-full-text-search-display-result-command.png)
- Search results.
     <!-- TODO GW-6581 -->
     ![slack-bot-search-multi-growi](../../../.vuepress/public/assets/images/slack-bot-search-multi-growi.png)

### Unregister the Slack workspace from the GROWI App(s)

  1. Please input `/growi unregister [URL1 of the GROWI App to be unregistered] [URL2 of the GROWI App to be unregistered]...`, then the modal as bellow will be displayed.
       - e.g.: `growi unregister http://example.com http://growi.jp`  
       ![slack-bot-unregister-input-eg](../../../.vuepress/public/assets/images/slack-bot-unregister-input-eg.png)

       - Modal
       ![slack-bot-unregister-modal](../../../.vuepress/public/assets/images/slack-bot-unregister-modal.png)

  1. Click on **Submit** button.
  1. If the following is displayed, the unregister the Slack workspace is completed.
    ![slack-bot-unregister-completed](../../../.vuepress/public/assets/images/slack-bot-unregister-completed.png)

<!-- ### 複数 GROWI の横断検索 (TBD) -->

