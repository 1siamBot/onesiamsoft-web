<template>
  <div>
    <!-- Hero with Image -->
    <section class="relative pt-16">
      <div class="absolute inset-0 h-[450px]">
        <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&h=600&fit=crop&q=80"
          alt="Cloud Services" class="img-cover" />
        <div class="absolute inset-0 bg-gradient-to-b from-[#0c1222]/80 via-[#0c1222]/70 to-[#0c1222]"></div>
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 class="text-4xl lg:text-6xl font-bold text-white tracking-tight">บริการของเรา</h1>
        <p class="section-subtitle mt-4">โซลูชัน Cloud และ IT ครบวงจร สำหรับทุกขนาดธุรกิจ</p>
      </div>
    </section>

    <!-- Services -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6 space-y-20">
        <div v-for="(s, i) in services" :key="s.title"
          :class="['flex flex-col gap-8 items-center', i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse']">
          <div class="w-full lg:w-1/2">
            <div class="rounded-2xl overflow-hidden">
              <img :src="s.image" :alt="s.title" class="w-full h-64 lg:h-80 object-cover" loading="lazy" />
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                <Icon :name="s.icon" class="w-6 h-6 text-sky-400" />
              </div>
              <span class="text-sky-400 text-sm font-medium">{{ String(i + 1).padStart(2, '0') }}</span>
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

    <!-- Pricing Cards -->
    <section class="section-padding border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">แพ็คเกจยอดนิยม</h2>
          <p class="section-subtitle">เลือกแพ็คเกจที่เหมาะกับคุณ</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="plan in plans" :key="plan.name"
            :class="['glass-card p-8 relative', plan.popular ? 'border-sky-500/40 ring-1 ring-sky-500/20' : '']">
            <div v-if="plan.popular" class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-sky-500 text-white text-xs font-bold rounded-full">
              แนะนำ
            </div>
            <h3 class="text-xl font-bold text-white mb-2">{{ plan.name }}</h3>
            <p class="text-gray-500 text-sm mb-6">{{ plan.desc }}</p>
            <div class="mb-6">
              <span class="text-4xl font-bold text-white">{{ plan.price }}</span>
              <span class="text-gray-500 text-sm"> บาท/เดือน</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li v-for="f in plan.features" :key="f" class="flex items-center gap-2 text-gray-400 text-sm">
                <Icon name="lucide:check-circle" class="w-4 h-4 text-sky-400 shrink-0" />
                {{ f }}
              </li>
            </ul>
            <NuxtLink to="/contact"
              :class="['block text-center py-3 rounded-xl font-semibold transition-all',
                plan.popular ? 'bg-sky-500 text-white hover:bg-sky-400 shadow-lg shadow-sky-500/25' : 'border border-white/[0.12] text-white hover:bg-white/[0.05]']">
              เลือกแพ็คเกจ
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding">
      <div class="max-w-3xl mx-auto px-6">
        <div class="relative rounded-2xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1000&h=400&fit=crop&q=80"
            alt="Support" class="w-full h-[300px] object-cover" />
          <div class="absolute inset-0 bg-[#0c1222]/80"></div>
          <div class="absolute inset-0 flex items-center justify-center text-center p-8">
            <div>
              <h2 class="text-2xl lg:text-3xl font-bold text-white mb-4">ไม่แน่ใจว่าต้องใช้บริการอะไร?</h2>
              <p class="text-gray-300 mb-6">ปรึกษาทีมงานของเราฟรี เราจะช่วยแนะนำบริการที่เหมาะกับธุรกิจของคุณ</p>
              <NuxtLink to="/contact" class="inline-block px-8 py-3.5 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/25">
                ปรึกษาฟรี
              </NuxtLink>
            </div>
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
    icon: 'lucide:cloud', title: 'Cloud Server',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop&q=80',
    desc: 'เซิร์ฟเวอร์บนคลาวด์ประสิทธิภาพสูง รองรับการใช้งานตั้งแต่เว็บไซต์ขนาดเล็กจนถึง Enterprise',
    features: ['NVMe SSD Storage', 'Auto Scaling', '99.9% Uptime SLA', 'Backup อัตโนมัติ', 'DDoS Protection'],
    price: 'เริ่มต้น 590 บาท/เดือน'
  },
  {
    icon: 'lucide:globe', title: 'Web Hosting',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80',
    desc: 'เว็บโฮสติ้ง cPanel เร็วและเสถียร เหมาะสำหรับเว็บไซต์ทุกขนาด',
    features: ['cPanel Control Panel', 'Free SSL Certificate', 'Unlimited Email', 'One-Click Installer', 'Daily Backup'],
    price: 'เริ่มต้น 199 บาท/เดือน'
  },
  {
    icon: 'lucide:at-sign', title: 'Domain Name',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&h=500&fit=crop&q=80',
    desc: 'จดโดเมนทุกนามสกุลยอดนิยม .com .th .co.th .in.th พร้อม DNS Management',
    features: ['DNS Management', 'Domain Privacy', 'Auto Renewal', 'Transfer ง่าย', 'ราคาถูกที่สุด'],
    price: 'เริ่มต้น 400 บาท/ปี'
  },
  {
    icon: 'lucide:server', title: 'Dedicated Server',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&q=80',
    desc: 'เซิร์ฟเวอร์ส่วนตัวพลังสูง สำหรับธุรกิจที่ต้องการทรัพยากรเต็มที่',
    features: ['Full Root Access', 'Hardware RAID', 'Dedicated IP', 'Managed Service', 'Custom Configuration'],
    price: 'เริ่มต้น 3,500 บาท/เดือน'
  },
  {
    icon: 'lucide:mail', title: 'Business Email',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop&q=80',
    desc: 'อีเมลธุรกิจ @yourdomain.com สร้างความน่าเชื่อถือให้องค์กร',
    features: ['Custom Domain', 'Spam Filter', 'Webmail Access', '25GB Storage', 'Mobile Sync'],
    price: 'เริ่มต้น 99 บาท/เดือน'
  },
  {
    icon: 'lucide:file-code', title: 'WordPress Hosting',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=500&fit=crop&q=80',
    desc: 'โฮสติ้งที่ถูกออกแบบมาเพื่อ WordPress โดยเฉพาะ เร็วและปลอดภัย',
    features: ['Pre-installed WordPress', 'LiteSpeed Cache', 'Auto Update', 'Staging Environment', 'Free Migration'],
    price: 'เริ่มต้น 299 บาท/เดือน'
  },
]

const plans = [
  {
    name: 'Starter', desc: 'เหมาะสำหรับเว็บไซต์เริ่มต้น', price: '199', popular: false,
    features: ['5 GB SSD Storage', '1 Website', 'Free SSL', 'cPanel', '10 Email Accounts', 'Daily Backup'],
  },
  {
    name: 'Business', desc: 'เหมาะสำหรับธุรกิจ SME', price: '590', popular: true,
    features: ['50 GB NVMe SSD', 'Unlimited Websites', 'Free SSL', 'cPanel', 'Unlimited Email', 'Daily Backup', 'DDoS Protection', 'Priority Support'],
  },
  {
    name: 'Enterprise', desc: 'เหมาะสำหรับองค์กรขนาดใหญ่', price: '3,500', popular: false,
    features: ['Dedicated Server', 'Custom Resources', 'Free SSL', 'Full Root Access', 'Managed Service', 'Hourly Backup', 'DDoS Protection', '24/7 Priority Support'],
  },
]
</script>
