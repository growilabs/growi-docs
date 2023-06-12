const Canonical = require('./plugins/canonical');

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
    links: {
      '/help/ja': [
        {
          title: 'チュートリアル',
          key: 'tutorial',
          children: [
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
            '/ja/guide/features/blockdiag.md',
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
      ],
    }
  },

  plugins: [
    [Canonical , {
      canonicalBase: 'https://docs.growi.org',
      excludePathPatterns: ['(ja|en)\/cloud\/.*'],
    }],
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  head: [
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v6.2.0/css/all.css'}],
  ],
};
