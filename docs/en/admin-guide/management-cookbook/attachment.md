# File Upload Settings

[[toc]]

## Overview

This chapter introduces how to change the destination to upload attachment files. 

## File Upload Destination

Save files to MongoDB GridFS, AWS S3, Google Cloud Storage or local file system when uploading attachment files to GROWI pages. This depends on environment variables.

::: danger
Warning: Changing the file upload destination will make previously uploaded files can't be accessed anymore.
:::

### Upload Files to MongoDB GridFS

Upload attached files to MongoDB server which stores data of GROWI app with [GridFS].(https://docs.mongodb.com/manual/core/gridfs/) 

Set the following environment as below variable and rebuild app.

- `FILE_UPLOAD` : 'mongodb'

### Upload Files to AWS S3

Upload attached files to AWS S3 bucket specified in AWS setting in app settings page.

Set the following environment as below variable and rebuild app. This is default setting.

- `FILE_UPLOAD` : 'aws' (Default)

If AWS S3 bucket is not set, access to [AWS S3 Bucket Setting](../management-cookbook/aws-s3-bucket-setting.md).

### Upload Files to Google Cloud Storage

Upload attached files to Google Cloud Storage specified with environment variables. The setting procedure is as follows.

1. Refer to [GCP Docs](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) and get the json file of GCP service acount.

2. Set the following environment as below variables and rebuild app.

- `FILE_UPLOAD` : 'gcs' 
- `GCS_API_KEY_JSON_PATH` : [Path of the json file of GCP service account key (based on the root directory of GROWI server)]
- `GCS_BUCKET` : [GCS bucket name] 

### Upload Files to Local File System

Upload attached files to local file system based on the root directory of GROWI server.

Set the following environment as below variable and rebuild app. 

- `FILE_UPLOAD` : 'local' 

##  Limit File Size 

In defalt setting, both the maximum file size that can be uploaded at once and the size of files attached to all pages will be unlimited.

In order to limit these sizes, set the following environment variable and rebuild app.

- `MAX_FILE_SIZE` : [The upper limit of uploadable file size (bytes)]
- `FILE_UPLOAD_TOTAL_LIMIT` : [The upper limit of the total size of attached files in DB (bytes)]