import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import dts from 'rollup-plugin-dts'

const banner = `
/**
 * KeyframeKit
 * @license MIT
 */
`.trim()

export default defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'es',
        sourcemap: true,
        banner,
        generatedCode: 'es2015',
      },
      {
        file: 'dist/index.min.js',
        format: 'es',
        sourcemap: true,
        banner,
        generatedCode: 'es2015',
        plugins: [terser({
          compress: { passes: 2 }
        })],
      },
    ],
    plugins: [typescript({
      declaration: false,
      declarationMap: false
    })],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
      sourcemap: true,
      banner,
      // rollup-plugin-dts dosen't support es2015 syntax.
    },
    plugins: [dts()],
  },
])
