# GROWI での多要素認証の適用について

## 認証機構を ID/Password で設定している場合

GROWI の認証機構を「ID/Password」で設定している場合は、GROWI v7.0 時点では多要素認証を適用できません。
認証におけるセキュリティを高める方法としては、IP アドレスフィルタリングやベーシック認証などの有償オプションを追加していただくことで、セキュリティを強化していただくことが可能です。

## 認証機構を外部の認証機構で設定している場合
<!-- textlint-disable weseek/ja-no-redundant-expression -->
GROWI の認証機構を「SAML」や「LDAP」などの外部の認証機構で設定している場合は、外部の認証機構に用いるプロバイダ次第で、多要素認証を適用することが可能です。
<!-- textlint-disable weseek/ja-no-redundant-expression -->
各プロバイダにおいて、認証機構の適用が可能かどうかはご利用中のプロバイダにお問い合わせください。  

<!-- textlint-disable weseek/ja-no-redundant-expression -->
なお、GROWI.cloud で無償提供している Keycloak を活用していただくことで、Keycloak の設定次第で多要素認証を適用する事が可能です。  
<!-- textlint-disable weseek/ja-no-redundant-expression -->
多要素認証の適用が要件上必須のお客さまは、[こちら](/ja/cloud/singlesignon.html) から Keycloak のご利用も含めてご検討ください。
