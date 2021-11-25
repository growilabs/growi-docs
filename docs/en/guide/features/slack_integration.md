# Slack Integration

GROWI can be integrated to Slack to perform various commands.
See [Admin Guide](/en/admin-guide/management-cookbook/slack-integration) for details on how to configure.

## What you can do with a Slack bot?

### Help command

1. Entering `/growi help` will display a list of commands that can be used with the GROWI bot.
   ![HackMD Demo](/assets/images/growi-help.gif)

### Create a page

1. Entering `/growi note` will create a new page in GROWI.
    ![HackMD Demo](/assets/images/growi-note.gif)

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

2. If you have registered your Slack workspace in multiple GROWIs, you can search across multiple GROWI App(s). (This is only available when the Bot type is Official bot or Custom bot with proxy.)

   - e.g.: `/growi search example`
     ![slack-bot-full-text-search-display-result-command](/assets/images/slack-bot-full-text-search-display-result-command.png)
   - Search results.
     ![slack-bot-search-multi-growi](/assets/images/slack-bot-search-multi-growi.png)

### Create a page from a conversation (Alpha)

1. Input `/growi keep`.
2. For the `Oldest datetime` field, input the datetime of the oldest message that you want to use for the page.
3. For the `Newest datetime` field, input the datetime of the newest message that you want to use for the page.
4. Lastly, input the page path, then click `Create page`. It will create a page with a conversation from `Oldest datetime` to `Newest datetime`.

![HackMD Demo](/assets/images/growi-keep.gif)

### Show previews of GROWI page on Slack (Unfurl Feature)

With the unfurl feature, a snippet of the GROWI page can be shown when GROWI links are shared on Slack.
The unfurl feature is disabled by default and can be enabled from the admin page.
![slack-bot-unfurl](/assets/images/slack-bot-unfurl.png)

Snippets will not be shown on non public pages.
![slack-bot-unfurl-private-page](/assets/images/slack-bot-unfurl-private-page.png)


### Check the connected GROWI

By typing `/growi status`, you can see the GROWI App(s) that are connected to the Slack workspace. (This is only available when the Bot type is Official bot or Custom bot with proxy.)
![slack-bot-growi-status](/assets/images/slack-bot-growi-status.png)

### Unregister the Slack workspace from the GROWI App(s)

1. Please input `/growi unregister [URL1 of the GROWI App to be unregistered] [URL2 of the GROWI App to be unregistered]...`, then the modal as bellow will be displayed. (This is only available when the Bot type is Official bot or Custom bot with proxy.)

   - e.g.: `growi unregister http://example.com http://growi.jp`  
     ![slack-bot-unregister-input-eg](/assets/images/slack-bot-unregister-input-eg.png)

   - Modal
     ![slack-bot-unregister-modal](/assets/images/slack-bot-unregister-modal.png)

1. Click on the **Submit** button.
2. If following messages are displayed, the unregistration of the Slack workspace is completed.
   ![slack-bot-unregister-completed](/assets/images/slack-bot-unregister-completed.png)
