# 各種ツールの準備

::: tip Note
以下は WESEEK, Inc. での統一開発環境の紹介です。
そのため、開発にあたって必須ではない設定やツールの指定が含まれています。
:::

## 3way-merge ツール

ホストPCで作業します。

1. P4Merge (Helix Visual Client (P4V)) インストール
    * [https://www.perforce.com/downloads/helix-visual-client-p4v](https://www.perforce.com/downloads/helix-visual-client-p4v) からDLしてインストールする
    * ユーザ登録は適宜実施する
2. P4Merge 設定
    * Diff タブで適当にファイルを2つ選択して OK
    * Edit -&gt; Preferences...
        * 「Character encoding」で「Unicode (UTF-8, no BOM)」または BOM 表記のない「Unicode(UTF-8)」を選択
        * 「Line ending type」で「UNIX (LF)」を選択

## Git のための GUI クライアント

::: tip WESEEK Rule
ブランチ操作、reset, rebase 操作に慣れていない人は必ず GUI クライアントをセットアップし、樹形図を常に確認しながら開発を進めましょう。
:::

ホストPCで作業します。

1. SourceTreeインストール
    * [https://ja.atlassian.com/software/sourcetree](https://ja.atlassian.com/software/sourcetree) からDLしてインストールする
    * 「Git が見つかりませんでした」というダイアログが表示された場合は、「システム全体でなく、SourceTree 単独で使うためだけの内蔵用の Git をダウンロードする。」を選択
2. SourceTree設定
    1. SourceTree からターミナルを開く
    2. autoCRLF を無効化する
        * 以下をコピペして実行 `git config --global core.autoCRLF false`
    3. 自身のアカウント情報を設定
        * 「ツール &gt; オプション &gt; 全般」...
        * 「デフォルトのユーザ情報」を適宜設定
    4. P4Merge を設定
        * 「ツール &gt; オプション &gt; Diff」...
        * 「外部Diffツール」「マージツール」で「P4Merge」を選択
    5. デフォルトの文字コード設定
        * 「ツール &gt; オプション &gt; 全般」...
        * 「デフォルトの文字コード」で「utf-8」を選択

## MongoDB のための GUI クライアント

1. [Robo 3T](https://robomongo.org/download) をインストール



## docker, docker-compose 実行環境のインストール

ホストPCで作業します。

:::: tabs

::: tab "Windows" id="tab-docker-win"

※下記手順は、Virtualbox との併用を行わない手順になります

1. WSL2 を利用可能な状態にする
    1. [WSL2 Linux カーネル更新プログラム パッケージ](https://docs.microsoft.com/ja-jp/windows/wsl/wsl2-kernel) をインストール
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

        * VERSION 1 で動いている場合は、更に `wsl --set-version Ubuntu 2` を打ち込んでディストリビューションの更新を行う
    1. ホストのメモリを消費しすぎてしまう問題([microsoft/WSL#4166](https://github.com/microsoft/WSL/issues/4166))への対処として、メモリサイズを制限する
        * `C:\Users\YourAccout\.wslconfig` を編集(ファイルが存在しない場合は作成)

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



## Git 設定

devcontainer は 自動的に docker ホストの設定を拝借します。  
ここではコンテナ内部から参照するためのホスト側の設定を行います。

:::: tabs

::: tab "Windows" id="tab-git-configuration-win"

1. docker ホストとなる WSL2 のターミナルで以下を実行

    ```bash
    # name, email の設定
    git config --global user.name "Your Name"
    git config --global user.email "yourname@example.com"
    # Windows の場合は、WSL 内から更にホストPCの credential helper を参照する設定を行う
    git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/libexec/git-core/git-credential-manager.exe"
    ```

1. ホスト PC で credential helper を利用するため、以下の設定を行う
    <https://help.github.com/en/github/using-git/caching-your-github-password-in-git>

:::

::: tab "Mac" id="tab-git-configuration-mac"

1. ホストPCのターミナルで以下を実行

    ```bash
    # name, email の設定
    git config --global user.name "Your Name"
    git config --global user.email "yourname@example.com"
    ```

1. credential helper を利用するため、以下の設定を行う
    <https://help.github.com/en/github/using-git/caching-your-github-password-in-git>

:::

::::



## Visual Studio Code のセットアップ

1. [Visual Studio Code](https://code.visualstudio.com/download) をインストール
2. 拡張機能をインストール
    * 「Remote - Development」extension のインストール
    * 「Docker」extension のインストール

