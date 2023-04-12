// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "vuetify/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "aos/dist/aos.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["nuxt-swiper"],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
  },
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  plugins: [{ src: "~/plugins/aos.js", mode: "client" }],
});
