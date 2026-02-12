<template>
  <div class="bg-black min-h-screen">
    <!-- Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-950 via-black to-gray-950"></div>
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div class="section-container relative z-10 text-center">
        <div class="badge-primary mx-auto mb-6">
          <Icon name="lucide:mail" class="w-3.5 h-3.5" />
          Contact Us
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4">ติดต่อเรา</h1>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">
          พร้อมให้คำปรึกษาและช่วยเหลือทุกปัญหา ติดต่อทีมผู้เชี่ยวชาญของเราได้เลย
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl"></div>
      <div class="section-container relative z-10">
        <div class="grid lg:grid-cols-5 gap-12">
          <!-- Contact Info -->
          <div class="lg:col-span-2 space-y-6">
            <div v-for="info in contactInfo" :key="info.title" class="glass-card p-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" :class="info.bgClass">
                  <Icon :name="info.icon" class="w-6 h-6" :class="info.iconClass" />
                </div>
                <div>
                  <h3 class="text-white font-semibold mb-1">{{ info.title }}</h3>
                  <p class="text-gray-400 text-sm leading-relaxed">{{ info.value }}</p>
                </div>
              </div>
            </div>

            <!-- Social -->
            <div class="glass-card p-6">
              <h3 class="text-white font-semibold mb-4">ติดตามเรา</h3>
              <div class="flex gap-3">
                <a v-for="s in socials" :key="s.name" :href="s.url" target="_blank" rel="noopener"
                  class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <Icon :name="s.icon" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-3">
            <div class="glass-card p-8">
              <h2 class="text-2xl font-bold text-white mb-2">ส่งข้อความถึงเรา</h2>
              <p class="text-gray-400 text-sm mb-8">กรอกข้อมูลด้านล่าง เราจะติดต่อกลับภายใน 24 ชั่วโมง</p>
              
              <form @submit.prevent="handleSubmit" class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-gray-500 text-sm mb-2">ชื่อ-นามสกุล</label>
                    <input v-model="form.name" type="text" required
                      class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-colors"
                      placeholder="ชื่อของคุณ" />
                  </div>
                  <div>
                    <label class="block text-gray-500 text-sm mb-2">อีเมล</label>
                    <input v-model="form.email" type="email" required
                      class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-colors"
                      placeholder="email@example.com" />
                  </div>
                </div>
                <div>
                  <label class="block text-gray-500 text-sm mb-2">เบอร์โทรศัพท์</label>
                  <input v-model="form.phone" type="tel"
                    class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-colors"
                    placeholder="0xx-xxx-xxxx" />
                </div>
                <div>
                  <label class="block text-gray-500 text-sm mb-2">บริการที่สนใจ</label>
                  <select v-model="form.service"
                    class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-colors">
                    <option value="" class="bg-slate-900">เลือกบริการ</option>
                    <option v-for="s in serviceOptions" :key="s" :value="s" class="bg-slate-900">{{ s }}</option>
                  </select>
                </div>
                <div>
                  <label class="block text-gray-500 text-sm mb-2">ข้อความ</label>
                  <textarea v-model="form.message" rows="5" required
                    class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-colors resize-none"
                    placeholder="รายละเอียดที่ต้องการสอบถาม..."></textarea>
                </div>
                <button type="submit" class="btn-primary w-full !py-3.5 !text-base justify-center">
                  <Icon name="lucide:send" class="w-5 h-5" />
                  ส่งข้อความ
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'ติดต่อเรา — OneSiamSoft',
  description: 'ติดต่อทีม OneSiamSoft เพื่อขอคำปรึกษาด้าน Cloud Server, Hosting และ IT Solutions ฟรี',
})

const form = reactive({ name: '', email: '', phone: '', service: '', message: '' })

const handleSubmit = () => {
  alert('ขอบคุณสำหรับข้อความ! เราจะติดต่อกลับโดยเร็วที่สุด')
}

const serviceOptions = ['Cloud Server', 'Web Hosting', 'Domain', 'Dedicated Server', 'Business Email', 'WordPress Hosting', 'Custom Server', 'Custom Solutions']

const contactInfo = [
  { icon: 'lucide:map-pin', title: 'ที่อยู่', value: '28/99 ซอยหมู่บ้านบ่อฝ้าย ต.หัวหิน อ.หัวหิน จ.ประจวบคีรีขันธ์ 77110', bgClass: 'bg-blue-500/20', iconClass: 'text-blue-400' },
  { icon: 'lucide:mail', title: 'อีเมล', value: 'support@onesiamsoft.com', bgClass: 'bg-emerald-500/20', iconClass: 'text-emerald-400' },
  { icon: 'lucide:clock', title: 'เวลาทำการ', value: 'เปิดให้บริการ 24 ชั่วโมง ทุกวัน', bgClass: 'bg-blue-500/20', iconClass: 'text-purple-400' },
]

const socials = [
  { name: 'Facebook', icon: 'lucide:facebook', url: '#' },
  { name: 'Line', icon: 'lucide:message-circle', url: '#' },
  { name: 'Twitter', icon: 'lucide:twitter', url: '#' },
]
</script>
