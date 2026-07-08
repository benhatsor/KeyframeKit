// Highlights with the shiki engine and grammars VitePress
// uses for code blocks.

import * as monaco from 'monaco-editor'

import { createHighlighterCore } from 'shiki/core'
import { createOnigurumaEngine } from 'shiki/engine/oniguruma'
import { shikiToMonaco } from '@shikijs/monaco'

import githubDark from '@shikijs/themes/github-dark'
import githubLight from '@shikijs/themes/github-light'

// VitePress' default code block syntax themes (github-dark/light),
// with backgrounds modified to blend with the vitepress theme (--vp-code-block-bg, etc.)
const themes = {
  dark: {
    ...githubDark,
    name: 'vp-dark',
    colors: {
      ...githubDark.colors,
      'editor.background': '#161618',
      'editor.lineHighlightBackground': '#202022',
      'editorWidget.background': '#1b1b1f',
      'editorWidget.border': '#3c3f44'
    }
  },

  light: {
    ...githubLight,
    name: 'vp-light',
    colors: {
      ...githubLight.colors,
      'editor.background': '#f6f6f7',
      'editor.lineHighlightBackground': '#efeff1',
      'editorWidget.background': '#ffffff',
      'editorWidget.border': '#c2c2c4'
    }
  }
}

export const themeFor = (isDark: boolean) => isDark ? 'vp-dark' : 'vp-light'

// shared across playground instances
let highlighting: Promise<void> | null = null

export function setupHighlighting() {
  highlighting ??= createHighlighterCore({
    themes: [themes.dark, themes.light],
    langs: [
      import('@shikijs/langs/html'),
      import('@shikijs/langs/css'),
      import('@shikijs/langs/typescript')
    ],
    engine: createOnigurumaEngine(import('shiki/wasm'))
  }).then(highlighter => shikiToMonaco(highlighter, monaco))

  return highlighting
}
