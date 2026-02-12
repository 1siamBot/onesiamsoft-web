<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-sm text-sky-400 font-medium tracking-wide uppercase mb-4">Services</p>
          <h1 class="heading-xl mb-6">บริการ<span class="accent">ครบวงจร</span></h1>
          <p class="text-lg text-gray-400 leading-relaxed">โซลูชันโครงสร้างพื้นฐานดิจิทัลที่ออกแบบมาเพื่อรองรับทุกขนาดธุรกิจ</p>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section v-for="(service, i) in services" :key="service.title" class="py-20 border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center" :class="i % 2 ? 'lg:[direction:rtl]' : ''">
          <div :class="i % 2 ? 'lg:[direction:ltr]' : ''">
            <div class="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-6">
              <Icon :name="service.icon" class="w-7 h-7 text-sky-400" />
            </div>
            <h2 class="heading-md mb-4">{{ service.title }}</h2>
            <p class="text-muted text-lg mb-8">{{ service.desc }}</p>
            <ul class="space-y-3">
              <li v-for="f in service.features" :key="f" class="flex items-center gap-3 text-gray-300">
                <Icon name="lucide:check" class="w-5 h-5 text-sky-400 shrink-0" />
                <span>{{ f }}</span>
              </li>
            </ul>
            <div v-if="service.price" class="mt-8">
              <span class="text-sm text-gray-500">เริ่มต้น</span>
              <span class="text-2xl font-bold text-white ml-2">{{ service.price }}</span>
            </div>
          </div>
          <div :class="i % 2 ? 'lg:[direction:ltr]' : ''">
            <div class="glass-card aspect-video flex items-center justify-center">
              <Icon :name="service.icon" class="w-20 h-20 text-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="heading-lg mb-6">ต้องการคำปรึกษา?</h2>
        <p class="text-muted text-lg max-w-xl mx-auto mb-10">ทีมผู้เชี่ยวชาญพร้อมช่วยคุณเลือกบริการที่เหมาะสมที่สุด</p>
        <NuxtLink to="/contact" class="btn-primary text-base">ติดต่อเรา</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'บริการ — OneSiamSoft',
  description: 'บริการ Cloud Server, Web Hosting, Domain, Dedicated Server และอื่นๆ',
})

const services = [
  {
    icon: 'lucide:cloud',
    title: 'Cloud Server',
    desc: 'เซิร์ฟเวอร์คลาวด์ประสิทธิภาพสูง ใช้ SSD NVMe รองรับ Auto-scaling พร้อมระบบ Backup อัตโนมัติ',
    features: ['SSD NVMe Storage', 'Auto-scaling', 'Daily Backup', 'DDoS Protection', '99.9% Uptime SLA'],
    price: '299 ฿/เดือน',
  },
  {
    icon: 'lucide:globe',
    title: 'Web Hosting',
    desc: 'เว็บโฮสติ้งที่เสถียรและรวดเร็ว รองรับ CMS ยอดนิยม พร้อม SSL ฟรี',
    features: ['LiteSpeed Web Server', 'Free SSL Certificate', 'cPanel Control Panel', 'One-click Installer', 'Email Accounts'],
    price: '99 ฿/เดือน',
  },
  {
    icon: 'lucide:at-sign',
    title: 'Domain Registration',
    desc: 'จดโดเมนทุกนามสกุล พร้อมระบบจัดการ DNS ที่ใช้งานง่าย',
    features: ['.com เริ่มต้น 500฿/ปี', '.in.th เริ่มต้น 400฿/ปี', '.co.th เริ่มต้น 580฿/ปี', 'DNS Management', 'WHOIS Privacy'],
    price: '400 ฿/ปี',
  },
  {
    icon: 'lucide:server',
    title: 'Dedicated Server',
    desc: 'เซิร์ฟเวอร์เฉพาะสำหรับองค์กรที่ต้องการทรัพยากรและความปลอดภัยสูงสุด',
    features: ['Full Root Access', 'Hardware RAID', 'Redundant Network', 'Custom Configuration', 'Managed Services'],
    price: '4,900 ฿/เดือน',
  },
  {
    icon: 'lucide:mail',
    title: 'Business Email',
    desc: 'อีเมลธุรกิจ @yourdomain.com เพิ่มความน่าเชื่อถือ พร้อม Anti-spam',
    features: ['Custom Domain Email', 'Anti-Spam & Virus', 'Webmail Access', 'IMAP/POP3/SMTP', 'Calendar & Contacts'],
    price: '59 ฿/เดือน',
  },
  {
    icon: 'lucide:layout-template',
    title: 'WordPress Hosting',
    desc: 'โฮสติ้งที่ออกแบบมาเฉพาะสำหรับ WordPress ด้วย LiteSpeed Cache',
    features: ['Optimized for WordPress', 'LiteSpeed Cache', 'Staging Environment', 'Auto Updates', 'Malware Scanning'],
    price: '149 ฿/เดือน',
  },
  {
    icon: 'lucide:settings',
    title: 'Custom Server',
    desc: 'ออกแบบเซิร์ฟเวอร์ตามสเปคที่ต้องการ ปรับแต่งได้ทุกรายละเอียด',
    features: ['Custom Hardware Spec', 'Choice of OS', 'Network Configuration', 'Load Balancer', 'Monitoring Tools'],
    price: null,
  },
  {
    icon: 'lucide:code',
    title: 'Custom Solutions',
    desc: 'พัฒนาระบบซอฟต์แวร์ตามความต้องการเฉพาะของธุรกิจ',
    features: ['Web Application', 'API Development', 'System Integration', 'DevOps & CI/CD', 'Consulting'],
    price: null,
  },
]
</script>
