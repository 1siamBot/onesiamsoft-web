<template>
  <div>
    <!-- Hero -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Subtle gradient -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/[0.07] rounded-full blur-[120px]" />

      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div class="max-w-4xl">
          <p class="text-sm text-sky-400 font-medium tracking-wide uppercase mb-6">Cloud Infrastructure & Solutions</p>
          <h1 class="heading-xl mb-8">
            Cloud Infrastructure<br />
            <span class="accent">ที่ธุรกิจไว้วางใจ</span>
          </h1>
          <p class="text-lg lg:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
            โครงสร้างพื้นฐานระบบคลาวด์ที่เสถียร ปลอดภัย และพร้อมรองรับการเติบโตของธุรกิจคุณ
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/contact" class="btn-primary text-base">เริ่มต้นใช้งาน</NuxtLink>
            <NuxtLink to="/services" class="btn-secondary text-base">ดูบริการทั้งหมด</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="section-padding border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-3xl lg:text-5xl font-bold text-white mb-2">{{ stat.value }}</div>
            <div class="text-sm text-gray-500">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-2xl mb-16">
          <h2 class="heading-lg mb-4">บริการของเรา</h2>
          <p class="text-muted text-lg">โซลูชันครบวงจรสำหรับโครงสร้างพื้นฐานดิจิทัลของธุรกิจ</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="service in services" :key="service.title" class="glass-card-hover p-8">
            <div class="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center mb-6">
              <Icon :name="service.icon" class="w-6 h-6 text-sky-400" />
            </div>
            <h3 class="text-lg font-semibold text-white mb-3">{{ service.title }}</h3>
            <p class="text-sm text-gray-400 leading-relaxed">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Domain Pricing -->
    <section class="section-padding border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="heading-lg mb-4">จดโดเมน</h2>
          <p class="text-muted text-lg">เริ่มต้นธุรกิจออนไลน์ด้วยชื่อโดเมนที่เหมาะกับคุณ</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="domain in domains" :key="domain.ext" class="glass-card-hover p-8 text-center">
            <div class="text-2xl font-bold text-white mb-2">{{ domain.ext }}</div>
            <div class="text-3xl font-bold text-sky-400 mb-1">{{ domain.price }}<span class="text-lg text-gray-500">฿</span></div>
            <div class="text-sm text-gray-500">/ปี</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="heading-lg mb-4">ลูกค้าของเรา</h2>
          <p class="text-muted text-lg">เสียงจากผู้ใช้งานจริง</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="t in testimonials" :key="t.name" class="glass-card p-8">
            <p class="text-gray-300 mb-6 leading-relaxed">"{{ t.quote }}"</p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center">
                <span class="text-sky-400 font-semibold text-sm">{{ t.name[0] }}</span>
              </div>
              <div>
                <div class="text-sm font-medium text-white">{{ t.name }}</div>
                <div class="text-xs text-gray-500">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="glass-card p-12 lg:p-20 text-center relative overflow-hidden">
          <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/[0.05] rounded-full blur-[100px]" />
          <div class="relative">
            <h2 class="heading-lg mb-6">พร้อมเริ่มต้นหรือยัง?</h2>
            <p class="text-muted text-lg max-w-xl mx-auto mb-10">ปรึกษาผู้เชี่ยวชาญของเราวันนี้ เพื่อวางแผนโครงสร้างพื้นฐานที่เหมาะกับธุรกิจของคุณ</p>
            <NuxtLink to="/contact" class="btn-primary text-base">ติดต่อเรา</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'OneSiamSoft — Cloud Infrastructure ที่ธุรกิจไว้วางใจ',
  description: 'โครงสร้างพื้นฐานระบบคลาวด์ที่เสถียร ปลอดภัย พร้อมรองรับการเติบโตของธุรกิจคุณ',
})

const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '500+', label: 'ลูกค้าไว้วางใจ' },
  { value: '24/7', label: 'ทีมซัพพอร์ต' },
  { value: '10+', label: 'ปีประสบการณ์' },
]

const services = [
  { icon: 'lucide:cloud', title: 'Cloud Server', desc: 'เซิร์ฟเวอร์คลาวด์ประสิทธิภาพสูง SSD NVMe รองรับ Auto-scaling' },
  { icon: 'lucide:globe', title: 'Web Hosting', desc: 'เว็บโฮสติ้งที่เสถียรและรวดเร็ว รองรับ PHP, Node.js, Python' },
  { icon: 'lucide:at-sign', title: 'Domain', desc: 'จดโดเมนทุกนามสกุล .com .in.th .co.th ราคาเริ่มต้น 400 บาท' },
  { icon: 'lucide:server', title: 'Dedicated Server', desc: 'เซิร์ฟเวอร์ส่วนตัวสำหรับองค์กรที่ต้องการประสิทธิภาพสูงสุด' },
  { icon: 'lucide:mail', title: 'Business Email', desc: 'อีเมลธุรกิจ @yourdomain.com เพิ่มความน่าเชื่อถือให้แบรนด์' },
  { icon: 'lucide:layout-template', title: 'WordPress Hosting', desc: 'โฮสติ้งที่ปรับแต่งมาสำหรับ WordPress โดยเฉพาะ เร็ว ปลอดภัย' },
  { icon: 'lucide:settings', title: 'Custom Server', desc: 'ออกแบบเซิร์ฟเวอร์ตามสเปคที่ต้องการ ปรับแต่งได้ทุกรายละเอียด' },
  { icon: 'lucide:code', title: 'Custom Solutions', desc: 'ออกแบบและพัฒนาระบบตามความต้องการเฉพาะของธุรกิจ' },
]

const domains = [
  { ext: '.com', price: '500' },
  { ext: '.in.th', price: '400' },
  { ext: '.co.th', price: '580' },
  { ext: '.net', price: '500' },
]

const testimonials = [
  { name: 'สมชาย วงศ์ดี', role: 'CEO, TechStartup', quote: 'ระบบเสถียรมาก ใช้มา 3 ปี ไม่เคยมีปัญหาเรื่อง downtime เลย' },
  { name: 'วิภา สุขใจ', role: 'CTO, E-Commerce Co.', quote: 'ทีมซัพพอร์ตตอบเร็วมาก แก้ปัญหาให้ทันที ประทับใจบริการ' },
  { name: 'ธนา รุ่งเรือง', role: 'Founder, Digital Agency', quote: 'Cloud Server ของ OneSiamSoft เร็วกว่าที่เคยใช้มาก ราคาก็สมเหตุสมผล' },
]
</script>
