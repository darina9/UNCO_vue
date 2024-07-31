<template>
  <div class="not-found">
    <img src="../assets/img/Mask group.svg" />
    <h1>
      oOps! PAGE<br />
      NOT FOUND.
    </h1>
    <p>Sorry, something went wrong. Try again!</p>
    <button>
      <router-link
        :to="{ name: 'MainPage', params: { lang: $route.params.lang || 'en' } }"
        >return to shop</router-link
      >
    </button>
  </div>
</template>
  
  <script>
export default {
  name: "NotFound",
};
</script>
  
  <style scoped>
.not-found {
  text-align: center;
  padding: 50px;
  background-image: url("../assets/img/bac_img_404.png");
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
}
img {
  margin-left: 80%;
}
h1 {
  margin-top: 200px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-family: Roboto;
  color: #ffffff;
  font-size: 60px;
  font-weight: 800;
  line-height: 70.31px;
  letter-spacing: 0.05em;
  text-align: left;
}

p {
  margin-top: 50px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 23.44px;
  letter-spacing: 0.05em;
  text-align: left;
  color: #ffffff;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
button {
  margin-top: 100px;
  border: 1px solid #7c9b3f;
  background-color: #7c9b3f;
  border-radius: 6px;
  padding: 10px 40px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.44px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
}
</style>
  
