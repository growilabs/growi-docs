# Migrate from bakudankun/crowi

## Overview

- Assuming to migrate from [Crowi docker image + [bakudankun/crowi](https://github.com/crowi/docker-crowi)] to [weseek/growi-docker-compose](https://github.com/growilabs/growi-docker-compose).
- Migrate the following data.
    - MongoDB container's data volume
    - Uploaded file data from the App container

## Preparation

1. Have Crowi and GROWI contaienr running.
    * Hypothetically, each app container and data volume is called as below (change the name according to your environment).

        ||Crowi|GROWI|
        |---|---|---|
        |App Container|crowi_crowi_1|growi_app_1|
        |App Container Data Volume|crowi_crowi_data|growi_growi_data|
        |MongoDB Container|crowi_mongo_1|growi_mongo_1|

## Extract PASSWORD_SEED

- If PASSWORD_SEED was set in [bakudankun/crowi](https://github.com/crowi/docker-crowi) environment variables, extract and reuse the seed in GROWI.
- If not, extract and reuse the auto-generated seed in the data volume.

    ```bash
    (TBD)
    ```

## Migrate DB

1. Backup DB data from Crowi with mongodump.

    ```bash
    docker run -it --rm --link crowi_mongo_1 --network crowi_default --volume $(pwd):/backup mongo bash
    mongodump --host crowi_mongo_1 --db crowi --out /backup
    ```

2. Restore the backup to GROWI.

    ```bash
    docker run -it --rm --link growi_mongo_1 --network growi_default  --volume $(pwd):/backup mongo bash
    mongorestore -v --host growi_mongo_1 --db growi backup/crowi
    ```

    [TBC] Unique Constraint might fail.

3. Set `PASSWORD_SEED`
    - In `docker-compose.yml`, set `PASSWORD_SEED` to the extracted `PASSWORD_SEED`.

3. Restart GROWI.


## Migrate Uploaded File Data

**If files are to be uploaded to AWS S3, skipped the following steps.**

- By default, [bakudankun/crowi](https://github.com/crowi/docker-crowi) saves uploaded files to local file system(`FILE_UPLOAD=local`).
- In order to save uploaded files to local file system set `FILE_UPLOAD=local` (in `docker-compose.yml`).

1. Backup uploaded files from Crowi.

    ```bash
    docker run --rm -v crowi_crowi_data:/data -v $(pwd):/backup bakudankun/crowi cp -rp /data /backup
    ```

2. Restore the backup to GROWI.

    ```bash
    docker run --rm -v crowiplus_crowi_data:/data -v $(pwd):/backup growi_app_1 cp -rp /backup/uploads /data/
    ```
