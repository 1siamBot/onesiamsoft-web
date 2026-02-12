<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 relative overflow-hidden">
      <div class="gradient-orb w-[500px] h-[500px] bg-sky-500 -top-40 right-0"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h1 class="text-4xl lg:text-6xl font-bold text-white tracking-tight">ติดต่อเรา</h1>
        <p class="section-subtitle mt-4">พร้อมให้บริการและตอบทุกคำถามของคุณ</p>
      </div>
    </section>

    <!-- Contact Info Cards -->
    <section class="pb-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="info in contactInfo" :key="info.title" class="glass-card p-6 text-center">
            <div class="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center mx-auto mb-4">
              <Icon :name="info.icon" class="w-6 h-6 text-sky-400" />
            </div>
            <h3 class="text-white font-semibold mb-2">{{ info.title }}</h3>
            <p class="text-gray-400 text-sm">{{ info.detail }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Form -->
    <section class="section-padding">
      <div class="max-w-2xl mx-auto px-6">
        <div class="glass-card p-8 lg:p-10">
          <h2 class="text-2xl font-bold text-white mb-8">ส่งข้อความถึงเรา</h2>
          <form @submit.prevent class="space-y-5">
            <div>
              <label class="block text-sm text-gray-400 mb-2">ชื่อ-นามสกุล</label>
              <input type="text" class="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-gray-600 focus:border-sky-500/50 focus:outline-none transition-colors" placeholder="กรอกชื่อของคุณ" />
            </div>
            <div>
              <label class="block text-sm text-gray-400 mb-2">อีเมล</label>
              <input type="email" class="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-gray-600 focus:border-sky-500/50 focus:outline-none transition-colors" placeholder="your@email.com" />
            </div>
            <div>
              <label class="block text-sm text-gray-400 mb-2">เบอร์โทร</label>
              <input type="tel" class="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-gray-600 focus:border-sky-500/50 focus:outline-none transition-colors" placeholder="0xx-xxx-xxxx" />
            </div>
            <div>
              <label class="block text-sm text-gray-400 mb-2">ข้อความ</label>
              <textarea rows="5" class="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-gray-600 focus:border-sky-500/50 focus:outline-none transition-colors resize-none" placeholder="บอกเราว่าคุณต้องการอะไร..."></textarea>
            </div>
            <button type="submit" class="w-full py-3.5 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20">
              ส่งข้อความ
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({ title: 'ติดต่อเรา - OneSiamSoft', description: 'ติดต่อทีมงาน OneSiamSoft' })

const contactInfo = [
  { icon: 'lucide:mail', title: 'อีเมล', detail: 'support@onesiamsoft.com' },
  { icon: 'lucide:map-pin', title: 'ที่อยู่', detail: '28/99 ซอยหมู่บ้านบ่อฝ้าย ต.หัวหิน อ.หัวหิน จ.ประจวบคีรีขันธ์ 77110' },
  { icon: 'lucide:clock', title: 'เวลาทำการ', detail: 'เปิดให้บริการ 24 ชั่วโมง ทุกวัน' },
]
</script>
