import { onBeforeUnmount, type ShallowRef } from 'vue'

import { interFontDec } from './resources/interFont'
import type { Tab } from './types'

export interface PreviewSource {
  code: Record<Tab, string>
  importMap: string
}

/**
 * Renders the playground code into the preview iframe as a blob
 * document, debouncing edits and cleaning up blob URLs.
 */
export function usePreview(
  frame: Readonly<ShallowRef<HTMLIFrameElement | null>>,
  source: PreviewSource
) {
  let url = ''
  let timer: ReturnType<typeof setTimeout> | undefined

  function update() {
    if (!frame.value) return

    const staleUrl = url
    url = URL.createObjectURL(new Blob([buildDocument(source)], { type: 'text/html' }))
    frame.value.src = url
    if (staleUrl) URL.revokeObjectURL(staleUrl)
  }

  function scheduleUpdate() {
    clearTimeout(timer)
    timer = setTimeout(update, 700)
  }

  onBeforeUnmount(() => {
    clearTimeout(timer)
    if (url) URL.revokeObjectURL(url)
  })

  return { update, scheduleUpdate }
}

function buildDocument({ code, importMap }: PreviewSource) {
  return `
<!DOCTYPE html>
<html>
  <head>
    <base href="${window.location.href}">
    <style>${code.CSS}</style>
    <link rel="stylesheet" href="${interFontDec}">
  </head>
  <body>
    ${code.HTML}
    ${importMap}
    <script type="module">${code.JS}</script>
  </body>
</html>`
}
