<template>
  <div>
    <Header />
    <Main />
    <Feedback />
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import Feedback from '@/components/Feedback.vue';
import Footer from '@/components/Footer.vue';
</script>

<style lang="scss">
@import '@/components/var.scss';
@import url("https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,100..900;1,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");


html {
  font-size: 16px;
  font-family: var(--font-main);
  color: white;
}
</style>

