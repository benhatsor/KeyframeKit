export type Tab = 'JS' | 'CSS' | 'HTML'

export interface PlaygroundOptions {
  container: HTMLElement
  code: Record<Tab, string>
  dtsSource: string
  isDark: boolean
  isTouchDevice: boolean
  onChange: (tab: Tab, value: string) => void
}

export interface Playground {
  showTab(tab: Tab): void
  setTheme(isDark: boolean): void
  dispose(): void
}
