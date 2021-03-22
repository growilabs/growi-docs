# Slack Integration

## Overview

GROWI provides two methods of Slack integration: 1. GROWI bot and 2. Incoming Webhook.

### 1. GROWI bot

The GROWI bot is a Slack App developed by the GROWI development team. By installing it in any Slack workspace, you can not only receive notifications from GROWI, but also execute full-text searches from chats, summarize conversations, and use various other functions.

#### Official bot 【Recommended】

::: danger
This contents are not yet implemented.
:::

The Official GROWI bot is a free GROWI bot provided and operated by the GROWI development team.It is available at [slack app directory](https://wsgrowi.slack.com/apps) and anyone can use this service.

<!--以下の図は暫定的なものです。https://youtrack.weseek.co.jp/issue/GW-5421 で差し替えます。-->

![bot-outline-proxy](../../../ja/admin-guide/management-cookbook/images/bot-outline-proxy.png)

#### Custom bot(non-proxy)

Custom bot(non-proxy) allows you to create a Slack bot and link it to your GROWI so that you can use some of the GROWI features from Slack.

<!--以下の図は暫定的なものです。https://youtrack.weseek.co.jp/issue/GW-5421 で差し替えます。-->

![bot-outline](../../../ja/admin-guide/management-cookbook/images/bot-outline.png)

#### Custom bot(with-proxy)

::: danger
This contents are not yet implemented.
:::

Custom bot(with-proxy) allows you to create a Slack bot, set up and configure a proxy server, and use some of the features of GROWI in the same way as the Official bot.

### 2. Incoming Webhook

<!-- TODO Imple link after https://youtrack.weseek.co.jp/issue/GW-5452 -->

Incoming Webhook is another way to do Slack integration, but unlike GROWI bot, it is focused on notifications to Slack. It does not have many of the features of GROWI bot, such as full-text search from chat, but it is easier to set up.For more information, please click here.

<!-- [通知の種類/設定方法](/ja/admin-guide/management-cookbook/external-notification.html#通知の種類-設定方法). -->

### Custom bot (non-proxy) Setting

To deploy a custom bot (non-proxy) in your Slack workspace, you need to create and edit a Slack app. The steps are as follows.

#### Create Slack app

1. Go to the [App Page](https://api.slack.com/apps) of the Slack API and click [Create New App].

   ![slack-custom-bot1](../../../ja/admin-guide/management-cookbook/images/slack-custom-bot1.png)

2. In the [Create a Slack App] section, ① input the name of your app in the [App Name] field and ② select the workspace where you want to add the GROWI bot in the [Development Slack Workspace].

3. Click the [Create App].

   ![slack-custom-bot2](../../../ja/admin-guide/management-cookbook/images/slack-custom-bot2.png)

#### Set the scope

1. In the Slack App you created, go to **Features** and click **OAuth & Permissions**.
   ![scope-introduction](../../../ja/admin-guide/management-cookbook//images/scope-introduction.png)
1. Click the **Add an OAuth Scope**.
   ![scope-add-oauth-click](../../../ja/admin-guide/management-cookbook//images/scope-add-oauth-click.png)
1. Select **commands** and **chat: write**.
   ![scope-select-commands](../../../ja/admin-guide/management-cookbook//images/scope-select-commands.png)
   ![scope-select-chat-write](../../../ja/admin-guide/management-cookbook//images/scope-add-chat-write.png)

1. When the following OAuth Scope is displayed, the scope setting is complete.
   ![scope-selected](../../../ja/admin-guide/management-cookbook//images/scope-selected.png)

#### Set each Request URL

- Set Request URL of **Event Subscriptions**

  1. In the Slack App you created, go to **Features** and click **Event Subscriptions**.
     ![event-subscriptions-introduction](../../../ja/admin-guide/management-cookbook/images/event-subscriptions-introduction.png)

  1. Turn on the button to the right side of **Enable Events**.
     ![event-subscriptions-enable-button](../../../ja/admin-guide/management-cookbook/images/event-sucscriptions-enable-button.png)

  1. Input the Request URL as follows.

     - https:// your GROWI domain /\_api/v3/slack-bot
       - 例 https://example.com/_api/v3/slack-bot

     ![event-subscriptions-creation](../../../ja/admin-guide/management-cookbook/images/event-sucscriptions-creation.png)

  1. When you are done, click **Save Changes**.

- Set Request URL of **Interactivity & Shortcuts**

  1. In the Slack App you created, go to **Features** and click **Interactivity Shortcuts**.
     ![interactivity-shortcuts-introduction](../../../ja/admin-guide/management-cookbook/images/interactivity-shortcuts-introduction.png)

  1. Turn on the button on the right side of **Interactivity**.
     ![interactivity-shortcuts-enable-button](../../../ja/admin-guide/management-cookbook/images/interactivity-shortcuts-enable-button.png)

  1. For the Request URL, input the same one you inputted earlier.
     ![interactivity-shortcuts-creation](../../../ja/admin-guide/management-cookbook/images/interactivity-shortcuts-creation.png)

  1. When you are done, click **Save Changes**.

#### Create Slash Commands

1. In the Slack App you created, go to **Features** and click **Slash Commands**.

<!-- ![slash-commands-introduction](../../../ja/admin-guide/management-cookbook/images/slash-commands-introduction.png) -->

2. Click the **Create New Command**.

![slash-commands-create-new-command](../../../ja/admin-guide/management-cookbook/images/slash-commands-create-new-command.png)

- Input /growi for Command.
- For RequestURL, input the same Request URL you set above.
- Short Description is also required, so please input an appropriate description.
- The Usage Hint is optional, so please input it accordingly.
- The Escape channels, users, and links sent to your app is optional, so input it accordingly.
- When you are done, click **Save**.

![slash-commands-create](../../../ja/admin-guide/management-cookbook/images/slash-commands-create.png)

#### Install the Bot in your Slack workspace

1. In the Slack App you created, go to **Settings** and click **Basic Information**.
1. Click the **Install your app**.
   ![install-your-app-introduction](../../../ja/admin-guide/management-cookbook/images/install-your-app-introduction.png)
1. Click the **Install to Workspace**.
   ![install-to-workspace](../../../ja/admin-guide/management-cookbook/images/install-to-workspace.png)
1. On the destination screen, Click the**Allow**.
   ![install-your-app-transition-destination](../../../ja/admin-guide/management-cookbook/images/install-your-app-transition-destination.png)
1. If you see a green check mark to the right of Install your app, the installation is complete in your workspace.
   ![install-your-app-complete](../../../ja/admin-guide/management-cookbook/images/install-your-app-complete.png)
1. Invite the channel you want to use the GROWI bot on using @example.
   ![install-to-workspace-joined-bot](../../../ja/admin-guide/management-cookbook/images/install-to-workspace-joined-bot.png)
   ![install-your-app-introduction-to-channel](../../../ja/admin-guide/management-cookbook/images/install-your-app-introduction-to-channel.png)

### Set the Official bot

### Set the Custom bot (with-proxy)

<!-- TODO: GW-5372 「Slack/Mattermost への通知」の内容を適切なタイトルの下に移動させる -->

### Set the Incoming webhook

<!-- TODO: GW-5372 「Slack/Mattermost への通知」の内容を適切なタイトルの下に移動させる -->

Set up a Slack workspace for notifications.

1. Access the security settings page (/admin/notification) in the Management page.
1. Input the required information for the Slack Incoming Webhooks setting, and click the Update button.

- **Webhook URL**  
  You can get it at [Incoming Webhooks](https://slack.com/services/new/incoming-webhook).

### Check if the settings are reflected.

After the above settings, a Slack notification form will be added to the edit mode screen of the page.

![slack1](../../../ja/admin-guide/management-cookbook/images/slack1.png)

When a page is saved or updated, a Slack notification is sent to the channel you inputted.  
This method of notification is referred to as **User Trigger Notification** in GROWI.

<!-- TODO Imple link after https://youtrack.weseek.co.jp/issue/GW-5452 -->

For details on how to configure User Trigger Notification, please refer to here.

<!-- [通知の種類/設定方法](/ja/admin-guide/management-cookbook/external-notification.html#user-trigger-notification-設定). -->

## What you can do with a Slack bot ?

### Full-text search in the workspace

1. If you input /growi search [keyword(s)], the search results will be displayed.
   - e.g. /growi search example
     ![full-text-search-display-result-command](../../../ja/admin-guide/management-cookbook/images/full-text-search-display-result-command.png)
   - Search results.
     ![full-text-search-display-result](../../../ja/admin-guide/management-cookbook/images/full-text-search-display-result.png)
   - Click the **Next** button to display the next search result.
     ![full-text-search-click-next](../../../ja/admin-guide/management-cookbook/images/full-text-search-click-next.png)
   - Click the **Share** button to share it within the channel.
     ![full-text-search-click-share](../../../ja/admin-guide/management-cookbook/images/full-text-search-click-share.png)

<!-- ### 複数ワークスペースの横断検索 (TBD) -->

<!-- ### Slack ログの記録 (TBD) -->
