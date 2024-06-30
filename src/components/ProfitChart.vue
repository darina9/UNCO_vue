<template>
  <section class="profit-chart">
    <div class="profit-chart__text">
      <h3 class="profit-chart__text_info">
        {{ $t('profit_chart.info') }}
      </h3>
      <ul class="profit-chart__text_list">
        <li class="profit-chart__text_item" v-for="(item, index) in items" :key="index">
          <img :class="item.class" :src="require(`../assets/img/apple.svg`)" alt="icon-profit" width="24" height="40">
          <h6 class="profit-chart__text_item-text" v-html="item.text"></h6>
        </li>
      </ul>
    </div>
    <div class="profit-chart__img">
      <img :src="imgSrc" :class="['profit-chart__img', imgClass]" alt="profit chart" />
    </div>
  </section>
</template>
  
<script>
import { useI18n } from 'vue-i18n';
import { ref, watch, computed, onMounted, onUnmounted } from 'vue';

export default {
  name: 'ProfitChart',
  setup() {
    const { t, locale } = useI18n();
    const items = ref([]);

    const updateItems = () => {
      items.value = [
        {
          class: 'apple-exp',
          text: t('profit_chart.items.0')
        },
        {
          class: '',
          text: t('profit_chart.items.1')
        },
        {
          class: 'apple-exp-mob',
          text: t('profit_chart.items.2')
        }
      ];
    };

    const currentLang = computed(() => locale.value);

    const getImgSrc = () => {
      if (window.innerWidth >= 1440) {
        return require(`../assets/img/profit_chart_${currentLang.value}.svg`);
      } else if (window.innerWidth >= 768) {
        return require(`../assets/img/profit_chart_${currentLang.value}-midi.svg`);
      } else {
        return require(`../assets/img/profit_chart_${currentLang.value}-mini.svg`);
      }
    };

    const getImgClass = () => {
      if (window.innerWidth >= 1440) {
        return 'big';
      } else if (window.innerWidth >= 768) {
        return 'midi';
      } else {
        return 'mini';
      }
    };

    const imgSrc = ref(getImgSrc());
    const imgClass = ref(getImgClass());

    const updateImg = () => {
      imgSrc.value = getImgSrc();
      imgClass.value = getImgClass();
    };

    watch(locale, updateItems, { immediate: true });
    watch([currentLang, () => window.innerWidth], updateImg, { immediate: true });

    onMounted(() => {
      window.addEventListener('resize', updateImg);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateImg);
    });

    return {
      t,
      items,
      imgSrc,
      imgClass
    };
  }
};
</script>

<style >
@import url("../assets/common-styles.css");
.profit-chart {
  margin-top: 148px;
}
.profit-chart__text {
  display: flex;
  align-items: center;
  gap: 10px;
}


.profit-chart__text_list {
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 30px;
}
.profit-chart__text_info {
  height: 300px;
  color: #214b33;
  font-size: 48px;
  font-weight: 600;
  line-height: 166%;
  flex: 1;
  box-sizing: border-box;
  background-image: url("../assets/img/bg-logo.png");
  background-position: bottom center;
  background-repeat: no-repeat;
  padding-top: 40px;
}
.profit-chart__text_item {
  display: flex;
  gap: 14px;
  align-items: start;
}

.profit-chart__text_item-text {
  color: #000;
  font-size: 24px;
  font-weight: 600;
  line-height: 166%;
}
.profit-chart__img {
  margin-top: 100px;
  display: flex;
  justify-content: center;
}

.profit-chart__img-big,
.profit-chart__img-midi,
.profit-chart__img-mini {
  display: none;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
    .profit-chart {
    margin-top: 0;
  }
  .profit-chart__text {
    flex-direction: column;
  }

  .profit-chart__text_list {
    padding-top: 10px;
  }
  .profit-chart__text_info {
    width: 100%;
    min-height: 300px;
    font-size: 36px;
    padding-top: 0;
    display: flex;
    align-items: center;
  }
  .profit-chart__text_item-text {
    font-size: 18px;
  }
  .profit-chart__img-midi {
    display: block;
  }

}
@media only screen and (max-width: 767px) {
    .profit-chart {
    margin-top: 78px;
  }
  .profit-chart__text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
 
  .profit-chart__text_list {
    /* flex: 1; */
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 30px;
  }
  .profit-chart__text_info {
    background-size: 100% auto;
    color: #214b33;
    font-size: 24px;
    font-weight: 600;
    line-height: 166%;
    flex: 1; /* Каждый элемент займет 50% ширины родительского блока */
    box-sizing: border-box;
    background-image: url("../assets/img/bg-logo.png");
    background-position: bottom center;
    background-repeat: no-repeat;
    padding-top: 40px;
  }
  .profit-chart__text_item {
    display: flex;
    gap: 20px;
    align-items: center;
    text-align: start;
  }

  .profit-chart__text_item-text {
    color: #000;
    font-size: 18px;
    font-weight: 600;
    line-height: 166%;
  }
 
  .profit-chart__img {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
  .profit-chart__img-mini {
    display: block;
    
  }
}
</style>  