
# Insert images and other files

## Uploading a file

You can insert an image in the following ways

- Click the file attachment icon on the toolbar and select the image you want to insert.
- Drag and drop the image you want to insert.
- Copy and paste the image you want to insert

<img :src="$withBase('/assets/images/attach.png')" alt="attach">

<ContextualBlock context="docs-growi-org">

::: tip
Uploading files to AWS or GCS requires settings.

Please refer to [here](/en/admin-guide/admin-cookbook/attachment.html) for details.
:::

</ContextualBlock>

::: tip
When you attach an image to a new page, the page will be automatically saved and the public area will be changed to **Only Me**.
For more information on the scope of publication, see [here](/en/guide/features/authority.html).
:::

## Writing in Markdown

- You can insert the following template from the image icon on the toolbar.

  <img :src="$withBase('/assets/images/add_image.png')" alt="image">

- Example

  ```
  ![growi](https://growi.org/assets/images/logo.png)
  ```
