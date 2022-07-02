# デバッグ

::: warning
このページは、`support/apply-nextjs-2` ブランチでの開発用に書かれています
:::


## ブラウザーによるクライアントコードのデバッグ

ブラウザーの機能を使うことによって、JS / React のコードをデバッグできます。

### Chrome

1. `yarn dev` で開発用サーバーを起動します
1. [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
    - [Sources panel](https://developer.chrome.com/docs/devtools/javascript/sources/) を使ってデバッグできます
    - `Ctrl + P` で TypeScript ファイルを開く場合は、`webpack://_N_E/` 配下のファイルを選んでください

![Chrome source panel](/assets/images/debugging-chrome-source-panel.png)

### Firefox

1. `yarn dev` で開発用サーバーを起動します
1. [Firefox 開発者ツール](https://developer.mozilla.org/ja/docs/Learn/Common_questions/What_are_browser_developer_tools)
    - [JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/) を使ってデバッグできます
    - `Ctrl + P` で TypeScript ファイルを開く場合は、少しわかりにくいですが同名のファイルのうち末尾に `?xxxx` といったランダムな接尾辞を持つファイルがオリジナルソースです
        - 或いは左カラムのソースファイルツリーから `Webpack` 配下のファイルを選んでください

![Firefox debugger panel](/assets/images/debugging-firefox-debugger-panel.png)


## VSCode によるリモートデバッグ

### デバッガーの attach

2種類の方法で開発用サーバーにデバッガーを attach できます。

1. 開発用サーバー起動後にデバッガーを attach する
    - **特徴: 高速かつ柔軟、開発中の任意のタイミングで attach / dettach できる**
    - attach 手順:
        1. 予め `yarn dev` で開発用サーバーを起動します
            - Ports パネルで `9229` ポートのフォワーディングが表示されていることを確認します
        1. Run and Debug パネルから「Debug: Attach Debugger to Server」を選択します
1. デバッガーを attach したサーバーを起動する
    - **特徴: サーバー起動時の処理に対してもブレークポイントを設定できる**
    - attach 手順:
        1. Run and Debug パネルから「Debug: Server」を選択します

### サーバーサイドコードのデバッグ

attach が正常に完了すると、VSCode のステータスバーの色がオレンジになります。この状態で任意のサーバーサイドコードにブレークポイントを設定してデバッグできます。

::: tip Unbound breakpoint への対処
ブレークポイントを設定しても Unbound breakpoint になってしまう場合は、以下を確認してください。

- Express のコードから import / require されていること
- [Next.js の Pages Component](https://nextjs.org/docs/basic-features/pages) の場合、コンパイル済みであること(後述)

設定したブレークポイントが有効化されたり無効化(Unbound breakpoint)されたりして不安定な場合は、Node.js プロセスへの `--nolazy` オプションの設定を検討してください。  
参考: [Breakpoint validation](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_breakpoint-validation)
:::

### Next.js の Pages Component のデバッグ

`packages/app/src/pages` 配下のファイルの内、拡張子が `*.page.ts` のファイルは [Next.js の Pages Component](https://nextjs.org/docs/basic-features/pages) です。
これらのファイルは開発用サーバー起動直後ではまだコンパイルされていないため、ブレークポイントを設定できません。ブラウザから当該ページへアクセスするなどしてコンパイルしてからブレークポイントを設定してください。

### クライアントコードのデバッグ

「[ブラウザーによるクライアントコードのデバッグ](#ブラウザーによるクライアントコードのデバッグ)」で紹介した機能と同等です。  
VSCode 上で編集しているソースコードに対してブレークポイントを設定できます。

- Chrome
  - Run and Debug パネルから「Debug: Chrome」を選択します
- Firefox
  - Run and Debug パネルから「Debug: Firefox」を選択します

