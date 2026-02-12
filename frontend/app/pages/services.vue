<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-slate-950 pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-950 via-slate-950 to-slate-900"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      <div class="section-container relative z-10 text-center">
        <div class="badge-primary mx-auto mb-6">
          <Icon name="lucide:layers" class="w-3.5 h-3.5" />
          Our Solutions
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4">Enterprise Solutions</h1>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">
          โซลูชันครบวงจรสำหรับธุรกิจดิจิทัล ตั้งแต่ Cloud Infrastructure ไปจนถึง Custom Development
        </p>
      </div>
    </section>

    <!-- Services Detail -->
    <section class="py-24">
      <div class="section-container">
        <div class="space-y-24">
          <div v-for="(s, i) in services" :key="s.title"
            class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <!-- Content -->
            <div :class="i % 2 === 1 ? 'lg:order-2' : ''">
              <div class="badge mb-4" :class="s.badgeClass">
                <Icon :name="s.icon" class="w-3.5 h-3.5" />
                {{ s.badge }}
              </div>
              <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ s.title }}</h2>
              <p class="text-gray-500 leading-relaxed mb-8">{{ s.desc }}</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div v-for="f in s.features" :key="f" class="flex items-center gap-3 text-sm text-gray-600">
                  <div class="w-5 h-5 rounded-full bg-accent-50 flex items-center justify-center flex-shrink-0">
                    <Icon name="lucide:check" class="w-3 h-3 text-accent-600" />
                  </div>
                  {{ f }}
                </div>
              </div>
              <div class="mt-8 flex gap-3">
                <NuxtLink to="/contact" class="btn-primary !text-sm">
                  สอบถามราคา
                  <Icon name="lucide:arrow-right" class="w-4 h-4" />
                </NuxtLink>
              </div>
            </div>
            <!-- Visual with real image -->
            <div :class="i % 2 === 1 ? 'lg:order-1' : ''">
              <div class="rounded-2xl overflow-hidden shadow-lg">
                <img :src="s.image" :alt="s.title" class="w-full h-[350px] object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing CTA -->
    <section class="py-20 bg-gray-50">
      <div class="section-container text-center">
        <h2 class="section-heading text-gray-900 mb-4">ต้องการใบเสนอราคา?</h2>
        <p class="section-subheading mb-8">ทีมผู้เชี่ยวชาญพร้อมออกแบบแพ็กเกจที่เหมาะกับธุรกิจของคุณ — ปรึกษาฟรี ไม่มีค่าใช้จ่าย</p>
        <NuxtLink to="/contact" class="btn-primary !py-3.5 !text-base">
          <Icon name="lucide:message-circle" class="w-5 h-5" />
          ติดต่อฝ่ายขาย
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'บริการ — OneSiamSoft Enterprise Solutions',
  description: 'บริการ Cloud Server, Web Hosting, Domain, Dedicated Server, Business Email และ Custom Solution สำหรับธุรกิจทุกขนาด จาก OneSiamSoft',
})

const services = [
  {
    icon: 'lucide:cloud',
    badge: 'Cloud Infrastructure',
    badgeClass: 'bg-blue-50 text-blue-700 ring-1 ring-blue-100',
    title: 'Cloud Server',
    desc: 'Cloud VPS ประสิทธิภาพสูงด้วย SSD NVMe และ Enterprise-Grade Hardware พร้อมระบบ Auto Scaling ที่ปรับทรัพยากรตามการใช้งานจริง ให้คุณจ่ายเฉพาะสิ่งที่ใช้',
    features: ['SSD NVMe ความเร็วสูง', 'Auto Scaling', 'Snapshot & Backup อัตโนมัติ', 'เลือก OS ได้หลากหลาย', 'Full Root Access', 'DDoS Protection L3-L7', 'Control Panel ใช้งานง่าย', 'API สำหรับ DevOps'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  },
  {
    icon: 'lucide:globe',
    badge: 'Managed Hosting',
    badgeClass: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100',
    title: 'Web Hosting',
    desc: 'Managed Web Hosting ที่ออกแบบมาเพื่อเว็บไซต์ของคุณ รองรับ PHP ทุกเวอร์ชัน พร้อม cPanel ที่ใช้งานง่าย และฟรี SSL Certificate ทุกแพ็กเกจ',
    features: ['ฟรี SSL Certificate', 'cPanel จัดการง่าย', 'PHP ทุกเวอร์ชัน', 'Unlimited Bandwidth', 'Email Accounts ไม่จำกัด', 'One-Click WordPress Install', 'Daily Backup', 'Free Migration'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    icon: 'lucide:link',
    badge: 'Domain Services',
    badgeClass: 'bg-purple-50 text-purple-700 ring-1 ring-purple-100',
    title: 'Domain Registration',
    desc: 'จดโดเมนราคาพิเศษ ทั้งโดเมนสากลและโดเมนไทย พร้อมระบบจัดการ DNS ที่ใช้งานง่าย WHOIS Privacy Protection และการโอนย้ายโดเมนฟรี',
    features: ['.com เริ่มต้น 500 บาท/ปี', '.in.th เริ่มต้น 400 บาท/ปี', '.co.th เริ่มต้น 580 บาท/ปี', 'DNS Management', 'WHOIS Privacy', 'โอนย้ายโดเมนฟรี', 'Auto Renewal', 'API Integration'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80',
  },
  {
    icon: 'lucide:server',
    badge: 'Bare Metal',
    badgeClass: 'bg-orange-50 text-orange-700 ring-1 ring-orange-100',
    title: 'Dedicated Server',
    desc: 'เซิร์ฟเวอร์เฉพาะสำหรับองค์กรที่ต้องการความปลอดภัยและประสิทธิภาพสูงสุด ด้วย Hardware ที่จัดสรรให้คุณโดยเฉพาะ พร้อม Full Root Access',
    features: ['Hardware เฉพาะของคุณ', 'Full Root Access', 'DDoS Protection', '99.9% Uptime SLA', 'IPMI/KVM Access', 'Managed หรือ Unmanaged', 'Custom Configuration', 'Hot-swap Support'],
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80',
  },
]
</script>
