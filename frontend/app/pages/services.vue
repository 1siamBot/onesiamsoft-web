<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 relative overflow-hidden">
      <div class="gradient-orb w-[500px] h-[500px] bg-sky-500 -top-40 right-0"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h1 class="text-4xl lg:text-6xl font-bold text-white tracking-tight">บริการของเรา</h1>
        <p class="section-subtitle mt-4">โซลูชัน Cloud และ IT ครบวงจร สำหรับทุกขนาดธุรกิจ</p>
      </div>
    </section>

    <!-- Services -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6 space-y-24">
        <div v-for="(s, i) in services" :key="s.title"
          :class="['flex flex-col gap-10 items-center', i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse']">
          <!-- Image -->
          <div class="w-full lg:w-1/2">
            <div class="glass-card overflow-hidden">
              <img :src="`https://images.unsplash.com/${s.image}?w=800&h=500&fit=crop`"
                :alt="s.title" class="w-full h-64 lg:h-80 object-cover" loading="lazy" />
            </div>
          </div>
          <!-- Content -->
          <div class="w-full lg:w-1/2">
            <div class="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center mb-4">
              <Icon :name="s.icon" class="w-6 h-6 text-sky-400" />
            </div>
            <h2 class="text-2xl lg:text-3xl font-bold text-white mb-3">{{ s.title }}</h2>
            <p class="text-gray-400 leading-relaxed mb-6">{{ s.desc }}</p>
            <ul class="space-y-2 mb-6">
              <li v-for="f in s.features" :key="f" class="flex items-center gap-2 text-gray-400 text-sm">
                <Icon name="lucide:check" class="w-4 h-4 text-sky-400 shrink-0" />
                {{ f }}
              </li>
            </ul>
            <div class="text-sky-400 font-semibold text-lg">{{ s.price }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding">
      <div class="max-w-3xl mx-auto px-6">
        <div class="glass-card p-12 text-center relative overflow-hidden">
          <div class="gradient-orb w-[250px] h-[250px] bg-sky-500 -top-16 -right-16"></div>
          <div class="relative z-10">
            <h2 class="text-2xl lg:text-3xl font-bold text-white mb-4">ไม่แน่ใจว่าต้องใช้บริการอะไร?</h2>
            <p class="text-gray-400 mb-8">ปรึกษาทีมงานของเราฟรี เราจะช่วยแนะนำบริการที่เหมาะกับธุรกิจของคุณ</p>
            <NuxtLink to="/contact" class="inline-block px-8 py-3.5 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20">
              ปรึกษาฟรี
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({ title: 'บริการ - OneSiamSoft', description: 'บริการ Cloud Server, Web Hosting และ IT Solutions ครบวงจร' })

const services = [
  {
    icon: 'lucide:cloud', title: 'Cloud Server', image: 'photo-1544197150-b99a580bb7a8',
    desc: 'เซิร์ฟเวอร์บนคลาวด์ประสิทธิภาพสูง รองรับการใช้งานตั้งแต่เว็บไซต์ขนาดเล็กจนถึง Enterprise',
    features: ['NVMe SSD Storage', 'Auto Scaling', '99.9% Uptime SLA', 'Backup อัตโนมัติ', 'DDoS Protection'],
    price: 'เริ่มต้น 590 บาท/เดือน'
  },
  {
    icon: 'lucide:globe', title: 'Web Hosting', image: 'photo-1460925895917-afdab827c52f',
    desc: 'เว็บโฮสติ้ง cPanel เร็วและเสถียร เหมาะสำหรับเว็บไซต์ทุกขนาด',
    features: ['cPanel Control Panel', 'Free SSL Certificate', 'Unlimited Email Accounts', 'One-Click Installer', 'Daily Backup'],
    price: 'เริ่มต้น 199 บาท/เดือน'
  },
  {
    icon: 'lucide:at-sign', title: 'Domain Name', image: 'photo-1563986768609-322da13575f2',
    desc: 'จดโดเมนทุกนามสกุลยอดนิยม .com .th .co.th .in.th พร้อม DNS Management',
    features: ['DNS Management', 'Domain Privacy', 'Auto Renewal', 'Transfer ง่าย', 'ราคาถูกที่สุด'],
    price: 'เริ่มต้น 400 บาท/ปี'
  },
  {
    icon: 'lucide:server', title: 'Dedicated Server', image: 'photo-1558494949-ef010cbdcc31',
    desc: 'เซิร์ฟเวอร์ส่วนตัวพลังสูง สำหรับธุรกิจที่ต้องการทรัพยากรเต็มที่',
    features: ['Full Root Access', 'Hardware RAID', 'Dedicated IP', 'Managed Service', 'Custom Configuration'],
    price: 'เริ่มต้น 3,500 บาท/เดือน'
  },
  {
    icon: 'lucide:mail', title: 'Business Email', image: 'photo-1596526131083-e8c633c948d2',
    desc: 'อีเมลธุรกิจ @yourdomain.com สร้างความน่าเชื่อถือให้องค์กร',
    features: ['Custom Domain', 'Spam Filter', 'Webmail Access', '25GB Storage', 'Mobile Sync'],
    price: 'เริ่มต้น 99 บาท/เดือน'
  },
  {
    icon: 'lucide:file-code', title: 'WordPress Hosting', image: 'photo-1507238691740-187a5b1d37b8',
    desc: 'โฮสติ้งที่ถูกออกแบบมาเพื่อ WordPress โดยเฉพาะ เร็วและปลอดภัย',
    features: ['Pre-installed WordPress', 'LiteSpeed Cache', 'Auto Update', 'Staging Environment', 'Free Migration'],
    price: 'เริ่มต้น 299 บาท/เดือน'
  },
  {
    icon: 'lucide:settings', title: 'Custom Server', image: 'photo-1597852074816-d933c7d2b988',
    desc: 'ออกแบบและประกอบเซิร์ฟเวอร์ตามสเปคที่คุณต้องการ',
    features: ['เลือก CPU/RAM ได้', 'Storage ตามต้องการ', 'OS ที่ต้องการ', 'Network Configuration', 'Monitoring'],
    price: 'สอบถามราคา'
  },
  {
    icon: 'lucide:lightbulb', title: 'Custom Solutions', image: 'photo-1553877522-43269d4ea984',
    desc: 'โซลูชัน IT ที่ออกแบบเฉพาะสำหรับธุรกิจของคุณ ตั้งแต่ออกแบบจนส่งมอบ',
    features: ['ออกแบบ Architecture', 'พัฒนาระบบ', 'Migration Service', 'Training', '24/7 Support'],
    price: 'สอบถามราคา'
  },
]
</script>
