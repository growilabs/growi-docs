# Official bot Settings

【Diagram】
<img :src="$withBase('/assets/images/slack-bot-outline-official.png')" alt="diagram-for-official-bot">

## Select Bot type

  Select **Official bot** from the Slack Integration section of the admin panel.

  <img :src="$withBase('/assets/images/slack-bot-selecting-official-bot.png')" alt="slack-bot-selecting-official-bot">

## Install Official bot in your Slack workspace

1. Click the **Add a Slack Workspace** button.

    <img :src="$withBase('/assets/images/slack-bot-add-a-slack-workspace.png')" alt="slack-bot-add-a-slack-workspace">
1. A new accordion will be generated in **Integration Procedure**. Click on the tab "① Install Bot to Slack" to open it.
1. Click the **Install now** button.

    <img :src="$withBase('/assets/images/slack-bot-install-now-for-official.png')" alt="slack-bot-install-now-for-official">
1. Once redirected to the Slack app directory, click the "Add to Slack" button to install it on the Slack work space.

    <img :src="$withBase('/assets/images/slack-bot-in-app-directory.png')" alt="slack-bot-in-app-directory">

## Register for the GROWI Official Bot Proxy service

1. Open "Register for GROWI Official Bot Proxy Service".  
  Note that two access tokens have been generated for each token in the **Generate Access Token** section.
  The access tokens can be reissued as needed.
1. On Slack, type `/growi register`.

    <img :src="$withBase('/assets/images/slack-bot-growi-register.png')" alt="slack-bot-growi-register">

    <img :src="$withBase('/assets/images/slack-bot-register-modal.png')" alt="slack-bot-add-workspace">
1. Save the URL of the target GROWI in the GROWI URL of the modal to be displayed.
1. Enter the Access Token Proxy to GROWI and Access Token GROWI to Proxy issued above.
  Click the **Submit** button.

If successful, you will see the words "Successfully registered with the proxy! Please check test connection in your GROWI".

<img :src="$withBase('/assets/images/slack-bot-successfully-registered-with-proxy.png')" alt="slack-bot-update-proxy-url">

## Run connectivity test of Official bot

1. Click "Test connection" and enter the Slack channel to which GROWI-Bot is invited.

    <img :src="$withBase('/assets/images/slack-bot-test-introduction.png')" alt="slack-bot-test-introduction">

2. Click the "Test" button.

- In case of success  
    **Successfully sent to Slack workspace.** will be displayed in Logs, and
    Let's check it out on the Slack channel where you invited GROWI-Bot.
  - GROWI side

      <img :src="$withBase('/assets/images/slack-bot-test-success.png')" alt="slack-bot-test-success">
  - Slack side

      <img :src="$withBase('/assets/images/slack-bot-test-success-at-slack-app.png')" alt="slack-bot-test-success">

- In case of failure  
    See [Error logs for connectivity test](/en/admin-guide/management-cookbook/slack-integration/#error-logs-for-connectivity-test)

  Once you are all set up, see [what you can do with a GROWI-bot](/en/admin-guide/management-cookbook/slack-integration/#check-the-connected-growi)
