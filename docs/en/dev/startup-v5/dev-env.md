# Creating a Development Environment

::: danger
This page's development environment is compatible with GROWI v7.0.x and below.
For development with v7.1.x and above, please refer to [Development Startup v6](../startup-v6/dev-env.html).
:::

## Preparing Tools

::: tip Note
The below documentation details our development environment at WESEEK Inc. It may include some tools that are not necessary for your use case.
:::


## Install an execution environment for docker and docker-compose

:::: tabs

::: tab "Windows" id="tab-docker-win"

1. Install Ubuntu on WSL2

    ```bash
    > wsl --install
    ```

    * Confirmation

        ```bash
        > wsl -l -v
        NAME      STATE           VERSION
        * Ubuntu    Stopped         2
        ```

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)

:::

::: tab "Mac" id="tab-docker-mac"

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
    1. Increase the RAM because of 2 GB runtime memory is set by default.
        * Reference: [Change preferences on Mac | Docker Documentation](https://docs.docker.com/desktop/settings/mac/#resources)

:::

::: tab "Ubuntu" id="tab-docker-ubuntu"

1. [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

:::

::::



### Install Git

on the host PC:

:::: tabs

::: tab "Windows" id="tab-git-win"

1. Install [Git for Windows](https://gitforwindows.org/)
    * Basically, the default settings are fine, but if you have never used Vim or are not familiar with it, change the following options.
        1. Chooseing the default editor used by Git
            * Change to another familiar editor

:::

::: tab "Mac" id="tab-git-mac"

```bash
brew install git
```

:::

::: tab "Ubuntu" id="tab-git-ubuntu"

```bash
apt-get install git
```

:::

::::

#### Configuration

Devcontainer will automatically inherit settings from Docker.  
These settings must be set up on the host side.

:::: tabs

::: tab "Windows" id="tab-git-configuration-win"

1. In a WSL2 terminal on the docker host machine, execute the following commands

    ```bash
    # name, email settings
    git config --global user.name "Your Name"
    git config --global user.email "yourname@example.com"
    # If you are using Windows, you will also need to set up a credential helper for WSL to reference the local machines settings
    git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager.exe"
    ```

:::

::: tab "Mac" id="tab-git-configuration-mac"

1. Open a terminal and execute the following commands

    ```bash
    # name, email settings
    git config --global user.name "Your Name"
    git config --global user.email "yourname@example.com"
    ```

1. Setup Git Credential Helper (GCM)
    <https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git>

:::

::::

## Set up Visual Studio Code

1. Install [Visual Studio Code](https://code.visualstudio.com/download)
2. Install extensions
    * Remote - Development
    * Docker



## Preparing a Workspace

::: tip Note
The below documentation details our development environment at WESEEK Inc. It may include some tools that are not necessary for your use case.
:::

In order to develop using devcontainer, you need to set up a directory tree as follows:

```
- GROWI
    - growi                   <-- weseek/growi repository
    - growi-docker-compose    <-- weseek/growi-docker-compose repository
```

* If you are using Windows, use WSL to execute the following commands; on Mac use the included terminal

::: warning
**Check before starting**
`git config -l --global` should show autoCRLF set to false
:::

```bash
mkdir -p ~/Projects/GROWI
cd ~/Projects/GROWI
git clone https://github.com/weseek/growi.git
git clone https://github.com/weseek/growi-docker-compose.git
```
