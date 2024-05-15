# ページを一括削除する

:::warning
ページを一括で削除するためには、検索機能をセットアップする必要があります。セットアップ方法は、[こちら](/ja/admin-guide/management-cookbook/setup-search-system)をご参照ください。
:::

1. 右上にある検索アイコンをクリックし、表示された検索バーに削除したいページに関するキーワードを入力します。

    <img :src="$withBase('/assets/images/ja/enter-keywords.png')" alt="enter-keywords">
1. 検索結果が表示されるので、削除したいページのチェックボックスにチェックを入れます。

    <img  :src="$withBase('/assets/images/ja/check-the-checkboxes.png')" alt="check-the-checkboxes">
1. 「一括削除」をクリックします。

    <img  :src="$withBase('/assets/images/ja/click-deleteall.png')" alt="click-deleteall">
1. ダイアログに表示された削除するページの一覧を確認し、「ページを削除する」ボタンを押します。

- 「完全削除」にチェックを入れると、ゴミ箱を経由せずに完全削除が実行されます。
- 削除権限がないページの削除はスキップします。

    <img  :src="$withBase('/assets/images/ja/delete-page-dialog.png')" alt="delete-page-dialog">
