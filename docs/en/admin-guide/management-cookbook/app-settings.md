# AppSettings (TBD)

Make settings for uploaded attachments to the GROWI page.
<!-- [TODO: English translation by gw4283] -->

## App settings aaaa

### File Upload Settings

GROWI has settings that allow you to upload files except images to your page.

![app-settings18](./images/app-settings18.png)

If you do not check here, you will not be able to upload files except
 images when editing a wiki page.

GROWI ページへの添付ファイルのアップロードに関する設定を行います。

### 利用可能な保存先

The following can be used to save the attached file.

- Amazon S3
- Google Cloud Storage
- MongoDB
- Local File System

#### Upload to Amazon S3

Save files to Bucket of Amazon S3.
<!-- 
Amazon S3 の設定方法は[こちら](../management-cookbook/app-settings.html#amazon-s3-bucket-のセットアップ)を参考にしてください。 -->

#### Upload to Google Cloud Storage

Save files Bucket to Google Cloud Storage.

<!-- Google Cloud Storage の設定方法は[こちら](../management-cookbook/app-settings.html#google-cloud-storage-のセットアップ)を参考にしてください。 -->

#### Upload to MongoDB

GROWI データの保存先に指定している MongoDB に [GridFS](https://docs.mongodb.com/manual/core/gridfs/) を利用し、ファイルを保存します。

<!-- Save files to MongoDB by using [GridFS](https://docs.mongodb.com/manual/core/gridfs/) to MongoDB  -->

Use [GridFS] (<https://docs.mongodb.com/manual/core/gridfs/>) in MongoDB specified as the save destination of GROWI data, and save the file.

#### Upload to File Systems


Save the file to the local file system as seen by the GROWI server.

### Change stored attached file location


The save destination can be changed in the file upload settings of the application settings.

::: danger
Please note that if you change the file save destination in the middle, you will not be able to access the files uploaded so far.
:::

<!-- ![appsettings18](./images/appsettings18.png) -->

::: warning
If the file upload destination is fixed by the environment variable `FILE_UPLOAD_USES_ONLY_ENV_VAR_FOR_FILE_UPLOAD_TYPE`, you cannot change the file upload destination here. See here (../admin-cookbook/attachment) for more information.
:::

Settings are required when using Amazon S3 and Google Cloud Storage. Please refer to the following to complete the setting.

### Set up Amazon S3 Bucket

Here are the steps to set up a connection to Amazon S3 (Amazon Simple Storage Service).

#### Get AWS account infomation

1. Sign in to the AWS Management Console (<https://aws.amazon.com/jp/console/>) and sign in.
From the dropdown that appears when you click on the account name in the upper right corner of the navigation bar,
  Select My Security Credentials (<https://console.aws.amazon.com/iam/home?#/security_credentials>).
2. Expand Access Key (Access Key ID and Secret Access Key)
Create and store the Access Key ID and Secret Access Key for your AWS account.
3. Expand Account ID to see the legitimate user ID.

#### Get or Change permitions of Amazon S3 Bucket

1. Go to the Amazon S3 [Dashboard] (<https://s3.console.aws.amazon.com/s3>).
2. Check the region and bucket name of the S3 Bucket you want to register.
3. Select the S3 Bucket you want to register and open "Access Rights".
4. Click the Edit Block Public Access button and click the New Access Control List (ACL)
Only uncheck Block public access to allowed buckets and objects to save your changes.
5. The legitimate ID of the AWS account that has been added to Bucket Owner Permissions in the Access Control List
If it doesn't match what you checked in step 3 of the procedure "Getting AWS Account Information",
Add the account with the verified canonical ID to Access Other AWS Accounts. At this time, check all types of authority.

#### Resistor Bucket to GROWI

1. Select AWS (S3) in the file upload settings of GROWI's app settings, and set the information confirmed in the above process.

2. If you use other object storage services that have an S3-compatible API, such as MinIO
Enter the URL of that endpoint into your custom endpoint.

<!-- ![appsettings19](./images/appsettings19.png) -->

### Set up Google Cloud Storage

1. Please refer to [here](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) to get the GCS information.

2. Select GCS in the file upload settings of GROWI's app settings and set the information confirmed in the above process.

<!-- ![appsettings20](./images/appsettings20.png) -->

- Api Key Json Path: [The path to the JSON file for the GCP service account key (as seen from the GROWI root directory)]
- Bucket Name: [Bucket Name of GCS]
- Name Space: [Directory name for uploading files created in the bucket]
