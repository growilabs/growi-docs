# SSL Server Certificate
- GROWI.cloud allows you to specify your own domain name (hereinafter referred to as "own domain") as the GROWI domain name.
- This page provides support information for SSL server certificates required to publish GROWI under your own domain.

## Add and Renew Certificate

### Notes
#### Do Not Put a Password on Your Private Key!
- A password on the private key file registered for the SSL server certificate may cause the certificate and private key to not function properly and GROWI may not be available.
- Please be careful not to set passwords on the private keys registered for SSL server certificates.

### How To Add a Certificate
- Please follow the steps below to register a certificate
    1. Select the organization you wish to register an SSL server certificate for from the sidebar on GROWI.cloud's My Page.
    1. Select **Add** from **"SSL server certificate"** on the detail page of the organization you selected in [**1** ].  
		![ssl_1.png](/assets/images/en/ssl_1.png)

    1.  Select the files you have prepared for "**SSL Server Certificate**" and "**Private Key**" and click the "**Add**" button.   
		![ssl_2.png](/assets/images/en/ssl_2.png)

## If you have an Intermediate Certificate
### Preparation
- Please prepare the following two items
    - A file that combines a root certificate and an intermediate certificate
    - A file containing the private key

### How to add a Certificate
- In step [**3**] of "How to add a certificate" above, if you select "A file that combines a root certificate and an intermediate certificate" for "SSL server certificate," a certificate for your own domain with an intermediate certificate will be added.


### About the API for Renewing Certificates
 - When updating certificates, operations on the GROWI.cloud screen are required.
   - ※Future plans for API implementation have not yet been determined.
