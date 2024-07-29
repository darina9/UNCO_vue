<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "App",
  created() {
    const router = useRouter();
    const currentRoute = router.currentRoute.value;

    // Если текущий маршрут не является MainPage или NotFound, перенаправляем на MainPage с языком по умолчанию
    if (currentRoute.name !== "MainPage" && currentRoute.name !== "NotFound") {
      const lang = getCookie("language") || "en";
      this.$router.replace({ name: "MainPage", params: { lang } });
    }
  },
};

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
</script>
