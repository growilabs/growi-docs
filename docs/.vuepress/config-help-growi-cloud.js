const Canonical = require('./plugins/canonical');
const localeDataJa = require('./localeDataJa');
const localeDataEn = require('./localeDataEn');


module.exports = {
  base: '/help/',

  locales: {
    '/en/': {
      title: 'Help | In-house wiki Service',
      lang: 'en',
      description: 'GROWI.cloud Help',
    },
    '/ja/': {
      title: 'ヘルプ | ナレッジベースの GROWI.cloud',
      lang: 'ja',
      description: 'GROWI.cloud ヘルプ',
    },
  },

  patterns: [
    '**/*.vue',
    // Markdonw file to be built
    '(ja|en)/index.md',
    '(ja|en)/cloud/**',
    '(ja|en)/guide/**',
    '(ja|en)/admin-guide/(management-cookbook|upgrading)/**',
    // Markdonw files not included in the build: https://github.com/vuejs/vuepress/issues/1558
    '!**/README.md',
    '!(ja|en)/admin-guide/upgrading/(34x|35x|36x|37x|38x).md',
    '!(ja|en)/admin-guide/management-cookbook/active-directory.md', // Excluded due to lack of substance
    // The following should also be included in README.md
    '(ja|en)/admin-guide/management-cookbook/slack-integration/README.md'
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
        // help
        {
          title: 'アプリ設定',
          key: 'application-settings',
          children: [
            '/ja/cloud/attachment.md',
            '/ja/cloud/domain.md',
            '/ja/cloud/growiapp.md',
            '/ja/cloud/organization.md',
            '/ja/cloud/passwordseed.md',
            '/ja/cloud/status.md',
            '/ja/cloud/url.md',
            '/ja/cloud/useraccount.md',
            '/ja/cloud/version.md',
          ]
        },
        {
          title: 'サービス',
          key: 'service',
          children: [
            '/ja/cloud/authentication.md',
            '/ja/cloud/create-account.md',
            '/ja/cloud/autoincrease-memory.md',
            '/ja/cloud/backup.md',
            '/ja/cloud/forcedstart-growi.md',
            '/ja/cloud/hackmd.md',
            '/ja/cloud/login.md',
            '/ja/cloud/cloud-tfa-login.md',
            '/ja/cloud/prevent-publication.md',
            '/ja/cloud/private-wiki.md',
            '/ja/cloud/singlesignon.md',
            '/ja/cloud/ssl.md',
          ]
        },
        {
          title: '契約・支払い',
          key: 'payment-contract',
          children: [
            '/ja/cloud/academic.md',
            '/ja/cloud/enterprise.md',
            '/ja/cloud/freeplan.md',
            '/ja/cloud/freetrial.md',
            '/ja/cloud/option.md',
            '/ja/cloud/payment.md',
            '/ja/cloud/planchange.md',
            '/ja/cloud/price.md',
            '/ja/cloud/private-cloud.md',
            '/ja/cloud/compensation-option.md',
            '/ja/cloud/withdrawal.md',
          ]
        },
        {
          title: 'トラブルシューティング',
          key: 'trouble-shooting',
          children: [
            '/ja/cloud/dataimport-error.md',
            '/ja/cloud/noaccess.md',
            '/ja/cloud/noeditnotice.md',
            '/ja/cloud/recovery-byuser.md',
            '/ja/cloud/multi-factor-authentication.md',
            '/ja/cloud/servicedesk.md',
            '/ja/cloud/trouble.md',
          ],
        },
        {
          title: 'その他',
          key: 'others',
          children: [
            '/ja/cloud/data-migration.md',
            '/ja/cloud/logopost.md',
            '/ja/cloud/request.md',
            '/ja/cloud/resale.md',
            '/ja/cloud/securitycheck.md',
            '/ja/cloud/invoice_system.md',
          ]
        },

        // Docs
        {
          title: '使い方',
          key: 'how-to-use',
          children: [
            '/ja/guide/getting-started/try_growi.md',
            '/ja/guide/features/setup.md',
            '/ja/guide/features/page_layout.md',
            '/ja/guide/getting-started/markdown.md',
            '/ja/guide/features/create_page.md',
            '/ja/guide/features/wip-page.md',
            '/ja/guide/features/page_operation.md',
            '/ja/guide/features/page_deletion_collectively.md',
            '/ja/guide/features/insert_links.md',
            '/ja/guide/features/insert_files.md',
            '/ja/guide/features/delete_files.md',
            '/ja/guide/features/copy_to_clipboard.md',
            '/ja/guide/features/table.md',
            '/ja/guide/features/bookmark.md',
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
            '/ja/guide/features/built-in-editor.md',
            '/ja/guide/features/hackmd.md',
            '/ja/guide/features/in-app-notification.md',
            '/ja/guide/features/slack_integration.md',
            '/ja/guide/features/questionnaire.md',
            '/ja/guide/features/presentation.md',
            '/ja/guide/features/frontmatter.md',
            '/ja/guide/features/lsx.md',
            '/ja/guide/features/embed_html.md',
            '/ja/guide/features/checkbox.md',
            '/ja/guide/features/page_linker.md',
            '/ja/guide/features/footnote.md',
            '/ja/guide/features/forgot_password.md',
          ]
        },
        {
          title: '管理者向け設定',
          key: 'management-settings',
          children: [
            '/ja/admin-guide/management-cookbook/app-settings.md',
            '/ja/admin-guide/management-cookbook/markdown.md',
            '/ja/admin-guide/management-cookbook/security.md',
            '/ja/admin-guide/management-cookbook/user-management.md',
            '/ja/admin-guide/management-cookbook/group.md',
            '/ja/admin-guide/management-cookbook/ldapandkeycloakgroupsync.md',
            '/ja/admin-guide/management-cookbook/ldap.md',
            '/ja/admin-guide/management-cookbook/slack-integration/official-bot-settings.md',
            '/ja/admin-guide/management-cookbook/slack-integration/custom-bot-without-proxy-settings.md',
            '/ja/admin-guide/management-cookbook/slack-integration/custom-bot-with-proxy-settings.md',
            '/ja/admin-guide/management-cookbook/marp.md',
            // '/ja/admin-guide/management-cookbook/active-directory.md',
            '/ja/admin-guide/management-cookbook/google-analytics.md',
            '/ja/admin-guide/management-cookbook/external-notification.md',
            '/ja/admin-guide/management-cookbook/import.md',
            '/ja/admin-guide/management-cookbook/export.md',
            '/ja/admin-guide/management-cookbook/g2g-transfer.md',
            '/ja/admin-guide/management-cookbook/setup-search-system.md',
            '/ja/admin-guide/management-cookbook/audit-log.md',
            '/ja/admin-guide/management-cookbook/plugins.md',
          ]
        },
        {
          'title': 'アップグレードガイド',
          'key': 'upgrade-guide',
          'children': [
            '/ja/admin-guide/upgrading/70x.md',
            '/ja/admin-guide/upgrading/63x.md',
            '/ja/admin-guide/upgrading/62x.md',
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
        // help
        {
          title: 'Application Settings',
          key: 'application-settings',
          children: [
            '/en/cloud/attachment.md',
            '/en/cloud/domain.md',
            '/en/cloud/growiapp.md',
            '/en/cloud/organization.md',
            '/en/cloud/status.md',
            '/en/cloud/url.md',
            '/en/cloud/useraccount.md',
            '/en/cloud/version.md',
          ]
        },
        {
          title: 'Service',
          key: 'service',
          children: [
            '/en/cloud/authentication.md',
            '/en/cloud/create-account.md',
            '/en/cloud/autoincrease-memory.md',
            '/en/cloud/backup.md',
            '/en/cloud/hackmd.md',
            '/en/cloud/login.md',
            '/en/cloud/cloud-tfa-login.md',
            '/en/cloud/prevent-publication.md',
            '/en/cloud/private-wiki.md',
            '/en/cloud/ssl.md',
          ]
        },
        {
          title: 'Payment・Contract',
          key: 'payment-contract',
          children: [
            '/en/cloud/freetrial.md',
            '/en/cloud/option.md',
            '/en/cloud/payment.md',
            '/en/cloud/planchange.md',
            '/en/cloud/price.md',
            '/en/cloud/withdrawal.md',
          ]
        },
        {
          title: 'Trouble Shooting',
          key: 'trouble-shooting',
          children: [
            '/en/cloud/dataimport-error.md',
            '/en/cloud/noaccess.md',
            '/en/cloud/recovery-byuser.md',
            '/en/cloud/trouble.md',
          ],
        },
        {
          title: 'Others',
          key: 'others',
          children: [
            '/en/cloud/request.md',
            '/en/cloud/securitycheck.md',
          ]
        },

        // docs
        {
          title: 'How to use',
          key: 'how-to-use',
          children: [
            '/en/guide/getting-started/try_growi.md',
            '/en/guide/features/setup.md',
            '/en/guide/features/page_layout.md',
            '/en/guide/getting-started/markdown.md',
            '/en/guide/features/create_page.md',
            '/en/guide/features/wip-page.md',
            '/en/guide/features/page_operation.md',
            '/en/guide/features/page_deletion_collectively.md',
            '/en/guide/features/insert_links.md',
            '/en/guide/features/insert_files.md',
            '/en/guide/features/delete_files.md',
            '/en/guide/features/copy_to_clipboard.md',
            '/en/guide/features/table.md',
            '/en/guide/features/bookmark.md',
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
            '/en/guide/features/built-in-editor.md',
            '/en/guide/features/hackmd.md',
            '/en/guide/features/in-app-notification.md',
            '/en/guide/features/slack_integration.md',
            '/en/guide/features/questionnaire.md',
            '/en/guide/features/presentation.md',
            '/ja/guide/features/frontmatter.md',
            '/en/guide/features/lsx.md',
            '/en/guide/features/embed_html.md',
            '/en/guide/features/checkbox.md',
            '/en/guide/features/page_linker.md',
            '/en/guide/features/footnote.md',
            '/en/guide/features/forgot_password.md',
          ]
        },
        {
          title: 'Management settings',
          key: 'management-settings',
          children: [
            '/en/admin-guide/management-cookbook/app-settings.md',
            '/en/admin-guide/management-cookbook/markdown.md',
            '/en/admin-guide/management-cookbook/security.md',
            '/en/admin-guide/management-cookbook/user-management.md',
            '/en/admin-guide/management-cookbook/group.md',
            '/en/admin-guide/management-cookbook/ldapandkeycloakgroupsync.md',
            '/en/admin-guide/management-cookbook/ldap.md',
            '/en/admin-guide/management-cookbook/aws-s3-bucket-setting.md',
            '/en/admin-guide/management-cookbook/slack-integration/official-bot-settings.md',
            '/en/admin-guide/management-cookbook/slack-integration/custom-bot-without-proxy-settings.md',
            '/en/admin-guide/management-cookbook/slack-integration/custom-bot-with-proxy-settings.md',
            '/en/admin-guide/management-cookbook/marp.md',
            // '/en/admin-guide/management-cookbook/active-directory.md',
            '/en/admin-guide/management-cookbook/google-analytics.md',
            '/en/admin-guide/management-cookbook/external-notification.md',
            '/en/admin-guide/management-cookbook/import.md',
            '/en/admin-guide/management-cookbook/export.md',
            '/en/admin-guide/management-cookbook/setup-search-system.md',
            '/en/admin-guide/management-cookbook/audit-log.md',
            '/en/admin-guide/management-cookbook/plugins.md',
          ]
        },
        {
          'title': 'Uupgrade guide',
          'key': 'upgrade-guide',
          'children': [
            '/en/admin-guide/upgrading/70x.md',
            '/en/admin-guide/upgrading/63x.md',
            '/en/admin-guide/upgrading/62x.md',
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
    ['vuepress-plugin-medium-zoom', {
      selector: '.article img',
      delay: 1000,
      options: {
        margin: 24,
        scrollOffset: 0,
      }
    }],
    ['container', {
      type: 'tip',
      defaultTitle: {
        '/ja/': 'TIP',
        '/en/': 'TIP'
      }
    }],
    ['container', {
      type: 'warning',
      defaultTitle: {
        '/ja/': 'WARNING',
        '/en/': 'WARNING'
      }
    }],
    ['container', {
      type: 'danger',
      defaultTitle: {
        '/ja/': 'DANGER',
        '/en/': 'DANGER'
      }
    }],
    ['@vuepress/html-redirect', {
      countdown: 0
    }],
  ],

  markdown: {
    extendMarkdown: (md) => {
      md.use(require('markdown-it-task-lists'));
    },
  },

  head: [
    ['script', {}, `
      (function(w,d,s,l,i){
        w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MMNSMCF');
    `],
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v6.2.0/css/all.css'}],
    ['link', { rel: 'icon', href: '/assets/help-growi-cloud/favicon.ico' }],
  ],
};
