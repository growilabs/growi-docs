# Insert images and other files

## Uploading an image or a file

You can insert an image or a file in the following ways.

- From the plus button on the toolbar, click "Images" or "Files" and select the image or file you want to insert.
- Drag and drop the image or file you want to insert.
- Copy and paste the image or file you want to insert.

<img :src="$withBase('/assets/images/en/attach.png')" alt="attach">

<ContextualBlock context="docs-growi-org">

::: tip
Uploading files to AWS or GCS or Azure requires settings.

Please refer to [here](/en/admin-guide/admin-cookbook/attachment.html) for details.
:::

</ContextualBlock>

::: tip
When you attach an image to a new page, the page will be automatically saved and the public area will be changed to **Only Me**. For more information on the scope of publication, see [here](/en/guide/features/authority.html).
:::

## Writing in Markdown

- Example

  ```
  ![growi](https://growi.org/assets/images/logo.png)
  ```

<img :src="$withBase('/assets/images/en/add_image.png')" alt="image">
