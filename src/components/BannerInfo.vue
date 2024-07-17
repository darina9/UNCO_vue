<template>
  <section class="banner-info">
    <div class="banner-info__title">
      <img class="banner-info__title_img" src="../assets/img/Logo_banner.png" alt="FOOD FUTURES" />
      <img class="banner-info__title_img-midi" src="../assets/img/Logo_banner_midi.png" alt="FOOD FUTURES" />
      <img class="banner-info__title_img-mini" src="../assets/img/Logo_banner_mini.png" alt="FOOD FUTURES" />
      <h4 class="banner-info__title_text title-semibold">{{ $t('banner-info.title') }}</h4>
    </div>
    
    <div class="banner-info__btn">
      <button class="btn" @click="scrollToFooter">{{ $t('banner-info.button') }}</button>
    </div>
    
    <div class="banner-info__quote">
      <div class="banner-info__quote_left">
        <blockquote>
          <h7 class="banner-info__quote_text title-semibold">{{ $t('banner-info.quote.text') }}</h7>
        </blockquote>
        <h9 class="banner-info__quote_autor">{{ $t('banner-info.quote.author') }}</h9>
      </div>
      <img class="banner-info__quote_img" src="../assets/img/Larry.png" alt="Larry Fink CEO BlackRock" />
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'BannerInfo',
  setup() {
    const { t } = useI18n();

    const scrollToFooter = () => {
      const footer = document.getElementById('footer');
      console.log('Footer element:', footer);
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error('Footer element not found');
      }
    };

    return {
      t,
      scrollToFooter,
    };
  },
};
</script>

  <style>
  @import url("../assets/common-styles.css");
  .banner-info {
  margin-top: 40px;
  position: relative;
}
.banner-info__title {
  display: flex;
  gap: 30px;
  align-items: center;
  padding: 0 20px;
}
.banner-info::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 300px; /* Ширина уголка */
  height: 300px; /* Высота уголка */
  background-image: url("../assets/img/Vector\ 14.svg"); /* Путь к SVG-файлу */
  background-size: cover; /* Масштабирование фонового изображения */
  z-index: -1;
}
.banner-info::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 300px; /* Ширина уголка */
  height: 300px; /* Высота уголка */
  background-image: url("../assets/img/Vector\ 13.svg"); /* Путь к SVG-файлу */
  background-size: cover; /* Масштабирование фонового изображения */
}
.banner-info__title_img-midi {
  display: none;
}
.banner-info__title_img-mini {
  display: none;
}
.banner-info__title_text {
  color: #313131;
  font-size: 40px;
  line-height: 190%;
}
.btn {
  display: flex;
  border-radius: 8px;
  border: none;
  background: #bc0051;
  padding: 10px 0;
  color: #fefffa;
  font-size: 32px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  width: 447px;
  box-shadow: none !important;
  cursor: pointer;
}
.btn:hover {
  background: #a2c33d;
}
.banner-info__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}
.banner-info__quote {
  margin-top: 124px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}
.banner-info__quote_autor {
  display: flex;
  justify-content: end;
  margin-top: 27px;
  
}
.banner-info__quote_left {
  max-width: 41%;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
.banner-info__title {
    flex-direction: column;
    padding: 0 40px;
  }
  .banner-info__title_text {
    text-align: center;
  }
  .banner-info::after {
    top: 10px;
  }

  .banner-info__title_img {
    display: none;
  }
  .banner-info__title_img-midi {
    display: block;
  }

  .banner-info__btn {
    margin-top: 0;
  }

  .banner-info__quote {
    margin-top: 42px;
    justify-content: flex-start;
    
  }
  .banner-info__quote_autor {
  margin-bottom: 8px;
  
}
  .banner-info__quote_left {
    max-width: 100%;
    padding-left: 50px;
  }}
  @media only screen and (max-width: 767px) {
    .banner-info {
    margin-top: 20px;
  }
  .banner-info__title {
    flex-direction: column;
    gap: 0;

    padding: 20px 0;
  }
  .banner-info__title_img-mini {
    display: block;
  }

  .banner-info::after {
    right: -5px;
    width: 100px;
    height: 100px;
    background-image: url("../assets/img/Vector\ 14_mini.svg");
    z-index: 1;
    stroke-width: 140px;
  }
  .banner-info::before {
    top: 400px;
    left: -5px;
    width: 100px;
    height: 100px;
    background-image: url("../assets/img/Vector\ 13_mini.svg");
  }
  .banner-info__title_img-midi {
    display: none;
  }
  .banner-info__title_img {
    display: none;
  }
  .banner-info__title_text {
    font-size: 18px;
    font-weight: 600;
    line-height: 166%;
    text-align: center;
  }
  .banner-info__btn {
    margin-top: 10px;
    position: relative;
  }

  .banner-info__quote {
    margin-top: 170px;
    display: flex;
    flex-direction: column;
    width: 100%;

    gap: 10px;
  }
  .banner-info__quote_text {
    font-size: 18px;
  }
  .banner-info__quote_autor {
    display: flex;
    justify-content: flex-start;
    margin-top: 60px;
    font-size: 14px;
    width: 50%;
  }
  .banner-info__quote_left {
    max-width: 100%;
  }
  .banner-info__quote_img {
    position: absolute;
    bottom: 2px;
    width: 80px;
    right: 0;
  }
  }

</style>
