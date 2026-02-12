<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 relative overflow-hidden">
      <div class="gradient-orb w-[500px] h-[500px] bg-sky-500 -top-40 right-0"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h1 v-scroll-animate class="text-4xl lg:text-6xl font-bold text-white tracking-tight">ผลงาน</h1>
        <p v-scroll-animate="100" class="section-subtitle mt-4">โปรเจกต์ที่เราภูมิใจนำเสนอ</p>
      </div>
    </section>

    <!-- Projects -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div v-for="(project, i) in projects" :key="project.name" v-scroll-animate="i * 120" class="glass-card-hover overflow-hidden group">
            <!-- Screenshot -->
            <div class="overflow-hidden relative">
              <img :src="`https://api.microlink.io/?url=https://${project.url}&screenshot=true&meta=false&embed=screenshot.url`"
                :alt="project.name" class="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0c1222]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

              <!-- Stats -->
              <div v-if="project.stats" class="flex gap-6 mb-4">
                <div v-for="stat in project.stats" :key="stat.label" class="text-center">
                  <div class="text-lg font-bold text-white">{{ stat.value }}</div>
                  <div class="text-xs text-gray-500">{{ stat.label }}</div>
                </div>
              </div>

              <!-- Tags with icons -->
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
        <div v-scroll-animate class="glass-card p-10 text-center">
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
import { useScrollAnimation } from '~/composables/useScrollAnimation'

useSeoMeta({ title: 'ผลงาน - OneSiamSoft', description: 'ผลงานที่ผ่านมาของ OneSiamSoft' })

const { vScrollAnimate } = useScrollAnimation()

const projects = [
  {
    name: 'MetaSocial24Hr',
    url: 'metasocial24hr.com',
    desc: 'แพลตฟอร์มจัดการโซเชียลมีเดียแบบครบวงจร รองรับการโพสต์อัตโนมัติ วิเคราะห์ข้อมูล และจัดการหลายแพลตฟอร์มในที่เดียว',
    tags: ['Social Media', 'Automation', 'Analytics', 'SaaS'],
    stats: [
      { value: '1K+', label: 'ผู้ใช้งาน' },
      { value: '50K+', label: 'โพสต์/เดือน' },
      { value: '99.9%', label: 'Uptime' },
    ],
  },
  {
    name: 'OneSiamSoft',
    url: 'onesiamsoft.com',
    desc: 'เว็บไซต์หลักของบริษัท ออกแบบด้วย Modern Stack รองรับทุกอุปกรณ์ พร้อมระบบจัดการเนื้อหาที่ใช้งานง่าย',
    tags: ['Nuxt.js', 'Cloud Hosting', 'Responsive', 'SEO'],
    stats: [
      { value: '500+', label: 'ลูกค้า' },
      { value: '<1s', label: 'Load Time' },
      { value: '100', label: 'Lighthouse' },
    ],
  },
]
</script>
