<template>
  <section class="banner-img" id="banner-img">
    <img
      class="banner-img__img"
      src="../assets/img/farmer.png"
      alt="Old farmer"
    />
    <div class="banner-img__text">
      <p class="banner-img__text_title" v-html="$t('banner_img.title')"></p>
      <div class="banner-img__text_btn">
        <button class="btn">
          <a href="https://www.unco.club/">{{ $t("banner_img.button") }}</a>
        </button>
      </div>
    </div>
    <button id="scroll-to-top">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
      >
        <g clip-path="url(#clip0_201_52)">
          <path
            class="path_1"
            d="M53.3333 0C55.1014 0 56.7971 0.702377 58.0474 1.95262C59.2976 3.20286 60 4.89856 60 6.66666L60 53.3333C60 55.1014 59.2976 56.7971 58.0474 58.0474C56.7971 59.2976 55.1014 60 53.3333 60L6.66667 60C4.89856 60 3.20286 59.2976 1.95262 58.0474C0.702379 56.7971 0 55.1014 0 53.3333L0 6.66666C0 4.89856 0.702379 3.20286 1.95262 1.95262C3.20286 0.702377 4.89856 0 6.66667 0L53.3333 0Z"
            fill="#BC0051"
          />
          <path
            d="M23.3327 48.3334V33.3334H11.666L29.9994 11.6667L48.3327 33.3334H36.666V48.3334H23.3327Z"
            fill="#FEFFFA"
          />
        </g>
        <defs>
          <clipPath id="clip0_201_52">
            <rect
              width="60"
              height="60"
              fill="white"
              transform="matrix(0 -1 1 0 0 60)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  </section>
</template>
  <script>
import { onMounted } from "vue";

export default {
  name: "BannerImg",
  setup() {
    onMounted(() => {
      const scrollToTopButton = document.getElementById("scroll-to-top");
      const bannerImg = document.getElementById("banner-img");
      const bannerHeight = bannerImg.offsetHeight;

      window.addEventListener("scroll", function () {
        if (window.scrollY > bannerHeight && window.innerWidth > 767) {
          scrollToTopButton.style.display = "block";
        } else {
          scrollToTopButton.style.display = "none";
        }
      });

      scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    });
  },
};
</script>
  <style >
@import url("../assets/common-styles.css");
.banner-img {
  position: relative;
  margin-top: 140px;
  display: flex;
}
.banner-img__img {
  padding: 40px;
}
.text-pink {
  color: #bc0051;
}
.banner-img__text_title {
  font-size: 36px;
  font-weight: 600;
  line-height: 166%;
}
.banner-img__text {
  padding-top: 25px;
  padding-right: 114px;
}
.banner-img__text_btn {
  margin-top: 40px;
  display: flex;
  justify-content: end;
}
.banner-img::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 300px;
  background-image: url("../assets/img/Vector\ 16.svg");
  background-size: cover;
}
.banner-img::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  background-image: url("../assets/img/Vector\ 15.svg");
  background-size: cover;
}
#scroll-to-top {
  display: none; /* Скрыто по умолчанию */
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;
}
#scroll-to-top svg {
  width: 40px;
  height: 40px;
}
#scroll-to-top:hover .path_1 {
  fill: #a2c33d;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .banner-img {
    margin-top: 100px;
  }
  .banner-img__img {
    padding: 30px;
    width: 277px;
    height: 230px;
  }
  .banner-img__text_title {
    font-size: 24px;
  }
  .banner-img__text {
    padding-right: 0;
  }

  .banner-img__text_btn {
    width: 300px;
    padding-left: 44px;
  }
  .banner-img::after {
    width: 200px; /* Ширина уголка */
    height: 200px; /* Высота уголка */
  }
  .banner-img::before {
    width: 200px; /* Ширина уголка */
    height: 200px; /* Высота уголка */
  }
  #scroll-to-top {
    top: 20px;
    right: 0;
    width: 40px;
    height: 40px;
  }
}
@media only screen and (max-width: 767px) {
  .banner-img {
    position: relative;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
  }
  .banner-img__img {
    padding: 20px;
    width: 281px;
    height: 220px;
  }
  .text-pink {
    color: #bc0051;
  }
  .banner-img__text_title {
    font-size: 24px;
    font-weight: 600;
    line-height: 166%;
  }
  .banner-img__text {
    padding-top: 20px;
    padding-right: 0;
  }
  .banner-img__text_btn {
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    width: 280px;
  }
  .banner-img::after {
    content: "";
    position: absolute;
    bottom: -20px;
    right: 0;
    width: 100px; /* Ширина уголка */
    height: 100px; /* Высота уголка */
    background-image: url("../assets/img/Vector\ 16-mini.svg"); /* Путь к SVG-файлу */
    background-size: cover; /* Масштабирование фонового изображения */
  }
  .banner-img::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100px; /* Ширина уголка */
    height: 100px; /* Высота уголка */
    background-image: url("../assets/img/Vector\ 15-mini.svg"); /* Путь к SVG-файлу */
    background-size: cover; /* Масштабирование фонового изображения */
  }
}
</style>
