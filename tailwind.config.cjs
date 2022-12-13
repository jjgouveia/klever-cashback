const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        MonteSerrat: ['Montserrat', 'sans-serif'],
      },
    },
    colors: {
      ...colors,
      klever: {
        strong: '#aa33b5',
        dark: '#0b0b1e',
        darkness: '#0a0a23',
        footer: '#14152c',
        hover: '#772d8b',
      },
    },
  },
  plugins: [],
};
