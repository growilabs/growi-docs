# Master Attachment References and Display with `$ref` Tags

GROWI's `$ref` family of tags lets you embed attachment links, display images, and build galleries — all within your page content.
You can reference attachments by file name or by ID, and even pull in attachments from other pages.
When referencing by file name, replacing the file with a new one of the same name automatically updates the page — no need to edit any links.

## `$ref` tag — Embed a link to an attachment

Embeds a link to an attachment file.

### Syntax

```
$ref(file.txt)
$ref(file.txt, page=/somewhere/page)
$ref(5f17286fd7fbb1104fdbd111, page=/somewhere/page)
```

### Options

| Option | Required | Description |
| --- | --- | --- |
| `file` | One of these | File name of the attachment to reference (default: first argument) |
| `id` | One of these | Attachment ID of the file to reference (default: first argument) |
| `page` | Optional | Page path to search for the file (default: current page) |

## `$refs` tag — Display a list of attachments

Displays a list of attachments found on the specified page or pages.

### Syntax

```
$refs(/somewhere/page, regexp=/^file.*\.txt$/)
```

### Options

| Option | Required | Description |
| --- | --- | --- |
| `page` | Optional | Target page path to search attachments (default: first argument or current page) |
| `prefix` | Optional | Page path prefix to search attachments |
| `depth` | Optional | Page depth to search attachments |
| `regexp` | Optional | Regular expression to filter files by name |

## `$refimg` tag — Display an attachment image

Displays an attached image file. You can specify the display size and alt text.

### Syntax

```
$refimg(pict.png, width=50%, alt=Pic)
$refimg(5f17286fd7fbb1104fdbd111, width=50%, alt=Pic)
```

### Options

| Option | Required | Description |
| --- | --- | --- |
| `file` | One of these | File name of the attachment to reference (default: first argument) |
| `id` | One of these | Attachment ID of the file to reference (default: first argument) |
| `width` | Optional | Width (e.g. `width=200px`, `width=50%`) |
| `height` | Optional | Height (e.g. `height=100px`) |
| `max-width` | Optional | Max width (e.g. `max-width=200px`, `max-width=50%`) |
| `max-height` | Optional | Max height (e.g. `max-height=100px`) |
| `alt` | Optional | Alt text |

## `$refsimg` tag — Display a list of attachment images

Displays a collection of attached images from the specified page or pages. Grid layout is also supported.

### Syntax

```
$refsimg(/somewhere/page, regexp=/^.*\.png$/, max-width=200)
$refsimg(prefix=/somewhere, grid=autofill, grid-gap=1px)
```

### Options

| Option | Required | Description |
| --- | --- | --- |
| `page` | Optional | Target page path to search attachments (default: first argument or current page) |
| `prefix` | Optional | Page path prefix to search attachments |
| `depth` | Optional | Page depth to search attachments |
| `regexp` | Optional | Regular expression to filter files by name |
| `width` | Optional | Width (e.g. `width=200px`, `width=50%`) |
| `height` | Optional | Height (e.g. `height=100px`) |
| `max-width` | Optional | Max width (e.g. `max-width=200px`, `max-width=50%`) |
| `max-height` | Optional | Max height (e.g. `max-height=100px`) |
| `display` | Optional | `display` property for each image (disabled when `grid` is set; defaults to `block`) |
| `grid` | Optional | Grid layout setting (see table below) |
| `grid-gap` | Optional | Grid gap (e.g. `grid-gap=1px`) |

#### `grid` option values

| Value | Description |
| --- | --- |
| `autofill` | Auto-fill grid with 64px tracks (same as `autofill-md`) |
| `autofill-xs` | Auto-fill grid with 32px tracks |
| `autofill-sm` | Auto-fill grid with 48px tracks |
| `autofill-md` | Auto-fill grid with 64px tracks |
| `autofill-lg` | Auto-fill grid with 128px tracks |
| `autofill-xl` | Auto-fill grid with 192px tracks |
| `col-2` to `col-6` | Fixed column count grid (2–6 columns) |

## `$gallery` tag — Display images in a gallery layout

A shorthand for `$refsimg(grid=col-4, grid-gap=1px)`.
Displays attachment images from the specified pages in a 4-column gallery grid.

### Syntax

```
$gallery(prefix=/somewhere/page)
```

### Options

Accepts the same options as `$refsimg`.
