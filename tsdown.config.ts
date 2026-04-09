import { defineConfig } from 'tsdown'

const banner = `
/**
 * KeyframeKit
 * @license MIT
 */
`.trim()

export default defineConfig([
  {
    entry: ['src/index.ts'],
    sourcemap: true,
    dts: true,
    clean: true,
    exports: true,
    platform: 'browser',
    banner: banner
  },
  {
    entry: ['src/index.ts'],
    minify: true,
    sourcemap: true,
    dts: false,
    clean: false,
    outExtensions: () => ({ js: '.min.js' }),
    platform: 'browser',
    banner: banner
  },
])
