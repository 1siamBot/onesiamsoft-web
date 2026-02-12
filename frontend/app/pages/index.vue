<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Cloud Server Hosting
            <span class="text-accent-400">ที่รวดเร็วและปลอดภัย</span>
            สำหรับธุรกิจของคุณ
          </h1>
          <p class="text-lg text-blue-100 mb-8 leading-relaxed">
            มอบความรวดเร็ว เชื่อถือได้ และคุ้มค่า เพื่อให้ธุรกิจของคุณเติบโตได้อย่างราบรื่น ด้วยเทคโนโลยีระดับ Enterprise
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/services" class="bg-accent-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-accent-500 transition text-lg">
              ดูบริการทั้งหมด
            </NuxtLink>
            <NuxtLink to="/contact" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-800 transition text-lg">
              ติดต่อฝ่ายขาย
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="bg-white py-12 border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label">
            <div class="text-3xl font-bold text-primary-600">{{ stat.value }}</div>
            <div class="text-gray-500 mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">บริการทั้งหมดของเรา</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">เรามีผลิตภัณฑ์และบริการที่หลากหลายสำหรับธุรกิจทุกประเภท เพื่อเคียงข้างธุรกิจคุณ</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="service in services" :key="service.title"
            class="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition group cursor-pointer border border-gray-100">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition">
              <span class="text-2xl">{{ service.icon }}</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ service.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">ทำไมต้องเลือกเรา?</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">เราให้ความสำคัญกับทุกรายละเอียด เพื่อให้ธุรกิจของคุณดำเนินไปอย่างราบรื่น</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title" class="text-center p-6">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">{{ feature.icon }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ feature.title }}</h3>
            <p class="text-gray-500 leading-relaxed">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Domain Pricing -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">จดโดเมนราคาประหยัด</h2>
          <p class="text-gray-600">เริ่มต้นสร้างตัวตนบนโลกออนไลน์ด้วยโดเมนของคุณเอง</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="domain in domains" :key="domain.ext"
            class="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:border-primary-300 transition">
            <div class="text-2xl font-bold text-primary-600 mb-2">{{ domain.ext }}</div>
            <div class="text-gray-900 font-semibold">{{ domain.price }}</div>
            <div class="text-gray-400 text-sm">ต่อปี</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">ลูกค้าพูดถึงเรา</h2>
          <p class="text-gray-600">ได้รับความไว้วางใจจากธุรกิจหลากหลายประเภท</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="t in testimonials" :key="t.name"
            class="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div class="flex items-center mb-1">
              <span v-for="i in 5" :key="i" class="text-yellow-400">★</span>
            </div>
            <p class="text-gray-600 mb-4 leading-relaxed italic">"{{ t.text }}"</p>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center">
                <span class="text-primary-700 font-semibold text-sm">{{ t.name[0] }}</span>
              </div>
              <div>
                <div class="font-semibold text-gray-900 text-sm">{{ t.name }}</div>
                <div class="text-gray-400 text-xs">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-primary-700 text-white py-16">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">พร้อมเริ่มต้นกับเราแล้วหรือยัง?</h2>
        <p class="text-blue-100 mb-8 text-lg">ติดต่อทีมผู้เชี่ยวชาญของเรา เพื่อหาโซลูชันที่เหมาะกับธุรกิจของคุณ</p>
        <NuxtLink to="/contact" class="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-lg inline-block">
          ติดต่อเราวันนี้
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'OneSiamSoft - บริการ Cloud Server Hosting ที่รวดเร็วและปลอดภัย',
  description: 'OneSiamSoft ผู้ให้บริการ Cloud Server, Web Hosting, Domain, Dedicated Server สำหรับธุรกิจทุกประเภท ด้วยเทคโนโลยีระดับ Enterprise',
  ogTitle: 'OneSiamSoft - Cloud Server Hosting',
  ogDescription: 'บริการ Cloud Server Hosting ที่รวดเร็วและปลอดภัยสำหรับธุรกิจของคุณ',
})

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '10,000+', label: 'ลูกค้าที่ไว้วางใจ' },
  { value: '24/7', label: 'ซัพพอร์ท' },
  { value: '10+', label: 'ปีประสบการณ์' },
]

const services = [
  { icon: '☁️', title: 'Cloud Server', desc: 'Cloud Server คุณภาพสูง เร็ว แรง ด้วย SSD Disk และอุปกรณ์ระดับ Enterprise' },
  { icon: '🌐', title: 'Web Hosting', desc: 'โฮสติ้งสำหรับเว็บไซต์ ตั้งค่า PHP ได้ รับฟรี SSL ทุกแพ็กเกจ' },
  { icon: '🔗', title: 'Domain', desc: 'โดเมนราคาประหยัด ทั้งโดเมนสากลและโดเมนไทย .th' },
  { icon: '🖥️', title: 'Dedicated Server', desc: 'Server คุณภาพสูงสำหรับผู้ที่ต้องการความปลอดภัยและความเป็นส่วนตัว' },
  { icon: '📧', title: 'Email', desc: 'อีเมลสำหรับองค์กร เชื่อมต่อกับโดเมนของตนเอง ปลอดภัยและเป็นส่วนตัว' },
  { icon: '📝', title: 'WordPress', desc: 'บริการสำหรับ WordPress โดยเฉพาะ ทั้ง Cloud และ Hosting' },
  { icon: '⚙️', title: 'Custom Server', desc: 'สั่งซื้อ Server, Workstation ดูแลโดยผู้เชี่ยวชาญ' },
  { icon: '💡', title: 'Custom Solution', desc: 'Solutions เฉพาะสำหรับธุรกิจของคุณ ออกแบบตามความต้องการ' },
]

const features = [
  { icon: '⚡', title: 'รวดเร็วระดับ Premium', desc: 'ใช้ SSD NVMe และโครงสร้างพื้นฐานระดับ Enterprise ให้เว็บไซต์ของคุณโหลดไว ไม่มีสะดุด' },
  { icon: '🛡️', title: 'ปลอดภัยสูงสุด', desc: 'ระบบ WAF, DDoS Protection, SSL ฟรีทุกแพ็กเกจ ปกป้องเว็บไซต์จากภัยคุกคามทุกรูปแบบ' },
  { icon: '🤝', title: 'ซัพพอร์ท 24/7', desc: 'ทีมผู้เชี่ยวชาญพร้อมช่วยเหลือตลอด 24 ชั่วโมง ย้ายเว็บไซต์ฟรี ไม่มีค่าใช้จ่ายเพิ่มเติม' },
]

const domains = [
  { ext: '.com', price: '500 บาท' },
  { ext: '.in.th', price: '400 บาท' },
  { ext: '.co.th', price: '580 บาท' },
  { ext: '.net', price: '500 บาท' },
]

const testimonials = [
  { name: 'สมชาย ธุรกิจดี', role: 'CEO, TechStartup Co.', text: 'ใช้ Cloud Server ของ OneSiamSoft มา 3 ปี เซิร์ฟเวอร์เสถียรมาก ไม่เคยมีปัญหา downtime ซัพพอร์ทตอบไว แก้ปัญหาเร็ว' },
  { name: 'วิภา สุขใจ', role: 'CTO, E-Commerce Plus', text: 'ย้ายมาจากเจ้าอื่น ประทับใจมาก เว็บโหลดเร็วขึ้นเท่าตัว ทีมงานช่วยย้ายให้ฟรี ไม่ต้องทำอะไรเลย' },
  { name: 'อนันต์ พัฒนา', role: 'Developer, AgencyPro', text: 'ราคาคุ้มค่ามาก ใช้ Dedicated Server สำหรับโปรเจ็คใหญ่ๆ ได้สบาย ปรับแต่งได้ตามต้องการ' },
]
</script>
