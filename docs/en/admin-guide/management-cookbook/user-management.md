# User Management
You can manage your registered users from the User Management panel on the Management screen.

## User Table
Lists basic details about users.  Information can be filtered by username, name, email address, and status.
Password reset, account deletion, account suspension, management page access, etc. can also be performed from this table.

![](./images/user-management1.png)

### Status
- Active
  - Approved users
  - Users with access to the management page will appear as "administrators"
- Approval pending
  - Users waiting for approval
  - Users with this status will be unable to login
  - Users who passed the time limit to verify their ID/password will have the status 
    "Limit exceeded" until their account is manually verified by an administrator
- Suspended
  - Accounts which have been manually suspended by an administrator
  - Accounts with this status will be unable to login 
  - Accounts can be set to this status by an administrator by clicking the "suspend user" button in the user table
  - Accounts must be unsuspended using the user table
- Invited
  - Users who have been invited by administrators
  - Users will have this status until their first login using the provided mail address and password
  
### Operations
#### Password Reset
You can perform a password reset for a user using the right side dropdown menu.

![](./images/user-management2.png)

Upon selecting password reset from the dropdown menu, a dialog will appear to allow you to confirm the
user whose password is to be reset.

<img src="./images/user-management3.png" width="50%">

After the password reset button is clicked, a new password will be displayed.  The user should be instructed
to change their password using their own user settings menu (`/me`) once they have logged in using this password.

<img src="./images/user-management4.png" width="50%">


#### Add administrator permissions
Users with administrator status can access the management screen and perform various administration operations.
Administrator permissions can be added or removed from users using the right side drop down menu.

#### Account confirmation and suspension
Unconfirmed or suspended accounts can be activated by administrators.  When an account is confirmed,
the account will be available for login.

Active accounts can also be suspended by administrators.  Suspended accounts will keep their account information
but cannot be logged into until an administrator reactivates the account.

#### Account deletion
Accounts which are not in `Active` status can be deleted.  The delete operation cannot be reversed so
please take care when using it.

#### Invite new users
Users can be invited using their mail address.  When the "Create new user by invitation" button is clicked,
a dialog to input the user's email address will appear.  Multiple email addresses can be inputted on separate lines.

An invitation to the specified email address can be sent by checking "Send invitation by email" and clicking "Invite".
(Application mail settings and/or AWS settings must be completed in order to send an invitation by email)

## Manage external accounts
External accounts are composed of information which is stored when a user account is created using single sign-on.
External accounts are automatically associated with their corresponding GROWI accounts, and are automatically
deleted when the corresponding GROWI account is deleted.

![](./images/user-management5.png)

If a password has not been set for an account, the password settings status will display "unset".
GROWI accounts whose connected external account is in this status will be unable to login with their ID and password.
When the user logs in using their external account and sets their password on the password settings page
or an administrator resets their password, the status will change to "set".

External accounts can be deleted from the external accounts management table.  Deleting an external account
will not delete the associated GROWI account.