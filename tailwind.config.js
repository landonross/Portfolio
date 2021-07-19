// const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        warmGray: {
          200: '#E7E5E4',
          300: '#D6D3D1',
          700: '#44403C',
          800: '#292524'
        },
        gray: {
          950: '#414143'
        },
        gold: {
          100: '#BFB383'
        }
        // warmGray: colors.warmGray,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
