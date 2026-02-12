<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-slate-950 pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-950 via-slate-950 to-slate-900"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      <div class="section-container relative z-10 text-center">
        <div class="badge-primary mx-auto mb-6">
          <Icon name="lucide:briefcase" class="w-3.5 h-3.5" />
          Portfolio
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4">ผลงานของเรา</h1>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">
          ผลงานที่เราภูมิใจ สะท้อนคุณภาพและความเชี่ยวชาญของทีม OneSiamSoft
        </p>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="py-24">
      <div class="section-container">
        <!-- Category Filters -->
        <div class="flex flex-wrap items-center gap-2 mb-12">
          <button v-for="cat in categories" :key="cat"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
            :class="selectedCategory === cat
              ? 'bg-primary-600 text-white shadow-sm'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
            @click="selectedCategory = cat">
            {{ cat }}
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a v-for="project in filteredProjects" :key="project.title"
            :href="project.url" target="_blank" rel="noopener noreferrer"
            class="card card-hover overflow-hidden group cursor-pointer">
            <!-- Preview -->
            <div class="relative h-56 overflow-hidden bg-gray-100">
              <img :src="project.screenshot" :alt="project.title" 
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <!-- Overlay on hover -->
              <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="flex items-center gap-2 text-white font-semibold">
                  <Icon name="lucide:external-link" class="w-5 h-5" />
                  เยี่ยมชมเว็บไซต์
                </div>
              </div>
            </div>

            <!-- Info -->
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="badge text-xs" :class="project.badgeClass">{{ project.category }}</span>
                <span class="text-gray-400 text-xs">{{ project.year }}</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-4">{{ project.desc }}</p>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-1.5">
                <span v-for="tech in project.tech" :key="tech"
                  class="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-md font-medium">
                  {{ tech }}
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-20 bg-gray-50">
      <div class="section-container">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-4xl font-extrabold text-gray-900 mb-1">{{ stat.value }}</div>
            <div class="text-sm text-gray-500">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24">
      <div class="section-container text-center">
        <h2 class="section-heading text-gray-900 mb-4">มีโปรเจ็คในใจ?</h2>
        <p class="section-subheading mb-8">ให้เราช่วยสร้างผลงานชิ้นถัดไปให้กับธุรกิจของคุณ — ปรึกษาฟรี</p>
        <NuxtLink to="/contact" class="btn-primary !py-3.5 !text-base">
          <Icon name="lucide:message-circle" class="w-5 h-5" />
          ปรึกษาโปรเจ็ค
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'ผลงานของเรา — OneSiamSoft Portfolio',
  description: 'ผลงานเว็บไซต์และระบบที่ OneSiamSoft พัฒนาให้ลูกค้า ครอบคลุมทั้ง Web Application, E-Commerce และ Platform',
})

const categories = ['ทั้งหมด', 'Web Platform', 'Web Application', 'E-Commerce']
const selectedCategory = ref('ทั้งหมด')

const projects = [
  {
    title: 'MetaSocial24Hr',
    url: 'https://metasocial24hr.com/',
    category: 'Web Platform',
    badgeClass: 'bg-blue-50 text-blue-700 ring-1 ring-blue-100',
    screenshot: 'https://api.microlink.io/?url=https://metasocial24hr.com&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=720',
    year: '2026',
    desc: 'แพลตฟอร์มบริการด้านโซเชียลมีเดียครบวงจร ปั้มไลค์ ปั้มติดตาม เพิ่มยอดขายการตลาด รองรับ API สำหรับตัวแทนจำหน่าย',
    tech: ['Web App', 'Payment Gateway', 'API', 'Social Media'],
  },
  {
    title: 'OneSiamSoft',
    url: 'https://onesiamsoft.com/',
    category: 'Web Application',
    badgeClass: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100',
    screenshot: 'https://api.microlink.io/?url=https://onesiamsoft.com&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=720',
    year: '2026',
    desc: 'เว็บไซต์องค์กรสำหรับบริษัท วัน สยามซอฟท์ จำกัด ให้บริการ Cloud Server, Web Hosting, Domain และ Custom Solutions',
    tech: ['NuxtJS', 'NestJS', 'Prisma', 'PostgreSQL'],
  },
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'ทั้งหมด') return projects
  return projects.filter(p => p.category === selectedCategory.value)
})

const stats = [
  { value: '50+', label: 'โปรเจ็คที่สำเร็จ' },
  { value: '30+', label: 'ลูกค้าองค์กร' },
  { value: '100%', label: 'ส่งมอบตรงเวลา' },
  { value: '5 ★', label: 'ความพึงพอใจ' },
]
</script>
