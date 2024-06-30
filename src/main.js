import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import router from './router';

import en from './locales/en.json';
import ru from './locales/ru.json';
import de from './locales/de.json';
import uk from './locales/uk.json'; // Добавляем украинский язык

const messages = {
  en,
  ru,
  de,
  uk // Добавляем украинский язык
};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');