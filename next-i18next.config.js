const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'no'], // List of supported locales
    localePath: path.resolve('./public/locales')
  },
  react: {
    useSuspense: false,
    wait: true,
  },
};
