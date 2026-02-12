<template>
  <div>
    <!-- Hero with Image -->
    <section class="relative pt-16 overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=600&fit=crop&q=80"
          alt="Support Team" class="img-cover" />
        <div class="absolute inset-0 bg-gradient-to-b from-[#0c1222]/80 via-[#0c1222]/70 to-[#0c1222]"></div>
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 class="text-4xl lg:text-6xl font-bold text-white tracking-tight">ติดต่อเรา</h1>
        <p class="section-subtitle mt-4">พร้อมให้บริการและตอบทุกคำถามของคุณ</p>
      </div>
    </section>

    <!-- Contact Info Cards -->
    <section class="pb-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="info in contactInfo" :key="info.title" class="glass-card p-6 text-center">
            <div class="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mx-auto mb-4">
              <Icon :name="info.icon" class="w-6 h-6 text-sky-400" />
            </div>
            <h3 class="text-white font-semibold mb-2">{{ info.title }}</h3>
            <p class="text-gray-400 text-sm">{{ info.detail }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Form + Map -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Form -->
          <div class="w-full lg:w-1/2">
            <div class="glass-card p-8">
              <h2 class="text-2xl font-bold text-white mb-8">ส่งข้อความถึงเรา</h2>
              <form @submit.prevent class="space-y-5">
                <div>
                  <label class="block text-sm text-gray-400 mb-2">ชื่อ-นามสกุล</label>
                  <input type="text" class="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 focus:outline-none transition-all" placeholder="กรอกชื่อของคุณ" />
                </div>
                <div>
                  <label class="block text-sm text-gray-400 mb-2">อีเมล</label>
                  <input type="email" class="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 focus:outline-none transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label class="block text-sm text-gray-400 mb-2">เบอร์โทร</label>
                  <input type="tel" class="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 focus:outline-none transition-all" placeholder="0xx-xxx-xxxx" />
                </div>
                <div>
                  <label class="block text-sm text-gray-400 mb-2">ข้อความ</label>
                  <textarea rows="5" class="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 focus:outline-none transition-all resize-none" placeholder="บอกเราว่าคุณต้องการอะไร..."></textarea>
                </div>
                <button type="submit" class="w-full py-3.5 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/25">
                  ส่งข้อความ
                </button>
              </form>
            </div>
          </div>
          <!-- Map -->
          <div class="w-full lg:w-1/2">
            <div class="glass-card overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.123!2d99.95!3d12.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDM0JzEyLjAiTiA5OcKwNTcnMDAuMCJF!5e0!3m2!1sth!2sth!4v1"
                width="100%" height="100%" style="border:0; min-height:400px;" allowfullscreen="" loading="lazy"
                class="rounded-2xl"></iframe>
            </div>
          </div>
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
