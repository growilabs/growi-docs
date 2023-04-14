# Directory Structure

## root

```text
├── packages
│   ├── app
│   └── slackbot-proxy
├── packages
│   ├── core
│   ├── plugin-lsx
│   ├── ...
│
├── tsconfig.base.json
├── package.json
├── turbo.json
└── yarn.lock
```

## apps/app

```text
├── .next
├── config
│   └── logger
├── docker
├── public
│   ├── images
│   ├── js
│   ├── static
│   └── locales
│        ├── en_US
│        ├── ja_JP
│        └── zh_CN
├── resource
│   ├── certs
│   └── search
│   ├── locales
│   │   ├── en_US
│   │   ├── ja_JP
│   │   └── zh_CN
│   ├── cdn-manifests.js
│   └── Contributor.js
├── src
│   ├── client
│   ├── components
│   ├── features
│   ├── interfaces
│   ├── migrations
│   ├── models
│   ├── pages
│   ├── server
│   ├── services
│   ├── stores
│   ├── styles
│   └── utils
├── test
│   ├── cypress
│   ├── integration
│   └── unit
├── tmp
├── jest.config.js
├── migrate-mongo-config.js
├── next.config.js
├── package.json
├── regconfig.json
└── tsconfig.json
```
