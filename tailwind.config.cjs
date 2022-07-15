const config = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      scale: {
        '1.025': '1.025'
      },
      fontFamily: {
        'space': ['space-mono', 'serif'],
        'cardo': ['Cardo', 'serif'],
        'spectral': ['Spectral', 'serif'],
        'grenze': ['Grenze Gotisch', 'serif']
      },
      backgroundImage: {
        'idxPattern': "url(./src/lib/images/dith_crete_3.jpg)"
      },
      boxShadow: {
        neu: '7px 7px 13px #b2b5ba, -7px -7px 13px #f0f5fc',
        neuHover: 'inset 7px 7px 13px #a79ad7, inset -7px -7px 13px #e1d0ff',
        neuInner: 'inset -3px -3px 8px 1px rgba(0, 0, 0, 0.15)'
      },
      backgroundColor: {
        tan: '#FAE6D1',
      }
    },

  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp')
  ]
};

module.exports = config;
