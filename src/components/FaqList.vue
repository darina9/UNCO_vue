<template>
    <section class="faq-list">
      <h5 class="faq-list__title">{{ $t('faq_list.title') }}</h5>
      <ul class="faq-list__list">
        <li v-for="(item, index) in faqs" :key="index" class="faq-list__item">
            <button :class="{'active': item.visible}" class="faq-list__item_btn" @click="toggleAnswer(index)">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <g clip-path="url(#clip0_177_427)">
                <path class="path_1"
                  d="M4.44444 40C3.2657 40 2.13524 39.5317 1.30175 38.6983C0.46825 37.8648 0 36.7343 0 35.5556V4.44444C0 3.2657 0.46825 2.13524 1.30175 1.30175C2.13524 0.468253 3.2657 0 4.44444 0L35.5556 0C36.7343 0 37.8648 0.468253 38.6983 1.30175C39.5317 2.13524 40 3.2657 40 4.44444V35.5556C40 36.7343 39.5317 37.8648 38.6983 38.6983C37.8648 39.5317 36.7343 40 35.5556 40H4.44444Z"
                  fill="#BC0051" />
                <path d="M24.4449 7.77783V17.7778H32.2227L20.0004 32.2223L7.77821 17.7778H15.556V7.77783H24.4449Z" fill="#FEFFFA" />
              </g>
              <defs>
                <clipPath id="clip0_177_427">
                  <rect width="40" height="40" fill="white" transform="matrix(0 1 -1 0 40 0)" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <div class="faq-list__item_text">
            <h6 class="faq-list__item_question">{{ item.question }}</h6>
            <h6 class="faq-list__item_answer" :class="{ visible: item.visible }">{{ item.answer }}</h6>
          </div>
        </li>
      </ul>
    </section>
  </template>
<script>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  name: 'FaqList',
  setup() {
    const { t, locale } = useI18n();
    const faqs = ref([]);

    const updateFaqs = () => {
      faqs.value = [
        {
          question: t('faq_list.questions.what_is_uff'),
          answer: t('faq_list.answers.what_is_uff'),
          visible: false,
        },
        {
          question: t('faq_list.questions.what_to_do_with_uff'),
          answer: t('faq_list.answers.what_to_do_with_uff'),
          visible: false,
        },
        {
          question: t('faq_list.questions.pick_up_product'),
          answer: t('faq_list.answers.pick_up_product'),
          visible: false,
        },
        {
          question: t('faq_list.questions.seller_guarantee'),
          answer: t('faq_list.answers.seller_guarantee'),
          visible: false,
        },
      ];
    };

    // Initialize FAQs
    updateFaqs();

    // Watch for changes in locale
    watch(locale, () => {
      updateFaqs();
    });

    const toggleAnswer = (index) => {
      faqs.value[index].visible = !faqs.value[index].visible;
    };

    return {
      faqs,
      toggleAnswer,
      t,
    };
  },
};
</script>
 
  <style>
  @import url("../assets/common-styles.css");
  .faq-list {
  margin-top: 100px;
  margin-bottom: 30px;
}
.faq-list__title {
  color: #bc0051;
  font-size: 36px;
  font-weight: 600;
  line-height: 166%;
}
.faq-list__list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.faq-list__item {
  display: flex;
  gap: 10px;
  border-radius: 20px;
  border: 4px solid #a2c33d;
  padding: 0 20px;
  align-items: center;
  position: relative;
}
.faq-list__item_text {
  display: flex;
  width: 1360px;
  padding: 20px 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}
.faq-list__item_btn {
  border: none;
  width: 40px;
  height: 40px;
  background: none;
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 20px;
 
}
.faq-list__item_btn:hover .path_1 {
  fill: #a2c33d;
}
.faq-list__item_question {
  color: #313131;
  font-size: 24px;
  font-weight: 600;
  line-height: 166%;
  margin-left: 50px;
}
.faq-list__item_answer {
  visibility: hidden;
  color: #313131;
  font-size: 24px;
  font-weight: 400;
  line-height: 166%;
  align-self: stretch;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 1s ease, opacity 1s ease;
}
.faq-list__item_answer.visible {
  visibility: visible;
  max-height: 160px;
  opacity: 1;
}
.faq-list__item_container {
  position: relative;
  display: flex;
  align-items: center;
}

@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .faq-list__title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .faq-list__item_answer.visible {
    max-height: 300px;
    margin-top: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
@media only screen and (max-width: 767px) {
  .faq-list {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .faq-list__title {
    font-size: 24px;
  }
  .faq-list__list {
    margin-top: 20px;
  }

  .faq-list__item {
    padding: 0 10px;
  }
  .faq-list__item_text {
    padding: 10px 0;
    gap: 10px;
  }

  .faq-list__item_btn {
    left: 10px;
    top: 10px;
  }
  .faq-list__item_question {
    font-size: 18px;
  }
  .faq-list__item_answer {
    font-size: 14px;
  }

  .faq-list__item_answer.visible {
    margin-top: 10px;
    max-height: 240px;
  }
}
</style>
