<template>
  <section class="banner-watch" id="watch">
    <div class="banner-watch__info">
      <h5 class="banner-watch__info_title">{{ $t('banner_watch.title') }}</h5>
      <ul class="banner-watch__info_list">
        <li class="banner-watch__info_item" v-for="(item, index) in items" :key="index">
          <img class="svg" :src="require(`../assets/img/apple.svg`)" alt="icon-profit" width="24" height="40">
          <h6 class="banner-watch__info_text">{{ item }}</h6>
        </li>
      </ul>
    </div>
    <div class="banner-watch__time">
      <div class="banner-watch__time_timer" ref="countdown">10:00:00</div>
      <div class="banner-watch__time_btn">
        <button class="btn">
          <a href="#contacts">{{ $t('banner_watch.button') }}</a>
        </button>
      </div>
    </div>
  </section>
</template>
  
<script>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  name: 'BannerWatch',
  setup() {
    const { t, locale } = useI18n();
    const countdown = ref(null);
    const items = ref([]);

    const updateItems = () => {
      items.value = [
        t('banner_watch.items.0'),
        t('banner_watch.items.1'),
        t('banner_watch.items.2'),
        t('banner_watch.items.3'),
      ];
    };

    const updateCountdown = () => {
      if (countdown.value) {
        const timeParts = countdown.value.innerText.split(':');
        let hours = parseInt(timeParts[0]);
        let minutes = parseInt(timeParts[1]);
        let seconds = parseInt(timeParts[2]);

        seconds--;

        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }

        if (minutes < 0) {
          minutes = 59;
          hours--;
        }

        countdown.value.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(countdownInterval);
        }
      }
    };

    let countdownInterval;

    onMounted(() => {
      updateItems();
      countdownInterval = setInterval(updateCountdown, 1000);
    });

    onUnmounted(() => {
      clearInterval(countdownInterval);
    });

    watch(locale, updateItems);

    return {
      t,
      countdown,
      items
    };
  }
};
</script>

  <style >
  @import url("../assets/common-styles.css");
  .banner-watch {
  margin-top: 100px;
  display: flex;
  gap: 120px;
}
.banner-watch__info_title {
  color: #bc0051;
  font-size: 36px;
  font-weight: 600;
  line-height: 166%;
}
.banner-watch__info_list {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.banner-watch__info_item {
  display: flex;
  align-items: start;
  gap: 14px;
}
.banner-watch__info_text {
  color: #313131;
  font-size: 24px;
  font-weight: 600;
  line-height: 166%;
}
.banner-watch__time {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.banner-watch__time_timer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 45px;
  margin-bottom: 40px;
  position: relative;
  color: #214b33;
  font-size: 48px;
  font-weight: 600;
  line-height: 166%;
}
.banner-watch__time_timer::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background-image: url("../assets/img/Vector\ 26.svg");
  background-size: cover;
}
.banner-watch__time_timer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background-image: url("../assets/img/Vector\ 25.svg");
  background-size: cover;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
    .banner-watch {
    margin-top: 110px;
    flex-direction: column;
    gap: 40px;
  }
  .banner-watch__info_title {
    font-size: 24px;
  }

  .banner-watch__info_text {
    font-size: 18px;
  }
  .banner-watch__time {
    justify-content: center;
    align-items: center;
    margin-left: 145px;
    width: 400px;
  }

  .banner-watch__time_btn {
    display: flex;
    justify-content: center;
  }
}
@media only screen and (max-width: 767px) {
    .banner-watch {
    margin-top: 60px;
    flex-direction: column;
    gap: 20px;
  }

  .banner-watch__info_title {
    font-size: 24px;
  }
  .banner-watch__info_list {
    margin-top: 20px;
    gap: 10px;
  }

  .banner-watch__info_text {
    font-size: 18px;
  }

  .svg-mob {
    width: 30px !important;
  }

  .banner-watch__time_btn > .btn {
    font-size: 24px;
    width: 302px;
  }
  .banner-watch__time_btn {
    width: 302px;
  }
}

  </style>