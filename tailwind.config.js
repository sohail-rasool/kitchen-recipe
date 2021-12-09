// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        nunito: ['Nunito Sans'],
      },
      colors: {
        'theme-dark': '#0A0A0A',
        'theme-main-color': '#30BE76 ',
        'theme-light-main-color': '#30BE76',
        'theme-danger': '#F84971',
        'theme-warning': '#F8B449 ',
        'theme-dark-gray': '#CCCCCC',
        'theme-light-gray': '#E6E6E6',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
