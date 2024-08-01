<template>
  <section class="blockchain-contracts">
    <p class="blockchain-contracts__title">
      {{ $t("blockchain-contracts.title") }}
    </p>
    <ul class="blockchain-contracts__list" ref="list">
      <li
        class="blockchain-contracts__item"
        v-for="(item, index) in items"
        :key="index"
        :data-order-desktop="item.orderDesktop"
        :data-order-mobile="item.orderMobile"
        :data-order-tablet="item.orderTablet"
        :class="{ visible: item.visible }"
      >
        <p class="blockchain-contracts__item_text">
          {{ $t(`blockchain-contracts.items.${index}`) }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "BlockchainContracts",
  setup() {
    const { t, locale } = useI18n();
    const items = ref([
      {
        text: "Fast",
        orderDesktop: 1,
        orderMobile: 1,
        orderTablet: 1,
        visible: false,
      },
      {
        text: "Secure",
        orderDesktop: 2,
        orderMobile: 2,
        orderTablet: 2,
        visible: false,
      },
      {
        text: "Transparent and immutable",
        orderDesktop: 3,
        orderMobile: 3,
        orderTablet: 4,
        visible: false,
      },
      {
        text: "Worldwide technology",
        orderDesktop: 4,
        orderMobile: 4,
        orderTablet: 5,
        visible: false,
      },
      {
        text: "Cheap (even for small quantities of food)",
        orderDesktop: 5,
        orderMobile: 5,
        orderTablet: 6,
        visible: false,
      },
      {
        text: "Efficient with minimal intermediaries",
        orderDesktop: 6,
        orderMobile: 6,
        orderTablet: 3,
        visible: false,
      },
    ]);

    const list = ref(null);

    const observerOptions = {
      threshold: 0.1,
    };

    let observer;

    const createObserver = () => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let sortedItems = Array.from(list.value.children);

            const isTablet = window.matchMedia(
              "(max-width: 1439px) and (min-width: 768px)"
            ).matches;
            const isMobile = window.matchMedia("(max-width: 767px)").matches;

            sortedItems.sort((a, b) => {
              const orderA = isTablet
                ? parseInt(a.dataset.orderTablet)
                : isMobile
                ? parseInt(a.dataset.orderMobile)
                : parseInt(a.dataset.orderDesktop);
              const orderB = isTablet
                ? parseInt(b.dataset.orderTablet)
                : isMobile
                ? parseInt(b.dataset.orderMobile)
                : parseInt(b.dataset.orderDesktop);
              return orderA - orderB;
            });

            let delay = 0;

            sortedItems.forEach((item, index) => {
              setTimeout(() => {
                items.value[index].visible = true;
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

    const updateItems = () => {
      items.value.forEach((item) => {
        item.visible = false;
      });

      createObserver();
    };

    onMounted(() => {
      createObserver();
    });

    onUnmounted(() => {
      disconnectObserver();
    });

    watch(locale, () => {
      updateItems();
    });

    return {
      t,
      items,
      list,
    };
  },
};
</script>
  
  <style >
@import url("../assets/common-styles.css");
.blockchain-contracts {
  margin-top: 100px;
}
.blockchain-contracts__title {
  color: #214b33;
  font-size: 36px;
  font-weight: 600;
  line-height: 166%;
  width: 50%;
}
.blockchain-contracts__list {
  display: grid;
  margin-top: 30px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  gap: 10px;
}
.blockchain-contracts__item {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  border: 1px solid #214b33;
  opacity: 0;
  transition: opacity 0.5s ease-out;
}
.blockchain-contracts__item_text {
  color: #214b33;
  font-size: 24px;
  font-weight: 600;
  line-height: 166%;
  padding: 20px 40px;
}
.blockchain-contracts__item:nth-child(1) {
  grid-column: span 2; /* 4 столбца */
  grid-row: 1; /* Первая строка */
}
.blockchain-contracts__item:nth-child(2) {
  grid-column: span 2; /* 4 столбца */
  grid-row: 1; /* Первая строка */
}
.blockchain-contracts__item:nth-child(3) {
  grid-column: span 4; /* 4 столбца */
  grid-row: 1; /* Первая строка */
}
.blockchain-contracts__item:nth-child(4) {
  grid-column: span 4; /* 6 столбцов */
  grid-row: 1; /* Вторая строка */
}
.blockchain-contracts__item:nth-child(5) {
  grid-column: span 6; /* 6 столбцов */
  grid-row: 2; /* Вторая строка */
}
.blockchain-contracts__item:nth-child(6) {
  grid-column: span 6; /* 12 столбцов */
  grid-row: 2; /* Третья строка */
}
.blockchain-contracts__item.visible {
  opacity: 1;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .blockchain-contracts__title {
    font-size: 24px;
    width: 80%;
  }
  .blockchain-contracts__list {
    grid-template-rows: repeat(3, auto);
    gap: 5px;
    padding: 0;
  }

  .blockchain-contracts__item {
    padding-left: 10px;
  }
  .blockchain-contracts__item_text {
    font-size: 18px;
    padding: 10px 0;
  }
  .blockchain-contracts__item:nth-child(1) {
    grid-column: span 3;
    grid-row: 1;
  }
  .blockchain-contracts__item:nth-child(2) {
    grid-column: span 3;
    grid-row: 1;
  }
  .blockchain-contracts__item:nth-child(6) {
    grid-column: span 6;
    grid-row: 1;
  }
  .blockchain-contracts__item:nth-child(3) {
    grid-column: span 6;
    grid-row: 2;
  }
  .blockchain-contracts__item:nth-child(4) {
    grid-column: span 6;
    grid-row: 2;
  }
  .blockchain-contracts__item:nth-child(5) {
    grid-column: span 12;
    grid-row: 3;
  }
}
@media only screen and (max-width: 767px) {
  .blockchain-contracts {
    margin-top: 60px;
  }
  .blockchain-contracts__title {
    color: #214b33;
    font-size: 18px;
    font-weight: 600;
    line-height: 166%;
    width: 100%;
  }
  .blockchain-contracts__list {
    display: grid;
    margin-top: 20px;
    grid-template-columns: repeat(12, 1fr);
    /* grid-auto-rows: minmax(50px, auto);  */
    grid-template-rows: auto;
    gap: 10px;
  }

  .blockchain-contracts__item {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 20px;
    border: 1px solid #214b33;
  }
  .blockchain-contracts__item_text {
    color: #214b33;
    font-size: 18px;
    font-weight: 600;
    line-height: 166%;
    padding: 10px 20px;
  }

  .blockchain-contracts__item:nth-child(1) {
    grid-column: span 6; /* 4 столбца */
    grid-row: 1; /* Первая строка */
  }

  .blockchain-contracts__item:nth-child(2) {
    grid-column: span 6; /* 4 столбца */
    grid-row: 1; /* Первая строка */
  }

  .blockchain-contracts__item:nth-child(3) {
    grid-column: span 12; /* 4 столбца */
    grid-row: 2; /* Первая строка */
  }

  .blockchain-contracts__item:nth-child(4) {
    grid-column: span 12; /* 6 столбцов */
    grid-row: 3; /* Вторая строка */
  }

  .blockchain-contracts__item:nth-child(5) {
    grid-column: span 12; /* 6 столбцов */
    grid-row: 4; /* Вторая строка */
  }

  .blockchain-contracts__item:nth-child(6) {
    grid-column: span 12; /* 12 столбцов */
    grid-row: 5; /* Третья строка */
  }
}
</style>
