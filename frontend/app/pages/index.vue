<template>
  <div>
    <!-- Hero -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Gradient Orbs -->
      <div class="gradient-orb w-[600px] h-[600px] bg-sky-500 -top-40 -right-40"></div>
      <div class="gradient-orb w-[400px] h-[400px] bg-sky-600 bottom-20 -left-20 opacity-10"></div>

      <div class="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            Cloud Infrastructure
            <span class="block text-sky-400 mt-2">ที่ธุรกิจไว้วางใจ</span>
          </h1>
          <p class="text-lg lg:text-xl text-gray-400 mt-6 max-w-xl leading-relaxed">
            บริการ Cloud Server, Web Hosting และ IT Solutions ครบวงจร พร้อมทีมซัพพอร์ตดูแลตลอด 24 ชั่วโมง
          </p>

          <div class="flex flex-wrap gap-4 mt-10">
            <NuxtLink to="/contact"
              class="px-8 py-3.5 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20">
              เริ่มต้นใช้งาน
            </NuxtLink>
            <NuxtLink to="/services"
              class="px-8 py-3.5 rounded-xl border border-white/[0.12] text-white font-semibold hover:bg-white/[0.05] transition-all">
              ดูบริการทั้งหมด
            </NuxtLink>
          </div>

          <!-- Trust Badges -->
          <div class="flex flex-wrap gap-6 mt-14">
            <div v-for="badge in badges" :key="badge.label" class="flex items-center gap-2.5 text-sm text-gray-400">
              <div class="w-9 h-9 rounded-lg bg-sky-500/10 flex items-center justify-center">
                <Icon :name="badge.icon" class="w-4.5 h-4.5 text-sky-400" />
              </div>
              {{ badge.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="section-padding border-y border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-4xl lg:text-5xl font-bold text-white">{{ stat.value }}</div>
            <div class="text-gray-500 mt-2">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">บริการของเรา</h2>
          <p class="section-subtitle">โซลูชันครบวงจรสำหรับทุกธุรกิจ</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="service in services" :key="service.title" class="glass-card-hover p-6 group">
            <div class="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center mb-4 group-hover:bg-sky-500/20 transition-colors">
              <Icon :name="service.icon" class="w-6 h-6 text-sky-400" />
            </div>
            <h3 class="text-white font-semibold text-lg mb-2">{{ service.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section-padding border-y border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">ทำไมต้องเลือกเรา</h2>
          <p class="section-subtitle">สิ่งที่ทำให้เราแตกต่างจากผู้ให้บริการรายอื่น</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title" class="glass-card p-8 text-center">
            <div class="w-16 h-16 rounded-2xl bg-sky-500/10 flex items-center justify-center mx-auto mb-6">
              <Icon :name="feature.icon" class="w-8 h-8 text-sky-400" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">{{ feature.title }}</h3>
            <p class="text-gray-500 leading-relaxed">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Domain Pricing -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">จดโดเมนกับเรา</h2>
          <p class="section-subtitle">ราคาเริ่มต้นที่คุณจับต้องได้</p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="domain in domains" :key="domain.ext" class="glass-card-hover p-6 text-center">
            <div class="text-2xl font-bold text-sky-400 mb-2">{{ domain.ext }}</div>
            <div class="text-white">
              <span class="text-3xl font-bold">{{ domain.price }}</span>
              <span class="text-gray-500 text-sm"> บาท/ปี</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding border-y border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">ลูกค้าพูดถึงเรา</h2>
          <p class="section-subtitle">ความไว้วางใจจากลูกค้ากว่า 500 ราย</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="t in testimonials" :key="t.name" class="glass-card p-8">
            <div class="flex gap-1 mb-4">
              <Icon v-for="i in 5" :key="i" name="lucide:star" class="w-4 h-4 text-yellow-400 fill-yellow-400" />
            </div>
            <p class="text-gray-300 leading-relaxed mb-6">"{{ t.quote }}"</p>
            <div>
              <div class="text-white font-semibold">{{ t.name }}</div>
              <div class="text-gray-500 text-sm">{{ t.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding">
      <div class="max-w-4xl mx-auto px-6">
        <div class="glass-card p-12 lg:p-16 text-center relative overflow-hidden">
          <div class="gradient-orb w-[300px] h-[300px] bg-sky-500 -top-20 -right-20"></div>
          <div class="gradient-orb w-[200px] h-[200px] bg-sky-600 -bottom-10 -left-10 opacity-10"></div>
          <div class="relative z-10">
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">พร้อมเริ่มต้นหรือยัง?</h2>
            <p class="text-gray-400 text-lg mb-8 max-w-lg mx-auto">เริ่มต้นใช้งาน Cloud Infrastructure ที่เสถียรและเร็วที่สุดวันนี้</p>
            <div class="flex flex-wrap justify-center gap-4">
              <NuxtLink to="/contact"
                class="px-8 py-3.5 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20">
                เริ่มต้นเลย
              </NuxtLink>
              <NuxtLink to="/services"
                class="px-8 py-3.5 rounded-xl border border-white/[0.12] text-white font-semibold hover:bg-white/[0.05] transition-all">
                ดูแพ็คเกจ
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({ title: 'OneSiamSoft - Cloud Infrastructure ที่ธุรกิจไว้วางใจ', description: 'บริการ Cloud Server, Web Hosting และ IT Solutions ครบวงจร' })

const badges = [
  { icon: 'lucide:shield-check', label: 'SSL Free' },
  { icon: 'lucide:headphones', label: '24/7 Support' },
  { icon: 'lucide:database', label: 'Auto Backup' },
]

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '500+', label: 'ลูกค้า' },
  { value: '24/7', label: 'ซัพพอร์ต' },
  { value: '10+', label: 'ปีประสบการณ์' },
]

const services = [
  { icon: 'lucide:cloud', title: 'Cloud Server', desc: 'เซิร์ฟเวอร์บนคลาวด์ประสิทธิภาพสูง รองรับทุกการใช้งาน' },
  { icon: 'lucide:globe', title: 'Web Hosting', desc: 'เว็บโฮสติ้งเร็ว เสถียร พร้อม cPanel จัดการง่าย' },
  { icon: 'lucide:at-sign', title: 'Domain', desc: 'จดโดเมนทุกนามสกุล ราคาเริ่มต้นเพียง 400 บาท' },
  { icon: 'lucide:server', title: 'Dedicated Server', desc: 'เซิร์ฟเวอร์ส่วนตัวสำหรับธุรกิจที่ต้องการพลังสูงสุด' },
  { icon: 'lucide:mail', title: 'Business Email', desc: 'อีเมลธุรกิจมืออาชีพ @yourdomain.com' },
  { icon: 'lucide:file-code', title: 'WordPress Hosting', desc: 'โฮสติ้งออกแบบมาเพื่อ WordPress โดยเฉพาะ' },
  { icon: 'lucide:settings', title: 'Custom Server', desc: 'ออกแบบเซิร์ฟเวอร์ตามสเปคที่คุณต้องการ' },
  { icon: 'lucide:lightbulb', title: 'Custom Solutions', desc: 'โซลูชัน IT ที่ปรับแต่งให้ตรงกับธุรกิจของคุณ' },
]

const features = [
  { icon: 'lucide:zap', title: 'ความเร็วสูง', desc: 'เซิร์ฟเวอร์ติดตั้งที่ Data Center ระดับ Tier 3 รองรับ NVMe SSD เร็วกว่าปกติ 10 เท่า' },
  { icon: 'lucide:shield', title: 'ปลอดภัยสูงสุด', desc: 'ระบบ Firewall, DDoS Protection และ SSL Certificate ฟรีทุกแพ็คเกจ' },
  { icon: 'lucide:headphones', title: 'ซัพพอร์ต 24/7', desc: 'ทีมงานพร้อมดูแลและแก้ไขปัญหาให้คุณตลอด 24 ชั่วโมง ทุกวัน' },
]

const domains = [
  { ext: '.com', price: '500' },
  { ext: '.in.th', price: '400' },
  { ext: '.co.th', price: '580' },
  { ext: '.net', price: '500' },
]

const testimonials = [
  { quote: 'ใช้บริการมากว่า 3 ปี เซิร์ฟเวอร์เสถียร ไม่เคยมีปัญหา ทีมซัพพอร์ตตอบไว', name: 'คุณสมชาย', role: 'เจ้าของร้านค้าออนไลน์' },
  { quote: 'ย้ายมาจากที่อื่น เว็บเร็วขึ้นเห็นได้ชัด ราคาคุ้มค่ามาก แนะนำเลย', name: 'คุณวิภา', role: 'ผู้จัดการ IT, บริษัทขนส่ง' },
  { quote: 'ระบบ Auto Backup ช่วยได้มากเลย ไม่ต้องกังวลเรื่องข้อมูลหาย บริการดีมาก', name: 'คุณณัฐพล', role: 'Web Developer' },
]
</script>
