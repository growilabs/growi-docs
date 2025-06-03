# Cloud WAF

## About Cloud WAF

To address the wide range of security risks surrounding web applications, **GROWI.cloud provides a Cloud WAF (Web Application Firewall)**.

The Cloud WAF monitors communications to web applications, including GROWI, and automatically blocks suspicious access.  
GROWI.cloud uses a Cloud WAF based on Google Cloud Armor to offer stable and reliable protection.

---

## Key Features

- **Comprehensive protection for GROWI and related services**  
  The Cloud WAF protects not only GROWI itself but also communication with related services:
  - Access to the GROWI application
  - Integration with HackMD (external editor)
  - Login and authentication via Keycloak

- **Automatic blocking of suspicious or known attack patterns**  
  Abnormal requests and traffic matching known attack patterns are automatically detected and blocked.

- **Broad protection against threats below the application layer**  
  Through Google Cloud Armor’s rule set, the following attacks are mitigated:
  - Local File Inclusion (LFI)
  - Remote Code Execution (RCE)
  - Remote File Inclusion (RFI)
  - Method enforcement checks
  - Scanner detection
  - Protocol-based attacks
  - Session tampering
  - Node.js-specific attack patterns
  - Common Vulnerabilities and Exposures (CVE)

*Note: The list of protections above is subject to change without prior notice.*

---

## Considerations Regarding OWASP Top 10

The Cloud WAF used in GROWI.cloud is **designed with consideration for major threats listed in the OWASP Top 10**.  
However, it does not provide complete protection against all vulnerabilities.

In particular, **some vulnerabilities at the application layer (Layer 7), such as Cross-Site Scripting (XSS)**, are difficult to detect using communication-level filtering alone.  
Since detection of such threats depends on the application’s source code and input handling logic, they must be addressed through the implementation and secure configuration of GROWI itself.

Such mitigation is ensured through software updates to GROWI and secure operational practices by administrators.

---

## Usage and Pricing

To use the Cloud WAF feature, **a prior application and additional fee are required**.  
Once you apply, the feature will be configured and applied by the GROWI.cloud team.  
No further setup is required on the user side.

For the latest pricing and how to apply, see:

[GROWI.cloud Security Page](https://info.growi.cloud/security)

---

## Limitations

- This feature is **only available when using storage provided by GROWI.cloud.**
- **If you are using your own managed storage (Owned storage), this feature is not available.**

---

For any questions or if you wish to enable this feature, please contact the GROWI support team.
