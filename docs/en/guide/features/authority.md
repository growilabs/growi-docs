# Set permissions to view/edit pages

View/Edit permissions can be set for each page. Newly created pages are automatically set to the permissions of the parent page.

GROWI v6.1.x migrations can be configured to allow users with read-only privileges (including Saml-linked users) to attach and detach.

## How to set up

1. In Edit mode, click the Public button in the lower right corner.
2. Click on the permission you want to set from the options.
3. Click the Create/Update button.

<img :src="$withBase('/assets/images/authority1.png')" alt="authority1">

## Types of permissions

The following four types of permissions can be set.

### Public

- Anyone can view/edit.

::: tip
If GROWI is configured to `cannot be viewed without logging in`, you will be redirected to the login page if you access the page without login. Even if the page is set to `Public`, you cannot view it without login.
:::

### Anyone with the link

- Only users who know the URL of the page can view/edit it.
- Not displayed in the page tree, page list, and search results.

  ::: tip
  If you are unsure of the page path of a page you have created, you can use the Recently Created button on the user's home page to find the page.
  :::

  ::: warning
  Since v5.0, if a `Public` or `Specific Group Only` page exists under a page with `Anyone with the link`, `Anyone with the link` page will also be displayed in the page tree and page list.
  For example, if you create `/Page1/Page2` with `Public` settings while `/Page1` with `Anyone with the link` settings exists, both `/Page1` and `/Page1/Page2` will appear in the page tree.
  If you set `Anyone with the link`, please be careful with the page settings.
  :::

### Only me

- Only you can view and edit this page.
- Not displayed in the page tree.
- By default, it will display in other users' page lists and search results.
  - Please refer to [here](/en/admin-guide/management-cookbook/security.html#configure-pages-to-show-in-page-lists-and-search-results) for how to change the setting.

### Specific group only

- Only users who belong to the specified group can view/edit.
- Not displayed in the page tree.
- By default, it is displayed in other users' page lists and search results.
  - Please refer to [here](/en/admin-guide/management-cookbook/security.html#configure-pages-to-show-in-page-lists-and-search-results) for how to change the setting.
- Please refer to [here](/en/admin-guide/management-cookbook/group.html) for information on group management functions.

## Permissions for subordinate pages

Pages under `/Page1` can only have the same or stronger permissions. ( since v5.0 )

The following table shows what permissions can be set on subordinate pages `/Page1/child`, depending on the permissions of `/Page1`.

| Permission for `/Page1` | Permission that can be set for `/Page1/child` |                  Allowed/Not allowed                  |
| :--------------------------- | :-----------------------------------------------: | :-----------------------------------------------------: |
| Public                       |                      Public                       |                   :white_check_mark:                    |
| Public                       |                      Only me                      |                   :white_check_mark:                    |
| Public                       |                Specific group only                |                   :white_check_mark:                    |
| Public                       |               Anyone with the link                |                   :white_check_mark:                    |
| Anyone with the link         |                      Public                       |                   :white_check_mark:                    |
| Anyone with the link         |                      Only me                      |                   :white_check_mark:                    |
| Anyone with the link         |                Specific group only                |                   :white_check_mark:                    |
| Anyone with the link         |               Anyone with the link                |                   :white_check_mark:                    |
| Only me                      |                      Public                       |                           :x:                           |
| Only me                      |                      Only me                      |                   :white_check_mark:                    |
| Only me                      |                Specific group only                |                           :x:                           |
| Only me                      |               Anyone with the link                |                   :white_check_mark:                    |
| Specific group only          |                      Public                       |                           :x:                           |
| Specific group only          |                      Only me                      |                   :white_check_mark:                    |
| Specific group only          |                Specific group only                | (Depends on the parent-child relationship of the group) |
| Specific group only          |               Anyone with the link                |                   :white_check_mark:                    |

### If a page is set to `Specific group only`

If you set `Specified group only`, the subordinate pages can only have the same or stronger permissions (a group with a narrower range of members).

The following table shows what permissions can be set on the subordinate page `/Page1/child` in the case where there is a "Engineering Department" group as a child group of the "Company" group and the "UI / UX Team" group as a child group of the "Engineering Department" group.

| Permission for `/Page1`             | Permission that can be set for`/Page1/child` | Allowed/Not allowed |
| :------------------------------------------- | :------------------------------------------: | :-------------------: |
| Specific group only (Engineering Department) | Specific group only (Engineering Department) |  :white_check_mark:   |
| Specific group only (Engineering Department) |         Specific group only(Company)         |          :x:          |
| Specific group only (Engineering Department) |       Specific group only(UI/UX Team)        |  :white_check_mark:   |

## Set permissions at once

You can set permissions on all subordinate pages of a page at once

1. In edit mode, click on ▲ next to the Create/Update button.
2. Click "Create/Update and Overwrite scopes of all descendants".

<img :src="$withBase('/assets/images/authority2.png')" alt="authority2">

::: tip
Pages that require authorization settings can be organized into groups, and management can be simplified by setting authorization settings for all of them at once.

Example:

1. Create a page with a specific group name.
2. Move the pages which you want to set the permission to view/edit only for this group to under the page created in step 1.
(Please refer to [here](/en/guide/features/page_operation.html) for details on moving pages.)
3. Set permissions at once on the page created in step 1.
:::
