# プラグイン開発の基本

このページでは、プラグインの開発方法を説明します。GROWI プラグインについての概要については、 [GROWI プラグインとは](/ja/dev/plugin/overview.md) も併せてご参照ください。

## 開発の基本的な流れ

プラグインを実際に作ってみましょう。GROWI のプラグイン開発は、GitHubリポジトリの作成から始まります。実際に手を動かしながら、ステップバイステップで開発を進めていきましょう。

### 1. GitHub リポジトリを作成する

GROWI プラグイン開発の第一歩として、GitHub リポジトリを作成します。GROWI では、1つの Git リポジトリが 1つのプラグインとして扱われます。プラグインは GitHub 上で管理・公開することで、他のユーザーと共有できるようになります。

リポジトリの作成方法の詳細については、GitHub公式ドキュメントの[新しいリポジトリの作成](https://docs.github.com/ja/repositories/creating-and-managing-repositories/creating-a-new-repository) も参照してください。

1. GitHub アカウントにログインします。
2. 右上の「+」アイコンをクリックし、「New repository」を選択します。
3. リポジトリに関する以下の情報を設定します：
   - リポジトリ名: `growi-plugin-` で始まる名前を推奨します（例: `growi-plugin-example`）
   - 説明: プラグインの機能や目的を簡潔に記載します
   - 可視性: Public（オープンソースとして共有する場合）
   - README.md の初期化: チェックを入れておくと便利です
4. 「Create repository」ボタンをクリックして、リポジトリを作成します。
5. 作成したリポジトリをローカル環境にクローンします。

```bash
git clone https://github.com/yourusername/growi-plugin-example.git
cd growi-plugin-example
```

### 2. package.json を作成する

package.json にプラグインの基本情報を設定します。 `growiPlugin` ディレクティブを追加することで、そのリポジトリを GROWI プラグインとして認識させることができます。

複数種類のプラグインをサポートするには、プラグインの package.json ファイル内の `types` セクションに対応するタイプを列挙します。例えば以下のように記述することで、1つのプラグインが複数の機能を提供できます。

```json
{
  "name": "growi-plugin-example",  // プラグイン名
  "version": "1.0.0",
  "description": "Example GROWI plugin", // プラグインの説明
  "devDependencies": {
    "@growi/pluginkit": "^1.1.0" // GROWI プラグイン開発キット
  },
  "growiPlugin": {
    "schemaVersion": "4",
    "types": [ // 複数のプラグインタイプを同時に設定可能
      "script",
      "theme",
      "template"
    ]
  },
  // 他の設定...
}
```

### 3. ライブラリをインストールする

```
$ pnpm install
```

### 4. プラグインを実装する

各プラグインタイプに応じて、dist ディレクトリに配置すべきファイルが異なります。

1. **スクリプトプラグイン**: JavaScript ファイル
   - TypeScript で開発し Vite でトランスパイルする方法を推奨

2. **テーマプラグイン**: CSS ファイル
   - SCSS で開発し Vite でトランスパイルする方法を推奨

3. **テンプレートプラグイン**: meta.json と Markdown ファイルのセット

各プラグインタイプごとの詳細な実装方法については、以下のドキュメントを参照してください。

- [スクリプトプラグイン](/ja/dev/plugin/script.html)
- [テーマプラグイン](/ja/dev/plugin/theme.html)
- [テンプレートプラグイン](/ja/dev/plugin/template.html)

### 5. プラグインを公開する(任意)

プラグインの開発が完了したら、以下の手順で公開しましょう。

1. 作成したプラグインを GitHub リポジトリにプッシュします。
2. リポジトリの「トピック」に `growi-plugin` を追加してください。
3. トピックを追加することで、[GROWI プラグイン一覧](https://growi.org/plugins)ページに自動的に表示されるようになります。

これにより、他の GROWI ユーザーがあなたの開発したプラグインを見つけて利用できるようになります。
