# Marp でスライドを作成する

:::warning
この機能を利用するには、管理者設定から機能を有効化する必要があります。設定方法は [こちら](/ja/admin-guide/management-cookbook/marp.html)
:::

GROWI では [Marp](https://marp.app/) を利用して、スライドを作成できます。

[Marp](https://marp.app/) とは、Markdown を使ってプレゼンテーションスライドを作成できるツールです。
具体的な記法は [Marpit Markdown](https://marpit.marp.app/markdown) などをご参照ください。

### 記法例

~~~marp
---
marp: true
header: "Marp in GROWI"
footer: "GROWI の使い方"
paginate: true
---

<style scoped>
h1 {
    text-align: center;
}
</style>
# GROWI の使い方

---

## GROWI の機能
- Markdown で Wiki が書ける
- ElasticSearch による検索
- 同時多人数編集
- グループ管理
- コメント機能

![bg right 80%](https://growi.org/assets/images/growi-logo.svg)

---

## GROWI の機能
- そのほか draw.io による作図もサポートしています
- Markdown には mermaid や Marp の使用も可能です
- 次のように Marp を有効化します
```
---
marp: true
---

本文

```
~~~

