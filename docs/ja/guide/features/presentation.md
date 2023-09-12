# プレゼンテーション機能を使う

GRIWIには、プレゼンテーション機能があります。この機能を使うと、他のプレゼンテーションソフトを使わずに、ページの内容を自動でスライドに変換し、スライドショーを開始できます。

スライドの作成方法は GROWI のデフォルトの機能を使う方法と、[Marp](https://marp.app/) を利用する方法の2種類あります。(以下、GROWI のデフォルトの機能を使って作成したスライドを「GROWI スライド」、Marp を利用して作成したスライドを「Marp スライド」と呼びます。)

GROWI スライドを作成する場合は、特別な設定や編集をする必要はありません。スライドショーを開始すると、Markdown で記載されたページのすべての見出しに対し、1枚のスライドが自動で作成されます。

Marp スライドを作成する方法は [こちら](/ja/guide/features/presentation.html#marp-を利用してスライドを作成する) をご参照ください。

GROWI スライドと Marp スライドの違いについては [こちら](/ja/guide/features/presentation.html#growi-スライドと-marp-スライドの違い) をご参照ください。

## スライドショーを開始する

1. ページツールボタンの3点リーダーをクリックします。
1. 表示されたメニューの中から、Presentation を選択してください。
1. スライドショーが開始されます。画面右下の矢印ボタンをクリックするか、キーボードのカーソルキーを使って操作してください。

<img :src="$withBase('/assets/images/ja/presentation.png')" alt="presentation">

::: tip
ページ内の Frontmatter に `marp: true` が設定されている場合は、Marp スライドが表示されます。設定がない場合には、GROWI スライドが表示されます。
:::

## GROWI スライドと Marp スライドの違い



### GROWI スライド

- スライドは h1 と h2 ごとに自動で作成されるので、特別な編集をする必要がありません。
- lsx などの GROWI 独自の記法が使えます。
- GROWI で対応している Math、Mermaid、draw.io などが使えます。

### Marp スライド

- すべての Marp 記法を使うことができるので、より表現力豊かなスライドを作成できます。

### 各機能の対応一覧

|                           | GROWI スライド | Marp スライド |
| ------------------------- | -------------- | ------------- |
| スライド区切りの指定      | ×              | ⚪︎           |
| 詳細なスタイル設定        | ×              | ⚪︎           |
| lsx などの GROWI 独自記法 | ⚪︎            | ×             |
| Math                      | ⚪︎            | ×             |
| Mermaid                   | ⚪︎            | ×             |
| draw.io                   | ⚪︎            | ×             |
| 絵文字                    | ⚪︎            | ⚪︎           |
| PlantUML                  | ⚪︎            | ⚪︎           |


## Marp を利用してスライドを作成する

:::warning
この機能を利用するには、管理者設定から機能を有効化する必要があります。設定方法は [こちら](/ja/admin-guide/management-cookbook/marp.html) をご参照ください。
:::

[Marp](https://marp.app/) とは、Markdown を使ってプレゼンテーションスライドを作成できるツールです。
具体的な記法は [Marpit Markdown](https://marpit.marp.app/markdown) などをご参照ください。

<img :src="$withBase('/assets/images/ja/marp.png')" alt="marp">

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

