# Export GROWI Data

# Archive data

Creates a zipped GROWI archive data for migrating GROWI data to another GROWI.

:::warning

- GROWI archive data can only be imported for the same version of GROWI.

- When importing user data, be aware of the following

  - If the username of the administrator user performing the import operation is admin1, and there is a user with the same username as admin1 in the exported data of the old environment, the data cannot be imported correctly. The same behavior will occur with email. For this reason, it is recommended to create a new user that does not exist in the old environment data when performing the import operation.
:::

:::danger

- Since the data for the export function uses the file system, it may not work properly when the GROWI server is load balanced. For details, see [here](. /admin-cookbook/loadbalance.md#Notes on the import and export functions).
:::

### Archivable MongoDB Collections

| <div style="white-space: nowrap;">Categories</div>| MongoDB Collection Name | Description | .
| :--- | :--- | :--- | Pages | Pages.
| Pages | Pages, which must be imported with Revisions. You will need to import it with Revisions to preserve the public range, as browsing permissions will be retained. Pages under `/trash` will also be imported. || Revisions
|| Revisions | A history of changes to the page. <If you want to keep the range, you must import it with Users and Usergroups. || Tags
|| Tags | Page tags. The following tags must be imported with the following PageTagRelation in order to keep them associated with the page. | Tags
|| PageTagRelations | Data that ties pages to page tags. <It must be imported as a set with Pages and Tags. | Users
| Users | Users. (Note: You need to set the environment variable `PASSWORD_SEED`. [^*1] Be careful when importing user data. [^*2]) |
|| Externalaccounts | Accounts for external authentication mechanisms, which must be imported with Users. || Usergroups
| | Usergroups | User groups. Must be imported with Users and UserGroupRelations if you want to keep users in a group. | | Usergroups.
| UsergroupRelations | Data that ties users to user groups. | | UsergroupRelations
| Administrative Settings | Configs | Various configuration data. Some notification settings are included in Updateposts and Globalnotificationsettings instead of Configs. |Notifications
| | Notification settings that are created in User Trigger Notification. || Globalnotificationsettings
| | Notification settings created in Global Notification. | Other
| Other | Comments | Comments, which must be imported as a set with Pages. | | Attachments
| Attachmants | Metadata for attachments. Files and Attachmantfiles.Chunks must be imported together if GridFS is used as the file upload method. || AttachmantFiles.
|| AttachmantFiles.Files | Metadata of the attached files uploaded by Grid FS, which must be imported as a set with Attachmants and Attachmantfiles.Chunks. || AttachmantFiles.
| AttachmantFiles.Chunks | Data of the attachment files uploaded by Grid FS. If you are using GridFS as the file upload method, it must be imported together with Attachmants and Attachmantfiles.Files. || Bookmark
|| If you are using GridFS as your file upload method, you must import Attachmants and Attachmantfiles. | | Migrations
|| Migrations | Migration log. MongoDB migrations in GROWI will skip the migration files added to this log. Therefore, if you want to create archived data as the complete data at the time of export, you need to export Migrations. | [^*1]: user data

[^*1]: When backing up/restoring user data, do not forget to set the current 'PASSWORD_SEED' to the new GROWI system. Otherwise, users will not be able to login with their passwords. The current 'PASSWORD_SEED' will be stored in meta.json in the exported zip file.

[^*2]: If the username of the admin user performing the import operation is admin1, and there is a user with the same username as admin1 in the exported data of the old environment, the import cannot be performed correctly. The same behavior will occur with email. Therefore, it is recommended to create a new user that does not exist in the old environment data when performing the import operation.

### How to archive data 1

Log in to GROWI with an administrator account and go to [Administration/Data Archive] (`/admin/export`). 2.
Select the MongoDB Collections you wish to export in the modal that appears after clicking "Create New Archive Data" and press the "Export" button. 3.
When the export is complete, the archive data you have just created will be added to the Exported Archive List. Click [Download] in the drop-down of the setting mark on the right part of the list to download the data.
