<template>
  <section class="other_services">
    <h5 class="other_services__title">{{ $t("other_services.title") }}</h5>
    <ul class="other_services__list">
      <li class="other_services__item large">
        <img
          class="other_services__item_img desktop-tablet"
          src="@/assets/img/customers.png"
          alt="UFF for retail customers"
        />
        <img
          class="other_services__item_img mobile"
          src="@/assets/img/customers-mini.png"
          alt="UFF for retail customers"
        />
        <div class="other_services__item_btn nowrap">
          <a href="https://unco.club" target="_blank">
            <button class="btn">
              {{ $t("other_services.retail_customers") }}
            </button>
          </a>
        </div>
      </li>
      <li class="other_services__item medium">
        <img
          class="other_services__item_img"
          src="@/assets/img/exchange.png"
          alt="UFF exchange"
        />
        <div class="other_services__item_btn">
          <a href="https://unco.market" target="_blank">
            <button class="btn">{{ $t("other_services.exchange") }}</button>
          </a>
        </div>
      </li>
      <li class="other_services__item medium">
        <img
          class="other_services__item_img"
          src="@/assets/img/image_nft.png"
          alt="UNCO NFT888"
        />
        <div class="other_services__item_btn">
          <a href="https://unco.market" target="_blank">
            <button class="btn">{{ $t("other_services.nft888") }}</button>
          </a>
        </div>
      </li>
      <li class="other_services__item medium">
        <img
          class="other_services__item_img"
          src="@/assets/img/investor.png"
          alt="UFF for investors"
        />
        <div class="other_services__item_btn height">
          <a href="https://foodnft.org" target="_blank">
            <button class="btn">{{ $t("other_services.investors") }}</button>
          </a>
        </div>
      </li>
      <li class="other_services__item medium">
        <img
          class="other_services__item_img"
          src="@/assets/img/Ecopoints.png"
          alt="Ecopoints"
        />
        <div class="other_services__item_btn height">
          <a href="https://unco.market" target="_blank">
            <button class="btn">{{ $t("other_services.ecopoints") }}</button>
          </a>
        </div>
      </li>
      <li class="other_services__item medium">
        <img
          class="other_services__item_img"
          src="@/assets/img/E-commerce.png"
          alt="UFF for E-commerce"
        />
        <div class="other_services__item_btn height">
          <a href="https://foodnft.org" target="_blank">
            <button class="btn">{{ $t("other_services.ecommerce") }}</button>
          </a>
        </div>
      </li>
      <li class="other_services__item medium">
        <img
          class="other_services__item_img"
          src="@/assets/img/producers.png"
          alt="UFF for producers"
        />
        <div class="other_services__item_btn height">
          <a href="https://foodnft.org" target="_blank">
            <button class="btn">{{ $t("other_services.producers") }}</button>
          </a>
        </div>
      </li>
    </ul>
  </section>
</template>
  
  <script>
import { useI18n } from "vue-i18n";

export default {
  name: "OtherServices",
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
};
</script>
  <style scoped>
@import url("../assets/common-styles.css");
.other_services {
  margin-top: 100px;
}
.other_services__item {
  position: relative;
}
.other_services__title {
  color: #bc0051;
  font-size: 36px;
  font-weight: 600;
  line-height: 166%;
  margin-bottom: 30px;
}
.other_services__list {
  display: grid;
  margin-top: 30px;
  grid-template-columns: repeat(12, 1fr); /* 4 столбца */
  grid-auto-rows: minmax(50px, auto); /* Автоматическая высота строк */
  gap: 10px;
}
.other_services__item_img {
  width: 100%;
}
.other_services__item_btn {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: block;
}
.other_services__item_btn >a > .btn{
  font-size: 30px;
}
.large {
  grid-column: span 6; /* Блок 1 занимает 6 столбцов */
}
.medium {
  grid-column: span 3; /* Блоки 2-7 занимают по 3 столбца */
}
.other_services__item.large .btn {
  width: 100%;
}
.other_services__item.medium .btn {
  width: 100%;
}
.height > a > .btn {
  height: 92px;
}
.mobile {
  display: none;
}

@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .other_services__title {
    font-size: 24px;
  }
  .other_services__list {
    grid-template-columns: repeat(2, 1fr);
  }

  .large {
    grid-column: span 6; /* Блок 1 занимает 6 столбцов */
  }

  .medium {
    grid-column: span 3; /* Блоки 2-7 занимают по 3 столбца */
  }

  .other_services__item.large .btn {
    width: 100%;
  }
  .other_services__item.medium .btn {
    width: 100%;
  }
  .mobile {
    display: none;
  }
}
@media only screen and (max-width: 767px) {
  .other_services {
    margin-top: 60px;
  }
  .other_services__title {
    font-size: 24px;
  }
  .other_services__list {
    display: flex; /* Используем flex-контейнер */
    flex-direction: column;
    gap: 30px;
    margin-top: 20px;
  }

  .other_services__item {
    flex: 1;
  }
  .other_services__item_btn {
    bottom: -10px;
  }
  .other_services__item_btn > a > .btn {
    font-size: 18px;
    padding: 10px 20px;
  }
  .height > a > .btn {
    height: auto;
  }
  .nowrap {
    flex-wrap: nowrap;
  }
  .desktop-tablet {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>
