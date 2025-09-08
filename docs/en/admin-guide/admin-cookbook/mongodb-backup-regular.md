# MongoDB Auto Backup

[[toc]]

## Overview

This chapter introduces how to set up auto backup for GROWI data using [weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup).

#### Requirements

* Docker
* AWS S3 bucket to upload backup files
  * Access key and secret key for a user authorized to access S3 bucket.

::: tip
See [MongoDB Backup & Restore](/en/admin-guide/admin-cookbook/mongodb-backup.html) before you start.

:::

## Manage with a Container

1. Start a container with CRONMODE `true`.

    ```bash
    docker run --rm \
      -e MONGODB_HOST=<Target MongoDB Host> \
      -e AWS_ACCESS_KEY_ID=<Your IAM Access Key ID> \
      -e AWS_SECRET_ACCESS_KEY=<Your IAM Secret Access Key> \
      -e S3_TARGET_BUCKET_URL=<Target S3 Bucket URL (s3://...)> \
      -e CRONMODE=true \
      -e "CRON_EXPRESSION=0 4 * * *" \
      weseek/mongodb-awesome-backup
    ```

2. The container backs up all databases in the target MongoDB server at 4:00 AM everyday.

#### Backup Version Control

* (TBD: Looking for a contributor)

::: tip
See [weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) for more options.
:::

## Manage with docker-compose

::: tip
If GROWI is installed with [growi-docker-compose](/en/admin-guide/getting-started/docker-compose.html), preparing a backup container is even easier.
:::

* Refer to growilabs/growi-docker-compose [Example](https://github.com/growilabs/growi-docker-compose/tree/master/examples/backup-mongodb-data), and follow the steps below.

1. clone

    ```bash
    git clone https://github.com/growilabs/growi-docker-compose.git growi
    cd growi
    ```

2. Copy `docker-compose.override.yml` to the root directory.

    ```bash
    cp -p examples/backup-mongodb-data/docker-compose.override.yml .
    ```

3. Edit `docker-compose.override.yml` and enter an appropriate value for `CRON_EXPRESSION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `S3_TARGET_BUCKET_URL`.

    ```yaml
    ...
    environment:
      - CRONMODE=true
      - CRON_EXPRESSION=0 4 * * *
      - AWS_ACCESS_KEY_ID=${Your IAM Access Key ID}
      - AWS_SECRET_ACCESS_KEY=${Your IAM Secret Access Key}
      - S3_TARGET_BUCKET_URL=s3://${Your Bucket Name}/
    ...
    ```

4. ```bash
   docker-compose up
   ```

## Manage with Google Cloud Platform

* (TBD: Looking for a contributor)
