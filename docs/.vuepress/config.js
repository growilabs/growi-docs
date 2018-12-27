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
            title: 'Getting Started',
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
            title: 'Group 2',
            children: [ /* ... */ ]
          }
        ],
      }
    }
  },
}
