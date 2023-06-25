# アプリ内通知を受け取る

GROWI ではサブスクライブしているページの通知を受け取ることができます。画面上のベルアイコンをクリックすると、ドロップダウンが開き最大6件の通知を見ることができます。

<img :src="$withBase('/assets/images/in-app-notification-dropdown.png')" alt="">

ドロップダウンの ***See Alll*** をクリックすると、全ての通知を見ることができます。

<img :src="$withBase('/assets/images/in-app-notification-list1.png')" alt="">

***Unread*** タブでは未読の通知を見ることができます。***Mark all as read*** をクリックすると全ての通知に既読をつけることができます。

<img :src="$withBase('/assets/images/in-app-notification-list2.png')" alt="">


## ページをサブスクライブする

通知を受け取りたいページに行き、目玉ボタンをクリックするとサブスクライブできます。

<img :src="$withBase('/assets/images/in-app-notification-subscribe-button.png')" alt="">


ユーザー設定のアプリ内通知設定にある ***PAGE_CREATE***  のスイッチを ON にすることで、自分で作成したページを自動的にサブスクライブできます。

<img :src="$withBase('/assets/images/in-app-notification-settings.png')" alt="">


## 通知の種類

以下の通知を受け取ることができます。

- ライク
- ブックマーク
- ページの更新
- ページのリネーム
- ページの削除
- ページの完全削除
- コメント
