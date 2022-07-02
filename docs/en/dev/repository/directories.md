# Directory Structure

## root

```text
├── packages
│   ├── app
│   ├── app-next
│   ├── codemirror-textlint
│   ├── core
│   ├── plugin-attachment-refs
│   ├── plugin-lsx
│   ├── plugin-pukiwiki-like-linker
│   ├── slack
│   ├── slackbot-proxy
│   └── ui
├── tsconfig.base.json
├── package.json
└── yarn.lock
```

## packages/app

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
│   ├── interfaces
│   ├── lib
│   ├── migrations
│   ├── models
│   ├── pages
│   ├── server
│   ├── services
│   ├── stores
│   ├── styles
│   ├── styles-hackmd
│   ├── utils
│   └── next-i18next.config.ts
├── styles
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
├── tsconfig.base.json
├── tsconfig.build.client.json
├── tsconfig.build.server.json
└── tsconfig.json
```
