import { defineConfig } from 'vitepress'
//import monacoEditorPlugin from 'vite-plugin-monaco-editor'

import referenceNavigationItems from './referenceNavigation.ts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  rewrites: {
    //'reference/:slug*': ':slug*'
  },

  head: [['link', { rel: 'icon', href: '/icon.png' }]],
    
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
      { icon: 'github', link: 'https://github.com/benhatsor/KeyframeKit' }
    ],

    footer: {
      message: 'Created by <a href="https://berryscript.com" target="_blank">Ben Hatsor</a>. MIT License.'
    }
  },

  vite: {
    plugins: [
      /*monacoEditorPlugin({
        //publicPath: '/'
        customDistPath: (root, buildOutDir) => `${buildOutDir}/monacoeditorwork`
      })*/
    ],
    ssr: {
      //noExternal: ['monaco-editor']
    },
    optimizeDeps: {
      //exclude: ['monaco-editor']
    }
  }
})
