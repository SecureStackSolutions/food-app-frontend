const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
   content: ['./apps/**/*.{html,ts}'],
   theme: {
      screens: {
         xs: '475px',
         ...defaultTheme.screens,
      },
      extend: {},
   },
   plugins: [],
};
