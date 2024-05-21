# デモサイトで GROWI を体験する

GROWI はデモサイトがあるため、簡単に始めることができます。

[[toc]]

## デモサイトにログインする

[デモサイト](https://demo.growi.org/) にアクセスして、デモサイトに掲載されているアカウントでログインしてください。

## ページを作成する

画面左上にある「鉛筆アイコン」からページの作成をしてみましょう。

<img :src="$withBase('/assets/images/ja/try_growi1.png')" alt="try_growi1">

<!-- textlint-disable weseek/max-kanji-continuous-len -->
「鉛筆アイコン」を押すとページの編集画面（作成画面）が表示されます。編集画面左上のページ名の入力欄にページタイトル（ページ名）を入力しましょう。
<!-- textlint-enable weseek/max-kanji-continuous-len -->

<img :src="$withBase('/assets/images/ja/try_growi2.png')" alt="try_growi2">

その後、下記の内容をページ本文にコピーします。

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

<img :src="$withBase('/assets/images/ja/try_growi3.png')" alt="try_growi3">

画面右下の「更新」ボタンを押して、ページを保存しましょう。

<img :src="$withBase('/assets/images/ja/try_growi4.png')" alt="try_growi4">

::: tip
ショートカットキーとして、 **Ctrl+s** でページを保存できます。
:::

## 作ったページ配下に更にページを作る

先ほど作成したページを開いている状態で、画面左上の鉛筆アイコンからページを作成することで、先ほど作成したページの配下に更にページを作成できます。

<img :src="$withBase('/assets/images/ja/try_growi5.png')" alt="try_growi5">

自分が作ったページ配下に更にページを追加してみましょう。もう一度、画面左上にある「鉛筆アイコン」からページを作成します。

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

入力が完了したら、画面右下の「更新」ボタンを押してページを保存しましょう。

<img :src="$withBase('/assets/images/ja/try_growi6.png')" alt="try_growi6">

## ページ配下に作成したページ一覧を確認する

ページ配下に作成したページ一覧は、ページ内の右側のボタンから確認できます。

<img :src="$withBase('/assets/images/ja/try_growi7.png')" alt="try_growi7">
