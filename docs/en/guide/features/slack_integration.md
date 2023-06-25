# Slack Integration

GROWI can be integrated with Slack to perform various commands.
See [Admin Guide](/en/admin-guide/management-cookbook/slack-integration/) for details on how to configure.

## What you can do with a Slack bot?

### Help command

1. Entering `/growi help` will display a list of commands that can be used with the GROWI bot.
   <img :src="$withBase('/assets/images/growi-help.gif')" alt="HackMD Demo">

### Create a page

1. Entering `/growi note` will create a new page in GROWI.
    <img :src="$withBase('/assets/images/growi-note.gif')" alt="HackMD Demo">

### Full-text search in a workspace

1. If you input `/growi search [keyword(s)]`, the search results will be displayed.

   - e.g. `/growi search example`
     <img :src="$withBase('/assets/images/slack-bot-full-text-search-display-result-command.png')" alt="slack-bot-full-text-search-display-result-command">
   - Search results.
     <img :src="$withBase('/assets/images/slack-bot-full-text-search-display-result.png')" alt="slack-bot-full-text-search-display-result">
   - Click the **Next** button to display the next search result.
     <img :src="$withBase('/assets/images/slack-bot-full-text-search-click-next.png')" alt="slack-bot-full-text-search-click-next">
   - Click the **Share** button to share it within the channel.
     <img :src="$withBase('/assets/images/slack-bot-full-text-search-click-share.png')" alt="slack-bot-full-text-search-click-share">

2. If you have registered your Slack workspace in multiple GROWIs, you can search across multiple GROWI App(s). (This is only available when the Bot type is Official bot or Custom bot with proxy.)

   - e.g.: `/growi search example`
     <img :src="$withBase('/assets/images/slack-bot-full-text-search-display-result-command.png')" alt="slack-bot-full-text-search-display-result-command">
   - Search results.
     <img :src="$withBase('/assets/images/slack-bot-search-multi-growi.png')" alt="slack-bot-search-multi-growi">

### Create a page from a conversation (Alpha)

1. Input `/growi keep`.
2. For the `Oldest datetime` field, input the datetime of the oldest message that you want to use for the page.
3. For the `Newest datetime` field, input the datetime of the newest message that you want to use for the page.
4. Lastly, input the page path, then click `Create page`. It will create a page with a conversation from `Oldest datetime` to `Newest datetime`.

<img :src="$withBase('/assets/images/growi-keep.gif')" alt="HackMD Demo">

### Show previews of GROWI page on Slack (Unfurl Feature)

With the unfurl feature, a snippet of the GROWI page can be shown when GROWI links are shared on Slack.
The unfurl feature is disabled by default and can be enabled from the admin page.
<img :src="$withBase('/assets/images/slack-bot-unfurl.png')" alt="slack-bot-unfurl">

Snippets will not be shown on non public pages.
<img :src="$withBase('/assets/images/slack-bot-unfurl-private-page.png')" alt="slack-bot-unfurl-private-page">


### Check the connected GROWI

By typing `/growi status`, you can see the GROWI App(s) that are connected to the Slack workspace. (This is only available when the Bot type is Official bot or Custom bot with proxy.)
<img :src="$withBase('/assets/images/slack-bot-growi-status.png')" alt="slack-bot-growi-status">

### Unregister the Slack workspace from the GROWI App(s)

1. Please input `/growi unregister [URL1 of the GROWI App to be unregistered] [URL2 of the GROWI App to be unregistered]...`, then the modal as bellow will be displayed. (This is only available when the Bot type is Official bot or Custom bot with proxy.)

   - e.g.: `growi unregister http://example.com http://growi.jp`  
     <img :src="$withBase('/assets/images/slack-bot-unregister-input-eg.png')" alt="slack-bot-unregister-input-eg">

   - Modal
     <img :src="$withBase('/assets/images/slack-bot-unregister-modal.png')" alt="slack-bot-unregister-modal">

1. Click on the **Submit** button.
2. If following messages are displayed, the unregistration of the Slack workspace is completed.
   <img :src="$withBase('/assets/images/slack-bot-unregister-completed.png')" alt="slack-bot-unregister-completed">
