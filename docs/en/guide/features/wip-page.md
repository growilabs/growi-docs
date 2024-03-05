## Create a WIP page

## What is a WIP page?

WIP stands for "Work In Progress" and means that a document is in the process of being written.

GROWI allows you to save a page as a Work In Progress (WIP) page when you create or update it, so that you can show other users that the page is in progress while you publish it. You can check if it is a WIP page from the View screen, the Editor screen, the page tree, and Recent Changes.

<img :src="$withBase('/assets/images/en/wip_page_1.png')" alt="wip_page_1.png">

## How to create a WIP page1

If a page is created as a new page and leaves the site without ever being updated, it will automatically become a WIP page. Exceptions are [template pages](/en/guide/features/template.html) and custom sidebar pages (/Sidebar), which are not saved as WIP pages.

## How to create a WIP page 2

Click on the caret icon to the right of the refresh button at the bottom right of the Editor screen to open a drop-down menu. Click on the "Save as WIP (still being written)" button in the drop-down menu to save the page as a WIP page.

<img :src="$withBase('/assets/images/en/wip_page_2.png')" alt="wip_page_2.png">

## How to remove WIP1

You can remove WIP by refreshing the page on the Editor screen.

## How to remove WIP 2

When you open a WIP page on the View screen, an alert will appear. Click the "Publish page" button in the alert to remove the WIP.

## Auto-delete WIP page

WIP pages created in [How to create a WIP page 1](/en/guide/features/wip-page.html#how-to-create-a-wip-page1) will be automatically deleted after 2 days. They will not be subject to automatic deletion if they have been updated even once or in the following two cases.

### If the page exists under the created WIP page

If you create `/A` after creating the page `/A/B`, `/A` is not subject to auto-delete.

### If the page to be deleted is above the WIP page you created

If you create `/A/B` after creating `/A`, `/A` is not subject to automatic deletion.

<ContextualBlock context="docs-growi-org">

## Change auto delete period

You can change the auto-delete period by rewriting the environment variable `WIP_PAGE_EXPIRATION_SECONDS`.
See [Environment Variables](/en/admin-guide/admin-cookbook/env-vars) for details.

</ContextualBlock>
