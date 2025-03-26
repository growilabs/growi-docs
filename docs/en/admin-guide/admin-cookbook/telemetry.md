# Telemetry (Beta)

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

Since this feature is still in beta, it is disabled by default.
When enabled, data is sent to a secure analytics platform provided by [GROWI, Inc.](https://growi.co.jp),
allowing you to participate in GROWI's continuous improvement program.
In future versions, we are working on implementing more rigorous anonymization of transmitted data,
and plan to enable this feature by default once it meets the development team's quality standards.

We welcome feedback from the early development stages for further improvement of GROWI. If you wish to cooperate, please participate in this improvement program.


## What Data is Collected?

We collect data that can be gathered using instrumentation libraries for general Node.js/JavaScript systems.

In v7.2.0, specifically, we use the following library:

- [@opentelemetry/auto-instrumentations-node](https://www.npmjs.com/package/@opentelemetry/auto-instrumentations-node)


## How to Contribute to Telemetry Collection and Support the Project?

Start your GROWI server with the environment variable `OPENTELEMETRY_ENABLED=true`. For details, please see [Environment Variables](/en/admin-guide/admin-cookbook/env-vars.html).

If this environment variable is not set, no data will be sent to us.

You can also check what is being collected by setting the environment variable `OTEL_LOG_LEVEL`. For details, please see [@opentelemetry/auto-instrumentations-node](https://www.npmjs.com/package/@opentelemetry/auto-instrumentations-node).


## Is This Data Shared?

GROWI, Inc., which provides the data collection infrastructure, is a Japanese company that respects OSS freedom and the rights and privacy of developers and users.

GROWI, Inc. uses telemetry data internally only to help improve the product.
In the future, there is a possibility that fully anonymized data may be shared with other companies exclusively for business purposes such as marketing,
but as of v7.2.0, data is not transmitted to other companies.

## How to Opt Out?

Set the environment variable `OPENTELEMETRY_ENABLED=false` or simply leave `OPENTELEMETRY_ENABLED` unset when starting the server.


## Changing the Destination

To accommodate your organization's unique analytics needs, it's also possible to configure the OpenTelemetry collector's destination to your administrator's server.

Set the environment variable `OTEL_EXPORTER_OTLP_ENDPOINT`. For details, please see [Environment Variables](/en/admin-guide/admin-cookbook/env-vars.html).


