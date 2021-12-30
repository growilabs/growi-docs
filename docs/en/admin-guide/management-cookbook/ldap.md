# LDAP Integration

## Overview

Registering an LDAP server allows users to login via LDAP.

## LDAP Server Settings

1. Access the Security Settings page (/admin/security) on the administration page and open the LDAP tag in the Authentication Mechanism Settings.

2. Turn on the "Enable LDAP" switch and enter the necessary information.
  - Server URL: Enter the URL in the format `ldaps://host:port/BaseDN`.
    - Schema should be `ldap` or `ldaps`.
    - Port is optional.
  - Binding mode: Choose the behavior when connecting to an LDAP server to search for users.
    - Manager Bind: This mode allows you to set a specific DN in advance and use it to search for LDAP users. Select this mode to have permissions such as `uid=admin`.
    - User Bind: A mode in which a DN is dynamically created from the username entered in the GROWI login form and used to search for LDAP users.
  - Bind DN
    - Enter the account DN to be used when authenticating to the directory service.
    - Use the format `{{username}}` for User Bind to use the username entered at login.
      - Example: `uid={{username}},dc=domain,dc=com`
  - Bind DN Password
    - For Manager Bind only, enter the password to use. (Note: MongoDB will store the plaintext password for the DN in MongoDB).
    - For User Bind, the login password is used.
  - Search Filter
    - Search filters can be used to uniquely determine the user to be authenticated.
    - Use the format `{{username}}` to use the login username.
    - If left blank, `(uid={{username}})` will be used.
    - Example 1: `(uid={{username}})`
      - Selects LDAP users whose username entered in the login form matches the uid attribute.
    - Example 2: `(|(uid={{username}})(mail={{username}}))`
      - Selects LDAP users whose username entered in the login form matches the uid or mail attribute.
    - Example 3: `(&(uid={{username}})(memberOf=cn=manager,ou=group,dc=example,dc=com))`
      - Narrow down the accessible users.

3. Confirm that the settings have been applied.
  - Log out and access the login screen (/login).
  - If you can login with the account registered in the LDAP, the configuration is complete.

## Attribute Mapping (optional)

When creating a new GROWI account based on an LDAP account, the user can specify which values (`uid`, `cn`, etc.) of the LDAP account should be associated with the following information in the GROWI account.

- username: By default, the `uid` of the LDAP account is applied.
- Mail: By default, `mail` of the LDAP account is applied.
- Name: If not specified, Name is left blank.

To automatically associate a newly logged-in user with a local account whose `username` matches the user's, check the `Automatically bind external accounts newly logged in to local accounts when username match` checkbox. (Note: Please be careful about security, since a matching username is considered to be the same user)

## Group Search Filters (optional)

Enables login only if a posixGroup exists that meets the specified criteria. To enable this feature, set the following values in the LDAP tag in the authentication mechanism settings on the security settings page.

- Group Search Base DN: The DN to be treated as the base DN when searching for groups.
  Example: `ou=group,dc=domain,dc=com`
- Group Search Filter: The query to use for group filtering. Only when a group hits this query will the LDAP login succeed. Use `{{dn}}` to replace with the properties of the user object to be logged in.
  Example: `(&(cn=group1)(memberUid={{dn}}))` will hit a group with `cn=group1` and a `memberUid` that contains the user's `uid` (if the `User DN property` has not been changed from the default `uid`)
- User DN property: Properties of the user object that will be replaced by `{{dn}}` in the group search filter.
  Default: uid
