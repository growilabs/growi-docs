# Attachment Storage Location

## About File Upload

- You can easily set up the file upload function if you have the following settings.
    1. Select Hosted GCP (Google Cloud Storage) as the file storage destination on the `GROWI.cloud`  administration screen.  
![attachment_1.png](/assets/images/en/attachment_1.png)
    2. In the application settings of the `GROWI` administration screen, update the "Allow file uploads other than images" checkbox in the "File Uploads" field.  
![attachment_2.png](/assets/images/en/attachment_2.png)
- After the above settings are made, file uploading will be enabled. [^1]

Users can also upload and manage files through GROWI by preparing their own Amason S3 storage separately from the launched GROWI App and configuring the linkage settings on the GROWI settings screen.

[^1]: The standard storage capacity available for file upload on GROWI.cloud is 100 MB.
By purchasing the paid storage option, you will be able to upload files on GROWI according to your desired capacity.


## Saved Files save location of GROWI Launched by GROWI.cloud

![attachment_3.png](/assets/images/en/attachment_3.png)

- **[Hosted] GCP** : The destination prepared by GROWI.cloud.
- **[Owned] GCP/AWS** : The destination prepared by the customer.
  - Please select this option if you want to take over the file storage location that is already used by another instance of GROWI.

*[Owned] GCP is currently under preparation and cannot be used. (As of July 10, 2020)


## How to Check the File save Location

![attachment_4.png](/assets/images/en/attachment_4.png)

1. Access the application's **details page** and check "File save location".
2. Click "Edit" on the right if you want to change the file save location.

## Notes on Using File Attachments While Editing with HackMD

If you have HackMD enabled and wish to use a file attachment while editing on HackMD, please note the following

1. Files attached by HackMD will **disappear when GROWI is restarted**.
2. Files attached with HackMD will not be reflected in the page permission settings of GROWI, and can **be accessed by anyone who knows the URL**.

## When Saving a File to The Storage Specified in "File Save To"

When uploading a file attachment in GROWI, please use the built-in editor instead of the HackMD editor to upload the file attachment, so that the file can be saved to the storage location specified in the "File save location" field.

## Migration of Attachments

- Customers who used AWS as their file storage destination before the migration can continue to use GROWI.cloud by setting the same AWS as their file storage destination.
- If the above does not apply to you, you will need to re-upload your files at GROWI.cloud.
