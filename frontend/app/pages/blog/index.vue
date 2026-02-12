<template>
  <div>
    <section class="pt-32 pb-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-sm text-sky-400 font-medium tracking-wide uppercase mb-4">Blog</p>
          <h1 class="heading-xl mb-6">บทความ</h1>
          <p class="text-lg text-gray-400 leading-relaxed">เรื่องราวและความรู้เกี่ยวกับเทคโนโลยี Cloud, Hosting และ Security</p>
        </div>
      </div>
    </section>

    <section class="pb-32">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article v-for="post in posts" :key="post.slug" class="glass-card-hover overflow-hidden group">
            <div class="aspect-video overflow-hidden">
              <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-4">
                <span class="text-xs text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full">{{ post.category }}</span>
                <span class="text-xs text-gray-500">{{ post.date }}</span>
              </div>
              <h3 class="text-lg font-semibold text-white mb-3 line-clamp-2">{{ post.title }}</h3>
              <p class="text-sm text-gray-400 line-clamp-2">{{ post.excerpt }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'บทความ — OneSiamSoft',
  description: 'บทความเกี่ยวกับ Cloud Computing, Web Hosting, Security และ SEO',
})

const posts = [
  {
    slug: 'cloud-server-101',
    title: 'Cloud Server คืออะไร? ทำไมธุรกิจยุคใหม่ต้องใช้',
    excerpt: 'ทำความรู้จักกับ Cloud Server ข้อดีเหนือ Traditional Hosting และเหตุผลที่ธุรกิจควรเปลี่ยนมาใช้',
    category: 'Cloud',
    date: '10 ก.พ. 2026',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
  },
  {
    slug: 'web-security-tips',
    title: '10 วิธีเพิ่มความปลอดภัยให้เว็บไซต์ของคุณ',
    excerpt: 'เรียนรู้วิธีป้องกันเว็บไซต์จากภัยคุกคามทางไซเบอร์ ตั้งแต่ SSL จนถึง WAF',
    category: 'Security',
    date: '5 ก.พ. 2026',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
  },
  {
    slug: 'seo-hosting-speed',
    title: 'Hosting เร็วช่วย SEO ได้อย่างไร?',
    excerpt: 'ความเร็วเว็บไซต์ส่งผลต่อ SEO มากกว่าที่คิด มาดูว่า Hosting ดีๆ ช่วยได้อย่างไร',
    category: 'SEO',
    date: '1 ก.พ. 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    slug: 'domain-name-guide',
    title: 'วิธีเลือกชื่อโดเมนที่ดีสำหรับธุรกิจ',
    excerpt: 'คำแนะนำในการเลือกชื่อโดเมนที่เหมาะสม จดจำง่าย และส่งผลดีต่อแบรนด์',
    category: 'Domain',
    date: '28 ม.ค. 2026',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
  },
  {
    slug: 'wordpress-optimization',
    title: 'เทคนิคเพิ่มความเร็ว WordPress ให้โหลดไว',
    excerpt: 'รวมเทคนิคและปลั๊กอินสำหรับเพิ่มประสิทธิภาพ WordPress ตั้งแต่ Cache จนถึง CDN',
    category: 'WordPress',
    date: '20 ม.ค. 2026',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80',
  },
  {
    slug: 'backup-strategy',
    title: 'วางแผน Backup Strategy สำหรับธุรกิจ',
    excerpt: 'ทำไม Backup ถึงสำคัญ และวิธีวางแผน Backup ที่มีประสิทธิภาพเพื่อปกป้องข้อมูล',
    category: 'Cloud',
    date: '15 ม.ค. 2026',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
  },
]
</script>
