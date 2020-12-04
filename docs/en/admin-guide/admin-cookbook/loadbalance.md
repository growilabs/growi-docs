# Load Balancing Multiple Apps

(TBD)

## PubSub server

[weseek/nginx-nchan](https://hub.docker.com/repository/docker/weseek/nginx-nchan/) or Redis (Not implemented yet)

## Environment variable settings

### Minimum settings

```
S2SMSG_PUBSUB_SERVER_TYPE=nchan
NCHAN_URI=http://nchan
```

### More info

See `S2SMSG_PUBSUB_NCHAN_*` of [Environment Variables](./env-vars.md).

## Cautionary points about importing/exporting data

:::danger
Data imports/exports doesn't operete normally with load balancing multi apps because these use file system.
:::


Data imports/exports expands the follow data on file system in the process.

- "GROWI Archive File" in Import GROWI archive of Import Data page(`/admin/importer`)
- "Exported Archive Data" in Export Archive Data page(`/admin/export`)

Therefore Data imports/exports is not recommended with load balancing multi apps.

If you want to create a backup, [mongodb-awesome-backup](./mongodb-backup.md) is recommended.
