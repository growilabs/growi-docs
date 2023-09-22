# Create slides for a presentation

GROWI can automatically create slides for presentations. This feature allows you to automatically convert page content into slides and start a full-screen slide show without using other presentation software.

There are two ways to create slides: using GROWI's default feature or using [Marp](https://marp.app/). Marp is a tool for creating presentation slides using Markdown.

Hereafter, slides created using the default GROWI feature will be called "GROWI slides" and slides created using Marp will be called "Marp slides".

## Start the slideshow

1. Click on the three dot leader on the page tools button
1. Select "Presentation" from the menu that opens.
1. The slide show will start. Click on the arrow button at the bottom right of the screen or use the cursor keys on the keyboard.

<img :src="$withBase('/assets/images/en/presentation.png')" alt="presentation">

::: tip
If `marp: true` is set in the front-matter of the page, the Marp slide will be displayed; if not, the GROWI slide will be displayed.
:::

## View slides in view mode or preview in edit mode

GROWI can render the page content as slides without using the presentation feature. (This feature is hereafter referred to as the slide view feature.)

To use the slide view feature, include `slide: true` in the front-matter of the page.

<img :src="$withBase('/assets/images/en/slide_preview.png')" alt="slideview">

<img :src="$withBase('/assets/images/en/slide_view.png')" alt="slideview">

### Example

~~~slide view
---
slide: true
---

# How to use GROWI

### GROWI Features
- Wiki in Markdown
- Search by ElasticSearch
- Simultaneous editing by multiple users
- Group management
- Comment function

![bg right 80%](https://growi.org/assets/images/growi-logo.svg)

## GROWI Features
- Drawing with draw.io
- Markdown can be display as slides.

```
---
slide: true
---

本文

```
~~~


## GROWI slide and Marp slide

### Features

#### GROWI Slide

- A slide is automatically created for each page heading in Markdown (h1(#) and h2(##) are the slide splitter).
- GROWI's original syntax, such as lsx, can be used.
- Math, Mermaid, draw.io, etc. supported by GROWI can be rendered.
- Slides can be shown in view mode or preview in edit mode.

#### Marp Slide

- All Marp syntax can be used.
- You can create more beautiful slides by design settings, etc.
- Slides can be displayed in View mode.
- Slides can be shown in view mode or preview in edit mode.

::: tip
Marp slides are compatible with [Marp for VS Code](https://github.com/marp-team/marp-vscode), so you can preview each other using the same Markdown file.
:::

### Create GROWI slides

No special configuration or editing is required to use the Presentation feature. When you start a slideshow, it automatically converts the Markdown content into slides.

If you want to view slides in View mode or Edit mode preview, please use [slide view feature](/en/guide/features/presentation.html##view-slides-in-view-mode-or-preview-in-edit-mode).

### Create Marp slides

:::tip
To use this feature, the administrator must activate the Marp. For details on how to set it up, please refer to [here](/en/admin-guide/management-cookbook/marp.html).
:::

To use Marp, set `marp: true` in the front-matter of the page.

Slides are split by a horizontal rule such as `---`. The horizontal ruler after the ending ruler of the front-matter is recognized as a slide splitter.

Please refer to [Marpit Markdown](https://marpit.marp.app/markdown) for more information.

<img :src="$withBase('/assets/images/en/marp.png')" alt="marp">

#### Example

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

