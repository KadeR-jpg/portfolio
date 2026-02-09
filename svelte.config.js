import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx']
			// highlight: {
			// 	highlighter: async (code, lang = 'text') => {
			// 		const highlighter = await getHighlighter();
			// 		const html = escapeSvelte(
			// 			highlighter.codeToHtml(code, { lang, theme: 'catpuccin-mocha' })
			// 		);
			// 		return `{@html \`${html}\` }`;
			// 	}
			// }
		})
	],
	kit: {
    adapter: adapter({
      runtime: "nodejs22.x", 
		}),
		alias: {
			$components: 'src/lib/components',
			$utils: 'src/lib/utils.ts'
		}
	},
	extensions: ['.svelte', ...mdsvexConfig.extensions]
};

export default config;
