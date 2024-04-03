# Simultaneous multi-person editing with built-in editor (v7.x and later)

::: tip
For users of v6.x, please refer to [Editing with multiple users at the same time in HackMD](/en/guide/features/hackmd.html).
::::

Starting with v7.x, HackMD has been discontinued. Therefore, there are now two page modes: Edit or View. The standard multi-edit function is provided, and you can immediately start multi-editing by pressing the Edit button.

<img :src="$withBase('/assets/images/en/built-in-editor-1.png')" alt="built-in-editor-1">

## Refresh a page

You can save a page by pressing the "Refresh" button at the bottom right of the editor or by pressing the shortcut key (Windows: `Ctrl + S`, Mac: `Command + S`).
For details on how to check the changelog of an updated page, please refer to [View the history of page updates](/en/guide/features/history.html).

## Create a draft

Edits made in the editor are automatically saved as draft data on the server. Even if you leave the page without updating it, the draft of the page will remain.


## Notes on updating pages

If you see the following alert, you may not be able to refresh the page depending on how you refresh the page. You can update the page by clicking the "Load latest version" button in the alert or by reloading the page.

<img :src="$withBase('/assets/images/en/built-in-editor-2.png')" alt="built-in-editor-2">

Conflicts occur when another user updates a page while the page body is being updated. Please refer to [Resolving Conflicts](/en/guide/features/built-in-editor.html#resolving-conflicts) for how to resolve conflicts.


## Resolving conflicts

Conflicts occur in the following cases

- When you try to refresh a page from the View with the old page data.
- When an update is made from the View or API while writing in the editor.
- When a page data on the server is last updated by the API and you try to update it in the editor.


### How to resolve conflicts 1

When a conflict occurs, an alert will appear at the bottom of the editor. Click the "Resolve Conflict" button in the alert to display the conflict resolution modal.

<img :src="$withBase('/assets/images/en/built-in-editor-3.png')" alt="built-in-editor-3">

The editor in the upper left of the modal shows the Markdown being written, and the editor in the upper right shows the page data existing on the server. By selecting one of the markdowns, the editor in the middle of the modal will display the selected Markdown. This central editor is editable, so you can add or delete text. When editing is complete, click the "Resolve and Save" button in the lower right corner to resolve conflicts.


<img :src="$withBase('/assets/images/en/built-in-editor-4.png')" alt="built-in-editor-4">

### Conflict Resolution Method 2

Reloading the page can resolve conflicts. However, if you reload the page when there is data being written in the View, the data being written will be lost, so it is recommended that you use Conflict Resolution Method 1 as much as possible.

