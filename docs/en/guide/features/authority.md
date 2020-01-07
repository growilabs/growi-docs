# Set page view / edit authority

GROWI users can be set so that only authorized users can view and edit the page.

This section describes the authority that can be set for pages.

## How to set view / edit authority for pages

In the edit mode of the page,
click the "▲" enclosed in red line of the below image first,
then the options are displayed as shown in the image below.

`![authority1](./images/authority1.png)`

After selecting this option,
click the "Create / Update" button view / edit authority for the page apply.

## Types that can be set as view / edit authority

You can select any of the following for the contents
that can be set as page view / edit restrictions.

### Public

  There is no viewing or editing restriction for pages with this setting.
  Anyone can view and edit. This is the default.

  If the entire GROWI is `settings that cannot be viewed without logging in`,

  Even if the page is public,
  you will not be able to view or edit it unless you log in,
  and if you access the page, you will be redirected to the login page.

  Anyone who is logged in can view and edit.

### Anyone with the link
  
  Pages with this setting will not be output to the page list or page search results.

  Only users who know the URL of the page will be able to view and edit it.


  If you do not know where to place the page,
  follow the page from "Recently Created" on the home page.

  If it is a page you created, it will be output to this page list.

### Just me

  Pages with this setting cannot be viewed or edited by anyone other than yourself.

  Whether it is displayed in page list and page search results of other users
  can be set by ON / OFF of the management page.

  By default, it appears in the page list and page search results.

### Only inside the group

  Pages with this setting can only be viewed and edited by users
  belonging to the set group.

  Whether it is displayed in page list and page search results of a user not in group
  can be set by ON / OFF of the management page.

  By default, it appears in the page list and page search results.

## グループ管理機能について

詳細は [こちら](/ja/admin-guide/management-cookbook/group.md)に記載しています。

## 権限が付いたページに対しての検索結果表示やリスト表示の制御

GROWI の検索結果やページリスト表示時に、閲覧・編集権限がない人にはページを表示したくないという場合は、

管理メニューの`セキュリティ設定`で該当の設定のオン・オフ機能を切り替えましょう。

`![security](./images/security.png)`

### ページのリスト表示と検索　'自分のみ'に閲覧制限しているページ

- ON の場合

  自分以外のユーザーのページのリスト表示や検索結果として、該当の制限をしているページが表示されます。

- OFF の場合

  自分以外のユーザーのページのリスト表示や検索結果として、該当の制限をしているページが表示されません。

### ページのリスト表示と検索　特定グループに閲覧制限しているページ

- ON の場合

  グループに所属していないユーザーのページのリスト表示や検索結果として、該当の制限をしているページが表示されます。

- OFF の場合

  グループに所属していないユーザーのページのリスト表示や検索結果として、該当の制限をしているページが表示されません。

## 閲覧・編集権限をページ配下に一括で設定

ページは階層構造になっており、特定ページ配下のページ全てに対して、一括で権限管理したい場合があります。

その際には、ページの作成/更新時に画面右下に表示される「作成/更新」ボタンの「▲」をクリックし、

「作成/更新と同時に全ての配下ページのスコープを上書き」をクリックして下さい。

`![authority2](./images/authority2.png)`

この操作で、該当ページ配下の全てのページに対して、同じ権限設定を適用できます。

## 権限の設定例

基本的には、閲覧・編集権限が必要なページはまとめて整理して、ページ配下を一括で権限更新すると管理が簡単になります。

もしページ構成の変更に問題がなければ、権限が必要なページは以下の例のように移動しましょう。

- グループ名のページを作成する

- 該当グループのみ閲覧・編集権限を持たせたいページを、そのページ配下へ移動する

  ページの移動については [こちら](/ja/guide/features/page_operation.md)

- グループ名のページを一括で権限設定する
