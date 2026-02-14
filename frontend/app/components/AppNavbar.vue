<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-[#0c1222] border-b border-white/[0.08] shadow-lg shadow-black/20' : 'bg-[#0c1222]/60 backdrop-blur-xl border-b border-white/[0.04]'">
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <NuxtLink :to="localePath('/')" class="flex items-center gap-3">
        <img src="/images/logo.jpg" class="h-9 w-9 rounded-lg" alt="OneSiamSoft" />
        <span class="text-lg font-bold text-white">OneSiam<span class="text-sky-400">Soft</span></span>
      </NuxtLink>
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink v-for="link in links" :key="link.to" :to="localePath(link.to)"
          class="text-sm transition-colors"
          :class="isActive(link.to) ? 'text-sky-400 font-medium' : 'text-gray-400 hover:text-white'">
          {{ link.label }}
        </NuxtLink>

        <!-- Language Switcher -->
        <button @click="toggleLang" class="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-white/[0.08] hover:border-white/[0.15]">
          <Icon name="lucide:globe" class="w-4 h-4" />
          <span>{{ locale === 'th' ? 'EN' : 'TH' }}</span>
        </button>

        <NuxtLink :to="localePath('/contact')"
          class="px-5 py-2 text-sm font-medium rounded-xl bg-sky-500 text-white hover:bg-sky-400 transition-colors">
          {{ $t('nav.contact') }}
        </NuxtLink>
      </div>
      <button @click="open = !open" class="md:hidden text-white">
        <Icon :name="open ? 'lucide:x' : 'lucide:menu'" class="w-6 h-6" />
      </button>
    </div>
    <div v-if="open" class="md:hidden bg-[#0c1222] border-t border-white/[0.08] px-6 py-4 space-y-3">
      <NuxtLink v-for="link in links" :key="link.to" :to="localePath(link.to)" @click="open = false"
        class="block py-2 transition-colors"
        :class="isActive(link.to) ? 'text-sky-400' : 'text-gray-400 hover:text-white'">
        {{ link.label }}
      </NuxtLink>
      <button @click="toggleLang" class="flex items-center gap-2 py-2 text-gray-400 hover:text-white transition-colors">
        <Icon name="lucide:globe" class="w-4 h-4" />
        <span>{{ locale === 'th' ? 'English' : 'ภาษาไทย' }}</span>
      </button>
      <NuxtLink :to="localePath('/contact')" @click="open = false"
        class="block text-center px-5 py-2.5 font-medium rounded-xl bg-sky-500 text-white mt-2">
        {{ $t('nav.contact') }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
const { locale, setLocale, t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const open = ref(false)
const scrolled = ref(false)

const links = computed(() => [
  { label: t('nav.home'), to: '/' },
  { label: t('nav.services'), to: '/services' },
  { label: t('nav.portfolio'), to: '/portfolio' },
  { label: t('nav.blog'), to: '/blog' },
  { label: t('nav.about'), to: '/about' },
])

const isActive = (path) => {
  const current = route.path.replace(/^\/(en|th)/, '') || '/'
  return current === path
}

const toggleLang = () => {
  setLocale(locale.value === 'th' ? 'en' : 'th')
}

if (import.meta.client) {
  window.addEventListener('scroll', () => { scrolled.value = window.scrollY > 50 })
}
</script>
