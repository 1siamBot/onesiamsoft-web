<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5 shadow-lg' : 'bg-transparent'">
    <div class="section-container">
      <div class="flex justify-between items-center h-[72px]">
        <NuxtLink to="/" class="flex items-center gap-2.5 group">
          <img src="/images/logo.jpg" alt="OneSiamSoft" class="w-10 h-10 rounded-lg object-contain" />
          <div class="flex flex-col">
            <span class="text-lg font-bold leading-tight text-white">
              OneSiam<span class="text-primary-400">Soft</span>
            </span>
            <span class="text-[10px] font-medium leading-none text-gray-500">ENTERPRISE SOLUTIONS</span>
          </div>
        </NuxtLink>

        <div class="hidden lg:flex items-center gap-1">
          <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/5">
            {{ link.label }}
          </NuxtLink>
          <div class="w-px h-6 mx-2 bg-white/10"></div>
          <NuxtLink to="/contact" class="btn-primary !py-2 !px-5 !text-sm">
            ติดต่อเรา
            <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>

        <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition">
          <Icon :name="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'" class="w-6 h-6" />
        </button>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2">
        <div v-if="mobileMenuOpen" class="lg:hidden pb-4 space-y-1 glass-strong rounded-xl mt-2 p-3">
          <NuxtLink v-for="link in [...navLinks, { to: '/contact', label: 'ติดต่อเรา' }]" :key="link.to"
            :to="link.to"
            class="block py-2.5 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 font-medium transition"
            @click="mobileMenuOpen = false">
            {{ link.label }}
          </NuxtLink>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute()
const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const navLinks = [
  { to: '/', label: 'หน้าแรก' },
  { to: '/services', label: 'บริการ' },
  { to: '/portfolio', label: 'ผลงาน' },
  { to: '/blog', label: 'บทความ' },
  { to: '/about', label: 'เกี่ยวกับเรา' },
]

onMounted(() => {
  const handleScroll = () => { scrolled.value = window.scrollY > 20 }
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})

watch(() => route.path, () => { mobileMenuOpen.value = false })
</script>
