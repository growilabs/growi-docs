# 開発環境の構築

{% hint style="success" %}
以下は WESEEK, Inc. での統一開発環境の紹介であり、開発にあたって必須ではない設定やツールの指定が含まれています
{% endhint %}

## マージツールの準備

1. P4Merge \(Helix Visual Client \(P4V\)\) インストール
   * [https://www.perforce.com/downloads/helix-visual-client-p4v](https://www.perforce.com/downloads/helix-visual-client-p4v) からDLしてインストールする
   * ユーザ登録は適宜実施する
2. P4Merge 設定
   * Diff タブで適当にファイルを2つ選択して OK
   * Edit -&gt; Preferences...
     * 「Character encoding」で「Unicode \(UTF-8, no BOM\)」または BOM 表記のない「Unicode\(UTF-8\)」を選択
     * 「Line ending type」で「UNIX \(LF\)」を選択

## Gitクライアントの準備

1. SourceTreeインストール
   * [https://ja.atlassian.com/software/sourcetree](https://ja.atlassian.com/software/sourcetree) からDLしてインストールする
   * 「Git が見つかりませんでした」というダイアログが表示された場合は、「システム全体でなく、SourceTree 単独で使うためだけの内蔵用の Git をダウンロードする。」を選択
2. SourceTree設定
   1. SourceTree からターミナルを開く
   2. 以下をコピペして実行 `git config --global core.autoCRLF false`
   3. 自身のアカウント情報を設定
      * 「オプション &gt; 全般」...
      * 「デフォルトのユーザ情報」を適宜設定
   4. P4Merge を設定
      * 「オプション &gt; Diff」...
      * 「外部Diffツール」「マージツール」で「P4Merge」を選択
   5. デフォルトの文字コード設定
      * 「オプション &gt; 全般」...
      * 「デフォルトの文字コード」で「utf-8」を選択

## Node.js 実行環境のインストール

node, npm, yarn 共に、CI 環境で利用する `node:8` のバージョンに合わせる

{% tabs %}
{% tab title="Windows" %}
* nodist \(Node.js\) インストール
  1. Nodeのバージョン管理ツール「nodist」 をインストール
     * [https://github.com/marcelklehr/nodist/releases](https://github.com/marcelklehr/nodist/releases) から NodistSetup-vX.X.X.exe をダウンロードして実行
* Node.js, npm インストール
  * `nodist global 8`
* Yarnインストール
  * [https://yarnpkg.com/ja/docs/install](https://yarnpkg.com/ja/docs/install) から DL してインストール
{% endtab %}

{% tab title="Mac" %}
* homebrew インストール
  * [https://brew.sh/index\_ja](https://brew.sh/index_ja) の記載に従ってインストールする
* nodebrew をインストール
  * `brew install nodebrew`
  * `nodebrew setup`
* Node.js, npm インストール
  * `nodebrew install-binary v8.x`
* Yarn インストール
  * `brew install yarn`
{% endtab %}
{% endtabs %}

### バージョンの確認

```bash
$ node -v
v8.11.3
$ npm -v
5.6.0
$ yarn -v
1.6.0
```

## エディタの準備

1. Visual Studio Code インストール
   * オフィシャル版 → [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)
   * ポータブル版 → [https://github.com/garethflowers/vscode-portable](https://github.com/garethflowers/vscode-portable)
2. 拡張機能をインストール
   * インストール方法
     * `Ctrl + Shift + X` を押して拡張機能名を入力してから「インストール」ボタンを押して「再読み込み」。またはリンク先から「インストール」
   * WESEEK, Inc. の開発者がインストールしている拡張機能
     * [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
     * [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
     * [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 

## 開発環境の依存インフラの準備

{% tabs %}
{% tab title="Docker 環境を利用できない場合" %}
1. VirtualBox インストール
   * [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads) から DL してインストールする
     * バージョンは `5.1.30` とする。
   * Extension Pack の中で利用する機能はないのでインストール不要
2. Vagrant インストール
   * [https://www.vagrantup.com/downloads.html](https://www.vagrantup.com/downloads.html) からDLしてインストールする
   * Vagrantfile を作成
   * {% code-tabs %}
     {% code-tabs-item title="Vagrantfile" %}
     ```ruby
     Vagrant.configure(2) do |config|  config.vm.box = "envimation/ubuntu-xenial-docker"  #### provision  ### change mirror (activate if you need)  #config.vm.provision "shell", inline: <<-SHELL  #  sed -i.bak -e "s%http://archive.ubuntu.com/ubuntu/%http://ftp.iij.ad.jp/pub/linux/ubuntu/archive/%g" /etc/apt/sources.list  #SHELL  ### install apt packages  config.vm.provision "shell", preserve_order: true, inline: <<-SHELL    apt-get update && apt-get install -q -y tmux git nano less  SHELL  ### clone git  config.vm.provision "shell", privileged: false, inline: <<-SHELL    git clone https://github.com/weseek/growi-docker-compose  SHELL  ## port forwarding  # MongoDB  config.vm.network "forwarded_port", guest: 27017, host: 27017, host_ip: "127.0.0.1"  # Redis  config.vm.network "forwarded_port", guest: 6379, host: 6379, host_ip: "127.0.0.1"  # ElasticSearch  config.vm.network "forwarded_port", guest: 9200, host: 9200, host_ip: "127.0.0.1"  # elasticsearch-head  config.vm.network "forwarded_port", guest: 9100, host: 9100, host_ip: "127.0.0.1"  # Provider Options  config.vm.provider "virtualbox" do |vb|    vb.customize ["modifyvm", :id, "--memory", "1024"]  endend
     ```
     {% endcode-tabs-item %}
     {% endcode-tabs %}
{% endtab %}
{% endtabs %}

