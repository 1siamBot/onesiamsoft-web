<template>
  <nav class="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0c1222]/80 backdrop-blur-xl">
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3">
        <img src="/images/logo.jpg" class="h-9 w-9 rounded-lg shadow-lg" alt="OneSiamSoft" />
        <span class="text-lg font-bold text-white">OneSiam<span class="text-sky-400">Soft</span></span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to"
          class="text-sm text-gray-400 hover:text-white transition-colors">
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/contact"
          class="px-5 py-2 text-sm font-medium rounded-xl bg-sky-500 text-white hover:bg-sky-400 transition-colors">
          ติดต่อเรา
        </NuxtLink>
      </div>

      <!-- Mobile Toggle -->
      <button @click="open = !open" class="md:hidden text-white">
        <Icon :name="open ? 'lucide:x' : 'lucide:menu'" class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="open" class="md:hidden border-t border-white/[0.06] bg-[#0c1222]/95 backdrop-blur-xl px-6 py-4 space-y-3">
      <NuxtLink v-for="link in links" :key="link.to" :to="link.to" @click="open = false"
        class="block text-gray-400 hover:text-white transition-colors py-2">
        {{ link.label }}
      </NuxtLink>
      <NuxtLink to="/contact" @click="open = false"
        class="block text-center px-5 py-2.5 font-medium rounded-xl bg-sky-500 text-white">
        ติดต่อเรา
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
const open = ref(false)
const links = [
  { label: 'หน้าแรก', to: '/' },
  { label: 'บริการ', to: '/services' },
  { label: 'ผลงาน', to: '/portfolio' },
  { label: 'บล็อก', to: '/blog' },
  { label: 'เกี่ยวกับเรา', to: '/about' },
]
</script>
