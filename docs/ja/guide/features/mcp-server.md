# GROWI MCP Server を使う

## GROWI MCPとは

### 概要

GROWI MCPは、Model Context Protocol (MCP)を活用してGROWIとClaude Desktopなどを連携させるGROWI公式のツールです。MCPは、Anthropic社が開発したAIアシスタントとさまざまなツールやデータソースを接続するためのオープンな標準プロトコルです。

GROWI MCPを使用することで、Claude DesktopなどのMCPクライアント上で対話するだけでGROWIのページ作成・編集・検索などの操作が可能になります。  
これにより、情報収集やドキュメント作成のワークフローが大幅に効率化され、Wikiの運用がより柔軟かつ迅速になります。

### 主な機能

- **ページ管理**: ページの作成、更新、削除、複製
- **検索機能**: 高度な検索とページ情報の取得
- **タグ管理**: タグの追加、更新、検索
- **共有機能**: シェアリンクの作成と管理
- **バージョン管理**: リビジョンの閲覧と管理

<ContextualBlock context="help-growi-cloud">

::: warning
2025年11月現在、GROWI MCPは開発途中のため全てのGROWIで全ての機能が利用可能です。

 <!-- textlint-disable weseek/no-doubled-joshi -->
今後 MCP Server の機能改善を行った場合に、GROWI.cloud で管理されている GROWI に関してましては、ご契約プランに応じて利用できる機能が制限される可能性がございます。、
:::

</ContextualBlock>

## GROWI MCPの活用方法4選

GROWI MCPを活用することで、日常的なWiki運用がより便利になります。  
ここでは、具体的な活用シーンを4つご紹介します。

<iframe width="560" height="315"
  src="https://www.youtube.com/embed/UIXIJRKf43c"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>

<https://youtu.be/UIXIJRKf43c>

### ① 情報収集の効率化

複数のソースから情報を収集してGROWIにまとめる作業を、AIに任せることができます。

たとえば、「最新のフロントエンド技術について調査して /tech/frontend-trends というページにまとめて」と指示するだけで、AIがウェブ検索をして収集した情報を整理してGROWIページを自動作成します。  
調査レポートやマーケット分析、技術動向のまとめなど、リサーチが必要な場面で威力を発揮します。

また、社内の既存ページから特定のトピックに関連する情報を横断的に検索し、新しい切り口でまとめ直すことも可能です。  
散在している情報を一箇所に集約する作業が、会話形式で簡単に実現できます。

### ② ページの自動生成

定型的なドキュメントやテンプレートベースのページ作成を自動化できます。

繰り返し作成するドキュメントについて「/projects/new-project配下に標準的なプロジェクトページ一式を作成して」のように指示をするだけで、必要な構成のページをまとめて生成できます。

 <!-- textlint-disable weseek/max-kanji-continuous-len -->
また、外部データ(CSV、APIレスポンスなど)を読み込んで、それを元にした一覧ページや詳細ページを自動生成可能です。  
手作業では時間がかかる大量のページ作成作業を、短時間で完了できます。

### ③ 既存ページの更新

GROWIに蓄積された情報の更新やメンテナンスを効率化できます。

「/team/membersページに新メンバーの情報を追加して」「古い技術情報を最新のものに更新して」といった指示で、既存ページを適切に更新できます。  
複数のページにまたがる一括更新や、特定のフォーマットへの統一作業なども、会話を通じて実行可能です。

また、外部の最新情報を取得して既存ページに反映させることもできます。  
たとえば、製品のリリースノートを公式サイトから取得してGROWIの製品情報ページに追記する、といった作業を自動化できます。

### ④ Wikiの整理整頓

Wikiの構造を見直し、整理する作業をサポートします。

「/projectsディレクトリ配下の古いプロジェクトページを一覧化して」「タグが付いていないページを見つけて適切なタグを提案して」といった指示で、Wikiのメンテナンス作業を効率的に進められます。

ページの重複チェック、リンク切れの確認、命名規則の統一など、Wikiの品質を保つための作業を、AIと協力しながら実施できます。  
大量のページを抱えるGROWIでは、特に有効な活用方法です。

## MCPの設定方法(Claude Desktopの場合)

GROWI MCPをClaude Desktopで使用するための設定方法を説明します。

### 設定手順

#### 1. GROWIのアクセストークンを取得

1. GROWIにログインし、左下のユーザーメニューから「ユーザー設定」を開きます。
2. 「API設定」セクションの「Access token 設定」に移動します。
3. 「New」ボタンを押し、有効期限・説明・権限を設定します。
    - まずはテスト用に、権限は広めで期限の短いトークンの作成をおすすめします。
    - 実際に運用される際には適切な権限に絞ってトークンを作成してください。
5. 「トークンを作成」ボタンをクリックし、作成されたトークンをコピーして安全な場所に保存します。


::: warning

アクセストークンは機密情報です。第三者と共有しないでください。

:::

#### 2. Claude DesktopでMCPを設定

1. Claude Desktopアプリを起動します。
2. 設定画面を開きます。
   - macOS: `Cmd + ,`
   - Windows: `Ctrl + ,`
3. 「Developer」タブを選択します。
4. 「Edit Config」をクリックして設定ファイルを開きます。

#### 3. 設定ファイルを編集

設定ファイル(`claude_desktop_config.json`)を編集します。使用するGROWIの数に応じて、以下のいずれかの設定をしてください。

##### [#](#一つのgrowiを使う場合) 一つのGROWIを使う場合

単一のGROWIインスタンスのみを使用する場合は、以下のように設定します。

```json
{
  "mcpServers": {
    "growi": {
      "command": "npx",
      "args": ["@growi/mcp-server"],
      "env": {
        "GROWI_BASE_URL_1": "https://your-growi-instance.com",
        "GROWI_API_TOKEN_1": "your_growi_api_token"
      }
    }
  }
}
```

##### 　複数のGROWIを使う場合

複数のGROWIインスタンスを使用する場合は、それぞれに異なる識別名を付けて設定します。

```json
{
  "mcpServers": {
    "growi": {
      "command": "npx",
      "args": ["@growi/mcp-server"],
      "env": {
        "GROWI_DEFAULT_APP_NAME": "staging",

        "GROWI_APP_NAME_1": "production",
        "GROWI_BASE_URL_1": "https://wiki.example.com",
        "GROWI_API_TOKEN_1": "token_for_production",

        "GROWI_APP_NAME_2": "staging",
        "GROWI_BASE_URL_2": "https://wiki-staging.example.com",
        "GROWI_API_TOKEN_2": "token_for_staging",
        
        "GROWI_APP_NAME_3": "development",
        "GROWI_BASE_URL_3": "https://wiki-dev.example.com",
        "GROWI_API_TOKEN_3": "token_for_development"
      }
    }
  }
}
```


**設定項目の説明:**

| 変数名 | 必須 | 説明 | デフォルト値 |
|--------|------|------|-------------|
| `GROWI_APP_NAME_{N}` | ✅ | GROWIアプリの識別名（N は整数値） | - |
| `GROWI_BASE_URL_{N}` | ✅ | GROWIインスタンスのベースURL（N は整数値） | - |
| `GROWI_API_TOKEN_{N}` | ✅ | GROWI APIアクセストークン（N は整数値） | - |
| `GROWI_DEFAULT_APP_NAME` | ❌ | デフォルトで使用するアプリ名 | 最初に設定されたアプリ |

**複数GROWI設定時の注意点:**

- **GROWI_APP_NAME_{N}** `growi-production`、`growi-staging`など、各GROWIインスタンスに分かりやすい識別名を付けてください。
- **GROWI_DEFAULT_APP_NAME**: このパラメータは省略可能ですが、設定することでClaude上の操作対象のGROWIを明示的に指定できます。識別名と同じ値、またはより分かりやすい名前を設定してください。単一アプリのみを設定する場合は不要です。
- **GROWI_API_TOKEN_{N}**: 各GROWIインスタンスごとに異なるアクセストークンを使用してください。

::: tip
複数のGROWIを設定した場合、Claudeとの会話で「productionのGROWIで〜」「stagingのWikiに〜」のように指定することで、操作対象を切り替えられます。

明示的にアプリ名 (GROWI_APP_NAME_{N}) を指定しなかった場合は `GROWI_DEFAULT_APP_NAME` に指定されたアプリ名を持つ GROWI が操作の対象となります。
:::

#### 4. Claude Desktopを再起動

設定を保存したら、Claude Desktopアプリを完全に終了して再起動します。

#### 5. 接続確認

Claudeとの会話で「GROWIに接続できますか?」と尋ねて、MCPが正しく動作しているか確認してください。

接続が成功していれば、Claudeが応答してGROWIの操作が可能になります。

複数のGROWIを設定している場合は、「それぞれのGROWIに接続できますか?」と確認することで、すべての接続状態を確認できます。

### トラブルシューティング

#### 接続できない場合

1. **APIトークンが正しく設定されているか確認**  
   設定ファイル内のAPIトークンが正確にコピーされているか確認してください。
2. **GROWIのURLが正確か確認**  
   URLに`https://`が含まれているか、末尾にスラッシュ(`/`)が含まれていないか確認してください。
3. **ファイアウォールやプロキシ設定を確認**  
   社内ネットワークなどでファイアウォールやプロキシが設定されている場合、GROWIへのアクセスがブロックされている可能性があります。
4. **Claude Desktopのログを確認**  
   `View > Toggle Developer Tools`からログを確認し、エラーメッセージを確認してください。

#### 権限エラーが出る場合

1. **アクセストークンに適切な権限が付与されているか確認**  
   GROWIのユーザー設定でアクセストークンの権限設定を確認してください。

#### 複数GROWI設定時に特定のインスタンスに接続できない

1. **識別名が重複していないか確認**  
   設定ファイル内で同じ識別名を使用していないか確認してください。
2. **各インスタンスの設定が正しいか個別に確認**  
   問題のあるインスタンスの設定のみを一時的に残し、接続テストを行ってください。

### トークン運用のベストプラクティス

- アクセストークンは機密情報として扱い、共有しないでください。
- 定期的にトークンをローテーション(再生成)することを推奨します。
- 不要になったトークンは削除してください。
- 組織で使用する場合は、適切なアクセス権限ポリシーを設定してください。
- 複数のGROWIを設定する場合、本番環境と開発環境のトークンを混同しないよう注意してください。
