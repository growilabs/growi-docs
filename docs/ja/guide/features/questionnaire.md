# アンケート機能

v6.1.0 より GROWI にアンケート機能が追加されました。ユーザーが自由なタイミングで送信できる[ご意見・ご要望](/ja/guide/features/questionnaire.html#ご意見・ご要望)と GROWI 開発チームから配信される[アンケート](/ja/guide/features/questionnaire.html#アンケート)があります。

::: warning
送信されるデータにユーザーの個人情報は一切含まれません。
詳しくは[アンケート設定](/ja/admin-guide/management-cookbook/app-settings.html#%E3%82%A2%E3%83%B3%E3%82%B1%E3%83%BC%E3%83%88%E8%A8%AD%E5%AE%9A)をご確認ください。
:::

## ご意見・ご要望

GROWI 開発チームにご意見やご要望を送付できます。

- 画面左下のユーザーアイコンをクリックすると表示されるドロップダウンから「ご意見・ご要望」を選択してください。

<img :src="$withBase('/assets/images/ja/questionnaire_feedback.png')" alt="">

- 表示されたフォームに情報を入力し「送信」を押してください。GROWI 開発チームにご意見・ご要望が送付されます。

<img :src="$withBase('/assets/images/ja/questionnaire_form.png')" alt="">

## アンケート

GROWI 開発チームから配信されたアンケートに回答できます。

- GROWI がアンケートを受け取ると画面下部にアンケートが表示されます。
- アンケートを回答する場合は「回答する」を押してください。

<img :src="$withBase('/assets/images/questionnaire_cron.png')" alt="">

- 表示されたアンケートに回答し「回答する」を押してください。GROWI 開発チームに回答内容が送付されます。

<img :src="$withBase('/assets/images/questionnaire_cron_form.png')" alt="">

::: tip
管理者はシステム全体に、各ユーザーは個別に、アンケートの有効/無効を設定できます。
詳しくは[アンケート設定](/ja/admin-guide/management-cookbook/app-settings.html#%E3%82%A2%E3%83%B3%E3%82%B1%E3%83%BC%E3%83%88%E8%A8%AD%E5%AE%9A)をご確認ください。
:::
