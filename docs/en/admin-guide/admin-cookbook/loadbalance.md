# Load Balancing Multiple Apps

(TBD)

## PubSub server

[weseek/nginx-nchan](https://hub.docker.com/repository/docker/weseek/nginx-nchan/) or Redis (Not implemented yet)

## Environment variable settings

### Minimum settings

```
S2SMSG_PUBSUB_SERVER_TYPE=nchan
NCHAN_URI=ws://nchan
```

### More info

See `S2SMSG_PUBSUB_NCHAN_*` of [Environment Variables](/en/admin-guide/admin-cookbook/env-vars.html).

## Cautionary points about importing/exporting data

:::danger
In case of load balancing multiple GROWI apps, data imports/exports may not work properly because these use the file system.
:::


Data imports/exports expand the following data on the file system.

- "GROWI Archive File" uploaded by "Import GROWI archive" on the "Import Data" page (`/admin/importer`)
- "Exported Archive Data" on the "Export Archive Data" page (`/admin/export`)

Therefore, data imports/exports are not recommended with load balancing multiple GROWI apps.

When backing up data, [mongodb-awesome-backup](/en/admin-guide/admin-cookbook/mongodb-backup.html) is recommended instead of exporting the archive.
