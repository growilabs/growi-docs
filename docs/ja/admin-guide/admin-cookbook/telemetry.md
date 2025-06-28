# テレメトリー

## 概要

GROWI は、[OpenTelemetry](https://opentelemetry.io/) を活用して一般的な使用状況に関するテレメトリデータを収集します。
この匿名プログラムへの参加は任意であり、情報を共有したくない場合はオプトアウトできます。

## なぜテレメトリーを収集するのですか？

OSS としてリリースされた GROWI は、これまで利用ユーザーからのフィードバックを主に GitHub Issues や Slack に頼って収集してきました。
しかし Issues や Slack を通じてお寄せいただける情報は全ユーザーが把握している事象のほんの一部であり、かつ一部のコミュニティーユーザーの能動的かつ献身的な活動によって支えられています。
このアプローチでは、一部のユーザーからのフィードバックしか収集できません。全 GROWI ユーザーのニーズやユースケースは、報告されたケースとは異なる可能性も多々あるでしょう。

テレメトリー収集機構によって、開発チームは問題の早期発見、パフォーマンスの最適化、UI 改善の実現のために実際の GROWI の使用状況を把握し、正確に評価できるようになります。

GROWI ユーザーはこの機能を通じて、GROWI の進化を支える貴重なデータ提供者として、このオープンソースソフトウェアに貢献できます。

v7.2.9 では、送信データに関する厳密な匿名化処理の実装が完了し、開発チームの品質基準を満たしたため、本機能をデフォルトで有効化しました。[GROWI, Inc.](https://growi.co.jp) が提供する安全な分析基盤にデータが送信され、GROWI の継続的な改善プログラムに参加できます。

<!-- textlint-disable weseek/max-kanji-continuous-len -->
GROWI の更なる改善のため、テレメトリー機能へのフィードバックを歓迎しています。
<!-- textlint-enable weseek/max-kanji-continuous-len -->
ご協力いただける場合は、ぜひこの改善プログラムへご参加ください。

## どんなデータが収集されますか？

一般的な Node.js / JavaScript システム 向けの計装ライブラリを利用して収集可能なデータを収集します。

具体的には、次のライブラリを利用します。

- [@opentelemetry/auto-instrumentations-node](https://www.npmjs.com/package/@opentelemetry/auto-instrumentations-node)

## データの匿名化について

v7.2.9 では、プライバシー保護を強化するため、追加の匿名化機能が追加されました。
通常状態でも機密情報は送信されることはありませんが、より慎重にデータを匿名化したい環境では環境変数 `OPENTELEMETRY_ANONYMIZE_IN_BEST_EFFORT=true` を設定することで追加の保護層を提供できます。有効にした場合、わずかながらサーバーパフォーマンスに影響する可能性があります。

## テレメトリーの収集に協力し、プロジェクトに貢献するには？

v7.2.9 以降、テレメトリー機能はデフォルトで有効化されています。
特別な設定をしなくても、GROWI の継続的な改善プログラムに参加できます。詳しくは [環境変数](/ja/admin-guide/admin-cookbook/env-vars.html) をご覧ください。

また、環境変数 `OTEL_LOG_LEVEL` を設定することで、収集される内容を確認できます。
詳しくは [@opentelemetry/auto-instrumentations-node](https://www.npmjs.com/package/@opentelemetry/auto-instrumentations-node) をご覧ください。

## このデータは共有されますか?

データ収集基盤を提供する GROWI, Inc. は、OSS の自由と開発者・利用者の権利とプライバシーを尊重する日本企業です。

GROWI, Inc. では、製品の改善のためにテレメトリデータを社内のみで使用します。
将来的には、完全匿名化されたデータがマーケティングなどのビジネス目的に限り他社と共有される可能性はありますが、現時点では他の組織に送信されることはありません。

## オプトアウトするにはどうすればいいですか?

環境変数 `OPENTELEMETRY_ENABLED=false` を設定してサーバーを起動してください。詳しくは [環境変数](/ja/admin-guide/admin-cookbook/env-vars.html) をご覧ください。

## 送信先の変更

<!-- textlint-disable weseek/ja-no-redundant-expression -->
組織独自の分析ニーズにも対応できるよう、OpenTelemetry コレクターの送信先を管理者側のサーバーに設定することも可能です。
<!-- textlint-enable weseek/ja-no-redundant-expression -->

環境変数 `OTEL_EXPORTER_OTLP_ENDPOINT` を設定してください。詳しくは [環境変数](/ja/admin-guide/admin-cookbook/env-vars.html) をご覧ください。
