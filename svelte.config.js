import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import adapter from '@sveltejs/adapter-vercel';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import preprocess from 'svelte-preprocess';
let highlighter = null;
async function getHighlighter() {
	if (!highlighter) {
		highlighter = await createHighlighter({
			themes: ['rose-pine-dawn', 'rose-pine-moon'],
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
		preprocess({
			postcss: {
				plugins: [tailwind, autoprefixer]
			}
		}),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await getHighlighter();
					const html = escapeSvelte(
						highlighter.codeToHtml(code, { lang, theme: 'rose-pine-dawn' })
					);
					return `{@html \`${html}\` }`;
				}
			}
		})
	],

	kit: {
		adapter: adapter()
	},

	extensions: ['.svelte', '.svx', '.md']
};
process.on('exit', () => {
	if (highlighter) {
		highlighter.dispose();
	}
});

export default config;
