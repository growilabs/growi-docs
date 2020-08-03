# 複数の GROWI でのロードバランス

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
