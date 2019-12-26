# File Upload Settings

[[toc]]

## Overview

This chapter introduces how to change the destination to upload attachment files. 

## File Upload Destination

The files attached to GROWI pages will be uploaded to MongoDB GridFS, AWS S3, Google Cloud Storage or local file system. The file upload destination depends on the environment variables described in the following sections.

::: danger
Warning: Changing the file upload destination will lose access to the previously uploaded files.
:::

### Upload Files to MongoDB GridFS

Upload attached files to MongoDB server which stores data of GROWI app with [GridFS](https://docs.mongodb.com/manual/core/gridfs/) 

Set the following environment variable as below and rebuild the app.

- `FILE_UPLOAD` : 'mongodb'

### Upload Files to AWS S3

Upload attached files to AWS S3 bucket specified in AWS setting in App Settings page.

Set the following environment variable as below and rebuild the app. This is the default setting.

- `FILE_UPLOAD` : 'aws' (Default)

If the AWS S3 bucket setup has not been completed, refer to [AWS S3 Bucket Setting](../management-cookbook/aws-s3-bucket-setting.md) to set it up.

### Upload Files to Google Cloud Storage

Upload attached files to Google Cloud Storage specified in environment variables. The setting procedure is as follows.

1. Refer to [GCP Docs](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) and get the JSON file of GCP service account.

2. Set the following environment variables as below and rebuild the app.

- `FILE_UPLOAD` : 'gcs' 
- `GCS_API_KEY_JSON_PATH` : [Path of the JSON file of GCP service account key (as seen from the root directory of GROWI server)]
- `GCS_BUCKET` : [GCS bucket name] 

### Upload Files to Local File System

Upload attached files to local file system as seen from the root directory of GROWI server.

Set the following environment variable as below and rebuild the app.

- `FILE_UPLOAD` : 'local' 

##  Limit File Size 

In the default setting, both the total file size attached to all pages and the maximum file size that can be uploaded at once are unlimited.

In order to limit these sizes, set the following environment variables as below and rebuild the app.

- `MAX_FILE_SIZE` : [The upper limit of uploadable file size (bytes)]
- `FILE_UPLOAD_TOTAL_LIMIT` : [The upper limit of the total size of attached files in DB (bytes)]