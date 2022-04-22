# Set Page View / Edit Permission

GROWI has a function where only permitted users can view and edit the pages.

This section describes the access control methods that can be set for pages.

## How To Set View / Edit Permission for Pages

In the edit mode, click the "Public" on the lower-right button, then you can see options as shown in the image below.

![authority1](/assets/images/authority1.png)

After selecting this option, click the "Create / Update" button to apply view / edit access control for the page.

## View / Edit Permission Options That Can Be Modified

You can select one of the following options to set page restrictions.

### Public

There is no restriction for pages with this setting. Anyone can view and edit. This is selected by default.

If the entire GROWI is set to `cannot be viewed without logging in`, even if the page is set to be public, it cannot be viewed / edited without logging in, and even if the page is accessed, it will be redirected to the login screen. Any logged-in user can view and edit it.

### Anyone With The Link

Pages with this setting will not be displayed in the page list or page search results.

Only users who know the page URL can view and edit the page.

When you don't remember where the page is, follow from "Recently Created" on the home screen.

If it's the page you created, it will be displayed in the page list.

::: warning
On v5.0 or later, you need to be careful when handling pages with this setting.
For more information, please read [Anyone with the Link](#anyone-with-the-link).
:::

### Only Me

Pages with this setting cannot be viewed or edited by anyone except you.

Whether the page is displayed or not in the page list and page search results of users except you, depends on the settings in the security settings of the management page. (described later)

By default, the page you created appears in the page list and page search results.

### Specific Group Only

Pages with this setting can only be viewed and edited by users belonging to a specific group.

Whether it's displayed or not on the page list and page search results of users who don't belong to the group, depends on the settings in the security settings of the management page. (described later)

By default, the page you created appears in the page list and page search results.

## View Permissions That Can Be Set on The Page

Descendant pages of a page `/Page1` can only have the same or more restrictive viewing permissions. (v5.0 or later).

The following example is a table showing what kind of viewing permission can be granted to the descendant page `/Page1/child` by the viewing permission of`/Page1`.

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

## About Page Handling for Anyone With The Link

In v5.0, pages with this setting are displayed only to users who know the path link or permalink.

However, if you create a page with permissions other than this setting (public, specific group only, etc.) with a path that is under the page with this setting, it will be displayed in the page tree.

For example, if you have a `/Page1` with "Anyone With The Link" set and you create a`/Page1/Page2` with a "Public" permission, you can create a `/Page1` in the page tree. And `/Page1/Page2` are both displayed.

Be careful with the path of the page when using "Anyone With The Link" setting.

## About Group Management Feature

Click [here](/en/admin-guide/management-cookbook/group.html) for more details.

## Control Showing Page List and Search Results for Restricted Pages

Even with "Specific Group Only" setting, the child pages can only have the same viewing permissions as the parent page, or only applying permissions with more restrictions (groups with a narrower range of members).

The following example is for the subordinate page `/Page1/child` when the "Engineering Department" group is created in the child group of the "Company" group and the "UI / UX Team" group is created in the child group. On the other hand, it is a table showing what kind of viewing permission can be granted.

| Browsing Permission for `/Page1`             | Permission That Can Be Set For`/Page1/child` | Possible/Not possible |
| :------------------------------------------- | :------------------------------------------: | :-------------------: |
| Specific Group Only (Engineering Department) | Specific Group Only (Engineering Department) |  :white_check_mark:   |
| Specific Group Only (Engineering Department) |         Specific Group Only(Company)         |          :x:          |
| Specific Group Only (Engineering Department) |       Specific Group Only(UI/UX Team)        |  :white_check_mark:   |

## Controlling The Display of Search Results and List Display for Permitted Pages

If you do not want to display the page to people who do not have view / edit permission when displaying the search results and page list of GROWI, switch the on / off function of the corresponding setting in the `security setting` of the management menu.

![security](/assets/images/security.png)

### Show Page List and Restricted Pages as 'Only Me'

- When this Feature is Turned ON

  List and search results of restricted pages are shown to people who don't have permission to see the page details.

- When this Feature is Turned OFF

  List and search results of restricted pages are not shown to people who don't have permission to see the page details.

### Show Page List and Restricted Pages as 'Specific Group'

- When this Feature is Turned ON

  It will show restricted pages that applied as search result or page lists for the users who do not belong to any groups.

- When this Feature is Turned OFF

  It will not show restricted pages that applied as search result or page lists for the users who do not belong to any groups.

## Set Viewing and Editing Permissions at once Under the Page

For cases where you want to manage all privileges at once to pages in the hierarchical structure:

Please click "▲" next to the "Create / Update" button which appears in the lower right corner of the screen when in create/edit. Then, click "Update and Overwrite scopes of all descendants".

![authority2](/assets/images/authority2.png)

By performing this action, you are able to apply same permission settings to all pages under the corresponding page.

## Example of Setting Permissions

You can easily manage pages together which need viewing and editing permissions, and then update at once under the corresponding pages.

Move the pages that need permission changes, as shown in the example below, if updating the structures of the page has no problem.

- Create a group name page.

- Move the page for which you want to have view / edit permission only for the specific group to the descendants of that page.

  Click [here](/en/guide/features/page_operation.html) for how to move pages.

- Set permission for group name pages at once.
