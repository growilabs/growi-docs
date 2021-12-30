# Slack Integration

## Overview

GROWI provides two methods of Slack integration: 1. GROWI bots and 2. Incoming Webhook.

### 1. GROWI bots

GROWI bots are Slack Apps developed by the GROWI development team. By installing it in Slack workspaces, you can not only receive notifications from GROWI, but also execute full-text searches from chats, summarize conversations, and use various other functions.
There are three types of GROWI bots available.

#### Official bot 【Recommended】

<!-- textlint-disable weseek/no-dead-link -->
The official bot is a free GROWI bot provided and operated by the GROWI development team. It is available at the [slack app directory](https://wsgrowi.slack.com/apps) and anyone can use this service.
<!-- textlint-enable weseek/no-dead-link -->

【Diagram】
![diagram-for-official-bot](/assets/images/slack-bot-outline-official.png)

#### Custom bot without proxy

<!-- textlint-disable weseek/ja-no-inappropriate-words -->
The custom bot without proxy allows you to create a Slack bot by yourself and link it to your GROWI. So that you can use some of GROWI's features from Slack.
<!-- textlint-enable weseek/ja-no-inappropriate-words -->

【Diagram】
![diagram-for-custom-bot-without-proxy](/assets/images/slack-bot-outline-custom-without-proxy.png)

#### Custom bot with proxy

The custom bot with proxy allows you to create a Slack bot by yourself. Set up and configure a proxy server and use some of GROWI's features in the same way as the official bot.

【Diagram】
![diagram-for-custom-bot-with-proxy](/assets/images/slack-bot-outline-custom-with-proxy.png)

### 2. Incoming Webhook

<!-- TODO Implement link after https://youtrack.weseek.co.jp/issue/GW-5452 -->

Incoming Webhook integration was a recommended feature up to the v4.2 series.
But from the v4.3 series onwards, GROWI bot integration is recommended.

Incoming Webhook is another way to do Slack integration. Unlike GROWI bots, it is focused on notifications to Slack.
Although it doesn't have many features like GROWI's bots such as full-text search in chat, it is easier to set up.
For more information, please click link below:

## How to set up various types of bots

### Official bot

Click [here](/en/admin-guide/management-cookbook/slack-integration/official-bot-settings.html) to see how to set it up.

### Custom bot without proxy

Click [here](/en/admin-guide/management-cookbook/slack-integration/custom-bot-without-proxy-settings.html) to see how to set it up.

### Custom bot with proxy

Click [here](/en/admin-guide/management-cookbook/slack-integration/custom-bot-with-proxy-settings.html) to see how to set it up.

## Icon

Feel free to use the following image for the custom bot.
![growikun-icon-2000_2000](/assets/images/growikun-icon-2000_2000.png)

<!-- TODO: GW-5372 「Slack/Mattermost への通知」の内容を適切なタイトルの下に移動させる -->

### Incoming Webhook settings

<!-- TODO: GW-5372 「Slack/Mattermost への通知」の内容を適切なタイトルの下に移動させる -->

Set up a Slack workspace for notifications.

1. Access the security settings page (/admin/notification) on the Management page.
2. Input the required information for the Slack Incoming Webhook setting, and click the Update button.

- **Webhook URL**  
  You can get the URL here: [Incoming Webhooks](https://slack.com/services/new/incoming-webhook).

### Check if the settings are reflected

After the above settings are done, a Slack notification form will be added to the edit mode screen of the page.

![slack1](/assets/images/slack1.png)

When a page is saved or updated, a notification will be sent to the Slack channel you inputted.  
This notification function is called **User Trigger Notification** in GROWI.

For details on how to configure User Trigger Notification, please refer [here](/en/admin-guide/management-cookbook/external-notification.html#user-trigger-notification-settings).

## Error logs for connectivity test

1. **Channel_not_found**  
   If you haven't invited GROWI-Bot to the Slack channel or inputted
   the wrong channel. The **Channel_not_found** error will be displayed in the logs.
   Please make sure that GROWI-Bot has been invited to the Slack channel,
   and that the channel name has been inputted correctly.
   ![slack-bot-test-channel-not-found](/assets/images/slack-bot-test-channel-not-found.png)

2. **Proxy URL is not registered**  
   The Proxy URL hasn't been set yet, please input the Proxy URL.
   ![slack-bot-errors-proxy-url-is-not-registered](/assets/images/slack-bot-errors-proxy-url-is-not-registered.png)

3. **Request failed with status code 400**  
   You may have clicked the Test button in the Slack workspace
   without registering information to the Proxy with `/growi register`.
   Please run `/growi register` in the Slack workspace
   and register the necessary information to the Proxy.
   ![slack-bot-errors-400](/assets/images/slack-bot-errors-400.png)

4. **Request failed with status code 500**  
   You may have already registered an Access Token
   and reissued the Access Token to run the test.
   [Check the connected GROWI](/en/admin-guide/management-cookbook/slack-integration/#check-the-connected-growi)
   to check which GROWI App(s) you are currently connected to.
   Once you have confirmed this,
   click [Unregister the Slack workspace from the GROWI App(s)](/en/admin-guide/management-cookbook/slack-integration/#unregister-the-slack-workspace-from-the-growi-app-s),
   and then unregister the GROWI App(s). And if you are able to unregister,
   please repeat the registration.
   ![slack-bot-errors-500](/assets/images/slack-bot-errors-500.png)

5. **The scopes are not appropriate**  
   You may not set correct Scopes when you create the Slack App.
   Please check the Scopes from OAuth & Permissions of the Slack App you created.
   The required Scopes are **team:read**, **chat:write**, and **command**.
   ![slack-bot-errors-scopes-not-appropriate](/assets/images/slack-bot-errors-scopes-not-appropriate.png)

6. **Cannot read property 'includes' of undefined**  
   You may not registered the information of Signing Secret
   and Bot User OAuth Token. Please register the correct values.
   ![slack-bot-errors-includes-of-undefined](/assets/images/slack-bot-errors-includes-of-undefined.png)

7. **invalid_auth**  
   You may registered incorrect Signing Secret or Bot User OAuth Token.
   Please check and register the correct values.
   ![slack-bot-errors-invalid-auth](/assets/images/slack-bot-errors-invalid-auth.png)

## What you can do with a Slack bot?

See the [Users Guide](/en/guide/features/slack_integration) for the features of the Slack bot.
