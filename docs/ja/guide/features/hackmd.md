# HackMD で同時多人数編集を利用する

GROWI では、ページの編集を同時に多人数が行える機能 HackMD が利用できます。

使い方について説明します。

## HackMD とは

HackMD とは、Markdown で書いたドキュメントを複数人で編集でき、リアルタイムプレビューが可能なツールです。

オープンソースとしても公開されています。

GROWI では HackMD/CodiMD と連携させることで、GROWI 管理下のドキュメントを同時に多人数で編集することができるようになります。

※CodiMD は HackMD からフォークした OSS です。

## HackMDを利用するための設定について

HackMD を使うためには、GROWI の環境に HackMD が設定されている必要があります。

この設定については、別途の[管理者ガイドのページ](/admin-guide/admin-cookbook/integrate-with-hackmd.html)を参照してください。

以下、HackMD が利用できるよう設定された GROWI 環境であることを前提に説明します。

## HackMD でページを編集しよう

ページの参照編集モード切替のタブで、以下の画像で赤丸をつけた HackMD のタブを選択する事で、HackMD を利用しての編集となります。

![](./images/HackMD1.png)


HackMD は一人でも利用できますが、ここでは２つのユーザーアカウントで HackMD を利用してページ編集する方法を説明します。

### HackMDモードでの編集開始

ユーザーA と ユーザーB が同じページを同時に編集します。

まず、ユーザーA が ページ編集のタブ HackMD をクリックします。

すると、`HackMD is READY!` という表示と、`Start to edit with HackMD` の青いボタンが表示されるので、ボタンをクリックします。

![](./images/HackMD2.png)

クリックすると、下記の画像のように、HackMD モードでの編集が開始されます。

![](./images/HackMD3.png)

これだけで HackMD モードでの編集となっています。続いて、このページに対してユーザーB が同時編集者として参加します。

### 2名目以降の参加

ユーザーB が先ほどのページを参照すると、
画面下部に以下の画像のように `This page has a draft on HackMD >>  Open HackMD Editor` と表示されています。

![](./images/HackMD4.png)


この時、view / 編集 / HackMD のタブで HackMD 部分を選択するか、画面下部の `Open HackMD Editor` をクリックします。

![](./images/HackMD5.png)

すると、ユーザー A の時と同様の`Start to edit with HackMD` の青いボタンが表示されるか、

`Resume to edit with HackMD` の緑のボタンと `Discard changes of HackMD` のグレーのボタンが並んだ画面が表示されます。

![](./images/HackMD6.png)

![](./images/HackMD7.png)


### 青いボタンが表示される

ページを誰も編集していない、または編集した内容が保存されている状態の時に HackMD ボタンをクリックしたときは、青いボタンが表示されます。

### 緑のボタンとグレーのボタンが表示される

別のユーザーが既に HackMD によるページ編集中で、HackMD 編集した内容がまだ保存されていない状態の時に HackMD ボタンをクリックしたときは、緑のボタンが表示されます。

### `Resume to edit with HackMD` の緑のボタン

ページをHackMDモードで編集している別のユーザーの編集内容を引き継いで HackMD モードで画面を開く

### `Discard changes of HackMD` のグレーのボタン

ページを編集している別のユーザーの保存前の編集内容を破棄して HackMDモードで画面を開く

Discard の方を推すと、新たに `Start to edit with HackMD` の青いボタンが表示されます。

Discard のグレーボタン押下後に表示されたこの青いボタンを推すと、
別のユーザーが編集作業していた内容も失われ、
HackMD モードの全ユーザーの編集画面がページを最後に保存した状態になります。

他のユーザーの編集中内容を破棄する操作となりますので、ご注意ください。

## 記事の同時編集操作

１名以上の複数のユーザーが同時に編集できます。

２ユーザーが同時に操作すると、以下のようになります。

### ユーザーAの操作画面

![](./images/HackMD_editing1.gif)

### ユーザーBの操作画面

![](./images/HackMD_editing2.gif)

編集カーソルが複数現れ、各画面で編集操作が可能となります。


## 編集内容の保存

同時編集中に、誰か１名がページの更新ボタンを押下する事で、全員の編集内容がページに保存されます。

更新ボタンを押下したユーザーは HackMD モードから参照モードへ移行しますが、

その他のユーザーは引き続き HackMD モードで編集が可能となります。


## その他

誰かが HackMD モードで編集し、別のユーザーが通常の編集モードで保存してしまうと、ページ編集情報が競合し、HackMD 側で更新ボタンが機能しなくなります。

この時、新たに HackMD モードを開始しようとすると、以下の画像のように

`DRAFT MEY BE OUTDATED` のオレンジ色のアラートが表示されます。

![](./images/HackMD8.png)

![](./images/HackMD9.png)

HackMD モードでの編集より通常の編集モードでの更新（保存）が優先されてしまいますので、この表示が出た時には `Discard it` のリンクをクリックし、
ページの最新versionから新たに編集を開始するようにしてください。

※ その時、HackMD 上で編集していた内容は破棄されてしまいます。
