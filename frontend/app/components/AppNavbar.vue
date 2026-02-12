<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-lg">O</span>
          </div>
          <span class="text-xl font-bold text-gray-900">OneSiam<span class="text-primary-600">Soft</span></span>
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/" class="text-gray-700 hover:text-primary-600 font-medium transition">หน้าแรก</NuxtLink>
          <NuxtLink to="/services" class="text-gray-700 hover:text-primary-600 font-medium transition">บริการ</NuxtLink>
          <NuxtLink to="/blog" class="text-gray-700 hover:text-primary-600 font-medium transition">บทความ</NuxtLink>
          <NuxtLink to="/about" class="text-gray-700 hover:text-primary-600 font-medium transition">เกี่ยวกับเรา</NuxtLink>
          <NuxtLink to="/contact" class="bg-primary-600 text-white px-5 py-2 rounded-lg hover:bg-primary-700 font-medium transition">ติดต่อเรา</NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden pb-4 space-y-2">
        <NuxtLink to="/" class="block py-2 text-gray-700 hover:text-primary-600 font-medium" @click="mobileMenuOpen = false">หน้าแรก</NuxtLink>
        <NuxtLink to="/services" class="block py-2 text-gray-700 hover:text-primary-600 font-medium" @click="mobileMenuOpen = false">บริการ</NuxtLink>
        <NuxtLink to="/blog" class="block py-2 text-gray-700 hover:text-primary-600 font-medium" @click="mobileMenuOpen = false">บทความ</NuxtLink>
        <NuxtLink to="/about" class="block py-2 text-gray-700 hover:text-primary-600 font-medium" @click="mobileMenuOpen = false">เกี่ยวกับเรา</NuxtLink>
        <NuxtLink to="/contact" class="block py-2 text-primary-600 font-medium" @click="mobileMenuOpen = false">ติดต่อเรา</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const mobileMenuOpen = ref(false)
</script>
