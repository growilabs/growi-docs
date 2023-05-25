# アンケート機能

v6.1.0 より GROWI にアンケート機能が追加されました。ユーザーが自由なタイミングで送信できる[能動的アンケート](/ja/guide/features/questionnaire.html#%E8%83%BD%E5%8B%95%E7%9A%84%E3%82%A2%E3%83%B3%E3%82%B1%E3%83%BC%E3%83%88)と GROWI 開発チームが事前に用意したアンケートを受信して答える[受動的アンケート](/ja/guide/features/questionnaire.html#%E5%8F%97%E5%8B%95%E7%9A%84%E3%82%A2%E3%83%B3%E3%82%B1%E3%83%BC%E3%83%88)があります。

::: warning
送信されるデータにユーザーの個人情報は一切含まれません。
詳しくは[アンケート設定](/ja/admin-guide/management-cookbook/app-settings.html#%E3%82%A2%E3%83%B3%E3%82%B1%E3%83%BC%E3%83%88%E8%A8%AD%E5%AE%9A)をご確認ください。
:::

## 能動的アンケート

GROWI 開発チームにご意見やご要望を送付できます。

- 画面右上のユーザー名をクリックすると表示されるドロップダウンから「ご意見・ご要望」を選択してください。

![](/assets/images/questionnaire_feedback.png)

- 表示されたフォームに情報を入力し「送信」を押してください。GROWI 開発チームにアンケート内容が送付されます。

![](/assets/images/questionnaire_form.png)

## 受動的アンケート

GROWI 開発チームからのアンケートを受け取ることができます。

- GROWI がアンケートを受け取ると画面下部にアンケートが表示されます。
- アンケートを回答する場合は「回答する」を押してください。

![](/assets/images/questionnaire_cron.png)

- モーダルに表示されたアンケートに回答し「回答する」を押してください。GROWI 開発チームにアンケート内容が送付されます。

![](/assets/images/questionnaire_cron_form.png)

::: tip
管理者はシステム全体に、各ユーザーは個別に、受動的アンケート機能の有効/無効を設定できます。
詳しくは[アンケート設定](/ja/admin-guide/management-cookbook/app-settings.html#%E3%82%A2%E3%83%B3%E3%82%B1%E3%83%BC%E3%83%88%E8%A8%AD%E5%AE%9A)をご確認ください。
:::