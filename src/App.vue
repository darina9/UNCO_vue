<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    if (this.$route.name !== 'PreloaderPage') {
      this.$router.push({ name: 'PreloaderPage' });
    }
  },
};
</script>
