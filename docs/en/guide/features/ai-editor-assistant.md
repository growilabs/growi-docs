# Editor Assistant

## What is GROWI AI Editor Assistant?

GROWI AI Editor Assistant (hereinafter referred to as "Editor Assistant") is a feature that uses AI to rewrite and generate text in the editor.

It can also generate text based on knowledge from existing pages within GROWI.

## How to Use the Editor Assistant

1. Access the page where you want to use the Editor Assistant and open it in editor mode
1. Click the "Editor Assistant" button at the bottom left of the editor

    <img :src="$withBase('/assets/images/en/ai-editor-assistant_1.png')" alt="Location of Editor Assistant button in the bottom left of the editor" class="border">

1. Enter a prompt in the form at the bottom of the right sidebar and click the send button

    <img :src="$withBase('/assets/images/en/ai-editor-assistant_2.png')" alt="Prompt input form in the right sidebar" class="border">

1. The generated text will be displayed as a diff in the editor. You can reflect the text in the editor by clicking "Accept" or "Discard" in the editor or by clicking the "Accept" or "Discard" buttons in the right sidebar

    <img :src="$withBase('/assets/images/en/ai-editor-assistant_3.png')" alt="Generated text with diff display and Accept/Discard buttons" class="border">


## Using the Quick Menu

You can generate text using prompts that are preset in GROWI.

1. Click the "Editor Assistant" button at the bottom left of the editor
1. Select a preset prompt from the quick menu at the top of the right sidebar (for example, select "Create a summary of this article")

    <img :src="$withBase('/assets/images/en/ai-editor-assistant_4.png')" alt="Quick menu with pre-defined prompts selection" class="border">

1. Text will be generated

    <img :src="$withBase('/assets/images/en/ai-editor-assistant_5.png')" alt="Generated text from quick menu prompt" class="border">


## Rewriting Selected Text

You can select specific text in the editor and rewrite it.

1. Select text in the editor

    <img :src="$withBase('/assets/images/en/ai-editor-assistant_6.png')" alt="Selected text highlighted in the editor" class="border">

1. Enter a prompt in the form at the bottom of the right sidebar and click the send button

    <img :src="$withBase('/assets/images/en/ai-editor-assistant_7.png')" alt="Prompt input for rewriting selected text" class="border">

1. The generated text will be displayed as a diff for the selected text

    <img :src="$withBase('/assets/images/en/ai-editor-assistant_8.png')" alt="Diff display showing original and rewritten text" class="border">


## Generate Text Based on Knowledge within GROWI

You can generate text based on the learning content of GROWI's Knowledge Assistant.

1. Create a Knowledge Assistant by following the [Knowledge Assistant Creation Steps](/en/guide/features/ai-knowledge-assistant.html#how-to-create-a-knowledge-assistant)
1. Click the "Use Assistant" button at the top of the Editor Assistant's right sidebar
1. Select from the Knowledge Assistants you created or those published by other users

    <img :src="$withBase('/assets/images/en/ai-editor-assistant_9.png')" alt="Knowledge assistant selection dialog" class="border">

1. Generate text in the editor by entering prompts referring to other sections

<ContextualBlock context="docs-growi-org">

## Environment Variables

To use the Editor Assistant feature, environment variables need to be set up.

For details, please refer to [AI Integration Setup and Management](/en/admin-guide/management-cookbook/setup-ai) and [GROWI AI Option Environment Variables](/en/admin-guide/admin-cookbook/env-vars).

</ContextualBlock>
