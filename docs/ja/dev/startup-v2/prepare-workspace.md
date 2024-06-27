# ワークスペース準備

::: tip Note
以下は WESEEK, Inc. で統一している開発環境の紹介です。
そのため、開発にあたって必須ではない設定やツールの指定が含まれています。
:::

devcontainer で開発するには、以下のような構造のディレクトリツリーが必要です。

```
- GROWI
    - growi                   <-- growilabs/growi repository
    - growi-docker-compose    <-- growilabs/growi-docker-compose repository
```

## 手順

* Windows の場合は WSL 内、Mac の場合はホストPCで作業します

::: warning
**事前チェック**
`git config -l --global` で、autoCRLF が false になっていることを確認しましょう
:::

```bash
mkdir -p ~/Projects/GROWI
cd ~/Projects/GROWI
git clone https://github.com/growilabs/growi.git
git clone https://github.com/growilabs/growi-docker-compose.git
# プラグイン開発時に利用する空のディレクトリを作成
mkdir node_modules
```

## SourceTree のリポジトリリストに登録

* 上の手順で clone したリポジトリを登録
  * Windows の場合は WSL のパス: `\\wsl$\Ubuntu\home\{your account}\Projects\GROWI\growi`
