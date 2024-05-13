# Set permissions to view/edit pages

View/Edit permissions can be set for each page. Newly created pages are automatically set to the permissions of the parent page.

## How to set up

1. In Edit mode, click the Public button in the lower right corner.
2. Click on the permission you want to set from the options.
3. Click the Create/Update button.

<img :src="$withBase('/assets/images/en/authority1.png')" alt="authority1">

## Types of permissions

The following four types of permissions can be set.

### Public

- Anyone can view/edit.

  ::: tip
  If GROWI is configured to `cannot be viewed without logging in` , you will be redirected to the login page if you access the page without login. Even if the page is set to `Public` , you cannot view it without login.
  :::

### Anyone with the link

- Only users who know the URL of the page can view/edit it.
- Not displayed in the page tree, page list, and search results.

  ::: tip
  If you are unsure of the page path of a page you have created, you can use the Recently Created button on the user's home page to find the page.
  :::

  ::: warning
  Since v5.0, if a `Public` or `Specific Group Only` page exists under a page with `Anyone with the link`, Anyone with the link page will also be displayed in the page tree and page list. For example, if you create `/Page1/Page2` with `Public` settings while `/Page1` with `Anyone with the link` settings exists, both `/Page1` and `/Page1/Page2` will appear in the page tree. If you set `Anyone with the link`, please be careful with the page settings.
  :::

### Only me

- Only you can view and edit this page.
- Not displayed in the page tree.
- By default, it will display in other users' page lists and search results.
  - Please refer to [here](en/admin-guide/management-cookbook/security.html#security-settings-2) for how to change the setting.

### Only inside the group

- Only users who belong to the specified group can view/edit.
- Not displayed in the page tree.
- By default, it is displayed in other users' page lists and search results.
  - Please refer to [here](en/admin-guide/management-cookbook/security.html#security-settings-2) for how to change the setting.
- Please refer to [here](en/admin-guide/management-cookbook/group.html#create-group) for information on group management functions.

## Permissions for subordinate pages

Pages under `/Page1` can only have the same or stronger permissions. ( since v5.0 )

The following table shows what permissions can be set on subordinate pages `/Page1/child`, depending on the permissions of `/Page1`.

| Permission for `/Page1` | Permission that can be set for `/Page1/child`  | Allowed/Not allowed |
|:--|:------------:|:------------:|
| Public | Public | :white_check_mark: |
| Public | Only me | :white_check_mark: |
| Public | Only inside the group | :white_check_mark: |
| Public | Anyone with the link | :white_check_mark: |
| Anyone with the link | Public | :white_check_mark: |
| Anyone with the link | Only me | :white_check_mark: |
| Anyone with the link | Only inside the group | :white_check_mark: |
| Anyone with the link | Anyone with the link | :white_check_mark: |
| Only me | Public | :x: |
| Only me | Only me | :white_check_mark: |
| Only me | Only inside the group | :x: |
| Only me | Anyone with the link | :white_check_mark: |
| Only inside the group | Public | :x: |
| Only inside the group | Only me | :white_check_mark: |
| Only inside the group | Only inside the group | (Depends on the parent-child relationship of the group) |
| Only inside the group | Anyone with the link | :white_check_mark: |

### If a page is set to `Only inside the group`

If you set `Only inside the group`, the subordinate pages can only have the same or stronger permissions (a group with a narrower range of members).

The following table shows what permissions can be set on the subordinate page `/Page1/child` in the case where there is a "Engineering Department" group as a child group of the "Company" group and the "UI / UX Team" group as a child group of the "Engineering Department" group.

| Permission for `/Page1` | Permission that can be set for `/Page1/child` | Allowed/Not allowed |
|:--|:------------:|:------------:|
| Only inside the group(Engineering Department) | Only inside the group(Engineering Department) | :white_check_mark: |
| Only inside the group(Engineering Department) | Only inside the group(Company) | :x: |
| Only inside the group(Engineering Department) | Only inside the group(UI/UX Team) | :white_check_mark: |

### If multiple groups are set to `Only inside the group`

`Only inside the group` can be set to multiple groups. ( since v7.0 )

<img :src="$withBase('/assets/images/en/authority2.png')" alt="authority2">

However, the subordinate pages can only have the same or stronger permissions (fewer groups).

The following table shows what permissions can be set on the subordinate page `/Page1/child` in the case where there are "Engineering Department" group, "Sales Department" group, and "Human Resources Department"　as a child group of the "Company".

| Permission for `/Page1`   |  Permission that can be set for `/Page1/child` |       Allowed/Not allowed  |  
| :------------------------------- | :------------------------------: | :----------------: |
| Only inside the group(Engineering Department、Sales Department) | Only inside the group(Engineering Department、Sales Department) | :white_check_mark: |  
 | Only inside the group(Engineering Department、Sales Department) |     Only inside the group(Engineering Department)     | :white_check_mark: |                                 |                                  |                    |  
| Only inside the group(Engineering Department)         | Only inside the group(Engineering Department、Sales Department) |         :x:        |  
| Only inside the group(Engineering Department、Sales Department) |   Only inside the group(Human Resources Department)     |         :x:        |  


## Set permissions at once

You can set permissions on all subordinate pages of a page at once.

1. In edit mode, click on ▲ next to the Create/Update button.
2. Click "Update and Overwrite scopes of all descendants".

<img :src="$withBase('/assets/images/en/authority3.png')" alt="authority3">

::: tip
Pages that require authorization settings can be organized into groups, and management can be simplified by setting authorization settings for all of them at once.

Example:

1. Create a page with a specific group name.
2. Move the pages which you want to set the permission to view/edit only for this group to under the page created in step 1. (Please refer to [here](en/guide/features/page_operation.html) for details on moving pages.)
3. Set permissions at once on the page created in step 1.
:::
