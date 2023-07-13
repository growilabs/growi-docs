# Custom bot with proxy settings

【Diagram】
<img :src="$withBase('/assets/images/slack-bot-outline-custom-with-proxy.png')" alt="diagram-for-custom-bot-with-proxy">

To deploy a custom bot without proxy in your Slack workspace, you need to create and edit it on the Slack app. The steps are below.

## Create a Custom bot with proxy

1. Go to the [App Page](https://api.slack.com/apps) of the Slack API and click **Create An App** button.

  <img :src="$withBase('/assets/images/slack-custom-bot1.png')" alt="slack-custom-bot1">

2. Click **From an app manifest**.

  <img :src="$withBase('/assets/images/slack-custom-bot2.png')" alt="slack-custom-bot2">

3. Select the workspace where you want to install the app and click **Next**.

  <img :src="$withBase('/assets/images/slack-custom-bot3.png')" alt="slack-custom-bot3">

4. Paste the following App Manifest into the [YAML] tab, and click **Next**.

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
        url: https://{Slackbot Proxy domain name}/slack/commands
        description: Test Bot
        should_escape: false
    unfurl_domains:
      - {GROWI domain name}
  oauth_config:
    redirect_urls:
      - https://{Slackbot Proxy domain name}/slack/oauth_redirect
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
      request_url: https://{Slackbot Proxy domain name}/slack/events
      bot_events:
        - link_shared
    interactivity:
      is_enabled: true
      request_url: https://{Slackbot Proxy domain name}/slack/interactions
    org_deploy_enabled: false
    socket_mode_enabled: false
    token_rotation_enabled: false
  ```

5. After reviewing the app overview, click **Create** to create the app.

  <img :src="$withBase('/assets/images/slack-custom-bot5.png')" alt="slack-custom-bot5">

## Start Slackbot Proxy

1. Create a new file `.env.development.local` under `packages/slackbot-proxy`.
1. Please input any environment variable `SERVER_URI` into the created file above.

e.g. `SERVER_URI=http://localhost:8080`

3. Additionally, select the bot you created from the [App Page](https://api.slack.com/apps) and check the items `Basic Information` > `App Credentials`.

<img :src="$withBase('/assets/images/custom-bot-with-proxy-app-credentials.png')" alt="custom-bot-with-proxy-app-credentials">

Add `Client ID`, `Client Secret`, `Signing Secret`, `.env.development.local` like below:

```
SERVER_URI={ URI Proxy }
SLACK_CLIENT_ID={ Client ID }
SLACK_CLIENT_SECRET={ Client Secret }
SLACK_SIGNING_SECRET={ Signing Secret }
```

4. Start both the GROWI main server and the proxy server(`slackbot-proxy`).  
  You can start the proxy server with `yarn` and `yarn dev` commands.

5. Select **Custom bot with proxy** from the Slack Integration section of the admin panel.
<img :src="$withBase('/assets/images/slack-bot-selecting-custom-bot-with-proxy.png')" alt="slack-bot-selecting-custom-bot-with-proxy">


## Install Custom bot with proxy in your Slack workspace

1. In the Slack App you have just created, go to **Settings** and click **Manage distribution**.
1. When all four items in **Share Your App with Other Workspaces** are checked, press **Activate Public Distribution**.

   <img :src="$withBase('/assets/images/activate-public-dist.png')" alt="activate-public-dist">
1. Click the **Add to Slack** button on the **Embeddable Slack Button**.
1. In the destination screen, click Allow.

   <img :src="$withBase('/assets/images/slack-bot-install-your-app-transition-destination.png')" alt="slack-bot-install-your-app-transition-destination">
1. If the message **Congratulations!** is displayed, the installation is complete.
1. Invite the GROWI bot to the channel you want to use by using @example.

   <img :src="$withBase('/assets/images/slack-bot-install-to-workspace-joined-bot.png')" alt="slack-bot-install-to-workspace-joined-bot">

   <img :src="$withBase('/assets/images/slack-bot-install-your-app-introduction-to-channel.png')" alt="slack-bot-install-your-app-introduction-to-channel">

::: warning
If the message `Illegal state, try it again.` is displayed, press **Go to install page**, and then click **Add to Slack** button to install again.
Or, if the message `GROWI Bot installation failed..` is displayed, press retry from the **Add to Slack** button.
:::


## Register a Custom Bot with Proxy Service

1. Open the registration for the GROWI Custom Bot with proxy service.
You will see that two access tokens have been generated for the various tokens in the **Generate Access Token** section. Access tokens can be reissued if necessary.
1. On Slack, type `/growi register`.

    <img :src="$withBase('/assets/images/slack-bot-growi-register.png')" alt="slack-bot-growi-register">

    <img :src="$withBase('/assets/images/slack-bot-register-modal.png')" alt="slack-bot-add-workspace">
1. Save the URL of the target GROWI in the GROWI URL of the displayed modal.
1. Enter the Access Token Proxy into GROWI and the Access Token GROWI to the Proxy issued above, then click the **Submit** button.

    <img :src="$withBase('/assets/images/slack-bot-update-proxy-url.png')" alt="slack-bot-update-proxy-url">

If successful, the URL of the proxy server will be displayed.

  <img :src="$withBase('/assets/images/slack-bot-input-proxy-url.png')" alt="slack-bot-input-proxy-url">

Enter the URL of the proxy server you obtained above into the Proxy URL of **Custom Bot With Proxy Integration** and update it.

## Run Connectivity Test of Custom Bot with Proxy

  1. Click **Test connection** and input the Slack channel to which GROWI-Bot was invited.

      <img :src="$withBase('/assets/images/slack-bot-test-introduction.png')" alt="slack-bot-test-introduction">

  2. Click on the **Test** button.  

- In case of success
    **Successfully sent to Slack workspace.** will be displayed in Logs.
    Green checkmarks will appear in red circles. Check the channel to
    which your GROWI-Bot was invited.
  - GROWI side

      <img :src="$withBase('/assets/images/slack-bot-test-success.png')" alt="slack-bot-test-success">
  - Slack side

      <img :src="$withBase('/assets/images/slack-bot-test-success-at-slack-app.png')" alt="slack-bot-test-success-at-slack-app">

- In case of failure  
     See [Error logs for connectivity test](/en/admin-guide/management-cookbook/slack-integration/#error-logs-for-connectivity-test)

Once you are all set up, see [what you can do with a GROWI-bot](/en/admin-guide/management-cookbook/slack-integration/#check-the-connected-growi)
