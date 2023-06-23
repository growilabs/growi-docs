# Payment

## Accepted Payment Methods

- We only accept credit card payments.

## Accepted Credit Card Brands

- We accept the following brands of credit cards.
  - Visa
  - Mastercard
  - American Express
  - Discover
  - Diners Club
  - JCB


## If Your Card Expires After Payment

- If the payment was not made (failed) during subscription renewal, the following will occur
  - All GROWI App operations for the organization will be prohibited
    - Access to GROWI will be disabled.
    - No automatic downgrade to the FREE plan will be performed.
  - All Apps will be suspended after a certain period of time

## Settlement Timing and Details When Changing Plans

- Conditions for immediate payment（see [Immediate Payment](https://stripe.com/docs/billing/subscriptions/upgrade-downgrade#immediate-payment) for details）
  - When switching from a recurring payment that does not require payment (e.g., trial or free recurring payment) to a paid recurring payment
  - When the billing period changes
- Behavior of the payment when the conditions are met
  - If the calculated difference is greater than zero, you will be billed and paid immediately (payment in advance)
  - Settlement is performed immediately, taking into account the one-month (or one-year) plan usage fee for the new plan and the daily rate for the old plan.
  - Automatic renewal of the recurring payment will be set up after one month (or one year) from the date of the change.
- Settlement behavior when conditions are not met
  - No immediate settlement will be made and the billing date will not be changed.
  - You will be billed at the time of your next auto-renewal for a fee that takes into account the one-month (or one-year) plan usage fee for the new plan and the pro-rated fee for the old plan.
  - If the calculated difference is negative, the difference will remain as a "credit*" and will be used for payment at the time of the next auto-renewal.

## About Statement Notation

Due to the specification of  [Stripe service](https://stripe.com/en-jp), which is used for the payment function of GROWI.cloud service, some product names on the statement are shortened.

Please see below for details.
| Itemized billing statement |     | Plans and options corresponding to the products listed on the left                                      |
| ---------- | --- | ------------------------------------------------------------------------- |
| FREE       | =>  | Free                                                                      |
| LITE       | =>  | Lite                                                                      |
| VALUE      | =>  | Value                                                                     |
| STANDARD   | =>  | Standard                                                                  |
| BUSINESS   | =>  | Business                                                                  |
| BASIC      | =>  | Basic                                                                     |
| B_STANDARD | =>  | Business Standard                                                         |
| B_PRO      | =>  | Business Pro                                                              |
| A_LITE     | =>  | Academic Light                                                            |
| A_VALUE    | =>  | Academic Value                                                            |
| EXTRA_APP1 | =>  | Additional app limit (for Business Standard Plan / Business Pro) Option   |
| STORAGE20G | =>  | Storage (20GB) Option                                                     |

