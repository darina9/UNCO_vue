import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/view/MainPage.vue';
import PreloaderPage from '@/view/PreloaderPage.vue';

const routes = [
  {
    path: '/',
    name: 'PreloaderPage',
    component: PreloaderPage,
  },
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'PreloaderPage' }
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

export default router;
