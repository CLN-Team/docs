import { defineConfig } from 'vitepress'
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'

// RSS 订阅 https://github.com/ATQQ/sugar-blog/blob/master/packages/vitepress-plugin-rss/README-zh.md
const baseUrl = 'https://docs.adclosenn.top'
const RSS: RSSOptions = {
  title: 'CLN 文档',
  baseUrl,
  copyright: 'Copyright (c) 2025-present Ad_closeNN.',
  language: 'zh-cn',
  author: {
    name: 'Ad_closeNN',
    email: 'admin@adclosenn.top',
    link: 'https://adclosenn.top'
  },
  icon: false, // 控制 Nav bar 中的 RSS 图标是否显示
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CLN Docs",
  base: '/',
  description: "CLN 文档",
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  appearance: true,
  sitemap: { hostname: 'https://docs.adclosenn.top' },
  vite: {
    plugins: [RssPlugin(RSS)],
  },
  head: [
    [
      'script',
      { defer: '', src: 'https://umami.adclosenn.top/script.js', 'data-website-id': '6a52482c-d92d-42d2-93bf-60163e11b9f2'}
    ],
    [
      'link',
      { rel: 'icon', href: 'https://static.adclosenn.top/icon/favicon/1761965594.jpg'}
    ]
  ],
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true,
      
    },
    lineNumbers: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { light: '/static/ic_fluent_code_24_filled_dark.svg', dark: '/static/ic_fluent_code_24_filled_light.svg', alt: 'Microsoft Fluent Icons "Code"'},
    siteTitle: 'CLN Services Docs', // Logo 那里
    externalLinkIcon: true,
    nav: [
      { text: '主页', link: '/' },
      { 
        text: '类别',
        items: [
          { "text": '类别', link: '/docs/'},
          { "text": '----------', link: '#' },
          { "text": 'CLN API', link: '/docs/cln-api/' },
          { "text": 'Ad_closeNN 的小站', link: '/docs/blog/' },
          { "text": 'CLN Services 状态', link: '/docs/status/' },
          { "text": 'CLN Services 状态 (旧版)', link: '/docs/status-old/' },
        ]
      }
    ],

    sidebar: {
      
      '/docs': [
        { text: '返回主页', link: '/' },
        { text: '返回类别', link: '/docs/' },
        {
          text: '类别',
          items: [
            { text: 'CLN API',
              collapsed: true,
              items: [
                { text: 'CLN API - 概述', link: '/docs/cln-api/' },
              ]
            },
            { text: 'Ad_closeNN 的小站',
              collapsed: true,
              items:[
                { text: '博客 - 概述', link: '/docs/blog/'}
              ]
            },
            { text: 'CLN Services 状态',
              collapsed: true,
              items:[
                { text: 'CLN 状态 - 概述', link: '/docs/status/'},
                { text: 'CLN 状态 (旧版) - 概述', link: '/docs/status-old/'}
              ]
            },
          ]
        }
      ]
    },

    socialLinks: [
      {
        icon: 'bluesky', link: 'https://bsky.app/profile/adclosenn.top',
        ariaLabel: 'Ad_closeNN 的 BlueSky 主页'
      },
      {
        icon: 'gmail', link: 'mailto:admin@adclosenn.top',
        ariaLabel: '通过邮件联系 Ad_closeNN'
      },
      {
        icon: 'discord', link: 'https://discord.com/users/1068060784300658688',
        ariaLabel: '通过 Discord 联系 Ad_closeNN'
      },
      {
        icon: 'github', link: 'https://github.com/CLN-Team/docs',
        ariaLabel: 'CLN 文档 GitHub 仓库地址'
      },

    ],

    // 汉化
    darkModeSwitchTitle: '切换到深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchLabel: '外观',
    docFooter: {
      prev: '向前翻',
      next: '向后翻'
    },

    editLink: {
      pattern: 'https://github.com/CLN-Team/docs/edit/main/:path',
      text: '在 GitHub 上编辑此文件'
    },

    search: {
      /*
      provider: 'algolia',
      options: {
        appId: '86ULCY4WRJ',
        apiKey: '5fec8fa3b31c867578cd00d189ef136f',
        askAi: { assistantId: 'rKeArHN3QqlG' },
        indexName: 'cln_docs_pages',
            placeholder: '搜索文档',
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                searchBox: {
                  clearButtonTitle: '清除查询条件',
                  clearButtonAriaLabel: '清除查询条件',
                  closeButtonText: '关闭',
                  closeButtonAriaLabel: '关闭',
                  placeholderText: '搜索文档',
                  placeholderTextAskAi: '向 AI 提问：',
                  placeholderTextAskAiStreaming: '回答中...',
                  searchInputLabel: '搜索',
                  backToKeywordSearchButtonText: '返回关键字搜索',
                  backToKeywordSearchButtonAriaLabel: '返回关键字搜索'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除',
                  recentConversationsTitle: '最近的对话',
                  removeRecentConversationButtonTitle: '从历史记录中删除对话'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '请检查网络连接'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                },
                resultsScreen: { askAiPlaceholder: '向 AI 提问： ' },
                askAiScreen: {
                  disclaimerText: '答案由 AI 生成，可能不准确，请自行验证。',
                  relatedSourcesText: '相关来源',
                  thinkingText: '思考中...',
                  copyButtonText: '复制',
                  copyButtonCopiedText: '已复制！',
                  copyButtonTitle: '复制',
                  likeButtonTitle: '赞',
                  dislikeButtonTitle: '踩',
                  thanksForFeedbackText: '感谢你的反馈！',
                  preToolCallText: '搜索中...',
                  duringToolCallText: '搜索 ',
                  afterToolCallText: '已搜索'
                },
                footer: {
                  selectText: '选择',
                  submitQuestionText: '提交问题',
                  selectKeyAriaLabel: 'Enter 键',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '向上箭头',
                  navigateDownKeyAriaLabel: '向下箭头',
                  closeText: '关闭',
                  backToSearchText: '返回搜索',
                  closeKeyAriaLabel: 'Esc 键',
                  poweredByText: '搜索提供者'
                }
              }
            }
          }
      },
    */
    provider: 'local',
    options: {
        translations: {
         button: {
           buttonText: '搜索文档',
           buttonAriaLabel: '搜索文档'
         },
         modal: {
           noResultsText: '无法找到相关结果',
           resetButtonTitle: '清除查询条件',
           footer: {
             selectText: '选择',
             navigateText: '切换',
             closeText: '关闭',
           }
         }
        } 
    },
  },
    footer: {
      message: '<a href="https://docs.adclosenn.top/sitemap.xml" target="_blank">Sitemap</a> &nbsp;|&nbsp; <a href="https://docs.adclosenn.top/feed.rss" target="_blank">RSS Feed</a><br>CLN Docs <a href="https://github.com/CLN-Team/docs" target="_blank">Open Source</a> on GitHub.',
      copyright: 'Copyright <span style="font-family:MiSans VF">©</span> 2025-present <a href="https://github.com/Ad-closeNN" target="_blank">Ad-closeNN</a>.'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
