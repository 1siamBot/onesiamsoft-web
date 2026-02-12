<template>
  <div class="min-h-screen bg-[#0c1222] flex items-center justify-center px-6">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-white mb-4">{{ error?.statusCode || 500 }}</h1>
      <p class="text-gray-400 text-lg mb-8">{{ error?.statusMessage || 'เกิดข้อผิดพลาด' }}</p>
      <button @click="handleError" class="px-8 py-3.5 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all">
        กลับหน้าแรก
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ error: Object })

const handleError = () => clearError({ redirect: '/' })

// Auto-reload on chunk load errors (happens during deploys)
if (import.meta.client && props.error?.message?.includes('module script')) {
  window.location.reload()
}
</script>
