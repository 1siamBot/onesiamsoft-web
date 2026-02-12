<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 relative overflow-hidden">
      <div class="gradient-orb w-[500px] h-[500px] bg-sky-500 -top-40 right-0"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h1 v-scroll-animate class="text-4xl lg:text-6xl font-bold text-white tracking-tight">ติดต่อเรา</h1>
        <p v-scroll-animate="100" class="section-subtitle mt-4">พร้อมให้บริการและตอบทุกคำถามของคุณ</p>
      </div>
    </section>

    <!-- Contact Info Cards -->
    <section class="pb-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(info, i) in contactInfo" :key="info.title" v-scroll-animate="i * 100" class="glass-card-hover p-6 text-center">
            <div class="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center mx-auto mb-4">
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
        <div class="flex flex-col lg:flex-row gap-10">
          <!-- Form -->
          <div class="w-full lg:w-1/2">
            <div v-scroll-animate class="glass-card p-8 lg:p-10">
              <h2 class="text-2xl font-bold text-white mb-8">ส่งข้อความถึงเรา</h2>
              <form @submit.prevent="handleSubmit" class="space-y-5">
                <div>
                  <label class="block text-sm text-gray-400 mb-2">ชื่อ-นามสกุล</label>
                  <input
                    v-model="form.name"
                    type="text"
                    class="w-full px-4 py-3 rounded-xl bg-white/[0.05] border text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500/30 transition-all"
                    :class="errors.name ? 'border-red-400/50' : 'border-white/[0.08] focus:border-sky-500/50'"
                    placeholder="กรอกชื่อของคุณ"
                  />
                  <p v-if="errors.name" class="text-red-400 text-xs mt-1">{{ errors.name }}</p>
                </div>
                <div>
                  <label class="block text-sm text-gray-400 mb-2">อีเมล</label>
                  <input
                    v-model="form.email"
                    type="email"
                    class="w-full px-4 py-3 rounded-xl bg-white/[0.05] border text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500/30 transition-all"
                    :class="errors.email ? 'border-red-400/50' : 'border-white/[0.08] focus:border-sky-500/50'"
                    placeholder="your@email.com"
                  />
                  <p v-if="errors.email" class="text-red-400 text-xs mt-1">{{ errors.email }}</p>
                </div>
                <div>
                  <label class="block text-sm text-gray-400 mb-2">เบอร์โทร</label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    class="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-gray-600 focus:border-sky-500/50 focus:outline-none focus:ring-2 focus:ring-sky-500/30 transition-all"
                    placeholder="0xx-xxx-xxxx"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-400 mb-2">ข้อความ</label>
                  <textarea
                    v-model="form.message"
                    rows="5"
                    class="w-full px-4 py-3 rounded-xl bg-white/[0.05] border text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500/30 transition-all resize-none"
                    :class="errors.message ? 'border-red-400/50' : 'border-white/[0.08] focus:border-sky-500/50'"
                    placeholder="บอกเราว่าคุณต้องการอะไร..."
                  />
                  <p v-if="errors.message" class="text-red-400 text-xs mt-1">{{ errors.message }}</p>
                </div>
                <button
                  type="submit"
                  class="w-full py-3.5 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20 disabled:opacity-50"
                  :disabled="submitted"
                >
                  <span v-if="submitted" class="flex items-center justify-center gap-2">
                    <Icon name="lucide:check-circle" class="w-5 h-5" />
                    ส่งข้อความสำเร็จ!
                  </span>
                  <span v-else>ส่งข้อความ</span>
                </button>
              </form>
            </div>
          </div>

          <!-- Map / Location -->
          <div class="w-full lg:w-1/2">
            <div v-scroll-animate="150" class="glass-card overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.8!2d99.95!3d12.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDM0JzEyLjAiTiA5OcKwNTcnMDAuMCJF!5e0!3m2!1sth!2sth!4v1700000000000!5m2!1sth!2sth"
                width="100%" height="100%" style="border:0; min-height: 400px;" allowfullscreen loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-full opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useScrollAnimation } from '~/composables/useScrollAnimation'

useSeoMeta({ title: 'ติดต่อเรา - OneSiamSoft', description: 'ติดต่อทีมงาน OneSiamSoft' })

const { vScrollAnimate } = useScrollAnimation()

const contactInfo = [
  { icon: 'lucide:mail', title: 'อีเมล', detail: 'support@onesiamsoft.com' },
  { icon: 'lucide:map-pin', title: 'ที่อยู่', detail: '28/99 ซอยหมู่บ้านบ่อฝ้าย ต.หัวหิน อ.หัวหิน จ.ประจวบคีรีขันธ์ 77110' },
  { icon: 'lucide:clock', title: 'เวลาทำการ', detail: 'เปิดให้บริการ 24 ชั่วโมง ทุกวัน' },
]

const form = reactive({ name: '', email: '', phone: '', message: '' })
const errors = reactive<Record<string, string>>({ name: '', email: '', message: '' })
const submitted = ref(false)

const validate = () => {
  let valid = true
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!form.name.trim()) { errors.name = 'กรุณากรอกชื่อ'; valid = false }
  if (!form.email.trim()) { errors.email = 'กรุณากรอกอีเมล'; valid = false }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.email = 'รูปแบบอีเมลไม่ถูกต้อง'; valid = false }
  if (!form.message.trim()) { errors.message = 'กรุณากรอกข้อความ'; valid = false }
  return valid
}

const handleSubmit = () => {
  if (validate()) {
    submitted.value = true
  }
}
</script>
