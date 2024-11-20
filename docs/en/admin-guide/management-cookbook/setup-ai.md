# Setting Up and Managing AI Integration

This guide explains how to configure the AI integration feature powered by OpenAI.

<ContextualBlock context="docs-growi-org">

## Configuring the Connection to OpenAI

Refer to OpenAI's help documentation for instructions on obtaining API keys and other necessary information.

- Set the following environment variables:
  - Set `AI_ENABLED` to `true`.
  - Specify the service type in `OPENAI_SERVICE_TYPE`.  
    - Example: For `OpenAI`, specify `openai`.
  - Set `OPENAI_API_KEY` to the API key obtained from the OpenAI service.

</ContextualBlock>

## Knowledge Assistant Feature

### Verifying Connection in the Application

- If the `OPENAI_SERVICE_TYPE` and other necessary environment variables for OpenAI integration are properly set, the AI search icon will appear in the top bar of the GROWI interface.  
  - You can check the environment variables on the "Wiki Management Home" page in the Admin Menu.

  <img :src="$withBase('/assets/images/en/setup-ai_1.png')" alt="setup-ai_1">

<ContextualBlock context="docs-growi-org">

- If an error message indicates a connection failure despite the environment variables being correctly set, recheck OpenAI's status and the integration settings.

</ContextualBlock>

<ContextualBlock context="help-growi-cloud">

- If the AI integration feature does not function correctly despite being enabled:  
  - Check the [GROWI AI Features](/en/cloud/ai-chat) settings and your [GROWI AI Credit Balance](/en/cloud/ai-credit).  
  - If the issue persists after verification, please contact [GROWI.cloud Support](https://growi.cloud/contact).

</ContextualBlock>

### Rebuilding the Vector Store

- Performing a "Vector Store Rebuild" uploads all public page data in GROWI to the `Vector Store`.  
  - The AI integration feature uses documents uploaded to the `Vector Store` for machine learning.  
- If you are adding the AI integration feature to an existing GROWI setup, it is recommended to perform a "Vector Store Rebuild."  
  <img :src="$withBase('/assets/images/en/setup-ai_2.png')" alt="setup-ai_2">
