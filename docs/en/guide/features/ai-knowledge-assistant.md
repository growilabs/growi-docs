# Knowledge Assistant

## What is the GROWI AI Knowledge Assistant?

The GROWI AI Knowledge Assistant (hereinafter referred to as "Knowledge Assistant") is a feature that provides answers to users' questions in a chat format based on information stored within GROWI.

In addition, each user can freely create knowledge assistants specialized for specific page groups.

## Data handled by the Knowledge Assistant

The GROWI AI integration feature uploads documents to OpenAI's `Vector Store` for machine learning purposes.  

When the AI integration feature is enabled, the content and metadata required for machine learning are uploaded to the `Vector Store` whenever a page is created, updated, duplicated, or deleted.

## Knowledge Assistant features and cautions

::: warning
Knowledge Assistant can be configured to learn from specific group of pages. Most importantly, pages with permission restrictions (e.g., `Only me` or `Only inside the group`, etc) can also be included in the learning targets.

Therefore, when creating assistants and configuring sharing settings, you need to pay close attention to handling confidential or restricted information. When sharing assistants in particular, please be careful with your settings to prevent unintended information leakage.
:::

## How to create a Knowledge Assistant

### Open the add new assistant dialog

1. Click the "AI" button in the left sidebar.
2. Click the "Add Assistant" button.

    <img :src="$withBase('/assets/images/en/add-assistant-button.png')" alt="add-assistant-button.png" class="border">

### Enter assistant name

In the add new assistant dialog, enter the following:

1. Assistant name: The name displayed in the assistant list.
2. Assistant memo (optional): Freely describe the purpose and other information. (This does not affect the assistant's processing.)

### Configure assistant sharing settings

1. Click on "Assistant Sharing" to open the assistant sharing settings dialog.

1. If you want to share the assistant with other users, click the button to enable it.

    <img :src="$withBase('/assets/images/en/assistant-sharing-1.png')" alt="assistant-sharing-1.png" class="border">

1. Set the pages to be included in learning.
    - You can filter pages to learn from based on page access permission settings.
    - Only pages viewable by the assistant creator can be selected.

1. Set the assistant sharing scope.
    - You can set the sharing scope of the assistant.
    - Only assistants with sharing scope set to "Public" can be set as the default assistant.

::: tip
If the assistant references restricted pages, when trying to share that assistant with users who should not have access to those pages, a warning message will appear when you click the Create or Update Assistant button. This prevents unintended information leakage.
:::

### Add reference pages

You can set which pages the assistant will reference. By default, one Knowledge Assistant can reference up to 3,000 pages, including subordinate pages.

<ContextualBlock context="docs-growi-org">

This limit can be changed through [GROWI AI option environment variables](/en/admin-guide/admin-cookbook/env-vars.html).

</ContextualBlock>

1. Click on "Reference Pages" to open the reference page settings dialog.
1. Click the "Add Page" button to display a list of all referenceable pages.
1. Click on the page you want to set as a reference page.
1. Check the checkbox to include subordinate pages as needed.
1. Click the "Done" button.
1. The path of the page set as a reference page will be displayed below the "Add Page" button (if subordinate pages are included, the end of the path will be `/*`).
1. If you want to add more pages, repeat the same process from the "Add Page" button.

### Delete reference pages

If you want to delete a reference page that has been set, you can delete it using the trash icon.

<img :src="$withBase('/assets/images/en/remove-reference-pages-1.png')" alt="remove-reference-pages-1.png" class="border">

### Set instructions for the assistant

You can set unique response styles and behavioral guidelines for each assistant. This is made possible using the `additional_instructions` parameter of OpenAI's [Create Run API](https://platform.openai.com/docs/api-reference/runs/createRun).

For example, by instructing "Please explain from basic terminology for beginners" or "Please include technical details for system administrators," you can generate flexible responses tailored to the user's situation and preferences even for the same question.

## How to use the Knowledge Assistant

1. You can start a chat by selecting the assistant you want to use from the Knowledge Assistant list.
2. When you enter a question in the chat window, the assistant will answer based on the reference pages in GROWI.

<img :src="$withBase('/assets/images/en/start-chat-1.png')" alt="start-chat-1.png" class="border">

## Default assistant

You can set any single Knowledge Assistant of your choice as the "Default Assistant."

- The default knowledge assistant can be launched from the "AI" bubble icon in the upper page toolbar.
- You can set it by clicking the "★" mark next to the assistant you want to set as the default assistant in the assistant list.
  - When set as the default assistant, it shows "★"; when not set, it shows "☆".
- Only assistants with a sharing scope of "Public" can be set as the default assistant. Also, only users with administrator privileges can set the default assistant.

<img :src="$withBase('/assets/images/en/ai-default-knowledge-assistant-balloon.png')" alt="ai-default-knowledge-assistant-balloon.png" class="border">

<img :src="$withBase('/assets/images/en/ai-default-knowledge-assistant-setting.png')" alt="ai-default-knowledge-assistant-setting.png" class="border">

## Chat history

All conversations with the Knowledge Assistant are saved as history and can be referenced later.

- Chat history is saved for each user, allowing you to check past questions and answers.
- Chat history is organized by assistant, so if you are using multiple Knowledge Assistants, you can refer to each conversation individually.
- When you expand each assistant's tree, past threads will be displayed.

<img :src="$withBase('/assets/images/en/ai-chat-history-1.png')" alt="ai-chat-history-1.png" class="border">

### Chat history retention period

- Each thread is stored for 3 days from the last conversation.
- After 3 days, the thread is automatically deleted.
- If you open an existing thread and ask a new question, the retention period for that thread will be extended to 3 days again.

<ContextualBlock context="docs-growi-org">

## Environment variables

Environment variable settings are required to use the Knowledge Assistant feature.

For details, please refer to [Setting Up and Managing AI Integration](/en/admin-guide/management-cookbook/setup-ai.html) and [GROWI AI option environment variables](/en/admin-guide/admin-cookbook/env-vars.html).

</ContextualBlock>
