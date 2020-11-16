module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    mode: 'layers',
    content: [
      './src/**/*.html',
      './src/**/*.tsx',
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
