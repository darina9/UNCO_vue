<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: "App",
  created() {
    const router = useRouter();
    const currentRoute = router.currentRoute.value;

    if (currentRoute.name !== 'PreloaderPage' && currentRoute.name !== 'MainPage') {
      this.$router.push({ name: 'PreloaderPage' });
    }
  }
};
</script>
