const config = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'selector',
	theme: {
		extend: {
			scale: {
				1.025: '1.025'
			},
			fontFamily: {
				manrope: ['Manrope', 'sans-serif'],
				plex: ['IBM Plex Sans', 'sans'],
				'DM-Mono': ['Dm Mono', 'sans'],
				hedvig: ['Hedvig Letters Serif', 'sans'],
				vt: ['VT323']
			}
		}
	},

	plugins: [require('@tailwindcss/typography')
	]
};

module.exports = config;
