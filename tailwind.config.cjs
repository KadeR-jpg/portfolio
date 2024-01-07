const config = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			scale: {
				1.025: '1.025'
			},
			fontFamily: {
				manrope: ['Manrope', 'sans-serif'],
				plex: ['IBM Plex Sans', 'sans'],
				'plex-mono': ['IBM Plex Mono', 'sans'],
				hedvig: ['Hedvig Letters Serif', 'sans'],
				vt: ['VT323']
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
