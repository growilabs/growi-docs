# テレメトリー (ベータ)

## 概要

GROWI は、[OpenTelemetry](https://opentelemetry.io/) を活用して一般的な使用状況に関するテレメトリデータを収集します。
この匿名プログラムへの参加は任意であり、情報を共有したくない場合はオプトアウトできます。

## なぜテレメトリーを収集するのですか？

OSS としてリリースされた GROWI は、これまで利用ユーザーからのフィードバックを主に GitHub Issues や Slack に頼って収集してきました。
しかし Issues や Slack を通じてお寄せいただける情報は全ユーザーが把握している事象のほんの一部であり、かつ一部のコミュニティーユーザーの能動的かつ献身的な活動によって支えられています。
このアプローチでは、一部のユーザーからのフィードバックしか収集できません。全 GROWI ユーザーのニーズやユースケースは、報告されたケースとは異なる可能性も多々あるでしょう。

テレメトリー収集機構によって、開発チームは問題の早期発見、パフォーマンスの最適化、UI 改善の実現のために実際の GROWI の使用状況を把握し、正確に評価できるようになります。

GROWI ユーザーはこの機能を通じて、GROWI の進化を支える貴重なデータ提供者として、このオープンソースソフトウェアに貢献できます。

本機能はベータ版のため、デフォルトでは無効化されています。有効化すると、[GROWI, Inc.](https://growi.co.jp) が提供する安全な分析基盤にデータが送信され、GROWI の継続的な改善プログラムに参加できます。
将来的なバージョンでは、送信データに関してより厳密な匿名化処理の実装を進めており、開発チームの品質基準を満たした段階で本機能をデフォルトで有効化する予定です。

<!-- textlint-disable weseek/max-kanji-continuous-len -->
GROWI の更なる改善のため、テレメトリー機能開発初期の段階からのフィードバックを歓迎しています。
<!-- textlint-enable weseek/max-kanji-continuous-len -->
ご協力いただける場合は、ぜひこの改善プログラムへご参加ください。


## どんなデータが収集されますか？

一般的な Node.js / JavaScript システム 向けの計装ライブラリを利用して収集可能なデータを収集します。

v7.2.0 では、具体的には、次のライブラリを利用します。

- [@opentelemetry/auto-instrumentations-node](https://www.npmjs.com/package/@opentelemetry/auto-instrumentations-node)


## テレメトリーの収集に協力し、プロジェクトに貢献するには？

環境変数 `OPENTELEMETRY_ENABLED=true` を設定して GROWI サーバーを起動してください。詳しくは [環境変数](/ja/admin-guide/admin-cookbook/env-vars.html) をご覧ください。

この環境変数が設定されていない場合、データは私たちに送信されません。

また、環境変数 `OTEL_LOG_LEVEL` を設定することで、収集される内容を確認できます。
詳しくは [@opentelemetry/auto-instrumentations-node](https://www.npmjs.com/package/@opentelemetry/auto-instrumentations-node) をご覧ください。


## このデータは共有されますか?

データ収集基盤を提供する GROWI, Inc. は、OSS の自由と開発者・利用者の権利とプライバシーを尊重する日本企業です。

GROWI, Inc. では、製品の改善のためにテレメトリデータを社内のみで使用します。
将来的には、完全匿名化されたデータがマーケティングなどのビジネス目的に限り他社と共有される可能性はありますが、v7.2.0 時点では他の組織に送信されることはありません。


## オプトアウトするにはどうすればいいですか?

環境変数 `OPENTELEMETRY_ENABLED=false` を設定するか、または単に `OPENTELEMETRY_ENABLED` を未設定のままサーバーを起動してください。


## 送信先の変更

<!-- textlint-disable weseek/ja-no-redundant-expression -->
組織独自の分析ニーズにも対応できるよう、OpenTelemetry コレクターの送信先を管理者側のサーバーに設定することも可能です。
<!-- textlint-enable weseek/ja-no-redundant-expression -->

環境変数 `OTEL_EXPORTER_OTLP_ENDPOINT` を設定してください。詳しくは [環境変数](/ja/admin-guide/admin-cookbook/env-vars.html) をご覧ください。

