# GROWI AI Features

## What is GROWI AI?

- This is a feature added in GROWI v7.1.0 that allows you to utilize OpenAI within your knowledge base.
  - For more details, please refer to the [Upgrade to GROWI v7.1.x](/en/admin-guide/upgrading/71x.html) page.
- In GROWI.cloud, you cannot use the GROWI AI features without [GROWI AI Credits](./growi-ai-credit.html).
  - (Except when using an API key provided by the user)
- *As of November 2024, this feature is provided in beta.*  
  - Please note that the service content may change, and the official version of the service may be discontinued.

## Eligibility for Using GROWI AI Features on GROWI.cloud

- The GROWI AI features can be used with the following plans:
  - Small
  - Medium
  - Large
  - Grand
  - Unlimited

## Getting Started with GROWI AI Features

- After logging in to GROWI.cloud, go to the administration page of your GROWI app, click the "Edit" button under the AI features section, and start configuring the settings.
- You can either provide your own OpenAI API key (such as a project API key or service account) or let GROWI.cloud manage the key for you.
- For details on configuring the settings in the edit screen, please refer to the section "Setting Various AI Features."

### Configuring Various AI Features

To enable the GROWI AI features, first, switch to the edit screen and toggle the `Enable AI Features` option.

<img :src="$withBase('/assets/images/ja/ai-chat_1.png')" alt="ai-chat_1.png" class="border p-2 my-2">

#### Using OpenAI Projects Provided by GROWI.cloud (Hosted)

<img :src="$withBase('/assets/images/ja/ai-chat_2.png')" alt="ai-chat_1.png" class="border p-2 my-2">

- If you are using a hosted OpenAI project for the first time, select "Hosted," choose the project type, and click the "+ Add" button.
- There is a limit to the number of OpenAI API keys hosted by GROWI.cloud.
  - One per GROWI app
- After adding a project, select it and click the "Update" button to activate the AI features.
- <span class="text-danger">※ If your organization’s GROWI AI credits run out, the AI features for all GROWI apps in the organization will be disabled.</span>
  - Please refer to [GROWI AI Credits](./growi-ai-credit.html) for more information.

#### Using OpenAI Projects Provided by the User (Owned)

<img :src="$withBase('/assets/images/ja/ai-chat_3.png')" alt="ai-chat_1.png" class="border p-2 my-2">

- If you are using an "Owned" OpenAI project, you will need to provide your own OpenAI project.
- Based on the provided OpenAI project information, fill out the required fields and add the project as shown in the image.
- After adding the project, select it and click the "Update" button to enable GROWI's AI features.

### Configuring GROWI Settings

- To actually use the AI features, you also need to set up your GROWI app.
- For setup instructions, please refer to [Setting Up and Managing GROWI AI Features](/en/admin-guide/management-cookbook/setup-ai.html).
