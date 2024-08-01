
<template>
  <section class="workflow-algorithm">
    <p class="workflow-algorithm__title" id="how_it_works">
      {{ $t("workflow_algorithm.title") }}
    </p>
    <ul class="workflow-algorithm__list" ref="list">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="`workflow-algorithm__item workflow_${index + 1}`"
      >
        <div class="workflow-algorithm__item_svg">
          <div v-for="n in item.svgCount" :key="n" class="svg-item">
            <svg width="40" height="40">
              <use xlink:href="#svg-icon"></use>
            </svg>
          </div>
        </div>
        <p class="workflow-algorithm__item_text">{{ item.text }}</p>
        <svg v-if="index === 0" class="arrow arrow_1_2" width="80" height="80">
          <use xlink:href="#arrow"></use>
        </svg>
        <svg v-if="index === 1" class="arrow arrow_2_3" width="80" height="80">
          <use xlink:href="#arrow"></use>
        </svg>
        <svg v-if="index === 2" class="arrow arrow_3_4" width="80" height="80">
          <use xlink:href="#arrow"></use>
        </svg>
      </li>
    </ul>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol id="arrow" viewBox="0 0 80 80" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M31.9999 80L80 40L31.9999 0L31.9999 26.8033H0V53.1964H31.9999V80Z"
          stroke="#A2C33D"
          fill="none"
          stroke-width="4"
        />
      </symbol>
      <symbol id="svg-icon" viewBox="0 0 40 40" fill="none">
        <path
          d="M23.424 9.97495C23.2861 9.72716 23.0839 9.52123 22.8386 9.37894C22.5933 9.23665 22.3142 9.16329 22.0307 9.16661H18.0273C17.7292 9.16392 17.4363 9.24456 17.1815 9.39946C16.9268 9.55436 16.7204 9.77735 16.5857 10.0433C15.6423 11.9333 13.5357 16.5049 13.3473 19.9933L13.3454 19.998L13.3407 19.9999L13.3359 20.0019L13.334 20.0066V30.8333C13.334 31.7173 13.6852 32.5652 14.3103 33.1903C14.9354 33.8154 15.7833 34.1666 16.6673 34.1666H23.334C24.218 34.1666 25.0659 33.8154 25.691 33.1903C26.3161 32.5652 26.6673 31.7173 26.6673 30.8333V20.0049L26.6659 20.0014L26.6623 19.9999L26.6604 19.9996L26.6588 19.9985L26.6577 19.9969L26.6573 19.9949C26.4907 16.0116 24.3773 11.7199 23.424 9.97495Z"
          stroke="#214B33"
          stroke-width="1.66667"
        />
        <path
          d="M24.1667 5.8335H15.8333C15.3731 5.8335 15 6.20659 15 6.66683V8.3335C15 8.79373 15.3731 9.16683 15.8333 9.16683H24.1667C24.6269 9.16683 25 8.79373 25 8.3335V6.66683C25 6.20659 24.6269 5.8335 24.1667 5.8335Z"
          stroke="#214B33"
          stroke-width="1.66667"
        />
        <path
          d="M16.668 20.8335V30.0002"
          stroke="#214B33"
          stroke-width="1.66667"
          stroke-linecap="round"
        />
      </symbol>
    </svg>
  </section>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "WorkflowAlgorithm",
  setup() {
    const { t, locale } = useI18n();
    const list = ref(null);

    const items = computed(() => [
      {
        text: t("workflow_algorithm.items[0].text"),
        svgCount: 4,
      },
      {
        text: t("workflow_algorithm.items[1].text"),
        svgCount: 3,
      },
      {
        text: t("workflow_algorithm.items[2].text"),
        svgCount: 2,
      },
      {
        text: t("workflow_algorithm.items[3].text"),
        svgCount: 1,
      },
    ]);

    const showElementWithDelay = (selector, delay) => {
      const element = document.querySelector(selector);
      if (element) {
        setTimeout(() => {
          element.classList.add("visible");
        }, delay);
      }
    };

    const onScroll = () => {
      const workflowAlgorithm = document.querySelector(".workflow-algorithm");
      if (isElementInViewport(workflowAlgorithm)) {
        showElementWithDelay(".workflow_1", 0);
        showElementWithDelay(".arrow_1_2", 200);
        showElementWithDelay(".workflow_2", 200);
        showElementWithDelay(".arrow_2_3", 400);
        showElementWithDelay(".workflow_3", 600);
        showElementWithDelay(".arrow_3_4", 600);
        showElementWithDelay(".workflow_4", 800);
      }
    };

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const windowWidth =
        window.innerWidth || document.documentElement.clientWidth;

      return (
        rect.top <= windowHeight &&
        rect.bottom >= 0 &&
        rect.left <= windowWidth &&
        rect.right >= 0
      );
    };

    const observerOptions = {
      threshold: 0.1,
    };

    let observer;

    const createObserver = () => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let sortedItems = Array.from(list.value.children);

            sortedItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("visible");
              }, index * 200);
            });

            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      observer.observe(list.value);
    };

    const disconnectObserver = () => {
      if (observer) {
        observer.disconnect();
      }
    };

    const updateItems = () => {
      document.querySelectorAll(".workflow-algorithm__item").forEach((item) => {
        item.classList.remove("visible");
      });
      createObserver();
    };

    onMounted(() => {
      window.addEventListener("scroll", onScroll);
      createObserver();
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
      disconnectObserver();
    });

    watch(locale, () => {
      updateItems();
      onScroll(); // Trigger the animation when the locale changes
    });

    return {
      t,
      items,
      list,
    };
  },
};
</script>
  <style>
@import url("../assets/common-styles.css");

.workflow-algorithm__title {
  color: #bc0051;
  font-size: 36px;
  font-weight: 600;
  line-height: 166%;
  margin-bottom: 30px;
}

.workflow-algorithm {
  margin-top: 100px;
  position: relative;
}

.workflow-algorithm__list {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 10px;
  /* position: relative; */
}

.workflow-algorithm__item {
  border-radius: 20px;
  border: 4px solid #a2c33d;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
  position: relative;
}

.workflow_1 {
  grid-column: 1 / span 4;
  grid-row: 1;
  width: 100%;
  height: 250px;
}

.workflow_2 {
  grid-column: 6 / span 7;
  grid-row: 1;
  width: 100%;
  height: 170px;
}

.workflow_3 {
  grid-column: 3 / span 5;
  grid-row: 2;
  width: 100%;
  margin-top: 60px;
  height: 300px;
}

.workflow_4 {
  grid-column: 8 / span 5;
  grid-row: 2;
  width: 100%;
  margin-top: 60px;
  height: 300px;
}

.workflow-algorithm__item_text {
  color: #313131;
  font-size: 24px;
  font-weight: 400;
  line-height: 166%;
}

.arrow {
  position: absolute;
  width: 85px;
  height: 80px;
  display: none;
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.workflow-algorithm__item.visible {
  display: flex;
  opacity: 1;
}

.arrow.visible {
  display: block;
  opacity: 1;
}

.arrow_1_2 {
  left: 105%;
  /* transform: translateX(20px); */
}

.arrow_2_3 {
  top: 120%;

  transform: rotate(90deg);
}

.arrow_3_4 {
  bottom: 115%;
  right: 25%;
  transform: rotate(90deg);
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .workflow-algorithm {
    padding-bottom: 0;
    height: auto;
  }
  .workflow-algorithm__list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto auto auto;
    gap: 10px;
    align-items: flex-start;
  }

  .workflow-algorithm__item {
    position: relative;
    left: 0;
    transform: none;
  }

  .workflow_1 {
    grid-column: 1 / span 12;
    grid-row: 1;
    width: 100%;
    height: 250px;
  }

  .workflow_2 {
    grid-column: 1 / span 12;
    grid-row: 2;
    width: 100%;
    height: 200px;
    margin-top: 60px;
  }

  .workflow_3 {
    grid-column: 1 / span 6;
    grid-row: 3;
    width: 100%;
    height: 540px;
  }

  .workflow_4 {
    grid-column: 7 / span 6;
    grid-row: 3;
    width: 100%;
    height: 540px;
  }

  .workflow-algorithm__title {
    font-size: 24px;
  }

  .arrow {
    position: absolute;
    display: block;
    opacity: 1;
    width: 45px;
    height: 40px;
  }

  .arrow_1_2 {
    top: 110%;
    left: 48%;

    transform: rotate(90deg);
  }

  .arrow_2_3 {
    top: 110%;
    left: 65%;
    transform: rotate(90deg);
  }

  .arrow_3_4 {
    top: -11%;
    left: 60%;
    transform: rotate(90deg);
  }
}
@media only screen and (max-width: 767px) {
  .workflow-algorithm {
    margin-top: 40px;
    padding: 0;
  }
  .workflow-algorithm__title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .workflow-algorithm__item {
    position: relative;
    opacity: 1;
    display: flex;
    margin-bottom: 60px;
    width: 100%;
    padding: 10px 0;
  }
  .workflow-algorithm__item_text {
    font-size: 18px;
    font-weight: 600;
    line-height: 166%;
    padding-right: 10px;
  }
  .workflow-algorithm__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  .svg-item > svg {
    width: 30px;
    height: 30px;
  }
  .workflow-algorithm__item_svg {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .workflow_2 {
    height: 300px;
  }
  .workflow_3,
  .workflow_4 {
    margin-top: 0;
  }

  .arrow {
    display: block;
    width: 45px;
    height: 40px;
    opacity: 1;
    position: absolute;
  }
  .arrow_1_2,
  .arrow_2_3,
  .arrow_3_4 {
    transform: rotate(90deg);
  }
  .arrow_1_2 {
    top: 110%;
    left: 43%;
  }
  .arrow_2_3 {
    top: 110%;
    left: 43%;
  }
  .arrow_3_4 {
    top: 110%;
    left: 43%;
  }
}
</style>
  
