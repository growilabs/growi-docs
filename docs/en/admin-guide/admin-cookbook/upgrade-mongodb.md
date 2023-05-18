# Upgrading MongoDB

[[toc]]

::: warning
This page content may be needed when you upgrade GROWI version to the following.

- [Upgrading to v6.1.x](/en/admin-guide/upgrading/61x.html)
- [Upgrading to v4.2.x](/en/admin-guide/upgrading/42x.html)
- [Upgrading to v3.4.x](/en/admin-guide/upgrading/34x.html)
:::

When you upgrade GROWI version from v4.1.x to v4.2.x, please execute the operations of the following sections in order from the top.

When you upgrade GROWI version from v6.0.x to v6.1.x, please execute the operations of the following sections in order from the top.

## Upgrade MongoDB from v3.4 to v3.6

To upgrade MongoDB from v3.4 to v3.6, [See here](https://docs.mongodb.com/manual/release-notes/3.6-upgrade-standalone/index.html).

## Upgrade MongoDB from v3.6 to v4.0

To upgrade MongoDB from v3.6 to v4.0, [See here](https://docs.mongodb.com/manual/release-notes/4.0-upgrade-standalone/index.html).

## Upgrade MongoDB from v4.0 to v4.2

To upgrade MongoDB from v4.0 to v4.2, [See here](https://docs.mongodb.com/manual/release-notes/4.2-upgrade-standalone/index.html).

## Upgrade MongoDB from v4.2 to v4.4

To upgrade MongoDB from v4.2 to v4.4, [See here](https://docs.mongodb.com/manual/release-notes/4.4-upgrade-standalone/index.html).

## Upgrade MongoDB from v4.4 to v5.0

To upgrade MongoDB from v4.4 to v5.0, [See here](https://docs.mongodb.com/manual/release-notes/5.0-upgrade-standalone/index.html).

## Upgrade MongoDB from v5.0 to v6.0

To upgrade MongoDB from v5.0 to v6.0, [See here](https://docs.mongodb.com/manual/release-notes/6.0-upgrade-standalone/index.html).


## Appendix A: Example upgrade steps for for docker users

The following is an example of upgrading MongoDB from v5.0 to v6.0.  
Set the actual MongoDB container name to `MONGO_CONTAINER_NAME`.

1. Run the following while running MongoDB v5.0.

    ```bash
    export MONGO_VERSION=5.0
    export MONGO_CONTAINER_NAME=mymongodb
    docker exec $MONGO_CONTAINER_NAME mongo --eval 'db.adminCommand( { setFeatureCompatibilityVersion: "'$MONGO_VERSION'" } )'
    ```

1. Stop MongoDB v5.0 container.
1. Launch MongoDB v6.0

## Appendix B: Example upgrade steps for for docker-compose users

The following is an example of upgrading MongoDB from v5.0 to v6.0.  
Set the actual MongoDB service name to `MONGO_CONTAINER_NAME`.

1. Run the following while running MongoDB v5.0.

    ```bash
    export MONGO_VERSION=5.0
    export MONGO_SERVICE_NAME=mymongodb
    docker-compose exec $MONGO_SERVICE_NAME mongo --eval 'db.adminCommand( { setFeatureCompatibilityVersion: "'$MONGO_VERSION'" } )'
    ```

1. Stop MongoDB v5.0 container.
1. Change the version of MongoDB in your YAML file.
1. Launch new services with MongoDB v6.0
