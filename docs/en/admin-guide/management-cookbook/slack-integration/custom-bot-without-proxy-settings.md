# Custom bot without proxy Settings

【Diagram】
<img :src="$withBase('/assets/images/slack-bot-outline-custom-without-proxy.png')" alt="diagram-for-custom-bot-without-proxy">

To deploy a custom bot without proxy in your Slack workspace,
  you need to create and edit a Slack app.
  The steps are as follows.

## Before creating Slack app

Start the GROWI main server.

## Select Bot type

Select Custom bot without proxy in Slack Integration of the Management page.

<img :src="$withBase('/assets/images/slack-bot-selecting-custom-bot-without-proxy.png')" alt="slack-bot-selecting-custom-bot-without-proxy">

## Create a Slack app

1. Go to the [App Page](https://api.slack.com/apps) of the Slack API and click **Create New App** button.

  <img :src="$withBase('/assets/images/slack-custom-bot1.png')" alt="slack-custom-bot1">

2. Click [From an app manifest].

  <img :src="$withBase('/assets/images/slack-custom-bot2.png')" alt="slack-custom-bot2">

3. Select the workspace where you want to install the app and click [Next].

  <img :src="$withBase('/assets/images/slack-custom-bot3.png')" alt="slack-custom-bot3">

4. Paste the following App Manifest into the [YAML] tab, and click [Next].

  <img :src="$withBase('/assets/images/slack-custom-bot4.png')" alt="slack-custom-bot4">

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
        url: https://{GROWI domain name}/_api/v3/slack-integration/commands
        description: Test Bot
        should_escape: false
    unfurl_domains:
      - {GROWI domain name}
  oauth_config:
    redirect_urls:
      - https://{GROWI domain name}/slack/oauth_redirect
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
      request_url: https://{GROWI domain name}/_api/v3/slack-integration/events
      bot_events:
        - link_shared
    interactivity:
      is_enabled: true
      request_url: https://{GROWI domain name}/_api/v3/slack-integration/interactions
    org_deploy_enabled: false
    socket_mode_enabled: false
    token_rotation_enabled: false
  ```

5. After reviewing the app overview, click [Create] to create the app.

  <img :src="$withBase('/assets/images/slack-custom-bot5.png')" alt="slack-custom-bot5">

## Install the Custom bot without proxy in your Slack workspace

1. In the Slack App you created, go to **Settings** and click **Basic Information**.
1. Click the **Install your app**.

   <img :src="$withBase('/assets/images/slack-bot-install-your-app-introduction.png')" alt="slack-bot-install-your-app-introduction">
1. Click the **Install to Workspace**.

   <img :src="$withBase('/assets/images/slack-bot-install-to-workspace.png')" alt="slack-bot-install-to-workspace">
1. On the destination screen, Click the **Allow** button.

   <img :src="$withBase('/assets/images/slack-bot-install-your-app-transition-destination.png')" alt="slack-bot-install-your-app-transition-destination">
1. If you see a green check mark to the right of Install your app, the installation is complete in your workspace.

   <img :src="$withBase('/assets/images/slack-bot-install-your-app-complete.png')" alt="slack-bot-install-your-app-complete">
1. Invite the channel you want to use the GROWI bot on using @example.

   <img :src="$withBase('/assets/images/slack-bot-install-to-workspace-joined-bot.png')" alt="slack-bot-install-to-workspace-joined-bot">

   <img :src="$withBase('/assets/images/slack-bot-install-your-app-introduction-to-channel.png')" alt="slack-bot-install-your-app-introduction-to-channel">

## Signing Secret and Bot User OAuth Token settings

Before setting Signing Secret and Bot User OAuth Token, check the values.

### How to check Signing Secret

1. In the Slack App you created, go to **Settings** and click **Basic Information**.

   <img :src="$withBase('/assets/images/slack-bot-basic-information.png')" alt="slack-bot-basic-information">
1. Push **show** button for **Signing Secret** in App Credentials to confirm.
   <img :src="$withBase('/assets/images/slack-bot-signing-secret.png')" alt="slack-bot-signing-secret">

### How to check Bot User OAuth Token

1. In the Slack App you created, go to **Settings** and click **OAuth and Permissions**.

   <img :src="$withBase('/assets/images/slack-bot-oauth-and-permissions-introduction.png')" alt="slack-bot-oauth-and-permissions-introduction">
1. Check **Bot User Oauth Token** in **OAuth Tokens for Your Team**.

   <img :src="$withBase('/assets/images/slack-bot-oauth-and-permissions.png')" alt="slack-bot-oauth-and-permissions">

  There are two ways to set Signing Secret and Bot User OAuth Token: 1. Set them in the Management page 2. Set them with environment variables. It is easier to set them in the Management page. Also,
  in case that you input values in both the Management page and environment variable, the Management page value will take a priority. That's why settings in the Management page is recommended.

- 1. How to set them in Management page

  - Go to the Slack integration in the Management page and input Signing Secret and Bot User OAuth Token, then click on the **Update** button.

      <img :src="$withBase('/assets/images/slack-bot-register-introduction.png')" alt="slack-bot-register-introduction">
  - When a green checkmark appears in the red circle, registration is completed.

      <img :src="$withBase('/assets/images/slack-bot-register-secrets.png')" alt="slack-bot-register-secrets">
- 2. How to set them with environment variables

  - Assign `SLACK_SIGNING_SECRET` and `SLACK_BOT_TOKEN` with the values you checked.

## Run connectivity test of Custom bot without proxy

1. Click **Test connection** and input the Slack channel to which invited GROWI-Bot.

    <img :src="$withBase('/assets/images/slack-bot-test-introduction.png')" alt="slack-bot-test-introduction">
1. Click on the **Test** button.  

- In case of success  
  **Successfully sent to Slack workspace.** will be displayed at Logs. Green checkmarks will appear in red circles. Check the channel to which you invited GROWI-Bot.
  - GROWI side

    <img :src="$withBase('/assets/images/slack-bot-test-success.png')" alt="slack-bot-test-success">
  - Slack side

    <img :src="$withBase('/assets/images/slack-bot-test-success-at-slack-app.png')" alt="slack-bot-test-success-at-slack-app">
- In case of failure  
  See [Error logs for connectivity test](/en/admin-guide/management-cookbook/slack-integration/#error-logs-for-connectivity-test)

Once you are all set up, see [what you can do with a GROWI-bot](/en/admin-guide/management-cookbook/slack-integration/#check-the-connected-growi)
