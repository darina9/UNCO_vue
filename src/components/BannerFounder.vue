<template>
  <section class="banner-founder">
    <img
      class="banner-founder__foto"
      alt="Andrew Yusupov Founder UNCO"
      src="../assets/img/image andrew.png"
    />
    <div class="banner-founder__text">
      <blockquote>
        <p class="banner-founder__text_quote">
          {{ $t("banner_founder.quote") }}
        </p>
      </blockquote>
      <p class="banner-founder__text_autor">
        {{ $t("banner_founder.author") }}
      </p>
    </div>
  </section>
</template>
  <script>
import { useI18n } from "vue-i18n";

export default {
  name: "BannerFounder",
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
.banner-founder {
  margin-top: 68px;
  position: relative;
  padding: 40px 40px;
  display: flex;
  gap: 37px;
}
.banner-founder__foto {
  height: 300px;
}
.banner-founder__text_quote {
  color: #313131;
  font-size: 24px;
  font-weight: 600;
  line-height: 166%;
}
.banner-founder__text_autor {
  display: flex;
  justify-content: end;
  margin-top: 27px;
  color: #313131;
  text-align: center;
  padding-right: 50px;
  font-size: 14px;
  font-weight: 400;
  line-height: 166%;
}
.banner-founder::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 244px;
  height: 339px;
  background-image: url("../assets/img/Vector\ 18.svg");
  background-size: cover;
}
.banner-founder::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 244px;
  height: 339px;
  background-image: url("../assets/img/Vector\ 17.svg");
  background-size: cover;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .banner-founder {
    margin-top: 100px;
    padding: 20px 20px;
    gap: 20px;
    margin-bottom: 0;
  }
  .banner-founder__foto {
    height: 170px;
  }
  .banner-founder__text_quote {
    font-size: 18px;
  }
  .banner-founder__text_autor {
    margin-top: 0;
  }
  .banner-founder::after {
    width: 200px;
    height: 200px;
    background-image: url("../assets/img/Vector\ 18\ -midi.svg");
    z-index: 20;
  }
  .banner-founder::before {
    width: 200px;
    height: 200px;
    background-image: url("../assets/img/Vector\ 17.svg");
  }
}
@media only screen and (max-width: 767px) {
  .banner-founder {
    margin-top: 60px;
    padding: 0;
    flex-direction: column;
    gap: 0;
  }

  .banner-founder__foto {
    width: 282px;
    height: 218px;
    margin: 20px;
  }
  .banner-founder__text_quote {
    font-size: 18px;
  }
  .banner-founder__text_autor {
    margin-top: 0;
    padding-right: 20px;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .banner-founder::after {
    width: 100px;
    height: 100px;
    background-image: url("../assets/img/Vector\ 26.svg");
  }
  .banner-founder::before {
    width: 100px;
    height: 100px;
    background-image: url("../assets/img/Vector\ 25.svg");
  }
}
</style>
