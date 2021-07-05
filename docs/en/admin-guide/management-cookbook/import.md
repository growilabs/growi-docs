# Import Data

GROWI version 3.7.2 and later supports the ability to import data from GROWI, esa.io, and Qiita:Team.

## GROWI archive data import

Imports data from a GROWI archive data zip file.

:::warning

- GROWI archive data can only be imported from the same version of GROWI.

- On a new environment, the import operation should be performed by an Administrator whose username does not exist on the old environment.
:::

:::danger

- Since the data for the import function uses the file system, it may not work properly when the GROWI server is load balanced. For details, see [here](../admin-cookbook/loadbalance.md#cautionary-points-about-importing-exporting-data).
:::

### Importable datas

The list of data that can be imported can be found in [Archive Data](./export.md#archivable-mongodb-collections). It is possible to select and import only the data collections you need from a single zip file.

### Modes

There are three different rules for importing duplicate data, one for each collection.

- Insert
  - Import only if there is no data with the same name, and skip if there is.
- Upsert
  - If there is data that can be determined to have the same name, it will overwrite the data.
- Flash and Insert
  - If there is data with the same name, the existing data will be completely deleted before importing.
  - This mode is not selectable in the User collection.
  - The Config collection can only be selected in this mode.
    - If you import the Config collection, you will need to restart the server.

### How to import

1. Log in to GROWI with an administrator account and go to [Admin/Import Data] (`/admin/importer`). Make sure that the `username` of the administrator user performing the import operation does not exist in the old environment.
2. Upload the GROWI archive file by clicking Import GROWI Archive.
3. Check the collections you want to import and select a mode.
4. After running the import, the results will be displayed for each collection.

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
