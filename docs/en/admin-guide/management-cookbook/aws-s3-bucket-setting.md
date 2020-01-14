# AWS S3 Bucket Setting

[[toc]]

## Overview

This chapter introduces how to register AWS S3 Bucket to GROWI.

This setting makes uploading attachment files and profile images to AWS S3 Bucket available. If SMTP settings are not completed, e-mails will be sent via SES. You need to verify From E-mail Address and production settings.
  
## How to Configure

### Get AWS Account Information

1. Sign-in [AWS Management Console](https://aws.amazon.com/console/), and click [My Security Credentials](https://console.aws.amazon.com/iam/home?#/security_credentials) in drop-down list of account information on the left side of the top bar.

![aws-setting-1](./images/aws-setting-1.png)

2. In the Access keys (access key ID and secret access key) tab, create new access key.
3. In the Account identifiers tab, check your canonical user ID.

### Get AWS S3 Bucket Information 

1. Access to [AWS S3 dashboard](https://s3.console.aws.amazon.com/s3).
2. Open Permissions page of S3 Bucket.
3. In the Block public access tab, turn off "Block public access to buckets and objects granted through new access control lists (ACLs)".
4. In the Access Control List tab, add your canonical user ID is in access control list with full permissions.

### Register your Bucket to GROWI
1. In App settings page (`/admin/app`), Input information of your Backet.
2. Input the URL of the endpoint of an object storage service like MinIO that has a S3-compatible API. Amazon S3 is used if empty.
