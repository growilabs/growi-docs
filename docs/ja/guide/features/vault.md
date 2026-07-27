# GROWI Vault

GROWI Vault は、自分が閲覧権限を持つページを Git リポジトリとして取得できる、読み取り専用の Git インターフェースです。

::: tip
GROWI Vault は、self-hosted 環境で管理者が有効化した場合に利用できます。GROWI.cloud での提供開始は、もう少し先を予定しています。
:::

## できること

- 自分が閲覧権限を持つページ（全体公開・リンク共有・グループ・自分のみ）を、Markdown ファイルのツリーとして取得できます。
- 取得したファイルは、ページのパス構成をそのまま反映します。

## アクセストークンの作成

クローンには GROWI のアクセストークンが必要です。「ユーザー設定」（`/me`）の「API設定」タブにある「Access token 設定」から作成できます。最低限必要な権限（scope）は `read:features:page` です。

## クローン方法

手元の Git クライアントで、作成したアクセストークンを使って次のようにクローンします。

```bash
git clone https://x:<アクセストークン>@<GROWI のホスト>/vault.git
```

リバースプロキシで Basic 認証を併用しているなど、`Authorization` ヘッダーが既に使われている環境では、`X-GROWI-ACCESS-TOKEN` ヘッダーでトークンを渡せます。

```bash
git config http.<URL>.extraHeader "X-GROWI-ACCESS-TOKEN: <アクセストークン>"
```

### 一部のページパス配下のみを取得する

特定のページパス配下だけを取得したい場合は、Git の sparse checkout を使います。リポジトリ全体を取得せずに、指定したパス配下だけをチェックアウトできます。

```bash
git clone --filter=blob:none --sparse https://x:<アクセストークン>@<GROWI のホスト>/vault.git
cd vault
git sparse-checkout set <ページパス>
```

`<ページパス>` には、取得したいページのパスを指定します（例: `/projects/docs`）。


## 制限事項（現時点）

GROWI Vault は読み取り専用です。次の操作・データは対象外です。

- `git push` による書き込み
- 添付ファイル・コメント・いいね・ブックマーク・タグ
- Vault を有効化する前のリビジョン履歴
- 下書き・未公開ページ

## 管理者向け

GROWI Vault の有効化とセットアップの手順は [GROWI Vault のセットアップ](/ja/admin-guide/management-cookbook/setup-vault.html) を参照してください。
