import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from '@/assets/languages/en.json';
import es from '@/assets/languages/es.json';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en', // set default locale
  fallbackLocale: 'en',
  messages: {
    en,
    es
  }
});

export default i18n;