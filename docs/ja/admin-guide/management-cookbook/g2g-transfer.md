<!-- markdownlint-disable MD033  -->
# GROWI お引越し機能

## 概要

GROWI から別の GROWI へ簡単にデータの移行ができる機能です。

### はじめに

以下の条件を満たしていることが必要です。

- <Badge text="移行先" vertical='middle'/> と <Badge text="移行元" vertical='middle' type="warning"/> の両 GROWI のバージョンが一致している
- **v6 以上であり、同一のバージョン**である
- 環境変数: `USER_UPPER_LIMIT` を設定している場合
  - <Badge text="移行先" vertical='middle'/> の USER_UPPER_LIMIT に <Badge text="移行元" vertical='middle' type="warning"/> の USER_UPPER_LIMIT よりも大きな値を設定している

## 移行フロー

1. <Badge text="移行先" vertical='middle'/> の GROWI で認証に使用するための移行キーを発行します。
1. <Badge text="移行元" vertical='middle' type="warning"/> の GROWI の管理画面で移行キーをコピペし、移行開始ボタン押下します。

## 移行先の操作フロー

### 移行キーの発行

- <Badge text="移行先" vertical='middle'/> の GROWI はインストールの有無関係なく、移行キーが発行できます。
  - インストールしている場合は、管理画面から移行キーを発行します。

![g2g-1](/assets/images/g2g-transfer-1.png)

- インストールしていない場合は、インストーラー画面から移行キーを発行します。

![g2g-2](/assets/images/g2g-transfer-2.png)

### 移行キーの期限

- 発行した移行キーの有効期限はは発行から1時間です。
- 一度移行に利用した移行キーは、再利用できません。

## 移行元の操作フロー

### 移行キーの入力と移行ボタンの押下

- <Badge text="移行先" vertical='middle'/> で発行した移行キーを <Badge text="移行元" vertical='middle' type="warning"/> の管理画面へ入力し、移行開始ボタンを押すと移行を開始します。

![g2g-3](/assets/images/g2g-transfer-3.png)


### 移行するコレクション、高度なオプションを選択する

- 詳細オプションボタンをクリックすると移行するコレクションとコレクションごとの詳細な設定が可能です。
- デフォルトはすべてのコレクションを移行し <Badge text="移行元" vertical='middle' type="warning"/> と <Badge text="移行先" vertical='middle'/> のデータベースの中身が同じになります。
- 重複するデータが存在していた場合 <Badge text="移行元" vertical='middle' type="warning"/> のデータを尊重して上書きします。ただし、Config だけは `Flush and insert` されます。

![g2g-4](/assets/images/g2g-transfer-4.png)
