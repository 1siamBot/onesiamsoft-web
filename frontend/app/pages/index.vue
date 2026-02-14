<template>
  <div>
    <!-- Hero with Background Image -->
    <section class="relative min-h-screen flex items-center">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop&q=80"
          alt="Data Center" class="img-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-[#0c1222] via-[#0c1222]/90 to-[#0c1222]/70"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm mb-8">
            <Icon name="lucide:sparkles" class="w-4 h-4" />
            Trusted by 500+ businesses
          </div>
          <h1 class="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            {{ $t('home.hero.title1') }}
            <span class="block text-sky-400 mt-2">{{ $t('home.hero.title2') }}</span>
          </h1>
          <p class="text-lg lg:text-xl text-gray-300 mt-8 max-w-xl leading-relaxed">
            {{ $t('home.hero.subtitle') }}
          </p>
          <div class="flex flex-wrap gap-4 mt-10">
            <NuxtLink :to="localePath('/contact')"
              class="px-8 py-4 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/25 text-lg">
              {{ $t('home.hero.cta') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/services')"
              class="px-8 py-4 rounded-xl border border-white/[0.15] text-white font-semibold hover:bg-white/[0.08] transition-all text-lg">
              {{ $t('home.hero.cta2') }}
            </NuxtLink>
          </div>
          <div class="flex flex-wrap gap-8 mt-16">
            <div v-for="badge in badges" :key="badge.label" class="flex items-center gap-3 text-sm text-gray-300">
              <div class="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                <Icon :name="badge.icon" class="w-5 h-5 text-sky-400" />
              </div>
              {{ badge.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="relative py-20 border-y border-white/[0.06]">
      <div class="absolute inset-0 bg-gradient-to-b from-sky-500/[0.03] to-transparent"></div>
      <div class="max-w-7xl mx-auto px-6 relative">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-4xl lg:text-6xl font-bold text-white">{{ stat.value }}</div>
            <div class="text-gray-500 mt-2 text-lg">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services with Images -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('home.services.title') }}</h2>
          <p class="section-subtitle">{{ $t('home.services.subtitle') }}</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <NuxtLink v-for="service in services" :key="service.title" :to="localePath('/services')"
            class="glass-card-hover overflow-hidden group">
            <div class="h-40 overflow-hidden">
              <img :src="service.image" :alt="service.title"
                class="img-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div class="p-5">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-9 h-9 rounded-lg bg-sky-500/10 flex items-center justify-center shrink-0">
                  <Icon :name="service.icon" class="w-5 h-5 text-sky-400" />
                </div>
                <h3 class="text-white font-semibold">{{ service.title }}</h3>
              </div>
              <p class="text-gray-500 text-sm leading-relaxed">{{ service.desc }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section-padding border-y border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <div class="w-full lg:w-1/2">
            <div class="relative rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80"
                alt="Global Network" class="w-full h-[400px] object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-transparent to-transparent"></div>
              <div class="absolute bottom-6 left-6 right-6">
                <div class="flex gap-4">
                  <div v-for="mini in miniStats" :key="mini.label" class="glass-card px-4 py-3 text-center flex-1">
                    <div class="text-xl font-bold text-white">{{ mini.value }}</div>
                    <div class="text-xs text-gray-400">{{ mini.label }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <h2 class="section-title text-left">{{ $t('home.whyUs.title') }}</h2>
            <p class="text-gray-400 mt-4 leading-relaxed">{{ $t('home.whyUs.subtitle') }}</p>
            <div class="space-y-6 mt-8">
              <div v-for="feature in features" :key="feature.title" class="flex gap-4">
                <div class="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <Icon :name="feature.icon" class="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h3 class="text-white font-semibold text-lg">{{ feature.title }}</h3>
                  <p class="text-gray-500 text-sm mt-1 leading-relaxed">{{ feature.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Domain Pricing -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ locale === 'th' ? 'จดโดเมนกับเรา' : 'Register Your Domain' }}</h2>
          <p class="section-subtitle">{{ locale === 'th' ? 'ราคาเริ่มต้นที่คุณจับต้องได้' : 'Affordable pricing for every business' }}</p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="domain in domains" :key="domain.ext" class="glass-card-hover p-8 text-center">
            <div class="text-3xl font-bold text-sky-400 mb-3">{{ domain.ext }}</div>
            <div class="text-white">
              <span class="text-4xl font-bold">{{ domain.price }}</span>
              <span class="text-gray-500 text-sm block mt-1">{{ locale === 'th' ? 'บาท/ปี' : 'THB/year' }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding border-y border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ locale === 'th' ? 'ลูกค้าพูดถึงเรา' : 'What Our Clients Say' }}</h2>
          <p class="section-subtitle">{{ locale === 'th' ? 'ความไว้วางใจจากลูกค้ากว่า 500 ราย' : 'Trusted by over 500 clients' }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="t in testimonials" :key="t.name" class="glass-card p-8">
            <div class="flex gap-1 mb-4">
              <Icon v-for="i in 5" :key="i" name="lucide:star" class="w-4 h-4 text-yellow-400" />
            </div>
            <p class="text-gray-300 leading-relaxed mb-6">"{{ t.quote }}"</p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold text-sm">
                {{ t.initial }}
              </div>
              <div>
                <div class="text-white font-semibold text-sm">{{ t.name }}</div>
                <div class="text-gray-500 text-xs">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding">
      <div class="max-w-5xl mx-auto px-6">
        <div class="relative rounded-3xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1200&h=500&fit=crop&q=80"
            alt="Cloud" class="w-full h-[400px] object-cover" />
          <div class="absolute inset-0 bg-[#0c1222]/80"></div>
          <div class="absolute inset-0 flex items-center justify-center text-center p-8">
            <div>
              <h2 class="text-3xl lg:text-5xl font-bold text-white mb-4">{{ $t('home.cta.title') }}</h2>
              <p class="text-gray-300 text-lg mb-8 max-w-lg mx-auto">{{ $t('home.cta.subtitle') }}</p>
              <div class="flex flex-wrap justify-center gap-4">
                <NuxtLink :to="localePath('/contact')"
                  class="px-8 py-3.5 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/25">
                  {{ $t('home.cta.button') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/services')"
                  class="px-8 py-3.5 rounded-xl border border-white/[0.2] text-white font-semibold hover:bg-white/[0.1] transition-all">
                  {{ $t('home.hero.cta2') }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()

useSeoMeta({ title: 'OneSiamSoft - Enterprise Cloud Infrastructure', description: t('home.hero.subtitle') })

const badges = [
  { icon: 'lucide:shield-check', label: 'SSL Free' },
  { icon: 'lucide:headphones', label: '24/7 Support' },
  { icon: 'lucide:database', label: 'Auto Backup' },
]

const stats = computed(() => [
  { value: '99.9%', label: t('home.stats.uptime') },
  { value: '500+', label: t('home.stats.clients') },
  { value: '24/7', label: t('home.stats.support') },
  { value: '10+', label: t('home.stats.experience') },
])

const miniStats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: 'Tier 3', label: 'Data Center' },
  { value: 'NVMe', label: 'SSD Storage' },
]

const services = computed(() => [
  { icon: 'lucide:cloud', title: t('home.services.cloudServer'), desc: t('home.services.cloudServerDesc'), image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=300&fit=crop&q=80' },
  { icon: 'lucide:globe', title: t('home.services.webHosting'), desc: t('home.services.webHostingDesc'), image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&q=80' },
  { icon: 'lucide:at-sign', title: t('home.services.domain'), desc: t('home.services.domainDesc'), image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=500&h=300&fit=crop&q=80' },
  { icon: 'lucide:server', title: t('home.services.dedicatedServer'), desc: t('home.services.dedicatedServerDesc'), image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&q=80' },
  { icon: 'lucide:mail', title: t('home.services.businessEmail'), desc: t('home.services.businessEmailDesc'), image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&h=300&fit=crop&q=80' },
  { icon: 'lucide:file-code', title: t('home.services.wordpress'), desc: t('home.services.wordpressDesc'), image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&h=300&fit=crop&q=80' },
])

const features = computed(() => [
  { icon: 'lucide:zap', title: t('home.whyUs.speed'), desc: t('home.whyUs.speedDesc') },
  { icon: 'lucide:shield', title: t('home.whyUs.security'), desc: t('home.whyUs.securityDesc') },
  { icon: 'lucide:headphones', title: t('home.whyUs.support'), desc: t('home.whyUs.supportDesc') },
  { icon: 'lucide:refresh-cw', title: t('home.whyUs.uptime'), desc: t('home.whyUs.uptimeDesc') },
])

const domains = [
  { ext: '.com', price: '500' },
  { ext: '.in.th', price: '400' },
  { ext: '.co.th', price: '580' },
  { ext: '.net', price: '500' },
]

const testimonials = computed(() => locale.value === 'th' ? [
  { quote: 'ใช้บริการมากว่า 3 ปี เซิร์ฟเวอร์เสถียร ไม่เคยมีปัญหา ทีมซัพพอร์ตตอบไว', name: 'คุณสมชาย', initial: 'ส', role: 'เจ้าของร้านค้าออนไลน์' },
  { quote: 'ย้ายมาจากที่อื่น เว็บเร็วขึ้นเห็นได้ชัด ราคาคุ้มค่ามาก แนะนำเลย', name: 'คุณวิภา', initial: 'ว', role: 'ผู้จัดการ IT, บริษัทขนส่ง' },
  { quote: 'ระบบ Auto Backup ช่วยได้มากเลย ไม่ต้องกังวลเรื่องข้อมูลหาย บริการดีมาก', name: 'คุณณัฐพล', initial: 'ณ', role: 'Web Developer' },
] : [
  { quote: 'Been using for over 3 years. Servers are stable, never had issues. Support team responds quickly.', name: 'Somchai', initial: 'S', role: 'E-commerce Owner' },
  { quote: 'Migrated from another provider. Website is noticeably faster. Great value for money. Highly recommended.', name: 'Wipa', initial: 'W', role: 'IT Manager, Logistics' },
  { quote: 'Auto Backup is a lifesaver. No more worrying about data loss. Excellent service all around.', name: 'Nattapon', initial: 'N', role: 'Web Developer' },
])
</script>
