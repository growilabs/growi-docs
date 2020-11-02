# File Upload Settings

[[toc]]

## Overview

This chapter introduces how to change the destination to upload attachment files.

## Setting save destination of attached files

The following can be used to save the attachment file of the GROWI page. See [here] (../management-cookbook/app-settings.html#ファイルアップロード設定) for details.

- Amazon S3
- Google Cloud Storage
- MongoDB
- Local File System

### Fixing save destination for attached files with environment variables

::: danger
Warning: Changing the file upload destination will lose access to the previously uploaded files.
:::

When you want to fix the save destination of the attached file by the environment variable, set the environment variable `FILE_UPLOAD_USES_ONLY_ENV_VAR_FOR_FILE_UPLOAD_TYPE` to `true`. Also, set the value of the environment variable `FILE_UPLOAD` referring to the table below.

| Save Destination | `FILE_UPLOAD` |
| --- | --- |
| Amazon S3 | `aws` |
| Google Cloud Storage | `gcs` |
| MongoDB | `mongodb` |
| Local File System | `local` |

If the save destination is fixed by the environment variable `FILE_UPLOAD_USES_ONLY_ENV_VAR_FOR_FILE_UPLOAD_TYPE`,
the saving destination function on the management page is disabled.


### Google Cloud Storage Settings with environment variable

If you have not specified a value in the GCS Settings form in the File Upload Settings,
use the default value below.

- Api Key Json Path: `GCS_API_KEY_JSON_PATH`
- Bucket Name: `GCS_BUCKET`
- Name Space: `GCS_UPLOAD_NAMESPACE`



### Fixing GCS Settings with environment variable

If you want to fix the GCS settings with environment variables, set the environment variable `GCS_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` to `true` and put a value in the above environment variable. If it is not set, null will be entered.

If pinning the GCS settings with the environment variable `GCS_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS` is enabled, the form values of the GCS settings in the file upload settings are invalid and cannot be changed.

## Attached File Size Limitation

The following environment variables allow you to set the maximum size of files that can be uploaded at one time and the cumulative size of attached files to all pages.
In both cases, the unit is `bytes`. By default, both values are `Infinity` and the file size is not limited.

- `MAX_FILE_SIZE` : [The upper limit of uploadable file size (bytes)]
- `FILE_UPLOAD_TOTAL_LIMIT` : [The upper limit of the total size of attached files in DB (bytes)]
