---
title: Migration Guide to the Latest Version of GROWI
---

# Migration Guide to the Latest Version of GROWI
This guide is for everyone running an older version of GROWI. It provides a cross-cutting overview of **how to update to the latest version of GROWI (v7.5.x as of June 2026)**.

The latest series receives continuous improvements in features, performance, and security, and its supported runtime environments are kept up to date.
To help you keep using GROWI safely, the development team strongly recommends updating to the latest version.

The specific changes in each minor version are also documented on the individual upgrade pages. This page focuses on the tasks you need to perform, the items you need to check, and the points to note when updating to the latest version in a single step.

## Table of Contents

[[toc]]

## 1. Check your current version
Check the GROWI version you are currently running, and proceed from the section that matches your series.
Before upgrading, always take a backup of MongoDB.

Reference: [Backing up / restoring MongoDB](https://docs.growi.org/en/admin-guide/admin-cookbook/mongodb-backup.html)


| Current version | Section to go to | Migration point |
| :--- | :--- | :--- |
| v4.x or earlier | [2. Upgrading to GROWI v5.0.11](#_2-upgrading-to-growi-v5-0-11-for-v4-x-or-earlier) | First upgrade to v5.0.11 and convert to the v5 Compatible Format, then proceed to sections 3 and 4 |
| v5.x | [If you are running v5.x](#if-you-are-running-v5-x) | Check the runtime and settings, then move to the latest version |
| v6.0.x | [If you are running v6.0.x](#if-you-are-running-v6-0-x) | Node.js and Elasticsearch need updating |
| v6.1.x – v6.2.x | [If you are running v6.1.x – v6.2.x](#if-you-are-running-v6-1-x-v6-2-x) | Generally no required environment changes (check GridFS if built on v3.3 or earlier) |
| v6.3.x | [If you are running v6.3.x](#if-you-are-running-v6-3-x) | Node.js needs updating |
| v7.0.x | [If you are running v7.0.x](#if-you-are-running-v7-0-x) | MongoDB needs updating |
| v7.1.x | [If you are running v7.1.x](#if-you-are-running-v7-1-x) | Check authentication- and S3-related settings |
| v7.2.x – v7.4.x | [If you are running v7.2.x – v7.4.x](#if-you-are-running-v7-2-x-v7-4-x) | A normal upgrade |

## 2. Upgrading to GROWI v5.0.11 (for v4.x or earlier)
### Upgrade Elasticsearch to 7.x and rebuild the index
- If you use Elasticsearch, you first need to upgrade **Elasticsearch 6 → 7**.
- Elasticsearch 6.x and 7.x are officially said to have index compatibility, but to avoid trouble when using them with GROWI, we recommend deleting all existing index data and rebuilding the index.
  - [Upgrading GROWI to v5.0.x / Elasticsearch 7.x Support](/en/admin-guide/upgrading/50x.html#elasticsearch-7-x-support)

### Upgrade GROWI itself to v5.0.11
- Following the [Upgrading GROWI to v5.0.x](/en/admin-guide/upgrading/50x.html) guide, upgrade GROWI itself to **v5.0.11**.

### Convert page data to the v5 Compatible Format
- After upgrading to v5.0.x, you need to **convert page data to the v5 Compatible Format**.
- For the procedure and scope of impact, see [Upgrading GROWI to v5.0.x / About The New v5 Compatible Format](/en/admin-guide/upgrading/50x.html#about-the-new-v5-compatible-format).

## 3. Upgrades and configuration changes outside GROWI itself (for v5.x and later)

Before upgrading to the latest version in a single step, you need to complete the **runtime (middleware) updates and the environment-variable / infrastructure configuration changes** required between your version and the latest one. GROWI runs database migrations automatically at startup, but the "outside GROWI itself" tasks listed here are not performed automatically.

Start from the entry for the version you are currently running, and **review and apply every entry below it (toward the newer versions) in order**. For the details and background of each change, see the "For Admin" section of the individual upgrade guide linked in each entry. For the list of environment variables, see [Environment Variables](/en/admin-guide/admin-cookbook/env-vars.html).

### If you are running v5.x
Reference: [Upgrading to GROWI v6.0.x / For Admin](/en/admin-guide/upgrading/60x.html#for-admin)

There are no changes to the middleware version requirements. However, the following admin-panel and authentication settings are not carried over automatically, so address them if they apply to you.

- [If applicable] **XSS (Cross-Site Scripting) protection settings**: Previous settings are not carried over and are reset to the default (ON, with the "Recommended settings" selected) at startup. If you had registered your own tags / attributes in the allowlist, configure them again (the format for allowed attributes has changed to JSON).
- [If applicable] **Removal of the Custom HTML Header**: The feature for inserting arbitrary strings / tags into the `head` tag has been removed. If you were using it, migrate to the newly added "Custom Noscript" or to a custom script.
- [If applicable] **Removal of Twitter OAuth 2 authentication**: If you were using it, migrate to a different authentication method.
- [If applicable] **Discontinuation of the nocdn build**: If you were routinely running the nocdn build (which avoids the CDN), note that the official image has been consolidated into a single build that minimizes CDN usage.

### If you are running v6.0.x
Reference: [Upgrading to GROWI v6.1.x / For Admin](/en/admin-guide/upgrading/61x.html#for-admin)

- [Required] Upgrade **Node.js** to v18 (no impact if you use the official Docker image).
- [Required] Upgrade **Elasticsearch** to v8.
- [If applicable] **When `FILE_UPLOAD=local` (attachments stored on the local file system)**: The storage location has changed from `/opt/growi/packages/app/public` to `/opt/growi/apps/app/public`. Move existing files after upgrading (not needed when using AWS S3, GCP GCS, or MongoDB GridFS).
- [If applicable] **When you build from source yourself**: The build tool has changed from Lerna to Turborepo (a global install is required via `yarn global add turbo`; not needed when using the official Docker image).

### If you are running v6.1.x – v6.2.x
Reference: [Upgrading to GROWI v6.3.x](/en/admin-guide/upgrading/63x.html)

- There are no required middleware or environment-variable changes.
- [If applicable] **Systems built on GROWI v3.3 or earlier that manage attachments with MongoDB GridFS**: The endpoint in the form `/attachment/{pageID}/{fileName}` has been removed. Rewrite pages that contain such URLs to the `/attachment/{attachmentId}` form, or re-upload the files.

### If you are running v6.3.x
Reference: [Upgrading to GROWI v7.0.x / For Admin](/en/admin-guide/upgrading/70x.html#for-admin)

- [Required] Upgrade **Node.js** to v18 or v20 (no impact if you use the official Docker image).
- [If applicable] **Removal of HackMD integration**: The feature for simultaneous editing by multiple people via HackMD integration has been removed (replaced by the built-in editor in v7). Consider decommissioning your HackMD server.
- [If applicable] **Removal of Promster integration**: If you were monitoring with Promster, review your monitoring setup.
- Note that the frontend framework Bootstrap has been updated from v4.6 to v5.3, which affects HTML tags written with Bootstrap notation in Markdown (you need to notify your users).

### If you are running v7.0.x
Reference: [Upgrading to GROWI v7.1.x / For Admin](/en/admin-guide/upgrading/71x.html#for-admin)

- [Required] Upgrade **MongoDB** to v6.0 or later.
- [If applicable] **When you store files in AWS S3**: An object ACL (`public-read`) is no longer attached on upload. Following AWS best practices, we recommend disabling the S3 bucket ACL and blocking public access. If you have set the environment variable `S3_OBJECT_ACL=public-read`, change it to `private` or remove it (leave it as `public-read` only if you keep operating as before without changing the bucket settings).
- [If applicable] **When you build from source yourself**: The package manager and task runner have changed from yarn (v1) to pnpm (v9.4 or later) (not needed when using the official Docker image).

### If you are running v7.1.x
Reference: [Upgrading to GROWI v7.2.x / For Admin](/en/admin-guide/upgrading/72x.html#for-admin)

- [If applicable] **When you use ID/Pass authentication or SAML authentication**: The logic that determines whether they are enabled or disabled has changed. If you have set the environment variables `LOCAL_STRATEGY_ENABLED` / `SAML_ENABLED`, access `/login` in a private browser before and after upgrading and confirm that the actual enabled/disabled state matches your expectation. If it differs, align the state by either "giving priority to the DB value (remove the environment variable)" or "giving priority to the environment variable (delete the relevant config in the DB)".
- [If applicable] **Removed environment variables**: `FILE_UPLOAD_DISABLED` (replacement: `FILE_UPLOAD=none`) and `DISABLE_LINK_SHARING` (replacement: the admin panel "Security settings") have been removed. If you have set them, migrate to the replacements.
- [Optional] **OpenTelemetry**: From v7.2.9, sending telemetry data is enabled by default. If you do not want to send it, or want to change the destination to your own organization's collector, see [Telemetry](/en/admin-guide/admin-cookbook/telemetry.html).

### If you are running v7.2.x – v7.4.x
Reference: [Upgrading to GROWI v7.5.x / For Administrators](/en/admin-guide/upgrading/75x.html#for-administrators)

- [If applicable] **When you use S3-compatible object storage**: The upload method has changed to multipart upload. Add the `s3:AbortMultipartUpload` permission to your IAM policy (`CreateMultipartUpload`, `CompleteMultipartUpload`, and `UploadPart` are included in `s3:PutObject`, so they do not need to be added).
- [If applicable] **When you use the official Docker image**: The base image has changed to a Docker Hardened Image (DHI), which does not include a shell (`sh`, `bash`) or a package manager. Interactive debugging via `docker exec`, operations that assume in-container shell access or installing extra packages, and custom entry points or derived images are all affected, so verify that they work before upgrading.

## 4. Upgrade GROWI to the latest version
- Following the [Upgrading to GROWI v7.5.x](/en/admin-guide/upgrading/75x.html) guide, upgrade **directly to the latest version**.

::: danger
Because of a serious bug in Revision (page edit history) data, **do not upgrade to v6.1.0–v7.0.15; always upgrade directly to v7.4.0 or later**. For details, see the Dev Wiki page [Revision data migration bug in v5.0.0–v7.0.15](https://dev.growi.org/69301054963f68dfcf2b7111).
:::
