<template>
  <div>
    <!-- Hero with Background Image -->
    <section class="relative min-h-screen flex items-center">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop&q=80"
          alt="Data Center" class="img-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-[#0c1222] via-[#0c1222]/90 to-[#0c1222]/70"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm mb-8">
            <Icon name="lucide:sparkles" class="w-4 h-4" />
            Trusted by 500+ businesses
          </div>
          <h1 class="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Cloud Infrastructure
            <span class="block text-sky-400 mt-2">ที่ธุรกิจไว้วางใจ</span>
          </h1>
          <p class="text-lg lg:text-xl text-gray-300 mt-8 max-w-xl leading-relaxed">
            บริการ Cloud Server, Web Hosting และ IT Solutions ครบวงจร พร้อมทีมซัพพอร์ตดูแลตลอด 24 ชั่วโมง
          </p>
          <div class="flex flex-wrap gap-4 mt-10">
            <NuxtLink to="/contact"
              class="px-8 py-4 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/25 text-lg">
              เริ่มต้นใช้งาน
            </NuxtLink>
            <NuxtLink to="/services"
              class="px-8 py-4 rounded-xl border border-white/[0.15] text-white font-semibold hover:bg-white/[0.08] transition-all text-lg">
              ดูบริการทั้งหมด
            </NuxtLink>
          </div>
          <div class="flex flex-wrap gap-8 mt-16">
            <div v-for="badge in badges" :key="badge.label" class="flex items-center gap-3 text-sm text-gray-300">
              <div class="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                <Icon :name="badge.icon" class="w-5 h-5 text-sky-400" />
              </div>
              {{ badge.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats with Background -->
    <section class="relative py-20 border-y border-white/[0.06]">
      <div class="absolute inset-0 bg-gradient-to-b from-sky-500/[0.03] to-transparent"></div>
      <div class="max-w-7xl mx-auto px-6 relative">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-4xl lg:text-6xl font-bold text-white">{{ stat.value }}</div>
            <div class="text-gray-500 mt-2 text-lg">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services with Images -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">บริการของเรา</h2>
          <p class="section-subtitle">โซลูชันครบวงจรสำหรับทุกธุรกิจ</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <NuxtLink v-for="service in services" :key="service.title" to="/services"
            class="glass-card-hover overflow-hidden group">
            <div class="h-40 overflow-hidden">
              <img :src="service.image" :alt="service.title"
                class="img-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div class="p-5">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-9 h-9 rounded-lg bg-sky-500/10 flex items-center justify-center shrink-0">
                  <Icon :name="service.icon" class="w-5 h-5 text-sky-400" />
                </div>
                <h3 class="text-white font-semibold">{{ service.title }}</h3>
              </div>
              <p class="text-gray-500 text-sm leading-relaxed">{{ service.desc }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Us — Image + Text -->
    <section class="section-padding border-y border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <div class="w-full lg:w-1/2">
            <div class="relative rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80"
                alt="Global Network" class="w-full h-[400px] object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-transparent to-transparent"></div>
              <div class="absolute bottom-6 left-6 right-6">
                <div class="flex gap-4">
                  <div v-for="mini in miniStats" :key="mini.label" class="glass-card px-4 py-3 text-center flex-1">
                    <div class="text-xl font-bold text-white">{{ mini.value }}</div>
                    <div class="text-xs text-gray-400">{{ mini.label }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <h2 class="section-title text-left">ทำไมต้องเลือกเรา</h2>
            <p class="text-gray-400 mt-4 leading-relaxed">สิ่งที่ทำให้เราแตกต่างจากผู้ให้บริการรายอื่น</p>
            <div class="space-y-6 mt-8">
              <div v-for="feature in features" :key="feature.title" class="flex gap-4">
                <div class="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <Icon :name="feature.icon" class="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h3 class="text-white font-semibold text-lg">{{ feature.title }}</h3>
                  <p class="text-gray-500 text-sm mt-1 leading-relaxed">{{ feature.desc }}</p>
                </div>
              </div>
            </div>
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
          <div v-for="domain in domains" :key="domain.ext" class="glass-card-hover p-8 text-center">
            <div class="text-3xl font-bold text-sky-400 mb-3">{{ domain.ext }}</div>
            <div class="text-white">
              <span class="text-4xl font-bold">{{ domain.price }}</span>
              <span class="text-gray-500 text-sm block mt-1">บาท/ปี</span>
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
              <Icon v-for="i in 5" :key="i" name="lucide:star" class="w-4 h-4 text-yellow-400" />
            </div>
            <p class="text-gray-300 leading-relaxed mb-6">"{{ t.quote }}"</p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold text-sm">
                {{ t.name.charAt(3) }}
              </div>
              <div>
                <div class="text-white font-semibold text-sm">{{ t.name }}</div>
                <div class="text-gray-500 text-xs">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA with Image -->
    <section class="section-padding">
      <div class="max-w-5xl mx-auto px-6">
        <div class="relative rounded-3xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1200&h=500&fit=crop&q=80"
            alt="Cloud" class="w-full h-[400px] object-cover" />
          <div class="absolute inset-0 bg-[#0c1222]/80"></div>
          <div class="absolute inset-0 flex items-center justify-center text-center p-8">
            <div>
              <h2 class="text-3xl lg:text-5xl font-bold text-white mb-4">พร้อมเริ่มต้นหรือยัง?</h2>
              <p class="text-gray-300 text-lg mb-8 max-w-lg mx-auto">เริ่มต้นใช้งาน Cloud Infrastructure ที่เสถียรและเร็วที่สุดวันนี้</p>
              <div class="flex flex-wrap justify-center gap-4">
                <NuxtLink to="/contact"
                  class="px-8 py-3.5 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/25">
                  เริ่มต้นเลย
                </NuxtLink>
                <NuxtLink to="/services"
                  class="px-8 py-3.5 rounded-xl border border-white/[0.2] text-white font-semibold hover:bg-white/[0.1] transition-all">
                  ดูแพ็คเกจ
                </NuxtLink>
              </div>
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

const miniStats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: 'Tier 3', label: 'Data Center' },
  { value: 'NVMe', label: 'SSD Storage' },
]

const services = [
  { icon: 'lucide:cloud', title: 'Cloud Server', desc: 'เซิร์ฟเวอร์บนคลาวด์ประสิทธิภาพสูง', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=300&fit=crop&q=80' },
  { icon: 'lucide:globe', title: 'Web Hosting', desc: 'เว็บโฮสติ้งเร็ว เสถียร พร้อม cPanel', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&q=80' },
  { icon: 'lucide:at-sign', title: 'Domain', desc: 'จดโดเมนทุกนามสกุล เริ่มต้น 400 บาท', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=500&h=300&fit=crop&q=80' },
  { icon: 'lucide:server', title: 'Dedicated Server', desc: 'เซิร์ฟเวอร์ส่วนตัวพลังสูงสุด', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&q=80' },
  { icon: 'lucide:mail', title: 'Business Email', desc: 'อีเมลธุรกิจ @yourdomain.com', image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&h=300&fit=crop&q=80' },
  { icon: 'lucide:file-code', title: 'WordPress Hosting', desc: 'โฮสติ้งเพื่อ WordPress โดยเฉพาะ', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&h=300&fit=crop&q=80' },
  { icon: 'lucide:settings', title: 'Custom Server', desc: 'ออกแบบเซิร์ฟเวอร์ตามสเปค', image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=500&h=300&fit=crop&q=80' },
  { icon: 'lucide:lightbulb', title: 'Custom Solutions', desc: 'โซลูชัน IT ตรงกับธุรกิจของคุณ', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=300&fit=crop&q=80' },
]

const features = [
  { icon: 'lucide:zap', title: 'ความเร็วสูง', desc: 'เซิร์ฟเวอร์ Data Center ระดับ Tier 3 รองรับ NVMe SSD เร็วกว่าปกติ 10 เท่า' },
  { icon: 'lucide:shield', title: 'ปลอดภัยสูงสุด', desc: 'ระบบ Firewall, DDoS Protection และ SSL Certificate ฟรีทุกแพ็คเกจ' },
  { icon: 'lucide:headphones', title: 'ซัพพอร์ต 24/7', desc: 'ทีมงานพร้อมดูแลและแก้ไขปัญหาให้คุณตลอด 24 ชั่วโมง ทุกวัน' },
  { icon: 'lucide:refresh-cw', title: 'Auto Backup', desc: 'สำรองข้อมูลอัตโนมัติทุกวัน กู้คืนได้ทันทีเมื่อต้องการ' },
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
