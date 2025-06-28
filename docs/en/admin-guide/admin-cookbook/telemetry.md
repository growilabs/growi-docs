# Telemetry

## Overview

GROWI uses [OpenTelemetry](https://opentelemetry.io/) to collect telemetry data about general usage.
Participation in this anonymous program is optional, and you can opt out if you don't want to share information.

## Why Do We Collect Telemetry?

As an OSS release, GROWI has mainly relied on GitHub Issues and Slack to collect feedback from users.
However, the information provided through Issues and Slack represents only a small portion of what all users experience,
and is supported by the active and dedicated involvement of only some community members.
This approach only allows us to collect feedback from a subset of users. The needs and use cases of all GROWI users may differ significantly from the reported cases.

With the telemetry collection mechanism,
the development team can understand and accurately evaluate actual GROWI usage to enable early problem detection, performance optimization, and UI improvements.

Through this feature, GROWI users can contribute to this open source software as valuable data providers supporting GROWI's evolution.

In v7.2.9, we completed the implementation of rigorous anonymization of transmitted data and met the development team's quality standards,
so we enabled this feature by default.
Data is sent to a secure analytics platform provided by [GROWI, Inc.](https://growi.co.jp),
allowing you to participate in GROWI's continuous improvement program.

We welcome feedback on the telemetry feature for further improvement of GROWI. If you wish to cooperate, please participate in this improvement program.

## What Data is Collected?

We collect data that can be gathered using instrumentation libraries for general Node.js/JavaScript systems.

Specifically, we use the following library:

- [@opentelemetry/auto-instrumentations-node](https://www.npmjs.com/package/@opentelemetry/auto-instrumentations-node)

## Data Anonymization

In v7.2.9, additional anonymization features were added to enhance privacy protection.
While sensitive information is not transmitted under normal conditions,
environments that want to anonymize data more carefully can set the environment variable `OPENTELEMETRY_ANONYMIZE_IN_BEST_EFFORT=true`
to provide an additional layer of protection. When enabled, this may have a slight impact on server performance.

## How to Contribute to Telemetry Collection and Support the Project?

Since v7.2.9, the telemetry feature is enabled by default.
You can participate in GROWI's continuous improvement program without any special configuration. For details, please see [Environment Variables](/en/admin-guide/admin-cookbook/env-vars.html).

You can also check what is being collected by setting the environment variable `OTEL_LOG_LEVEL`. For details, please see [@opentelemetry/auto-instrumentations-node](https://www.npmjs.com/package/@opentelemetry/auto-instrumentations-node).

## Is This Data Shared?

GROWI, Inc., which provides the data collection infrastructure, is a Japanese company that respects OSS freedom and the rights and privacy of developers and users.

GROWI, Inc. uses telemetry data internally only to help improve the product.
In the future, there is a possibility that fully anonymized data may be shared with other companies exclusively for business purposes such as marketing,
but currently data is not transmitted to other companies.

## How to Opt Out?

Set the environment variable `OPENTELEMETRY_ENABLED=false` when starting the server. For details, please see [Environment Variables](/en/admin-guide/admin-cookbook/env-vars.html).

## Changing the Destination

To accommodate your organization's unique analytics needs, it's also possible to configure the OpenTelemetry collector's destination to your administrator's server.

Set the environment variable `OTEL_EXPORTER_OTLP_ENDPOINT`. For details, please see [Environment Variables](/en/admin-guide/admin-cookbook/env-vars.html).
