<template>
   <div :class="['main-page', { 'fade-in': fadeIn }]">
    <HeaderComponent/>
    <main class="center">
    <BannerInfo />
    <BlockchainContracts/>
    <BannerImg/>
    <ProfitChart/>
    <ProfitList/>
    <BannerWatch/>
    <BannerFounder/>
    <ChartsDifference/>
    <WorkflowAlgorithm/>
    <BannerFarmer/>
    <FaqList/>
    <OtherServices/>
    </main>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import BannerInfo from '../components/BannerInfo.vue'
import BlockchainContracts from '../components/BlockchainContracts.vue'
import BannerImg from '../components/BannerImg.vue'
import ProfitChart from '../components/ProfitChart.vue'
import ProfitList from '../components/ProfitList.vue'
import BannerWatch from '../components/BannerWatch.vue';
import BannerFounder from '../components/BannerFounder.vue'
import ChartsDifference from '../components/ChartsDifference.vue'
import WorkflowAlgorithm from '@/components/WorkflowAlgorithm.vue'
import BannerFarmer from '@/components/BannerFarmer.vue'

import FaqList from '../components/FaqList.vue'
import OtherServices from '../components/OtherServices.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'MainPage',
  components: {
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
    FooterComponent
  },
  data() {
    return {
      fadeIn: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.fadeIn = true;
    }, 200); // Delay for fade-in effect
  }
};

</script>

<style >@import url("../assets/common-styles.css");
.main-page {
  opacity: 0;
  transition: opacity 0.5s ease-in;
}

.main-page.fade-in {
  opacity: 1;
}
</style>

<style >@import url("../assets/common-styles.css");
</style>
