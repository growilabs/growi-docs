# Set permissions to view/edit pages

## How to set up

In Edit mode, click the Public button in the lower right corner to show the permission setting options.

Select the option and click the Create/Update button to apply the permission to the page.

![authority1](/assets/images/authority1.png)

## Types of permissions

The following four types of permissions can be set.

### Public

- This is the default setting.
- Anyone can view/edit.

::: tip
If GROWI is configured to `cannot be viewed without logging in`, even if the page is set to `Public`, you cannot view it. If you access without login, you will be redirected to the login page.
:::

### Anyone with the link

- Only users who know the URL of the page can view/edit it.
- It will not be displayed in the page list or search results.

  ::: tip
  If you are unsure of the page path of a page you have created, you can use the Recently Created button on the user's home page to find the page.
  :::

  ::: warning
  Since v5.0, if a `Public` or `Specific Group Only` page exists under a page with `Anyone with the link`, `Anyone with the link` page will also be displayed in the page tree.
  For example, if you create `/Page1/Page2` with `Public` settings while `/Page1` with `Anyone with the link` settings exists, both `/Page1` and `/Page1/Page2` will appear in the page tree.
  If you set `Anyone with the link`, please be careful with the page settings.
  :::

### Only me

- Only you can view and edit this page.
- By default, it will display in other users' page lists and search results. Please refer to [here](/en/admin-guide/management-cookbook/security.html#configure-pages-to-show-in-page-lists-and-search-results) for how to change the setting.

### Specific group only

- Only users who belong to the specified group can view/edit.
- By default, it is displayed in other users' page lists and search results. Please refer to [here](/en/admin-guide/management-cookbook/security.html#configure-pages-to-show-in-page-lists-and-search-results) for how to change the setting.
- Please refer to [here](/en/admin-guide/management-cookbook/group.html) for information on group management functions.

## Permissions for subordinate pages

Pages under `/Page1` can only have the same or stronger permissions. ( since v5.0 )

The following table shows what permissions can be set on subordinate pages `/Page1/child`, depending on the permissions of `/Page1`.

| View Permission for `/Page1` | View Permission That Can Be Set on `/Page1/child` |                  Possible/Not Possible                  |
| :--------------------------- | :-----------------------------------------------: | :-----------------------------------------------------: |
| Public                       |                      Public                       |                   :white_check_mark:                    |
| Public                       |                      Only Me                      |                   :white_check_mark:                    |
| Public                       |                Specific Group Only                |                   :white_check_mark:                    |
| Public                       |               Anyone With The Link                |                   :white_check_mark:                    |
| Only Me                      |                      Public                       |                           :x:                           |
| Only Me                      |                      Only Me                      |                   :white_check_mark:                    |
| Only Me                      |                Specific Group Only                |                           :x:                           |
| Only Me                      |               Anyone With The Link                |                   :white_check_mark:                    |
| Specific Group Only          |                      Public                       |                           :x:                           |
| Specific Group Only          |                      Only Me                      |                   :white_check_mark:                    |
| Specific Group Only          |                Specific Group Only                | (Depends on the parent-child relationship of the group) |
| Specific Group Only          |               Anyone With The Link                |                   :white_check_mark:                    |

### If a page is set to `Specific group only`

If you set `Specified group only`, the subordinate pages can only have the same or stronger permissions (a group with a narrower range of members).

The following table shows what permissions can be set on the subordinate page `/Page1/child` in the case where there is a "Engineering Department" group as a child group of the "Company" group and the "UI / UX Team" group as a child group of the "Engineering Department" group.

| Browsing Permission for `/Page1`             | Permission That Can Be Set For`/Page1/child` | Possible/Not possible |
| :------------------------------------------- | :------------------------------------------: | :-------------------: |
| Specific Group Only (Engineering Department) | Specific Group Only (Engineering Department) |  :white_check_mark:   |
| Specific Group Only (Engineering Department) |         Specific Group Only(Company)         |          :x:          |
| Specific Group Only (Engineering Department) |       Specific Group Only(UI/UX Team)        |  :white_check_mark:   |

## Set view/edit permissions at once

You can set permissions on all subordinate pages of a page at once

1. In edit mode, click on ▲ next to the Create/Update button.
2. Click "Create/Update and Overwrite scopes of all descendants".

![authority2](/assets/images/authority2.png)

::: tip
Pages that require authorization settings can be organized into groups, and management can be simplified by setting authorization settings for all of them at once.

Example:

1. Create a page with a specific group name.
2. Move the pages which you want to set the permission to view/edit only for this group to under the page created in step 1.
(Please refer to [here](/en/guide/features/page_operation.html) for details on moving pages.)
3. Set permissions at once on the page created in step 1.
:::
