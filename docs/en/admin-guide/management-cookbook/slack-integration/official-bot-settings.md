# Official bot Settings

【Diagram】
![diagram-for-official-bot](/assets/images/slack-bot-outline-official.png)

## Select Bot type

  Select **Official bot** from the Slack Integration section of the admin panel.

  ![slack-bot-selecting-official-bot](/assets/images/slack-bot-selecting-official-bot.png)

## Install Official bot in your Slack workspace

1. Click the **Add a Slack Workspace** button.
  ![slack-bot-add-a-slack-workspace](/assets/images/slack-bot-add-a-slack-workspace.png)


1. A new accordion will be generated in **Integration Procedure**. Click on the tab "① Install Bot to Slack" to open it.

1. Click the **Install now** button.

  ![slack-bot-install-now-for-official](/assets/images/slack-bot-install-now-for-official.png)

1. Once redirected to the Slack app directory, click the "Add to Slack" button to install it on the Slack work space.

![slack-bot-in-app-directory](/assets/images/slack-bot-in-app-directory.png)

## Register for the GROWI Official Bot Proxy service

  1. Open "Register for GROWI Official Bot Proxy Service".  
    Note that two access tokens have been generated for each token in the **Issue Access Token** section.
    The access tokens can be reissued as needed.

  1. On Slack, type `/growi register`.
  ![slack-bot-add-workspace](/assets/images/slack-bot-register-modal.png)

  1. Save the URL of the target GROWI in the GROWI URL of the modal to be displayed.
  1. Enter the Access Token Proxy to GROWI and Access Token GROWI to Proxy issued above.
   Click the **Submit** button.

  ![slack-bot-update-proxy-url](/assets/images/slack-bot-update-proxy-url.png)

  If successful, the URL of the proxy server will be displayed.

  ![slack-bot-input-proxy-url](/assets/images/slack-bot-input-proxy-url.png)

  Enter the URL of the proxy server obtained above into the proxy URL for **Official bot integration** and update it.

## Run connectivity test of Official bot

1. Click "Test connection" and enter the Slack channel to which GROWI-Bot is invited.
  ![slack-bot-test-introduction](/assets/images/slack-bot-test-introduction.png)

2. Click the "Test" button.

- In case of success  
  **Successfully sent to Slack workspace.** will be displayed in Logs, and
  Let's check it out on the Slack channel where you invited GROWI-Bot.
  - GROWI side
    ![slack-bot-test-success](/assets/images/slack-bot-test-success.png)
  - Slack side
    ![slack-bot-test-success-at-slack-app](/assets/images/slack-bot-test-success-at-slack-app.png)

- In case of failure  
  See [Error logs for connectivity test](/admin-guide/management-cookbook/slack-integration/#error-logs-for-connectivity-test)


Once you are all set up, see [what you can do with a GROWI-bot](/admin-guide/management-cookbook/slack-integration/#check-the-connected-growi)
