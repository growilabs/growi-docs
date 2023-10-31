# デモサイトで GROWI を体験する

GROWI はデモサイトがあるため、簡単に始めることができます。

[[toc]]

## デモサイトにログインする

[デモサイト](https://demo.growi.org/) にアクセスして、デモサイトに掲載されているアカウントでログインしてください。

## ページを作成する

画面右上にある「作成」ボタンからページの作成をしてみましょう。

<img :src="$withBase('/assets/images/create_page_button.png')" alt="">

ここでのタイトルは `/お試し/はじめてのページ` とします。すでに作成されている場合には、違うページ名で作成してみてください。

<img :src="$withBase('/assets/images/create_page_dialog.png')" alt="">


その後に下記の内容をコピーします。

```markdown
# はじめてのページ
## 見出し1

* 箇条書き1
* 箇条書き2

## 見出し2

1. 番号リスト
2. 番号リスト
```

貼り付けると下記のように内容がリアルタイムに反映されたプレビューが画面右側に表示されます。

<img :src="$withBase('/assets/images/begin_create_page.png')" alt="作成ボタン">

画面右下の「作成」ボタンを押して、ページを保存しましょう。

<img :src="$withBase('/assets/images/save_button.png')" alt="作成ダイアログ">

::: tip
ショートカットキーとして、 **Ctrl+s** でページを保存できます。
:::

## 作ったページ配下に更にページを作る

自分が作ったページ配下に更にページを追加してみましょう。もう一度、画面右上にある「作成」ボタンからページを作成します。

今度はページ名を `/マイページ/入れ子のページ` とします。

<img :src="$withBase('/assets/images/create_nest_page_dialog.png')" alt="">

その後に下記の内容をコピーします。

```markdown
# 入れ子のページ
## 入れ子の見出し1

* 箇条書き1
* 箇条書き2

## 入れ子の見出し2

1. 番号リスト
2. 番号リスト
```

入力が完了したら、画面右下の「作成」ボタンを押してページを保存しましょう。

<img :src="$withBase('/assets/images/save_button.png')" alt="">

## 親のページに移動する

上記作業が終わった後、表示されたページ内の「マイページ」をクリックすることで、親のページに簡単に移動できます。

<img :src="$withBase('/assets/images/title_click.png')" alt="">

## ページ配下に作成したページ一覧を確認する

ページ配下に作成したページ一覧は、ページ内に表示またはページ右側のボタンから確認できます。
<img :src="$withBase('/assets/images/page_list.png  ')" alt="">
<img :src="$withBase('/assets/images/page_list2.png  ')" alt="">
