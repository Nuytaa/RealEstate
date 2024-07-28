<template>
    <div :class="['main__container', { 'flex-reverse': isReverse } ]">
        <div class="main__text">
            <h3>{{ title }}</h3>
            <ul class="main__list">
                <li v-for="(item, index) in items" :key="index">
                    <span v-html="item"></span>
                </li>
            </ul>
            <button class="main__button">{{ buttonText }}</button>
        </div>
        <div class="main__image">
            {{ imageSrc }}
            <NuxtImg :src="imageSrc" alt="Описание изображения" />
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
// import { NuxtImg } from '../.nuxt/components';

const props = defineProps ({
    title: String,
    items: Array,
    buttonText: String,
    imageSrc: String,
    isReverse: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>
    .flex-reverse {
        flex-direction: row-reverse;
    }
</style>