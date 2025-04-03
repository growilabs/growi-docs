# ページテンプレートを使ってページの作成を楽にする

## テンプレートとは

GROWI のテンプレート機能とは、頻繁に作成する同じ構造のページ（会議議事録、週報、マニュアルなど）を効率的に作成するための機能です。テンプレートを使うことで、以下のようなメリットがあります。

- 毎回同じ見出しや構造を手動で入力する手間を省ける
- チーム内でページの構造を統一できる
- 必要な項目の記入漏れを防げる

## 階層に対してテンプレートを適用する方法

ここでは、日報テンプレートを作成する例をご紹介します。

このセクションの内容は、動画でも解説しています。

<figure>
  <figcaption>【GROWI v7】階層テンプレートの適用方法</figcaption>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/FpTFmQ2pOgA?si=0g6UABblqRYTrdp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</figure>

### テンプレートページを作成する

<img :src="$withBase('/assets/images/ja/template_01.png')" alt="template_01">

ページツールバーから、「テンプレートページの作成/編集」を選択します。

<img :src="$withBase('/assets/images/ja/template_02.png')" alt="template_02">

表示されたダイアログから、「同一階層テンプレート」の編集ボタンを押します。

その後に下記内容を貼り付けてページを保存してください。

```markdown
# MM月 DD 日 日報

## 今日やったこと

## 明日やること

## 何らかの要因でブロックになっていること

## TODO

## 連絡事項
```

これで定形となるテンプレートページが作成されました。

### テンプレートが適用されたページを作る

次に、テンプレートページを作成した同一階層のページに新規ページを作成します。

そうすると下記のようにテンプレートが適用された状態でページが作成されます。

編集画面に遷移するので適宜書き換えてください。

<img :src="$withBase('/assets/images/ja/template_03.png')" alt="template_03">

### 下位層テンプレートの使い方

定期的なページを作成したい場合には、先ほど紹介した「同一階層テンプレート」を使うことで実現できました。

一方、下位層テンプレートは GROWI wiki 全体でフォーマットを統一化したい場合などに利用できます。

例として、下記のようなテンプレートをトップページに配置することで、常にページ一覧がページ上部に表示されるページを作成できます。

`$lsx()` という記法は [weseek/growi-plugin-lsx](https://github.com/weseek/growi-plugin-lsx) によるものです。

```markdown
# 関連ページ

$lsx()

#
```

## ページ単位でテンプレートを挿入する方法

このセクションの内容は、動画でも解説しています。

<figure>
  <figcaption>【GROWI v7】ページ単位のテンプレートの適用方法</figcaption>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/BBiFUI1QLCg?si=t2I6EmjRONd2CFY7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</figure>

GROWIではページ単体でもテンプレートを挿入できます。

まず編集画面を開き、左下にあるテンプレートアイコンをクリックします。

<img :src="$withBase('/assets/images/ja/template_04.png')" alt="">

表示されたダイアログから作成したいテンプレートを選択し、挿入ボタンを押すと作成完了です。

<img :src="$withBase('/assets/images/ja/template_05.png')" alt="">

<img :src="$withBase('/assets/images/ja/template_06.png')" alt="">

これらのテンプレートはGROWIのプラグインを適用することで、選択できるテンプレートを増やすことが可能です。

テンプレートの追加方法は[こちら](/ja/admin-guide/management-cookbook/plugins.html#%E3%83%95%E3%82%9A%E3%83%A9%E3%82%AF%E3%82%99%E3%82%A4%E3%83%B3%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E6%96%B9%E6%B3%95)からご覧ください。
