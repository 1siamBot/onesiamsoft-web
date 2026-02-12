<template>
  <footer class="border-t border-white/[0.06] bg-[#080e1a]">
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Brand -->
        <div class="md:col-span-1">
          <div class="flex items-center gap-3 mb-4">
            <img src="/images/logo.jpg" class="h-9 w-9 rounded-lg" alt="OneSiamSoft" />
            <span class="text-lg font-bold text-white">OneSiam<span class="text-sky-400">Soft</span></span>
          </div>
          <p class="text-sm text-gray-500 leading-relaxed">
            บริษัท วัน สยามซอฟท์ จำกัด<br />
            ผู้ให้บริการ Cloud Infrastructure และ Web Solutions ครบวงจร
          </p>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-sm font-semibold text-white mb-4">บริการ</h4>
          <ul class="space-y-2.5">
            <li v-for="s in services" :key="s"><NuxtLink to="/services" class="text-sm text-gray-500 hover:text-sky-400 transition-colors">{{ s }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="text-sm font-semibold text-white mb-4">บริษัท</h4>
          <ul class="space-y-2.5">
            <li><NuxtLink to="/about" class="text-sm text-gray-500 hover:text-sky-400 transition-colors">เกี่ยวกับเรา</NuxtLink></li>
            <li><NuxtLink to="/portfolio" class="text-sm text-gray-500 hover:text-sky-400 transition-colors">ผลงาน</NuxtLink></li>
            <li><NuxtLink to="/blog" class="text-sm text-gray-500 hover:text-sky-400 transition-colors">บล็อก</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-sm text-gray-500 hover:text-sky-400 transition-colors">ติดต่อเรา</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-sm font-semibold text-white mb-4">ติดต่อ</h4>
          <ul class="space-y-2.5 text-sm text-gray-500">
            <li class="flex items-start gap-2">
              <Icon name="lucide:mail" class="w-4 h-4 mt-0.5 text-sky-400 shrink-0" />
              support@onesiamsoft.com
            </li>
            <li class="flex items-start gap-2">
              <Icon name="lucide:map-pin" class="w-4 h-4 mt-0.5 text-sky-400 shrink-0" />
              <span>28/99 ซอยหมู่บ้านบ่อฝ้าย ต.หัวหิน อ.หัวหิน จ.ประจวบคีรีขันธ์ 77110</span>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="lucide:clock" class="w-4 h-4 mt-0.5 text-sky-400 shrink-0" />
              เปิดให้บริการ 24 ชั่วโมง
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <hr class="section-divider mt-12 mb-8" />

      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-600">
          © {{ new Date().getFullYear() }} OneSiamSoft. All rights reserved.
        </p>
        <!-- Back to top -->
        <button
          @click="scrollToTop"
          class="flex items-center gap-2 text-sm text-gray-500 hover:text-sky-400 transition-colors group"
        >
          กลับด้านบน
          <span class="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-sky-500/10 group-hover:border-sky-500/20 transition-all">
            <Icon name="lucide:arrow-up" class="w-4 h-4" />
          </span>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
const services = ['Cloud Server', 'Web Hosting', 'Domain', 'Dedicated Server', 'Business Email', 'WordPress Hosting']

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
