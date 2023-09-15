# Create slides for a presentation

GROWI can automatically create slides for presentations. This feature allows you to automatically convert page content into slides and start a slide show without using other presentation software.

There are two ways to create slides: using GROWI's default feature or using [Marp](https://marp.app/). (Hereafter, slides created using the default GROWI feature will be called "GROWI slides" and slides created using Marp will be called "Marp slides.)

When creating GROWI slides, no special settings or editing is required. When you start a slideshow, a slide is automatically created for each page heading in Markdown (h1 and h2 are the slide splitter).

See [here](/en/guide/features/marp.html) for instructions on how to create Marp slides.

For the difference between GROWI slides and Marp slides, see [here](/en/guide/features/presentation.html#Features of GROWI slides and -marp- slides).

## Start the slideshow

1. Click on the three dot leader on the page tools button
1. Select "Presentation" from the menu that opens.
1. The slide show will start. Click on the arrow button at the bottom right of the screen or use the cursor keys on the keyboard.

<img :src="$withBase('/assets/images/en/presentation.png')" alt="presentation">

::: tip
If `marp: true` is set in the Frontmatter of the page, the Marp slide will be displayed; if not, the GROWI slide will be displayed. For more information about Frontmatter and Marp, please refer to [here](/en/guide/features/marp.html).
:::

## Features of GROWI slides and Marp slides

### GROWI Slide

- Slides are automatically created for each h1 and h2 heading on the page.
- You can use GROWI's original features such as lsx.
- Math, Mermaid, draw.io, etc. supported by GROWI can be displayed.

### Marp Slide

- All Marp syntax can be used.
- You can create more beautiful slides by design settings, etc.
- Slides can be displayed in View mode.
- Slides can be previewed in Edit mode.

<img :src="$withBase('/assets/images/en/marp.png')" alt="marp">
