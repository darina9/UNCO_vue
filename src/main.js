import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import router from './router';

import en from './locales/en.json';
import ru from './locales/ru.json';
import de from './locales/de.json';
import uk from './locales/uk.json';
import fr from './locales/fr.json'; 
import es from './locales/es.json'; 
import it from './locales/it.json'; 

const messages = {
  en,
  ru,
  de,
  uk,
  fr, 
  es,
  it  
};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
});

const app = createApp(App);
app.use(router);
app.use(i18n);

router.isReady().then(() => {
  const lang = router.currentRoute.value.params.lang || getCookie('language') || 'en';
  i18n.global.locale.value = lang;

  if (!router.currentRoute.value.params.lang) {
    router.replace({ name: 'MainPage', params: { lang }, query: router.currentRoute.value.query });
  }
  app.mount('#app');
});

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

