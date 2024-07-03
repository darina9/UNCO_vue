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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
