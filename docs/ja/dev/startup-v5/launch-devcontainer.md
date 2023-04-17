# devcontainer の起動

::: tip Note
以下は WESEEK, Inc. で統一している開発環境の紹介です。
そのため、開発にあたって必須ではない設定やツールの指定が含まれています。
:::

## 起動

1. VSCode を起動
1. リモート接続用インジケーターから、devcontainer でリポジトリを開く
    * ![indicator](/assets/images/vscode-remote-button.png)
    * Remote-Containers: Open folder in Container...
    * weseek/growi ローカルリポジトリを選択
        * Windows の場合は WSL のパス: `\\wsl$\Ubuntu\home\{your account}\Projects\GROWI\growi`
            * `{your account}` は自身のアカウント名に置き換えてください
1. 初回は各種コンテナイメージのダウンロードとビルドのため、5～10分待つ
1. エラーなく起動したら、サイドバーの Remote Explorer でコンテナの起動を確認する
    * ![ready](/assets/images/growi-dev-ready.png)


## 確認

エラーなく起動したら、以下を確認してください。  
GROWI-Dev devcontainer ウィンドウ内で作業します。


### Git 設定

* ターミナルで、Git の設定を出力し、Windows であれば WSL のグローバル設定、Mac であればホストPCのグローバル設定が反映されていることを確認する

    ```bash
    node ➜ /workspace/growi-docs (master) $ git config -l --show-origin
    file:/home/node/.gitconfig      user.name=Your Name
    file:/home/node/.gitconfig      user.email=yourname@example.com
    file:/home/node/.gitconfig      core.autocrlf=false
    file:/home/node/.gitconfig      credential.helper=!f() { /home/node/.vscode-server/bin/a5d1cc28bb5da32ec67e86cc50f84c67cc690321/node /tmp/vscode-remote-containers-c717012556037588bd78c4b869724bf548d49841.js $*; }; f
    ...
    ```

  * `credential.helper` に関しては、上記のようなスクリプトがセットされている状態が正常



## トラブルシュート

### Remote WSL の接続に失敗する場合

#### 症状

```
sh: 1: /scripts/wslServer.sh: not found
```

#### 対処

1. VSCode のアンインストール
1. `C:\Users\${YourAccount}\.vscode` の削除
1. 再度 VSCode のインストールから
