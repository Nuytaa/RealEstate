<template>
    <header>
        <header class="header">
            <div class="header__shell">
                <div class="header__container">
                    <div class="container__logo">ИНКОМ <br><span class="accent">Недвижимость</span></div>
                    <div class="container__text">Все работают с недвижимостью,<br> а мы - с людьми</div>
                    <div class="container__phone">+7 (684) 555-01-02</div>
                    <button class="container__button" @click="goToNewPage">Бесплатная консультация</button>
                    <div class="container__menu" :class="{ active: isActive }" @click="toggleMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
        
                <h1>Агентство недвижимости <span class="accent2">ИНКОМ</span><br>
                    Мы гарантировано<br>
                    продадим  вашу недвижимость<br>
                    на <span class="accent3">15% дороже</span>
                </h1>
                <div class="header__button">
                    <button class="button">УЗНАТЬ СТОИМОСТЬ ПРОДАЖИ</button>
                </div>
    
                <div class="list-container">
                    <ul class="custom-list">
                        <li><span>Продано недвижимости на 3 млрд<br> рублей за 5 лет</span></li>
                        <li><span>Юридическое сопровождение</span></li>
                        <li><span>Квартиры по Москве и области<br> на любой выбор</span></li>
                    </ul>
                </div>
            </div>
        </header>
    </header>
</template>


<style lang="scss">
@import '@/components/var.scss';

.header {
    background-image: url(../public/img/background.png);
    width: 100%;
    background-repeat: no-repeat;
    height: 100%;
  }
  
  .header__shell {
    margin: 0 auto;
    max-width: 81.8rem;
  }
  
  .header__container {
    @include flex-around;
    padding-top: 3.3rem;
    gap: 10px;
  }

  .accent {
    color: var(--primary-color);
    font-size: 27px;
    line-height: 32.4px;
  }
  
  .accent2 {
    color: var(--primary-color);
    font-size: 35px;
    font-weight: 700;
  }
  
  .accent3 {
    color: var(--primary-color);
    font-weight: 700;
  }
  
  .container__logo {
    font-size: 51px;
    line-height: 32px;
    font-weight: 700;
  }

  .container__text {
    font-size: 18px;
  }
  
  .container__phone {
    margin-top: -25px;
    font-size: 24px;
  }
  
  .container__phone:hover {
    cursor: pointer;
    color: var(--primary-color);
  }

  
.container__button {
    font-size: 13px;
    background-color: var(--primary-color);
    width: 14rem;
    height: 2.5rem;
    border-radius: 5px;
    box-shadow: 0 20px 20px 2px rgba(207, 165, 91, 0.3);
    transition: 1s ease-in-out;
    margin-top: -25px;
    transition: transform 0.3s;
  }
  
  .container__button:hover {
    transform: translateY(-5px);
  }
  
  .container__menu {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-top: -25px;
  }
  
  .container__menu span {
    height: 3px;
    width: 37px;
    background-color: white;
    margin: 4px 0;
    transition: 0.4s;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  .container__menu span:nth-of-type(3) {
    width: 25px;
  }
  
  h1 {
    max-height: 12rem;
    line-height: 3rem;
    font-size: 2.2rem;
    font-weight: 600;
    margin: 180px auto;
  }
  
  .header__button {
    margin: -80px auto;
  }
  
  .button {
    width: clamp(250px, 23vw, 400px);
    height: clamp(60px, 4.5vw, 73px);
    position: relative;
    display: inline-block;
    background-color: var(--primary-color);
    text-align: center;
    text-decoration: none;
    border: 1px solid transparent;
    box-shadow: 0 0 70px rgb(207, 165, 91);
    border-radius: 5px;
    transition: transform 0.3s;
    margin-bottom: 13rem;
  }
  
  .button::after {
    content: "";
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    border: 2px solid var(--primary-color);
    border-radius: 5px;
  }
  
  button:hover {
    transform: translateY(-5px);
  }
  
  .list-container {
    @include flex-around;
    padding: 20px;
  }
  
  .custom-list {
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
    padding-bottom: 8.75rem;
  }
  
  .custom-list li {
    display: flex;
    align-items: flex-start; /* Выравнивание по верху */
    padding-left: 0;
    flex: 1;
  }
  
  .custom-list li::before {
    content: "";
    flex-shrink: 0; /* Предотвращает сжатие точки */
    width: 14px;
    height: 14px;
    background-color: var(--primary-color);
    border-radius: 50%;
    margin-right: 10px; /* Отступ справа от точки */
    margin-top: 6px; /* Регулирует вертикальное выравнивание точки */
    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.2);
  }
  
  .custom-list li span {
    display: inline-block;
  }

  .container__menu.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .container__menu.active span:nth-child(2) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
  
  .container__menu.active span:nth-child(3) {
    opacity: 0;
  }

  @media screen and (max-width: 1500px) {
    .header__shell {
      max-width: 70rem;
    }
    .header__container {
      font-size: 1rem;
    }
    .container__logo {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 1200px) {
    .header__shell {
      max-width: 60rem;
    }
    .container__logo {
      font-size: 35px;
    }
    .container__text {
      display: none;
    }
}

@media screen and (max-width: 1024px) {
    .header__shell {
      max-width: 25rem;
    }
    .header__container {
      min-height: 10rem;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .container__logo {
      margin-bottom: 40px;
    }
    h1 {
      font-size: 1.25rem;
      line-height: 2.2rem;
      margin: 80px auto;
    }
    .accent2 {
      font-size: 25px;
    }
    .container__button {
      margin-top: 10px;
    }
    .container__menu {
      align-items: end;
      margin-top: -18rem;
    }
    .button {
      font-size: 0.7rem;
      margin-top: 50px;
    }
    .custom-list {
      margin-top: -30px;
      display: grid;
      grid-template-columns: 1fr;
    }
    .custom-list li {
      padding-top: 20px;
    }
}
</style>

<script>

import { ref } from 'vue'

export default {
  name: 'Header',
  setup() {
    const isActive = ref(false)

    function toggleMenu() {
      isActive.value = !isActive.value
    }

    return {
      isActive,
      toggleMenu
    };
  },
};
</script>

<script setup>
  const isActive = ref(false)

  function toggleMenu() {
    isActive.value = !isActive.value
  }

  function goToNewPage() {
    navigateTo('/signup')
  }
</script>


