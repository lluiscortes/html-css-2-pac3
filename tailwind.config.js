const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#111',
      blue: '#1600ff',
      white: colors.white,
      gray: colors.gray,
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
    zIndex: {
      '-1': '-1',
      '10': '99',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
