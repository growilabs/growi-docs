# 画像などのファイルを挿入する

## ファイルをアップロードする

以下の3種類の方法で、ファイルを挿入できます。

- ツールバーのファイル添付アイコンをクリックし、挿入したいファイルを選択する
- 挿入したいファイルをドラックアンドドロップする
- 挿入したいファイルをコピーアンドペーストする

<img :src="$withBase('/assets/images/attach.png')" alt="attach">

<ContextualBlock context="docs-growi-org">

::: tip
AWS や GCS へファイルをアップロードするには管理画面で設定が必要です。

設定方法は[こちら](/ja/admin-guide/admin-cookbook/attachment.html)をご参照ください。
:::

</ContextualBlock>

::: tip
ページを新規作成する画面でファイルを挿入すると、自動的にページが保存され、公開範囲が **自分のみ** に変更されます。
公開範囲については[こちら](/ja/guide/features/authority.html)をご参照ください。
:::

## Markdown で記述する

- 画像アイコンから以下のような画像挿入テンプレートを挿入できます。

  <img :src="$withBase('/assets/images/add_image.png')" alt="image">

- 記述例

  ```
  ![growi](https://growi.org/assets/images/logo.png)
  ```
