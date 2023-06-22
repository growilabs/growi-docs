const Canonical = require('./plugins/canonical');
const localeDataJa = require('./localeDataJa');
const localeDataEn = require('./localeDataEn');


module.exports = {
  title: 'GROWI.Cloud Help',
  base: '/help',

  locales: {
    '/en/': {
      lang: 'en',
      description: 'GROWI.cloud Help',
    },
    '/ja/': {
      lang: 'ja',
      description: 'GROWI.cloud ヘルプ',
    },
  },

  patterns: [
    '**/*.vue',
    // Markdown of build target
    '(ja|en)/index.md',
    '(ja|en)/cloud/**',
    '(ja|en)/guide/**',
    '(ja|en)/admin-guide/(management-cookbook|upgrading)/**',
    // Folders to ignore at build: https://github.com/vuejs/vuepress/issues/1558
    '!**/README.md',
    '!(ja|en)/admin-guide/upgrading/(34x|35x|36x||37x|38x).md'
  ],

  themeConfig: {
    context: 'help-growi-cloud',
    repo: '',
    editLinks: false,
    docsDir: 'docs',
    editLinkText: '',
    lastUpdated: false,
    locales: {
      '/ja/': localeDataJa,
      '/en/': localeDataEn
    },
    links: {
      'ja': [
        {
          title: 'チュートリアル',
          key: 'tutorial',
          children: [
            '/ja/guide/getting-started/five_minutes.md',
            '/ja/guide/getting-started/markdown.md',
            '/ja/guide/tutorial/create_page.md',
            '/ja/guide/tutorial/duplicate_page.md',
            '/ja/guide/tutorial/delete_page.md',
          ],
        },
        {
          title: 'Tips',
          key: 'tips',
          children: [
            '/ja/guide/tips/hierarchical.md',
            '/ja/guide/tips/include_html.md',
            '/ja/guide/tips/checkbox.md',
            '/ja/guide/tips/page_linker.md',
            '/ja/guide/tips/footnote.md',
          ],
        },
        {
          title: '機能紹介',
          key: 'feature-introduction',
          children: [
            '/ja/guide/features/page_layout.md',
            '/ja/guide/features/copy_to_clipboard.md',
            '/ja/guide/features/table.md',
            '/ja/guide/features/bookmark.md',
            '/ja/guide/features/page_operation.md',
            '/ja/guide/features/page_deletion_collectively.md',
            '/ja/guide/features/emoji.md',
            '/ja/guide/features/history.md',
            '/ja/guide/features/authority.md',
            '/ja/guide/features/bootstrap.md',
            '/ja/guide/features/uml_diagrams.md',
            '/ja/guide/features/drawio.md',
            '/ja/guide/features/mermaid.md',
            '/ja/guide/features/search.md',
            '/ja/guide/features/tag.md',
            '/ja/guide/features/template.md',
            '/ja/guide/features/hackmd.md',
            '/ja/guide/features/in-app-notification.md',
            '/ja/guide/features/slack_integration.md',
            '/ja/guide/features/file_upload',
            '/ja/guide/features/questionnaire.md',
          ]
        },
        {
          title: 'GROWI 管理者のクックブック',
          key: 'management-cookbook',
          children: [
            '/ja/admin-guide/management-cookbook/app-settings.md',
            '/ja/admin-guide/management-cookbook/line-breaks.md',
            '/ja/admin-guide/management-cookbook/security.md',
            '/ja/admin-guide/management-cookbook/user-management.md',
            '/ja/admin-guide/management-cookbook/group.md',
            '/ja/admin-guide/management-cookbook/ldap.md',
            '/ja/admin-guide/management-cookbook/slack-integration/official-bot-settings.md',
            '/ja/admin-guide/management-cookbook/slack-integration/custom-bot-without-proxy-settings.md',
            '/ja/admin-guide/management-cookbook/slack-integration/custom-bot-with-proxy-settings.md',
            '/ja/admin-guide/management-cookbook/active-directory.md',
            '/ja/admin-guide/management-cookbook/google-analytics.md',
            '/ja/admin-guide/management-cookbook/external-notification.md',
            '/ja/admin-guide/management-cookbook/import.md',
            '/ja/admin-guide/management-cookbook/export.md',
            '/ja/admin-guide/management-cookbook/g2g-transfer.md',
            '/ja/admin-guide/management-cookbook/setup-search-system.md',
            '/ja/admin-guide/management-cookbook/audit-log.md',
          ]
        },
        {
          'title': 'アップグレード',
          'key': 'upgrading',
          'children': [
            '/ja/admin-guide/upgrading/61x.md',
            '/ja/admin-guide/upgrading/60x.md',
            '/ja/admin-guide/upgrading/51x.md',
            '/ja/admin-guide/upgrading/50x.md',
            '/ja/admin-guide/upgrading/45x.md',
            '/ja/admin-guide/upgrading/44x.md',
            '/ja/admin-guide/upgrading/43x.md',
            '/ja/admin-guide/upgrading/42x.md',
            '/ja/admin-guide/upgrading/41x.md',
            '/ja/admin-guide/upgrading/40x.md',
          ]
        }
      ],
      'en': [
        {
          title: 'Tutorial',
          key: 'tutorial',
          children: [
            '/en/guide/getting-started/five_minutes.md',
            '/en/guide/getting-started/markdown.md',
            '/en/guide/tutorial/create_page.md',
            '/en/guide/tutorial/duplicate_page.md',
            '/en/guide/tutorial/delete_page.md',
          ],
        },
        {
          title: 'Tips',
          key: 'tips',
          children: [
            '/en/guide/tips/hierarchical.md',
            '/en/guide/tips/include_html.md',
            '/en/guide/tips/checkbox.md',
            '/en/guide/tips/page_linker.md',
            '/en/guide/tips/footnote.md',
          ],
        },
        {
          title: 'Feature introduction',
          key: 'feature-introduction',
          children: [
            '/en/guide/features/page_layout.md',
            '/en/guide/features/copy_to_clipboard.md',
            '/en/guide/features/table.md',
            '/en/guide/features/bookmark.md',
            '/en/guide/features/page_operation.md',
            '/en/guide/features/page_deletion_collectively.md',
            '/en/guide/features/emoji.md',
            '/en/guide/features/history.md',
            '/en/guide/features/authority.md',
            '/en/guide/features/bootstrap.md',
            '/en/guide/features/uml_diagrams.md',
            '/en/guide/features/drawio.md',
            '/en/guide/features/mermaid.md',
            '/en/guide/features/search.md',
            '/en/guide/features/tag.md',
            '/en/guide/features/template.md',
            '/en/guide/features/hackmd.md',
            '/en/guide/features/in-app-notification.md',
            '/en/guide/features/slack_integration.md',
            '/en/guide/features/file_upload',
            '/en/guide/features/questionnaire.md',
          ]
        },
        {
          title: 'Management cookbook',
          key: 'management-cookbook',
          children: [
            '/en/admin-guide/management-cookbook/app-settings.md',
            '/en/admin-guide/management-cookbook/line-breaks.md',
            '/en/admin-guide/management-cookbook/security.md',
            '/en/admin-guide/management-cookbook/user-management.md',
            '/en/admin-guide/management-cookbook/group.md',
            '/en/admin-guide/management-cookbook/aws-s3-bucket-setting.md',
            '/en/admin-guide/management-cookbook/ldap.md',
            '/en/admin-guide/management-cookbook/slack-integration/official-bot-settings.md',
            '/en/admin-guide/management-cookbook/slack-integration/custom-bot-without-proxy-settings.md',
            '/en/admin-guide/management-cookbook/slack-integration/custom-bot-with-proxy-settings.md',
            '/en/admin-guide/management-cookbook/active-directory.md',
            '/en/admin-guide/management-cookbook/google-analytics.md',
            '/en/admin-guide/management-cookbook/external-notification.md',
            '/en/admin-guide/management-cookbook/import.md',
            '/en/admin-guide/management-cookbook/export.md',
            '/en/admin-guide/management-cookbook/setup-search-system.md',
            '/en/admin-guide/management-cookbook/audit-log.md',
          ]
        },
        {
          'title': 'Upgrading',
          'key': 'upgrading',
          'children': [
            '/en/admin-guide/upgrading/61x.md',
            '/en/admin-guide/upgrading/60x.md',
            '/en/admin-guide/upgrading/51x.md',
            '/en/admin-guide/upgrading/50x.md',
            '/en/admin-guide/upgrading/45x.md',
            '/en/admin-guide/upgrading/44x.md',
            '/en/admin-guide/upgrading/43x.md',
            '/en/admin-guide/upgrading/42x.md',
            '/en/admin-guide/upgrading/41x.md',
            '/en/admin-guide/upgrading/40x.md',
          ]
        }
      ]
    },
  },

  plugins: [
    [Canonical , {
      canonicalBase: 'https://docs.growi.org',
      excludePathPatterns: ['(ja|en)\/$', '(ja|en)\/cloud\/.*'],
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  head: [
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v6.2.0/css/all.css'}],
    ['script', {}, `
      (function(w,d,s,l,i){
        w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MMNSMCF');
    `]
  ],
};
