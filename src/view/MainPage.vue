<template>
  <div>
    <PreloaderComponent
      v-if="showPreloader"
      :lang="lang"
      @loaded="handlePreloaderLoaded"
    />
    <div v-else class="main-content" :class="{ 'fade-in': !showPreloader }">
      <HeaderComponent />
      <main class="center">
        <BannerInfo />
        <BlockchainContracts />
        <BannerImg />
        <ProfitChart />
        <ProfitList />
        <BannerWatch />
        <BannerFounder />
        <ChartsDifference />
        <WorkflowAlgorithm />
        <BannerFarmer />
        <FaqList />
        <OtherServices />
      </main>
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import PreloaderComponent from "@/components/PreloaderComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import BannerInfo from "@/components/BannerInfo.vue";
import BlockchainContracts from "@/components/BlockchainContracts.vue";
import BannerImg from "@/components/BannerImg.vue";
import ProfitChart from "@/components/ProfitChart.vue";
import ProfitList from "@/components/ProfitList.vue";
import BannerWatch from "@/components/BannerWatch.vue";
import BannerFounder from "@/components/BannerFounder.vue";
import ChartsDifference from "@/components/ChartsDifference.vue";
import WorkflowAlgorithm from "@/components/WorkflowAlgorithm.vue";
import BannerFarmer from "@/components/BannerFarmer.vue";
import FaqList from "@/components/FaqList.vue";
import OtherServices from "@/components/OtherServices.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "MainPage",
  components: {
    PreloaderComponent,
    HeaderComponent,
    BannerInfo,
    BlockchainContracts,
    BannerImg,
    ProfitChart,
    ProfitList,
    BannerWatch,
    BannerFounder,
    ChartsDifference,
    WorkflowAlgorithm,
    BannerFarmer,
    FaqList,
    OtherServices,
    FooterComponent,
  },
  setup() {
    const route = useRoute();
    const showPreloader = ref(true); // Переменная для отображения прелоадера
    const lang = ref(route.params.lang); // Язык из параметров маршрута

    const handlePreloaderLoaded = () => {
      showPreloader.value = false; // Скрываем прелоадер после завершения
      console.log("Handling preloader loaded");
    };

    onMounted(() => {
      console.log("MainPage mounted with language:", lang.value);
    });

    return {
      showPreloader,
      lang,
      handlePreloaderLoaded,
    };
  },
};
</script>

<style>
@import url("../assets/common-styles.css");


.main-content {
  opacity: 0;
  transition: opacity 0.5s ease-in;
}

.main-content.fade-in {
  opacity: 1;
}
</style>




