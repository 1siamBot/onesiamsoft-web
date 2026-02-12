// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
  ],
  icon: {
    serverBundle: 'remote',
  },
  googleFonts: {
    families: {
      'Inter': [300, 400, 500, 600, 700, 800, 900],
      'Noto Sans Thai': [300, 400, 500, 600, 700],
    },
    display: 'swap',
    preconnect: true,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'th' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'OneSiamSoft - Enterprise Cloud Infrastructure & Hosting Solutions',
      meta: [
        { name: 'description', content: 'OneSiamSoft — ผู้ให้บริการ Cloud Infrastructure, Managed Hosting, Domain Registration และ Enterprise Solutions ชั้นนำของประเทศไทย ด้วยมาตรฐาน Enterprise-Grade' },
        { name: 'keywords', content: 'cloud server thailand, enterprise hosting, managed cloud, dedicated server, web hosting, domain registration, IT infrastructure, โฮสติ้ง, คลาวด์เซิร์ฟเวอร์, เว็บโฮสติ้ง' },
        { property: 'og:title', content: 'OneSiamSoft — Enterprise Cloud Infrastructure' },
        { property: 'og:description', content: 'Trusted cloud infrastructure and hosting solutions for businesses in Thailand' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://onesiamsoft.com' },
        { property: 'og:image', content: 'https://onesiamsoft.com/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  site: {
    url: 'https://onesiamsoft.com',
    name: 'OneSiamSoft',
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
})
