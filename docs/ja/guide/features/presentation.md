# プレゼンテーション機能を使う

GROWIには、プレゼンテーション機能があります。この機能を使うと、他のプレゼンテーションソフトを使わずに、ページの内容を自動でスライドに変換し、全画面表示のスライドショーを開始できます。

スライドの作成方法は GROWI のデフォルトの機能を使う方法と、[Marp](https://marp.app/) を利用する方法の2種類あります。[Marp](https://marp.app/) とは、Markdown を使ってプレゼンテーションスライドを作成できるツールです。

以下、GROWI のデフォルトの機能を使って作成したスライドを「GROWI スライド」、Marp を利用して作成したスライドを「Marp スライド」と呼びます。

## GROWI スライドと Marp スライドの特徴

### GROWI スライド

- 特別な設定や編集をする必要はありません。
- スライドショーを開始すると、Markdown で記載されたページの見出しごとにスライドが自動で作成されます。 (対象の見出しは h1(#) と h2(##) です。)
- lsx などの GROWI 独自の記法が使えます。
- GROWI で対応している Math、Mermaid、draw.io などが表示できます。

### Marp スライド

- すべての Marp 記法を使うことができます。
- スライド区切りの指定や、デザインの設定など、より表現力豊かなスライドを作成できます。
- View モードや編集モードのプレビューでスライドを表示できます。

<img :src="$withBase('/assets/images/ja/marp.png')" alt="marp">

::: tip
Marp スライドを作成する方法は [こちら](/ja/guide/features/presentation.html#marp-でスライドを作成する) をご参照ください。
:::

## スライドショーを開始する

1. ページツールボタンの3点リーダーをクリックします。
1. 表示されたメニューの中から、「プレゼンテーション」を選択してください。
1. スライドショーが開始されます。画面右下の矢印ボタンをクリックするか、キーボードのカーソルキーを使って操作してください。

<img :src="$withBase('/assets/images/ja/presentation.png')" alt="presentation">

::: tip
ページ内の Frontmatter に `marp: true` が設定されている場合は、Marp スライドが表示されます。設定がない場合には、GROWI スライドが表示されます。

Frontmatter や Marp についての詳細は [こちら](/ja/guide/features/presentation.html#marp-でスライドを作成する) をご参照ください。
:::

## Marp でスライドを作成する

:::tip
この機能を利用するには、管理者設定で Marp 機能を有効にする必要があります。設定方法は [こちら](/ja/admin-guide/management-cookbook/marp.html) をご参照ください。
:::

Marp を利用するためには、ページ内に Frontmatter を記載し `marp: true` を記載します。(v6.2.0以降、Frontmatter は Marp の有効・無効に関わらずプレビューには表示されません。)

スライド区切りは `---` などの横罫線で指定できます。Frontmatter の終了罫線の次の罫線からスライド区切りとして認識されます。

その他の具体的な記法は [Marpit Markdown](https://marpit.marp.app/markdown) などをご参照ください。

## 記法例

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



