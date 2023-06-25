# ページを削除する

ページ作成が進むと、ページの削除もしたくなってきます。

不要となったページは、削除して wiki の整理を進めましょう。

## 削除の対象として、1ページを削除する

削除したい対象ページへ移動し、画像のように削除メニューを選択します。

<img :src="$withBase('/assets/images/delete1.png')" alt="delete1">

<!-- textlint-disable weseek/ja-no-mixed-period -->
削除メニューでは
<!-- textlint-disable weseek/ja-no-mixed-period -->

- 全ての子ページも削除

- 完全削除

のそれぞれにチェック欄があります。デフォルトで、全ての子ページも削除にはチェックがついています。

<img :src="$withBase('/assets/images/delete2.png')" alt="delete2">

子ページがないページで、「削除」ボタンを押してみましょう。

「This page is in the trash .」のメッセージとともに、階層の先頭にゴミ箱のマークがあるページへ移動します。

<img :src="$withBase('/assets/images/delete3.png')" alt="delete3">

削除後、そのページは今までの階層からは参照できなくなります。

<img :src="$withBase('/assets/images/delete4.png')" alt="delete4">

## 削除したページをゴミ箱で確認する

削除したページは、ヘッダーのユーザー名をクリックして出てくるメニューの中の「削除済みページ」から参照できます。

<img :src="$withBase('/assets/images/delete5.png')" alt="delete5">

ゴミ箱のアイコンが表示されているメニューから参照できます。

「/trash」の配下に、元のページの階層を維持した構成でページが移動します。

<img :src="$withBase('/assets/images/delete6.png')" alt="delete6">

削除済みページを選択すると、ページの参照と「元に戻す」操作、「完全削除」操作ができます。

<img :src="$withBase('/assets/images/delete3.png')" alt="delete3">

削除済みのページは編集ができませんので、編集する場合は元に戻してください。

## 完全削除する

「/trash」配下にあるページの「完全削除」ボタン

<img :src="$withBase('/assets/images/delete3.png')" alt="delete3">

またはページ削除時の完全削除のチェックボックスにチェックをした状態での削除によって、
ページは完全に削除できます。

<img :src="$withBase('/assets/images/delete7.png')" alt="delete7">

## 子ページも削除する

あるページの配下の全てのページを一括で削除できます。

削除実行前のページ一覧を確認してみましょう。

<img :src="$withBase('/assets/images/delete8.png')" alt="delete8">

「チュートリアル」ページを選択し、削除時に「全ての子ページも削除」のチェックをした状態で削除ボタンを押します。

<img :src="$withBase('/assets/images/delete9.png')" alt="delete9">

<img :src="$withBase('/assets/images/delete10.png')" alt="delete10">

すると、チュートリアルページ配下の全てが削除されます。

完全削除の実行後は、「/チュートリアル」ページを参照すると、「 Page is not found」が表示されます。

<img :src="$withBase('/assets/images/delete11.png')" alt="delete11">

トップページのページ一覧表示でも分かる通り、削除すると対象ページ配下も一括で削除できます。

<img :src="$withBase('/assets/images/delete12.png')" alt="delete12">

削除機能も使いこなして、GROWI をより発展させましょう。
