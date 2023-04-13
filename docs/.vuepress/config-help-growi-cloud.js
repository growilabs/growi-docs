const Canonical = require('./plugins/canonical');

module.exports = {
  title: 'help-growi-cloud',
  base: '/help',

  // Markdown of build target
  patterns: [
    '**/*.md',
    '**/*.vue',
    // Folders to ignore at build: https://github.com/vuejs/vuepress/issues/1558
    '!(ja|en)/admin-guide/(admin-cookbook|downgrading|getting-started|migration-guide)/**',
    '!(ja|en)/api/**',
    '!(ja|en)/dev/**',
  ],

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: 'docs',
    editLinkText: '',
    lastUpdated: false,
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
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.15.4/css/all.css'}],
  ],
};
