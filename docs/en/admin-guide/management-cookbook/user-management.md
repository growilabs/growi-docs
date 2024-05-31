# User Management

Registered users can be managed from the User Management sub-menu of the Admin page.

## User Table

Displays a list of users. Use the search filter to narrow down the users by username, name, email address, and status.

This table can also be used to reset passwords, delete or suspend accounts, and change access privileges to the admin page.

<img :src="$withBase('/assets/images/en/user-management1.png')" alt="user-management1">

### Status

- Active
  - Authorized user
  - If the user has access to the admin page, the user will have the "Administrator" status.
- Approval pending
  - User pending approval
  - Accounts in this status cannot log in.
  - If the registration restriction is set to "Restrict" in the ID/Password authentication mechanism setting in the security settings, the newly registered user will have this status until the administrator approves the account.
  - In order for the account to be valid, "Approve" must be executed in the same table.
- Suspended
  - A user who has been suspended by the administrator.
  - An account with this status will not be able to log in.
  - Users who have been "Suspended" in the User Settings table on the administration page will be in this state.
  - In order to activate the account, "Approve" must be executed in the same table.
- Invited
  - Users who have been invited by the administrator.
  - This status will remain until the user logs in for the first time with the email address and password used at the time of invitation.
  
### Operations

#### Reset Password

A user's password can be reset from the drop-down menu on the right side of the user table.

<img :src="$withBase('/assets/images/en/user-management2.png')" alt="user-management2">

After clicking "Reset Password" from the drop-down menu, a modal popup will display the target user for the password reset.

<img :src="$withBase('/assets/images/en/user-management3.png')" width="50%" alt="user-management3">

When the "Reset Password" button on the modal popup is clicked, a new password will be issued and sent to the user.

It prompts the user to log in using this temporary password, and then reset their password in the user settings page ( `/me`).

<img :src="$withBase('/assets/images/en/user-management4.png')" width="50%" alt="user-management4">

#### Granting administrative privileges

Users with administrator status can access the administration screen and adjust various settings.

Administrative privileges can be granted or removed from the drop-down menu on the right side of the user table.

#### Granting read-only access rights

Users with read-only access rights cannot create, delete, update, or comment on pages.

You can grant or revoke read-only access rights to users from the drop-down on the right side of the user table.

<img :src="$withBase('/assets/images/en/user-management-read-only.png')" width="20%" alt="user-management-read-only">

#### Account Approval and Suspension

Accounts that are pending approval or suspended can be granted approval. Approving an account allows the user to log in with that account.

Accounts that have been approved can also be suspended. If the account is suspended, the account information will remain, but the user will not be able to log in. The administrator has to reapprove in order for that user to log in.

#### Delete accounts

Only accounts that do not have the Active status can be deleted. Please note that deleted users cannot be restored.

#### Temporary issuance of a new user

1. Click User Management from the sidebar on the left.

<img :src="$withBase('/assets/images/en/user-management6.png')" alt="user-management6">

2. Click Temporary Issuance for new users.

3. Enter your invitation email address. Multiple email addresses can be specified by a new line.

4. Click issue.

<img :src="$withBase('/assets/images/en/user-management7.png')" width="50%" alt="user-management7">

5. A notification of the email and password will be displayed on the screen.

<img :src="$withBase('/assets/images/en/user-management8.png')" width="50%" alt="user-management8">

#### Resend Email Invitation

You can resend an invitation email to users who have already been provisionally issued a new user and have not yet logged in with their account.

<img :src="$withBase('/assets/images/en/user-management9.png')" width="50%" alt="user-management9'>

::: tip
[Email settings from the management screen](/en/admin-guide/management-cookbook/app-settings.html#email-settings) are required when delivering a notification email from GROWI.
:::

## Manage external accounts

This function manages external accounts. An external account holds information that is associated with a GROWI account when it is registered using the external OAuth. When a GROWI account is deleted, the external account associated with it is also deleted automatically.

<img :src="$withBase('/assets/images/en/user-management5.png')" alt="user-management5">

If the password for the GROWI account is not set, the password setting status is displayed as "Not Set". The GROWI account associated with the external account in this state cannot log in using a regular ID and password. Log in with the external account and set the password from the personal settings screen, or let the administrator reset the password to change the status to "Set".

External accounts can be deleted from the table in the External Account Management. Deleting an external account will not delete the GROWI account.
