// i18n.config.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translations
import enTranslation from './locales/en/common.json'; 
import noTranslation from './locales/no/common.json';

// Initialize i18n
i18n
  .use(initReactI18next) 
  .init({
    defaultLocale: 'en', 
    fallbackLng: 'en', 
    debug: true,

    supportedLngs: ['en', 'no'],

    resources: {
      en: {
        common: enTranslation, // Your English translations
      },
      no: {
        common: noTranslation, // Your Norwegian translations
      },
    },


    interpolation: {
      escapeValue: true,
    },
  });

export default i18n;
