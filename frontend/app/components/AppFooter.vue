<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold">O</span>
            </div>
            <span class="text-lg font-bold text-white">OneSiam<span class="text-primary-400">Soft</span></span>
          </div>
          <p class="text-sm leading-relaxed">
            ผู้ให้บริการ Cloud Server Hosting ที่รวดเร็วและปลอดภัย เพื่อขับเคลื่อนธุรกิจของคุณสู่อนาคต
          </p>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-white font-semibold mb-4">บริการ</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/services" class="hover:text-white transition">Cloud Server</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-white transition">Web Hosting</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-white transition">Domain</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-white transition">Dedicated Server</NuxtLink></li>
          </ul>
        </div>

        <!-- Company Links -->
        <div>
          <h3 class="text-white font-semibold mb-4">บริษัท</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/about" class="hover:text-white transition">เกี่ยวกับเรา</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-white transition">บทความ</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-white transition">ติดต่อเรา</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-white font-semibold mb-4">ติดต่อ</h3>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <span>info@onesiamsoft.com</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span>กรุงเทพมหานคร, ประเทศไทย</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
        <p>&copy; {{ new Date().getFullYear() }} OneSiamSoft. สงวนลิขสิทธิ์ทุกประการ</p>
      </div>
    </div>
  </footer>
</template>
