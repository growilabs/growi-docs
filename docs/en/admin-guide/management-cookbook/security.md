# Security Settings

[[toc]]

## Configure pages to show in page lists and search results

You can configure pages whose publication range is set to `Only me` or `Only inside the group` to show/hide in the page list and search results.

Note that if you set `Displayed`, pages whose viewing is restricted will be displayed in the page list and search results for other users.

## Page Deletion Permission

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

## Authentication Mechanism Settings

### ID/Password

#### Register limitation

- `Open (Anyone can register)`
  - New registrations can be made with ID/Password from the user registration screen.

  ![](/assets/images/register.png)

- `Restricted (Requires approval by administrators)`
  - You cannot log in immediately after registering a new user with ID/Password from the user registration screen. Approval of the target user by the administrator is required.
  - An in-app notification will be sent to the administrator when a new registration is made.

  ![](/assets/images/in-app-notification-requested-registration-approval.png)

  ::: tip
  If [email settings](/en/admin-guide/management-cookbook/app-settings.html#email-settings) has been setup an email will be sent to the administrator.
  :::

  - The administrator must approve the target user from User Management.

  ![](/assets/images/user-management-user-approval-pending.png)

- `Closed (Invitation Only)`
  - The user will not be able to register a new user with ID/Password from the user registration screen.
  - To register a new user, please [Temporary issuance of a new user](/en/admin-guide/management-cookbook/user-management.html#temporary-issuance-of-a-new-user) to invite you.
