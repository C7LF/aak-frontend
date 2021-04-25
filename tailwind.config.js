module.exports = {
  purge: ['./pages/**/*.tsx', './styles/**/*.css', './components/**/*.tsx'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    container: {
      padding: '1em',
    },
    fontFamily: {
      body: ['Lato', 'sans-serif'],
      display: ['Lato', 'sans-serif'],
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      secondary: '#9B0100',
    }),
    extend: {
      backgroundImage: () => ({
        'hero-bg': "url('/img/camaro.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
    },
  },
};
