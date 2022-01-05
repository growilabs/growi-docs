# Custom bot with proxy settings

【Diagram】
![diagram-for-custom-bot-with-proxy](/assets/images/slack-bot-outline-custom-with-proxy.png)

To deploy a custom bot without proxy in your Slack workspace, you need to create and edit it on the Slack app. The steps are below.

## Create a Custom bot with proxy

1. Go to the [App Page](https://api.slack.com/apps) of the Slack API and click **Create An App** button.
  ![slack-custom-bot1](/assets/images/slack-custom-bot1.png)

2. Click **From an app manifest**.
  ![slack-custom-bot2](/assets/images/slack-custom-bot2.png)

3. Select the workspace where you want to install the app and click **Next**.
  ![slack-custom-bot3](/assets/images/slack-custom-bot3.png)

4. Paste the following App Manifest into the [YAML] tab, and click **Next**.
  ![slack-custom-bot4](/assets/images/slack-custom-bot4.png)

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
        url: https://{GROWI domain name}/slack/commands
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
      request_url: https://{GROWI domain name}/slack/events
      bot_events:
        - link_shared
    interactivity:
      is_enabled: true
      request_url: https://{GROWI domain name}/slack/interactions
    org_deploy_enabled: false
    socket_mode_enabled: false
    token_rotation_enabled: false
  ```

5. After reviewing the app overview, click **Create** to create the app.
  ![slack-custom-bot5](/assets/images/slack-custom-bot5.png)


## Start Slackbot Proxy

1. Create a new file `.env.development.local` under `packages/slackbot-proxy`.
1. Please input any environment variable `SERVER_URI` into the created file above.

e.g. `SERVER_URI=http://localhost:8080`

3. Additionally, select the bot you created from the [App Page](https://api.slack.com/apps) and check the items `Basic Information` > `App Credentials`.

![custom-bot-with-proxy-app-credentials](/assets/images/custom-bot-with-proxy-app-credentials.png)

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
![slack-bot-selecting-custom-bot-with-proxy](/assets/images/slack-bot-selecting-custom-bot-with-proxy.png)


## Install Custom bot with proxy in your Slack workspace

1. In the Slack App you have just created, go to **Settings** and click **Manage distribution**.
1. When all four items in **Share Your App with Other Workspaces** are checked, press **Activate Public Distribution**.
   ![activate-public-dist](/assets/images/activate-public-dist.png)
1. Click the **Add to Slack** button on the **Embeddable Slack Button**.
1. In the destination screen, click Allow.
![slack-bot-install-your-app-transition-destination](/assets/images/slack-bot-install-your-app-transition-destination.png)
1. If the message **Congratulations!** is displayed, the installation is complete.
1. Invite the GROWI bot to the channel you want to use by using @example.
![slack-bot-install-to-workspace-joined-bot](/assets/images/slack-bot-install-to-workspace-joined-bot.png)
![slack-bot-install-your-app-introduction-to-channel](/assets/images/slack-bot-install-your-app-introduction-to-channel.png)

::: warning
If the message `Illegal state, try it again.` is displayed, press **Go to install page**, and then click **Add to Slack** button to install again.
Or, if the message `GROWI Bot installation failed..` is displayed, press retry from the **Add to Slack** button.
:::


## Register a Custom Bot with Proxy Service

1. Open the registration for the GROWI Custom Bot with proxy service.
You will see that two access tokens have been generated for the various tokens in the **Generate Access Token** section. Access tokens can be reissued if necessary.
1. On Slack, type `/growi register`.
  ![slack-bot-growi-register](/assets/images/slack-bot-growi-register.png)
  ![slack-bot-add-workspace](/assets/images/slack-bot-register-modal.png)
1. Save the URL of the target GROWI in the GROWI URL of the displayed modal.
1. Enter the Access Token Proxy into GROWI and the Access Token GROWI to the Proxy issued above, then click the **Submit** button.

![slack-bot-update-proxy-url](/assets/images/slack-bot-update-proxy-url.png)

If successful, the URL of the proxy server will be displayed.

![slack-bot-input-proxy-url](/assets/images/slack-bot-input-proxy-url.png)

Enter the URL of the proxy server you obtained above into the Proxy URL of **Custom Bot With Proxy Integration** and update it.

## Run Connectivity Test of Custom Bot with Proxy

  1. Click **Test connection** and input the Slack channel to which GROWI-Bot was invited.
    ![slack-bot-test-introduction](/assets/images/slack-bot-test-introduction.png)

  2. Click on the **Test** button.  

- In case of success
    **Successfully sent to Slack workspace.** will be displayed in Logs.
    Green checkmarks will appear in red circles. Check the channel to
    which your GROWI-Bot was invited.
  - GROWI side
      ![slack-bot-test-success](/assets/images/slack-bot-test-success.png)
  - Slack side
      ![slack-bot-test-success-at-slack-app](/assets/images/slack-bot-test-success-at-slack-app.png)

- In case of failure  
     See [Error logs for connectivity test](/en/admin-guide/management-cookbook/slack-integration/#error-logs-for-connectivity-test)

Once you are all set up, see [what you can do with a GROWI-bot](/en/admin-guide/management-cookbook/slack-integration/#check-the-connected-growi)
