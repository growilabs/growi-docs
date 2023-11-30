# Security Settings

[[toc]]

## Security Settings

### Configure pages to show in page lists and search results

You can configure pages whose publication range is set to `Only me` or `Only inside the group` to show/hide in the page list and search results.

Note that if you set `Displayed`, pages whose viewing is restricted will be displayed in the page list and search results for other users.

<img :src="$withBase('/assets/images/security.png')" alt="security">

### Page Deletion Permission

Specify the page deletion permission according to the four types of deletion methods.

- Send a page to the trash (Only the page).
- Send a page to the trash (Including the descendant pages).
- Permanently delete a page (Only the page).
- Permanently delete a page (Including the descendant pages).

You can select the setting from the following options for "Only the page" and "Including the descendant pages".

- Only the page

  - Choose from: `Anyone can perform the action`, `Only administrators can perform the action`, `Administrators and page authors can perform the action`.

- Including the descendant pages
  - Choose from: `Same as "Only the page"`, `Only administrators can perform the action`, `Administrators and page authors can perform the action`.

If you select the `Same as "Only the page"` option for "Including the descendant pages", the same type of deletion process settings apply. Also, "Including the descendant pages" are always forced to have more restrictive settings than "Only the page".

::: tip
The option that was set as "Permanently delete a page" in v4.5 or earlier is inherited as "Permanently delete a page (Only the page)" in v5.0 or later.
:::

### User homepage deletion

#### Enable user homepage deletion (Manual Deletion)

Deleted users' user homepages (`/user/{username}`) can be deleted or completely deleted same way as normal pages.

::: warning
User homepages in trash page (`/trash`) can be completely deleted regardless of this setting.
:::

#### When you delete a user, the user's homepage and all its sub pages will be completely deleted (Automatic Deletion)

When deleting a user, the user homepage (`/user/{username}`) and its subordinate pages are also completely deleted. If disabled, the user homepage is not deleted when the user is deleted.

::: warning
**Initialization of user homepages when a user registers**

- If a user's homepage already exists when the user registers (for example, if the `/user/foo` page already exists when the user `foo` registers), the user homepage will be initialized automatically regardless of whether [User homepage deletion](/en/admin-guide/management-cookbook/security.html#user-homepage-deletion) settings is ON or OFF.
  - Once initialized, the `/user/foo` page and its subordinate pages are completely deleted and replaced by the newly registered user.
  - This specification has been changed since GROWI v6.2.0.
  - Please also see [Upgrade Guide](/en/admin-guide/upgrading/62x.html)
:::

## Authentication Mechanism Settings

### ID/Password

#### Register limitation

- `Open (Anyone can register)`
  - New registrations can be made with ID/Password from the user registration screen.

  <img :src="$withBase('/assets/images/register.png')" alt="">

- `Restricted (Requires approval by administrators)`
  - You cannot log in immediately after registering a new user with ID/Password from the user registration screen. Approval of the target user by the administrator is required.
  - An in-app notification will be sent to the administrator when a new registration is made.

  <img :src="$withBase('/assets/images/in-app-notification-requested-registration-approval.png')" alt="">

  ::: tip
  If [email settings](/en/admin-guide/management-cookbook/app-settings.html#email-settings) has been setup an email will be sent to the administrator.
  :::

  - The administrator must approve the target user from User Management.

  <img :src="$withBase('/assets/images/user-management-user-approval-pending.png')" alt="">

- `Closed (Invitation Only)`
  - The user will not be able to register a new user with ID/Password from the user registration screen.
  - To register a new user, please [Temporary issuance of a new user](/en/admin-guide/management-cookbook/user-management.html#temporary-issuance-of-a-new-user) to invite you.
