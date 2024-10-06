import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import adapter from '@sveltejs/adapter-vercel';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import preprocess from 'svelte-preprocess';
import mdsvexConfig from './mdsvex.config.js';
let highlighter = null;
async function getHighlighter() {
	if (!highlighter) {
		highlighter = await createHighlighter({
			themes: ['catppuccin-mocha', 'rose-pine-moon'],
			langs: ['javascript', 'typescript', 'go']
		});
		await highlighter.loadLanguage('javascript', 'typescript');
	}
	return highlighter;
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(
			{
				postcss: {
					plugins: [tailwind, autoprefixer]
				}
			},
			mdsvex(mdsvexConfig)
		),
		mdsvex({
			extensions: ['.md', '.svx'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await getHighlighter();
					const html = escapeSvelte(
						highlighter.codeToHtml(code, { lang, theme: 'catppuccin-mocha' })
					);
					return `{@html \`${html}\` }`;
				}
			}
		})
	],

	kit: {
		alias: {
			$components: 'src/lib/Components',
			$utils: 'src/lib/utils.ts'
		},
		adapter: adapter()
	},

	extensions: ['.svelte', ...mdsvexConfig.extensions]
};
process.on('exit', () => {
	if (highlighter) {
		highlighter.dispose();
	}
});

export default config;
