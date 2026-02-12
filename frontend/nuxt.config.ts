// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'th' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'OneSiamSoft - บริการ Cloud Server Hosting ที่รวดเร็วและปลอดภัย',
      meta: [
        { name: 'description', content: 'OneSiamSoft ผู้ให้บริการ Cloud Server, Web Hosting, Domain, Dedicated Server และ Custom Solution สำหรับธุรกิจของคุณ' },
        { name: 'keywords', content: 'cloud server, hosting, domain, dedicated server, web hosting, thailand, โฮสติ้ง, เว็บโฮสติ้ง, คลาวด์เซิร์ฟเวอร์' },
        { property: 'og:title', content: 'OneSiamSoft - Cloud Server Hosting' },
        { property: 'og:description', content: 'บริการ Cloud Server Hosting ที่รวดเร็วและปลอดภัยสำหรับธุรกิจของคุณ' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://onesiamsoft.com' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap' },
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
