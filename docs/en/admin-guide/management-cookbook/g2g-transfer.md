# GROWI data transfer feature

## Overview

This feature allows for easy data transfer from one GROWI to another.

## Introduction

The following conditions must be met:

- Both GROWI versions of the destination and source GROWI must match.
- **v6 or higher and the same version**.
- If the environment variable `USER_UPPER_LIMIT` is set, the destination USER_UPPER_LIMIT must be greater than the source USER_UPPER_LIMIT.

## Transfer flow

The data transfer process is as follows:

1. <Badge text="to" vertical='middle'/> Publish a transfer key for authentication with the destination GROWI.
1. <Badge text="from" vertical='middle' type="warning"/> Enter the transfer key in the source GROWI and click the Start transfer button.

Each step is explained in detail below.

## <Badge text="to" vertical='middle'/>  Operations on the destination GROWI

### Publish transfer key

- You can publish a transfer key regardless of whether GROWI is installed or not.
  - If installed, publish the transfer key from the admin page.

<img :src="$withBase('/assets/images/en/g2g-transfer-1.png')" alt="g2g-transfer-1">

- If not installed, publish the transfer key from the installer screen.

<img :src="$withBase('/assets/images/en/g2g-transfer-2.png')" alt="g2g-transfer-2">

### Transfer key expiration

- The transfer key is valid for 1 hour.
- A transfer key can only be used once for transfer and cannot be reused.

## <Badge text="from" vertical='middle' type="warning"/> Operations on the source GROWI

### Inputting the transfer key and starting the transfer

- Enter the transfer key and click the start transfer button to start the transfer.

<img :src="$withBase('/assets/images/en/g2g-transfer-3.png')" alt="g2g-transfer-3">


### Select the collections and advanced options to be transferred

- By clicking the Advanced options button, you can configure which collections to transfer and adjust detailed settings for each collection.
- By default, all collections are transferd, and the contents of the source and destination databases will be the same.
- If duplicate data exists, it will be overwritten with the source data. However, the Config collection will be handled with a `Flush and insert` operation.

<img :src="$withBase('/assets/images/en/g2g-transfer-4.png')" alt="g2g-transfer-4">

## File upload settings for the destination

As of v6.0.5, the settings of **the destination** are used as they are.

::: tip
In a future update, the source's file upload settings will be selectable, and it will be possible to overwrite the destination's settings.
:::

## Transferability of attached files

| from/to      | Local                       | AWS(S3)                                         | GCP(GCS)                                            | Azure(Blob)                                      | MongoDB(GridFS)                      | 未設定(none)                               |
| :----------: | :-------------------------- | :------------------------------------------------- | :------------------------------------------------- | :------------------------------------------------- | :--------------------------- | :------------------------------------------ |
| Local        | :white_check_mark: Transfer | :white_check_mark: Transfer                        | :white_check_mark: Transfer                        | :white_check_mark: Transfer                        | :white_check_mark: Transfer | :x: Cannot transfer  |
| Cloud(S3)    | :white_check_mark: Transfer | :triangular_flag_on_post: Transfer if settings differ  | :white_check_mark: Transfer                       | :white_check_mark: Transfer                        | :white_check_mark: Transfer | :x: Cannot transfer  |
| Cloud(GCS)   | :white_check_mark: Transfer | :white_check_mark: Transfer                        | :triangular_flag_on_post: Transfer if settings differ | :white_check_mark: Transfer                        | :white_check_mark: Transfer | :x: Cannot transfer  |
| Cloud(Azure) | :white_check_mark: Transfer | :white_check_mark: Transfer                        | :white_check_mark: Transfer                        | :triangular_flag_on_post: Transfer if settings differ | :white_check_mark: Transfer | :x: Cannot transfer  |
| GridFS       | :white_check_mark: Transfer | :white_check_mark: Transfer                        | :white_check_mark: Transfer                        | :white_check_mark: Transfer                        | :white_check_mark: Transfer | :x: Cannot transfer  |
| None  | :x: Cannot transfer                | :x: Cannot transfer                                       | :x: Cannot transfer                                       | :white_check_mark: Transfer                        | :x: Cannot transfer                | :x: Cannot transfer  |

- Cloud(S3/GCS/Azure) -> Cloud(GCS/S3/Azure)
  - If the service/bucket name differs, the files will be transferred.
  - If service/bucket name matches, no transfer. (Transfer is considered unnecessary and transfer is completed.)
- Destination not installed
  - If the destination's environment variable `FILE_UPLOAD` is set to 'aws' (default):
    - As of v6.0.5, files are **not** transferred.
    - A future update will make file transfer possible.
  - If the destination's environment variable `FILE_UPLOAD` is set to 'mongodb' or 'local', the files are transferred.
  - If the destination's environment variable `FILE_UPLOAD` is set to 'gcp', and the related GCP environment variables (`GCS_API_KEY_JSON_PATH`, `GCS_BUCKET`, `GCS_UPLOAD_NAMESPACE`) are configured, the files are transferred.

::: warning
If the environment variable `FILE_UPLOAD_DISABLED=true` is set on the destination, attached files cannot be transferred.
:::
