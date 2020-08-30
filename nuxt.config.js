export default {
  // env: {
  //   baseUrl: process.env.BASE_URL || "http://localhost:3000",
  //   buildLocale: process.env.BUILD_LOCALE || "en"
  // },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "spa",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"
      }
    ],
    script: []
  },
  /*
   ** Global CSS
   */
  css: ["~/assets/scss/main"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  styleResources: {
    // your settings here
    scss: [
      "~/assets/scss/vars/*.scss",
      "~/assets/scss/mixins/*.scss" // use underscore "_" & also file extension ".scss"
    ]
  },
  plugins: [
    { src: "~/plugins/vue-parallax.js", ssr: false },
    { src: "~/plugins/aos.js", ssr: false },
    { src: "~/plugins/vue-kinesis.js", ssr: false },
    "~/plugins/i18n.js"
  ],
  loading: { color: "cyan" },
  router: {
    middleware: "i18n"
  },
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/color-mode",
    "@nuxtjs/svg"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/svg", "vue-scrollto/nuxt"],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // customize webpack build
    vendor: ["vue-i18n"] // webpack vue-i18n.bundle.js
  },

  generate: {
    routes: [
      "/",
      "/profile",
      "/work",
      "/education",
      "/projects",
      "/contact",
      "/da",
      "/da/profile",
      "/da/work",
      "/da/education",
      "/da/projects",
      "/da/projects"
    ]
  },

  static: {
    prefix: false
  }
};
