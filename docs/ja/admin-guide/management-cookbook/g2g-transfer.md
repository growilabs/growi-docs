# GROWI お引越し機能
<!-- markdownlint-disable MD033  -->
## 概要

GROWI から別の GROWI へ簡単にデータの移行ができる機能です。

### はじめに

以下の条件を満たしていることが必要です。

- 移行先と移行元の両 GROWI のバージョンが一致している
- **v6 以上であり、同一のバージョン**である
- 環境変数: `USER_UPPER_LIMIT` を設定している場合
  - 移行先の USER_UPPER_LIMIT に移行元の USER_UPPER_LIMIT よりも大きな値を設定している

## 移行フロー

1. <Badge text="to" vertical='middle'/> GROWI で認証に使用するための移行キーを発行します。
1. <Badge text="from" vertical='middle' type="warning"/> GROWI の管理画面で移行キーをコピペし、移行開始ボタン押下します。

## <Badge text="to" vertical='middle'/>  移行先の操作フロー

### 移行キーの発行

- 移行先の GROWI はインストールの有無関係なく、移行キーが発行できます。
  - インストールしている場合は、管理画面から移行キーを発行します。

![g2g-transfer-1](/assets/images/g2g-transfer-1.png)

- インストールしていない場合は、インストーラー画面から移行キーを発行します。

![g2g-transfer-2](/assets/images/g2g-transfer-2.png)

### 移行キーの期限

- 発行した移行キーの有効期限は発行から1時間です。
- 一度移行に利用した移行キーは、再利用できません。

### <Badge text="from" vertical='middle' type="warning"/> 移行元の操作フロー

### 移行キーの入力と移行ボタンの押下

- 移行先で発行した移行キーを移行元の管理画面へ入力し、移行開始ボタンを押すと移行を開始します。

![g2g-transfer-3](/assets/images/g2g-transfer-3.png)


### 移行するコレクション、高度なオプションを選択する

- 詳細オプションボタンをクリックすると移行するコレクションとコレクションごとの詳細な設定が可能です。
- デフォルトはすべてのコレクションを移行し移行元と移行先のデータベースの中身が同じになります。
- 重複するデータが存在していた場合、移行元のデータで上書きします。ただし、Config だけは `Flush and insert` されます。


![g2g-transfer-4](/assets/images/g2g-transfer-4.png)

### 移行先のファイルアップロード設定

v6.0.5 現在では **移行先** の設定値がそのまま使用されます。

::: tip
今後のアップデートにより **移行元** でファイルアップロード設定を選択することが可能になる予定です。
:::

### 添付ファイル転送の対応表

| <Badge text="from" vertical='middle' type="warning"/> \ <Badge text="to" vertical='middle'/> | Local                       | Cloud(S3)                                          | Cloud(GCS)                                         | GridFS                      | 未設定(none)                               |
| :----------: | --------------------------- | :------------------------------------------------- | :------------------------------------------------- | --------------------------- | ------------------------------------------ |
| Local        | :white_check_mark: 転送する | :white_check_mark: 転送する                        | :white_check_mark: 転送する                        | :white_check_mark: 転送する | 移行元で明示的に指定しない限り転送できない |
| Cloud(S3)    | :white_check_mark: 転送する | :triangular_flag_on_post: 設定が異なる場合は転送する | :white_check_mark: 転送する                        | :white_check_mark: 転送する | 移行元で明示的に指定しない限り転送できない |
| Cloud(GCS)   | :white_check_mark: 転送する | :white_check_mark: 転送する                        | :triangular_flag_on_post: 設定が異なる場合は転送する | :white_check_mark: 転送する | 移行元で明示的に指定しない限り転送できない |
| GridFS       | :white_check_mark: 転送する | :white_check_mark: 転送する                        | :white_check_mark: 転送する                        | :white_check_mark: 転送する | 移行元で明示的に指定しない限り転送できない |
| 未設定(none) | :x: 転送不能                | :x: 転送不能                                       | :x: 転送不能                                       | :x: 転送不能                | :x: 転送不能                               |

- Cloud(S3/GCS) -> Cloud(GCS/S3)
  - サービス/バケット名が一致している場合
    - 添付ファイルは転送されません
  - サービス/バケット名が異なる場合
    - 転送します
- Cloud(S3/GCS) -> 未設定
  - 添付ファイルは転送されません
- Local -> 未設定
  - 移行先のファイルアップロード設定が Local に設定されます
  - 添付ファイルは転送されます
