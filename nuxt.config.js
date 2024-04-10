export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt_pet',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    './assets/scss/style.scss'
  ],

  plugins: [
    '@/plugins/vue-awesome-swiper.js',
    '@/plugins/gsap.js',
    '@/plugins/lodash.js',
    '@/plugins/lottie.js',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/style-resources',
    'nuxt-gsap-module'
  ],

  modules: [
  ],

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },

  build: {
  }
}
