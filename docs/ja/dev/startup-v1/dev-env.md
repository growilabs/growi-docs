# (旧版) 開発環境の構築

::: warning
このページで紹介している開発スタートアップは**旧版**です。  
ホストOSで Node.js をセットアップし、実行します。

より快適に開発するには、Dev in Container を採用した [開発スタートアップ v2](/ja/dev/startup-v2/dev-env.html) を利用してください。
:::

::: tip
以下は WESEEK, Inc. で統一している開発環境の紹介です。
そのため、開発にあたって必須ではない設定やツールの指定が含まれています。
:::

## マージツールの準備

1. P4Merge (Helix Visual Client (P4V)) インストール
    * [https://www.perforce.com/downloads/helix-visual-client-p4v](https://www.perforce.com/downloads/helix-visual-client-p4v) からDLしてインストールする
    * ユーザ登録は適宜実施する
2. P4Merge 設定
    * Diff タブで適当にファイルを2つ選択して OK
    * Edit -&gt; Preferences...
        * 「Character encoding」で「Unicode (UTF-8, no BOM)」または BOM 表記のない「Unicode(UTF-8)」を選択
        * 「Line ending type」で「UNIX (LF)」を選択

## Gitクライアントの準備

1. SourceTreeインストール
    * [https://www.atlassian.com/ja/software/sourcetree](https://www.atlassian.com/ja/software/sourcetree) からDLしてインストールする
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

## Node.js 実行環境のインストール

Node.js, npm, Yarn 共に、CI 環境で利用する `node:12` のバージョンに合わせる。

:::: tabs

::: tab Windows

1. Node.js, npm のバージョン管理ツール `nvm-windows` をインストール
    * [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases) から `nvm-setup.zip` をダウンロードして実行
1. Node.js, npm インストール (12.x の最新バージョンは <https://nodejs.org/ja/download/releases/> から探してください)

    ``` cmd
    nvm install 12.x.x
    nvm use 12.x.x
    ```

1. Yarn インストール

    * [https://classic.yarnpkg.com/en/docs/install#windows-stable](https://classic.yarnpkg.com/en/docs/install#windows-stable) から DL してインストール

:::

::: tab Mac

1. nvm インストール
    * [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm) からインストールする。
1. Node.js, npm インストール

    ```bash
    nvm install 12.x.x
    nvm use 12.x.x
    ```

1. Yarn インストール
    * [https://classic.yarnpkg.com/en/docs/install#mac-stable](https://classic.yarnpkg.com/en/docs/install#mac-stable) からマニュアルに従ってインストール


:::

::::

### バージョンの確認

```bash
$ node -v
v12.14.0
$ npm -v
6.13.4
$ yarn -v
1.19.1
```

## エディタの準備

1. Visual Studio Code インストール
2. 拡張機能をインストール
   * インストール方法
     * `Ctrl + Shift + P` -> 「Extensions: Show Recommended Extensions」を選択して全てインストール

## 開発環境の依存インフラの準備

::: warning
Docker 環境をネイティブで準備できない場合のみ、以下の手順が必要
:::

1. VirtualBox インストール
    * [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads) から DL してインストールする
        * バージョンは `6.0.8` とする。
    * Extension Pack の中で利用する機能はないのでインストール不要
2. Vagrant インストール
    * [https://www.vagrantup.com/downloads](https://www.vagrantup.com/downloads) からDLしてインストールする
    * Vagrantfile を作成

        ```ruby
        Vagrant.configure(2) do |config|
          config.vm.box = "chaifeng/ubuntu-18.04-docker-19.03"

          ### provision
          ### change mirror to Japanese location
          config.vm.provision "shell", inline: <<-SHELL
            sed -i.bak -e "s%http://archive.ubuntu.com/ubuntu/%http://ftp.iij.ad.jp/pub/linux/ubuntu/archive/%g" /etc/apt/sources.list
          #SHELL

          ### install apt packages
          config.vm.provision "shell", preserve_order: true, inline: <<-SHELL
            apt-get update && apt-get install -q -y tmux git nano less
          SHELL

          ### install docker-compose
          config.vm.provision "shell", preserve_order: true, inline: <<-SHELL
            curl -sL "https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
            chmod +x /usr/local/bin/docker-compose
          SHELL

          ### clone git repos
          config.vm.provision "shell", privileged: false, inline: <<-SHELL
            git -C growi-docker-compose pull || git clone https://github.com/weseek/growi-docker-compose
          SHELL

          ## port forwarding
          # Proxy
          config.vm.network "forwarded_port", guest: 80, host: 80, host_ip: "127.0.0.1"
          config.vm.network "forwarded_port", guest: 443, host: 443, host_ip: "127.0.0.1"
          # App
          #config.vm.network "forwarded_port", guest: 3000, host: 3000, host_ip: "127.0.0.1"
          # App2
          config.vm.network "forwarded_port", guest: 3010, host: 3010, host_ip: "127.0.0.1"
          # MongoDB
          config.vm.network "forwarded_port", guest: 27017, host: 27017, host_ip: "127.0.0.1"
          # Redis
          config.vm.network "forwarded_port", guest: 6379, host: 6379, host_ip: "127.0.0.1"
          # ElasticSearch
          config.vm.network "forwarded_port", guest: 9200, host: 9200, host_ip: "127.0.0.1"
          # elasticsearch-head
          config.vm.network "forwarded_port", guest: 9100, host: 9100, host_ip: "127.0.0.1"
          # MariaDB
          config.vm.network "forwarded_port", guest: 3306, host: 3306, host_ip: "127.0.0.1"
          # phpMyAdmin
          config.vm.network "forwarded_port", guest: 8080, host: 8080, host_ip: "127.0.0.1"

          # Provider Options
          config.vm.provider "virtualbox" do |vb|
            vb.customize ["modifyvm", :id, "--memory", "4096"]
          end
        end
        ```
