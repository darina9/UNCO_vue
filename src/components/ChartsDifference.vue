<template>
  <section class="charts-difference">
    <p class="charts-difference__title">
      {{ $t("charts_difference.title") }}
    </p>
    <div class="charts-difference__imgs">
      <div class="charts-difference__imgs_left">
        <img
          class="charts-difference__imgs_img"
          src="../assets/img/image_potatoes.png"
          alt="Potatoes"
        />
        <p class="charts-difference__imgs_title">
          {{ $t("charts_difference.potatoes_title") }}
        </p>
        <img
          class="charts-difference__imgs_chart"
          :src="potatoesChartSrc"
          alt="chart potatoes"
        />
      </div>
      <div class="chart-difference__imgs_right">
        <div class="charts-difference__imgs_left">
          <img
            class="charts-difference__imgs_img"
            src="../assets/img/image_peaches.png"
            alt="peaches"
          />
          <p class="charts-difference__imgs_title">
            {{ $t("charts_difference.peaches_title") }}
          </p>
          <img
            class="charts-difference__imgs_chart"
            :src="peachesChartSrc"
            alt="chart peaches"
          />
        </div>
      </div>
    </div>
    <div class="chart-difference__btn">
      <button class="btn btn-big" @click="scrollToFooter">
        {{ $t("charts_difference.button") }}
      </button>
    </div>
  </section>
</template>

<script>
import { useI18n } from "vue-i18n";
import { ref, watch, computed, onMounted, onUnmounted } from "vue";

export default {
  name: "ChartsDifference",
  setup() {
    const { t, locale } = useI18n();
    const currentLang = computed(() => locale.value);

    const getChartSrc = (baseName) => {
      return require(`../assets/img/${baseName}_${currentLang.value}.png`);
    };

    const potatoesChartSrc = ref(getChartSrc("chart_potatoes"));
    const peachesChartSrc = ref(getChartSrc("chart_peaches"));

    const updateChartSrc = () => {
      potatoesChartSrc.value = getChartSrc("chart_potatoes");
      peachesChartSrc.value = getChartSrc("chart_peaches");
    };

    watch(currentLang, updateChartSrc);

    const scrollToFooter = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    };

    onMounted(() => {
      updateChartSrc();
    });

    return { t, potatoesChartSrc, peachesChartSrc, scrollToFooter };
  },
};
</script>

  <style>
@import url("../assets/common-styles.css");
.charts-difference {
  margin-top: 100px;
}
.charts-difference__title {
  color: #bc0051;
  font-size: 36px;
  font-weight: 600;
  line-height: 166%;
  width: 50%;
}
.charts-difference__imgs {
  display: flex;
  gap: 150px;
  margin-top: 30px;
}
.charts-difference__imgs_img {
  margin-left: 175px;
}
.charts-difference__imgs_title {
  margin-top: 10px;
  padding-left: 140px;
  color: #214b33;
  font-size: 24px;
  font-weight: 600;
  line-height: 166%;
}
.charts-difference__imgs_chart {
  margin-top: 10px;
}
.chart-difference__btn {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
.btn-big {
  width: 708px;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .charts-difference__title {
    font-size: 24px;
    width: 100%;
  }
  .charts-difference__imgs_left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .charts-difference__imgs {
    flex-direction: column;
    gap: 30px;
    margin-top: 20px;
  }
  .charts-difference__imgs_img {
    margin-left: 0px;
    display: flex;
    align-items: center;
    width: 200px;
    height: 200px;
  }
  .charts-difference__imgs_title {
    margin-top: 10px;
    padding-left: 0px;
    font-size: 18px;
  }

  .btn-big {
    font-size: 18px;
  }
}
@media only screen and (max-width: 767px) {
  .charts-difference {
    margin-top: 60px;
  }
  .charts-difference__title {
    font-size: 24px;
    width: 100%;
  }

  .charts-difference__imgs {
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
  }
  .charts-difference__imgs_left {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 0;
    align-items: center;
  }

  .charts-difference__imgs_chart {
    grid-column: 1 / span 2; /* Этот элемент будет занимать два столбца */
  }
  .charts-difference__imgs_img {
    margin-left: 0;
    width: 144px;
  }
  .charts-difference__imgs_title {
    padding-left: 0;
    font-size: 18px;
  }
  .charts-difference__imgs_chart {
    margin-top: 10px;
    width: 302px;
  }

  .chart-difference__btn {
    margin-top: 20px;
  }
  .chart-difference__btn > .btn {
    font-size: 18px;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 1.6;
  }
}
</style>
