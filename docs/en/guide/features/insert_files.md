# Insert images, videos and other files

## Insert images and files on your own device

You can insert an image or a file in the following ways.

- From the plus button on the toolbar, click "Images" or "Files" and select the image or file you want to insert (for videos, choose "Files").
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

## Insert an image on the web

To insert an image on the web, write as follows.

- Example

  ```
  ![growi](https://growi.org/assets/images/logo.png)
  ```

<img :src="$withBase('/assets/images/en/add_image.png')" alt="image">

## Insert a video

### Embed videos on your own device

You can embed a video into your page using the `<video>` tag and stream it in view mode or preview in edit mode.

#### 1. Upload the video to your page

Follow [Insert images and files on your own device](/en/guide/features/insert_files.html#Insert images and files on your own device) to upload the video you want to insert.
