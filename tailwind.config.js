const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    "index.html"
  ],
  jit: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.coolGray
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
