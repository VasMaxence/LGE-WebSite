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
      title: "Quiz Master",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],

      meta: [
        { hid: "description", name: "description", content: "Découvrez Quiz Master, vos salles de Quiz pour vous amusez en famille ou entre amis." },
        { name: "format-detection", content: "telephone=no" },
        { name: "keywords", content: "Loisir, LaserGame, Laser Game, Laser Game Evolution, Quiz Master, Quiz Room, Activité,  Famille, Quizz, QuizzMaster, Quiz, Rigolade, IQuizz, LaserQuest, Laser Quest, LaserMax, Laser Max" },
        { name: "author", content: "Quiz Master" },
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#ffffff" }, // Browser theme color

        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Quiz Master" },
        { property: "og:description", content: "Découvrez Quiz Master, vos salles de Quiz pour vous amusez en famille ou entre amis." },
        { property: "og:image", content: "/web-app-manifest-512x512" },
        { property: "og:url", content: "https://google.com" },
        { property: "og:site_name", content: "Quiz Master" },
        { property: "og:locale", content: "fr_FR" }, // Added og:locale

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Quiz Master" },
        { name: "twitter:description", content: "Découvrez Quiz Master, vos salles de Quiz pour vous amusez en famille ou entre amis." },
        { name: "twitter:image", content: "/web-app-manifest-512x512" },
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
