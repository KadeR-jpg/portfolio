const config = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      scale: {
        '1.025': '1.025'
      },
      fontFamily: {
        'grenze': ['Grenze Gotisch', 'serif']
      },
    },

  },

  plugins: [
    require('@tailwindcss/typography'),
  ]
};

module.exports = config;
