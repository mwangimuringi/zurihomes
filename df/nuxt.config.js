
export default {
  server: {
    port: process.env.VUE_APP_PORT, // default: 3000 VUE_APP_PORT
    // host: "localhost", // default: localhost,
    host: "0.0.0.0", // default: localhost,
    timing: true,
  },
  loading: "~/components/Loading.vue",
  router: {
    extendRoutes(routes) {
      routes.push({
        path: "/",
	component:"~/pages/dashboard/sales/index.vue",
		
  });

    }
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  ssr: false,
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.appName || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    "~/assets/scss/app.scss",
    // "~/assets/scss/app-dark.scss",
     'quill/dist/quill.core.css',
      'quill/dist/quill.snow.css', 
      'quill/dist/quill.bubble.css'],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  // serverMiddleware: [
  //   { path: '/services', handler: '~/services/servicesAPI.js' }
  // ],
  plugins: [
    // "~/plugins/fireauth.js",
    // "~/plugins/fakeauth.js",
    "~/plugins/simplebar.js",
    "~/plugins/vue-click-outside.js",
    "~/plugins/vuelidate.js",
    "~/plugins/draggable.js",
    "~/plugins/vue-slidebar.js",
    "~/plugins/tour.js",
    "~/plugins/vue-lightbox.js",
    "~/plugins/mask.js",
    "~/plugins/quill-editor.js",
    "~/plugins/chartist.js",
    "~/plugins/vue-googlemap.js",
    "~/plugins/string-filter",
    '~/plugins/app.utils.js',
    // '~/plugins/v-number.js',
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules:
  ['@nuxtjs/moment'],
      moment: {
        timezone: true,
        // defaultLocale: 'en',
        // locales: ['en'],
        plugins: [
          'moment-duration-format',
        ]
      },
  /*
  ** Nuxt.js modules
  */
  sourcemap: {
    client: true,
    server: false,
  },
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
  ],
  axios: {
    baseURL: process.env.VUE_APP_API_URL,
    // credentials: true
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/user/login',
            method: 'post',
            propertyName: false
          },
          logout: { 
            url: '/user/logout', 
            method: 'post' 
          },
          user: { 
            url: '/user/me', 
            method: 'get', 
            propertyName: false 
          },
        },
        tokenRequired: false,
        tokenType: false
      }
    },
    redirect: {
      login: '/account/login',
      logout: '/account/login',
      callback:false,
      // home: '/monitoring',
    },
  },
  i18n: {
    // locales: ['en', 'fr', 'es', 'ar'],
    locales: ['en'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./locales/en.json'),
        // fr: require('./locales/fr.json'),
        // es: require('./locales/es.json'),
        // ar: require('./locales/ar.json'),
        // zh: require('./locales/zh.json')
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    standalone: true,
    babel: {
      compact: true,
     },
  },
  env: {
    auth: process.env.VUE_APP_DEFAULT_AUTH,
    apikey: process.env.VUE_APP_APIKEY,
    authdomain: process.env.VUE_APP_AUTHDOMAIN,
    databaseurl: process.env.VUE_APP_DATABASEURL,
    projectid: process.env.VUE_APP_PROJECTId,
    storgebucket: process.env.VUE_APP_STORAGEBUCKET,
    message: process.env.VUE_APP_MESSAGINGSENDERID,
    
    apiToken: process.env.VUE_APP_APITOKENID,
    appid: process.env.VUE_APP_APPId,
    measurement: process.env.VUE_APP_MEASUREMENTID,
    appName: process.env.VUE_APP_NAME,
    apiBaseUrl: process.env.VUE_APP_API_URL,
    photoBaseUrl: process.env.VUE_APP_PHOTO_URL,
    appVersion: process.env.VUE_APP_VERSION,
  }
}
