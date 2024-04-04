# WIP ページを作成する

## WIP ページとは？

WIP とは "Work In Progress" の略で、文書が執筆途中であることを意味します。

GROWI ではページの作成・更新時に WIP (Work In Progress) ページとして保存でき、そのページが執筆途中であることを他のユーザーに示しつつ公開できます。WIP ページであるかどうかは View 画面、Editor 画面、ページツリー、最近の変更から確認できます。

<img :src="$withBase('/assets/images/ja/wip_page_1.png')" alt="wip_page_1.png">

## WIP ページの作成方法1

ページを新規作成して一度も更新せずに離脱した場合は自動的に WIP ページとなります。例外として [テンプレートページ](/ja/guide/features/template.html) とカスタムサイドバーページ (/Sidebar) は WIP ページでは保存されません。

## WIP ページの作成方法2

Editor 画面右下にある更新ボタン右のキャレットアイコンをクリックするとドロップダウンメニューが開きます。ドロップダウンメニュー内の 「WIP (執筆途中) として保存」 ボタンをクリックすることで WIP ページとして保存できます。

<img :src="$withBase('/assets/images/ja/wip_page_2.png')" alt="wip_page_2.png">

## WIP の解除方法1

Editor 画面でページを更新することで WIP を解除できます。

## WIP の解除方法2

View 画面で WIP ページを開くとアラートが表示されます。アラート内の 「WIP を解除」 ボタンをクリックすることで WIP を解除できます。

## WIP ページの自動削除

[WIP ページの作成方法1](/ja/guide/features/wip-page.html#wip-ページの作成方法1) で作成した WIP ページは2日後に自動的に削除されます。一度でも更新をした場合、また以下のケースのように作成した WIP ページの配下にページが存在する場合はその親となるページは自動削除の対象とはなりません。

<!-- textlint-disable weseek/no-doubled-joshi -->
- `/A/B` というページを作成した後に `/A` を作成した場合は `/A` は自動削除の対象にはなりません
<!-- textlint-disable weseek/no-doubled-joshi -->

- `/A` を作成した後に `/A/B` を作成した場合 `/A` は自動削除の対象となりません。

<ContextualBlock context="docs-growi-org">

## 自動削除の期間変更

環境変数 `WIP_PAGE_EXPIRATION_SECONDS` を書き換えることで自動削除の期間を変更できます。
詳しくは [環境変数](/ja/admin-guide/admin-cookbook/env-vars) をご覧ください。

</ContextualBlock>
