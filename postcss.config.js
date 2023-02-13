
const purgecss = require('@fullhuman/postcss-purgecss')({
  map: false,
  content: ['./**/*.html'],
});

module.exports = {
  plugins: [
      ...(process.env.HUGO_ENVIRONMENT === 'production' ? [ purgecss ] : [])
  ]
};

