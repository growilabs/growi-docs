# 画像などのファイルを挿入する

## 画像/ファイルをアップロードする

以下の3種類の方法で、画像やファイルを挿入できます。

- 左下にあるツールバーの「＋」ボタンから「Images」/「Files」をクリックした後、挿入したい画像/ファイルを選択する
- 挿入したい画像/ファイルをドラックアンドドロップする
- 挿入したい画像/ファイルをコピーアンドペーストする

<img :src="$withBase('/assets/images/ja/attach.png')" alt="attach">

<ContextualBlock context="docs-growi-org">

::: tip
AWS や GCS、Azure へファイルをアップロードするには管理画面で設定が必要です。

設定方法は[こちら](/ja/admin-guide/admin-cookbook/attachment.html)をご参照ください。
:::

</ContextualBlock>

::: tip
ページを新規作成する画面でファイルを挿入すると、自動的にページが保存され、公開範囲が **自分のみ** に変更されます。
公開範囲については[こちら](/ja/guide/features/authority.html)をご参照ください。
:::

## Markdown で記述する

- 記述例

  ```
  ![growi](https://growi.org/assets/images/logo.png)
  ```

<img :src="$withBase('/assets/images/ja/add_image.png')" alt="image">
