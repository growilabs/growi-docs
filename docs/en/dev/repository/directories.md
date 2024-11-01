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
└── pnpm-lock.yaml
```

## apps/app

```text
├── .next
├── config
│   ├── logger
│   ├── i18next.config.js
│   ├── migrate-mongo-config.js
│   └── next-i18next.config.js
├── docker
├── playwright
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
├── test-with-vite
├── tmp
├── next.config.js
├── nodemon.json
├── package.json
└── tsconfig.json
```
