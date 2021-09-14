# Custom bot with proxy settings

【Diagram】
![diagram-for-custom-bot-with-proxy](/assets/images/slack-bot-outline-custom-with-proxy.png)

To deploy a custom bot without proxy in your Slack workspace, you need to create and edit it on the Slack app. The steps are below.

## Create a Custom bot with proxy

1. Go to the [App Page](https://api.slack.com/apps) of the Slack API and click the **Create New App** button.

  ![slack-custom-bot1](/assets/images/slack-custom-bot1.png)

1. In the **Create a Slack App** section, ① input the name of your app in the **App Name** field and ② select the workspace where you want to add the GROWI bots in the **Development Slack Workspace**.

1. Click the **Create App** button.

  ![slack-custom-bot2](/assets/images/slack-custom-bot2.png)

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

5. Select **Custom bot with proxy** from the Slack Integration section
 of the admin panel.
![slack-bot-selecting-custom-bot-with-proxy](/assets/images/slack-bot-selecting-custom-bot-with-proxy.png)

## Set Custom bot with proxy Scopes

1. In the Slack App you created, go to **Features** and click **OAuth & Permissions**.
  ![slack-bot-oauth-and-permissions-introduction](/assets/images/slack-bot-oauth-and-permissions-introduction.png)
1. Click the **Add an OAuth Scope** button.
  ![slack-bot-scope-add-oauth-click](/assets//images/slack-bot-scope-add-oauth-click.png)

1. Add all following data:
   - `commands`
   - `team:read`
   - `chat:write`
   - `chat:write.public`
   - `channels:join`
   - `channels:history`
   - `groups:history`
   - `im:history`
   - `mpim:history`

The scope setting is complete if the following is displayed.
![slack-bot-scope-selected](/assets/images/slack-bot-scope-selected.png)

## Request URL settings

### Interactivity & Shortcuts

1. In the Slack App you created, go to **Features** and click **Interactivity Shortcuts**.
   ![slack-bot-interactivity-shortcuts-introduction](/assets/images/slack-bot-interactivity-shortcuts-introduction.png)

1. Turn on the button on the right side of **Interactivity**.
   ![slack-bot-interactivity-shortcuts-enable-button](/assets/images/slack-bot-interactivity-shortcuts-enable-button.png)

1. Input the Request URL as follows.

- `https:// your GROWI domain /\_api/v3/slack-integration/interactions`

  - e.g. **<https://example.com/_api/v3/slack-integration/interactions>**

     ![slack-bot-interactivity-shortcuts-creation](/assets/images/slack-bot-interactivity-shortcuts-creation.png)

     1. When the Request URL has been correctly entered, click the **Save Changes** button.

### Slash Commands

1. In the Slack App you created, go to **Features** and click **Slash Commands**.
  ![slash-commands-introduction](/assets/images/slash-commands-introduction.png)

1. Click the **Create New Command** button.
    ![slash-commands-create-new-command](/assets/images/slash-commands-create-new-command.png)

  - Input `/growi` for Command.
  - For RequestURL, input `https://example.com/_api/v3/slack-integration/commands`.
  - Short Description is also required, so please input an appropriate description.
  - The Usage Hint is optional, so please input it accordingly.
  - The Escape channels, users, and links sent to your app is optional,
   so input them accordingly.
  - When you are done, click **Save** button.

![slash-commands-create](/assets/images/slash-commands-create.png)


## Redirect URL setting

### OAuth & Permissions

1. In the Slack App you created, go to **Features** and click **OAuth & Permissions**.
1. Click on the **Add New Redirect URL** button of **Redirect URLs**.
  ![slash-commands-introduction](/assets/images/slack-bot-auth-and-permisions1.png)

1. When displayed input form, please input `https://{your proxy domain name}/slack/oauth_redirect`.

    - e.g. `https://example.com/slack/oauth_redirect`

    ![slash-commands-introduction](/assets/images/slack-bot-auth-and-permisions2.png)

1. Click on the **Add** button.
1. Save the URL by clicking on the **Save URLs** button.


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
