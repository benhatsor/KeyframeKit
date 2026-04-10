import { defineConfig } from 'vitepress'
//import monacoEditorPlugin from 'vite-plugin-monaco-editor'

import referenceNavigationItems from './referenceNavigation.ts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'docs',

  rewrites: {
    //'reference/:slug*': ':slug*'
  },

  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    ['meta', { property: 'og:image', content: '/og-image.png' }],
    ['meta', { name: 'keywords', content: 'css,js,javascript,animation,keyframe,stylesheet,framework,tools,performance,typescript' }],

    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-NY6W3XTT8W' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());

       gtag('config', 'G-NY6W3XTT8W');`
    ]

  ],
    
  title: 'KeyframeKit',
  description: 'Unlock fine-grained control over your CSS animations with JavaScript.',

  titleTemplate: false,

  themeConfig: {
    outline: [2, 3],

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/get-started' },
      { text: 'Reference', link: '/reference/' }
    ],

    sidebar: referenceNavigationItems,/*{
      '/reference/': [
        {
          text: 'Reference',
          link: '/reference/',
          items: referenceNavigationItems
        }
      ]
    },*/

    search: {
      provider: 'local',
      options: {
        detailedView: false,
        async _render(src, env, md) {
          if (
            // !env.relativePath.startsWith('reference') ||
            env.relativePath === 'reference/index.md'
          ) return ''

          src = src.split('## See Also')[0];

          const html = await md.renderAsync(src, env)
          //if (env.frontmatter?.search === false) return ''
          
          return html
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/benhatsor/KeyframeKit' }
    ],

    footer: {
      message: 'Created by <a href="https://berryscript.com" target="_blank">Ben Hatsor</a>. MIT License.'
    },

    docFooter: {
      prev: false,
      next: false
    },

    sidebarMenuLabel: 'Reference'
  },

  transformPageData(pageData, ctx) {

    const siteTitle = ctx.siteConfig.site.title;

    let title;

    if (pageData.frontmatter.layout === 'home') {

      title = `${pageData.frontmatter.hero.name} | ${pageData.frontmatter.hero.tagline}`;

    } else if (pageData.relativePath.startsWith('reference')) {

      title = `${pageData.title} - Reference | ${siteTitle}`;

    } else {

      title = `${pageData.title} | ${siteTitle}`;

    }

    pageData.title = title;


    pageData.frontmatter.head ??= []

    pageData.frontmatter.head.push([
      'meta',
      {
        name: 'og:title',
        content: pageData.title
      }
    ])
  },

  // fix vue parsing errors in code blocks
  // https://github.com/vuejs/vitepress/discussions/3724#discussioncomment-8963669
  markdown: {
    config(md) {
      const defaultCodeInline = md.renderer.rules.code_inline!
      md.renderer.rules.code_inline = (tokens, idx, options, env, self) => {
        tokens[idx].attrSet('v-pre', '')
        return defaultCodeInline(tokens, idx, options, env, self)
      }
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
