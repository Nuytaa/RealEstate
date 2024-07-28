<template>
    <footer class="footer">
        <div class="footer__container">
            <img class="footer__icon" src="../public/img/adress.png" alt="adress">
            <p class="footer__text">610000 г. Киров,<br>
                ул. Карла Маркса 21, офис 334 
            </p>
        </div>
        
        <div class="footer__phone">+7 (684) 555-01-02</div>
    </footer>
</template>

<style lang="scss">
@import '@/components/var.scss';

.footer {
    color: black;
    max-width: 81.8rem;
    @include flex-around;
    margin: 66px auto;
  }
  
  .footer__container {
    @include flex-center;
  }
  
  .footer__text {
    margin-left: 18px;
    font-size: 14px;
    line-height: 16.8px;
  }
  
  .footer__phone {
    font-size: clamp(18px, 1vw, 40px);
    font-weight: 700;
  }
  
  .footer__phone:hover {
    color: var(--primary-color);
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    .footer {
      margin-top: 10px;
      flex-direction: column;
      gap: 30px;
    }
  }
</style>

<script>
export default {
    name: 'Footer'
}
</script>