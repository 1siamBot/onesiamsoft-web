<template>
  <footer class="relative border-t border-white/5">
    <div class="section-container py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
        <div class="lg:col-span-4">
          <div class="flex items-center gap-2.5 mb-5">
            <img src="/images/logo.jpg" alt="OneSiamSoft" class="w-8 h-8 rounded-lg object-contain" />
            <span class="text-lg font-bold text-white">OneSiam<span class="text-primary-400">Soft</span></span>
          </div>
          <p class="text-sm leading-relaxed text-gray-500 mb-6 max-w-sm">
            ผู้ให้บริการ Cloud Infrastructure และ Managed Hosting ชั้นนำของประเทศไทย 
            ด้วยมาตรฐาน Enterprise-Grade เพื่อขับเคลื่อนธุรกิจดิจิทัลของคุณ
          </p>
          <div class="flex items-center gap-3">
            <a v-for="social in socials" :key="social.icon" :href="social.url" target="_blank"
              class="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-500/20 flex items-center justify-center transition-all duration-200 border border-white/5 hover:border-primary-500/30">
              <Icon :name="social.icon" class="w-4 h-4 text-gray-500 hover:text-primary-400" />
            </a>
          </div>
        </div>

        <div class="lg:col-span-2">
          <h4 class="text-white font-semibold text-sm mb-4 uppercase tracking-wider">บริการ</h4>
          <ul class="space-y-3">
            <li v-for="link in serviceLinks" :key="link.label">
              <NuxtLink :to="link.to" class="text-sm text-gray-500 hover:text-primary-400 transition-colors duration-200">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-2">
          <h4 class="text-white font-semibold text-sm mb-4 uppercase tracking-wider">บริษัท</h4>
          <ul class="space-y-3">
            <li v-for="link in companyLinks" :key="link.label">
              <NuxtLink :to="link.to" class="text-sm text-gray-500 hover:text-primary-400 transition-colors duration-200">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-4">
          <h4 class="text-white font-semibold text-sm mb-4 uppercase tracking-wider">ติดต่อเรา</h4>
          <ul class="space-y-3 text-sm text-gray-500">
            <li class="flex items-start gap-3">
              <Icon name="lucide:mail" class="w-4 h-4 mt-0.5 text-primary-400 flex-shrink-0" />
              <span>support@onesiamsoft.com</span>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="lucide:phone" class="w-4 h-4 mt-0.5 text-primary-400 flex-shrink-0" />
              <span>02-xxx-xxxx</span>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="lucide:map-pin" class="w-4 h-4 mt-0.5 text-primary-400 flex-shrink-0" />
              <span>28/99 ซอยหมู่บ้านบ่อฝ้าย ต.หัวหิน อ.หัวหิน จ.ประจวบคีรีขันธ์ 77110</span>
            </li>
          </ul>
          <div class="mt-6 flex flex-wrap items-center gap-2">
            <div class="badge bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs">
              <Icon name="lucide:shield-check" class="w-3 h-3" /> SSL Secured
            </div>
            <div class="badge bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs">
              <Icon name="lucide:server" class="w-3 h-3" /> 99.9% Uptime
            </div>
            <div class="badge bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs">
              <Icon name="lucide:headphones" class="w-3 h-3" /> 24/7 Support
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t border-white/5">
      <div class="section-container py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p class="text-xs text-gray-600">© {{ new Date().getFullYear() }} บริษัท วัน สยามซอฟท์ จำกัด สงวนลิขสิทธิ์ทุกประการ</p>
        <div class="flex items-center gap-4 text-xs text-gray-600">
          <NuxtLink to="/privacy" class="hover:text-gray-400 transition">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-gray-400 transition">Terms of Service</NuxtLink>
          <NuxtLink to="/sla" class="hover:text-gray-400 transition">SLA</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socials = [
  { icon: 'lucide:facebook', url: '#' },
  { icon: 'lucide:twitter', url: '#' },
  { icon: 'lucide:linkedin', url: '#' },
]
const serviceLinks = [
  { label: 'Cloud Server', to: '/services' },
  { label: 'Web Hosting', to: '/services' },
  { label: 'Domain Registration', to: '/services' },
  { label: 'Dedicated Server', to: '/services' },
  { label: 'Custom Solutions', to: '/services' },
]
const companyLinks = [
  { label: 'เกี่ยวกับเรา', to: '/about' },
  { label: 'ผลงาน', to: '/portfolio' },
  { label: 'บทความ', to: '/blog' },
  { label: 'ติดต่อเรา', to: '/contact' },
]
</script>
