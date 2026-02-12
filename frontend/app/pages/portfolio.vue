<template>
  <div class="bg-slate-950 min-h-screen">
    <!-- Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-950 via-slate-950 to-slate-900"></div>
      <div class="absolute top-0 right-1/3 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div class="section-container relative z-10 text-center">
        <div class="badge-primary mx-auto mb-6">
          <Icon name="lucide:briefcase" class="w-3.5 h-3.5" />
          Portfolio
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4">ผลงานของเรา</h1>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">
          โปรเจกต์ที่เราภูมิใจนำเสนอ — ตัวอย่างผลงานจริงที่ส่งมอบให้ลูกค้า
        </p>
      </div>
    </section>

    <!-- Projects -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-3xl"></div>
      <div class="section-container relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div v-for="project in projects" :key="project.title" class="glass-card-hover overflow-hidden group">
            <div class="relative h-64 overflow-hidden">
              <img :src="project.image" :alt="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
            </div>
            <div class="p-8">
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tag in project.tags" :key="tag" class="badge-primary text-xs">{{ tag }}</span>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">{{ project.title }}</h3>
              <p class="text-gray-400 leading-relaxed mb-6">{{ project.desc }}</p>
              <div class="flex flex-wrap gap-4">
                <a v-if="project.url" :href="project.url" target="_blank" rel="noopener"
                  class="btn-primary !text-sm">
                  <Icon name="lucide:external-link" class="w-4 h-4" />
                  เยี่ยมชมเว็บไซต์
                </a>
                <button class="btn-secondary !bg-white/10 !text-white !border-white/10 hover:!bg-white/20 !text-sm">
                  <Icon name="lucide:info" class="w-4 h-4" />
                  รายละเอียด
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-white/[0.02]"></div>
      <div class="absolute top-0 left-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-3xl -translate-x-1/2"></div>
      <div class="section-container relative z-10 text-center">
        <h2 class="text-3xl font-extrabold text-white mb-4">มีโปรเจกต์ในใจ?</h2>
        <p class="text-gray-400 mb-8 max-w-xl mx-auto">ให้เราช่วยคุณทำให้เป็นจริง — ปรึกษาฟรี ไม่มีค่าใช้จ่าย</p>
        <NuxtLink to="/contact" class="btn-primary !py-3.5 !text-base">
          <Icon name="lucide:message-circle" class="w-5 h-5" />
          ปรึกษาโปรเจกต์
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'ผลงาน — OneSiamSoft Portfolio',
  description: 'ผลงานของ OneSiamSoft - ตัวอย่างโปรเจกต์ที่เราส่งมอบให้ลูกค้า ทั้ง Web Application, Cloud Infrastructure และ Custom Solutions',
})

const projects = [
  {
    title: 'MetaSocial24Hr',
    desc: 'แพลตฟอร์ม Social Media Management ครบวงจร สำหรับจัดการโซเชียลมีเดียหลายแพลตฟอร์มในที่เดียว พร้อมระบบ Analytics, Scheduling และ Auto-posting ที่ทำงาน 24 ชั่วโมง',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    url: 'https://metasocial24hr.com/',
    tags: ['Web Application', 'Social Media', 'Cloud Infrastructure'],
  },
  {
    title: 'OneSiamSoft Corporate Website',
    desc: 'เว็บไซต์องค์กรของ OneSiamSoft ออกแบบด้วย Modern UI/UX พร้อมระบบ CMS รองรับ SEO อย่างเต็มรูปแบบ และ Performance Optimization สำหรับประสบการณ์ผู้ใช้ที่ดีที่สุด',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    url: 'https://www.onesiamsoft.com',
    tags: ['Corporate Website', 'Nuxt.js', 'SEO Optimized'],
  },
]
</script>
