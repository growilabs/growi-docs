const growiCommonsConfig = require('../api/commons/config');

module.exports = {
  title: 'GROWI Docs',
  serviceWorker: true,
  plugins: [ 'tabs' ],
  markdown: {
    toc: { includeLevel: [2] },
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    },
  },
  locales: {
    '/': {
      lang: 'en-US',
      description: 'GROWI Documentation Site',
    },
    '/ja/': {
      lang: 'ja',
      description: 'GROWI ドキュメンテーション',
    },
  },
  themeConfig: {
    repo: 'weseek/growi-docs',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    locales: {
      '/': {
        label: 'English',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Users Guide', link: '/guide/' },
          { text: 'Developers Guide', link: '/dev/' },
          { text: 'API Reference', link: '/api/' },
          { text: 'Release Note', link: 'https://github.com/weseek/growi/releases' },
          {
            text: 'External Sites',
            items: [
              { text: 'GROWI.org', link: 'https://growi.org' },
              { text: 'GROWI.cloud', link: 'https://growi.cloud' },
              { text: 'Blog', link: 'https://weseek.co.jp/tags/GROWI/' },
            ]
          }
        ],
        sidebar: Object.assign(growiCommonsConfig.sidebarTree('Overview'), {
          '/guide/': [
            '/guide/',
            {
              title: 'Install',
              collapsable: false,
              children: [
                '/guide/getting-started/docker-compose.md',
                '/guide/getting-started/heroku.md',
                '/guide/getting-started/ubuntu-server.md',
                '/guide/getting-started/centos.md',
                '/guide/getting-started/raspberry-pi.md',
              ]
            },
            {
              title: 'Upgrading',
              collapsable: false,
              children: [
                '/guide/upgrading/35x.md',
                '/guide/upgrading/34x.md',
              ]
            },
            {
              title: 'Migration form other system',
              collapsable: true,
              children: [
                '/guide/migration-guide/from-crowi-plus-onpremise.md',
                '/guide/migration-guide/from-crowi-plus-docker-compose.md',
                '/guide/migration-guide/from-crowi-onpremise.md',
                '/guide/migration-guide/from-bakudankun-crowi.md',
              ]
            },
            {
              title: 'System Admin Cookbook',
              collapsable: false,
              children: [
                '/guide/admin-cookbook/logging.md',
                '/guide/admin-cookbook/launch-with-systemd.md',
                '/guide/admin-cookbook/multi-app.md',
                '/guide/admin-cookbook/lets-encrypt.md',
                '/guide/admin-cookbook/mongodb-backup.md',
                '/guide/admin-cookbook/mongodb-backup-regular.md',
                '/guide/admin-cookbook/integrate-with-hackmd.md',
              ]
            },
            {
              title: 'GROWI App Admin Cookbook',
              collapsable: false,
              children: [
                '/guide/management-cookbook/line-breaks.md',
                '/guide/management-cookbook/attachment.md',
                '/guide/management-cookbook/ldap.md',
                '/guide/management-cookbook/active-directory.md',
                '/guide/management-cookbook/google-analytics.md',
                '/guide/management-cookbook/slack.md',
              ]
            },
            {
              title: 'Other Documents',
              collapsable: false,
              children: [
                ['/dev/', 'Developers Guide'],
                ['/api/', 'API Reference'],
              ]
            },
          ],
          '/dev/': [
            '/dev/',
            {
              title: 'Getting Started',
              collapsable: false,
              children: [
                '/dev/startup/dev-env.md',
                '/dev/startup/launch.md',
              ],
            },
            {
              title: 'Tips',
              collapsable: false,
              children: [
                '/dev/tips/env-vars.md',
                '/dev/tips/logger.md',
                '/dev/tips/debug-with-vscode.md',
              ],
            },
            {
              title: 'Plugin',
              collapsable: false,
              children: [
                '/dev/plugin/architecture.md',
                '/dev/plugin/quick-start.md',
                '/dev/plugin/walk-through-boilerplate.md',
                '/dev/plugin/metadata.md',
                '/dev/plugin/custom-tag.md',
                '/dev/plugin/custom-route.md',
              ],
            },
            {
              title: 'Other Documents',
              collapsable: false,
              children: [
                ['/guide/', 'Users Guide'],
                ['/api/', 'API Reference'],
              ]
            },
          ],
          '/api/': [
            ['/api/', 'Introduction'],
            '/api/commons/',
            '/api/rest-v3.md',
            '/api/rest-v1.md',
          ]
        }),
      },
      '/ja/': {
        label: '日本語',
        selectText: '言語',
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'ユーザーズガイド', link: '/ja/guide/' },
          { text: '開発ガイド', link: '/ja/dev/' },
          { text: 'API リファレンス (英語)', link: '/api/' },
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
              title: 'アップグレード',
              collapsable: false,
              children: [
                '/ja/guide/upgrading/35x.md',
                '/ja/guide/upgrading/34x.md',
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
                ['/api/', 'API リファレンス (英語)'],
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
              title: 'プラグイン',
              collapsable: false,
              children: [
                '/ja/dev/plugin/architecture.md',
                '/ja/dev/plugin/quick-start.md',
                '/ja/dev/plugin/walk-through-boilerplate.md',
                '/ja/dev/plugin/metadata.md',
                '/ja/dev/plugin/custom-tag.md',
                '/ja/dev/plugin/custom-route.md',
              ],
            },
            {
              title: 'その他のドキュメント',
              collapsable: false,
              children: [
                ['/ja/guide/', 'ユーザーズガイド'],
                ['/api/', 'API リファレンス (英語)'],
              ]
            },
          ],
        }
      },
    },
  },
}
