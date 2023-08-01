# Create page

[[toc]]

## Getting started

<ContextualBlock context="docs-growi-org">

When you access GROWI for the first time after installing GROWI, you can see the initial setup screen for setting user ID, password, etc.

<img :src="$withBase('/assets/images/installer.png')" alt="start">

Fill in the required fields and click the "Create" button to display the following screen.

<img :src="$withBase('/assets/images/home.png')" alt="start">

</ContextualBlock>

<ContextualBlock context="help-growi-cloud">

After logging in to GROWI, the following screen will appear.

<img :src="$withBase('/assets/images/home.png')" alt="start">

</ContextualBlock>

Please refer to [App Settings](/en/admin-guide/management-cookbook/app-settings.html) of the Admin Guide for more information on admin settings.

## Create a new page

Let's create a new page.

1. Click the "New" button in the upper right corner of the screen to open the New page dialog.

    <img :src="$withBase('/assets/images/create.png')" alt="create">

    <img :src="$withBase('/assets/images/create_page1.png')" alt="create">
1. Enter `tutorial` in the `Create page under below` field and click the "Create" button.

    <img :src="$withBase('/assets/images/create_page2.png')" alt="create">
1. The edit mode screen is displayed.

    <img :src="$withBase('/assets/images/create_page3.png')" alt="create">
1. Copy the following sample text written in Markdown and paste it into the page.
    - After pasting, a preview of the page is shown on the right side of the screen. The content is reflected in real time.

    ```
    # First page
    ## Header1
    * List1
    * List2
    ## Header2
    1. Number list
    1. Number list
    ```

1. Type the text and check that it is reflected in the preview screen.

    <img :src="$withBase('/assets/images/tutorial_page1.png')" alt="page">
1. After editing, click the "Create" button.
    - The page will be created and can be viewed as shown in the image below.
    - The page toolbar in the upper right corner of the screen allows you to switch between viewing mode, editing mode, and [HackMD](/en/guide/features/hackmd.html) mode.

    <img :src="$withBase('/assets/images/tutorial_page2.png')" alt="page">


Let's edit more of the page you created.

## Add headings

You can use `#` to add headings to your pages.

Each additional `#` allows you to increase the level of headings.

<img :src="$withBase('/assets/images/header.png')" alt="page">

A table of contents is automatically created on the right side of the page when a heading is described.

<img :src="$withBase('/assets/images/toc.png')" alt="page">

## Use bulleted lists

You can use `-` and `*` to describe text as bulleted lists.

This bullet list can be hierarchical. To start a line that you want to make more deeply hierarchical, type two spaces or press the Tab key.

Let's copy and paste the following sample text written in Markdown into the page.

```

# First page
## Header1
* List1
  * List1-1
    * List1-1-1
* List2
  * List2-1
## Header2
- List3
  - List3-1

```

<img :src="$withBase('/assets/images/list.png')" alt="text">

In this way, you can organize your documents by using headings and bulleted lists. Use them proactively to create documents that are easy to read.

## Insert links

### Using the insert link function on the toolbar

1. In edit mode, click the link icon on the toolbar.

     <img   :src="$withBase('/assets/images/add_link.png')" alt="add_link">
1. The Edit Link dialog is opened. Enter the Link : `https://docs.growi.org/`, Label: `GROWI Docs`, and click the "Done" button.

    <img :src="$withBase('/assets/images/edit_link.png')" alt="edit_link">
1. The link is inserted. Check it in the preview.

    <img :src="$withBase('/assets/images/link.png')" alt="link">

### Writing in Markdown

- Write in the edit screen as follows.

  ```
  [Label](URL or page path)
  ```

## Insert an image

### Using the Attach function

You can insert an image in the following ways

- Click the file attachment icon on the toolbar and select the image you want to insert.
- Drag and drop the image you want to insert.
- Copy and paste the image you want to insert

<img :src="$withBase('/assets/images/attach.png')" alt="attach">

::: tip
The Attach function allows you to upload and save files to AWS or GCS.

Please refer to [here](/en/admin-guide/admin-cookbook/attachment.html) for details.
:::

::: tip
When you attach an image to a new page, the page will be automatically saved and the public area will be changed to **Only Me**.
For more information on the scope of publication, see [here](/en/guide/features/authority.html).
:::

### Writing in Markdown

- You can insert the following template from the image icon on the toolbar.

  <img :src="$withBase('/assets/images/add_image.png')" alt="image">

- Example

  ```
  ![growi](https://growi.org/assets/images/logo.png)
  ```

## Using emoji

Please refer to [here](/en/guide/features/emoji.html).

## Decorate text

You can use Markdown's text decoration techniques to make your text more readable. Some of these can be inserted using the toolbar at the top of the editing screen.

Copy and paste the following sample text into the page and check the preview.

```

  # Decorate text

  ## Bold

    ```
    **Bold**
    ```

  **Bold**

  ## Italic

    ```
    *Italic*
    ```

  *Italic*

  ## Strikethrough

    ```
    ~~Strikethrough~~
    ```

  ~~Strikethrough~~

  ## Inline code

    ```
    `Inline code`
    ```
  `Inline code`

  ## Quotation

    ```
    >Quotation
    >>Quotation
    ```

  >Quotation
  >>Quotation

  ## Horizontal line

    ```
    ***
    ---
    ```

  ***
  ---
    
  ## Code block

    ```
    Code block
    ```

```

## Create a table

Please refer to [here](/en/guide/features/table.html).

## Display a list of pages

GROWI has a convenient function to display a list of pages that have been created.

Please refer to [here](/en/guide/tips/hierarchical.html) for details.

Let's learn just a simple usage.

Go to the top page and describe `lsx` as follows.

```
$lsx()
```

<img :src="$withBase('/assets/images/lsx_sample.png')" alt="lsx">

A list of pages under the page being edited is output.

After outputting the list, you may want to move pages around to organize the document more.

Please refer to [here](/en/guide/features/page_operation.html) for more information on moving pages.

Let's grow the Wiki by creating more and more pages.
