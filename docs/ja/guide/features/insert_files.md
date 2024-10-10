# 画像や動画などのファイルを挿入する

## 自分のデバイス上の画像やファイルを挿入する

::: tip
このセクションの内容は、[動画](https://youtu.be/MfIpdI_4_TI) でも解説しています。
:::

以下の3種類の方法で、画像やファイルを挿入できます。

- 左下にあるツールバーの「＋」ボタンから「Images」/「Files」をクリックした後、挿入したい画像/ファイルを選択する (動画の場合は「Files」)
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
v6 以前をお使いの場合、ページを新規作成する画面でファイルを挿入すると、自動的にページが保存され、公開範囲が **自分のみ** に変更されます。  
公開範囲については[こちら](/ja/guide/features/authority.html)をご参照ください。  
:::  

## Web 上の画像を挿入する

Web 上の画像を挿入するには、以下のように記述します。

```
![growi](https://growi.org/assets/images/logo.png)
```

<img :src="$withBase('/assets/images/ja/add_image.png')" alt="image">

## 動画を挿入する

::: tip
このセクションの内容は、[動画](https://youtu.be/acFPZu6geUU) でも解説しています。
:::

### GROWI にアップロードした動画を埋め込む

`<video>` タグを使用して動画をページに埋め込み、View モードた編集モードのプレビューでストリーミング再生できます。

動画を埋め込む方法は、以下の通りです。

#### 1. 動画をページにアップロードする

[自分のデバイス上の画像やファイルを挿入する](/ja/guide/features/insert_files.html#自分のデバイス上の画像やファイルを挿入する) に記載されている方法で、挿入したい動画をアップロードします。

アップロードが完了すると、エディタ上に画像のような一文が挿入されます。(エディタ上に挿入されるまで、数秒かかる場合があります。)

この例の場合、`/attachment/66dfd1205b6b5996f1b012a7` の部分が動画を埋め込む際に必要なパスです。

<img :src="$withBase('/assets/images/upload-video1.png')" alt="upload-video1">

#### 2. アップロードした動画を埋め込む

ページにアップロードした動画を埋め込むには、以下のように記述します。

```
<video src="アップロードした動画のパス" controls="true"></video>
```

また、`height` や `width` 属性を使用して、表示サイズを調整できます。

- 記述例

  ```
  <video src="/attachment/66dea1c16a8b457ec2fcaa46" controls="true" width="600"></video>
  ```

  <img :src="$withBase('/assets/images/upload-video2.png')" alt="upload-video2">

::: tip
手順 1 で挿入された `[sample-video.mp4](/attachment/66dfd1205b6b5996f1b012a7)` のような一文は、`<video>` タグを使用して動画を埋め込んだ後は、削除してもかまいません。

アップロード済みのファイルは、ページ右上にあるページツールボタンの3点リーダー > 「添付データ」から確認できます。
:::

### YouTube 動画を埋め込む

YouTube にアップロードされている動画を埋め込むには、以下のように記述します。

```
<div>
<iframe src="https://www.youtube.com/embed/YouTubeの動画ID"></iframe>
</div>
```

また、YouTube の共有機能で自動生成される動画埋め込み用の HTML タグをそのまま利用できます。
ただし、`frameborder` 属性は HTML5 で廃止されたため、境界線を設定したい場合は CSS を使います。

- 記述例

  ```
  <div style="text-align:center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/W_OK4TLbvYs?si=52EIj4mRtzoO57V5" title="YouTube video player" style="border: none; allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  ```

  <img :src="$withBase('/assets/images/embed-youtube-video.png')" alt="embed-youtube-video">
