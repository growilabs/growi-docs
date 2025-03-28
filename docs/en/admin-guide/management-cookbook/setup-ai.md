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
  - (Optional) Specify `OPENAI_LIMIT_LEARNABLE_PAGE_COUNT_PER_ASSISTANT` to set the maximum number of pages that a single Knowledge Assistant can learn (default is 3000)

</ContextualBlock>

## Knowledge Assistant Feature

### Verifying Connection in the Application

<ContextualBlock context="docs-growi-org">

If the environment variables required for the Knowledge Assistant are set, the "AI" icon will appear on the left sidebar of the GROWI screen.

</ContextualBlock>


<ContextualBlock context="help-growi-cloud">

When the AI function is enabled, the "AI" icon appears on the left sidebar of the GROWI screen.

</ContextualBlock>

<img :src="$withBase('/assets/images/en/setup-ai_1.png')" alt="setup-ai_1">

<ContextualBlock context="docs-growi-org">

- If an error message indicates a connection failure despite the environment variables being correctly set, recheck OpenAI's status and the integration settings.

</ContextualBlock>

<ContextualBlock context="help-growi-cloud">

- If the AI integration feature does not function correctly despite being enabled:  
  - Check the [GROWI AI Features](/en/cloud/growi-ai-features.html) settings and your [GROWI AI Credits](/en/cloud/growi-ai-credit.html).  
  - If the issue persists after verification, please contact [GROWI.cloud Support](https://growi.cloud/contact).

</ContextualBlock>
