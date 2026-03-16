# 高機能保存ツール（Smart Save）を使う

## Smart Saveとは

Smart Saveは、GROWIにコンテンツを保存する際に、AIが保存先のディレクトリを自動提案する機能です。

Claude Desktopで「GROWIに保存して」と伝えるだけで、コンテンツの内容を分析し、関連するページや適切なカテゴリを検索して保存先の候補を提示します。
保存先の選択からページ名の決定、公開範囲の確認まで、一連のワークフローを対話的にガイドします。

Smart Saveを利用するには、UTCP Code-Mode を経由してGROWI MCPに接続する設定と、Smart Saveスキルのインストールが必要です。

::: tip
UTCP（Universal Tool Calling Protocol）は、MCP サーバーを効率的に利用するための中間レイヤーです。複数のツール呼び出しを1回のリクエストにまとめることで、トークン消費を抑えます。
:::

## UTCP Code-Mode の設定方法（Claude Desktopの場合）

Smart SaveをClaude Desktopで使用するための設定方法を説明します。

::: warning
あらかじめGROWIのアクセストークンを取得しておく必要があります。
アクセストークンの取得方法は [GROWI MCP Server を使う](/ja/guide/features/mcp-server.html) を参照してください。
:::

### 設定手順

#### 1. UTCP設定ファイルの作成

ホームディレクトリに `.utcp_config.json` を作成します。

**Windows の場合:** `C:\Users\<ユーザー名>\.utcp_config.json`

**macOS/Linux の場合:** `~/.utcp_config.json`

```json
{
  "manual_call_templates": [
    {
      "name": "growi",
      "call_template_type": "mcp",
      "config": {
        "mcpServers": {
          "growi": {
            "transport": "stdio",
            "command": "npx",
            "args": ["-y", "@growi/mcp-server"],
            "env": {
              "GROWI_API_TOKEN_1": "<API トークン>",
              "GROWI_APP_NAME_1": "<アプリ名>",
              "GROWI_BASE_URL_1": "<GROWI の URL>",
              "GROWI_DEFAULT_APP_NAME": "<デフォルトアプリ名>"
            }
          }
        }
      }
    }
  ]
}
```

::: tip
`.utcp_config.json` をリポジトリ内など別の場所に配置したい場合は、後述のClaude Desktop設定で `UTCP_CONFIG_FILE` 環境変数にフルパスを指定することで対応できます。APIトークンを含むため、`.gitignore` への追加を推奨します。
:::

##### 設定項目の説明

| 変数名 | 必須 | 説明 |
|--------|------|------|
| `GROWI_API_TOKEN_1` | ✅ | GROWIで発行したアクセストークン |
| `GROWI_APP_NAME_1` | ✅ | GROWIアプリの識別名（任意の名前） |
| `GROWI_BASE_URL_1` | ✅ | GROWIのベースURL（例: `https://wiki.example.com`） |
| `GROWI_DEFAULT_APP_NAME` | ❌ | デフォルトで使用するアプリ名（単一アプリの場合は省略可） |

##### 複数のGROWIを使う場合

複数のGROWIインスタンスを使用する場合は、`env` に `_2`, `_3` ... と番号を変えて追加します。

```json
"env": {
  "GROWI_DEFAULT_APP_NAME": "production",

  "GROWI_APP_NAME_1": "production",
  "GROWI_BASE_URL_1": "https://wiki.example.com",
  "GROWI_API_TOKEN_1": "token_for_production",

  "GROWI_APP_NAME_2": "staging",
  "GROWI_BASE_URL_2": "https://wiki-staging.example.com",
  "GROWI_API_TOKEN_2": "token_for_staging"
}
```

#### 2. Claude DesktopでUTCPを設定

1. Claude Desktopアプリを起動します。
1. 設定画面を開きます。
   - macOS: `Cmd + ,`
   - Windows: `Ctrl + ,`
1. 「Developer」タブを選択します。
1. 「Edit Config」をクリックして設定ファイルを開きます。

#### 3. 設定ファイルを編集

設定ファイル（`claude_desktop_config.json`）に UTCP Code-Mode を MCP サーバーとして追加します。

```json
{
  "mcpServers": {
    "code-mode": {
      "command": "npx",
      "args": ["-y", "@utcp/code-mode-mcp"],
      "env": {
        "UTCP_CONFIG_FILE": "<.utcp_config.json へのフルパス>"
      }
    }
  }
}
```

**Windows での設定例:**

```json
{
  "mcpServers": {
    "code-mode": {
      "command": "npx",
      "args": ["-y", "@utcp/code-mode-mcp"],
      "env": {
        "UTCP_CONFIG_FILE": "C:/Users/tomoyuki-t/.utcp_config.json"
      }
    }
  }
}
```

::: warning
`.utcp_config.json` をホームディレクトリに配置した場合でも、フルパスの指定が必要です。
:::

#### 4. Claude Desktopを再起動

設定を保存したら、Claude Desktopアプリを完全に終了して再起動します。

#### 5. 接続確認

Claudeとの会話で「GROWIに接続できますか？」と尋ねて、UTCP経由でMCPが正しく動作しているか確認してください。

接続が成功していれば、Claudeが応答してGROWIの操作が可能になります。

## Smart Saveスキルのインストール

UTCP経由でGROWI MCPに接続できたら、Smart Saveスキルをプラグインとしてインストールします。

1. **カスタマイズ** > **個人用プラグイン**（+ アイコンをクリック）に進みます。
1. **プラグインを参照** > **個人用**タブを選択します。
1. **ローカルアップロード**横の + アイコンをクリックします。
1. **GitHub からマーケットプレイスを追加**を選択します。
1. URL欄に以下を入力して**同期**をクリックします。

```
https://github.com/growilabs/growi-mcp-server
```

## Smart Saveの使い方

### 基本的な使い方

Claude Desktopで以下のように指示すると、Smart Saveのワークフローが開始されます。

```
この内容をGROWIに保存して
```

```
調査結果をwikiにまとめて保存して
```

### ワークフロー

1. **保存先の提案** — AIがコンテンツを分析し、メモエリアや関連ページ近くなど保存先の候補を提示します。手動でパスを指定することもできます。
1. **ページ名の確認** — コンテンツに基づいてページ名を提案します。
1. **公開範囲の確認** — 保存先に応じた公開範囲を選択します。
1. **保存** — 確認後、ページを作成します。

### トラブルシューティング

#### 起動時に警告メッセージが出る

```
MCP code-mode: Unexpected token 'M', "[McpCommuni"... is not valid JSON
```

この警告はUTCPの内部ログが stdout に出力されることが原因です。ツールは正常に動作するため、そのまま使用してください。

#### ツールが見つからない

1. `.utcp_config.json` のパスが正しいか確認してください。
1. GROWIのURLに `https://` が含まれているか確認してください。
1. URLの末尾にスラッシュ（`/`）が含まれていないか確認してください。
1. Claude Desktopを再起動してください。
