# Sync the editor text with the latest revision body

## Overview

The "Sync the editor text with the latest revision body" feature allows you to discard the draft content currently displayed in the editor and synchronize it with the content of the latest saved revision. When you use this feature, all drafts, including those created by other users, will be discarded, and the content will revert to the latest version.

## Use cases

This feature can be useful in the following scenarios:

- When you want to remove unnecessary drafts and synchronize with the content of the current saved revision
- When you want to revert to the content of the current revision without saving your drafts

## How to use

This feature is accessible from the vertical three dots menu in the page toolbar at the top right of the screen. It can be used in both View mode and Edit mode.

::: warning
This operation will discard not only your draft but also any drafts created by other users on the same page.

After synchronization, the contents on all users' editors will be replaced with the content of the latest revision, so caution is needed when multiple users are editing simultaneously. Please also check [How to check if other users are editing](/en/guide/features/sync-the-editor-text-with-the-latest-revision-body.html#how-to-check-if-other-users-are-editing).
:::

1. Click the vertical three dots menu in the page toolbar at the top right of the screen.
2. Click "Sync the editor text with the latest revision body" from the dropdown menu.
3. A confirmation dialog will appear. If you're sure, click the "OK" button.
4. A success message will be displayed when synchronization is successful.

<img :src="$withBase('/assets/images/en/sync-with-latest-revision-1.png')" alt="sync-with-latest-revision-1.png">

### How to check if other users are editing

Before executing the synchronization, you can check if other users are currently editing the same page and whether there are any drafts.

#### In Edit mode

- If there is a blue circle on the top right of the "Edit" button, someone (including yourself) currently has that page open in their editor. (a)
  - In this case, icons of users who are editing will be displayed below the "Edit" button (visible only in Edit mode).
  - If you see icons other than your own, it means other users are currently editing the page.

#### In View mode

- When in View mode, if the current revision content differs from the content being edited (when there is a draft), the circle color will change to gray. (b)
  - In this case, it is recommended to switch to Edit mode to check whether you are the only user editing the page.

<img :src="$withBase('/assets/images/en/sync-with-latest-revision-2.png')" alt="sync-with-latest-revision-2.png">

## Troubleshooting

### "Skipped synchronizing since the editor is not activated. Please open the editor and try again." appears

- Make sure the editor is opened.
- Try reloading the page and opening the editor again.

### "Synchronization of the latest text failed" appears

- Check your network connection.
- Reload the page and try again.

### "The latest text may not have been synchronized. Please reload and check again." appears

- This is displayed when an inconsistency in the data is detected.
- Reloading the page and reopening the editor may resolve the issue.

## Related features

- [Simultaneous multi-person editing with built-in editor](/en/guide/features/built-in-editor.html)
- [View the history of page updates](/en/guide/features/history.html)
