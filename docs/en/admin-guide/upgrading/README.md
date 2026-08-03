---
title: Upgrade Overview and Migration to the Latest Version
---

# Upgrade Overview and Migration to the Latest Version

This page summarizes everything you need to do to upgrade from the version you are running now directly to the latest version (v8.0.x).

::: danger
Because of a serious bug in Revision (page edit history) data, **do not upgrade to v6.1.0 - v7.0.15; always upgrade directly to v7.4.0 or later**.
For details, see the Dev Wiki page [Revision data migration bug in v5.0.0 - v7.0.15](https://dev.growi.org/69301054963f68dfcf2b7111).
:::

## Table of Contents

[[toc]]

## How to Read This Page

The latest release series receives continuous improvements in features, performance, and security, and its supported runtime environments are kept up to date. To keep using GROWI safely, we recommend upgrading to the latest version.

- Follow A if you use GROWI.cloud, or B if you self-host the OSS version. **You do not need to read the other one.**
- Whatever version you are running now, you do not need to go through intermediate versions. Upgrade directly to the latest version (v8.0.x).
- In the A and B tables, find the **column** for the version you are running now, read it from top to bottom, and carry out every row marked with a check mark.
    - A check mark means the task is required at some point when upgrading from that version to the latest version.
    - `[Required]` means the task is unconditional wherever a check mark appears. `[If applicable]` means you also need the condition stated in that row to apply to you.
    - The tables link to "C. Detailed procedures", which collects the concrete steps for each task.

## A. If You Use GROWI.cloud

### A-1. Check your current version

- You can check the version of the GROWI app you are currently running in the "Version" field of the app detail screen on GROWI.cloud ([Version](https://growi.cloud/help/en/cloud/version.html)).
- GROWI.cloud takes backups automatically, depending on your contracted plan ([Backup](https://growi.cloud/help/en/cloud/backup.html)). If you would like a backup restored, please contact us through the [inquiry page](https://growicloud.atlassian.net/servicedesk/customer/portal/1).

### A-2. Tasks to complete before upgrading on GROWI.cloud

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [Required] [Notify users about the introduction of WIP pages, the change in the new page creation flow, and the change in how full-text search is invoked](#notify-users-about-wip-pages-and-ui-changes) | | | | | ✓ | ✓ | ✓ | ✓ | ✓ |
| [Required] [Notify users of the v5 specification changes (move / rename / delete including descendants, permalink URLs, UI changes)](#notify-users-of-the-v5-specification-changes) | | | | | | | | | ✓ |
| [If applicable] [When you specify Owned AWS as the file storage destination: add s3:AbortMultipartUpload to the IAM policy](#add-s3-abortmultipartupload-to-the-iam-policy) | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you specify Owned AWS as the file storage destination: disable the bucket ACL and block public access (if you would like the environment variable S3_OBJECT_ACL changed, please contact us)](#review-the-aws-s3-bucket-acl-settings-and-s3-object-acl) | | | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you have enabled simultaneous editing (HackMD): migrate to simultaneous editing in the built-in editor and tell your users that the editor changes](#migrate-from-hackmd-integration-to-simultaneous-editing-in-the-built-in-editor) | | | | | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [Notify users that the syntax and HTML changes will alter how existing pages display and that page content needs to be rewritten](#rewrite-page-content-affected-by-the-syntax-and-html-changes) | | | | | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When page data migrated from an OSS deployment built on v3.3 or earlier remains: rewrite legacy attachment URLs](#rewrite-legacy-attachment-urls) | | | | | | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you use the Custom HTML Header: migrate to Custom Noscript or a custom script](#migrate-away-from-the-custom-html-header) | | | | | | | | ✓ | ✓ |
| [If applicable] [When you use Twitter OAuth 2 authentication: migrate to another authentication method](#migrate-from-twitter-oauth-2-authentication-to-another-authentication-method) | | | | | | | | ✓ | ✓ |

If you have any questions about an item that is not listed here, please contact us through the [inquiry page](https://growicloud.atlassian.net/servicedesk/customer/portal/1).

### A-3. Upgrading to the latest version on GROWI.cloud

After completing every task required before the upgrade, update the GROWI version. For the update steps, see [Version](https://growi.cloud/help/en/cloud/version.html) on the GROWI.cloud help site.

- In outline: on the app detail screen, select "Edit" for the "Version" field, choose the target version, and select "Update". Review the confirmation modal and select "Change" to start the update. The app restarts during the update, so choose a time when few users are active.
- If automatic version updates are enabled, your app is updated to the latest version automatically. If you have pinned a specific version, update it manually.
- If you are on v4.x or earlier, automatic version updates do not apply. Update manually from the app detail screen.

::: danger
Because of a serious bug in Revision (page edit history) data, **do not upgrade to v6.1.0 - v7.0.15; always upgrade directly to v7.4.0 or later**.
For details, see the Dev Wiki page [Revision data migration bug in v5.0.0 - v7.0.15](https://dev.growi.org/69301054963f68dfcf2b7111).
:::

### A-4. Tasks to complete after upgrading on GROWI.cloud

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [Required] [Rebuilding the full-text search index](#rebuilding-the-full-text-search-index) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you used the legacy AI integration features: configure them again with the GROWI AI Agent method](#reconfigure-growi-ai-agent) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When LOCAL_STRATEGY_ENABLED / SAML_ENABLED are set: check again at /login that each authentication method is enabled or disabled as expected](#check-the-actual-state-of-local-strategy-enabled-and-saml-enabled) | | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [Rewrite existing page content affected by the syntax and HTML changes (on GROWI.cloud, this requires contacting us)](#rewrite-page-content-affected-by-the-syntax-and-html-changes) | | | | | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you customized the XSS prevention settings: they are reset to the default at startup, so configure them again](#reconfigure-the-xss-prevention-settings) | | | | | | | | ✓ | ✓ |
| [If applicable] [When unconverted pages created in v4.5 or earlier remain: convert them to the v5 Compatible Format](#convert-unconverted-pages-to-the-v5-compatible-format) | | | | | | | | ✓ | ✓ |

## B. If You Use the OSS Version of GROWI

### B-1. Check your current version and take a backup

You can check the version of the GROWI instance you are running now on the top page of the admin panel or in the page footer.

Before upgrading, always take a backup of MongoDB. For the steps, see [MongoDB Backup & Restore](https://docs.growi.org/en/admin-guide/admin-cookbook/mongodb-backup.html) (these steps store the backup in AWS S3; if you do not use S3, save the archive produced by `mongodump` to a location of your choice instead).

### B-2. Tasks to complete before upgrading

::: warning
Carry out the tasks under "Middleware" **with GROWI itself stopped, as part of the same maintenance window as the upgrade**. Each version of GROWI supports specific middleware versions, so upgrading the middleware first while your current GROWI keeps running leaves you on an unsupported combination. The tasks in the other categories can be done in advance.
:::

#### Middleware

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [Required] [Upgrade MongoDB to v6.0 or later (one major version at a time, without skipping)](#upgrade-mongodb-to-v6-0-or-later) | | | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you use Elasticsearch v7 or earlier: migrate to v8 or v9 (rebuilding the index is recommended)](#migrate-elasticsearch-to-v8-or-v9) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you run MongoDB in a standalone configuration: migrate to a replica set (a single-node replica set is acceptable)](#migrate-mongodb-to-a-replica-set-configuration) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you build and run GROWI from source: upgrade Node.js to v24 (not needed when you use the official Docker image)](#upgrade-node-js-to-v24) | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

#### Infrastructure and storage

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [If applicable] [When you use S3-compatible object storage: add s3:AbortMultipartUpload to the IAM policy](#add-s3-abortmultipartupload-to-the-iam-policy) | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you use the official Docker image: check the operational impact of the move to Docker Hardened Images (no shell or package manager included)](#check-the-operational-impact-of-docker-hardened-images) | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you use AWS S3: disable the bucket ACL, block public access, and review the S3_OBJECT_ACL environment variable](#review-the-aws-s3-bucket-acl-settings-and-s3-object-acl) | | | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When your system was built on v3.3 or earlier and uses MongoDB GridFS: rewrite legacy attachment URLs to the /attachment/{attachmentId} form](#rewrite-legacy-attachment-urls) | | | | | | ✓ | ✓ | ✓ | ✓ |

#### Environment variables and settings

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [If applicable] [For large environments with roughly more than 500 active users: consider raising the MongoDB connection pool limit](#raise-the-mongodb-connection-pool-limits) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When LOCAL_STRATEGY_ENABLED / SAML_ENABLED are set: check the actual enabled/disabled state of each authentication method at /login](#check-the-actual-state-of-local-strategy-enabled-and-saml-enabled) | | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When FILE_UPLOAD_DISABLED / DISABLE_LINK_SHARING are set: they have been removed, so replace them with the alternative settings](#migrate-away-from-the-removed-environment-variables-file-upload-disabled-and-disable-link-sharing) | | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you use the Custom HTML Header: migrate to Custom Noscript or to a custom script](#migrate-away-from-the-custom-html-header) | | | | | | | | ✓ | ✓ |
| [If applicable] [When you use Twitter OAuth 2 authentication: migrate to another authentication method](#migrate-from-twitter-oauth-2-authentication-to-another-authentication-method) | | | | | | | | ✓ | ✓ |
| [If applicable] [When you use the nocdn image: migrate to the consolidated official image](#migrate-from-the-nocdn-image-to-the-official-image) | | | | | | | | ✓ | ✓ |

#### Building from source

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [If applicable] [When you build from source yourself: adapt to the build tool changes (Lerna to Turborepo, yarn v1 to pnpm)](#adapt-to-the-build-tool-changes-when-building-from-source) | | | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

#### Removed features

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [If applicable] [When you use HackMD integration: migrate to simultaneous editing in the built-in editor and consider decommissioning the HackMD server](#migrate-from-hackmd-integration-to-simultaneous-editing-in-the-built-in-editor) | | | | | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you monitor GROWI with Promster: review your monitoring setup](#review-your-monitoring-setup-that-uses-promster) | | | | | ✓ | ✓ | ✓ | ✓ | ✓ |

#### Notifying your users

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [Required] [Notify users about the introduction of WIP pages, the change in the new page creation flow, and the change in how full-text search is invoked](#notify-users-about-wip-pages-and-ui-changes) | | | | | ✓ | ✓ | ✓ | ✓ | ✓ |
| [Required] [Notify users of the v5 specification changes (move / rename / delete including descendants, permalink URLs, UI changes)](#notify-users-of-the-v5-specification-changes) | | | | | | | | | ✓ |
| [If applicable] [Notify users that the syntax and HTML changes will alter how existing pages display and that page content needs to be rewritten](#rewrite-page-content-affected-by-the-syntax-and-html-changes) | | | | | ✓ | ✓ | ✓ | ✓ | ✓ |

### B-3. Upgrading GROWI to the latest version

After completing every task required before the upgrade, upgrade GROWI itself. Before upgrading, also take a backup of MongoDB ([MongoDB Backup & Restore](https://docs.growi.org/en/admin-guide/admin-cookbook/mongodb-backup.html)).

::: danger
Because of a serious bug in Revision (page edit history) data, **do not upgrade to v6.1.0 - v7.0.15; always upgrade directly to v7.4.0 or later**.
For details, see the Dev Wiki page [Revision data migration bug in v5.0.0 - v7.0.15](https://dev.growi.org/69301054963f68dfcf2b7111).
:::

#### Upgrading a docker-compose deployment

If you run GROWI with [growi-docker-compose](https://github.com/growilabs/growi-docker-compose), follow the steps below.

In the folder where you downloaded `growi-docker-compose`, stop the containers.

```bash
cd growi
docker-compose stop
```

Remove the existing Docker containers and Docker images. Replace the image tag (`growilabs/growi:7` in the example below) with the version you are running. If you are migrating Elasticsearch, also remove the docker volume that Elasticsearch was using, not just the container. If it remains, the old version's index data can cause startup to fail. You can find the volume name with `docker volume ls`; with the default compose setup it is `<folder name>_es_data`.

```bash
docker-compose rm app mongo elasticsearch
docker rmi growilabs/growi:7
```

Pull the latest version, build the Docker image, and start the containers. If you edited `docker-compose.yml` in B-2, `git pull` can conflict with those edits. Stash your changes with `git stash` before running `git pull`, restore them with `git stash pop`, and then check that the MongoDB and Elasticsearch version settings you decided on are still in place.

```bash
git pull
docker-compose build
docker-compose up -d
```

#### Upgrading a build-from-source deployment

If you fetch and build the source yourself, follow the flow below. For a concrete example of the steps, see the [GROWI section of Ubuntu Server](https://docs.growi.org/en/admin-guide/getting-started/ubuntu-server.html#growi) (the flow is the same on AlmaLinux OS and CentOS).

After stopping the GROWI server process, check the latest stable tag in the repository and switch to it.

```bash
$ git tag --sort=-version:refname | head -10
# Choose the latest stable tag without an RC suffix (for example, v8.0.0)
$ git checkout -b v8.0.0 refs/tags/v8.0.0
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

For automatic startup with systemd, see [Autostart using systemd](https://docs.growi.org/en/admin-guide/admin-cookbook/launch-with-systemd.html).

### B-4. Tasks to complete after upgrading

#### Reconfiguration

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [Required] [Rebuilding the full-text search index](#rebuilding-the-full-text-search-index) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you used the AI integration features: the legacy AI settings have been removed, so configure them again with the GROWI AI Agent method](#reconfigure-growi-ai-agent) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When LOCAL_STRATEGY_ENABLED / SAML_ENABLED are set: check again at /login that each authentication method is enabled or disabled as expected](#check-the-actual-state-of-local-strategy-enabled-and-saml-enabled) | | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [If applicable] [When you customized the XSS prevention settings: they are reset to the default at startup, so configure them again (the format for allowed attributes has changed to JSON)](#reconfigure-the-xss-prevention-settings) | | | | | | | | ✓ | ✓ |

#### Data and file migration

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [If applicable] [When you use FILE_UPLOAD=local: move the attachments to the new storage directory](#move-attachments-to-the-new-location-when-file-upload-local) | | | | | | | ✓ | ✓ | ✓ |
| [If applicable] [When unconverted pages created in v4.5 or earlier remain: convert them to the v5 Compatible Format (public pages can be converted in bulk from the admin page; legacy private pages are converted by each user)](#convert-unconverted-pages-to-the-v5-compatible-format) | | | | | | | | ✓ | ✓ |

#### Rewriting page content

| Task | v7.5.x | v7.2.x - v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x - v6.2.x | v6.0.x | v5.x | v4.x or earlier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [If applicable] [Rewrite existing page content affected by the syntax and HTML changes in bulk with the data-migrations scripts](#rewrite-page-content-affected-by-the-syntax-and-html-changes) | | | | | ✓ | ✓ | ✓ | ✓ | ✓ |

## C. Detailed procedures

These are the detailed steps for each task, linked from the A and B tables.

### Procedures to carry out before upgrading

#### Upgrade MongoDB to v6.0 or later

- **When to do this**: Before upgrading
- **Introduced in**: v7.1
- **When it applies**: When you use MongoDB v5.0 or earlier
- **References**: [v7.1.x](/en/admin-guide/upgrading/71x.html#for-admin), [Upgrading MongoDB](https://docs.growi.org/en/admin-guide/admin-cookbook/upgrade-mongodb.html)

1. Check the version of MongoDB you are running.
1. If it is older than v6.0, upgrade one major version at a time without skipping (for example, to go from v4.4 to v6.0, go through v5.0 first). For the steps, see [Upgrading MongoDB](https://docs.growi.org/en/admin-guide/admin-cookbook/upgrade-mongodb.html).
1. Support for MongoDB v4.4 and v5.0 has ended, so be sure to finish on v6.0 or later.

#### Notify users about WIP pages and UI changes

- **When to do this**: Before upgrading (notify users)
- **Introduced in**: v7.0
- **When it applies**: When upgrading from v6.3.x or earlier
- **References**: [v7.0.x](/en/admin-guide/upgrading/70x.html#for-user)

1. From v7.0, a page is saved as a WIP (Work In Progress) page such as "Untitled-1" as soon as the edit screen is opened (up to v6, no page data was created until you saved).
1. A newly created WIP page is deleted automatically after a certain period from creation (48 hours by default; configurable with the environment variable `WIP_PAGE_EXPIRATION_SECONDS`). Pages created from the page tree or from the new page creation modal are also covered. However, once a page has been updated at least once after creation (whether saved as WIP or saved normally), it is no longer subject to automatic deletion.
1. The new page creation button moves from the navbar at the top of the screen into the sidebar at the top left.
1. Where and how you invoke the full-text search feature changes.
1. Notify your users of these changes before upgrading.

#### Notify users of the v5 specification changes

- **When to do this**: Before upgrading (notify users)
- **Introduced in**: v5.0
- **When it applies**: When upgrading from v4.x or earlier
- **References**: [v5.0.x](/en/admin-guide/upgrading/50x.html)

1. In v5.0, the URL used when viewing and navigating pages changes from the page path to a permalink.
1. Moving, renaming, or deleting a parent page also affects the pages under it, regardless of whether the user can view them (pages set to "Anyone with the link" are excluded).
1. A page tree is added to the sidebar.
1. Icons that used to sit above the table of contents, such as Change Log, Attached Data, and Shared Link Management, move into the three dot leader dropdown.
1. An example announcement you can copy and use as-is is published in "Example of Well-known Content to Users" on [Upgrading GROWI to v5.0.x](/en/admin-guide/upgrading/50x.html#example-of-well-known-content-to-users).

#### Migrate Elasticsearch to v8 or v9

- **When to do this**: Before upgrading
- **Introduced in**: v8.0 (support for the Elasticsearch v7 series has ended)
- **When it applies**: When you use Elasticsearch v7 or earlier
- **References**: [v8.0.x](/en/admin-guide/upgrading/80x.html#for-administrators)

1. Check the major version of Elasticsearch you are running. GROWI v8.0.x supports only the v8 and v9 series (the default is v9).
1. If you use v7 or earlier, prepare a new Elasticsearch v8 or v9. We recommend creating a new index rather than carrying over the existing one. The steps are as follows (when using docker).
    1. Remove the Elasticsearch container you were using.
    1. Remove the docker volume that the Elasticsearch container used.
    1. Start the new Elasticsearch container (make sure no index data for GROWI exists).
    1. Start GROWI (after startup, you can rebuild the index from the Elasticsearch Management page).

    For an on-premises installation, uninstall the old version, install the new version from scratch, and likewise make sure that no index for GROWI exists before starting GROWI.
1. Set the environment variable `ELASTICSEARCH_VERSION` to the major version you connect to (`8` or `9`; the default is `9`).
1. If you start GROWI v8.0 or later while still on Elasticsearch v7, full-text search fails to initialize and becomes unavailable (the server process itself still starts, but an error is logged). Always migrate before upgrading.

#### Migrate MongoDB to a replica set configuration

- **When to do this**: Before upgrading
- **Introduced in**: v8.0
- **When it applies**: When you run MongoDB in a standalone configuration (required from GROWI v8.0)
- **References**: [v8.0.x](/en/admin-guide/upgrading/80x.html#for-administrators)

1. Check whether your current MongoDB runs as a standalone instance or as a replica set.
1. From v8.0, GROWI uses MongoDB change streams, so a replica set is required. Change streams are only available on a replica set.
1. If you run a standalone configuration, migrate to a replica set. A single-node replica set is acceptable.
1. If you use [growi-docker-compose](https://github.com/growilabs/growi-docker-compose), the latest `docker-compose.yml` in that repository already starts MongoDB as a replica set (`rs0`). Pull the latest version.

#### Raise the MongoDB connection pool limits

- **When to do this**: Before upgrading
- **Introduced in**: v8.0
- **When it applies**: For large environments with many active users (roughly more than 500)
- **References**: [v8.0.x](/en/admin-guide/upgrading/80x.html#for-administrators), [Environment Variables](https://docs.growi.org/en/admin-guide/admin-cookbook/env-vars.html)

1. From GROWI v8.0, the default upper limit of the MongoDB connection pool is reduced compared with previous versions.
1. In large environments with many active users, many pages, or high access frequency, the default may be insufficient.
1. If that applies to you, raise the upper and lower limits with the following environment variables.

    | Environment variable | Description | Default |
    | --- | --- | --- |
    | `MONGO_MAX_POOL_SIZE` | Maximum number of connections in the MongoDB connection pool | `15` |
    | `MONGO_MIN_POOL_SIZE` | Minimum number of connections in the MongoDB connection pool | `2` |

#### Upgrade Node.js to v24

- **When to do this**: Before upgrading
- **Introduced in**: v7.5 (the only supported Node.js series is now v24)
- **When it applies**: When you build and run GROWI from source (not needed when you use the official Docker image)
- **References**: [v7.5.x](/en/admin-guide/upgrading/75x.html#for-administrators)

1. From GROWI v7.5.0 onward, the only supported Node.js series is v24. Support for the v18 and v20 series has ended.
1. Check the version of Node.js you are running.

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

#### Add s3:AbortMultipartUpload to the IAM policy

- **When to do this**: Before upgrading
- **Introduced in**: v7.5
- **When it applies**: When you use S3-compatible object storage (on GROWI.cloud, when you specify Owned AWS as the file storage destination)
- **References**: [v7.5.x](/en/admin-guide/upgrading/75x.html#for-administrators)

1. From v7.5.x, the upload method to S3 changes from a single PutObject to multipart upload (files of 5 MB or smaller fall back to PutObject).
1. Add the `s3:AbortMultipartUpload` permission to your IAM policy.
1. `CreateMultipartUpload`, `CompleteMultipartUpload`, and `UploadPart` are included in `s3:PutObject` in IAM, so `s3:AbortMultipartUpload` is the only permission you need to add.

#### Check the operational impact of Docker Hardened Images

- **When to do this**: Before upgrading
- **Introduced in**: v7.5
- **When it applies**: When you use the official Docker image
- **References**: [v7.5.x](/en/admin-guide/upgrading/75x.html#for-administrators)

1. From v7.5.x, the base image of the official Docker image changes to a [Docker Hardened Image (DHI)](https://www.docker.com/products/hardened-images/). A DHI does not include a shell (`sh`, `bash`) or a package manager.
1. Check whether your operations rely on entering the container interactively with `docker exec`.
1. If you customize the official image (installing additional packages, using your own entry point, and so on), verify before upgrading that it still works on a DHI.

#### Check the actual state of LOCAL_STRATEGY_ENABLED and SAML_ENABLED

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

On GROWI.cloud, you cannot remove environment variables or operate on the database yourself. If what you see at `/login` differs from what you expect, please contact us through the [inquiry page](https://growicloud.atlassian.net/servicedesk/customer/portal/1).

After upgrading:

1. Access `/login` again and confirm that ID/Pass authentication and SAML authentication are enabled or disabled as you expect.

#### Migrate away from the removed environment variables FILE_UPLOAD_DISABLED and DISABLE_LINK_SHARING

- **When to do this**: Before upgrading
- **Introduced in**: v7.2
- **When it applies**: When you set the environment variable `FILE_UPLOAD_DISABLED` or `DISABLE_LINK_SHARING`
- **References**: [v7.2.x](/en/admin-guide/upgrading/72x.html#for-admin)

1. The environment variable `FILE_UPLOAD_DISABLED` (disabling the file upload feature) has been removed. Set the environment variable `FILE_UPLOAD` to `none` instead.
1. The environment variable `DISABLE_LINK_SHARING` (disabling the share link feature) has been removed. Disable the share link feature from "Security settings" in the admin panel instead.

#### Review the AWS S3 bucket ACL settings and S3_OBJECT_ACL

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

#### Adapt to the build tool changes when building from source

- **When to do this**: Before upgrading
- **Introduced in**: v6.1 (Lerna to Turborepo), v7.1 (yarn to pnpm)
- **When it applies**: When you build from source yourself (not needed when you use the official Docker image)
- **References**: [v6.1.x](/en/admin-guide/upgrading/61x.html#for-admin), [v7.1.x](/en/admin-guide/upgrading/71x.html#for-admin)

1. From v7.1, the package manager and task runner change from yarn (v1) to pnpm. GROWI v8.0.0 declares `packageManager: pnpm@11.1.1`, so install the latest version, referring to the [pnpm official site](https://pnpm.io/installation).

    ```bash
    $ curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sudo sh -
    $ sudo pnpm setup
    ```

1. From v6.1, the build tool changes from Lerna to [Turborepo](https://turbo.build/repo). GROWI v8.0.0 includes `turbo` in its devDependencies, so it is installed automatically when you run `pnpm install`; a separate global install is not needed.
1. Check the versions you installed.

    ```bash
    $ node -v
    $ pnpm -v
    ```

1. If you ran npm scripts with the `yarn` command, change those commands to `pnpm run` or `npm run`.

#### Migrate from HackMD integration to simultaneous editing in the built-in editor

- **When to do this**: Before upgrading
- **Introduced in**: v7.0
- **When it applies**: When you use HackMD(CodiMD) integration
- **References**: [v7.0.x](/en/admin-guide/upgrading/70x.html#for-admin), [HackMD(CodiMD) Integration](https://docs.growi.org/en/admin-guide/admin-cookbook/integrate-with-hackmd.html)

1. From v7.0, the HackMD integration for simultaneous editing by multiple people is removed.
1. Use simultaneous editing in the built-in editor instead. No additional setup is required on the user side.
1. Consider decommissioning (stopping and removing) the HackMD(CodiMD) server you were running.
1. On GROWI.cloud, you do not need to decommission a HackMD server. However, HackMD becomes unavailable after the upgrade, so tell your users in advance to save any content that exists only in HackMD to a GROWI page ([Simultaneous editing (HackMD)](https://growi.cloud/help/en/cloud/hackmd.html)).

#### Review your monitoring setup that uses Promster

- **When to do this**: Before upgrading
- **Introduced in**: v7.0
- **When it applies**: When you monitor GROWI with Promster integration
- **References**: [v7.0.x](/en/admin-guide/upgrading/70x.html#for-admin)

1. From v7.0, the feature that integrates with Promster is removed.
1. If you monitor GROWI through Promster, review your monitoring setup before upgrading.

#### Rewrite page content affected by the syntax and HTML changes

- **When to do this**: Before upgrading (notify users) and after upgrading (bulk rewrite of page content)
- **Introduced in**: v6.0 (syntax changes), v6.1 (removal of the `mdcont-` prefix), v7.0 (Bootstrap v4 to v5)
- **When it applies**: When you use v6.3.x or earlier
- **References**: [v6.0.x](/en/admin-guide/upgrading/60x.html#for-user), [v6.1.x](/en/admin-guide/upgrading/61x.html#for-user), [v7.0.x](/en/admin-guide/upgrading/70x.html#for-admin)

From v6.0 through v7.0, Markdown syntax and its rendered output changed as shown below. Only the changes introduced after the version you currently run apply to you.

| Version introduced | What changed | Details | `MIGRATION_MODULE` |
| :--- | :--- | :--- | :--- |
| v6.0 | Draw.io, PlantUML, drawing tables with CSV and TSV, the format of GROWI plugin syntax such as `$lsx()` (indentation, surrounding blank lines, and parentheses in arguments), math (from MathJax to KaTeX), presentation page breaks, the inline footnote syntax (removed), GROWI's own page link notation (removed) | [Upgrading GROWI to v6.0.x](/en/admin-guide/upgrading/60x.html#for-user) | `v60x` |
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

::: tip If you use GROWI.cloud
You cannot run the bulk rewrite of page content with `bin/data-migrations` yourself in a GROWI.cloud environment. If you would like it to be run, please contact us through the [inquiry page](https://growicloud.atlassian.net/servicedesk/customer/portal/1). No script is provided for math, presentation page breaks, or the inline footnote syntax, so those need to be rewritten manually.
:::

#### Rewrite legacy attachment URLs

- **When to do this**: Before upgrading
- **Introduced in**: v6.3
- **When it applies**: When your system was built on v3.3 or earlier and manages attachments with MongoDB GridFS
- **References**: [v6.3.x](/en/admin-guide/upgrading/63x.html)

1. In v6.3.x, the legacy endpoint for MongoDB GridFS (`/attachment/{pageID}/{fileName}`) is removed.
1. Check whether any pages contain URLs in that form in their Markdown.
1. Rewrite the relevant URLs to the `/attachment/{attachmentId}` form, or upload the files again.

#### Migrate away from the Custom HTML Header

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

#### Migrate from Twitter OAuth 2 authentication to another authentication method

- **When to do this**: Before upgrading
- **Introduced in**: v6.0
- **When it applies**: When you use Twitter OAuth 2 authentication
- **References**: [v6.0.x](/en/admin-guide/upgrading/60x.html#for-admin)

1. From v6.0, the authentication mechanism that uses Twitter is removed.
1. Before upgrading, switch to another authentication method such as ID/Pass authentication or SAML authentication.

#### Migrate from the nocdn image to the official image

- **When to do this**: Before upgrading
- **Introduced in**: v6.0
- **When it applies**: When you use the nocdn Docker image
- **References**: [v6.0.x](/en/admin-guide/upgrading/60x.html#for-admin)

1. From v6.0, the official container images, which used to be split into a default build and a nocdn build, are consolidated into one.
1. If you use the nocdn build, migrate to the consolidated official image.

### Procedures to carry out after upgrading

#### Rebuilding the full-text search index

- **When to do this**: After upgrading
- **Introduced in**: Not tied to a specific version
- **When it applies**: Any environment where you upgraded GROWI itself
- **References**: [Setup of Full Text Search and Audit Log Index Management](/en/admin-guide/management-cookbook/setup-search-system.html)

1. After upgrading GROWI itself, rebuild the index from the **Elasticsearch Management** page of the admin panel (`/admin/search`; this is the name shown in the sidebar, formerly "Full Text Search Management"). Use the **Rebuild page data index** button in the "Page Data Management" section.
1. If the index is shown as corrupted, you can normalize it.
1. If you have enabled the Audit Log feature, you can also manage the audit log index in the "Audit Log Index Management" section of the same page.

#### Reconfigure GROWI AI Agent

- **When to do this**: After upgrading
- **Introduced in**: v8.0
- **When it applies**: When you used the legacy AI integration features (creating knowledge assistants, the editor assistant)
- **References**: [v8.0.x](/en/admin-guide/upgrading/80x.html#for-administrators), [Setting up and managing GROWI AI Agent](/en/admin-guide/management-cookbook/growi-ai-agent.html)

1. In GROWI v8.0, the legacy AI integration settings are removed. Because the old settings are not migrated automatically, the feature does not work after the upgrade unless you configure it again.
1. Turning on "Enable AI features" in "AI settings" (`/admin/ai`) in the admin panel is not enough by itself. It only works once you have also enabled a provider, set its API key, registered a model, and chosen a default model.
1. For the detailed configuration steps, see [Setting up and managing GROWI AI Agent](/en/admin-guide/management-cookbook/growi-ai-agent.html).

#### Move attachments to the new location when FILE_UPLOAD=local

- **When to do this**: After upgrading
- **Introduced in**: v6.1
- **When it applies**: When you use the environment variable `FILE_UPLOAD=local` (storing attachments on the local file system)
- **References**: [v6.1.x](/en/admin-guide/upgrading/61x.html#for-admin)

1. Because the location of the `app` package changed in v6.1, the location where files are stored changes as follows.

    | Before | | After |
    | :-: | :-: | :-: |
    | `/opt/growi/packages/app/public` | -> | `/opt/growi/apps/app/public` |

1. After upgrading, move the existing files to the new location. Related discussion: <https://github.com/growilabs/growi/discussions/6086>

#### Reconfigure the XSS prevention settings

- **When to do this**: After upgrading
- **Introduced in**: v6.0
- **When it applies**: When you configured your own custom whitelist in the XSS prevention settings
- **References**: [v6.0.x](/en/admin-guide/upgrading/60x.html#for-admin), [Markdown Settings](/en/admin-guide/management-cookbook/markdown.html#prevent-xss-cross-site-scripting-setting)

1. From v6.0, the XSS prevention settings are reset at startup to the state where "Recommended settings" is selected, and the previous settings are not carried over.
1. The "Remove All Tags" mode has been removed and can no longer be selected.
1. If you used a custom whitelist, configure it again from the Markdown settings (`/admin/markdown`) in the admin panel. For the input format, see [Markdown Settings](/en/admin-guide/management-cookbook/markdown.html#prevent-xss-cross-site-scripting-setting).
1. **In GROWI v6.0.0 - v7.0.11, the values you enter in the custom whitelist are not applied correctly.** The bug itself exists from v6.0.0, but the symptom surfaces from v7.0.10 onward, where HTML tags in Markdown can no longer be rendered correctly. If this applies to you, take one of the following measures.
    - Use the recommended settings
    - Upgrade to v7.0.12 or later, select the custom whitelist, import the values of the recommended settings for both tag names and tag attributes, and change the settings based on them

#### Convert unconverted pages to the v5 Compatible Format

- **When to do this**: After upgrading
- **Introduced in**: v5.0
- **When it applies**: When unconverted pages created in v4.5 or earlier remain
- **References**: [v5.0.x](/en/admin-guide/upgrading/50x.html)

1. Pages created up to v4.5 are not converted automatically to the new v5 Compatible Format, even in v5.0 or later.
1. Public pages can be converted in bulk from the admin page.
1. Private pages are converted from the "Old Format Private Pages" link (`/_private-legacy-pages`) at the bottom of the page tree, by selecting the target pages from the list of pages you can view and using the "Bulk Conversion" dropdown.
1. The behavior changes before and after conversion as follows.

    |  | Data created in v4.5 or earlier | Data in the new v5 Compatible Format |
    | --- | :---: | :---: |
    | **Display in the page tree** | Not displayed | Displayed |
    | **Move / delete including descendant pages** | Only the pages you can view are processed | All pages under it are processed (limited to pages in the new v5 Compatible Format) |
    | **Viewing permissions that can be set on descendant pages** | All kinds of permissions can be set | Only permissions narrower than those of the parent page can be set |

1. Check the relevant part of [Upgrading GROWI to v5.0.x](/en/admin-guide/upgrading/50x.html) in advance.
