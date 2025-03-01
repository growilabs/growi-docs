# Markdown の書き方

GROWI では Markdown (マークダウン) という書式でページを書くことができます。2、3個の簡単な記法を覚えることで、読みやすい文書を書くことができます。

このページの内容は、動画でも解説しています。

<figure>
  <figcaption>【GROWI v7】Markdown の活用</figcaption>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/gx5DRVbaiP0?si=abKP1E64VYGPchas" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</figure>

## 見出しをつける

行頭に #  (シャープと半角スペース) をつけて、タイトルを書くと見出しになります。# の直後には半角スペースが必須です。

まずは見出しを作ることで、ページ画面右側のサイドバーに目次が表示されます。

例:

```markdown
# 見出しレベル1

## 見出しレベル2

### 見出しレベル3
```

## 箇条書きにする

行頭に `-` (ハイフンと半角スペース) または `*` (アスタリスクと半角スペース)をつけると箇条書きとして認識されます。また `1.` のように書くと番号付きの箇条書きになります。行頭にスペースを4つ挿入すると、箇条書きをインデントできます。

**例:**

```markdown
1. 番号リストA
2. 番号リストB
3. 番号リストC

- 箇条書き
    - 入れ子
       - 更に入れ子
```

## テキストを装飾する

Markdown のテキスト装飾記法を使い、文章を読みやすくできます。いくつかの記法は、編集画面上部のツールバーを使って挿入できます。

以下のサンプルテキストをコピーして編集画面へ貼りつけ、プレビューを確認してみましょう。

```

  # テキストを装飾する

  ## 太字

    ```
    **太字**
    ```

  **太字**

  ## 斜体

    ```
    *斜体*
    ```

  *斜体*

  ## 取り消し線

    ```
    ~~取り消し線~~
    ```

  ~~取り消し線~~

  ## インラインコード

    ```
    `インラインコード`
    ```
  `インラインコード`

  ## 引用

    ```
    >引用
    >>引用
    ```

  >引用
  >>引用

  ## 水平線

    ```
    ***
    ---
    ```

  ***
  ---
    
  ## コードブロック

    ```
    コードブロック
    ```

```

## 記法一覧

[https://growi.cloud/blog/811](https://growi.cloud/blog/811)
