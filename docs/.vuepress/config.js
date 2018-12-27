module.exports = {
  title: 'GROWI Docs',
  serviceWorker: true,
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
    locales: {
      '/': {
        label: '日本語',
        selectText: '言語',
        editLinkText: 'GitHub 上でこのページを編集する',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: '(TBD) API リファレンス', link: '/api/' },
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
          {
            title: 'インストール',
            collapsable: false,
            children: [
              '/guide/getting-started/heroku.md',
              '/guide/getting-started/docker-compose.md',
              '/guide/getting-started/ubuntu-server.md',
              '/guide/getting-started/centos.md',
              '/guide/getting-started/raspberry-pi.md',
            ]
          },
          {
            title: '他システムからの移行',
            collapsable: true,
            children: [
              '/guide/migration-guide/from-crowi-plus-onpuremisu.md',
              '/guide/migration-guide/from-crowi-plus-docker-compose.md',
              '/guide/migration-guide/from-crowi-onpuremisu.md',
              '/guide/migration-guide/from-bakudankun-crowi.md',
            ]
          },
          {
            title: 'システム管理者のクックブック',
            collapsable: false,
            children: [
              '/guide/admin-cookbook/launch-with-systemd.md',
              '/guide/admin-cookbook/multi-app.md',
              '/guide/admin-cookbook/lets-encrypt-niyoru-https.md',
              '/guide/admin-cookbook/backup-mongodb.md',
              '/guide/admin-cookbook/mongodb-regular-backup.md',
              '/guide/admin-cookbook/integrate-with-hackmd.md',
            ]
          },
          {
            title: 'GROWI 管理者のクックブック',
            collapsable: false,
            children: [
              '/guide/management-cookbook/line-breaks-no-onoff.md',
              '/guide/management-cookbook/fuirunoappurdo.md',
              '/guide/management-cookbook/ldap-xie.md',
              '/guide/management-cookbook/active-directory-xie.md',
              '/guide/management-cookbook/google-analytics-no.md',
              '/guide/management-cookbook/slackmattermost-heno.md',
            ]
          }
        ],
      }
    }
  },
}
