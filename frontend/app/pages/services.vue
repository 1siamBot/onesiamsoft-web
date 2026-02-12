<template>
  <div class="bg-black min-h-screen">
    <!-- Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-950 via-black to-gray-950"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
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
    <section class="relative py-24 overflow-hidden">
      <div class="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-3xl"></div>
      <div class="section-container relative z-10">
        <div class="space-y-24">
          <div v-for="(s, i) in services" :key="s.title"
            class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <!-- Content -->
            <div :class="i % 2 === 1 ? 'lg:order-2' : ''">
              <div class="badge-primary mb-4">
                <Icon :name="s.icon" class="w-3.5 h-3.5" />
                {{ s.badge }}
              </div>
              <h2 class="text-3xl font-bold text-white mb-4">{{ s.title }}</h2>
              <p class="text-gray-400 leading-relaxed mb-8">{{ s.desc }}</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div v-for="f in s.features" :key="f" class="flex items-center gap-3 text-sm text-gray-400">
                  <div class="w-5 h-5 rounded-full bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="lucide:check" class="w-3 h-3 text-accent-400" />
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
            <!-- Visual -->
            <div :class="i % 2 === 1 ? 'lg:order-1' : ''">
              <div class="rounded-2xl overflow-hidden border border-white/10">
                <img :src="s.image" :alt="s.title" class="w-full h-[320px] object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-white/[0.02]"></div>
      <div class="absolute top-0 left-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-3xl -translate-x-1/2"></div>
      <div class="section-container relative z-10 text-center">
        <h2 class="text-3xl font-extrabold text-white mb-4">ไม่แน่ใจว่าบริการไหนเหมาะกับคุณ?</h2>
        <p class="text-gray-400 mb-8 max-w-xl mx-auto">ปรึกษาทีมผู้เชี่ยวชาญของเราฟรี เราพร้อมช่วยออกแบบโซลูชันที่เหมาะสมที่สุดสำหรับธุรกิจของคุณ</p>
        <NuxtLink to="/contact" class="btn-primary !py-3.5 !text-base">
          <Icon name="lucide:message-circle" class="w-5 h-5" />
          ปรึกษาฟรี
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'บริการ — OneSiamSoft Enterprise Solutions',
  description: 'Cloud Server, Web Hosting, Domain, Dedicated Server, Business Email, WordPress Hosting และ Custom Solutions สำหรับทุกธุรกิจ',
})

const services = [
  {
    icon: 'lucide:cloud', badge: 'Cloud', title: 'Cloud Server',
    desc: 'Cloud VPS ประสิทธิภาพสูงด้วย SSD NVMe, Enterprise-Grade Hardware พร้อม Auto Scaling และ Snapshot สำหรับสำรองข้อมูล',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    features: ['SSD NVMe Storage', 'Auto Scaling', 'Snapshot & Backup', 'DDoS Protection', '99.9% Uptime SLA', 'Root Access'],
  },
  {
    icon: 'lucide:globe', badge: 'Hosting', title: 'Web Hosting',
    desc: 'Managed Web Hosting พร้อม cPanel, ฟรี SSL ทุกแพ็กเกจ รองรับ PHP, Node.js และอื่นๆ ย้ายเว็บฟรี',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    features: ['cPanel Control', 'Free SSL', 'PHP ทุกเวอร์ชัน', 'Daily Backup', 'Email Hosting', 'Free Migration'],
  },
  {
    icon: 'lucide:link', badge: 'Domain', title: 'Domain Registration',
    desc: 'จดโดเมนราคาพิเศษ ทั้ง .com .in.th .co.th .net พร้อม DNS Management และ WHOIS Privacy Protection',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80',
    features: ['.com เริ่มต้น 500฿/ปี', '.in.th เริ่มต้น 400฿/ปี', '.co.th เริ่มต้น 580฿/ปี', '.net เริ่มต้น 500฿/ปี', 'DNS Management', 'WHOIS Privacy'],
  },
  {
    icon: 'lucide:server', badge: 'Dedicated', title: 'Dedicated Server',
    desc: 'เซิร์ฟเวอร์เฉพาะสำหรับองค์กร ประสิทธิภาพสูงสุด Root Access เต็มรูปแบบ พร้อม DDoS Protection',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    features: ['Full Root Access', 'Enterprise Hardware', 'DDoS Protection L3-L7', 'Dedicated IP', '1Gbps Network', '24/7 Monitoring'],
  },
  {
    icon: 'lucide:mail', badge: 'Email', title: 'Business Email',
    desc: 'อีเมลองค์กรพร้อมโดเมนของตนเอง ปลอดภัยด้วย Spam Filter และ Antivirus ระดับ Enterprise',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80',
    features: ['Custom Domain', 'Spam Filter', 'Antivirus', 'Webmail Access', 'IMAP/POP3/SMTP', 'Mobile Sync'],
  },
  {
    icon: 'lucide:pen-tool', badge: 'WordPress', title: 'WordPress Hosting',
    desc: 'Optimized สำหรับ WordPress โดยเฉพาะ เร็ว ปลอดภัย พร้อม Auto Update และ Staging Environment',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
    features: ['WordPress Optimized', 'Auto Update', 'Staging Environment', 'WP-CLI Access', 'Free SSL', 'Daily Backup'],
  },
  {
    icon: 'lucide:monitor', badge: 'Hardware', title: 'Custom Server',
    desc: 'สั่งประกอบ Server/Workstation ตามสเปค ดูแลติดตั้งและบำรุงรักษาโดยทีมผู้เชี่ยวชาญ',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&q=80',
    features: ['Custom Spec', 'Professional Assembly', 'Warranty Support', 'On-site Service', 'Maintenance Plan', 'Hardware Upgrade'],
  },
  {
    icon: 'lucide:lightbulb', badge: 'Solutions', title: 'Custom Solutions',
    desc: 'ออกแบบ IT Infrastructure, พัฒนาซอฟต์แวร์ และ System Integration ตามความต้องการ ปรึกษาฟรี',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    features: ['IT Consulting', 'System Design', 'Software Development', 'System Integration', 'Cloud Migration', 'Free Consultation'],
  },
]
</script>
