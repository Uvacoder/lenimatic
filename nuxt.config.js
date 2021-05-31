export default {
  target: 'static',
  server: {
    host: '0', // default: localhost,
  },  
  head: {
    title: 'lenimatic',
    htmlAttrs: { lang: 'en'},
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: ['~/modules/recomponents'],
  components: true,
}
