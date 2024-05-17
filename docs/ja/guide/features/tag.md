# タグを利用する

GROWI ではページパスという階層構造でページを管理するのが一般的ですが、ページに対してタグを付けることで、横断的に属性を持たせた管理も可能です。

タグを利用すれば特定のページを検索しやすくなります。

ここではタグの使い方を説明します。

## ページにタグを付ける

タグを付けたいページへ移動します。  
下記の画像の通り、ページ右側に「タグ」と書かれています。

<img :src="$withBase('/assets/images/ja/tag1.png')" alt="tag1">


ページの「タグ」をクリックして、タグを追加できます。  
「タグ」をクリックすると下記の画像のようにタグ編集用のウィンドウが表示されます。

<img :src="$withBase('/assets/images/ja/tag2.png')" alt="tag2">

この入力欄で、タグとして利用したい単語を入力し、下記の画像の赤枠部分をクリックします。

<img :src="$withBase('/assets/images/ja/tag3.png')" alt="tag3">


すると、下記の画像のように、単語に囲いができます。

<img :src="$withBase('/assets/images/ja/tag4.png')" alt="tag4">


この状態がタグとして設定可能な状態です。日本語のタグも利用できます。  
複数同時にタグとして追加可能で、各タグの×ボタンでタグの削除編集もできます。

<img :src="$withBase('/assets/images/ja/tag5.png')" alt="tag5">

ページに付けたいタグの設定ができたら、下記の画像の通り完了ボタンをクリックします。

<img :src="$withBase('/assets/images/ja/tag6.png')" alt="tag6">

完了ボタンクリックにより、ページにタグが設定されます。
ページに付いたタグは、クリックすると検索が実行されます。

<img :src="$withBase('/assets/images/ja/tag7.png')" alt="tag6">

ページに付いたタグをクリックした結果、タグを対象にページ検索が実行されます。
<!-- textlint-disable weseek/no-doubled-joshi -->
検索結果には、同じタグが付いたページが表示されます。
<!-- textlint-enable weseek/no-doubled-joshi -->

<img :src="$withBase('/assets/images/ja/tag8.png')" alt="tag8">


## タグで検索する

右上のツールバーにある検索アイコンからも、タグを対象に検索が可能です。  
検索ボックスに表示されている検索のヘルプをクリックすると下記の画像のように表示されます。

<img :src="$withBase('/assets/images/ja/tagsearch1.png')" alt="tagsearch1">

tag 検索の使い方として `tag:日本語` などの入力形式でタグを対象とした検索が可能です。

入力すると、先ほど設定したタグが付いたページが表示されます。

<img :src="$withBase('/assets/images/ja/tagsearch2.png')" alt="tagsearch2">

タグ機能も使いこなして、GROWI をより発展させましょう。
