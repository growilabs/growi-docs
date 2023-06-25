# GROWI.cloud へのデータ移行

## 移行方法

1. GROWI のエクスポート、インポート機能を用いた移行
1. GROWI のお引越し機能を用いた移行
1. GROWI.cloud サポートにご依頼いただく方法

## GROWIのエクスポート、インポート機能を用いた移行

#### 概要

- GROWI の バージョン [v3.6.2](https://github.com/weseek/growi/releases) 時点で、GROWI のエクスポート機能、インポート機能が実装されています。
- それぞれ手順についてはGROWI Docs をご参照ください。
  - [データアーカイブ](https://docs.growi.org/ja/admin-guide/management-cookbook/export.html)
  - [アーカイブデータインポート](https://docs.growi.org/ja/admin-guide/management-cookbook/import.html#growi-アーカイブデータインポート)
- ※移行作業に関して下記のお引越し機能で移行できます。  
- エクスポート・インポート機能とは異なり、添付ファイルも一緒に移行が可能です。  

#### 条件

以下の条件を満たしている必要があります。

1. 移行元となる利用中の GROWI が v3.6.2 以上にアップデート済みであり、同機能を有している
1. 移行先と移行元の両 GROWI のバージョンが一致している
    - パッチバージョンまで一致している必要があります
1. 環境変数: USER_UPPER_LIMIT を設定している場合
    - 移行先の USER_UPPER_LIMIT に移行元の USER_UPPER_LIMIT よりも大きな値を設定している

#### 手順

※ ユーザーを移行する場合は、[PASSWORD_SEED](/ja/cloud/passwordseed.html) も事前にご確認ください。

1. オンプレミスの GROWI 上でエクスポートする。
1. エクスポートした zip ファイルをダウンロードする。
<!-- textlint-disable weseek/no-doubled-joshi -->
1. zip ファイルを GROWI.cloud 上で作成した GROWI アプリ上でインポートする
<!-- textlint-enable weseek/no-doubled-joshi -->
#### 注意事項

##### ページの添付ファイルの移行について

- 添付ファイルのメタデータ (ファイルの情報を示すデータ) である Attachement コレクションは移行されますが、添付ファイルの実体は移行されません。  
- アーカイブ可能なデータにつきましては GROWI Docs により詳しい説明がございますのでご確認ください。
  - [データアーカイブ](https://docs.growi.org/ja/admin-guide/management-cookbook/export.html)

##### wiki上の添付ファイルインポートとエクスポートについて

- 移行元の GROWI で設定していたファイルアップロード先と GROWI.cloud で設定するファイルアップロード先によってインポート/エクスポートの方法が変わります。
- 設定毎の以下の方法をご参照ください。

##### 移行元でファイルシステムまたはMongoDB_GridFSに設定されていた場合

- 移行元からのデータエクスポートの際に Attachments コレクションは選択せずに移行作業を行い、
- 添付ファイルの移行は1ファイルずつ各ページ内にファイルを添付しなおしていただく必要がございます。

##### 移行元でAWS_S3に設定されていた場合

GROWI.cloud では AWS 連携機能を提供しております。  
移行後の添付ファイル管理先のご希望によって手順が変わりますので以下のそれぞれの方法でご対応ください。

- GROWI.cloud への移行にあたって添付ファイルを全て GROWI.cloud での管理に変更したい場合
  - 移行元からのデータエクスポートの際に Attachments コレクションは選択せずに移行作業を行い、
  - 添付ファイルの移行は1ファイルずつ各ページ内にファイルを添付しなおしていただく必要がございます。
- GROWI.cloud に移行しても AWS S3 でファイルを管理したい場合
  - 移行元からのデータエクスポートの際に Attachments コレクションを含めて移行作業を行なってください。
  - 移行完了後に、移行元でご利用されていた S3 バケットの設定を GROWI.cloud 上の GROWI アプリに対して正しく設定されていることをご確認ください。
  - Attachments コレクションのドキュメントおよび設定が移行できていれば、引き続き添付ファイルをご利用いただけます。

#### GROWI.cloud で立ち上げる移行先 GROWI のバージョンが v6.1.0以降でない場合

移行元の GROWI にて管理画面のアプリ設定にある「サイト URL 設定」の「Database」に URL を登録していると  
「SAML 認証で失敗する」や「 HackMD が利用できない」といった症状が発生してしまいます。

そのため、以下のどちらからの方法でご対応ください。

- GROWI.cloudで立ち上げる移行先GROWIのバージョンを v6.1.0 以降にする
  - v5系 や v6.0.x 系を選択しない
- 管理画面のアプリ設定にある「サイト URL 設定」にて「Database」に入っている URL を「Environment variables」に入っている URL と同じものに更新する

## GROWIのお引越し機能を用いた移行

<div class="card p-3 text-danger">
    <div class="card-header">注意：</div>
    <div class="card-body">
        GROWI 6.X 系バージョンにおいてはβ版の不完全な機能のため、完全な動作の保証はできません。</br>
        実施する際は、自己責任により行ってください。
    </div>
</div>

#### 概要

GROWI から別の GROWI へ簡単にデータの移行ができる機能です。

#### 条件

以下の条件を満たしている必要があります。

1. 移行元となる利用中の GROWI が v6.X 以上にアップデート済みであり、同機能を有している
1. 移行先と移行元の両 GROWI のバージョンが一致している
    - パッチバージョンまで一致している必要があります
1. 環境変数: USER_UPPER_LIMIT を設定している場合
    - 移行先の USER_UPPER_LIMIT に移行元の USER_UPPER_LIMIT よりも大きな値を設定している

#### 手順

<p class="text-danger">※ ユーザーの移行を行う場合は、[/機能/GROWIアプリ詳細/PASSWORD_SEED] も事前にご確認ください。</p>

1. <span class="alert alert-success p-1" role="alert">to:</span>　GROWI のインストール画面で「データ移行」の認証に使用するための移行キーを発行します  
<img :src="$withBase('/assets/images/ja/data-migration_1.png')" alt="data-migration_1.png">

2. <span class="alert alert-warning p-2" role="alert">from:</span>　 GROWI の管理者により、 管理画面の「データ移行」メニューで移行先からコピーしてきた移行キーをペーストし、移行開始ボタンを押下します  
<img :src="$withBase('/assets/images/ja/data-migration_2.png')" alt="data-migration_2.png">

上記の詳しい手順は [こちら](https://docs.growi.org/ja/admin-guide/management-cookbook/g2g-transfer.html) をご覧ください。
<br>

## GROWI.cloudサポートにご依頼いただく方法

#### 概要

移行元となる GROWI のサーバから取得していただいた DB の dump データおよび添付ファイルを弊社でお預かりし、GROWI.cloud 上でリストア作業をする方法です。  
ただし、弊社サポートでは基本的にお客様管理の環境へアクセスして行うデータ取得作業には対応しておりませんを行うことはありませんので、 dump データおよび添付ファイルの取得は、お客様ご自身によるご準備をお願いしております。

#### ご依頼の流れ

1. 窓口へ問い合わせ  
   弊社お問い合わせ窓口より [こちら](https://growi.cloud/contact) より  
   GROWI(OSS)→GROWI.cloudの移行を旨ご依頼をお願いいたします。  
2. 必要情報のご連携  
   **[お客様ご準備](#お客様ご準備) の内容をご確認いただき、準備をお願いいたします。**
3. お見積もり  
   お伺いした内容をもとに、弊社担当からお見積もりをご提案させていただきます。
4. 作業日のご調整と実施</span><br><br>
　　内容に問題なければ作業日の確定後、<br>
　　2.でお預かりしたデータをもとに移行作業を実施させていただく
5. お客様側の実機確認  
　　お客様側でGROWI環境をご確認いただき、動作に問題がないことをご確認いただく。

#### お客様ご準備

##### 移行先環境の準備

- GROWI.cloud のアカウントを作成
- GROWI.cloud で 移行先の GROWI アプリを作成
- GROWI.cloud で利用したい追加オプションがあれば、その内容ををご提示いただく  
  ※Basic認証を適用したい、IPアドレスフィルタリングを行いたい、など

##### 移行データの準備

- GROWI の mongodump データ
- 添付ファイルの実体　(必要に応じて)

##### 移行元GROWIの環境設定情報

- ファイルアップロード先
- PASSWORD_SEED 値
- GROWI のバージョン

## GROWI_OSSに関連するお問い合わせ

- GROWI.cloud ではお問い合わせ用サービスデスクを用意していますが、オンプレミスからの移行に関しては GROWI(OSS) に関するお問い合わせが多数発生しています。
- 移行に関しては、GROWI(OSS) の開発チームが調査対応するため、Slack または Issue へのご連絡をお願いいたします。

## GROWI.cloud からオンプレミスへの移行

<div class="border border-waring p-4 text-danger"><p>注意：</p><span>オンプレミス環境への移行はサポート対象外となりますので、自己責任にて作業をお願いいたします。</span></div>

1. GROWIのエクスポート・インポート機能を使う
2. GROWIお引越し機能を使う
