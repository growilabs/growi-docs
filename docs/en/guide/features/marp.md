# Create slides using Marp

:::warning
To use this feature, you must activate the feature from the adming settings. For details on how to set it up, [click here](/ja/admin-guide/management-cookbook/marp.html)
:::

In GROWI, you can use [Marp](https://marp.app/) to create presentation slides.

[Marp](https://marp.app/) is a tool for creating presentation slides using Markdown.
Please refer to [Marpit Markdown](https://marpit.marp.app/markdown) for more information.

<img :src="$withBase('/assets/images/en/marp.png')" alt="">

### 記法例

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

