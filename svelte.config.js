import firebase from 'svelte-adapter-firebase';
// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
	kit: {
		adapter: firebase({
			esbuildOptions: (defaultOptions) => {
				return {
					...defaultOptions,
					external: ['sharp', 'exiftool-vendored', '@resvg/resvg-js'],
				}
			}
		}),
	},
};

export default config;
