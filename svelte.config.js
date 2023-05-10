import adapter from '@sveltejs/adapter-auto';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: {
				plugins: [
					tailwind,
					autoprefixer,
				]
			},
		}),
	],
	kit: {
		adapter: adapter(),
	}
};

export default config;
