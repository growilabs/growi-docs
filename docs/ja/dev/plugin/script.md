# スクリプトプラグインを開発する

## スクリプトプラグインのアーキテクチャ

スクリプトプラグインは、一般的に以下のような構造を持っています。

### スクリプトプラグインの基本構造

```
growi-plugin-example/
├── client-entry.ts        # プラグインのエントリーポイント
├── package.json            # プラグイン情報と依存関係
├── src/                    # ソースコード
│   ├── Component.tsx       # React コンポーネント
│   └── Component.css       # コンポーネント用スタイル
├── tsconfig.json           # TypeScript 設定
└── vite.config.ts          # ビルド設定
```

### 実際のプラグインの構造例

#### 例1: copy-code-to-clipboard プラグイン

[growi-plugin-copy-code-to-clipboard](https://github.com/growilabs/growi-plugin-copy-code-to-clipboard) はコードブロックにコピーボタンを追加するシンプルなプラグインです。

```
growi-plugin-copy-code-to-clipboard/
├── client-entry.ts         # プラグインのエントリーポイント
├── package.json            # プラグイン情報と依存関係
├── src/                    # ソースコード
│   ├── components/         # コンポーネントディレクトリ
│   │   └── CopyCodeButton.tsx  # コピーボタンコンポーネント
│   └── styles/             # スタイルディレクトリ
│       └── CopyCodeButton.css  # ボタン用スタイル
├── tsconfig.json           # TypeScript 設定
└── vite.config.ts          # ビルド設定
```

#### 例2: datatables プラグイン

[growi-plugin-datatables](https://github.com/growilabs/growi-plugin-datatables) は GROWI のテーブルに DataTable 機能を追加します。

```
growi-plugin-datatables/
├── client-entry.tsx            # プラグインのエントリーポイント（JSX使用）
├── package.json                # プラグイン情報と依存関係
├── src/                        # ソースコード
│   ├── CalcMethod.ts           # 計算メソッド関連ファイル
│   ├── DataTable.tsx           # DataTable コンポーネント
│   ├── DataTable.css           # DataTable コンポーネント用スタイル
│   ├── DataTableCustom.d.ts    # 型定義ファイル
│   └── mock/                   # モックデータディレクトリ
├── tsconfig.json               # TypeScript 設定
└── vite.config.ts              # ビルド設定
```

## プラグイン開発の基本的な流れ

GROWI プラグインの開発は以下の流れで行います。

### 1. プラグイン情報を編集する

- `package.json` でプラグインの基本情報を設定します。

    ```
    {
      "name": "growi-plugin-my-feature",  // プラグイン名
      "version": "1.0.0",
      "description": "My custom GROWI plugin", // プラグインの説明
      // 他の設定...
    }
    ```

- 必要なライブラリをインストールします。

    ```
    $ yarn install
    ```

### 2. プラグインを実装する

すべてのスクリプトプラグインには `client-entry.tsx` (または `.ts`) ファイルが必要です。このファイルは、プラグインのエントリーポイントとなり、GROWI本体とプラグインを接続します。

最小構成のプラグインでは、このファイル1つだけでも実装可能です。プラグインの規模や複雑さに応じて、コンポーネントやユーティリティを別ファイルに分けるかどうかは開発者の判断によります。

#### 必須の実装要素

1. **activate 関数**：プラグインが有効化されたときに実行される関数
2. **deactivate 関数**：プラグインが無効化されたときに実行される関数
3. **プラグインの登録**：`window.pluginActivators` オブジェクトへの登録
    - プラグインの名前をキーとして、activate と deactivate 関数を登録します
    - これにより、GROWI 本体は起動時にこのオブジェクトを検索してプラグインを見つけることができます。

```
const activate = (): void => {
  // GROWI本体が利用可能か確認
  if (growiFacade == null || growiFacade.markdownRenderer == null) {
    return;
  }

  // 実行したい処理
};

const deactivate = (): void => {
  // クリーンアップ処理（必要に応じて実装）
};

// `window.pluginActivators` オブジェクトへの登録
if ((window as any).pluginActivators == null) {
  (window as any).pluginActivators = {};
}
(window as any).pluginActivators['growi-plugin-my-feature'] = {
  activate,
  deactivate,
};
```

#### コードの構造化

プラグインが複雑になる場合は、以下のような構造に分けることできます。

- `client-entry.tsx`：プラグインのエントリーポイント
- `src/components/`：Reactコンポーネント
- `src/utils/`：ユーティリティ関数
- `src/styles/`：スタイルシート


### 3. プラグインをビルドする

```
$ yarn build
```

これにより `dist` ディレクトリにビルド済みのファイルが生成されます。

### 4. プラグインを公開する(任意)

プラグインの開発が完了したら、以下の手順で公開しましょう。

1. 作成したプラグインを GitHub リポジトリにプッシュします。
2. リポジトリの「トピック」に `growi-plugin` を追加してください。
3. トピックを追加することで、[GROWI プラグイン一覧](https://growi.org/plugins)ページに自動的に表示されるようになります。

これにより、他の GROWI ユーザーがあなたの開発したプラグインを見つけて利用できるようになります。
