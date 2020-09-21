module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ["./components/**/*.tsx", "./pages/**/*.jsx", "./pages/**/*.tsx"],
  },
};
