const growiCommonsConfig = require('../en/api/commons/config');

module.exports = {
  title: 'GROWI Docs',
  serviceWorker: true,
  plugins: [
    'tabs',
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.content img',
        delay: 1000,
        options: {
          margin: 24,
          scrollOffset: 0,
        },
      },
    ],
    [
      'vuepress-plugin-redirect',
      {
        // provide i18n redirection
        // it will automatically redirect `/foo/bar/` to `/:locale/foo/bar/` if exists
        locales: true
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-55480073-15' // UA-00000000-0
      }
    ],
    [
      'sitemap',
      {
        'hostname': 'https://docs.growi.org'
      }
    ]
  ],
  markdown: {
    toc: { includeLevel: [2] },
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'));
      md.use(require('markdown-it-footnote'));
    },
  },
  locales: {
    '/en/': {
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
      '/en/': {
        label: 'English',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Users Guide', link: '/en/guide/' },
          { text: 'Admin Guide', link: '/en/admin-guide/' },
          { text: 'Developers Guide', link: '/en/dev/' },
          { text: 'API Reference', link: '/en/api/' },
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
          '/en/guide/': [
            '/en/guide/',
            {
              title: 'Getting started',
              collapsable: false,
              children: [
                '/en/guide/getting-started/five_minutes.md',
                '/en/guide/getting-started/markdown.md',
              ]
            },
            {
              title: 'Features',
              collapsable: false,
              children: [
                '/en/guide/features/page_layout.md',
                '/en/guide/features/copy_to_clipboard.md',
                '/en/guide/features/table.md',
                '/en/guide/features/bookmark.md',
                '/en/guide/features/page_operation.md',
                '/en/guide/features/emoji.md',
                '/en/guide/features/history.md',
                '/en/guide/features/blockdiag.md',
                '/en/guide/features/bootstrap.md',
                '/en/guide/features/uml_diagrams.md',
                '/en/guide/features/template.md'
              ]
            },
            {
              title: 'Tips',
              collapsable: false,
              children: [
                '/en/guide/tips/hierarchical.md'
              ]
            },
            {
              title: 'Other Documents',
              collapsable: false,
              children: [
                ['/en/admin-guide/', 'Admin Guide'],
                ['/en/dev/', 'Developers Guide'],
                ['/en/api/', 'API Reference'],
              ]
            },
          ],
          '/en/admin-guide/': [
            '/en/admin-guide/',
            {
              title: 'Install',
              collapsable: false,
              children: [
                '/en/admin-guide/getting-started/docker-compose.md',
                '/en/admin-guide/getting-started/heroku.md',
                '/en/admin-guide/getting-started/ubuntu-server.md',
                '/en/admin-guide/getting-started/centos.md'
              ]
            },
            {
              title: 'Upgrading',
              collapsable: false,
              children: [
                '/en/admin-guide/upgrading/35x.md',
                '/en/admin-guide/upgrading/34x.md',
              ]
            },
            {
              title: 'Migration form other system',
              collapsable: true,
              children: [
                '/en/admin-guide/migration-guide/from-crowi-plus-onpremise.md',
                '/en/admin-guide/migration-guide/from-crowi-plus-docker-compose.md',
                '/en/admin-guide/migration-guide/from-crowi-onpremise.md',
                '/en/admin-guide/migration-guide/from-bakudankun-crowi.md',
              ]
            },
            {
              title: 'System Admin Cookbook',
              collapsable: false,
              children: [
                '/en/admin-guide/admin-cookbook/logging.md',
                '/en/admin-guide/admin-cookbook/launch-with-systemd.md',
                '/en/admin-guide/admin-cookbook/multi-app.md',
                '/en/admin-guide/admin-cookbook/lets-encrypt.md',
                '/en/admin-guide/admin-cookbook/mongodb-backup.md',
                '/en/admin-guide/admin-cookbook/mongodb-backup-regular.md',
                '/en/admin-guide/admin-cookbook/integrate-with-hackmd.md',
              ]
            },
            {
              title: 'GROWI App Admin Cookbook',
              collapsable: false,
              children: [
                '/en/admin-guide/management-cookbook/line-breaks.md',
                '/en/admin-guide/management-cookbook/attachment.md',
                '/en/admin-guide/management-cookbook/ldap.md',
                '/en/admin-guide/management-cookbook/active-directory.md',
                '/en/admin-guide/management-cookbook/google-analytics.md',
                '/en/admin-guide/management-cookbook/slack.md',
              ]
            },
          ],
          '/en/dev/': [
            '/en/dev/',
            {
              title: 'Getting Started',
              collapsable: false,
              children: [
                '/en/dev/startup/dev-env.md',
                '/en/dev/startup/launch.md',
              ],
            },
            {
              title: 'Tips',
              collapsable: false,
              children: [
                '/en/dev/tips/env-vars.md',
                '/en/dev/tips/logger.md',
                '/en/dev/tips/debug-with-vscode.md',
              ],
            },
            {
              title: 'Plugin',
              collapsable: false,
              children: [
                '/en/dev/plugin/architecture.md',
                '/en/dev/plugin/quick-start.md',
                '/en/dev/plugin/publish.md',
                '/en/dev/plugin/walk-through-boilerplate.md',
                '/en/dev/plugin/metadata.md',
                '/en/dev/plugin/custom-tag.md',
                '/en/dev/plugin/custom-route.md',
              ],
            },
            {
              title: 'Other Documents',
              collapsable: false,
              children: [
                ['/en/guide/', 'Users Guide'],
                ['/en/api/', 'API Reference'],
              ]
            },
          ],
          '/en/api/': [
            ['/en/api/', 'Introduction'],
            '/en/api/commons/',
            '/en/api/rest-v3.md',
            '/en/api/rest-v1.md',
          ]
        }),
      },
      '/ja/': {
        label: '日本語',
        selectText: '言語',
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'ユーザーズガイド', link: '/ja/guide/' },
          { text: '管理者ガイド', link: '/ja/admin-guide/' },
          { text: '開発ガイド', link: '/ja/dev/' },
          { text: 'API リファレンス (英語)', link: '/en/api/' },
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
              title: 'GROWI を始めよう',
              collapsable: false,
              children: [
                '/ja/guide/getting-started/five_minutes.md',
                '/ja/guide/getting-started/markdown.md',
              ]
            },
            {
              title: '機能紹介',
              collapsable: false,
              children: [
                '/ja/guide/features/page_layout.md',
                '/ja/guide/features/copy_to_clipboard.md',
                '/ja/guide/features/table.md',
                '/ja/guide/features/bookmark.md',
                '/ja/guide/features/page_operation.md',
                '/ja/guide/features/emoji.md',
                '/ja/guide/features/history.md',
                '/ja/guide/features/blockdiag.md',
                '/ja/guide/features/bootstrap.md',
                '/ja/guide/features/uml_diagrams.md',
                '/ja/guide/features/template.md'
              ]
            },
            {
              title: 'Tips (活用例)',
              collapsable: false,
              children: [
                '/ja/guide/tips/hierarchical.md'
              ]
            },
            {
              title: 'その他のドキュメント',
              collapsable: false,
              children: [
                ['/ja/admin-guide/', '管理者ガイド'],
                ['/ja/dev/', '開発ガイド'],
                ['/en/api/', 'API リファレンス (英語)'],
              ]
            },
          ],
          '/ja/admin-guide/': [
            '/ja/admin-guide/',
            {
              title: 'インストール',
              collapsable: false,
              children: [
                '/ja/admin-guide/getting-started/docker-compose.md',
                '/ja/admin-guide/getting-started/heroku.md',
                '/ja/admin-guide/getting-started/ubuntu-server.md',
                '/ja/admin-guide/getting-started/centos.md'
              ]
            },
            {
              title: 'アップグレード',
              collapsable: false,
              children: [
                '/ja/admin-guide/upgrading/35x.md',
                '/ja/admin-guide/upgrading/34x.md',
              ]
            },
            {
              title: '他システムからの移行',
              collapsable: true,
              children: [
                '/ja/admin-guide/migration-guide/from-crowi-plus-onpremise.md',
                '/ja/admin-guide/migration-guide/from-crowi-plus-docker-compose.md',
                '/ja/admin-guide/migration-guide/from-crowi-onpremise.md',
                '/ja/admin-guide/migration-guide/from-bakudankun-crowi.md',
              ]
            },
            {
              title: 'システム管理者のクックブック',
              collapsable: false,
              children: [
                '/ja/admin-guide/admin-cookbook/logging.md',
                '/ja/admin-guide/admin-cookbook/launch-with-systemd.md',
                '/ja/admin-guide/admin-cookbook/multi-app.md',
                '/ja/admin-guide/admin-cookbook/lets-encrypt.md',
                '/ja/admin-guide/admin-cookbook/mongodb-backup.md',
                '/ja/admin-guide/admin-cookbook/mongodb-backup-regular.md',
                '/ja/admin-guide/admin-cookbook/integrate-with-hackmd.md',
              ]
            },
            {
              title: 'GROWI 管理者のクックブック',
              collapsable: false,
              children: [
                '/ja/admin-guide/management-cookbook/line-breaks.md',
                '/ja/admin-guide/management-cookbook/attachment.md',
                '/ja/admin-guide/management-cookbook/ldap.md',
                '/ja/admin-guide/management-cookbook/active-directory.md',
                '/ja/admin-guide/management-cookbook/google-analytics.md',
                '/ja/admin-guide/management-cookbook/slack.md',
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
                '/ja/dev/plugin/publish.md',
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
                ['/en/api/', 'API リファレンス (英語)'],
              ]
            },
          ],
          '/en/api/': [
            ['/en/api/', 'Introduction'],
            '/en/api/commons/',
            '/en/api/rest-v3.md',
            '/en/api/rest-v1.md',
          ]
        }
      },
    },
  },
}
