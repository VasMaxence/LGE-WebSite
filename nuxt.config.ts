// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/i18n"],
  css: ["@/static/sass/_variables.scss", "@/static/sass/_fonts.scss", "@/static/sass/main.scss"],
  components: true,
  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en-US.js" },
      { code: "fr", iso: "fr-FR", file: "fr-FR.js" },
    ],
    defaultLocale: "fr",
    langDir: "lang/",
    strategy: "prefix_except_default",
  },
});
