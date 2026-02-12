<template>
  <footer class="bg-slate-950 text-gray-400">
    <!-- Main Footer -->
    <div class="section-container py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
        <!-- Brand -->
        <div class="lg:col-span-4">
          <div class="flex items-center gap-2.5 mb-5">
            <img src="/images/logo.jpg" alt="OneSiamSoft" class="w-8 h-8 rounded-lg object-contain" />
            <span class="text-lg font-bold text-white">OneSiam<span class="text-primary-400">Soft</span></span>
          </div>
          <p class="text-sm leading-relaxed mb-6 max-w-sm">
            ผู้ให้บริการ Cloud Infrastructure และ Managed Hosting ชั้นนำของประเทศไทย 
            ด้วยมาตรฐาน Enterprise-Grade เพื่อขับเคลื่อนธุรกิจดิจิทัลของคุณ
          </p>
          <div class="flex items-center gap-3">
            <a v-for="social in socials" :key="social.icon" :href="social.url" target="_blank"
              class="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-600 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5">
              <Icon :name="social.icon" class="w-4 h-4 text-gray-400 group-hover:text-white" />
            </a>
          </div>
        </div>

        <!-- Services -->
        <div class="lg:col-span-2">
          <h4 class="text-white font-semibold text-sm mb-4 uppercase tracking-wider">บริการ</h4>
          <ul class="space-y-3">
            <li v-for="link in serviceLinks" :key="link.label">
              <NuxtLink :to="link.to" class="text-sm hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                <span class="w-1 h-1 rounded-full bg-primary-500"></span>
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div class="lg:col-span-2">
          <h4 class="text-white font-semibold text-sm mb-4 uppercase tracking-wider">บริษัท</h4>
          <ul class="space-y-3">
            <li v-for="link in companyLinks" :key="link.label">
              <NuxtLink :to="link.to" class="text-sm hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                <span class="w-1 h-1 rounded-full bg-primary-500"></span>
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact & Trust -->
        <div class="lg:col-span-4">
          <h4 class="text-white font-semibold text-sm mb-4 uppercase tracking-wider">ติดต่อเรา</h4>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-3">
              <Icon name="lucide:mail" class="w-4 h-4 mt-0.5 text-primary-400 flex-shrink-0" />
              <div>
                <div>info@onesiamsoft.com</div>
                <div>support@onesiamsoft.com</div>
              </div>
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

          <!-- Trust Badges -->
          <div class="mt-6 flex flex-wrap items-center gap-3">
            <div class="badge bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
              <Icon name="lucide:shield-check" class="w-3.5 h-3.5" />
              SSL Secured
            </div>
            <div class="badge bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
              <Icon name="lucide:server" class="w-3.5 h-3.5" />
              99.9% Uptime
            </div>
            <div class="badge bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20">
              <Icon name="lucide:headphones" class="w-3.5 h-3.5" />
              24/7 Support
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/5">
      <div class="section-container py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p class="text-xs">© {{ new Date().getFullYear() }} บริษัท วัน สยามซอฟท์ จำกัด สงวนลิขสิทธิ์ทุกประการ</p>
        <div class="flex items-center gap-4 text-xs">
          <NuxtLink to="/privacy" class="hover:text-white transition">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-white transition">Terms of Service</NuxtLink>
          <NuxtLink to="/sla" class="hover:text-white transition">SLA</NuxtLink>
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
  { icon: 'lucide:github', url: '#' },
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
  { label: 'บทความ', to: '/blog' },
  { label: 'ติดต่อเรา', to: '/contact' },
  { label: 'SLA Agreement', to: '/sla' },
]
</script>
