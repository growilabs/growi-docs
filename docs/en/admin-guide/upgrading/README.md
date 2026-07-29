---
title: Upgrade Overview and Migration to the Latest Version
---

# Upgrade Overview and Migration to the Latest Version

This page is for everyone running an older version of GROWI. It brings together, in a single place, everything you need to do to upgrade from the version you are running now to the latest version (v8.0.x as of June 2026) in one step.

The latest series receives continuous improvements in features, performance, and security, and its supported runtime environments are kept up to date. To help you keep using GROWI safely, the development team strongly recommends updating to the latest version.

The work proceeds in the following order.

1. Tasks to complete before upgrading
2. Upgrading GROWI to the latest version
3. Tasks to complete after upgrading

::: danger
Because of a serious bug in Revision (page edit history) data, **do not upgrade to v6.1.0 - v7.0.15; always upgrade directly to v7.4.0 or later**.
For details, see the Dev Wiki page [Revision data migration bug in v5.0.0 - v7.0.15](https://dev.growi.org/69301054963f68dfcf2b7111).
:::

## Table of Contents

[[toc]]

## Check your current version

First, check the version of GROWI you are currently running.

In the tables under "1. Tasks to complete before upgrading" and "3. Tasks to complete after upgrading", find the **column** for the version you are running now, read it from top to bottom, and carry out every row marked with a check mark. A check mark means that the item has to be dealt with somewhere on the way from that version to the latest version.

The `[Required]` and `[If applicable]` labels at the beginning of each row indicate the nature of the task. `[If applicable]` means that the task is only necessary when the stated condition applies to you.

For the detailed steps of each item, see "4. Detailed procedures".

Before upgrading, always take a backup of MongoDB.

Reference: [MongoDB Backup & Restore](https://docs.growi.org/en/admin-guide/admin-cookbook/mongodb-backup.html)

If you use [weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup), you can take a backup with the following command.

```bash
docker run --rm \
  -e MONGODB_HOST=<Target MongoDB Host> \
  -e AWS_ACCESS_KEY_ID=<Your IAM Access Key ID> \
  -e AWS_SECRET_ACCESS_KEY=<Your IAM Secret Access Key> \
  -e S3_TARGET_BUCKET_URL=<Target S3 Bucket URL (s3://...)> \
  weseek/mongodb-awesome-backup
```

If MongoDB runs in a docker container, add the `--link ${container}:mongo` option. If it does not run in a docker container and the Docker host OS is Linux, add the `--network host` option. For the restore procedure, see the reference page above (it is not repeated on this page).

## 1. Tasks to complete before upgrading

The tables below list, by category, the tasks you have to finish **before** upgrading GROWI itself to the latest version. Find the column for the version you are running now and carry out every row marked with a check mark.

### Middleware

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [If applicable] [When you use Elasticsearch v7 or earlier: migrate to v8 or v9 (rebuilding the index is recommended)](#migrate-elasticsearch-to-v8-or-v9) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you run MongoDB in a standalone configuration: migrate to a replica set (a single-node replica set is acceptable)](#migrate-mongodb-to-a-replica-set-configuration) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [Required] [Upgrade MongoDB to v6.0 or later (one major version at a time, without skipping)](#upgrade-mongodb-to-v6-0-or-later) | | | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you build and run GROWI from source: upgrade Node.js to v24 (not needed when you use the official Docker image)](#upgrade-node-js-to-v24) | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

### Infrastructure and storage

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [If applicable] [When you use S3-compatible object storage: add s3:AbortMultipartUpload to the IAM policy](#add-s3-abortmultipartupload-to-the-iam-policy) | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you use the official Docker image: check the operational impact of the move to Docker Hardened Images (no shell or package manager included)](#check-the-operational-impact-of-docker-hardened-images) | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you use AWS S3: disable the bucket ACL, block public access, and review the S3_OBJECT_ACL environment variable](#review-the-aws-s3-bucket-acl-settings-and-s3-object-acl) | | | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When your system was built on v3.3 or earlier and uses MongoDB GridFS: rewrite legacy attachment URLs to the /attachment/{attachmentId} form](#rewrite-legacy-attachment-urls) | | | | | | ✓ | ✓ | ✓ | ✓ |

### Environment variables and settings

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [If applicable] [For large environments with more than several hundred active users: consider raising the MongoDB connection pool limit](#raise-the-mongodb-connection-pool-limits) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When LOCAL_STRATEGY_ENABLED / SAML_ENABLED are set: check the actual enabled/disabled state of each authentication method at /login](#check-the-actual-state-of-local-strategy-enabled-and-saml-enabled) | | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [Migrate away from the removed environment variables FILE_UPLOAD_DISABLED and DISABLE_LINK_SHARING](#migrate-away-from-the-removed-environment-variables-file-upload-disabled-and-disable-link-sharing) | | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you use the Custom HTML Header: migrate to Custom Noscript or to a custom script](#migrate-away-from-the-custom-html-header) | | | | | | | | ✓ | ✓ |
| [If applicable] [When you use Twitter OAuth 2 authentication: migrate to another authentication method](#migrate-from-twitter-oauth-2-authentication-to-another-authentication-method) | | | | | | | | ✓ | ✓ |
| [If applicable] [When you use the nocdn image: migrate to the consolidated official image](#migrate-from-the-nocdn-image-to-the-official-image) | | | | | | | | ✓ | ✓ |

### Building from source

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [If applicable] [When you build from source yourself: adapt to the build tool changes (Lerna to Turborepo, yarn v1 to pnpm v9.4 or later)](#adapt-to-the-build-tool-changes-when-building-from-source) | | | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

### Removed features

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [If applicable] [When you use HackMD integration: migrate to simultaneous editing in the built-in editor and consider decommissioning the HackMD server](#migrate-from-hackmd-integration-to-simultaneous-editing-in-the-built-in-editor) | | | | | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you monitor GROWI with Promster: review your monitoring setup](#review-your-monitoring-setup-that-uses-promster) | | | | | ✓ | ✓ | ✓ | ✓ | ✓ |

### Notifying your users

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [If applicable] [Notify users that the syntax and HTML changes will alter how existing pages display and that page content needs to be rewritten](#rewrite-page-content-affected-by-the-syntax-and-html-changes) | | | | | ✓ | ✓ | ✓ | ✓ | ✓ |
| [Required] [Notify users about WIP pages, the new page creation flow, and the change in how full-text search is invoked](#notify-users-about-wip-pages-and-ui-changes) | | | | | ✓ | ✓ | ✓ | ✓ | ✓ |
| [Required] [Notify users of the v5 specification changes (move / rename / delete including descendants, permalink URLs, UI changes)](#notify-users-of-the-v5-specification-changes) | | | | | | | | | ✓ |

## 2. Upgrading GROWI to the latest version

Once you have completed every task in "1. Tasks to complete before upgrading" and taken a backup of MongoDB, upgrade GROWI itself.

Whatever version you are running now, you do not need to go through intermediate versions. Upgrade directly to the latest version (v8.0.x).

As warned at the top of this page, do not go through v6.1.0 - v7.0.15 on the way.

### Upgrading a docker-compose deployment

If you run GROWI with [growi-docker-compose](https://github.com/growilabs/growi-docker-compose), follow the steps below. For details, see [Upgrade GROWI](/en/admin-guide/getting-started/docker-compose.html#upgrade-growi).

In the folder where you downloaded `growi-docker-compose`, stop the containers.

```text
cd growi
docker-compose stop
```

Remove the existing Docker containers and Docker images. Replace the image tag (`growilabs/growi:7` in the example below) with the version you are running.

```text
docker-compose rm app mongo elasticsearch
docker rmi growilabs/growi:7
```

Pull the latest version, build the Docker image, and start the containers.

```text
git pull
docker-compose build
docker-compose up
```

### Upgrading a build-from-source deployment

If you fetch and build the source yourself, follow the flow below. For a concrete example of the steps, see the [GROWI section of Ubuntu Server](/en/admin-guide/getting-started/ubuntu-server.html#growi) (the flow is the same on AlmaLinux OS and CentOS).

After stopping the GROWI server process, check the latest stable tag in the repository and switch to it.

```bash
$ git tag --sort=-version:refname | head -10
...
v7.2.0
v7.2.1
v7.2.3
v7.2.4
...

# Use the latest version without RC (replace the version as appropriate)
$ git checkout -b v7.2.4 refs/tags/v7.2.4
```

Update the dependencies and rebuild.

```bash
$ pnpm install
$ pnpm run app:build
```

Specify `MONGO_URI` and `ELASTICSEARCH_URI` for your environment and confirm that GROWI starts.

```bash
$ sudo \
MONGO_URI=mongodb://localhost:27017/growi \
ELASTICSEARCH_URI=http://localhost:9200/growi \
npm run app:server
```

For automatic startup with systemd, see [Autostart using systemd](/en/admin-guide/admin-cookbook/launch-with-systemd.html).

### Rebuilding the full-text search index

After upgrading GROWI itself, rebuild the index from the **Elasticsearch Management** page of the admin panel (`/admin/search`; this is the name shown in the sidebar, formerly "Full Text Search Management"). Use the **Rebuild page data index** button in the "Page Data Management" section. If the index is shown as corrupted, you can normalize it. If you have enabled the Audit Log feature, you can also manage the audit log index in the "Audit Log Index Management" section of the same page. For details, see [Setup of Full Text Search and Audit Log Index Management](/en/admin-guide/management-cookbook/setup-search-system.html).

## 3. Tasks to complete after upgrading

The tables below list, by category, the tasks that have to be dealt with **after** upgrading GROWI itself. Find the column for the version you were running and carry out every row marked with a check mark (the columns have the same meaning as in "1. Tasks to complete before upgrading").

### Reconfiguration

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [If applicable] [When you used the AI integration features: the legacy AI settings have been removed, so configure them again with the GROWI AI Agent method](#reconfigure-growi-ai-agent) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When LOCAL_STRATEGY_ENABLED / SAML_ENABLED are set: check again at /login that each authentication method is enabled or disabled as expected](#check-the-actual-state-of-local-strategy-enabled-and-saml-enabled) | | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you customized the XSS prevention settings: they are reset to the default at startup, so configure them again (the format for allowed attributes has changed to JSON)](#reconfigure-the-xss-prevention-settings) | | | | | | | | ✓ | ✓ |

### Data and file migration

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [If applicable] [When you use FILE_UPLOAD=local: move the attachments to the new storage directory](#move-attachments-to-the-new-location-when-file-upload-local) | | | | | | | ✓ | ✓ | ✓ |
| [If applicable] [When unconverted pages created in v4.5 or earlier remain: convert them to the v5 Compatible Format (public pages can be converted in bulk from the admin page; legacy private pages are converted by each user)](#convert-unconverted-pages-to-the-v5-compatible-format) | | | | | | | | ✓ | ✓ |

### Rewriting page content

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [If applicable] [Rewrite existing page content affected by the syntax and HTML changes in bulk with the data-migrations scripts](#rewrite-page-content-affected-by-the-syntax-and-html-changes) | | | | | ✓ | ✓ | ✓ | ✓ | ✓ |

## 4. Detailed procedures

These are the detailed steps for each task, linked from the tables in "1. Tasks to complete before upgrading" and "3. Tasks to complete after upgrading". The "When to do this" field of each item states when it has to be carried out.

### Migrate Elasticsearch to v8 or v9

- **When to do this**: Before upgrading
- **Introduced in**: v8.0 (support for the Elasticsearch v7 series has ended)
- **When it applies**: When you use Elasticsearch v7 or earlier
- **References**: [v5.0.x](/en/admin-guide/upgrading/50x.html), [v6.1.x](/en/admin-guide/upgrading/61x.html#for-admin), [v8.0.x](/en/admin-guide/upgrading/80x.html#for-administrators)

1. Check the major version of Elasticsearch you use.

    | GROWI | <= v7.3.x | v8.0.x or later |
    | :---: | :---: | :---: |
    | Supported Elasticsearch | 7.x, 8.x, 9.x | 8.x, 9.x |

1. If you use v7 or earlier, prepare a new Elasticsearch v8 or v9. We recommend creating a new index rather than carrying over the existing one. The steps are as follows (when using docker).
    1. Remove the Elasticsearch container you were using.
    1. Remove the docker volume that the Elasticsearch container used.
    1. Start the new Elasticsearch container (make sure no index data for GROWI exists).
    1. Start GROWI (after startup, you can rebuild the index from the Elasticsearch Management page).

    For an on-premises installation, uninstall the old version, install the new version from scratch, and likewise make sure that no index for GROWI exists before starting GROWI.
1. Set the environment variable `ELASTICSEARCH_VERSION` to the major version you connect to (`8` or `9`; the default is `9`).
1. If you start GROWI v8.0 or later while still on Elasticsearch v7, full-text search fails to initialize and becomes unavailable (the server process itself still starts, but an error is logged). Always migrate before upgrading.

### Migrate MongoDB to a replica set configuration

- **When to do this**: Before upgrading
- **Introduced in**: v8.0
- **When it applies**: When you run MongoDB in a standalone configuration (required from GROWI v8.0)
- **References**: [v8.0.x](/en/admin-guide/upgrading/80x.html#for-administrators)

1. Check whether your current MongoDB runs as a standalone instance or as a replica set.
1. Because GROWI Vault uses MongoDB change streams, a replica set is required from v8.0 onward. Change streams are only available on a replica set.
1. If you run a standalone configuration, migrate to a replica set. A single-node replica set is acceptable.
1. If you use [growi-docker-compose](https://github.com/growilabs/growi-docker-compose), refer to the updates in that repository when migrating.

### Upgrade MongoDB to v6.0 or later

- **When to do this**: Before upgrading
- **Introduced in**: v7.1
- **When it applies**: When you use MongoDB v5.0 or earlier
- **References**: [v7.1.x](/en/admin-guide/upgrading/71x.html#for-admin), [Upgrading MongoDB](/en/admin-guide/admin-cookbook/upgrade-mongodb.html)

1. Check the version of MongoDB you use.
1. If it is older than v6.0, upgrade one major version at a time without skipping (for example, to go from v4.4 to v6.0, go through v5.0 first). For the steps between each version, see the official MongoDB release notes.

    - [v3.6](https://docs.mongodb.com/manual/release-notes/3.6-upgrade-standalone/index.html)
    - [v4.0](https://docs.mongodb.com/manual/release-notes/4.0-upgrade-standalone/index.html)
    - [v4.2](https://docs.mongodb.com/manual/release-notes/4.2-upgrade-standalone/index.html)
    - [v4.4](https://docs.mongodb.com/manual/release-notes/4.4-upgrade-standalone/index.html)
    - [v5.0](https://docs.mongodb.com/manual/release-notes/5.0-upgrade-standalone/index.html)
    - [v6.0](https://docs.mongodb.com/manual/release-notes/6.0-upgrade-standalone/index.html)

1. When you run MongoDB with docker, upgrade one major version (for example from v5.0 to v6.0) as follows. Set your actual MongoDB container name in `MONGO_CONTAINER_NAME`.

    ```bash
    export MONGO_VERSION=5.0
    export MONGO_CONTAINER_NAME=mymongodb
    docker exec $MONGO_CONTAINER_NAME mongo --eval 'db.adminCommand( { setFeatureCompatibilityVersion: "'$MONGO_VERSION'" } )'
    ```

    After running the command above, stop MongoDB v5.0 and start v6.0.

1. When you run MongoDB with docker-compose, do the following. Set your actual MongoDB service name in `MONGO_SERVICE_NAME`.

    ```bash
    export MONGO_VERSION=5.0
    export MONGO_SERVICE_NAME=mymongodb
    docker-compose exec $MONGO_SERVICE_NAME mongo --eval 'db.adminCommand( { setFeatureCompatibilityVersion: "'$MONGO_VERSION'" } )'
    ```

    After running the command above, stop MongoDB v5.0, change the MongoDB version specified in the yml file, and start v6.0.

1. Repeat the steps above one major version at a time until you reach the version you want. Support for MongoDB v4.4 and v5.0 has ended, so make sure you end up on v6.0 or later.

### Upgrade Node.js to v24

- **When to do this**: Before upgrading
- **Introduced in**: v7.5 (the only supported Node.js series is now v24)
- **When it applies**: When you build and run GROWI from source. Not needed when you use the official Docker image.
- **References**: [v7.5.x](/en/admin-guide/upgrading/75x.html#for-administrators)

1. From GROWI v7.5.0, the only supported Node.js series is v24. Support for the v18 and v20 series has ended.

    | GROWI | <= v7.4.x | v7.5.x or later |
    | :---: | :---: | :---: |
    | Node.js | 18, 20 | 24 |

1. Check the version of Node.js you use.

    ```bash
    $ node -v
    ```

1. If it is not in the v24 series, upgrade Node.js to the v24 series. The steps for using the NodeSource repository are as follows.

    ```bash
    $ cd ~
    $ curl -sL https://deb.nodesource.com/setup_24.x -o nodesource_setup.sh
    $ sudo bash nodesource_setup.sh
    $ sudo apt -y install nodejs
    ```

1. GROWI v7.5.0 uses the built-in function `RegExp.escape()`, added in Node.js v24, to process page paths. If you upgrade while staying on the v18 or v20 series, this function does not exist, so operations such as moving or duplicating pages fail at runtime. Make sure you complete this task before upgrading GROWI itself.
1. If you use the official Docker image, this task is not needed.

### Add s3:AbortMultipartUpload to the IAM policy

- **When to do this**: Before upgrading
- **Introduced in**: v7.5
- **When it applies**: When you use S3-compatible object storage
- **References**: [v7.5.x](/en/admin-guide/upgrading/75x.html#for-administrators)

1. From v7.5.x, the upload method to S3 changes from a single PutObject to multipart upload (files of 5 MB or smaller fall back to PutObject).
1. Add the `s3:AbortMultipartUpload` permission to your IAM policy.
1. `CreateMultipartUpload`, `CompleteMultipartUpload`, and `UploadPart` are included in `s3:PutObject` in IAM, so `s3:AbortMultipartUpload` is the only permission you need to add.

### Check the operational impact of Docker Hardened Images

- **When to do this**: Before upgrading
- **Introduced in**: v7.5
- **When it applies**: When you use the official Docker image
- **References**: [v7.5.x](/en/admin-guide/upgrading/75x.html#for-administrators)

1. From v7.5.x, the base image of the official Docker image changes to a [Docker Hardened Image (DHI)](https://www.docker.com/products/hardened-images/). A DHI does not include a shell (`sh`, `bash`) or a package manager.
1. Check whether your operations rely on entering the container interactively with `docker exec`.
1. If you customize the official image (installing additional packages, using your own entry point, and so on), verify before upgrading that it still works on a DHI.

### Review the AWS S3 bucket ACL settings and S3_OBJECT_ACL

- **When to do this**: Before upgrading
- **Introduced in**: v7.1
- **When it applies**: When you use AWS S3 to store attachments
- **References**: [v7.1.x](/en/admin-guide/upgrading/71x.html#for-admin)

1. From v7.1.x, the object ACL setting used when uploading files changes as follows.

    | Version | Behavior when uploading a file |
    | :--- | :--- |
    | v7.0.x or earlier | The request attaches the object ACL setting `ACL: 'public-read'` |
    | v7.1.x or later | The request does not set an object ACL |

1. Following the AWS official [Security best practices for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html), disable the ACL of the S3 bucket and change the settings to block public access.
1. If you have set the environment variable `S3_OBJECT_ACL` (default `public-read`) to `public-read`, change it to `private` or remove the setting.
1. Attachments uploaded in v3.3.0 or earlier, which are referenced directly through the bucket URL as shown below, may become inaccessible after this change. Check the impact in advance.

    ```text
    https://${AWS bucket name}.s3.amazonaws.com/attachment/5d091f611fe336003eec5bfd/foobar.jpg
    ```

1. If you want to keep operating as before without changing the S3 bucket settings (not recommended), explicitly set the environment variable `S3_OBJECT_ACL=public-read`.

### Rewrite legacy attachment URLs

- **When to do this**: Before upgrading
- **Introduced in**: v6.3
- **When it applies**: When your system was built on v3.3 or earlier and manages attachments with MongoDB GridFS
- **References**: [v6.3.x](/en/admin-guide/upgrading/63x.html)

1. In v6.3.x, the legacy endpoint for MongoDB GridFS (`/attachment/{pageID}/{fileName}`) is removed.
1. Check whether any pages contain URLs in that form in their Markdown.
1. Rewrite the relevant URLs to the `/attachment/{attachmentId}` form, or upload the files again.

### Raise the MongoDB connection pool limits

- **When to do this**: Before upgrading
- **Introduced in**: v8.0
- **When it applies**: For large environments with many active users (roughly more than 500)
- **References**: [v8.0.x](/en/admin-guide/upgrading/80x.html#for-administrators), [Environment Variables](/en/admin-guide/admin-cookbook/env-vars.html)

1. From GROWI v8.0, the default upper limit of the MongoDB connection pool is reduced compared with previous versions.
1. In large environments with many active users, many pages, or high access frequency, the default may be insufficient.
1. If that applies to you, raise the upper and lower limits with the following environment variables.

    | Environment variable | Description | Default |
    | --- | --- | --- |
    | `MONGO_MAX_POOL_SIZE` | Maximum number of connections in the MongoDB connection pool | `15` |
    | `MONGO_MIN_POOL_SIZE` | Minimum number of connections in the MongoDB connection pool | `2` |

### Check the actual state of LOCAL_STRATEGY_ENABLED and SAML_ENABLED

- **When to do this**: Before upgrading (check the settings) and after upgrading (check them again)
- **Introduced in**: v7.2
- **When it applies**: When you set the environment variable `LOCAL_STRATEGY_ENABLED` or `SAML_ENABLED`
- **References**: [v7.2.x](/en/admin-guide/upgrading/72x.html#for-admin)

Before upgrading:

1. Check whether you set the environment variables `LOCAL_STRATEGY_ENABLED` and `SAML_ENABLED`. If you set neither of them, this task is not needed.
1. If you do set them, access `/login` in a private browser window and confirm that ID/Pass authentication and SAML authentication are enabled or disabled as you expect.
1. If they do not match, take one of the following measures.
    1. **Give priority to the DB value (recommended)**: Toggle them on the "Security settings" page of the admin panel so that the correct state is stored in the DB, remove the environment variables `LOCAL_STRATEGY_ENABLED` and `SAML_ENABLED`, and restart the server.
    1. **Give priority to the environment variable value**: Delete the document with `key: 'security:passport-local:isEnabled'` from the `configs` collection of the database. Delete the document with `key: 'security:passport-saml:isEnabled'` in the same way. Then restart the server.

After upgrading:

1. Access `/login` again and confirm that ID/Pass authentication and SAML authentication are enabled or disabled as you expect.

### Migrate away from the removed environment variables FILE_UPLOAD_DISABLED and DISABLE_LINK_SHARING

- **When to do this**: Before upgrading
- **Introduced in**: v7.2
- **When it applies**: When you set the environment variable `FILE_UPLOAD_DISABLED` or `DISABLE_LINK_SHARING`
- **References**: [v7.2.x](/en/admin-guide/upgrading/72x.html#for-admin)

1. The environment variable `FILE_UPLOAD_DISABLED` (disabling the file upload feature) has been removed. Set the environment variable `FILE_UPLOAD` to `none` instead.
1. The environment variable `DISABLE_LINK_SHARING` (disabling the share link feature) has been removed. Disable the share link feature from "Security settings" in the admin panel instead.

### Migrate away from the Custom HTML Header

- **When to do this**: Before upgrading
- **Introduced in**: v6.0
- **When it applies**: When you use the Custom HTML Header
- **References**: [v6.0.x](/en/admin-guide/upgrading/60x.html#for-admin)

1. From v6.0, the "Custom HTML Header", which allowed you to freely insert strings and tags into the head tag, is removed.
1. Migrate to the newly added "Custom Noscript" or to a custom script.
1. For example, if you want to add a `link` tag, you can do it with a custom script like the following.

    ```javascript
    var link = document.createElement('link');
    link.id = 'mylink';
    link.rel = 'stylesheet';
    link.href = 'https://example.com/mystyles.css';
    document.head.appendChild(link);
    ```

### Migrate from Twitter OAuth 2 authentication to another authentication method

- **When to do this**: Before upgrading
- **Introduced in**: v6.0
- **When it applies**: When you use Twitter OAuth 2 authentication
- **References**: [v6.0.x](/en/admin-guide/upgrading/60x.html#for-admin)

1. From v6.0, the authentication mechanism that uses Twitter is removed.
1. Before upgrading, switch to another authentication method such as ID/Pass authentication or SAML authentication.

### Migrate from the nocdn image to the official image

- **When to do this**: Before upgrading
- **Introduced in**: v6.0
- **When it applies**: When you use the nocdn Docker image
- **References**: [v6.0.x](/en/admin-guide/upgrading/60x.html#for-admin)

1. From v6.0, the official container images, which used to be split into a default build and a nocdn build, are consolidated into one.
1. If you use the nocdn build, migrate to the consolidated official image.

### Adapt to the build tool changes when building from source

- **When to do this**: Before upgrading
- **Introduced in**: v6.1 (Lerna to Turborepo), v7.1 (yarn to pnpm)
- **When it applies**: When you build from source yourself. Not needed when you use the official Docker image.
- **References**: [v6.1.x](/en/admin-guide/upgrading/61x.html#for-admin), [v7.1.x](/en/admin-guide/upgrading/71x.html#for-admin)

1. From v7.1, the package manager and task runner change from yarn (v1) to pnpm. Install v9.4 or later, referring to the [pnpm official site](https://pnpm.io/installation).

    ```bash
    $ curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sudo sh -
    $ sudo pnpm setup
    ```

1. From v6.1, the build tool changes from Lerna to [Turborepo](https://turbo.build/repo). When you upgrade to the latest version in one step, install it globally with the following command after installing pnpm.

    ```bash
    $ sudo pnpm add turbo --global
    ```

1. Check the versions you installed.

    ```bash
    $ nodejs -v
    $ pnpm -v
    $ turbo --version
    ```

1. Rewrite any place where you ran npm scripts with the yarn command to use `pnpm run` or `npm run`.

### Migrate from HackMD integration to simultaneous editing in the built-in editor

- **When to do this**: Before upgrading
- **Introduced in**: v7.0
- **When it applies**: When you use HackMD(CodiMD) integration
- **References**: [v7.0.x](/en/admin-guide/upgrading/70x.html#for-admin), [HackMD(CodiMD) Integration](/en/admin-guide/admin-cookbook/integrate-with-hackmd.html)

1. From v7.0, the feature for simultaneous editing by multiple people through HackMD integration is removed.
1. Migrate to simultaneous editing by multiple people in the built-in editor instead. No additional setup is required on the user side.
1. Consider decommissioning (stopping and removing) the HackMD(CodiMD) server you were running.

### Review your monitoring setup that uses Promster

- **When to do this**: Before upgrading
- **Introduced in**: v7.0
- **When it applies**: When you monitor GROWI with Promster integration
- **References**: [v7.0.x](/en/admin-guide/upgrading/70x.html#for-admin)

1. From v7.0, the feature that integrates with Promster is removed.
1. If you monitor GROWI through Promster, review your monitoring setup before upgrading.

### Rewrite page content affected by the syntax and HTML changes

- **When to do this**: Before upgrading (notify users) and after upgrading (bulk rewrite of page content)
- **Introduced in**: v6.0 (syntax changes), v6.1 (removal of the `mdcont-` prefix), v7.0 (Bootstrap v4 to v5)
- **When it applies**: When you use v6.3.x or earlier
- **References**: [v6.0.x](/en/admin-guide/upgrading/60x.html#for-user), [v6.1.x](/en/admin-guide/upgrading/61x.html#for-user), [v7.0.x](/en/admin-guide/upgrading/70x.html#for-admin)

From v6.0 through v7.0, Markdown syntax and its rendered output changed as shown below. Only the changes introduced after the version you currently run apply to you.

| Version introduced | What changed | Details | `MIGRATION_MODULE` |
| :--- | :--- | :--- | :--- |
| v6.0 | Draw.io, PlantUML, drawing tables with CSV and TSV, math (from MathJax to KaTeX), presentation page breaks, the inline footnote syntax (removed), the GROWI original page link notation (removed), blockdiag (not implemented) | [Upgrading GROWI to v6.0.x](/en/admin-guide/upgrading/60x.html#for-user) | `v60x` |
| v6.1 | Removal of the `mdcont-` prefix that used to be added automatically to anchor links | [Upgrading GROWI to v6.1.x](/en/admin-guide/upgrading/61x.html#for-user) | `v61x` |
| v7.0 | Notation changes for HTML tags in Markdown caused by the change from Bootstrap v4.6 to v5.3 | [Upgrading GROWI to v7.0.x](/en/admin-guide/upgrading/70x.html#for-admin) | `v70x` |

Before upgrading (notify users):

1. Notify your users that pages using the syntax and HTML listed above will no longer render as intended after the upgrade unless rewritten.
1. If an administrator plans to run the bulk rewrite after upgrading, also notify users that **the content of existing pages itself will be rewritten**.
1. For the specific details of each change, see the upgrade guide linked in the "Details" column above.

After upgrading (administrator bulk rewrite):

1. Upgrading GROWI itself does not automatically change the content of pages saved with the previous notation.
1. The GROWI repository provides scripts under [bin/data-migrations](https://github.com/growilabs/growi/tree/master/bin/data-migrations) to rewrite page content in bulk. Run them with the environment variable `MIGRATION_MODULE` set to one of the values in the table above (`v60x`, `v61x`, `v70x`). See the README in that directory for the exact steps. Related discussion: <https://github.com/growilabs/growi/discussions/7180>
1. **The rewrite is applied only to the latest revision of each page; past revisions are not rewritten.**
1. No script is provided for math (from MathJax to KaTeX), presentation page breaks, or the inline footnote syntax. Rewrite the affected pages manually.

### Notify users about WIP pages and UI changes

- **When to do this**: Before upgrading (notification)
- **Introduced in**: v7.0
- **When it applies**: When you use v6.3.x or earlier
- **References**: [v7.0.x](/en/admin-guide/upgrading/70x.html#for-user)

1. From v7.0, a page is saved as a WIP (Work In Progress) page such as "Untitled-1" as soon as the edit screen is opened (up to v6, no page data was created until you saved).
1. A newly created WIP page is deleted automatically after a certain period from creation (48 hours by default; configurable with the environment variable `WIP_PAGE_EXPIRATION_SECONDS`). Pages created from the page tree or from the new page creation modal are also covered. However, once a page has been updated at least once after creation (whether saved as WIP or saved normally), it is no longer subject to automatic deletion.
1. The new page creation button moves from the navbar at the top of the screen into the sidebar at the top left.
1. The place and the way you invoke the full-text search feature change.
1. Notify your users of these changes before upgrading.

### Notify users of the v5 specification changes

- **When to do this**: Before upgrading (notification)
- **Introduced in**: v5.0
- **When it applies**: When you use v4.x or earlier
- **References**: [v5.0.x](/en/admin-guide/upgrading/50x.html)

1. In v5.0, the URL used when viewing and navigating pages changes from the page path to a permalink.
1. Moving, renaming, or deleting a parent page also affects the pages under it, regardless of whether the user can view them (pages set to "Anyone with the link" are excluded).
1. A page tree is added to the sidebar.
1. Icons that used to sit above the table of contents, such as history, attached data, and shared link management, move into the three dot leader dropdown.
1. An example of the text you can use to notify your users is published in "Example of Well-known Content to Users" on [Upgrading GROWI to v5.0.x](/en/admin-guide/upgrading/50x.html). You can copy the following text and use it publicly.

    ```text
    GROWI has been upgraded to v5.0.0. There are some changes for users, so please check the details below.

    Official Upgrade Guide
    https://docs.growi.org/en/admin-guide/upgrading/50x.html


    Access URI has been changed
    ---------------------------

    - In the new version, the URL displayed in the browser's address bar will be a permalink instead of the page path URL.
        - Before: http://example.com/Page1/Page1-1
        - After: http://example.com/61d04d3aecc2ec9f6cce3d3e


    The behavior of move / rename / delete has been changed
    ----------------------------------------

    - In the new version, if you move / rename / delete the parent page, all the pages under it will also be affected.
        - However, private pages that are set to "Only Me" or "Only Specific Group" remain in the old format, so they are not affected now.
        - Please convert your manageable private pages from http://example.com/_private-legacy-pages to the new format.
        - Please note that after converting these private pages, **move / rename / delete functions on the parent page will now effect the private page**.


    Page Tree Added
    ----------------------------

    - Available from the sidebar.


    UI has been changed
    ----------------

    - The following icons located at the top of the table of contents have been moved into the three dot leader dropdown.
        - Page List (Displaying the Page list of Descendants)
        - Timeline (Listing the Contents of Descendant Pages)
        - Change Log
        - Attached Data
        - Shared Link Management
    - Also, the position of the following link buttons has changed.
        - Footprint icon for displaying the page browsing user list
        - Link button to scroll to the comment list
    ```

### Reconfigure GROWI AI Agent

- **When to do this**: After upgrading
- **Introduced in**: v8.0
- **When it applies**: When you used the legacy AI integration features (creating knowledge assistants, the editor assistant)
- **References**: [v8.0.x](/en/admin-guide/upgrading/80x.html#for-administrators), [Setting Up and Managing AI Integration](/en/admin-guide/management-cookbook/setup-ai.html)

1. In GROWI v8.0, the legacy AI integration settings are removed and they are not migrated automatically. With the settings from the older version, the feature does not work after the upgrade.
1. Open "AI settings" (`/admin/ai`) in the admin panel and turn on "Enable AI features". Note that turning it on alone is not enough to make it work.
1. Open the tab of the LLM provider you use, turn on "Enable this provider", and enter the API key. You can choose from OpenAI / Anthropic / Google / Azure OpenAI and enable several providers at the same time. The API key is write-only; after saving, it is displayed as "(configured)". If you save with the field left empty, the existing key is kept. Each tab shows a dot indicating its configuration state: green = available, gray = disabled, yellow = configuration incomplete. If you use Azure OpenAI, you also need to configure the endpoint in addition to the API key.
1. Register models under "Models" on each provider tab (an available provider needs at least one registered model). Choose the "default model" from the models you registered.
1. Save the settings with the "Update" button at the bottom of the screen. No server restart is required.
1. For the detailed configuration steps, see [Setting Up and Managing AI Integration](/en/admin-guide/management-cookbook/setup-ai.html).

### Reconfigure the XSS prevention settings

- **When to do this**: After upgrading
- **Introduced in**: v6.0
- **When it applies**: When you configured your own custom whitelist in the XSS prevention settings
- **References**: [v6.0.x](/en/admin-guide/upgrading/60x.html#for-admin), [Markdown Settings](/en/admin-guide/management-cookbook/markdown.html#prevent-xss-cross-site-scripting-setting)

1. From v6.0, the XSS prevention settings are reset at startup to the state where "Recommended settings" is selected, and the previous settings are not carried over.
1. The "Remove All Tags" mode has been removed and can no longer be selected.
1. If you used a custom whitelist, configure it again from the Markdown settings (`/admin/markdown`) in the admin panel. The input formats are as follows.
    - **Tag names**: A comma-separated list of tag names
    - **Tag attributes**: A string representation of a JSON Object. Use tag names as keys, and a string representation of a JSON Array of the tag attributes you want to allow as values. Using `"*"` as a key lets you specify tag attributes allowed for all tags
    - If you leave the fields empty, all HTML tags and tag attributes are disabled
1. **GROWI v6.0.0 - v7.0.11 have a bug in the custom whitelist.** The values you enter are not applied correctly. Upgrading to v7.0.10 or later brings this problem to the surface, and HTML tags in Markdown can no longer be rendered correctly. If this applies to you, take one of the following measures.
    - Use the recommended settings
    - Upgrade to v7.0.12 or later, select the custom whitelist, import the values of the recommended settings for both tag names and tag attributes, and change the settings based on them
1. For details, see [Markdown Settings](/en/admin-guide/management-cookbook/markdown.html#prevent-xss-cross-site-scripting-setting).

### Move attachments to the new location when FILE_UPLOAD=local

- **When to do this**: After upgrading
- **Introduced in**: v6.1
- **When it applies**: When you use the environment variable `FILE_UPLOAD=local` (storing attachments on the local file system)
- **References**: [v6.1.x](/en/admin-guide/upgrading/61x.html#for-admin)

1. Because the location of the `app` package changed in v6.1, the location where files are stored changes as follows.

    | Before | | After |
    | :-: | :-: | :-: |
    | `/opt/growi/packages/app/public` | -> | `/opt/growi/apps/app/public` |

1. After upgrading, move the existing files to the new location. Related discussion: <https://github.com/growilabs/growi/discussions/6086>

### Convert unconverted pages to the v5 Compatible Format

- **When to do this**: After upgrading
- **Introduced in**: v5.0
- **When it applies**: When unconverted pages created in v4.5 or earlier remain
- **References**: [v5.0.x](/en/admin-guide/upgrading/50x.html)

1. Pages created up to v4.5 are not converted automatically to the new v5 Compatible Format, even in v5.0 or later.
1. Public pages can be converted in bulk from the admin page.
1. Private pages are converted from the "Old Version Private Pages" link (`/_private-legacy-pages`) at the bottom of the page tree, by selecting the target pages from the list of pages you can view and using the "Convert in bulk" dropdown.
1. The behavior changes before and after conversion as follows.

    |  | Data created in v4.5 or earlier | Data in the new v5 Compatible Format |
    | --- | :---: | :---: |
    | **Display in the page tree** | Not displayed | Displayed |
    | **Move / delete including descendant pages** | Only the pages you can view are processed | All pages under it are processed (limited to pages in the new v5 Compatible Format) |
    | **Viewing permissions that can be set on descendant pages** | All kinds of permissions can be set | Only permissions narrower than those of the parent page can be set |

1. Check the relevant part of [Upgrading GROWI to v5.0.x](/en/admin-guide/upgrading/50x.html) in advance.

