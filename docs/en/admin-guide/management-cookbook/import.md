# Import Data

As of GROWI v3.7.2, we support the ability to import data from GROWI, esa.io, and Qiita:Team.

## GROWI archive data import

Imports data from a GROWI archive data zip file.

:::warning

- GROWI archive data can only be imported from the same version of GROWI.

- The administrator user who performs the import operation in the new environment should be created with a username that does not exist in the old environment.
:::

:::danger

- Since the data for the import function uses the file system, it may not work properly when the GROWI server is load balanced. For details, see [here](. /admin-cookbook/loadbalance.md#Notes on the import and export functions).
:::

### Import Target

The list of data that can be imported can be found in [Archive of data](. /export.md#Archivable Data Collections) for a list of data that can be imported. It is possible to select and import only the data collections you need from a single zip file.

### mode

There are three different rules for importing duplicate data, one for each collection.

- Insert
  - Import only if there is no data with the same name, or skip if there is.
- Upsert
  - If there is data that can be determined to have the same name, it will overwrite the data.
- Flash and Insert
  - If there is data that can be determined to be the same name, the existing data will be completely deleted and then imported.
  - This mode is not selectable in the User collection.
  - The Config collection can only be selected in this mode.
    - If you import the Config collection, you will need to restart the server.

### How to import: 1

Log in to GROWI with an administrator account and go to [Administration/Data Import] (`/admin/importer`). Make sure that the `username` of the administrator user performing the import operation does not exist in the old environment. 2.
2. upload the GROWI archive file by clicking Import GROWI Archive. 3.
Check the collections you want to import and select a mode. 4.
When you run the import, the results will be displayed for each collection.

- Inserted: New data added by the import.
- Modified: Data updated by the import
- Failed: Data that failed to be imported

*If you have imported the Config collection, you will need to restart the server.

## From esa.io

(TBD)

[Japanese page](../../../../ja/admin-guide/management-cookbook/import.md#esa-io-のデータインポート) is archived.

## From Qiita:Team

(TBD)

[Japanese page](../../../../ja/admin-guide/management-cookbook/import.md#qiita-team-のデータインポート) is archived.
