module.exports = {
  title: 'GROWI Docs',
  serviceWorker: true,
  plugins: [ 'tabs' ],
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
          { text: 'ユーザーズガイド', link: '/ja/guide/' },
          { text: '開発ガイド', link: '/ja/dev/architecture.md' },
          { text: '(TBD) API', link: '/api/' },
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
        sidebar: {
          '/ja/guide/': [
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
                '/ja/guide/admin-cookbook/logging.md',
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
              title: 'その他のドキュメント',
              collapsable: false,
              children: [
                ['/ja/dev/', '開発ガイド'],
                ['/api/', '(TBD) API リファレンス (英語)'],
              ]
            },
          ],
          '/ja/dev/': [
            '/ja/dev/',
            {
              title: '開発スタートアップ',
              collapsable: false,
              children: [
                '/ja/dev/startup/dev-env.md',
                '/ja/dev/startup/launch.md',
              ],
            },
            {
              title: 'Tips',
              collapsable: false,
              children: [
                '/ja/dev/tips/env-vars.md',
                '/ja/dev/tips/logger.md',
                '/ja/dev/tips/debug-with-vscode.md',
              ],
            },
            {
              title: 'プラグイン開発',
              collapsable: false,
              children: [
                '/ja/dev/plugin/',
              ],
            },
            {
              title: 'その他のドキュメント',
              collapsable: false,
              children: [
                ['/ja/guide/', 'ユーザーズガイド'],
                ['/api/', '(TBD) API リファレンス (英語)'],
              ]
            },
          ],
          '/api/': [
            ['/api/', 'Introduction'],
            '/api/v3.md',
            '/api/v1.md',
          ]
        }
      }
    },
  },
}
