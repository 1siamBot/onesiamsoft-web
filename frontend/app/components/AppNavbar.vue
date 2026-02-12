<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-[#0c1222]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/10' : 'bg-transparent border-b border-transparent'"
  >
    <!-- Subtle glow line when scrolled -->
    <div v-if="scrolled" class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3">
        <img src="/images/logo.jpg" class="h-9 w-9 rounded-lg shadow-lg" alt="OneSiamSoft" />
        <span class="text-lg font-bold text-white">OneSiam<span class="text-sky-400">Soft</span></span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm transition-colors relative py-1"
          :class="isActive(link.to) ? 'text-sky-400' : 'text-gray-400 hover:text-white'"
        >
          {{ link.label }}
          <span
            v-if="isActive(link.to)"
            class="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-400 rounded-full"
          />
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
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="open" class="md:hidden border-t border-white/[0.06] bg-[#0c1222]/95 backdrop-blur-xl px-6 py-4 space-y-3">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          @click="open = false"
          class="block py-2 transition-colors"
          :class="isActive(link.to) ? 'text-sky-400' : 'text-gray-400 hover:text-white'"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/contact" @click="open = false"
          class="block text-center px-5 py-2.5 font-medium rounded-xl bg-sky-500 text-white">
          ติดต่อเรา
        </NuxtLink>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const open = ref(false)
const scrolled = ref(false)

const links = [
  { label: 'หน้าแรก', to: '/' },
  { label: 'บริการ', to: '/services' },
  { label: 'ผลงาน', to: '/portfolio' },
  { label: 'บล็อก', to: '/blog' },
  { label: 'เกี่ยวกับเรา', to: '/about' },
]

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>
