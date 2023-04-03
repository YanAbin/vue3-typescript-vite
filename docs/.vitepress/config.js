export default {
  themeConfig: {
    siteTitle: 'vitepress',
    nav: [
      { text: '指南', link: '/guild/' },
      { text: '组件', link: '/components/button/' }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/YanAbin/vue3-typescript-vite'
      }
    ],
    sidebar: {
      'guild/': [
        {
          text: '基础',
          item: [
            {
              text: '安装',
              link: '/guild/installation'
            },
            {
              text: '快速开始',
              link: '/guild/quickstart'
            }
          ]
        }
      ],
      'components/': [
        {
          text: '基础组件',
          items: [
            {
              text: 'Button',
              link: '/components/button/'
            },
            {
              text: '表格',
              link: '/components/button'
            }
          ]
        }
      ]
    }
  }
};
