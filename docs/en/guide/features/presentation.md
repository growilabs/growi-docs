# Create slides for a presentation

GROWI can automatically create slides for presentations. This feature allows you to automatically convert page content into slides and start a full-screen slide show without using other presentation software.

There are two ways to create slides: using GROWI's default feature or using [Marp](https://marp.app/). [Marp](https://marp.app/) is a tool for creating presentation slides using Markdown.

Hereafter, slides created using the default GROWI feature will be called "GROWI slides" and slides created using Marp will be called "Marp slides".

## Features of GROWI slides and Marp slides

### GROWI Slide

- No special settings or editing is required.
- When you start a slideshow, a slide is automatically created for each page heading in Markdown (h1 and h2 are the slide splitter).
- You can use GROWI's original features such as lsx.
- Math, Mermaid, draw.io, etc. supported by GROWI can be displayed.

### Marp Slide

- All Marp syntax can be used.
- You can create more beautiful slides by design settings, etc.
- Slides can be displayed in View mode.
- Slides can be previewed in Edit mode.

<img :src="$withBase('/assets/images/en/marp.png')" alt="marp">

## Start the slideshow

1. Click on the three dot leader on the page tools button
1. Select "Presentation" from the menu that opens.
1. The slide show will start. Click on the arrow button at the bottom right of the screen or use the cursor keys on the keyboard.

<img :src="$withBase('/assets/images/en/presentation.png')" alt="presentation">

::: tip
If `marp: true` is set in the Frontmatter of the page, the Marp slide will be displayed; if not, the GROWI slide will be displayed.

For more information about Frontmatter and Marp, please refer to [here](/en/guide/features/marp.html).
:::

## Create slides using Marp

:::tip
To use this feature, the administrator must activate the Marp. For details on how to set it up, [click here](/en/admin-guide/management-cookbook/marp.html)
:::

To use Marp, set `marp: true` in the front-matter of the page. (From GROWI v6.2.0 onwards, front-matter is not shown in preview regardless of whether Marp is true or false.)

Slides are split by a horizontal rule such as `---`. The horizontal ruler after the ending ruler of the front matter is recognized as a slide splitter.

Please refer to [Marpit Markdown](https://marpit.marp.app/markdown) for more information.

<img :src="$withBase('/assets/images/en/marp.png')" alt="">

### Example

~~~marp
---
marp: true
header: "Marp in GROWI"
footer: "How to use Marp"
paginate: true
---

<style scoped>
h1 {
    text-align: center;
}
</style>
# How to use Marp

---

## GROWI Features
- Wiki in Markdown
- Search by ElasticSearch
- Simultaneous editing by multiple users
- Group management
- Comment function

![bg right 80%](https://growi.org/assets/images/growi-logo.svg)

---

## GROWI Features
- Drawing with draw.io
- Can use mermaid and Marp
- Activate Marp as follows
```
---
marp: true
---

Body text

```
~~~

