import { createI18n } from 'vue-i18n';
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
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export default i18n;