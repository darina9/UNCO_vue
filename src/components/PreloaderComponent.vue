<template>
    <div class="preloader-container">
      <img src="../assets/img/unco.svg" class="final-svg-image" alt="final image" />
      <div class="svg-container" :class="{ animate: animate, 'animate-second': animateSecond, 'animate-third': animateThird, 'animate-fourth': animateFourth, 'animate-fifth': animateFifth, 'animate-sixth': animateSixth }">
        <svg v-if="!showNew && !showThird && !showFourth" xmlns="http://www.w3.org/2000/svg" width="302" height="302" viewBox="0 0 302 302" fill="none" class="bottom-left">
          <path d="M2 0V280C2 291.046 10.9543 300 22 300H302" stroke="#214B33" stroke-width="4"/>
        </svg>
        <svg v-if="!showNew && !showThird && !showFourth" xmlns="http://www.w3.org/2000/svg" width="302" height="302" viewBox="0 0 302 302" fill="none" class="top-right">
          <path d="M300 302L300 22C300 10.9543 291.046 2 280 2L2.62268e-05 1.99997" stroke="#214B33" stroke-width="4"/>
        </svg>
        <svg v-if="showNew && !showThird && !showFourth" xmlns="http://www.w3.org/2000/svg" width="315" height="315" viewBox="0 0 315 315" fill="none" class="bottom-left final">
          <path d="M15 0V280C15 291.046 23.9543 300 35 300H315" stroke="#A2C33D" stroke-width="30"/>
        </svg>
        <svg v-if="showNew && !showThird && !showFourth" xmlns="http://www.w3.org/2000/svg" width="315" height="315" viewBox="0 0 315 315" fill="none" class="top-right final">
          <path d="M300 315L300 35C300 23.9543 291.046 15 280 15L1.91935e-05 15" stroke="#A2C33D" stroke-width="30"/>
        </svg>
      
        <svg v-if="showFourth" class="final-svg" xmlns="http://www.w3.org/2000/svg" width="630" height="630" viewBox="0 0 630 630" fill="none">
          <path id="top-right" d="M300 315L300 255C300 122.452 192.548 15 60 15L2.62268e-05 15" stroke="#A2C33D" stroke-width="30"/>
          <path id="bottom-left" d="M15 0V60C15 192.548 122.452 300 255 300H315" stroke="#A2C33D" stroke-width="30"/>
        </svg>
      </div>
    </div>
  </template>
  
  <script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
  export default {
    setup() {
      const router = useRouter();
      const animate = ref(false);
      const animateSecond = ref(false);
      const animateThird = ref(false);
      const animateFourth = ref(false);
      const animateFifth = ref(false);
      const animateSixth = ref(false);
      const showNew = ref(false);
      const showThird = ref(false);
      const showFourth = ref(false);
      const showFifth = ref(false);
  
      onMounted(() => {
      setTimeout(() => {
        animate.value = true;
        setTimeout(() => {
          animateSecond.value = true;
          showNew.value = true;
          setTimeout(() => {
            animateFourth.value = true;
            showFourth.value = true;
            setTimeout(() => {
              animateFifth.value = true;
              showFifth.value = true;
              setTimeout(() => {
                animateSixth.value = true;
                setTimeout(() => {
                  router.push({ name: 'MainPage' });
                }, 1000); // Ускорение времени
              }, 500); // Ускорение времени
            }, 700); // Ускорение времени
          }, 500); // Ускорение первой анимации
        }, 800); // Ускорение первой анимации
      }, 200);
    });
  
      return {
        animate,
        animateSecond,
        animateThird,
        animateFourth,
        animateFifth,
        animateSixth,
        showNew,
        showThird,
        showFourth,
        showFifth
      };
    }
  };
  </script>
  
  
  
  

  <style scoped>
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .preloader-container {
    margin-top: 200px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  .final-svg-image {
    position: absolute;
    opacity: 0;
    top: 50%;
    left: 50%;
    width: 303px;
    height: 132px;
    transform: translate(-50%, -50%);
    animation: fadeIn 1s forwards;
    animation-delay: 3s;
  }
  
  .svg-container {
    position: relative;
    width: 1000px;
    height: 500px;
  }
  
  .bottom-left {
    position: absolute;
    bottom: 0;
    left: 0;
    transition: transform 1s ease;
  }
  
  .top-right {
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 1s ease;
  }
  
  .svg-container.animate .bottom-left {
    transform: translate(347px, -99px);
    transition: transform 1s ease, opacity 1s ease;
    
  }
  
  .svg-container.animate .top-right {
    transform: translate(-347px, 99px);
    transition: transform 1s ease, opacity 1s ease;
   
  }
  
  .svg-container.animate-second .bottom-left.final {
    transform: translate(336px, -86px);
    transition: transform 1s ease   ;
  }
  
  .svg-container.animate-second .top-right.final {
    transform: translate(-336px, 86px);
    transition: transform 1s ease ;
  }
  
  .svg-container.animate-third .bottom-left.third {
    transform: translate(336px, -86px);
  }
  
  .svg-container.animate-third .top-right.third {
    transform: translate(-336px, 86px);
  }
  
  .svg-container.animate-fourth .final-svg {
    transform: translate(336px, 86px);
    opacity: 1;
    transition: transform 1s ease, opacity 1s;
  }
  
  .final-svg {
    opacity: 0;
    transform: translate(336px, 86px);
    transition: opacity 1s;
  }
  
  .svg-container.animate-fifth .final-svg {
    width: 100px;
    height: 100px;
    transform: translate(336px, 86px) scale(1);
    transition: transform 1s ease, width 0.5s, height 0.5s;
  }
  
  .svg-container.animate-sixth .final-svg {
    transform: translate(570%, 190%);
    transition: transform 1s ease;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.6;
    }
    75% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
  </style>
  