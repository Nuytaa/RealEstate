<template>
    <main class="main">
        <h2>Почему мы продаем дорого и делаем<br> это в <strong class="accent2">2 раза быстрее</strong></h2>
        <div>
            <MainContainer
                v-for="(block, index) in blocks"
                :key="index"
                :title="block.title"
                :items="block.items"
                :buttonText="block.buttonText"
                :imageSrc="block.imageSrc"
                :isReverse="index % 2 !== 0"
            />
        </div>
    </main>
</template>

<style lang="scss">
@import '@/components/var.scss';
.main {
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding: 20px;
    max-width: 81rem;
    margin: 0 auto;
  }
  
  .main__container {
    @include flex-around;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .main__text, .main__image {
    flex: 1;
  }
  
  .main__text {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  
  .main__image img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  h2 {
    font-size: 36px;
    font-weight: 700;
    color: black;
    text-align: end;
  }
  
  h3 {
    color: black;
    font-weight: bold;
    font-size: 30px;
  }
  
  .main__list {
    list-style: none;
    padding: 0;
    margin: 20px 0;
    color: black;
  }
  
  .main__list li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .main__list li:last-child {
    margin-bottom: 0;
  }
  
  .main__list li::before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: transparent;
    border: 2px solid var(--primary-color);
    transform: rotate(45deg);
    margin-right: 10px;
  }
  
  .main__list li span {
    display: inline-block;
  }
  
  .main__list li strong {
    color: var(--primary-color);
  }
  
  .main__button {
    width: 420px;
    height: 85px;
    font-size: 18px;
    align-self: flex-start;
    margin-top: 20px;
    @include button-styles;
  }
  
  .main__button:hover {
    background-color: var(--primary-color);
  }

  @media screen and (max-width: 1200px) {
    .main__photo1 {
      width: 35.5em;
      height: 20.3em;
    }
    .main__title {
      margin-top: 4.875rem;
      text-align: center;
    }
    .main__container {
      max-width: 60rem;
      display: flex;
      flex-wrap: wrap;
    }
  }

  @media screen and (max-width: 1024px) {
    .main__title {
      margin-bottom: 7rem;
    }
    .main__subtitle {
      text-align: center;
    }
    .main__button {
      width: 250px;
      height: 60px;
    }
    .main__container {
      flex-direction: column;
      flex-wrap: wrap;
    }
}
</style>

<script setup>
import MainContainer from '~/components/MainContainer.vue'
// import Main from '~/components/Main.vue'

const blocks = [
    {
        title: 'СОБСТВЕННАЯ БАЗА ПОКУПАТЕЛЕЙ',
        items: [
            '<strong>Создаем спрос</strong> на объект еще до размещения его в рекламе',
            'Используем <strong>закрытые базы</strong> риэлторов',
            'Продаем через собственную наработанную базу из <strong>6000</strong>'
        ],
        buttonText: 'Получите первое предложение',
        imageSrc: './img/card1.png'
    },
    {
        title: 'СОБСТВЕННАЯ БАЗА ПОКУПАТЕЛЕЙ',
        items: [
            '<b>Создаем спрос</b> на объект еще до размещения его в рекламе',
            'Используем <b>закрытые базы</b> риэлторов',
            'Продаем через собственную наработанную базу из <b>6000</b>'
        ],
        buttonText: 'Получите первое предложение',
        imageSrc: './img/card1.png'
    },
    {
        title: 'СОБСТВЕННАЯ БАЗА ПОКУПАТЕЛЕЙ',
        items: [
            '<b>Создаем спрос</b> на объект еще до размещения его в рекламе',
            'Используем <b>закрытые базы</b> риэлторов',
            'Продаем через собственную наработанную базу из <b>6000</b>'
        ],
        buttonText: 'Получите первое предложение',
        imageSrc: './img/card1.png'
    }
]
</script>
