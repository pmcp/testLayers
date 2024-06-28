// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    ['github:pmcp/nuxtLayer_CMS', { install: true }]
  ]
})
