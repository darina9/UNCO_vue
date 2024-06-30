
<template>
  <header class="header">
    <nav class="header__list center">
      <button class="burger-menu" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M26.6673 23.3333C27.1809 23.3336 27.6748 23.5314 28.0465 23.8859C28.4182 24.2403 28.6393 24.7242 28.664 25.2372C28.6887 25.7502 28.5151 26.2531 28.1791 26.6416C27.8431 27.0301 27.3705 27.2744 26.8593 27.324L26.6673 27.3333H5.33398C4.82036 27.3331 4.32652 27.1352 3.9548 26.7808C3.58308 26.4263 3.36197 25.9425 3.33729 25.4294C3.3126 24.9164 3.48624 24.4135 3.82222 24.0251C4.1582 23.6366 4.63076 23.3922 5.14198 23.3427L5.33398 23.3333H26.6673ZM26.6673 14C27.1978 14 27.7065 14.2107 28.0815 14.5858C28.4566 14.9608 28.6673 15.4696 28.6673 16C28.6673 16.5304 28.4566 17.0391 28.0815 17.4142C27.7065 17.7893 27.1978 18 26.6673 18H5.33398C4.80355 18 4.29484 17.7893 3.91977 17.4142C3.5447 17.0391 3.33398 16.5304 3.33398 16C3.33398 15.4696 3.5447 14.9608 3.91977 14.5858C4.29484 14.2107 4.80355 14 5.33398 14H26.6673ZM26.6673 4.66666C27.1978 4.66666 27.7065 4.87737 28.0815 5.25244C28.4566 5.62752 28.6673 6.13622 28.6673 6.66666C28.6673 7.19709 28.4566 7.7058 28.0815 8.08087C27.7065 8.45594 27.1978 8.66666 26.6673 8.66666H5.33398C4.80355 8.66666 4.29484 8.45594 3.91977 8.08087C3.5447 7.7058 3.33398 7.19709 3.33398 6.66666C3.33398 6.13622 3.5447 5.62752 3.91977 5.25244C4.29484 4.87737 4.80355 4.66666 5.33398 4.66666H26.6673Z" fill="#BC0051"/>
        </svg>
      </button>
      <ul class="left-links">
        <li><a class="links title-semibold" href="#watch">{{ $t('header.advantages') }}</a></li>
        <li><a class="links title-semibold" href="#how_it_works">{{ $t('header.how_it_works') }}</a></li>
      </ul>
      <div class="logo">
        <a href="https://www.unco.club/"><img src="../assets/img/logo.svg" alt="Логотип" /></a>
      </div>
      <ul class="right-links">
        <li><a class="links title-semibold" href="#contacts">{{ $t('header.contacts') }}</a></li>
        <li class="links-language" @click="toggleLanguageMenu">
          <div class="links-language-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M29.833 28.9833C29.3997 27.6499 28.1497 26.6666 26.6663 26.6666H24.9997V21.6666C24.9997 21.2246 24.8241 20.8006 24.5115 20.4881C24.199 20.1755 23.775 19.9999 23.333 19.9999H13.333V16.6666H16.6663C17.1084 16.6666 17.5323 16.491 17.8449 16.1784C18.1574 15.8659 18.333 15.4419 18.333 14.9999V11.6666H21.6663C22.5504 11.6666 23.3982 11.3154 24.0234 10.6903C24.6485 10.0652 24.9997 9.21731 24.9997 8.33325V7.64992C26.9938 8.45386 28.7634 9.72904 30.1571 11.3663C31.5507 13.0036 32.5268 14.9542 33.0019 17.0511C33.477 19.148 33.4369 21.3289 32.885 23.4069C32.3331 25.485 31.2859 27.3983 29.833 28.9833ZM18.333 33.2166C11.7497 32.3999 6.66634 26.7999 6.66634 19.9999C6.66634 18.9666 6.79967 17.9666 7.01634 17.0166L14.9997 24.9999V26.6666C14.9997 27.5506 15.3509 28.3985 15.976 29.0236C16.6011 29.6487 17.449 29.9999 18.333 29.9999M19.9997 3.33325C17.811 3.33325 15.6437 3.76435 13.6216 4.60193C11.5995 5.4395 9.7622 6.66716 8.21456 8.21481C5.08896 11.3404 3.33301 15.5796 3.33301 19.9999C3.33301 24.4202 5.08896 28.6594 8.21456 31.785C9.7622 33.3327 11.5995 34.5603 13.6216 35.3979C15.6437 36.2355 17.811 36.6666 19.9997 36.6666C24.42 36.6666 28.6592 34.9106 31.7848 31.785C34.9104 28.6594 36.6663 24.4202 36.6663 19.9999C36.6663 17.8112 36.2352 15.644 35.3977 13.6219C34.5601 11.5998 33.3324 9.76245 31.7848 8.21481C30.2371 6.66716 28.3998 5.4395 26.3777 4.60193C24.3556 3.76435 22.1884 3.33325 19.9997 3.33325Z" fill="#214B33"/>
            </svg>
            <div class="links-language-container">
              <h9 class="links-language__text">{{ $t('header.language') }}</h9>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.0004 4.99989L3.0004 4.99989C2.81816 5.00046 2.63953 5.05073 2.48373 5.14527C2.32793 5.23981 2.20086 5.37506 2.11621 5.53645C2.03155 5.69783 1.99252 5.87925 2.0033 6.06118C2.01408 6.2431 2.07428 6.41864 2.1774 6.56889L11.1774 19.5689C11.5504 20.1079 12.4484 20.1079 12.8224 19.5689L21.8224 6.56889C21.9266 6.41895 21.9877 6.24332 21.999 6.0611C22.0104 5.87887 21.9716 5.69702 21.8869 5.53529C21.8022 5.37356 21.6747 5.23814 21.5184 5.14375C21.3622 5.04936 21.183 4.99961 21.0004 4.99989Z" fill="#214B33"/>
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </nav>
    <div v-show="isLanguageMenuActive" class="language-menu">
      <div class="language-option" @click="changeLanguage('en')">
        <img src="../assets/img/US.svg" alt="English Flag" class="language-flag" />
        <span class="language-name">English</span>
      </div>
      <div class="language-option" @click="changeLanguage('ru')">
        <img src="../assets/img/RU.svg" alt="Russian Flag" class="language-flag" />
        <span class="language-name">Русский</span>
      </div>
      <div class="language-option" @click="changeLanguage('de')">
        <img src="../assets/img/DE.svg" alt="German Flag" class="language-flag" />
        <span class="language-name">Deutsche</span>
      </div>
      <div class="language-option" @click="changeLanguage('uk')">
        <img src="../assets/img/UA.svg" alt="Ukrainian Flag" class="language-flag" />
        <span class="language-name">Українська</span>
      </div>
    </div>
    <div id="menu" class="dropdown-menu" ref="menu">
      <button class="close-menu" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.56031 6.44C8.27596 6.17504 7.89986 6.03079 7.51126 6.03765C7.12266 6.0445 6.75189 6.20193 6.47706 6.47675C6.20224 6.75158 6.04481 7.12235 6.03796 7.51095C6.0311 7.89956 6.17535 8.27565 6.44031 8.56L13.8803 16L6.44031 23.44C6.29293 23.5773 6.17473 23.7429 6.09275 23.9269C6.01076 24.1109 5.96668 24.3095 5.96312 24.511C5.95957 24.7124 5.99662 24.9124 6.07206 25.0992C6.1475 25.286 6.25979 25.4556 6.40223 25.5981C6.54467 25.7405 6.71434 25.8528 6.90111 25.9282C7.08789 26.0037 7.28795 26.0407 7.48935 26.0372C7.69076 26.0336 7.88938 25.9895 8.07338 25.9076C8.25738 25.8256 8.42298 25.7074 8.56031 25.56L16.0003 18.12L23.4403 25.56C23.5776 25.7074 23.7432 25.8256 23.9272 25.9076C24.1112 25.9895 24.3099 26.0336 24.5113 26.0372C24.7127 26.0407 24.9127 26.0037 25.0995 25.9282C25.2863 25.8528 25.4559 25.7405 25.5984 25.5981C25.7408 25.4556 25.8531 25.286 25.9286 25.0992C26.004 24.9124 26.041 24.7124 26.0375 24.511C26.0339 24.3095 25.9899 24.1109 25.9079 23.9269C25.8259 23.7429 25.7077 23.5773 25.5603 23.44L18.1203 16L25.5603 8.56C25.8253 8.27565 25.9695 7.89956 25.9627 7.51095C25.9558 7.12235 25.7984 6.75158 25.5236 6.47675C25.2487 6.20193 24.878 6.0445 24.4894 6.03765C24.1007 6.03079 23.7247 6.17504 23.4403 6.44L16.0003 13.88L8.56031 6.44Z" fill="#BC0051"/>
        </svg>
      </button>
      <ul class="menu-links">
        <li><a class="links title-semibold" href="#watch">{{ $t('header.advantages') }}</a></li>
        <li><a class="links title-semibold" href="#how_it_works">{{ $t('header.how_it_works') }}</a></li>
        <li><a class="links links_max title-semibold" href="#contacts">{{ $t('header.contacts') }}</a></li>
        <li class="links-language" @click="toggleLanguageMenu">
          <div class="links-language-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M29.833 28.9833C29.3997 27.6499 28.1497 26.6666 26.6663 26.6666H24.9997V21.6666C24.9997 21.2246 24.8241 20.8006 24.5115 20.4881C24.199 20.1755 23.775 19.9999 23.333 19.9999H13.333V16.6666H16.6663C17.1084 16.6666 17.5323 16.491 17.8449 16.1784C18.1574 15.8659 18.333 15.4419 18.333 14.9999V11.6666H21.6663C22.5504 11.6666 23.3982 11.3154 24.0234 10.6903C24.6485 10.0652 24.9997 9.21731 24.9997 8.33325V7.64992C26.9938 8.45386 28.7634 9.72904 30.1571 11.3663C31.5507 13.0036 32.5268 14.9542 33.0019 17.0511C33.477 19.148 33.4369 21.3289 32.885 23.4069C32.3331 25.485 31.2859 27.3983 29.833 28.9833ZM18.333 33.2166C11.7497 32.3999 6.66634 26.7999 6.66634 19.9999C6.66634 18.9666 6.79967 17.9666 7.01634 17.0166L14.9997 24.9999V26.6666C14.9997 27.5506 15.3509 28.3985 15.976 29.0236C16.6011 29.6487 17.449 29.9999 18.333 29.9999M19.9997 3.33325C17.811 3.33325 15.6437 3.76435 13.6216 4.60193C11.5995 5.4395 9.7622 6.66716 8.21456 8.21481C5.08896 11.3404 3.33301 15.5796 3.33301 19.9999C3.33301 24.4202 5.08896 28.6594 8.21456 31.785C9.7622 33.3327 11.5995 34.5603 13.6216 35.3979C15.6437 36.2355 17.811 36.6666 19.9997 36.6666C24.42 36.6666 28.6592 34.9106 31.7848 31.785C34.9104 28.6594 36.6663 24.4202 36.6663 19.9999C36.6663 17.8112 36.2352 15.644 35.3977 13.6219C34.5601 11.5998 33.3324 9.76245 31.7848 8.21481C30.2371 6.66716 28.3998 5.4395 26.3777 4.60193C24.3556 3.76435 22.1884 3.33325 19.9997 3.33325Z" fill="#214B33"/>
            </svg>
            <div class="links-language-container">
              <h9 class="links-language__text">{{ $t('header.language') }}</h9>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.0004 4.99989L3.0004 4.99989C2.81816 5.00046 2.63953 5.05073 2.48373 5.14527C2.32793 5.23981 2.20086 5.37506 2.11621 5.53645C2.03155 5.69783 1.99252 5.87925 2.0033 6.06118C2.01408 6.2431 2.07428 6.41864 2.1774 6.56889L11.1774 19.5689C11.5504 20.1079 12.4484 20.1079 12.8224 19.5689L21.8224 6.56889C21.9266 6.41895 21.9877 6.24332 21.999 6.0611C22.0104 5.87887 21.9716 5.69702 21.8869 5.53529C21.8022 5.37356 21.6747 5.23814 21.5184 5.14375C21.3622 5.04936 21.183 4.99961 21.0004 4.99989Z" fill="#214B33"/>
              </svg>
            </div>
          </div>
        </li>
      </ul>
    
    </div>

  </header>
</template>

<script>

import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export default {
  setup() {
    const isLanguageMenuActive = ref(false);
    const { locale } = useI18n();

    const closeLanguageMenu = () => {
  isLanguageMenuActive.value = false;
  const languageMenu = document.querySelector('.language-menu');
  languageMenu.style.display = 'none';
};

const toggleLanguageMenu = () => {
  isLanguageMenuActive.value = !isLanguageMenuActive.value;
  const languageMenu = document.querySelector('.language-menu');
  const linksLanguage = document.querySelector('.links-language');

  if (isLanguageMenuActive.value) {
    languageMenu.style.display = 'block';
    const rect = linksLanguage.getBoundingClientRect();

    if (window.innerWidth <= 767) {
      const linksLanguageWrapper = document.querySelector('.dropdown-menu .links-language-wrapper');
      const rectWrapper = linksLanguageWrapper.getBoundingClientRect();
      languageMenu.style.top = `${rectWrapper.bottom + window.scrollY}px`;
      languageMenu.style.left = `${rectWrapper.left + window.scrollX}px`;
    } else {
      languageMenu.style.top = `${rect.bottom + window.scrollY}px`;
      languageMenu.style.left = `${rect.left + window.scrollX}px`;
    }

    setTimeout(closeLanguageMenu, 5000); // Автоматическое закрытие через 3 секунды
  } else {
    languageMenu.style.display = 'none';
  }
};

document.addEventListener('click', (event) => {
  const languageMenu = document.querySelector('.language-menu');
  if (isLanguageMenuActive.value && !languageMenu.contains(event.target) && !event.target.closest('.links-language')) {
    closeLanguageMenu();
  }
});


    const changeLanguage = (lang) => {
      locale.value = lang;
      setCookie('language', lang, 7);
      isLanguageMenuActive.value = false;
      const languageMenu = document.querySelector('.language-menu');
      languageMenu.style.display = 'none';
    };
    const closeMenu = () => {
  const menu = document.getElementById('menu');
  menu.classList.remove('active');
};
    const toggleMenu = () => {
      const menu = document.getElementById('menu');
      menu.classList.toggle('active');
    };
    document.addEventListener('click', (event) => {
  const menu = document.getElementById('menu');
  if (menu.classList.contains('active') && !menu.contains(event.target) && !event.target.closest('.burger-menu')) {
    closeMenu();
  }});

    onMounted(() => {
      const savedLanguage = getCookie('language');
      if (savedLanguage) {
        locale.value = savedLanguage;
      }
    });
    

    return {
      isLanguageMenuActive,
      toggleLanguageMenu,
      changeLanguage,
      toggleMenu,
    };
  }
};
</script>


<style >
@import url("../assets/common-styles.css");
.header {
  border-radius: 0px 0px 10px 10px;
  border: 1px solid #a2c33d;
  background: #f1f9e4;
  padding: 20px 20px;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.burger-menu {
  display: none; /* Скрываем кнопку бургера на десктопных устройствах */
}
.links {
  border: 1px solid none;
  padding: 10px 20px;
  color: #214b33;
  font-size: 24px;
  position: relative;
}
.links::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: -10px -30px; /* Увеличиваем область нажима */
}
.links_max::before {
  margin: -10px -70px;
}
.left-links {
  display: flex;
  gap: 1rem; /* Расстояние между ссылками */
}

.links:hover {
  border-radius: 8px;
  background: #a2c33d;
}
.logo {
  position: absolute; /* Абсолютное позиционирование логотипа внутри header */
  left: 50%;
  transform: translateX(-50%); /* Центрируем логотип */
  text-align: center;
}
.logo img {
  max-width: 100%;
  height: auto;
}
.right-links{
  display: flex;
  gap: 20px;
}
.links-language {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 166%;
  position: relative;
}

.links-language-container {
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
 
}
.links-language-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.links-language__text {
  width: 75px;
}


.dropdown-menu {
  display: none;
}
.right-links {
  position: relative; /* Чтобы потомки с position: absolute были позиционированы относительно этого элемента */
}

.links-language {
  position: relative; /* Добавить позиционирование относительно этого элемента */
}
.language-menu {
  position: absolute;
  top: 60px; /* Подкорректируйте по необходимости */
  left: 0; /* Подкорректируйте по необходимости */
  background: #FEFFFA;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  z-index: 1000; /* Увеличиваем z-index для всплывающего окна */
 margin-top: 30px;
 
}

.language-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  cursor: pointer;
  border-radius: 6px;
}
.language-option:hover {
  background-color: #214B33;
  color: white;
}


.language-flag {
  width: 24px;
  height: 24px;
}

.language-name {
  font-size: 14px;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .header {
    padding: 24px 40px;
  }

  .left-links {
    flex: 1;
    display: none;
  }
  .right-links >li >.links{
    display: none;
  }
  .menu-links >.links-language{
    display: none;
  }

  .burger-menu {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
  }
  .dropdown-menu {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 260px;
    height: 260px;
    border-radius: 0px 20px 20px 20px;
    border: 1px solid #a2c33d;
    background: #fefffa;
    z-index: 1000;
    padding-left: 20px;
    font-size: 24px;
  }

   
    
  .dropdown-menu.active {
    display: block;
  }
  .close-menu {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
  }
  .menu-links {
    margin-top: 50px;
    list-style: none;
    padding: 0;
  }
  .menu-links li {
    margin-bottom: 20px;
  }
  .menu-links .links {
    font-size: 24px;
    color: #214b33;
  }
}
@media only screen and (max-width: 767px) {
  .header {
    padding: 10px 10px;
  }
  nav {
    padding: 0;
  }
  .left-links {
    flex: 1;
    display: none;
    font-size: 18px;
  }
  .links{
    font-size: 18px;
  }
  .burger-menu {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
  }
  .left-links {
    display: none; /* Скрываем левые ссылки на мобильных устройствах */
  }

  .right-links {
    display: none; /* Скрываем правые ссылки на мобильных устройствах */
  }

  .burger-menu {
    display: block; /* Отображаем кнопку бургер-меню на мобильных устройствах */
  }

  .dropdown-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 300px;
    background: #fefffa;
    z-index: 1000;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 18px;
    border-radius: 0px 20px 20px 20px;
    border: 1px solid #a2c33d;
    background: #fefffa;
  }
  .dropdown-menu.active {
    display: flex;
  }

  .close-menu {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .menu-links {
    list-style: none;
    padding: 0;
    
  }

  .menu-links li {
    margin-bottom: 20px;
  }

  .menu-links .links {
    font-size: 18px;
    color: #214b33;
  }

  .right-links {
    display: none;
  }
  .logo {
    width: 60px;
    height: 33px;
    left: 85%;
  }

  .language-menu {
    position: absolute;
   
    width: 140px;
    z-index: 1100;
    
  }
  .links-language{
    margin-left: 10px;
    position: relative;
  }
  
  .links-language-container svg {
    display: block; }
}
</style>
