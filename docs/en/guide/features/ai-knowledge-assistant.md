# Knowledge Assistant

## What is the Knowledge Assistant?

- The Knowledge Assistant is a feature that provides answers to users' questions in a chat format based on information stored within GROWI.  
- It is available from GROWI v7.1.0 and later.

## Data Handled by the Knowledge Assistant

- The GROWI AI integration feature uploads documents to OpenAI's `Vector Store` for machine learning purposes.  
- Only public pages are uploaded to OpenAI by GROWI.  
- When the AI integration feature is enabled, the content and metadata required for machine learning are uploaded to the `Vector Store` whenever a page is created, updated, or duplicated.  
- To bulk upload already existing pages, perform a "[Vector Store Rebuild](/en/admin-guide/management-cookbook/setup-ai.md#vector-store-rebuild)."

## How to Use the Knowledge Assistant

- On the top bar of the GROWI interface, there is a speech bubble icon labeled "AI."  

<img :src="$withBase('/assets/images/en/ai-knowledge-assistant_1.png')" alt="ai-knowledge-assistant_1.png" class="border">

- Clicking the icon opens the Knowledge Assistant (Beta) modal.  

<img :src="$withBase('/assets/images/en/ai-knowledge-assistant_2.png')" alt="ai-knowledge-assistant_2.png" class="border">

- In the input field labeled "Please enter your question," freely type and submit your question.  

<img :src="$withBase('/assets/images/en/ai-knowledge-assistant_3.png')" alt="ai-knowledge-assistant_3.png" class="border">

- Wait for the response to be generated.  

<img :src="$withBase('/assets/images/en/ai-knowledge-assistant_4.png')" alt="ai-knowledge-assistant_4.png" class="border">

- The Knowledge Assistant will return a generated response.  

<img :src="$withBase('/assets/images/en/ai-knowledge-assistant_5.png')" alt="ai-knowledge-assistant_5.png" class="border">
