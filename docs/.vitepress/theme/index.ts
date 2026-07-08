import type { EnhanceAppContext } from 'vitepress'

import DefaultTheme from 'vitepress/theme'

import Playground from '../components/Playground/components/Playground.vue'

import './base-styles.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {

    app.component('Playground', Playground)

  }
}