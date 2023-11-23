const plugin = require('tailwindcss/plugin')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.njk', './public/*.html'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      danger: '#ffd600',
      error: '#e90016',
      success: '#00ab27',
    },
    screens: {
      sm: '440px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '1.5xl': '1440px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      fontSize: {
        0: '0px',
      },
      transitionDelay: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        1200: '1200ms',
        1400: '1400ms',
        1600: '1600ms',
        1800: '1800ms',
        2000: '2000ms',
      },
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      maxHeight: (theme) => ({
        ...theme('spacing'),
      }),
    },
  },
  safelist: [{ pattern: /(bg|text|border)-./ }],
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant }) {
      addVariant('group-active', () => {
        return `:merge(.group).active &`
      })
    }),
  ],
}
