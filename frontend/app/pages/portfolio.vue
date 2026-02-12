<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 relative overflow-hidden">
      <div class="gradient-orb w-[500px] h-[500px] bg-sky-500 -top-40 right-0"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h1 class="text-4xl lg:text-6xl font-bold text-white tracking-tight">ผลงาน</h1>
        <p class="section-subtitle mt-4">โปรเจกต์ที่เราภูมิใจนำเสนอ</p>
      </div>
    </section>

    <!-- Projects -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div v-for="project in projects" :key="project.name" class="glass-card-hover overflow-hidden group">
            <!-- Screenshot -->
            <div class="overflow-hidden">
              <img :src="`https://api.microlink.io/?url=https://${project.url}&screenshot=true&meta=false&embed=screenshot.url`"
                :alt="project.name" class="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <!-- Content -->
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-xl font-semibold text-white group-hover:text-sky-400 transition-colors">{{ project.name }}</h3>
                <a :href="`https://${project.url}`" target="_blank" class="text-sky-400 hover:text-sky-300 transition-colors">
                  <Icon name="lucide:external-link" class="w-5 h-5" />
                </a>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed mb-4">{{ project.desc }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in project.tags" :key="tag"
                  class="text-xs px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="pb-24 lg:pb-32">
      <div class="max-w-3xl mx-auto px-6">
        <div class="glass-card p-10 text-center">
          <h2 class="text-2xl font-bold text-white mb-4">มีโปรเจกต์ในใจ?</h2>
          <p class="text-gray-400 mb-6">ให้เราช่วยสร้างโซลูชันที่ตรงกับความต้องการของคุณ</p>
          <NuxtLink to="/contact" class="inline-block px-8 py-3.5 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20">
            ปรึกษาฟรี
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({ title: 'ผลงาน - OneSiamSoft', description: 'ผลงานที่ผ่านมาของ OneSiamSoft' })

const projects = [
  {
    name: 'MetaSocial24Hr',
    url: 'metasocial24hr.com',
    desc: 'แพลตฟอร์มจัดการโซเชียลมีเดียแบบครบวงจร รองรับการโพสต์อัตโนมัติ วิเคราะห์ข้อมูล และจัดการหลายแพลตฟอร์มในที่เดียว',
    tags: ['Social Media', 'Automation', 'Analytics', 'SaaS'],
  },
  {
    name: 'OneSiamSoft',
    url: 'onesiamsoft.com',
    desc: 'เว็บไซต์หลักของบริษัท ออกแบบด้วย Modern Stack รองรับทุกอุปกรณ์ พร้อมระบบจัดการเนื้อหาที่ใช้งานง่าย',
    tags: ['Nuxt.js', 'Cloud Hosting', 'Responsive', 'SEO'],
  },
]
</script>
