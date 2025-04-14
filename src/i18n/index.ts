import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { Platform } from 'react-native';

// Import translations
import enTranslation from './locales/en.json';
import zhTWTranslation from './locales/zh-TW.json';
import zhCNTranslation from './locales/zh-CN.json';
import esTranslation from './locales/es.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  'zh-TW': {
    translation: zhTWTranslation,
  },
  'zh-CN': {
    translation: zhCNTranslation,
  },
  es: {
    translation: esTranslation,
  },
};

console.log('Initializing i18n with resources:', Object.keys(resources));

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    react: {
      useSuspense: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    },
  })
  .then(() => {
    console.log('i18n initialized successfully');
    console.log('Current language:', i18n.language);
  })
  .catch((error) => {
    console.error('i18n initialization failed:', error);
  });

// Ensure language changes are properly handled
i18n.on('languageChanged', (lng) => {
  console.log('Language changed to:', lng);
  console.log('Current translations:', i18n.getResourceBundle(lng, 'translation'));
  // Force a re-render of the entire app
  if (Platform.OS === 'ios') {
    const root = require('react-native').AppRegistry.getRootComponent();
    if (root) {
      root.forceUpdate();
    }
  }
});

export default i18n; 