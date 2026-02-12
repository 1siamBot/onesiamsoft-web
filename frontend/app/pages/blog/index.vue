<template>
  <div class="bg-slate-950 min-h-screen">
    <!-- Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-950 via-slate-950 to-slate-900"></div>
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div class="section-container relative z-10 text-center">
        <div class="badge-primary mx-auto mb-6">
          <Icon name="lucide:newspaper" class="w-3.5 h-3.5" />
          Blog & Insights
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4">บทความ & ความรู้</h1>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">
          อัพเดทเทรนด์เทคโนโลยี เคล็ดลับ Cloud, Hosting, Security และ SEO สำหรับธุรกิจยุคดิจิทัล
        </p>
      </div>
    </section>

    <!-- Articles -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-3xl"></div>
      <div class="section-container relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article v-for="post in posts" :key="post.title" class="glass-card-hover overflow-hidden group">
            <div class="relative h-48 overflow-hidden">
              <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              <div class="absolute bottom-3 left-3">
                <span class="badge-primary text-xs">{{ post.category }}</span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <span class="flex items-center gap-1">
                  <Icon name="lucide:calendar" class="w-3.5 h-3.5" />
                  {{ post.date }}
                </span>
                <span class="flex items-center gap-1">
                  <Icon name="lucide:clock" class="w-3.5 h-3.5" />
                  {{ post.readTime }}
                </span>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors line-clamp-2">{{ post.title }}</h3>
              <p class="text-sm text-gray-400 leading-relaxed line-clamp-3">{{ post.excerpt }}</p>
              <div class="mt-4 flex items-center gap-1 text-primary-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                อ่านต่อ
                <Icon name="lucide:arrow-right" class="w-4 h-4" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'บทความ — OneSiamSoft Blog',
  description: 'บทความความรู้เกี่ยวกับ Cloud Computing, Web Hosting, Security และ SEO จากผู้เชี่ยวชาญ OneSiamSoft',
})

const posts = [
  {
    title: 'Cloud Server vs VPS — เลือกอย่างไรให้เหมาะกับธุรกิจ',
    excerpt: 'เปรียบเทียบข้อดีข้อเสียของ Cloud Server และ VPS แบบดั้งเดิม พร้อมแนะนำการเลือกใช้งานให้เหมาะสมกับขนาดและประเภทธุรกิจของคุณ',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    category: 'Cloud',
    date: '10 ก.พ. 2026',
    readTime: '5 นาที',
  },
  {
    title: '10 เคล็ดลับเร่งความเร็วเว็บไซต์ให้โหลดไว',
    excerpt: 'รวมเทคนิคการ Optimize เว็บไซต์ ตั้งแต่ Image Compression, Caching, CDN ไปจนถึงการเลือก Hosting ที่เหมาะสม เพื่อประสบการณ์ผู้ใช้ที่ดีที่สุด',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    category: 'Hosting',
    date: '5 ก.พ. 2026',
    readTime: '7 นาที',
  },
  {
    title: 'SSL Certificate คืออะไร? ทำไมเว็บไซต์ต้องมี',
    excerpt: 'ทำความเข้าใจ SSL Certificate ความสำคัญต่อความปลอดภัยของเว็บไซต์ ผลกระทบต่อ SEO และวิธีติดตั้ง SSL ให้กับเว็บไซต์ของคุณ',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
    category: 'Security',
    date: '28 ม.ค. 2026',
    readTime: '4 นาที',
  },
  {
    title: 'SEO สำหรับ Hosting — Server ที่ดีช่วยติดอันดับได้',
    excerpt: 'ปัจจัยด้าน Hosting ที่ส่งผลต่อ SEO ไม่ว่าจะเป็น Speed, Uptime, Server Location และ SSL พร้อมวิธีเลือก Hosting ที่เป็นมิตรกับ SEO',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
    category: 'SEO',
    date: '20 ม.ค. 2026',
    readTime: '6 นาที',
  },
  {
    title: 'Backup Strategy — วางแผนสำรองข้อมูลอย่างมือโปร',
    excerpt: 'แนวทางการวางแผน Backup ข้อมูลสำหรับธุรกิจ ทั้ง Full Backup, Incremental Backup และ Disaster Recovery Plan เพื่อป้องกันการสูญเสียข้อมูล',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    category: 'Cloud',
    date: '15 ม.ค. 2026',
    readTime: '5 นาที',
  },
  {
    title: 'DDoS Protection — ปกป้องเว็บไซต์จากการโจมตี',
    excerpt: 'รู้จัก DDoS Attack ประเภทต่างๆ วิธีป้องกัน และ Best Practices ในการรักษาความปลอดภัยของเว็บไซต์และ Server จากการโจมตีทางไซเบอร์',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&q=80',
    category: 'Security',
    date: '8 ม.ค. 2026',
    readTime: '8 นาที',
  },
]
</script>
