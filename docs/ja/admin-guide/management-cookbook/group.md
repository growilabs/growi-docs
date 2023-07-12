# グループ管理

グループ管理機能を利用することで、ページ単位で特定のユーザーしか内容を閲覧・編集できないようにする権限を設定できます。

グループを設定するためには、管理者権限のあるユーザーで管理メニューから操作する必要があります。

## グループの作成

1. 管理メニューの「User Group Management」に移動します。

<img :src="$withBase('/assets/images/group1.png')" alt="group1">

2. 「Create new group」ボタンをクリックします。

<img :src="$withBase('/assets/images/group2.png')" alt="group2">

3. 「Group name」と「Description」を記入して、「Create」ボタンをクリックします。

<img :src="$withBase('/assets/images/group3.png')" alt="group3">

4. Success 表示され、一覧にグループが追加されます。

<img :src="$withBase('/assets/images/group4.png')" alt="group4">

## グループへのユーザーの追加

1. グループ一覧に表示されているグループを選択します。

<img :src="$withBase('/assets/images/group5.png')" alt="group5">

2. User listの「＋」をクリックします。

<img :src="$withBase('/assets/images/group6.png')" alt="group6">

3. User listの「＋」をクリックすると、グループへのユーザー追加の入力欄が表示されます。

<img :src="$withBase('/assets/images/group7.png')" alt="group7">

4. 入力し、「add」をクリックすると、Success と表示され、グループにユーザーが追加されます。

<img :src="$withBase('/assets/images/group8.png')" alt="group8">

※ 登録されているユーザー名ではない場合、エラーとなりグループにユーザー追加できません。

## ページに対する閲覧権限の設定

グループが作成できたら、ページに閲覧・編集権限を設定します。

1. ページの編集モードで、以下の画像のように「Only inside the group」を設定します。

<img :src="$withBase('/assets/images/group9.png')" alt="group9">

2. グループ選択メニューに自分の所属しているグループの一覧が表示されます。

<img :src="$withBase('/assets/images/group10.png')" alt="group10">

3. 対象のグループを選択し、Update ボタンをクリックします。

<img :src="$withBase('/assets/images/group11.png')" alt="group11">

グループに所属していないアカウントで該当のページを参照すると、ページの内容を閲覧・編集できないようになっています。

## グループ管理画面上での権限付与ページの参照

ページに対して閲覧・編集権限を設定すると、グループ管理の画面上から、対象のグループに権限設定されたページ一覧を確認できます。

<img :src="$withBase('/assets/images/group12.png')" alt="group12">

## グループの親子設定

ユーザーグループ同士で親子関係を設定できます。例えば「技術部」グループの子グループとして「デザインチーム」を作成し、技術部グループ内の一部のメンバーを登録できます。

1. Group listからグループを選択します。

<img :src="$withBase('/assets/images/group13.png')" alt="group13">

2. 赤丸で囲まれた「Add child group」をクリックします。

<img :src="$withBase('/assets/images/group14.png')" alt="group14">

3. 追加したいグループを選択します（子グループを新規に作成する場合は「Create new group」を選択します）。

<img :src="$withBase('/assets/images/group15.png')" alt="group15">

4. 「Create new group」をクリックして子グループを作成する場合は「Group name」と「Description」を記入して、「Create」ボタンをクリックします。

<img :src="$withBase('/assets/images/group16.png')" alt="group16">

5. 入力し、「Create」をクリックすると、Successと表示され、ユーザーグループにグループが追加されます。

<img :src="$withBase('/assets/images/group17.png')" alt="group17">
