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
      light_blue: '#3c2aff',
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
    extend: {
      transitionDuration: {
        '0': '0ms',
      },
      width: {
        '9/10': '90%',
      },
      lineHeight: {
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
