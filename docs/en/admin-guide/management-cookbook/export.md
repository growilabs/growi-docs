# Archive Data

Creates a zipped GROWI archive data for migrating GROWI data to another GROWI.

:::warning

- GROWI archive data can only be imported for the same version of GROWI.

- When importing user data, be aware of the following

  - If the username of the administrator user performing the import operation is admin1, and there is a user with the same username as admin1 in the exported data of the old environment, the data cannot be imported correctly. The same behavior will occur with email. For this reason, it is recommended to create a new user that does not exist in the old environment data when performing the import operation.
:::

:::danger

- Since the data for the export function uses the file system, it may not work properly when the GROWI server is load balanced. For details, see [here](/en/admin-guide/admin-cookbook/loadbalance.html#cautionary-points-about-importing-exporting-data).
:::

### Archivable MongoDB Collections

| <div style="white-space: nowrap;">Categories</div>| MongoDB Collection Name | Description |
| :--- | :--- | :--- |
| Pages | Pages | Pages. Must be imported together with Revisions. Since browsing permissions are preserved, Users and Usergroups must be imported as a set in order to preserve the scope of visibility. Pages under `/trash` will also be imported. |
|| Revisions | A history of changes to the page. <br>Must be imported together with Pages. |
|| Tags | Page tags. The following PageTagRelation needs to be imported together in order to keep the tags tied to the page. |
|| PageTagRelations | Data that ties Tags to Pages. <br>Must be imported together with Pages and Tags. |
| Users | Users | Users. (Note: You need to set the environment variable `PASSWORD_SEED`. [^*1] Be careful when importing user data. [^*2]) |
|| Externalaccounts | Accounts using external OAuth. Must be imported together with Users. |
|| Usergroups | User groups. Must be imported with Users and UserGroupRelations to keep the Users in the group. |
|| UsergroupRelations | Data that ties Users to User Groups. |
| Admin Settings | Configs | Various configuration data. Some notification settings are included in Updateposts and Globalnotificationsettings instead of Configs. |
|| Updateposts | Notification settings that are created in User Trigger Notification. |
|| Globalnotificationsettings | Notification settings that are created in Global Notification. |
| Others | Comments | Comments. Must be imported together with Pages. |
|| Attachments | Metadata of attached files. `AttachmentFiles.Files` and `Attachmentfiles.Chunks` must be imported together if GridFS is used as the file upload method. |
|| AttachmentFiles.Files | Metadata of the attached files uploaded with Grid FS. Must be imported together with Attachments and `AttachmentFiles.Chunks`. |
|| AttachmentFiles.Chunks | Data of the attachment files uploaded with Grid FS. Must be imported together with Attachments and `AttachmentFiles.Files` if GridFS is used as the file upload method. |
|| Bookmark | Bookmarks attached to pages. Must be imported together with Users and Pages. |
|| Migrations | Migration log. MongoDB migrations in GROWI will skip the migration files that are added to this log. Therefore, to create archived data as complete data at the time of export, Migrations must be exported. |

[^*1]: When backing up/restoring user data, do not forget to set the current 'PASSWORD_SEED' to the new GROWI system. Otherwise, users will not be able to login with their passwords. The current 'PASSWORD_SEED' will be stored in meta.json in the exported zip file.

[^*2]: If the username of the admin user performing the import operation is admin1, and there is a user with the same username as admin1 in the exported data of the old environment, the import cannot be performed correctly. The same behavior will occur with email. Therefore, it is recommended to create a new user that does not exist in the old environment data when performing the import operation.

### How to archive data

1. Log in to GROWI with an administrator account and go to [Admin/Export Archive Data] (`/admin/export`).
2. Click on [Create New Archive Data] and in the modal that appears, select the MongoDB Collections to be exported and click on the [Export] button.
3. When the export is completed, the generated archive data will be added to the [Exported Archive Data List]. Click the cog icon to reveal the drop-down menu with the [Download] button.
