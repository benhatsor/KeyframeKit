import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

import MagicString from 'magic-string';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: {
    'KeyframeKit.min.js': 'src/KeyframeKit.ts'
  },
  output: {
    dir: 'dist',
    entryFileNames: '[name]',
	sourcemap: true
  },
  plugins: [typescript(), terser(), header()]
};

function header() {

	return {

		renderChunk( code ) {

			code = new MagicString( code );

			code.prepend( `/*
 * KeyframeKit
 * MIT License
 */\n` );

			return {
				code: code.toString(),
				map: code.generateMap()
			};

		}

	};

}
