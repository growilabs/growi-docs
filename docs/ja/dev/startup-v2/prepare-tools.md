# 各種ツールの準備

::: tip Note
以下は WESEEK, Inc. で統一している開発環境の紹介です。
そのため、開発にあたって必須ではない設定やツールの指定が含まれています。
:::



## docker, docker-compose 実行環境のインストール

ホストPCで作業します。

:::: tabs

::: tab "Windows" id="tab-docker-win"

※下記手順は、Virtualbox を併用しない手順です。

1. WSL2 を利用できる状態にする
    1. [WSL2 Linux カーネル更新プログラム パッケージ](https://docs.microsoft.com/ja-jp/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package) をインストール
    1. 管理者権限で起動した PowerShell で以下を実行

        ```bash
        # Hyper-V の無効化
        Disable-WindowsOptionalFeature -Online -FeatureName $("Microsoft-Hyper-V")
        # WSL の有効化
        Enable-WindowsOptionalFeature -Online -FeatureName $("VirtualMachinePlatform", "Microsoft-Windows-Subsystem-Linux")
        ```

    1. Microsoft Store で Ubuntu をインストール
        * アプリ名にバージョンが入っていない「Ubuntu」アプリを推奨
            * その時点の最新版(Ubuntu 20.04 LTS 等)へのエイリアスになっている
        * 単体で起動してユーザー作成、ログインまで済ませる
        * 確認

            ```bash
            > wsl -l -v
            NAME      STATE           VERSION
            * Ubuntu    Stopped         2
            ```

        * VERSION 1 で動いている場合は、更に `wsl --set-version Ubuntu 2` を打ち込んでディストリビューションを更新する
    1. ホストのメモリを消費しすぎてしまう問題([microsoft/WSL#4166](https://github.com/microsoft/WSL/issues/4166))への対処として、メモリサイズを制限する
        * `C:\Users\YourAccount\.wslconfig` を編集(ファイルが存在しない場合は作成)

        ```
        [wsl2]
        memory=6GB
        swap=0
        ```

1. [Docker Desktop](https://www.docker.com/products/docker-desktop) をインストール

:::

::: tab "Mac" id="tab-docker-mac"

1. [Docker Desktop](https://www.docker.com/products/docker-desktop) をインストール
    1. メモリ利用量上限がデフォルトでは 2GB に設定されているので変更する
        * 参考: [Get started with Docker Desktop for Mac | Resources](https://docs.docker.com/docker-for-mac/#resources)

:::

::::



## Git のインストール

ホストPCで作業します。

:::: tabs

::: tab "Windows" id="tab-git-win"

1. [Git for Windows](https://gitforwindows.org/) のインストール
    * 基本的に初期設定でよいが、以下のオプションだけは変更する
        1. Chooseing the default editor used by Git
            * デフォルトは Vim になっているので、操作したことがない人は他のエディタに変更する
        1. Configuring the line ending conversions
            * **Checkout as-is, commit as-is** を選択

:::

::: tab "Mac" id="tab-git-mac"

```bash
brew install git
brew install git-lfs
git lfs install
```

:::

::::

### 設定

devcontainer は 自動的に docker ホストの設定を参照します。  

<!-- textlint-disable weseek/ja-no-redundant-expression -->
ここではコンテナ内部から参照するためのホスト側の設定を行います。
<!-- textlint-enable weseek/ja-no-redundant-expression -->

:::: tabs

::: tab "Windows" id="tab-git-configuration-win"

1. docker ホストとなる WSL2 のターミナルで以下を実行する

    ```bash
    # name, email の設定
    git config --global user.name "Your Name"
    git config --global user.email "yourname@example.com"
    # autocrlf 無効化
    git config --global core.autocrlf false
    # Windows の場合は、WSL 内から更にホストPCの credential helper を参照する設定を行う
    git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/libexec/git-core/git-credential-manager.exe"
    ```

1. ホスト PC で credential helper を利用するため、以下を設定する
    <https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git>

:::

::: tab "Mac" id="tab-git-configuration-mac"

1. ホストPCのターミナルで以下を実行

    ```bash
    # name, email の設定
    git config --global user.name "Your Name"
    git config --global user.email "yourname@example.com"
    # autocrlf 無効化
    git config --global core.autocrlf false
    ```

1. credential helper を利用するため、以下を設定する
    <https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git>

:::

::::



## Visual Studio Code のセットアップ

1. [Visual Studio Code](https://code.visualstudio.com/download) をインストール
2. 拡張機能をインストール
    * 「Remote - Development」extension のインストール



## MongoDB のための GUI クライアント

1. [Robo 3T](https://robomongo.org/download) をインストール



## Git の操作について

::: tip WESEEK Rule
ブランチ操作、reset, rebase 操作に慣れていない人は必ず Git Graph を利用し、樹形図を常に確認しながら開発を進めるようにしてください。
:::
