# AI ツール（スキル）を使う

## AI ツールとは

AI ツール（スキル）は、GROWI MCP Server が提供する拡張機能です。
MCP クライアント（Claude Desktop など）にスキルをインストールすることで、
GROWI と連携した高度なワークフローを利用できます。

AI ツールは、UTCP Code-Mode 経由で GROWI MCP に接続して動作します。
ただし、UTCP Code-Mode をあらかじめ手動で設定しておく必要はありません。
セットアップ用のスキルが、UTCP Code-Mode の設定から GROWI への接続確認までを対話的にガイドします。

## セットアップの流れ

AI ツールを利用開始するまでの流れは次のとおりです。

1. **スキルをインストールする** — 後述の「スキルのインストール」の手順で行います。
1. **エージェントにセットアップを依頼する** — インストール後にエージェントを再起動し、「GROWI をセットアップして」と伝えます。
1. **スキルの案内に従う** — セットアップスキルが、UTCP Code-Mode の設定から GROWI への接続確認までを対話的にガイドします。GROWI の URL とアクセストークンを用意しておいてください。

::: tip
アクセストークンの取得方法や、スキルを使わずに手動で接続設定を行う場合の手順は、
[GROWI MCP Server を使う](/ja/guide/features/mcp-server.html) を参照してください。
:::

## スキルのインストール

お使いの MCP クライアントに合わせて、いずれかの方法でスキルをインストールしてください。

### Claude Desktop (Cowork)

1. **カスタマイズ** > **個人用プラグイン**（+ アイコンをクリック）に進みます。
1. **プラグインを参照** > **個人用**タブを選択します。
1. **ローカルアップロード**横の + アイコンをクリックします。
1. **GitHub からマーケットプレイスを追加**を選択します。
1. URL 欄に以下を入力して**同期**をクリックします。

```text
https://github.com/growilabs/growi-mcp-server
```

### Claude Code

リポジトリをプラグインマーケットプレイスとして追加し、プラグインをインストールします。

```bash
/plugin marketplace add growilabs/growi-mcp-server
/plugin install mcp-client-skills
```

### Gemini CLI

Gemini CLI の Extension としてインストールします（MCP ツールとスキルの両方が含まれます）。

```bash
gemini extensions install https://github.com/growilabs/growi-mcp-server
```

更新する場合:

```bash
gemini extensions update growi-mcp-server
```

### Skills.sh (Vercel)

Claude Code や Gemini CLI など[多数のエージェント](https://skills.sh/)で利用できます。

```bash
npx skills add growilabs/growi-mcp-server
```

更新する場合:

```bash
npx skills update
```

### 手動インストール

リポジトリからスキルを直接ダウンロードして、お使いのエージェントのスキルディレクトリに配置します。

1. [growi-mcp-server](https://github.com/growilabs/growi-mcp-server) リポジトリの `skills/` から使いたいスキルのディレクトリをコピーします。
1. エージェントのスキルディレクトリに配置します。
   - Claude Code: `.claude/skills/<skill-name>/SKILL.md`
   - Gemini CLI: `.gemini/skills/<skill-name>/SKILL.md`
   - その他のエージェント: `.agents/skills/<skill-name>/SKILL.md`

### インストール後のセットアップ

インストールが完了したら、エージェントを再起動して「GROWI をセットアップして」と伝えてください。
セットアップスキルが GROWI への接続設定を対話的にガイドします。

## Smart Save

### Smart Save とは

Smart Save は、GROWI にコンテンツを保存する際に、
AI が保存先のディレクトリを自動提案する機能です。

MCP クライアントで「GROWI に保存して」と伝えるだけで、
コンテンツの内容を分析し、関連するページや適切なカテゴリを検索して
保存先の候補を提示します。
保存先の選択からページ名の決定、公開範囲の確認まで、
一連のワークフローを対話的にガイドします。

### 基本的な使い方

MCP クライアントで以下のように指示すると、Smart Save のワークフローが開始されます。

```text
この内容をGROWIに保存して
```

```text
調査結果をwikiにまとめて保存して
```

### ワークフロー

1. **保存先の提案** — AI がコンテンツを分析し、メモエリアや関連ページ近くなど保存先の候補を提示します。手動でパスを指定できます。
1. **ページ名の確認** — コンテンツに基づいてページ名を提案します。
1. **公開範囲の確認** — 保存先に応じた公開範囲を選択します。
1. **保存** — 確認後、ページを作成します。
