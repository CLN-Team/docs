// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { inBrowser } from "vitepress";
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import './css/nprogress.css' // 进度条样式
import './css/custom-font.css' // 自定义字体
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router }) {
    if (inBrowser) {
      NProgress.configure({ showSpinner: false })
      router.onBeforeRouteChange = () => {
        NProgress.start() // 开始进度条
      }
      router.onAfterRouteChange = () => {
         NProgress.done() // 停止进度条
      }
    }
  }
  
} satisfies Theme
