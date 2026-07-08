import { ref, watch, onBeforeUnmount, type Ref, type ShallowRef } from 'vue'
import { useData } from 'vitepress'

import type { Tab, Playground, PlaygroundOptions } from './types'

/**
 * Owns the playground's monaco editor: loads it lazily on the client
 * (monaco can't run during SSR; everything SSR-unsafe stays behind
 * the `./monaco` dynamic import), keeps it in sync with the active
 * tab and the site theme, and disposes it on unmount.
 */
export function useEditor(
  container: Readonly<ShallowRef<HTMLDivElement | null>>,
  activeTab: Ref<Tab>
) {
  const isReady = ref(false)
  const { isDark } = useData()

  let playground: Playground | null = null

  async function mountEditor(options: Omit<PlaygroundOptions, 'container' | 'isDark'>) {
    const { createPlayground } = await import('./monaco')

    // the component may have been unmounted while monaco was loading
    if (!container.value) return

    playground = await createPlayground({
      container: container.value,
      isDark: isDark.value,
      ...options
    })

    isReady.value = true
  }

  watch(activeTab, tab => playground?.showTab(tab))
  watch(isDark, dark => playground?.setTheme(dark))

  onBeforeUnmount(() => playground?.dispose())

  return { isReady, mountEditor }
}
