
<template>
  <section class="profit-list">
    <p class="profit-list__title">{{ $t("profit_list.title") }}</p>
    <ul class="profit-list__list" ref="list">
      <li
        class="profit-list__item"
        v-for="(item, index) in sortedItems"
        :key="index"
        :class="item.class"
      >
        <p class="profit-list__item_text">{{ item.text }}</p>
      </li>
    </ul>
  </section>
</template>
  
  <script>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "ProfitList",
  setup() {
    const { t, locale } = useI18n();
    const list = ref(null);
    const items = ref([]);

    const updateItems = () => {
      items.value = [
        {
          text: t("profit_list.items.0"),
          class: "",
          orderDesktop: 1,
          orderTablet: 1,
        },
        {
          text: t("profit_list.items.1"),
          class: "",
          orderDesktop: 2,
          orderTablet: 3,
        },
        {
          text: t("profit_list.items.2"),
          class: "",
          orderDesktop: 3,
          orderTablet: 2,
        },
        {
          text: t("profit_list.items.3"),
          class: "",
          orderDesktop: 4,
          orderTablet: 4,
        },
        {
          text: t("profit_list.items.4"),
          class: "",
          orderDesktop: 5,
          orderTablet: 5,
        },
      ];
    };

    const sortedItems = computed(() => {
      const isTablet = window.innerWidth <= 768;
      return items.value.slice().sort((a, b) => {
        const orderA = isTablet ? a.orderTablet : a.orderDesktop;
        const orderB = isTablet ? b.orderTablet : b.orderDesktop;
        return orderA - orderB;
      });
    });

    const observerOptions = {
      threshold: 0.1,
    };

    let observer;

    const createObserver = () => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let delay = 0;

            sortedItems.value.forEach((item, index) => {
              setTimeout(() => {
                items.value[index].class = "visible";
              }, delay);

              delay += 200;
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

    onMounted(() => {
      updateItems();
      createObserver();
    });

    onUnmounted(() => {
      disconnectObserver();
    });

    watch(locale, () => {
      updateItems();
      disconnectObserver();
      createObserver();
    });

    return {
      t,
      list,
      sortedItems,
    };
  },
};
</script>
  
  <style >
@import url("../assets/common-styles.css");
.profit-list {
  margin-top: 97px;
}
.profit-list__title {
  color: #bc0051;
  font-size: 36px;
  font-weight: 600;
  line-height: 166%;
}
.profit-list__list {
  display: grid;
  margin-top: 30px;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: auto;
  gap: 10px;
}
.profit-list__item {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  border: 1px solid #214b33;
  opacity: 0;
  transition: opacity 0.5s ease-out;
}
.profit-list__item:nth-child(-n + 3) {
  grid-column: span 4; /* Первые три элемента занимают по 4 столбца */
}
.profit-list__item:nth-child(n + 4) {
  grid-column: span 6; /* Последние два элемента занимают по 6 столбцов */
}
.profit-list__item_text {
  color: #214b33;
  font-size: 24px;
  font-weight: 600;
  line-height: 166%;
  padding: 20px;
  align-items: center;
  text-align: left;
}
.profit-list__item.visible {
  opacity: 1;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .profit-list__title {
    font-size: 24px;
  }
  .profit-list__list {
    grid-auto-rows: auto; /* Автоматическая высота строк */
    grid-template-rows: repeat(4, 1fr);
  }

  .profit-list__item:nth-child(1) {
    grid-column: span 6; /* Занимает первые 6 столбцов */
    grid-row: 1; /* Первая строка */
  }

  .profit-list__item:nth-child(2) {
    grid-column: span 6; /* Занимает первые 6 столбцов */
    grid-row: 2; /* Вторая строка */
  }

  .profit-list__item:nth-child(3) {
    grid-column: 7 / span 6; /* Начинается с 7-го столбца и занимает последние 6 столбцов */
    grid-row: 1 / span 2; /* Занимает первую и вторую строки */
  }

  .profit-list__item:nth-child(4) {
    grid-column: span 6; /* Занимает первые 6 столбцов */
    grid-row: 3 / span 2; /* Занимает третью и четвертую строки */
  }

  .profit-list__item:nth-child(5) {
    grid-column: 7 / span 6; /* Начинается с 7-го столбца и занимает последние 6 столбцов */
    grid-row: 3 / span 2; /* Занимает третью и четвертую строки */
  }
  .profit-list__item_text {
    font-size: 18px;
  }
}
@media only screen and (max-width: 767px) {
  .profit-list {
    margin-top: 60px;
  }

  .profit-list__title {
    font-size: 24px;
  }

  .profit-list__item {
    align-items: start;
    justify-content: start;
    text-align: left;
  }
  .profit-list__item:nth-child(-n + 5) {
    grid-column: span 12; /* Первые три элемента занимают по 4 столбца */
  }

  .profit-list__item:nth-child(3) {
    grid-row: 2;
  }

  .profit-list__item_text {
    display: flex;
    font-size: 18px;
    padding: 10px 10px;
  }
}
</style>
