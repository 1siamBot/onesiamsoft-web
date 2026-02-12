<template>
  <footer class="border-t border-white/[0.06]">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-3 mb-4">
            <img src="/images/logo.jpg" alt="OneSiamSoft" class="h-8 w-8 rounded-lg" />
            <span class="text-white font-semibold text-lg">OneSiamSoft</span>
          </NuxtLink>
          <p class="text-sm text-gray-500 leading-relaxed">
            บริษัท วัน สยามซอฟท์ จำกัด<br />
            Cloud Infrastructure & Software Solutions
          </p>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-sm font-semibold text-white mb-4">บริการ</h4>
          <ul class="space-y-3">
            <li v-for="item in services" :key="item">
              <NuxtLink to="/services" class="text-sm text-gray-500 hover:text-gray-300 transition-colors">{{ item }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="text-sm font-semibold text-white mb-4">บริษัท</h4>
          <ul class="space-y-3">
            <li><NuxtLink to="/about" class="text-sm text-gray-500 hover:text-gray-300 transition-colors">เกี่ยวกับเรา</NuxtLink></li>
            <li><NuxtLink to="/portfolio" class="text-sm text-gray-500 hover:text-gray-300 transition-colors">ผลงาน</NuxtLink></li>
            <li><NuxtLink to="/blog" class="text-sm text-gray-500 hover:text-gray-300 transition-colors">บทความ</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-sm text-gray-500 hover:text-gray-300 transition-colors">ติดต่อเรา</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-sm font-semibold text-white mb-4">ติดต่อ</h4>
          <ul class="space-y-3">
            <li class="flex items-start gap-2 text-sm text-gray-500">
              <Icon name="lucide:mail" class="w-4 h-4 mt-0.5 shrink-0" />
              support@onesiamsoft.com
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-500">
              <Icon name="lucide:map-pin" class="w-4 h-4 mt-0.5 shrink-0" />
              <span>28/99 ซอยหมู่บ้านบ่อฝ้าย ต.หัวหิน อ.หัวหิน จ.ประจวบคีรีขันธ์ 77110</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-xs text-gray-600">© {{ new Date().getFullYear() }} OneSiamSoft. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const services = ['Cloud Server', 'Web Hosting', 'Domain', 'Dedicated Server', 'Business Email', 'WordPress Hosting']
</script>
