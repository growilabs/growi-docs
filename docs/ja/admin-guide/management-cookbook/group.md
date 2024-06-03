# グループ管理

グループ管理機能を利用することで、ページ単位で特定のユーザーしか内容を閲覧・編集できないようにする権限を設定できます。

グループを設定するためには、管理者権限のあるユーザーで管理メニューから操作する必要があります。

## グループの作成

1. 管理メニューの「グループ管理」に移動します。

<img :src="$withBase('/assets/images/ja/group1.png')" alt="group1">

2. 「新規グループの作成」ボタンをクリックします。

<img :src="$withBase('/assets/images/ja/group2.png')" alt="group2">

3. 「グループ名」と「説明」を記入して、「Create」ボタンをクリックします。

<img :src="$withBase('/assets/images/ja/group3.png')" alt="group3">

4. 左上に通知が表示され、一覧にグループが追加されます。

<img :src="$withBase('/assets/images/ja/group4.png')" alt="group4">

## グループへのユーザーの追加

1. グループ一覧に表示されているグループを選択します。

<img :src="$withBase('/assets/images/ja/group5.png')" alt="group5">

2. グループ一覧の「＋」をクリックします。

<img :src="$withBase('/assets/images/ja/group6.png')" alt="group6">

3. グループ一覧の「＋」をクリックすると、グループへのユーザー追加の入力欄が表示されます。

<img :src="$withBase('/assets/images/ja/group7.png')" alt="group7">

4. 入力し、「add」をクリックすると、グループにユーザーが追加されます。

<img :src="$withBase('/assets/images/ja/group8.png')" alt="group8">

※ 登録されているユーザー名ではない場合、エラーとなりグループにユーザー追加できません。

## ページに対する閲覧権限の設定

グループが作成できたら、ページに閲覧・編集権限を設定します。

1. ページの編集モードで、以下の画像のように「特定グループのみ」を設定します。

<img :src="$withBase('/assets/images/ja/group9.png')" alt="group9">

2. グループ選択メニューに自分の所属しているグループの一覧が表示されます。

<img :src="$withBase('/assets/images/ja/group10.png')" alt="group10">

3. 対象のグループを選択し、更新ボタンをクリックします。

<img :src="$withBase('/assets/images/ja/group11.png')" alt="group11">

グループに所属していないアカウントで該当のページを参照すると、ページの内容を閲覧・編集できないようになっています。

## グループ管理画面上での権限付与ページの参照

ページに対して閲覧・編集権限を設定すると、グループ管理の画面上から、対象のグループに権限設定されたページ一覧を確認できます。

<img :src="$withBase('/assets/images/ja/group12.png')" alt="group12">

## グループの親子設定

ユーザーグループ同士で親子関係を設定できます。例えば「技術部」グループの子グループとして「デザインチーム」を作成し、技術部グループ内の一部のメンバーを登録できます。

1. グループ一覧から、子グループを作成したいグループを選択します。

<img :src="$withBase('/assets/images/ja/group13.png')" alt="group13">

2. 赤丸で囲まれた「子グループの追加」をクリックします。

<img :src="$withBase('/assets/images/ja/group14.png')" alt="group14">

3. 追加したいグループを選択します（子グループを新規に作成する場合は「新規グループの作成」を選択します）。

<img :src="$withBase('/assets/images/ja/group15.png')" alt="group15">

4. 「新規グループの作成」をクリックして子グループを作成する場合は「グループ名」と「説明」を記入して、「Create」ボタンをクリックします。

<img :src="$withBase('/assets/images/ja/group16.png')" alt="group16">

5. 入力し、「Create」をクリックすると、ユーザーグループにグループが追加されます。

<img :src="$withBase('/assets/images/ja/group17.png')" alt="group17">