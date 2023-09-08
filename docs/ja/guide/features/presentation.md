# プレゼンテーション機能を使う

プレゼンテーション機能を使うと、ページの内容を自動でスライドに変換し、スライドショーを開始できます。
スライドの作成方法は GROWI のデフォルトの機能を使う方法と、[Marp](https://marp.app/) を利用する方法の2種類あります。

GROWI のデフォルトの機能を使う場合は、特別な設定をする必要はありません。スライドショーを開始すると、Markdown で記載されたページのすべての見出しに対し、1枚のスライドが自動で作成されます。

Marp を利用する方法の詳細は こちら をご参照ください。

## スライドショーを開始する

1. ページツールボタンの3点リーダーをクリックします。
1. 表示されたメニューの中から、Presentation を選択してください。
1. スライドショーが開始されます。画面右下の矢印ボタンをクリックするか、キーボードのカーソルキーを使って操作してください。

<img :src="$withBase('/assets/images/ja/presentation.png')" alt="presentation">

## Marp でスライドを作成する

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

