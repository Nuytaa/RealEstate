<template>
    <div class="feedback">
        <div class="feedback__container">
            <h4>Еще остались вопросы?</h4>

            <div class="feedback__subtitle">Наши эксперты помогут осуществить любые сделки с недвижимостью — обмен,<br>
                покупку или продажу недвижимости в Москве и области, аренду городских и<br> 
                загородных объектов.
            </div>
    
            <input class="feedback__input" type="tel" placeholder="Введите ваш телефон" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
            <button class="feedback__button">Получить консультацию</button>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/components/var.scss';
.feedback {
    background-image: url(../public/img/footer.png);
    width: 100%;
    background-repeat: no-repeat;
    height: 100%;
    padding-bottom: 100px;
  }
  
  .feedback__container {
    max-width: 81.8rem;
    margin: 0 auto;
  }
  
  h4 {
    margin: 100px auto;
    padding-top: 80px;
    font-size: clamp(30px, 2vw, 50px);
    color: white;
    font-weight: 700;
    margin-bottom: 30px;
    max-width: 700px;
  }
  
  .feedback__subtitle {
    font-size: 18px;
    margin-bottom: 44px;
  }
  
  .feedback__input {
    width: clamp(300px, 28.8vw, 560px);
    height: clamp(55px, 3.8vw, 73px);
    background-color: white;
    border-radius: 10px;
    color: black;
    text-align: left;
    padding-left: 40px;
  }
  
  .feedback__button {
    width: clamp(300px, 28.8vw, 298px);
    height: clamp(55px, 3.8vw, 73px);
    border-radius: 10px;
    background-color: var(--primary-color);
    transition: transform 0.3s;
    margin-left: 27px;
    font-weight: 700;
  }

  @media screen and (max-width: 1024px) {

    h4 {
      padding-top: 35px;
      text-align: center;
    }
    .feedback__subtitle {
      padding: 0 10px;
    }
    .feedback__input {
      margin-bottom: 30px;
    }
    .feedback__button {
      margin-left: -2px;
      font-weight: 500;
    }
    .feedback__container {
      text-align: center;
    }
}
</style>

<script>
export default {
    name: 'Feedback'
}
</script>