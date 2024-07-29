import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/view/MainPage.vue';
import NotFound from '@/view/NotFound.vue';

const routes = [
  {
    path: '/:lang',
    name: 'MainPage',
    component: MainPage,
    beforeEnter: (to, from, next) => {
      const supportedLangs = ['en', 'ru', 'de', 'uk'];
      const lang = to.params.lang;

      if (!supportedLangs.includes(lang)) {
        next({ name: 'NotFound', params: { lang: 'en' } });
      } else {
        next();
      }
    }
  },
  {
    path: '/:lang/not-found',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'NotFound', params: { lang: 'en' } }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const lang = to.params.lang;
  if (lang) {
    setCookie('language', lang, 7);
  }
  next();
});

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export default router;
