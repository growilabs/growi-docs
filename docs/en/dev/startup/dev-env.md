# Getting Started

::: tip
This chapter introduces development enviroment **specifically used in WESEEK, Inc**.
Generally, some of the tools and configurations are not required for developing GROWI.
:::

## Set up Merge Tool

1. Install P4Merge (Helix Visual Client (P4V))
    * Download and install P4Merge from [https://www.perforce.com/downloads/helix-visual-client-p4v](https://www.perforce.com/downloads/helix-visual-client-p4v)
    * Sign up if you don't have an account.
2. Set up P4Merge
    * On Diff tab, select any 2 files and press "OK".
    * Edit -&gt; Preferences
        * For "Character encoding", select either "Unicode (UTF-8, no BOM)" or "Unicode(UTF-8)".
        * For "Line ending type", select "UNIX (LF).

## Set up Git Client

1. Install SourceTree
    * Download and install SourceTree from [https://www.atlassian.com/software/sourcetree](https://www.atlassian.com/software/sourcetree)
    * If SourceTree shows a dialog, "We were not able to locate a Git install on our system already", select "Download an embedded version of Git for SourceTree alone to use".
2. Set up SourceTree
    1. Open a terminal from SourceTree.
    2. Disable autoCRLF.
        * Execute the following command `git config --global core.autoCRLF false`.
    3. Set up your account.
        * Tool &gt; Options &gt; General
        * Set "Default user information".
    4. Set P4Merge for Merge Tool
        * Tool &gt; Options &gt; Diff
        * In "External Diff / Merge" section, select "P4Merge" for "Merge Tool".
    5. Set Default Encoding
        * Tool &gt; Options &gt; General
        * In "Repo Settings" section, select "utf-8" for "Default text encoding".

## Set up Node.js Environment

Test environment (CI) uses `node:12`. Use the version Node.js, npm, and Yarn compatible with `node:12`.

:::: tabs

::: tab Windows

1. Install "nvm-windows" (version manager for Node.js, npm)
    * Download `nvm-setup.zip` from [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases) and execute
1. Install Node.js and npm (lookup latest version of 12.x from <https://nodejs.org/en/download/releases/)>

    ``` cmd
    nvm install 12.x.x
    nvm use 12.x.x
    ```

1. Install Yarn

    * Download and install Yarn from [https://yarnpkg.com/ja/docs/install](https://yarnpkg.com/ja/docs/install)

:::

::: tab Mac

1. Install homebrew
    * Follow [https://brew.sh/index](https://brew.sh/index) and install homebrew.
1. Install "nodebrew" (version manager for Node.js, npm)

    ```bash
    brew install nodebrew
    nodebrew setup
    ```

1. Install Node.js, npm

    ```bash
    nodebrew install-binary v12.x
    ```

* Install Yarn

    ```bash
    brew install yarn
    ```

:::

::::

### Confirm Versions

```bash
$ node -v
v12.14.0
$ npm -v
6.13.4
$ yarn -v
1.19.1
```

## Set up Source Code Editor

1. Install Visual Studio Code.
2. Install extensions.
   * How to install extensions
     * `Ctrl + Shift + P` -> select "Extensions: Show Recommended Extensions"

## Set up Dependent Middlewares

::: warning
Only if your environment does not support Docker, go through the following steps.
:::

1. Install VirtualBox
    * Download and install VirtualBox from [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads).
        * Version `6.0.8`
    * No Extension Packs are required.
2. Install Vagrant
    * nload and install Vagrant from [https://www.vagrantup.com/downloads.html](https://www.vagrantup.com/downloads.html).
    * Create Vagrantfile

        ```ruby
        Vagrant.configure(2) do |config|
          config.vm.box = "chaifeng/ubuntu-18.04-docker-19.03"

          ### provision
          ### change mirror to Japanese location
          #config.vm.provision "shell", inline: <<-SHELL
          #  sed -i.bak -e "s%http://archive.ubuntu.com/ubuntu/%http://ftp.iij.ad.jp/pub/linux/ubuntu/archive/%g" /etc/apt/sources.list
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
