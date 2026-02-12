<template>
  <div>
    <section class="pt-32 pb-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-sm text-sky-400 font-medium tracking-wide uppercase mb-4">Portfolio</p>
          <h1 class="heading-xl mb-6">ผลงาน<span class="accent">ของเรา</span></h1>
          <p class="text-lg text-gray-400 leading-relaxed">โปรเจกต์ที่เราภูมิใจนำเสนอ</p>
        </div>
      </div>
    </section>

    <section class="pb-32">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="project in projects" :key="project.name" class="glass-card-hover overflow-hidden group">
            <div class="aspect-video overflow-hidden bg-white/[0.02]">
              <img :src="project.screenshot" :alt="project.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-8">
              <h3 class="text-xl font-semibold text-white mb-2">{{ project.name }}</h3>
              <p class="text-gray-400 mb-6">{{ project.desc }}</p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tag in project.tags" :key="tag" class="text-xs text-gray-500 bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded-full">{{ tag }}</span>
              </div>
              <a :href="'https://' + project.url" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors">
                {{ project.url }}
                <Icon name="lucide:external-link" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'ผลงาน — OneSiamSoft',
  description: 'ผลงานที่ผ่านมาของ OneSiamSoft',
})

const projects = [
  {
    name: 'MetaSocial24Hr',
    url: 'metasocial24hr.com',
    desc: 'แพลตฟอร์ม Social Media Management สำหรับธุรกิจ ช่วยจัดการโซเชียลมีเดียหลายช่องทางในที่เดียว',
    screenshot: 'https://api.microlink.io/?url=https://metasocial24hr.com&screenshot=true&meta=false&embed=screenshot.url',
    tags: ['Web Application', 'Social Media', 'SaaS'],
  },
  {
    name: 'OneSiamSoft',
    url: 'onesiamsoft.com',
    desc: 'เว็บไซต์บริษัทและระบบจัดการบริการ Cloud Infrastructure แบบครบวงจร',
    screenshot: 'https://api.microlink.io/?url=https://onesiamsoft.com&screenshot=true&meta=false&embed=screenshot.url',
    tags: ['Corporate Website', 'Cloud Platform', 'Nuxt.js'],
  },
]
</script>
