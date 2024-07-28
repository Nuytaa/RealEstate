import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-07-17',
  modules: ["@nuxt/image"],
  css: [
    // 'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/css/nuling_styles.css'
  ]
  // plugins: [
  //   { src: '~/plugins/bootstrap.js', mode: 'client' }
  // ]
})