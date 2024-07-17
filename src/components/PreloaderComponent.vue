 <template>
  <div class="preloader-container">
    <img
      src="../assets/img/unco.svg"
      class="final-svg-image"
      :class="{ 'fade-out': fadeOut }"
      alt="final image"
    />
    <svg
      :class="{
        'final-svg': true,
        show: showLeaf,
        expand: expandLeaf,
        'move-down': moveDownLeaf,
        'fade-out': fadeOutLeaf,
      }"
      xmlns="http://www.w3.org/2000/svg"
      width="630"
      height="630"
      viewBox="0 0 630 630"
      fill="none"
    >
      <path
        id="top-right"
        :class="{ 'animate-path': animatePath }"
        d="M300 315L300 255C300 122.452 192.548 15 60 15L2.62268e-05 15"
        stroke="#A2C33D"
        stroke-width="30"
      />
      <path
        id="bottom-left"
        :class="{ 'animate-path': animatePath }"
        d="M15 0V60C15 192.548 122.452 300 255 300H315"
        stroke="#A2C33D"
        stroke-width="30"
      />
    </svg>
    <svg
      :class="{
        'second-svg': true,
        show: showSecondLeaf,
        'move-bottom-right': moveToBottomRight,
        'transition-stroke': transitionStroke,
      }"
      xmlns="http://www.w3.org/2000/svg"
      width="315"
      height="315"
      viewBox="0 0 315 315"
      fill="none"
    >
      <path
        d="M15 0V280C15 291.046 23.9543 300 35 300H315"
        stroke="#A2C33D"
        stroke-width="30"
      />
    </svg>
    <svg
      :class="{
        'third-svg': true,
        show: showThirdLeaf,
        'move-top-left': moveToTopLeft,
        'transition-stroke': transitionStroke,
      }"
      xmlns="http://www.w3.org/2000/svg"
      width="315"
      height="315"
      viewBox="0 0 315 315"
      fill="none"
    >
      <path
        d="M300 315L300 35C300 23.9543 291.046 15 280 15L1.91935e-05 15"
        stroke="#A2C33D"
        stroke-width="30"
      />
    </svg>
  </div>
</template>


<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "PreloaderPage",
  setup() {
    const router = useRouter();
    const showLeaf = ref(false);
    const expandLeaf = ref(false);
    const fadeOut = ref(false);
    const moveDownLeaf = ref(false);
    const fadeOutLeaf = ref(false);
    const showSecondLeaf = ref(false);
    const showThirdLeaf = ref(false);
    const animatePath = ref(false);
    const transitionStroke = ref(false);
    const moveToBottomRight = ref(false);
    const moveToTopLeft = ref(false);

    onMounted(() => {
      setTimeout(() => {
        showLeaf.value = true;
        setTimeout(() => {
          expandLeaf.value = true;
          fadeOut.value = true;
          setTimeout(() => {
            moveDownLeaf.value = true;
            setTimeout(() => {
              fadeOutLeaf.value = true;
              setTimeout(() => {
                showSecondLeaf.value = true;
                showThirdLeaf.value = true;
                setTimeout(() => {
                  animatePath.value = true;
                  transitionStroke.value = true;
                  setTimeout(() => {
                    moveToBottomRight.value = true;
                    moveToTopLeft.value = true;
                    setTimeout(() => {
                      router.replace({ name: "MainPage" }).then(() => {
                        window.history.replaceState(null, null, "/");
                      });
                    }, 800);
                  }, 500); // Время для начала перемещения SVG в углы
                }, 500); // Время для начала анимации после появления новых SVG
              }, 50); // Время для появления новых SVG после исчезновения первого
            }, 1000); // Время для исчезновения первого листочка
          }, 1000); // Время для смещения листочка вниз
        }, 500); // Время для увеличения листочка и исчезновения картинки
      }, 200); // Появление листочка через 500мс
    });

    return {
      showLeaf,
      expandLeaf,
      fadeOut,
      moveDownLeaf,
      fadeOutLeaf,
      showSecondLeaf,
      showThirdLeaf,
      animatePath,
      transitionStroke,
      moveToBottomRight,
      moveToTopLeft,
    };
  },
};
</script>


<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.preloader-container {
  margin-top: 400px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.final-svg-image {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 303px;
  height: 132px;
  transform: translate(-50%, -50%);
  transition: opacity 1s ease, top 1s ease;
}

.final-svg-image.fade-out {
  opacity: 0;
}

.final-svg {
  position: absolute;
  opacity: 0;
  width: 100px;
  height: 100px;
  transform: translate(120px, -8px);
  transition: opacity 1s ease, width 1s ease, height 1s ease;
}

.final-svg.show {
  opacity: 1;
}

.final-svg.expand {
  width: 630px;
  height: 630px;
  transform: translate(120px, -8px);
}

.final-svg.move-down {
  transform: translate(calc(50% - 157px), calc(50% - 115px));
  transition: transform 1s ease;
}

.final-svg.fade-out {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.second-svg,
.third-svg {
  position: absolute;
  opacity: 0;
  width: 315px;
  height: 315px;
  transform: translate(calc(50% - 157px), calc(50% - 115px));
  transition: opacity 0.2s ease;
}

.second-svg.show,
.third-svg.show {
  opacity: 1;
}

.transition-stroke path {
  transition: stroke-width 1s ease, stroke 1s ease;
}

.transition-stroke.second-svg path {
  stroke-width: 4;
  stroke: #214b33;
}

.transition-stroke.third-svg path {
  stroke-width: 4;
  stroke: #214b33;
}

.second-svg.move-bottom-right {
  transform: translate(-165%, 55%);
  transition: transform 1s ease;
}

.third-svg.move-top-left {
  transform: translate(165%, -45%);
  transition: transform 1s ease;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .final-svg-image {
    width: 250px;
    height: 109px;
  }
  .final-svg {
    transform: translate(100px, -8px);
    width: 80px;
    height: 80px;
  }

  .final-svg.expand {
    width: 320px;
    height: 320px;
    transform: translate(100px, -8px);
  }

  .final-svg.move-down {
    transform: translate(calc(50% - 80px), calc(50% - 40px));
  }

  .second-svg,
  .third-svg {
    width: 160px;
    height: 160px;

    transform: translate(calc(50% - 80px), calc(50% - 40px));
  }

  .second-svg.move-bottom-right {
    transform: translate(-160%, 210%);
  }

  .third-svg.move-top-left {
    transform: translate(160%, -110%);
  }
}
@media only screen and (max-width: 767px) {
  .preloader-container {
    margin-top: 300px;
  }
  .final-svg-image {
    width: 150px;
    height: 66px;
  }
  .final-svg {
    transform: translate(58px, -6px);
    width: 50px;
    height: 50px;
  }
  .final-svg.expand {
    width: 160px;
    height: 160px;
    transform: translate(58px, -6px);
  }
  .final-svg.move-down {
    transform: translate(calc(50% - 40px), calc(50% - 40px));
  }
  .second-svg,
  .third-svg {
    width: 80px;
    height: 80px;
    transform: translate(calc(50% - 40px), calc(50% - 40px));
  }
  .second-svg.move-bottom-right {
    transform: translate(-130%, 280%);
  }

  .third-svg.move-top-left {
    transform: translate(130%, -240%);
  }
}
</style>
<!-- <template>
  <div class="preloader-container">
    <img src="../assets/img/unco.svg" class="final-svg-image" alt="final image" />
    <div class="svg-container" :class="{ animate: animate, 'animate-second': animateSecond, 'animate-third': animateThird, 'animate-fourth': animateFourth, 'animate-fifth': animateFifth, 'animate-sixth': animateSixth }">
      <svg v-if="!showNew && !showThird && !showFourth" xmlns="http://www.w3.org/2000/svg" :width="svgSize" :height="svgSize" viewBox="0 0 302 302" fill="none" class="bottom-left">
        <path d="M2 0V280C2 291.046 10.9543 300 22 300H302" stroke="#214B33" :stroke-width="strokeWidth"/>
      </svg>
      <svg v-if="!showNew && !showThird && !showFourth" xmlns="http://www.w3.org/2000/svg" :width="svgSize" :height="svgSize" viewBox="0 0 302 302" fill="none" class="top-right">
        <path d="M300 302L300 22C300 10.9543 291.046 2 280 2L2.62268e-05 1.99997" stroke="#214B33" :stroke-width="strokeWidth"/>
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
   name: 'PreloaderPage',
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
    const svgSize = ref('302');
    const strokeWidth = ref('4');

    const updateSizes = () => {
      if (window.innerWidth < 1439 && window.innerWidth >= 768) {
        svgSize.value = '160';
        strokeWidth.value = '2';
      } else if( window.innerWidth >= 1440){
        svgSize.value = '302';
        strokeWidth.value = '4';
      }
      else{
        svgSize.value = '80';
        strokeWidth.value = '4';
      }
    };

    onMounted(() => {
      updateSizes();
      window.addEventListener('resize', updateSizes);
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
                router.replace({ name: 'MainPage' }).then(() => {
              window.history.replaceState(null, null, '/');
            });
              }, 10000); // Ускорение времени
            }, 5000); // Ускорение четвертой времени
          }, 7000); // Ускорение третьей времени
        }, 5000); // Ускорение второй анимации
      }, 8000); // Ускорение первой анимации
    }, 20000);
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
      showFifth,
      svgSize,
      strokeWidth
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
  @media only screen and (max-width: 1439px) and (min-width: 768px) {
    .final-svg-image {
      width: 250px;
      height: 109px;
    }

    .svg-container {
      width: 688px;
      height: 400px;
    }

    .svg-container.animate .bottom-left {
      width: 160px;
      height: 160px;
      transform: translate(264px, -119px);
      transition: transform 1s ease, opacity 1s ease;
    }

    .svg-container.animate .top-right {
      width: 160px;
      height: 160px;
      transform: translate(-264px, 119px);
      transition: transform 1s ease, opacity 1s ease;
    }

    .svg-container.animate-second .bottom-left.final {
      width: 160px;
      height: 160px;
      transform: translate(260px, -117px);
      transition: transform 1s ease;
    }

    .svg-container.animate-second .top-right.final {
      width: 160px;
      height: 160px;
      transform: translate(-260px, 117px);
      transition: transform 1s ease;
    }

    .svg-container.animate-fourth .final-svg {
      width: 320px;
      height: 320px;
      transform: translate(260px, 117px);
      opacity: 1;
      transition: transform 1s ease, opacity 1s;
    }

    .final-svg {
      opacity: 0;
      transform: translate(260px, 117px);
      transition: opacity 1s;
    }

    .svg-container.animate-fifth .final-svg {
      width: 80px;
      height: 80px;
      transform: translate(260px, 117px) scale(1);
      transition: transform 1s ease, width 0.5s, height 0.5s;
    }

    .svg-container.animate-sixth .final-svg {
      transform: translate(500%, 190%);
      transition: transform 1s ease;
    }
  }
  /* Адаптивные стили для мобильных устройств */
  @media only screen and (max-width: 767px) {
    .final-svg-image {
      width: 150px;
      height: 66px;
    }

    .svg-container {
      width: 260px;
      height: 200px;
    }

    .svg-container.animate .bottom-left{
      transform: translate(90px, -60px);
    }
    .svg-container.animate .top-right {
      transform: translate(-90px, 60px);
      
    }

    .svg-container.animate-second .bottom-left.final{
      transform: translate(90px, -59px);
      width: 80px;
      height: 80px;
    }
    .svg-container.animate-second .top-right.final {
      transform: translate(-90px, 59px);
      width: 80px;
      height: 80px;
      
    }

    .svg-container.animate-fourth .final-svg,
    .final-svg {
      transform: translate(90px, 59px);
      width: 160px;
      height: 160px;
    }

    .svg-container.animate-fifth .final-svg {
      width: 50px;
      height: 50px;
      transform: translate(90px, 59px) scale(1);
    }

    .svg-container.animate-sixth .final-svg {
      transform: translate(327%, 138%);
    }
  }
</style> -->




