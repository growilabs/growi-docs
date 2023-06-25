# 決済

## ご利用可能な決済方法

- Web 画面上での決済にはクレジットカード決済のみを受け付けております。
- その他の決済方法
  - メールにてお問い合わせいただいたお客様への請求書ベースでの対応も行っております。
  - 請求書払いの場合
    - 一年一括払いにて銀行振込で決済となります
    - 振込手数料はお客様にご負担いただきます

## ご利用可能なクレジットカードのブランド

- 下記ブランドのクレジットカードをご利用いただけます。
  - Visa
  - Mastercard
  - American Express
  - Discover
  - Diners Club
  - JCB


## 決済後にカード期限切れが起こった場合

- サブスクリプション更新の際に支払いが行われなかった(失敗した)場合は以下のようになります。
  - 該当組織の全 GROWI アプリ操作が禁止
    - GROWI へアクセス出来なくなります。
    - FREE プランへの自動ダウングレードは行いません。
  - 一定期間後に全アプリを停止

## プラン変更を行った際の決済タイミングと詳細

- 即時に決済される条件（詳しくは [即時のお支払い](https://stripe.com/docs/billing/subscriptions/upgrade-downgrade#immediate-payment) をご参照ください）
  - 支払いが不要な定期支払い (トライアルまたは無料の定期支払いなど) から、有料の定期支払いに切り替える場合
  - 請求期間が変わる場合
- 条件に該当する場合の決済の挙動
  - 算出された差額がゼロより大きい場合は直ちに請求とお支払いが行われます(先払い)
  - 新プランの1ヶ月（または1年）分のプラン利用料金と旧プランの日割り料金を勘案して即時に決済が実行されます
  - また変更日を起点に、新たに1ヶ月（または1年）後に定期支払いの自動更新が設定されます
- 条件に該当しない場合の決済の挙動
  - 即時に決済は発生せず、請求日は変更されません
  - 新プランの1カ月（または1年）分のプラン利用料金と旧プランの日割り料金を勘案した料金が、次回の自動更新のタイミングで請求されます
  - 算出された差額がマイナスになる場合は、差額が「クレジット」として残り、次回の自動更新のタイミングでお支払いに利用されます

## 明細書表記について

GROWI.cloud サービスの決済機能に利用している [Stripeサービス](https://stripe.com/jp) の仕様により、明細書の商品名を一部短く表記しております。

詳細は以下をご覧ください。
| 明細書表記 |     | 左記商品に対応するプランとオプション                                      |
| ---------- | --- | ------------------------------------------------------------------------- |
| FREE       | =>  | フリー                                                                    |
| LITE       | =>  | ライト                                                                    |
| VALUE      | =>  | バリュー                                                                  |
| STANDARD   | =>  | スタンダード                                                              |
| BUSINESS   | =>  | ビジネス                                                                  |
| BASIC      | =>  | ベーシック                                                                |
| B_STANDARD | =>  | ビジネススタンダード                                                      |
| B_PRO      | =>  | ビジネスプロ                                                              |
| A_LITE     | =>  | アカデミックライト                                                        |
| A_VALUE    | =>  | アカデミックバリュー                                                      |
| EXTRA_APP1 | =>  | アプリ上限数追加（ビジネススタンダードプラン / ビジネスプロ用) オプション |
| STORAGE20G | =>  | ストレージ(20GB) オプション                                               |
