# 同時多人数編集（HackMD）

## 同時多人数編集（HackMD）とは

- HackMD は Markdown 同時多人数編集をするためのとても優れたツールです。
  - 詳細は [GROWI Docs](https://docs.growi.org/ja/admin-guide/admin-cookbook/integrate-with-hackmd.html) をご参照ください。
- HackMD は GROWI v6 系以前のバージョンでのみご利用可能で、GROWI v7 系以降のバージョンでは HackMD を利用できません。
  - ただし、GROWI v7 系以降のバージョンでは、HackMD を利用せずに GROWI ビルトインの編集機能で同時多人数編集が可能です。

## HackMD をご利用いただけるプラン

- スモール
- ミディアム
- ラージ
- グランド
- アンリミテッド
- 旧プラン (※現在は新規にご契約いただけません)
  - ベーシック
  - ビジネススタンダード
  - ビジネスプロ
- STARTUP
- PLUS
- PREMIUM

## HackMD 有効化手順

1. HackMD を有効化したいアプリの詳細ページを開いてください。
2. ドメインの項目右側の「編集」を選択してください。  
<img :src="$withBase('/assets/images/ja/hackmd_1.png')" alt="hackmd_1">
3. 「希望ドメイン」項目内の「同時多人数編集( HackMD )を有効にする」のトグルをクリックし ON にしてください。
    - 独自ドメインをご利用の場合は、オンプレミスでご利用いただく場合と同様に HackMD アプリにアクセスするためのドメインを別途発行する必要があります。
4. 右上の「更新する」を選択してください。  
<img :src="$withBase('/assets/images/ja/hackmd_2.png')" alt="hackmd_2">
<!-- textlint-disable weseek/no-doubled-joshi -->
5. アプリの HackMD が有効な状態で自動で再起動されます。
<!-- textlint-enable weseek/no-doubled-joshi -->
6. 再起動が完了後、これまでと同じドメインの GROWI アプリにて、HackMD を使用することが可能になります。
7. HackMD の機能をご利用の際は、GROWI の `View` `編集` の隣のタブに表示される `HackMD` をクリックして編集を開始してください。  
<img :src="$withBase('/assets/images/ja/hackmd_3.png')" alt="hackmd_3">

## HackMD の文字数制限

- 1ページあたり**10万文字が上限となっています。**
- 10万文字を超えた場合は以下のように警告が表示されます。  
<img :src="$withBase('/assets/images/ja/hackmd_4.png')" alt="hackmd_4">

### GROWI ビルドインの編集機能をご利用の場合

- **文字制限数はございません。**
- 過剰に多い文字数(容量換算で約16MB以上)には対応出来ない場合がございます。
