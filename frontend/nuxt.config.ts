// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      { code: 'th', name: 'ไทย', file: 'th.json' },
      { code: 'en', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'th',
    langDir: 'locales',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_lang',
      redirectOn: 'root',
    },
  },
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
      htmlAttrs: { class: 'dark' },
      bodyAttrs: { class: 'bg-[#0c1222] text-gray-400' },
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
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
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
