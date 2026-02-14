<template>
  <div>
    <!-- Hero with Image -->
    <section class="relative pt-16 overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&h=600&fit=crop&q=80"
          alt="Portfolio" class="img-cover" />
        <div class="absolute inset-0 bg-gradient-to-b from-[#0c1222]/80 via-[#0c1222]/70 to-[#0c1222]"></div>
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 class="text-4xl lg:text-6xl font-bold text-white tracking-tight">{{ $t('portfolio.hero.title') }}</h1>
        <p class="section-subtitle mt-4">{{ $t('portfolio.hero.subtitle') }}</p>
      </div>
    </section>

    <!-- Projects -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6 space-y-12">
        <div v-for="project in projects" :key="project.name" class="glass-card overflow-hidden">
          <div class="flex flex-col lg:flex-row">
            <div class="w-full lg:w-3/5 h-64 lg:h-auto overflow-hidden">
              <img :src="`https://api.microlink.io/?url=https://${project.url}&screenshot=true&meta=false&embed=screenshot.url`"
                :alt="project.name" class="img-cover" loading="lazy" />
            </div>
            <div class="w-full lg:w-2/5 p-8 flex flex-col justify-center">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-2xl font-bold text-white">{{ project.name }}</h3>
                <a :href="`https://${project.url}`" target="_blank" class="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 hover:bg-sky-500/20 transition-colors">
                  <Icon name="lucide:external-link" class="w-5 h-5" />
                </a>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed mb-6">{{ project.desc }}</p>
              <!-- Stats -->
              <div class="grid grid-cols-3 gap-3 mb-6">
                <div v-for="stat in project.stats" :key="stat.label" class="text-center p-3 rounded-lg bg-white/[0.03]">
                  <div class="text-lg font-bold text-white">{{ stat.value }}</div>
                  <div class="text-xs text-gray-500">{{ stat.label }}</div>
                </div>
              </div>
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
    <section class="section-padding">
      <div class="max-w-3xl mx-auto px-6">
        <div class="relative rounded-2xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&h=400&fit=crop&q=80"
            alt="Office" class="w-full h-[280px] object-cover" />
          <div class="absolute inset-0 bg-[#0c1222]/80"></div>
          <div class="absolute inset-0 flex items-center justify-center text-center p-8">
            <div>
              <h2 class="text-2xl font-bold text-white mb-4">มีโปรเจกต์ในใจ?</h2>
              <p class="text-gray-300 mb-6">ให้เราช่วยสร้างโซลูชันที่ตรงกับความต้องการของคุณ</p>
              <NuxtLink to="/contact" class="inline-block px-8 py-3.5 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/25">
                ปรึกษาฟรี
              </NuxtLink>
            </div>
          </div>
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
    stats: [
      { value: '1K+', label: 'Users' },
      { value: '99.9%', label: 'Uptime' },
      { value: '24/7', label: 'Support' },
    ],
  },
  {
    name: 'OneSiamSoft',
    url: 'onesiamsoft.com',
    desc: 'เว็บไซต์หลักของบริษัท ออกแบบด้วย Modern Stack รองรับทุกอุปกรณ์ พร้อมระบบจัดการเนื้อหาที่ใช้งานง่าย',
    tags: ['Nuxt.js', 'Cloud Hosting', 'Responsive', 'SEO'],
    stats: [
      { value: 'A+', label: 'PageSpeed' },
      { value: 'SSR', label: 'Rendering' },
      { value: 'SEO', label: 'Optimized' },
    ],
  },
]
</script>
