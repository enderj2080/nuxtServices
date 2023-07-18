// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir:'src',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@unocss/nuxt'],
  unocss: {
    uno: true,
    icons: true,
    attributify: true
  },
  
})
