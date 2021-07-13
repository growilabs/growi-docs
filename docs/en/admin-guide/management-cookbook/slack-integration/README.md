# Slack Integration

## Overview

GROWI provides two methods of Slack integration: 1. GROWI bots and 2. Incoming Webhooks.

### 1. GROWI bots

GROWI bots are Slack Apps developed by the GROWI development team. By installing it in Slack workspaces, you can not only receive notifications from GROWI, but also execute full-text searches from chats, summarize conversations, and use various other functions.
There are three types of GROWI bots available.

#### Official bot 【Recommended】

Official bot is a free GROWI bot provided and operated by the GROWI development team. It is available at [slack app directory](https://wsgrowi.slack.com/apps) and anyone can use this service.

【Diagram】
![diagram-for-official-bot](/assets/images/slack-bot-outline-official.png)

#### Custom bot without proxy

Custom bot without proxy allows you to create a Slack bot by yourself and link it to your GROWI so that you can use some of the GROWI features from Slack.

【Diagram】
![diagram-for-custom-bot-without-proxy](/assets/images/slack-bot-outline-custom-without-proxy.png)

#### Custom bot with proxy

Custom bot with proxy allows you to create a Slack bot by yourself, set up and configure a proxy server, and use some of the features of GROWI in the same way as the Official bot.

【Diagram】
![diagram-for-custom-bot-with-proxy](/assets/images/slack-bot-outline-custom-with-proxy.png)

### 2. Incoming Webhooks

<!-- TODO Imple link after https://youtrack.weseek.co.jp/issue/GW-5452 -->
Incoming Webhook integration was a recommended feature up to v4.2 series,
 but since v4.3 series, GROWI bot integration is recommended.

Incoming Webhooks is another way to do Slack integration, but unlike GROWI bots, it is focused on notifications to Slack. It does not have many features like GROWI bots, such as full-text search from chat, but it is easier to set up. For more information, please click here.

<!-- [通知の種類/設定方法](/ja/admin-guide/management-cookbook/external-notification.html#通知の種類-設定方法). -->

<!-- TODO: GW-6768 各種Botの設定へ飛ばす項目の追加(en) -->


## Icon

  Feel free to use the following image for custom bot.
  ![growikun-icon-2000_2000](/assets/images/growikun-icon-2000_2000.png)

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

![slack1](/assets/images/slack1.png)

When a page is saved or updated, a notification will be sent to the Slack channel you inputted.  
This notification fucntion is called as **User Trigger Notification** in GROWI.

For details on how to configure User Trigger Notification, please refer to [here](/en/admin-guide/management-cookbook/external-notification.html#user-trigger-notification-settings).

## Error logs for connectivity test

1. **Channel_not_found**  
    if you have not invited GROWI-Bot to the Slack channel or inputted
    the wrong channel, **Channel_not_found** error will be displayed in the logs.
    Please make sure that GROWI-Bot has been invited to the Slack channel,
    and the channel name has been inputted appropriately.
   ![slack-bot-test-channel-not-found](/assets/images/slack-bot-test-channel-not-found.png)

1. **Proxy URL is not registered**  
   The Proxy URL may not be set, please input the Proxy URL.
   ![slack-bot-errors-proxy-url-is-not-registered](/assets/images/slack-bot-errors-proxy-url-is-not-registered.png)

1. **Request failed with status code 400**  
   You may have clicked the Test button in the Slack workspace
   without registering information to the Proxy with `/growi register`.
   Please run `/growi register` in the Slack workspace
   and register the necessary information to the Proxy.
   ![slack-bot-errors-400](/assets/images/slack-bot-errors-400.png)

1. **Request failed with status code 500**  
   You may have already registered an Access Token
   and then reissued the Access Token to run the test.
   [Check the connected GROWI](/admin-guide/management-cookbook/slack-integration/#Check-the-connected-GROWI)
   to check which GROWI App(s) you are currently connected to.
   Once you have confirmed this,
   click [Unregister the Slack workspace from the GROWI App(s)](/admin-guide/management-cookbook/slack-integration/#Unregister-the-Slack-workspace-from-the-GROWI-App(s)),
   and then unregister the GROWI App(s). If you are able to unregister,
   please register again.
   ![slack-bot-errors-500](/assets/images/slack-bot-errors-500.png)
  
1. **The scopes is not appropriate**  
   You may not set correct Scopes when you create the Slack App.
   Please check the Scopes from OAuth & Permissions of the Slack App you created.
   The required Scopes are **team:read**, **chat:write**, and **command**.
  ![slack-bot-errors-scopes-not-appropriate](/assets/images/slack-bot-errors-scopes-not-appropriate.png)

1. **Cannot read property 'includes' of undefined**  
   You may not register the information such as Signing Secret
   and Bot User OAuth Token. Please register the correct values.
    ![slack-bot-errors-includes-of-undefined](/assets/images/slack-bot-errors-includes-of-undefined.png)

1. **invalid_auth**  
    You may not register incorrect Signing Secret or Bot User OAuth Token.
    Please register the correct values.
    ![slack-bot-errors-invalid-auth](/assets/images/slack-bot-errors-invalid-auth.png)


## What you can do with a Slack bot ?

### Full-text search in a workspace

1. If you input `/growi search [keyword(s)]`, the search results will be displayed.
   - e.g. `/growi search example`
     ![slack-bot-full-text-search-display-result-command](/assets/images/slack-bot-full-text-search-display-result-command.png)
   - Search results.
     ![slack-bot-full-text-search-display-result](/assets/images/slack-bot-full-text-search-display-result.png)
   - Click the **Next** button to display the next search result.
     ![slack-bot-full-text-search-click-next](/assets/images/slack-bot-full-text-search-click-next.png)
   - Click the **Share** button to share it within the channel.
     ![slack-bot-full-text-search-click-share](/assets/images/slack-bot-full-text-search-click-share.png)

1. If you have registered your Slack workspace in multiple GROWIs, you can search across multiple GROWI App(s). (This is only available when the Bot type is Official bot or Custom bot with proxy.)

    - e.g.: `/growi search example`
        ![slack-bot-full-text-search-display-result-command](/assets/images/slack-bot-full-text-search-display-result-command.png)
    - Search results.
        ![slack-bot-search-multi-growi](/assets/images/slack-bot-search-multi-growi.png)

### Check the connected GROWI

By typing `/growi status`, you can see the GROWI App(s) that is connected to the Slack workspace. (This is only available when the Bot type is Official bot or Custom bot with proxy.)
![slack-bot-growi-status](/assets/images/slack-bot-growi-status.png)

### Unregister the Slack workspace from the GROWI App(s)

  1. Please input `/growi unregister [URL1 of the GROWI App to be unregistered] [URL2 of the GROWI App to be unregistered]...`, then the modal as bellow will be displayed. (This is only available when the Bot type is Official bot or Custom bot with proxy.)
       - e.g.: `growi unregister http://example.com http://growi.jp`  
       ![slack-bot-unregister-input-eg](/assets/images/slack-bot-unregister-input-eg.png)

       - Modal
       ![slack-bot-unregister-modal](/assets/images/slack-bot-unregister-modal.png)

  1. Click on **Submit** button.
  1. If the following is displayed, the unregister the Slack workspace is completed.
    ![slack-bot-unregister-completed](/assets/images/slack-bot-unregister-completed.png)

