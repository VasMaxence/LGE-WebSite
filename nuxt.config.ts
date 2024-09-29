// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/i18n", "@nuxtjs/tailwindcss", "nuxt-aos"],
  css: ["@/static/sass/_variables.scss", "@/static/sass/_fonts.scss", "@/static/sass/main.scss"],
  components: true,
  plugins: [
    { src: "~/plugins/toast.js", mode: "client" },
    { src: "~/plugins/aos.js", ssr: false, mode: "client" },
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Loisir 06",
      link: [],

      meta: [
        { hid: "description", name: "description", content: "Découvrez les meilleurs activités de la Côté d'Azur" },
        { name: "format-detection", content: "telephone=no" },
        { name: "keywords", content: "Loisir, LaserGame, Laser Game, Laser Game Evolution, LGE, Bowling, Activité, Billard, Famille, Karting, Arcade, Quizz, QuizzMaster, Quiz, Rigolade, IQuizz, LaserQuest, Laser Quest, LaserMax, Laser Max" },
        { name: "author", content: "Loisir 06" },
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#ffffff" }, // Browser theme color

        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Loisir 06" },
        { property: "og:description", content: "Découvrez les meilleurs activités de la Côté d'Azur" },
        { property: "og:image", content: "/icon.png" },
        { property: "og:url", content: "https://google.com" },
        { property: "og:site_name", content: "Loisir 06" },
        { property: "og:locale", content: "fr_FR" }, // Added og:locale

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Loisir 06" },
        { name: "twitter:description", content: "Découvrez les meilleurs activités de la Côté d'Azur" },
        { name: "twitter:image", content: "/icon.png" },
        { name: "twitter:site", content: "@Loisir06" },
        { name: "twitter:creator", content: "@Loisir06" },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
