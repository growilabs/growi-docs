# Marp の設定

[Marp](https://marp.app/) とは、Markdown でプレゼンテーションのスライドを作成できる便利なツールです。

GROWI では、GROWI と Marp で使われる Markdown のレンダリングエンジンが異なることからデフォルトでは Marp を無効化しています。

Marp を有効化するためには、管理者権限のあるユーザーで管理メニューから操作する必要があります。

:::warning
Marp を有効化することで、GROWI と異なるレンダリングエンジンが使用され、XSS に対して脆弱になる恐れがあります。
:::

## Marp の有効化/無効化

1. 管理メニューの「Customize」に移動します。

<img :src="$withBase('/assets/images/group1.png')" alt="group1">

2. 「Function」項目の中の「Enable Marp」にチェックをつけることで Marp が有効化します。

<img :src="$withBase('/assets/images/group1.png')" alt="group1">

3. 「Function」項目の中の Update ボタンをクリックします。

