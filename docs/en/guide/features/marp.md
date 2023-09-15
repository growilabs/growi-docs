# Create slides using Marp

:::warning
To use this feature, you must activate the feature from the adming settings. For details on how to set it up, [click here](/en/admin-guide/management-cookbook/marp.html)
:::

In GROWI, you can use [Marp](https://marp.app/) to create presentation slides.

[Marp](https://marp.app/) is a tool for creating presentation slides using Markdown. Please refer to [here](/en/guide/features/presentation.md) for more information about presentation features.

Slides created using Marp can be viewed in view mode or previewed in edit mode as shown below.

To use Marp, set `marp: true` in the front-matter of the page. (Front-matter is not shown in preview regardless of whether Marp is true or false.)
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

