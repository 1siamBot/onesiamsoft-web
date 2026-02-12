<template>
  <div>
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">บริการของเรา</h1>
        <p class="text-blue-100 text-lg max-w-2xl mx-auto">โซลูชันครบวงจรสำหรับธุรกิจออนไลน์ของคุณ</p>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div v-for="(s, i) in services" :key="s.title"
          class="flex flex-col md:flex-row items-center gap-8" :class="i % 2 === 1 ? 'md:flex-row-reverse' : ''">
          <div class="flex-1">
            <div class="text-4xl mb-4">{{ s.icon }}</div>
            <h2 class="text-2xl font-bold text-gray-900 mb-3">{{ s.title }}</h2>
            <p class="text-gray-600 leading-relaxed mb-4">{{ s.desc }}</p>
            <ul class="space-y-2">
              <li v-for="f in s.features" :key="f" class="flex items-center space-x-2 text-gray-600">
                <svg class="w-5 h-5 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                <span>{{ f }}</span>
              </li>
            </ul>
          </div>
          <div class="flex-1 w-full">
            <div class="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
              <span class="text-6xl">{{ s.icon }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'บริการ - OneSiamSoft',
  description: 'บริการ Cloud Server, Web Hosting, Domain, Dedicated Server และ Custom Solution จาก OneSiamSoft',
})

const services = [
  { icon: '☁️', title: 'Cloud Server', desc: 'Cloud Server คุณภาพสูง ให้คุณได้รับประสิทธิภาพสูงสุดด้วย SSD NVMe และอุปกรณ์ระดับ Enterprise พร้อม Snapshot และ Backup อัตโนมัติ', features: ['SSD NVMe ความเร็วสูง', 'รองรับ Auto Scaling', 'Snapshot & Backup อัตโนมัติ', 'เลือก OS ได้หลากหลาย'] },
  { icon: '🌐', title: 'Web Hosting', desc: 'โฮสติ้งที่ออกแบบมาเพื่อเว็บไซต์ของคุณ รองรับ PHP ทุกเวอร์ชัน พร้อม cPanel ที่ใช้งานง่าย', features: ['ฟรี SSL ทุกแพ็กเกจ', 'cPanel จัดการง่าย', 'รองรับ PHP ทุกเวอร์ชัน', 'Bandwidth ไม่จำกัด'] },
  { icon: '🔗', title: 'Domain', desc: 'จดโดเมนราคาประหยัด ทั้งโดเมนสากลและโดเมนไทย พร้อมระบบจัดการ DNS ที่ใช้งานง่าย', features: ['ราคาเริ่มต้น 400 บาท/ปี', 'จัดการ DNS ง่าย', 'รองรับทั้ง .com .th .net', 'โอนย้ายโดเมนฟรี'] },
  { icon: '🖥️', title: 'Dedicated Server', desc: 'เซิร์ฟเวอร์เฉพาะสำหรับองค์กรที่ต้องการความปลอดภัยและประสิทธิภาพสูงสุด', features: ['Hardware เฉพาะของคุณ', 'Root Access เต็มรูปแบบ', 'DDoS Protection', 'SLA 99.9% Uptime'] },
]
</script>
