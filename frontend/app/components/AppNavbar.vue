<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-[#0c1222]/80 backdrop-blur-xl border-b border-white/[0.06]' : ''"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <img src="/images/logo.jpg" alt="OneSiamSoft" class="h-8 w-8 rounded-lg" />
          <span class="text-white font-semibold text-lg">OneSiamSoft</span>
        </NuxtLink>

        <!-- Desktop Links -->
        <div class="hidden lg:flex items-center gap-8">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary text-sm !px-5 !py-2">
            ติดต่อเรา
          </NuxtLink>
        </div>

        <!-- Mobile Toggle -->
        <button class="lg:hidden text-gray-400 hover:text-white" @click="mobileOpen = !mobileOpen">
          <Icon :name="mobileOpen ? 'lucide:x' : 'lucide:menu'" class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="lg:hidden bg-[#0c1222]/95 backdrop-blur-xl border-t border-white/[0.06]">
        <div class="px-6 py-4 space-y-1">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="block py-3 text-gray-400 hover:text-white transition-colors"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/contact" class="block mt-4 btn-primary text-center text-sm" @click="mobileOpen = false">
            ติดต่อเรา
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
const links = [
  { label: 'หน้าแรก', to: '/' },
  { label: 'บริการ', to: '/services' },
  { label: 'ผลงาน', to: '/portfolio' },
  { label: 'บทความ', to: '/blog' },
  { label: 'เกี่ยวกับเรา', to: '/about' },
]

const mobileOpen = ref(false)
const scrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
})
</script>
