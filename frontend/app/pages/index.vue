<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      <!-- Animated background -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-primary-950 via-slate-950 to-slate-900"></div>
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s;"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl"></div>
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;1&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      </div>

      <div class="section-container relative z-10 py-32 lg:py-0">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="animate-fade-in-up">
            <div class="badge-primary mb-6">
              <Icon name="lucide:zap" class="w-3.5 h-3.5" />
              Enterprise-Grade Cloud Infrastructure
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 text-balance">
              Cloud Infrastructure
              <span class="gradient-text bg-gradient-to-r from-primary-400 to-accent-400"> ที่ธุรกิจ</span>
              ไว้วางใจ
            </h1>
            <p class="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
              มอบประสิทธิภาพระดับ Enterprise ด้วย SSD NVMe, DDoS Protection และ 99.9% Uptime SLA เพื่อขับเคลื่อนธุรกิจดิจิทัลของคุณอย่างมั่นคง
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/services" class="btn-primary !py-3.5 !text-base">
                <Icon name="lucide:rocket" class="w-5 h-5" />
                เริ่มต้นใช้งาน
              </NuxtLink>
              <NuxtLink to="/contact" class="btn-secondary !bg-white/10 !text-white !border-white/10 hover:!bg-white/20 !py-3.5 !text-base">
                <Icon name="lucide:message-circle" class="w-5 h-5" />
                พูดคุยกับผู้เชี่ยวชาญ
              </NuxtLink>
            </div>

            <!-- Trust indicators -->
            <div class="mt-10 flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500">
              <div class="flex items-center gap-2">
                <Icon name="lucide:shield-check" class="w-4 h-4 text-accent-400" />
                <span>SSL Free</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="lucide:clock" class="w-4 h-4 text-accent-400" />
                <span>24/7 Support</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="lucide:refresh-cw" class="w-4 h-4 text-accent-400" />
                <span>Auto Backup</span>
              </div>
            </div>
          </div>

          <!-- Hero Visual -->
          <div class="hidden lg:block animate-fade-in">
            <div class="relative">
              <div class="absolute -top-4 -left-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 animate-float z-10">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-accent-500/20 rounded-xl flex items-center justify-center">
                    <Icon name="lucide:trending-up" class="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <div class="text-white text-sm font-semibold">99.9%</div>
                    <div class="text-gray-500 text-xs">Uptime SLA</div>
                  </div>
                </div>
              </div>

              <div class="absolute -bottom-4 -right-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 animate-float z-10" style="animation-delay: 3s;">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center">
                    <Icon name="lucide:shield" class="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div class="text-white text-sm font-semibold">Protected</div>
                    <div class="text-gray-500 text-xs">DDoS Shield</div>
                  </div>
                </div>
              </div>

              <!-- Server room image -->
              <div class="rounded-3xl overflow-hidden border border-white/10">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" 
                  alt="Data Center Server Room" 
                  class="w-full h-[400px] object-cover" 
                  loading="eager" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-16 bg-white border-b border-gray-100">
      <div class="section-container">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-4xl font-extrabold text-gray-900 mb-1">{{ stat.value }}</div>
            <div class="text-sm text-gray-500 font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-24 bg-gray-50">
      <div class="section-container">
        <div class="text-center mb-16">
          <div class="badge-primary mx-auto mb-4">
            <Icon name="lucide:layers" class="w-3.5 h-3.5" />
            Solutions
          </div>
          <h2 class="section-heading text-gray-900">บริการครบวงจร<br class="sm:hidden" /> สำหรับธุรกิจดิจิทัล</h2>
          <p class="section-subheading">โซลูชัน Cloud Infrastructure และ Managed Services ที่ออกแบบมาเพื่อรองรับทุกขนาดธุรกิจ</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <NuxtLink to="/services" v-for="service in services" :key="service.title"
            class="card card-hover p-6 group">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
              :class="service.bgClass">
              <Icon :name="service.icon" class="w-6 h-6 transition-colors duration-300" :class="service.iconClass" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{{ service.title }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">{{ service.desc }}</p>
            <span class="text-primary-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              เรียนรู้เพิ่มเติม
              <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-24 bg-white">
      <div class="section-container">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div class="badge-primary mb-4">
              <Icon name="lucide:award" class="w-3.5 h-3.5" />
              Why OneSiamSoft
            </div>
            <h2 class="section-heading text-gray-900 mb-6">ทำไมองค์กรชั้นนำ<br />ถึงเลือกเรา</h2>
            <p class="text-gray-500 leading-relaxed mb-10">
              ด้วยประสบการณ์กว่า 10 ปีในอุตสาหกรรม Cloud Infrastructure เราเข้าใจความต้องการของธุรกิจไทย 
              และพร้อมมอบบริการที่เหนือกว่ามาตรฐาน
            </p>
            <div class="space-y-6">
              <div v-for="feature in features" :key="feature.title" class="flex gap-4">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" :class="feature.bgClass">
                  <Icon :name="feature.icon" class="w-5 h-5" :class="feature.iconClass" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">{{ feature.title }}</h3>
                  <p class="text-sm text-gray-500 leading-relaxed">{{ feature.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Visual with real image -->
          <div class="relative">
            <div class="rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80" 
                alt="ทีมผู้เชี่ยวชาญ OneSiamSoft" 
                class="w-full h-[450px] object-cover rounded-3xl" 
                loading="lazy" />
            </div>
            <!-- Overlay stats -->
            <div class="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
              <div class="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div class="text-xl font-bold text-gray-900">99.9%</div>
                  <div class="text-xs text-gray-500">Uptime</div>
                </div>
                <div>
                  <div class="text-xl font-bold text-gray-900">&lt;10ms</div>
                  <div class="text-xs text-gray-500">Response</div>
                </div>
                <div>
                  <div class="text-xl font-bold text-gray-900">L7</div>
                  <div class="text-xs text-gray-500">DDoS</div>
                </div>
                <div>
                  <div class="text-xl font-bold text-gray-900">24/7</div>
                  <div class="text-xs text-gray-500">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Domain Pricing -->
    <section class="py-24 bg-gray-50">
      <div class="section-container">
        <div class="text-center mb-16">
          <div class="badge-primary mx-auto mb-4">
            <Icon name="lucide:globe" class="w-3.5 h-3.5" />
            Domain Registration
          </div>
          <h2 class="section-heading text-gray-900">จดโดเมนราคาพิเศษ</h2>
          <p class="section-subheading">เริ่มต้นสร้างตัวตนออนไลน์ด้วยโดเมนคุณภาพ พร้อม DNS Management และ WHOIS Privacy</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          <div v-for="domain in domains" :key="domain.ext"
            class="card card-hover p-6 text-center">
            <div class="text-3xl font-extrabold text-primary-600 mb-1">{{ domain.ext }}</div>
            <div class="text-sm text-gray-400 mb-3">เริ่มต้น</div>
            <div class="text-2xl font-bold text-gray-900 mb-1">{{ domain.price }}</div>
            <div class="text-xs text-gray-400">บาท / ปี</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-24 bg-white">
      <div class="section-container">
        <div class="text-center mb-16">
          <div class="badge-primary mx-auto mb-4">
            <Icon name="lucide:message-square" class="w-3.5 h-3.5" />
            Testimonials
          </div>
          <h2 class="section-heading text-gray-900">เสียงจากลูกค้าของเรา</h2>
          <p class="section-subheading">ความไว้วางใจจากธุรกิจหลากหลายประเภททั่วประเทศ</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="t in testimonials" :key="t.name" class="card p-6">
            <div class="flex items-center gap-1 mb-4">
              <Icon v-for="i in 5" :key="i" name="lucide:star" class="w-4 h-4 text-amber-400 fill-amber-400" />
            </div>
            <p class="text-gray-600 leading-relaxed mb-6 text-sm">"{{ t.text }}"</p>
            <div class="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <span class="text-white font-semibold text-sm">{{ t.name[0] }}</span>
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
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80" 
          alt="" class="w-full h-full object-cover" loading="lazy" />
        <div class="absolute inset-0 bg-primary-900/90"></div>
      </div>
      <div class="section-container relative z-10 text-center">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4 text-balance">
          พร้อมยกระดับธุรกิจดิจิทัลของคุณ?
        </h2>
        <p class="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
          ให้ทีมผู้เชี่ยวชาญของเราช่วยออกแบบ Infrastructure ที่เหมาะสมกับธุรกิจของคุณ — ปรึกษาฟรี ไม่มีค่าใช้จ่าย
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="btn-primary !bg-white !text-primary-700 hover:!bg-gray-100 !shadow-xl !py-3.5 !text-base">
            <Icon name="lucide:phone" class="w-5 h-5" />
            ติดต่อเราวันนี้
          </NuxtLink>
          <NuxtLink to="/services" class="btn-secondary !bg-transparent !text-white !border-white/30 hover:!bg-white/10 !py-3.5 !text-base">
            ดูแพ็กเกจทั้งหมด
            <Icon name="lucide:arrow-right" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'OneSiamSoft — Enterprise Cloud Infrastructure & Hosting Solutions',
  description: 'OneSiamSoft ผู้ให้บริการ Cloud Server, Web Hosting, Domain, Dedicated Server และ Enterprise Solutions ชั้นนำของประเทศไทย ด้วยมาตรฐาน Enterprise-Grade',
  ogTitle: 'OneSiamSoft — Enterprise Cloud Infrastructure',
  ogDescription: 'Trusted cloud infrastructure and hosting solutions for Thai businesses. 99.9% Uptime SLA.',
})

const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '10,000+', label: 'ลูกค้าที่ไว้วางใจ' },
  { value: '24/7/365', label: 'Technical Support' },
  { value: '10+ ปี', label: 'ประสบการณ์ในอุตสาหกรรม' },
]

const services = [
  { icon: 'lucide:cloud', title: 'Cloud Server', desc: 'Cloud VPS ประสิทธิภาพสูงด้วย SSD NVMe และ Enterprise Hardware พร้อม Auto Scaling', bgClass: 'bg-blue-50 group-hover:bg-blue-500', iconClass: 'text-blue-500 group-hover:text-white' },
  { icon: 'lucide:globe', title: 'Web Hosting', desc: 'Managed Hosting พร้อม cPanel, ฟรี SSL ทุกแพ็กเกจ รองรับ PHP ทุกเวอร์ชัน', bgClass: 'bg-emerald-50 group-hover:bg-emerald-500', iconClass: 'text-emerald-500 group-hover:text-white' },
  { icon: 'lucide:link', title: 'Domain', desc: 'จดโดเมนราคาพิเศษ ทั้ง .com .th .net พร้อม DNS Management', bgClass: 'bg-purple-50 group-hover:bg-purple-500', iconClass: 'text-purple-500 group-hover:text-white' },
  { icon: 'lucide:server', title: 'Dedicated Server', desc: 'เซิร์ฟเวอร์เฉพาะสำหรับองค์กร Root Access เต็มรูปแบบ DDoS Protection', bgClass: 'bg-orange-50 group-hover:bg-orange-500', iconClass: 'text-orange-500 group-hover:text-white' },
  { icon: 'lucide:mail', title: 'Business Email', desc: 'อีเมลองค์กรพร้อมโดเมนของตนเอง ปลอดภัยด้วย Spam Filter ระดับ Enterprise', bgClass: 'bg-rose-50 group-hover:bg-rose-500', iconClass: 'text-rose-500 group-hover:text-white' },
  { icon: 'lucide:pen-tool', title: 'WordPress Hosting', desc: 'Optimized สำหรับ WordPress โดยเฉพาะ เร็ว ปลอดภัย อัพเดทอัตโนมัติ', bgClass: 'bg-cyan-50 group-hover:bg-cyan-500', iconClass: 'text-cyan-500 group-hover:text-white' },
  { icon: 'lucide:monitor', title: 'Custom Server', desc: 'สั่งประกอบ Server/Workstation ตามสเปค ดูแลโดยทีมผู้เชี่ยวชาญ', bgClass: 'bg-amber-50 group-hover:bg-amber-500', iconClass: 'text-amber-500 group-hover:text-white' },
  { icon: 'lucide:lightbulb', title: 'Custom Solutions', desc: 'ออกแบบ IT Infrastructure ตามความต้องการ ปรึกษาฟรี', bgClass: 'bg-indigo-50 group-hover:bg-indigo-500', iconClass: 'text-indigo-500 group-hover:text-white' },
]

const features = [
  { icon: 'lucide:zap', title: 'ประสิทธิภาพสูงสุด', desc: 'ใช้ SSD NVMe, Latest-Gen CPU และ Enterprise Networking เพื่อความเร็วระดับ Premium', bgClass: 'bg-amber-50', iconClass: 'text-amber-600' },
  { icon: 'lucide:shield-check', title: 'ปลอดภัยระดับ Enterprise', desc: 'WAF, DDoS Protection L3-L7, SSL Certificate ฟรี และระบบ Monitoring 24/7', bgClass: 'bg-emerald-50', iconClass: 'text-emerald-600' },
  { icon: 'lucide:headphones', title: 'ทีมผู้เชี่ยวชาญ 24/7', desc: 'วิศวกรที่มีประสบการณ์พร้อมให้ความช่วยเหลือทุกปัญหา ย้ายเว็บไซต์ฟรี', bgClass: 'bg-blue-50', iconClass: 'text-blue-600' },
  { icon: 'lucide:refresh-cw', title: 'Backup อัตโนมัติ', desc: 'ระบบ Backup ทุกวัน สำรองข้อมูลหลายจุด กู้คืนได้ทันทีเมื่อต้องการ', bgClass: 'bg-purple-50', iconClass: 'text-purple-600' },
]

const domains = [
  { ext: '.com', price: '500' },
  { ext: '.in.th', price: '400' },
  { ext: '.co.th', price: '580' },
  { ext: '.net', price: '500' },
]

const testimonials = [
  { name: 'สมชาย ธุรกิจดี', role: 'CEO, TechStartup Co.', text: 'ใช้ Cloud Server ของ OneSiamSoft มา 3 ปี เซิร์ฟเวอร์เสถียรมาก ไม่เคยมีปัญหา downtime ซัพพอร์ทตอบไว แก้ปัญหาเร็ว ประทับใจการบริการมาก' },
  { name: 'วิภา สุขใจ', role: 'CTO, E-Commerce Plus', text: 'ย้ายมาจากเจ้าอื่น ประทับใจมาก เว็บโหลดเร็วขึ้นเท่าตัว ทีมงานช่วยย้ายให้ฟรี ไม่ต้องทำอะไรเลย ทุกอย่างเรียบร้อยภายในไม่กี่ชั่วโมง' },
  { name: 'อนันต์ พัฒนา', role: 'Founder, AgencyPro', text: 'ราคาคุ้มค่ามาก ใช้ Dedicated Server สำหรับโปรเจ็คใหญ่ๆ ได้สบาย ปรับแต่งได้ตามต้องการ Support team ตอบเร็ว แก้ปัญหาให้ตลอด' },
]
</script>
