import { defineConfig } from 'vitepress'
import monacoEditorPlugin from 'vite-plugin-monaco-editor'

import referenceNavigationItems from './referenceNavigation.ts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  rewrites: {
    //'reference/:slug*': ':slug*'
  },
    
  title: "KeyframeKit",
  description: "Test",
  themeConfig: {
    outline: [2, 3],

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Reference', link: '/reference' }
    ],

    sidebar: {
      '/reference/': [
        {
          text: 'Reference',
          link: '/reference',
          items: referenceNavigationItems
        }
      ]
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/benhatsor/KeyframeKit.js' }
    ]
  },

  vite: {
    plugins: [
      monacoEditorPlugin({})
    ],
    optimizeDeps: {
      exclude: ['monaco-editor']
    }
  }
})
