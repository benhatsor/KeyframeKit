import type { EnhanceAppContext } from 'vitepress'

import DefaultTheme from 'vitepress/theme'

import Playground from '../components/Playground/Playground.vue'

import './base-styles.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {

    /* if (typeof window !== 'undefined') {
      window.MonacoEnvironment = {
        getWorkerUrl(_moduleId: string, label: string): string {
          const base = '/monacoeditorwork/'
          
          if (label === 'typescript' || label === 'javascript') {
            return `${base}ts.worker.bundle.js`
          }
          if (label === 'json') {
            return `${base}json.worker.bundle.js`
          }
          if (label === 'css' || label === 'scss' || label === 'less') {
            return `${base}css.worker.bundle.js`
          }
          if (label === 'html' || label === 'handlebars' || label === 'razor') {
            return `${base}html.worker.bundle.js`
          }
          
          return `${base}editor.worker.bundle.js`
        }
      }
    } */


    app.component('Playground', Playground)

  }
}