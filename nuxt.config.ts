// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-edgedb-module'],
  edgeDb: {
    auth: true,
  },
})
