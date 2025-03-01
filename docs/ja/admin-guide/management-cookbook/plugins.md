# プラグイン

プラグインをインストールすることで GROWI をカスタマイズできます。
公開されているプラグインは [GROWI プラグインサイト](https://growi.org/plugins)をご確認ください。

[[toc]]

このページの内容は、動画でも解説しています。

<figure>
  <figcaption>【GROWI v7】プラグインの適用・活用</figcaption>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/jwfhZ-QgsBA?si=1D0QPvyHdrH1l0ni" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</figure>

## プラグインのインストール方法

1. [GROWIプラグインサイト](https://growi.org/plugins)にアクセスします。

2. インストールするプラグインのリポジトリURLをコピーします。

<img :src="$withBase('/assets/images/ja/plugin-1.png')" alt="copy_botton">

3. GROWI に管理者アカウントでログインし、「プラグイン」にアクセスします。

<img :src="$withBase('/assets/images/ja/plugin-2.png')" alt="plugin_section">

4. リポジトリ URL を入力します。

<img :src="$withBase('/assets/images/ja/plugin-3.png')" alt="install_url">

5. インストールボタンをクリックします。

<img :src="$withBase('/assets/images/ja/plugin-4.png')" alt="install_button">

6. プラグインがプラグインカードに追加されます。また、ON/OFFを操作するとプラグインの有効化/無効化ができます。

<img :src="$withBase('/assets/images/ja/plugin-5.png')" alt="plugin_card">

## プラグインインストーラー

- プラグインをインストールするには、GitHub リポジトリの URL を指定します。
- リポジトリのブランチ指定も可能です。

::: warning

プラグインがすでにインストールされている場合、同じリポジトリから再度インストールするとプラグインは上書きされます。
また、ブランチが異なっていてもリポジトリが同じであれば上書きされます。
:::

## プラグインカード

- インストールしたプラグインを確認できます。
- プラグインの有効化/無効化や削除が行えます。
