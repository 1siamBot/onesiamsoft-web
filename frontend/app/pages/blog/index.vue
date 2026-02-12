<template>
  <div>
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">บทความ</h1>
        <p class="text-blue-100 text-lg">ความรู้และเทคนิคเกี่ยวกับเทคโนโลยีและการพัฒนาธุรกิจออนไลน์</p>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article v-for="post in posts" :key="post.slug"
            class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition border border-gray-100 group">
            <div class="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
              <span class="text-5xl">{{ post.icon }}</span>
            </div>
            <div class="p-6">
              <div class="flex items-center space-x-2 mb-3">
                <span class="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full font-medium">{{ post.category }}</span>
                <span class="text-gray-400 text-xs">{{ post.date }}</span>
              </div>
              <h2 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition">{{ post.title }}</h2>
              <p class="text-gray-500 text-sm leading-relaxed">{{ post.excerpt }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'บทความ - OneSiamSoft',
  description: 'อ่านบทความเกี่ยวกับ Cloud Server, Web Hosting, เทคโนโลยี และการพัฒนาธุรกิจออนไลน์',
})

const posts = [
  { slug: 'cloud-server-101', icon: '☁️', category: 'Cloud', date: '12 ก.พ. 2026', title: 'Cloud Server คืออะไร? ทำไมธุรกิจคุณถึงต้องใช้', excerpt: 'เรียนรู้พื้นฐานของ Cloud Server และข้อดีที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างมั่นคง' },
  { slug: 'ssl-importance', icon: '🔒', category: 'Security', date: '10 ก.พ. 2026', title: 'ทำไม SSL ถึงสำคัญสำหรับเว็บไซต์ทุกเว็บ', excerpt: 'SSL Certificate ไม่ใช่แค่เรื่องความปลอดภัย แต่ยังส่งผลต่อ SEO และความน่าเชื่อถือของเว็บไซต์' },
  { slug: 'choose-hosting', icon: '🌐', category: 'Hosting', date: '8 ก.พ. 2026', title: 'วิธีเลือก Web Hosting ที่เหมาะกับธุรกิจของคุณ', excerpt: 'แนะนำปัจจัยสำคัญในการเลือก hosting ตั้งแต่ความเร็ว ความเสถียร ไปจนถึงบริการหลังการขาย' },
  { slug: 'seo-basics', icon: '🔍', category: 'SEO', date: '5 ก.พ. 2026', title: 'SEO พื้นฐาน: ทำเว็บไซต์ให้ติดหน้าแรก Google', excerpt: 'เทคนิค SEO เบื้องต้นที่ทุกเว็บไซต์ควรทำ เพื่อเพิ่มการมองเห็นบน Search Engine' },
  { slug: 'wordpress-optimization', icon: '📝', category: 'WordPress', date: '3 ก.พ. 2026', title: 'ปรับแต่ง WordPress ให้เร็วขึ้น 10 เท่า', excerpt: 'เทคนิคการ optimize WordPress ตั้งแต่ caching, image optimization ไปจนถึงการเลือก hosting ที่เหมาะสม' },
  { slug: 'backup-strategy', icon: '💾', category: 'Tips', date: '1 ก.พ. 2026', title: 'กลยุทธ์ Backup ที่ทุกธุรกิจต้องมี', excerpt: 'การ backup ข้อมูลไม่ใช่ทางเลือก แต่เป็นสิ่งจำเป็น เรียนรู้วิธีวาง backup strategy ที่มีประสิทธิภาพ' },
]
</script>
