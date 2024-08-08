# App Settings

[[toc]]

<ContextualBlock context="docs-growi-org">

## Site URL Settings

In this field, a URL could be set for GROWI.

**Make sure to set the Site URL setting for GROWI.**

:::warning
If the site URL is not set, some of the functions on GROWI will not work properly.
:::

If a DNS record such as `growi.example.com` has been specified as the destination for a custom domain, set it here.  
If a domain is not set to the DNS, set the value to any URL.

<img :src="$withBase('/assets/images/en/appsettings1.png')" alt="appsettings1">

If the environment variable `APP_SITE_URL` is set, the value will be displayed in the `Environment variables` column on the right.  


<img :src="$withBase('/assets/images/en/appsettings2.png')" alt="appsettings2">

If a value is entered in the `Database` field, the value set in the `Database` field will take precedence over the `Environment variables` field.  

:::warning
If the site URL is not set, an error message will be displayed because some of the functions of GROWI will not work properly.

The following error message is displayed in the settings section of the admin page and in the header section of the page.  
Please be sure to set the **Site URL setting for GROWI**.

:::

</ContextualBlock>

## App Settings

### Site Name

If the site name is set, it is displayed on the login screen and the title of GROWI.

<img :src="$withBase('/assets/images/en/appsettings3.png')" alt="appsettings3">

<img :src="$withBase('/assets/images/en/appsettings4.png')" alt="appsettings4">

### Confidential Name

The contents written in the confidential display field will be displayed when the cursor is placed on the GROWI title.

<img :src="$withBase('/assets/images/en/appsettings5.png')" alt="appsettings5">

### Default language setting for new users

In this field, the user can select English, Japanese, or Chinese.

<img :src="$withBase('/assets/images/en/appsettings6.png')" alt="appsettings6">

The above setting changes the default language when creating a new user in GROWI.

<img :src="$withBase('/assets/images/en/appsettings7.png')" alt="appsettings7">


### File Uploading

GROWI has a setting that allows uploading of files other than images to a page.

<img :src="$withBase('/assets/images/en/appsettings8.png')" alt="appsettings8">

If this option is unchecked, users will not be able to upload non-image files when editing the wiki page.

The File Uploading settings will enable users to upload files.

<img :src="$withBase('/assets/images/en/appsettings9.png')" alt="appsettings9">

If the upload banner is hidden as follows, the File Uploading settings have not been configured.

<img :src="$withBase('/assets/images/en/appsettings10.png')" alt="appsettings10">

## Email settings

Sending email from GROWI can be enabled by configuring one of the following configuration patterns:

  1. Setting up an SMTP server
  2. Using SES from AWS

<img :src="$withBase('/assets/images/en/appsettings11.png')" alt="appsettings11">

If there is an alert that says **"Email setting is not set up"**, this indicates that the configuration form has not been fully completed.

### Notes on using SES

GROWI does not allow changing the Region and will attempt to send using us-east-1.  
If region other than us-east-1 is used, consider setting up SMTP on GROWI using the information on SES.

### Sending a test mail (on SMTP only)

When using an SMTP server, it is possible to send a test email to verify that the email settings are working.

After updating the SMTP server settings, press the **Send a test email** button.

- If successful, the message "Success to send a test-email" will be displayed.
- If it fails, "Failed to send a test email using SMTP. Please check your settings." will be displayed.

If the email settings are enabled, the email will be sent from GROWI.

### Mail sending function

The following is the **Temporarily issue a new user** window in the User Management menu.

<img :src="$withBase('/assets/images/en/appsettings12.png')" alt="appsettings12">

Check the **Send invitation email** checkbox to make the email work.  
If the settings are not configured correctly, the email will not work.

## File Upload Settings

Make settings for uploaded attachments to the GROWI pages.

### Available file upload method

Please use the following upload systems to save attached files.

- Amazon S3
- Google Cloud Storage
- MongoDB
- Local File System

#### Upload to Amazon S3

Save files to the bucket of Amazon S3.

Please refer to [here](/en/admin-guide/management-cookbook/app-settings.html#get-aws-account-infomation) to set up Amazon S3.

#### Upload to Google Cloud Storage

Save files Bucket to Google Cloud Storage.

Please refer to [here](/en/admin-guide/management-cookbook/app-settings.html#set-up-google-cloud-storage) to set up Google Cloud Storage.

#### Upload to Azure Blob Storage

Save files Container to Azure Blob Storage.

Please refer to [here](/en/admin-guide/management-cookbook/app-settings.html#set-up-azure-blob-storage) to set up Azure Blob Storage.

#### Upload to MongoDB

Save files to MongoDB specified as the file upload system of GROWI data with
 [GridFS](<https://docs.mongodb.com/manual/core/gridfs/>).

#### Upload to File Systems

Save files to the local file system of the GROWI server.

### Change file upload method

The file upload method can be changed in the file upload settings of the application settings.

::: danger
Please note that by changing the file upload method in the middle,
 the uploaded files so far will not be able to access.
:::

<ContextualBlock context="docs-growi-org">

::: warning
If the file upload method is fixed by the environment variable
 `FILE_UPLOAD_USES_ONLY_ENV_VAR_FOR_FILE_UPLOAD_TYPE`, the file upload method cannot be changed here.
  See [here](/en/admin-guide/admin-cookbook/attachment) for more information.
:::

</ContextualBlock>

Settings are required when using Amazon S3 and Google Cloud Storage.
 Please refer to the following to complete it.

### Set up Amazon S3 Bucket

Here are the steps to set up a connection to Amazon S3 (Amazon Simple Storage Service).

#### Get AWS credentials

<details><summary>When creating a new IAM User (recommended)</summary>

1. Sign in to [AWS Management Console](https://aws.amazon.com/console/).
2. Navigate to the [IAM User page](https://us-east-1.console.aws.amazon.com/iam/home#/users).
3. Create a user.
    - User name: Any
    - Provide user access to the AWS Management Console: Off
    - Set permissions: Press "Next" without making any configurations.
4. Select the user you created.
5. Security Credentials -> Access keys -> Create access key
6. Select JSON in the policy editor and add the following:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:PutObjectAcl",
        "s3:GetObject"
      ],
      "Resource": [
        "arn:aws:s3:::*/*"
      ]
    }
  ]
}
```

::: tip
It is more secure to replace the first * in the Resource with the name of S3 Bucket that you will create later.  
example:`"arn:aws:s3:::growi-attachment-bucket/*"`
:::

7. Enter any name for the policy name and create the policy. 
8. User details -> Security credentials -> Access keys -> Create access key
9. Select Other and create access key.
10. Store the Access Key ID and Secret Access Key.

</details>

<details><summary>When use security credentials of logged-in user</summary>

1. Sign in to [AWS Management Console](https://aws.amazon.com/console/) and
 select [My Security Credentials](https://console.aws.amazon.com/iam/home?#/security_credentials)
from the dropdown that appears when clicking on the account name in the upper right corner of the navigation bar.
2. Expand "Access Key (Access Key ID and Secret Access Key)",
 create and store the Access Key ID and Secret Access Key for the AWS account.
3. Expand "Account ID" to comfirm the valid user ID.


</details>

#### Get or change permitions of Amazon S3 Bucket

1. Access to Amazon S3 [Dashboard](https://s3.console.aws.amazon.com/s3).
2. Check the region and the bucket name of the S3 Bucket to register.
3. Select the S3 Bucket to register and open "Access Rights".
4. Click the edit button of "Block Public Access".
only uncheck "Block public access" through the New Access Control List (ACL) and save the changes.
5. If the valid ID of the AWS account that has been added to the "Bucket Owner Permissions" and the "Access Control List" doesn't match step 3 of the procedure "Getting AWS Account Information", add the account with the verified canonical ID to "Access Other AWS Accounts". In this case, please check all types of authority.

::: tip
When using a private S3 Bucket (with ACLs disabled and all public access blocked), you should set the environment valiable `S3_BUCKET_ACLS_DISABLE=true` when launching growi.
:::

#### Register Bucket to GROWI

1. Please select AWS (S3) in the file upload settings of GROWI's app settings,
 and set the information confirmed in the above process.

2. In case of using other object storage services that have an S3-compatible API, such as MinIO,
Please enter the URL of the endpoint into the custom endpoint.

### Set up Google Cloud Storage

1. Please refer to [here](https://cloud.google.com/iam/docs/creating-managing-service-account-keys)
for more GCS information.

2. Select GCS in the file upload settings of GROWI app settings and set the information confirmed in the above process.


- API Key Json Path: [The path to the JSON file for the GCP service account key (as seen from the GROWI root directory)]
- Bucket Name: [Bucket Name of GCS]
- Name Space: [Directory name for uploading files created in the bucket]

### Setting up Azure Blob Storage

You will need the following five pieces of information
(a). Directory (tenant) ID
(b). Application (client) ID
(c). Client Secret
(d). Storage account name
(e). Container name

Follow the steps below to obtain the necessary settings as you go through the configuration process.

#### Setup in Azure

1. go to [Azure Portal](https://portal.azure.com)

1. go to "Microsoft Entra ID" from the top menu and register a new application (in this case **GROWI**) from the side menu Administration > Register Application
    1. get information `(a),(b)` here
1. go to the detail screen of the registered application (**GROWI**), and from the side menu "Administration > Certificates and Secrets", "Add new client secret".
    1. get the information `(c)` here. (Note that this will only appear immediately after creation)
1. go to "Storage Accounts" from the top menu and create a storage account
    1. get information `(d)` here
1. go to the detail screen of the created storage account and create a new container from the side menu Data Storage > Container
    1. get information `(e)` here
1. go to the detail screen of the created storage account, from the side menu "Access Control (IAM)", "Add Role Assignment"
    1. select the role "Storage BLOB Data Co-Creator"
    1. In the Member Selection, select the application registered above.
    1. Perform "Review and Assign".

#### Setup in GROWI

1. select Azure(BLOB) in the file upload settings of GROWI's application settings and set the information confirmed in the above process.

<ContextualBlock context="docs-growi-org">

## How to refer to attached files

When using Amazon S3 or Google Cloud Storage, an attachment reference method can be set.

Please refer to [Attachment reference method](/en/admin-guide/admin-cookbook/attachment.html#how-to-refer-to-attached-files) for the delivery method.

</ContextualBlock>

## Questionnaire Settings

Enabling surveys allows you to receive and respond to surveys from the GROWI development team.

Administrators can enable/disable surveys from `App Settings` > `Questionnaire Settings`. Users can also enable/disable the survey feature individually from the settings screen.

The data sent will not contain any personal information of the user.
The actual response data sent to the development team is in json format as shown below.

```json
{
  "growiInfo": {
    "version": "6.1.0",
    "osInfo": {
      "type": "Linux",
      "platform": "linux",
      "arch": "x64",
      "totalmem": 8349097984
    },
    "appSiteUrl": "https://dev.growi.org",
    "appSiteUrlHashed": "f1de9e489ba88cb15968b97f40f59e8ef0da5ca03ad1f37fc13a2aa45a2512a9",
    "type": "cloud",
    "currentUsersCount": 1,
    "currentActiveUsersCount": 1,
    "wikiType": "open",
    "attachmentType": "gcs"
  },
  "userInfo": {
    "userIdHash": "491cc0533ef24a97cdab23ae634b5c4822586087383e9e3e59ddd464876cecbb",
    "type": "admin",
    "userCreatedAt": "2023-01-24T04:50:59.249Z"
  },
  "answers": [ { "question": "63d75bde2cc143ee8250106a", "value": "3" } ],
  "answeredAt": "2023-01-31T06:00:07.707Z"
}
```

### About the App Site URL

The default configuration includes the URL of the operational GROWI application and its hash value with the keys `appSiteUrl` and `appSiteUrlHashed`, respectively.
If you wish to keep the URL of your site confidential from the GROWI development team, please enable the option `Send anonymized site URLs`.
With this option, only the value of `appSiteUrlHashed` will be sent.
