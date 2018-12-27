module.exports = {
  title: 'GROWI Docs',
  serviceWorker: true,
  markdown: {
    toc: { includeLevel: [2] },
  },
  locales: {
    '/': {
      lang: 'ja',
      description: 'GROWI ドキュメンテーション',
    },
    '/en': {
      lang: 'en-US',
      description: 'GROWI Documentation Site',
    },
  },
  themeConfig: {
    repo: 'weseek/growi-docs',
    lastUpdated: 'Last Updated',
    editLinks: true,
    locales: {
      '/': {
        label: '日本語',
        selectText: '言語',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'ガイド', link: '/ja/guide/' },
          { text: '(TBD) API リファレンス', link: '/api/v3.md' },
          { text: 'リリースノート', link: 'https://github.com/weseek/growi/releases' },
          {
            text: '外部サイト',
            items: [
              { text: 'GROWI.org', link: 'https://growi.org' },
              { text: 'GROWI.cloud', link: 'https://growi.cloud' },
              { text: 'Blog', link: 'https://weseek.co.jp/tags/GROWI/' },
            ]
          }
        ],
        sidebar: [
          '/ja/guide/',
          {
            title: 'インストール',
            collapsable: false,
            children: [
              '/ja/guide/getting-started/docker-compose.md',
              '/ja/guide/getting-started/heroku.md',
              '/ja/guide/getting-started/ubuntu-server.md',
              '/ja/guide/getting-started/centos.md',
              '/ja/guide/getting-started/raspberry-pi.md',
            ]
          },
          {
            title: '他システムからの移行',
            collapsable: true,
            children: [
              '/ja/guide/migration-guide/from-crowi-plus-onpremise.md',
              '/ja/guide/migration-guide/from-crowi-plus-docker-compose.md',
              '/ja/guide/migration-guide/from-crowi-onpremise.md',
              '/ja/guide/migration-guide/from-bakudankun-crowi.md',
            ]
          },
          {
            title: 'システム管理者のクックブック',
            collapsable: false,
            children: [
              '/ja/guide/admin-cookbook/launch-with-systemd.md',
              '/ja/guide/admin-cookbook/multi-app.md',
              '/ja/guide/admin-cookbook/lets-encrypt.md',
              '/ja/guide/admin-cookbook/mongodb-backup.md',
              '/ja/guide/admin-cookbook/mongodb-backup-regular.md',
              '/ja/guide/admin-cookbook/integrate-with-hackmd.md',
            ]
          },
          {
            title: 'GROWI 管理者のクックブック',
            collapsable: false,
            children: [
              '/ja/guide/management-cookbook/line-breaks.md',
              '/ja/guide/management-cookbook/attachment.md',
              '/ja/guide/management-cookbook/ldap.md',
              '/ja/guide/management-cookbook/active-directory.md',
              '/ja/guide/management-cookbook/google-analytics.md',
              '/ja/guide/management-cookbook/slack.md',
            ]
          },
          {
            title: 'API リファレンス',
            collapsable: false,
            children: [
              '/api/v3.md',
              '/api/v1.md',
            ]
          },
        ],
      }
    }
  },
}
