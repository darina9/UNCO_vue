<template>
  <section class="banner-farmer">
    <img
      class="banner-farmer__img"
      src="@/assets/img/image_shop_unco.png"
      alt="Shop Unco"
    />
    <div class="banner-farmer__right">
      <ul class="banner-farmer__list">
        <li class="banner-farmer__item banner-farmer_column item-1">
          <h2 class="banner-farmer__item_title">67 €</h2>
          <p class="banner-farmer__item_text">
            {{ $t("banner_farmer.average_order_value_text") }}
          </p>
        </li>
        <li class="banner-farmer__item banner-farmer_column item-2">
          <h2 class="banner-farmer__item_title">54.8%</h2>
          <p class="banner-farmer__item_text">
            {{ $t("banner_farmer.average_markup_text") }}
          </p>
        </li>
        <li class="banner-farmer__item banner-farmer_flex item-3">
          <h2 class="banner-farmer__item_title">2.4</h2>
          <p class="banner-farmer__item_text">
            {{ $t("banner_farmer.orders_per_month_text") }}
          </p>
        </li>
      </ul>
      <p class="banner-farmer__footnote">{{ $t("banner_farmer.footnote") }}</p>
    </div>
  </section>
</template>
  
  
  <script>
import { useI18n } from "vue-i18n";

export default {
  name: "BannerFarmer",
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
};
</script>
  <style >
@import url("../assets/common-styles.css");
.banner-farmer {
  display: flex;
  gap: 10px;
  margin-top: 100px;
}
.banner-farmer__img {
  height: auto;
  width: 903px;
}
.banner-farmer__list {
  gap: 90px;
  display: flex;
  flex-direction: column;
}
.banner-farmer__item_title {
  color: #bc0051;
  font-size: 96px;
  font-weight: 800;
}
.banner-farmer__item_text {
  color: #000;
  font-size: 18px;
  font-weight: 600;
  line-height: 166%;
}
.banner-farmer_flex {
  gap: 20px;
  padding: 20px 10px;
}
.banner-farmer_column {
  flex-direction: column;
  align-items: center;
}
.item-2 > .banner-farmer__item_text {
  margin-left: 30px;
}
.banner-farmer__item {
  position: relative;

  display: flex;
  align-items: center;
}
.banner-farmer__footnote {
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 166%;
  margin-top: 7px;
}
.banner-farmer__item::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 104px;
  height: 104px;
  background-image: url("../assets/img/Vector\ 19.svg");
  background-size: cover;
}
.banner-farmer__item::before {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 104px;
  height: 104px;
  background-image: url("../assets/img/Vector\ 20.svg");
  background-size: cover;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .banner-farmer {
    flex-direction: column;
  }
  .banner-farmer__img {
    width: 688px;
  }
  .banner-farmer__right {
    position: relative;
    margin-top: 20px;
  }

  .banner-farmer__list {
    display: grid;
    gap: 0px; /* Расстояние между элементами */
    grid-template-columns: repeat(12, 1fr); /* Две колонки */
    grid-template-rows: auto; /* Две строки, высота определяется содержимым */
  }

  .banner-farmer__item {
    position: relative;
    padding: 20px;
    display: flex;
    align-items: center;
  }
  .banner-farmer_flex {
    flex-direction: column;
  }

  .item-1 {
    grid-column: 1 / 6;
    grid-row: 1 / 2;
    justify-content: flex-end;
  }

  .item-2 {
    grid-column: 7 / 13;
    grid-row: 1 / 2;
    justify-content: flex-end;
  }

  .item-3 {
    grid-column: 5 / 13;
    grid-row: 2 / 3;
    justify-content: flex-end;
    flex-direction: row;
    margin-top: 40px;
  }
}
@media only screen and (max-width: 767px) {
  .banner-farmer {
    margin-top: 0;
    flex-direction: column;
    gap: 10px;
  }
  .banner-farmer__img {
    height: auto;
    width: 302px;
  }
  .banner-farmer__list {
    gap: 40px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .banner-farmer__item_title {
    font-size: 40px;
    font-weight: 600;
    line-height: 190%;
  }

  .banner-farmer__item_text {
    font-size: 14px;
    font-weight: 400;
  }

  .banner-farmer__item {
    padding: 20px 33px;
  }
  .banner-farmer__footnote {
    font-size: 14px;
  }
}
</style>
