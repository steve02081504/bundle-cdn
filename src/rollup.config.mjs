import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import nodePolyfills from 'rollup-plugin-polyfill-node'

let plugins = [nodeResolve(), commonjs(), nodePolyfills(), json(), terser()]

export default [
	{
		input: 'packages/buffer.mjs',
		output: {
			name: 'buffer',
			strict: false,
			file: 'dist/buffer.js',
			format: 'iife',
			sourcemap: true
		},
		plugins,
	},
	{
		input: 'packages/node-unrar-js.mjs',
		output: {
			name: 'node_unrar_js',
			strict: false,
			file: 'dist/node-unrar-js.js',
			format: 'iife',
			sourcemap: true
		},
		plugins,
	},
	{
		input: 'packages/showdown-highlight.mjs',
		output: {
			name: 'showdown_highlight',
			strict: false,
			file: 'dist/showdown-highlight.js',
			format: 'iife',
			sourcemap: true
		},
		plugins,
	},
]
