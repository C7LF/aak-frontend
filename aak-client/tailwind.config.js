module.exports = {
  purge: ['./pages/**/*.tsx', './styles/**/*.css', './public/*'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    fontFamily: {
      body: ['Lato', 'sans-serif'],
      display: ['Lato', 'sans-serif'],
    },
    background: {
      'rad-red': [
        'rgb(211,2,1)',
        'radial-gradient(circle, rgba(211,2,1,1) 0%, rgba(169,1,0,1) 100%)',
      ],
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
