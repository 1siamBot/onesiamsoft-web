<template>
  <div>
    <section class="pt-32 pb-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-sm text-sky-400 font-medium tracking-wide uppercase mb-4">Contact</p>
          <h1 class="heading-xl mb-6">ติดต่อ<span class="accent">เรา</span></h1>
          <p class="text-lg text-gray-400 leading-relaxed">พร้อมรับฟังทุกความต้องการ ปรึกษาเราได้เลย</p>
        </div>
      </div>
    </section>

    <section class="pb-32">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-5 gap-12">
          <!-- Contact Info -->
          <div class="lg:col-span-2 space-y-8">
            <div v-for="info in contactInfo" :key="info.label" class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center shrink-0">
                <Icon :name="info.icon" class="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <div class="text-sm text-gray-500 mb-1">{{ info.label }}</div>
                <div class="text-white">{{ info.value }}</div>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div class="lg:col-span-3">
            <form class="glass-card p-8 lg:p-10 space-y-6" @submit.prevent>
              <div class="grid sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm text-gray-500 mb-2">ชื่อ</label>
                  <input type="text" class="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-sky-500/50 transition-colors" placeholder="ชื่อของคุณ" />
                </div>
                <div>
                  <label class="block text-sm text-gray-500 mb-2">อีเมล</label>
                  <input type="email" class="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-sky-500/50 transition-colors" placeholder="email@example.com" />
                </div>
              </div>
              <div>
                <label class="block text-sm text-gray-500 mb-2">หัวข้อ</label>
                <input type="text" class="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-sky-500/50 transition-colors" placeholder="สอบถามบริการ" />
              </div>
              <div>
                <label class="block text-sm text-gray-500 mb-2">ข้อความ</label>
                <textarea rows="5" class="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-sky-500/50 transition-colors resize-none" placeholder="รายละเอียดที่ต้องการปรึกษา..." />
              </div>
              <button type="submit" class="btn-primary w-full">ส่งข้อความ</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'ติดต่อเรา — OneSiamSoft',
  description: 'ติดต่อ OneSiamSoft สำหรับบริการ Cloud Server, Hosting และ Solutions',
})

const contactInfo = [
  { icon: 'lucide:mail', label: 'อีเมล', value: 'support@onesiamsoft.com' },
  { icon: 'lucide:map-pin', label: 'ที่อยู่', value: '28/99 ซอยหมู่บ้านบ่อฝ้าย ต.หัวหิน อ.หัวหิน จ.ประจวบคีรีขันธ์ 77110' },
  { icon: 'lucide:clock', label: 'เวลาทำการ', value: 'จันทร์ - ศุกร์ 9:00 - 18:00 น.' },
]
</script>
