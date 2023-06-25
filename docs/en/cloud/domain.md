# Domain

## Domain That Can Be Used for GROWI_App

- The GROWI App contains
    1. GROWI.cloud domains that can be published by GROWI.cloud
    2. Your own domain issued by you
- You can specify any of these desired domains

### About GROWI.cloud Domain

- GROWI domains created on GROWI.cloud will be subdomains of `growi.cloud` unless you specify your own domain.
  - Example . `help.growi.cloud` , `sample.growi.cloud`
- You can use any subdomain[^1] of your choice[^2] for growi.cloud free of charge.

[^1]: Cannot set values already used by other GROWI.cloud users
[^2]: Subdomains of `growi.cloud` are SSL compatible, and we issue SSL server certificates automatically and free of charge.

### About Own Domain

- If your plan includes your own domain as an optional feature, you can set up your own domain.
- To use your own domain, you will need to prepare the following
  - Issuance of the domain to be specified
  - Prepare an SSL server certificate for the above domain
  - Private key

    Upload each of these as a file on the GROWI.cloud configuration screen to activate your own domain.




## Change GROWI App Linked with Keycloak

If you wish to change the domain name of the GROWI app that is currently associated with Keycloak, you will need to change the settings on the Keycloak side.
Please follow the steps below when changing the domain of the GROWI app.

### Operation Procedure

1. Access Keycloak created on GROWI.cloud
<img :src="$withBase('/assets/images/en/domain_1.png')" alt="domain_1.png">
2. Click on `Administration Console`
3. Login
4. Click `Clients` from the left menu
5. Find the domain of the linked GROWI app and click `Edit`  on the right side.
    - The image below shows an example of Keycloak running with the domain name growi.example.com.  
<img :src="$withBase('/assets/images/en/domain_2.png')" alt="domain_2.png">
6. Rewrite the values set in`Client ID`、`Root URL`、`Valid Redirect URIs` to the new domain of the linked GROWI app.  
<img :src="$withBase('/assets/images/en/domain_3.png')" alt="domain_3.png">
7. Click`Save` on the bottom



