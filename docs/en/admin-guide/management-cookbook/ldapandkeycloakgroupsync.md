# LDAP/Keycloak Group Synchronization

## Overview

In GROWI v6.3, a feature has been introduced to import users and user groups stored in LDAP into GROWI.  
You can choose to import from an LDAP server or from Keycloak integrated with LDAP.  
Additionally, groups directly created in Keycloak can also be synchronized.  
This feature tracks changes made to the imported users and user groups, allowing synchronization.

- Imports and synchronization can be performed through the administration page (`/admin`).

- For external specifications, refer to [Dev Wiki | /Documentation/External-Specifications/LDAP-Group-Synchronization](https://dev.growi.org/646d5637019e02272a42cf86).

## Required Settings in GROWI

- Access the group management page (`/admin/user-groups`) in the GROWI administration page and select the tab for the external group (LDAP or Keycloak) you want to create.

- To use the external group synchronization feature, you need to set up authentication mechanisms for LDAP/Keycloak in advance.

## Authentication Mechanism Settings (LDAP)

1. Access the Security Settings page (`/admin/security`) on the GROWI administration page, and configure settings under the "LDAP" tab in the "Authentication Mechanism Settings."

- For details on the settings and procedures, see [LDAP Integration](https://docs.growi.org/en/admin-guide/management-cookbook/ldap.html).

2. Access the group management page (`/admin/user-groups`) on the GROWI administration page, and configure settings under the "LDAP" tab in the "External Group Management".

The required input fields are as follows:

- Group Search Base DN
- Membership Attribute
- Child Groups Attribute

## Authentication Mechanism Settings (Keycloak)

1. Access the security settings page (`/admin/security`) on the GROWI administration page, and configure settings under the "OIDC" tab in the "Authentication Mechanism Settings".

The required input fields are as follows:

- Provider Name
- Issuer Host
- Client ID
- Client Secret
- Authorization Endpoint
- Token Endpoint
- Revocation Endpoint
- Introspection Endpoint
- UserInfo Endpoint
- EndSession Endpoint
- Registration Endpoint
- Attribute Mapping
  - Identifier
  - username
  - Email

2. Access the group management page (`/admin/user-groups`) on the GROWI administration page, and configure settings under the "Keycloak" tab in the "External Group Management".

The required input fields are as follows:

- Host
- Group Realm
- Realm of client used to request to Admin API
- Client ID
- Client Secret
- Auto Generate User on Sync
- Description

## Running Synchronization

- Click "Sync" in the synchronization execution section and confirm that the group has been added to the "Group list" in "External Group Management".
  - The name, description, users belonging to the added external group, child groups, and creation date will be displayed.

- In subsequent synchronizations, if there are changes in the data on the LDAP/Keycloak side, it will be synchronized with the changed content.
  - However, if "Preserve Deleted LDAP/Keycloak Groups" is turned on, deleted groups will remain in GROWI.

- (TBD) Points to note when synchronizing large groups.
