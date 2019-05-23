# Backup & Restore MongoDB

[[toc]]

## Assumption

* Required to use [weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup)

### Prerequisites

* Docker
* AWS S3 bucket to upload backup files
  * Access key and secret key for a user authorized to access S3 bucket.

## Before You Start

To backup/restore MongoDBs, [weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) creates a temporary container that executes shell scripts. In order to access the MongoDB server from the temporary container, add the docker command option below.

### If MongoDB Is Running as a Docker Container

Run a command to find out the container name, and add an option `--link ${container}:mongo` with the container name \(`${container}`\).

#### e.g.

Use `docker ps` to find out the container name.

```bash
vagrant@ubuntu-xenial:/etc/docker-compose$ sudo docker ps
CONTAINER ID        IMAGE                           COMMAND                  CREATED             STATUS                   PORTS               NAMES
21a10f879cba        mongo                           "docker-entrypoint.s…"   11 minutes ago      Up 11 minutes            27017/tcp           serene_swartz
man
```

The command above shows the container name is `serene_swartzman`, therefore the option is `--link serene_swartz:mongo`.

### If MongoDB Is NOT Running as a Docker Container

#### If Docker Host is Linux

Add `--network host` to use the same network with the host.

#### For Docker for Mac

(TBD: Looking for a writer)

#### For Docker for Windows

(TBD: Looking for a writer)

## How to Backup

1. Run [weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) container with \(`--rm`\) flag
    ```bash
    docker run --rm \
      -e MONGODB_HOST=<Target MongoDB Host> \
      -e AWS_ACCESS_KEY_ID=<Your IAM Access Key ID> \
      -e AWS_SECRET_ACCESS_KEY=<Your IAM Secret Access Key> \
      -e S3_TARGET_BUCKET_URL=<Target S3 Bucket URL (s3://...)> \
      weseek/mongodb-awesome-backup
    ```
2. The command grabs data from all databases in the target MongoDB server, and upload it as `backup-YYYYMMdd.tar.bz2` in the S3 bucket 

::: tip
See [weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) for more options
:::

## How to Restore

1. Run [weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) container with \(`--rm`\) flag
    ```bash
    docker run --rm \
      -e MONGODB_HOST=<Target MongoDB Host> \
      -e AWS_ACCESS_KEY_ID=<Your IAM Access Key ID> \
      -e AWS_SECRET_ACCESS_KEY=<Your IAM Secret Access Key> \
      -e S3_TARGET_BUCKET_URL=<Target S3 Bucket URL (s3://...)> \
      -e S3_TARGET_FILE=backup-YYYYMMdd.tar.bz2 \
      weseek/mongodb-awesome-backup restore
    ```
2. The command restores the specified file \(`backup-YYYYMMdd.tar.bz2` in the example above \) in the S3 bucket
3. Restart GROWI

::: tip
See [weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) for more options
:::
