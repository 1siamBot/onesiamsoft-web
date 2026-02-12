<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-slate-950 pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-950 via-slate-950 to-slate-900"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      <div class="section-container relative z-10 text-center">
        <div class="badge-primary mx-auto mb-6">
          <Icon name="lucide:building-2" class="w-3.5 h-3.5" />
          About Us
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4">เกี่ยวกับ OneSiamSoft</h1>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">
          ผู้ให้บริการ Cloud Infrastructure ชั้นนำของประเทศไทย ด้วยประสบการณ์กว่า 10 ปี
        </p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-24">
      <div class="section-container">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="section-heading text-gray-900 mb-6">เราเชื่อว่าทุกธุรกิจ<br />สมควรได้รับเทคโนโลยีระดับ Enterprise</h2>
            <p class="text-gray-500 leading-relaxed mb-6">
              OneSiamSoft ก่อตั้งขึ้นด้วยวิสัยทัศน์ที่ต้องการให้ธุรกิจทุกขนาดในประเทศไทยสามารถเข้าถึง 
              Cloud Infrastructure คุณภาพสูงในราคาที่เหมาะสม ด้วยทีมวิศวกรที่มีประสบการณ์กว่า 10 ปี 
              เราเข้าใจความต้องการของธุรกิจไทยอย่างแท้จริง
            </p>
            <p class="text-gray-500 leading-relaxed">
              วันนี้ เราให้บริการลูกค้ากว่า 10,000 ราย ตั้งแต่ Startup ไปจนถึงองค์กรขนาดใหญ่ 
              ด้วยมาตรฐานการให้บริการระดับ Enterprise และทีมซัพพอร์ทที่พร้อมดูแลตลอด 24 ชั่วโมง
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="card p-6">
              <Icon name="lucide:target" class="w-8 h-8 text-primary-500 mb-3" />
              <h3 class="font-semibold text-gray-900 mb-2">Mission</h3>
              <p class="text-sm text-gray-500 leading-relaxed">มอบบริการ Cloud ที่เร็ว ปลอดภัย คุ้มค่า พร้อมทีมดูแลตลอด 24/7</p>
            </div>
            <div class="card p-6">
              <Icon name="lucide:eye" class="w-8 h-8 text-accent-500 mb-3" />
              <h3 class="font-semibold text-gray-900 mb-2">Vision</h3>
              <p class="text-sm text-gray-500 leading-relaxed">เป็นผู้นำด้าน Cloud Infrastructure ที่ธุรกิจไทยไว้วางใจ</p>
            </div>
            <div class="card p-6 col-span-2">
              <Icon name="lucide:heart" class="w-8 h-8 text-rose-500 mb-3" />
              <h3 class="font-semibold text-gray-900 mb-2">Core Values</h3>
              <p class="text-sm text-gray-500 leading-relaxed">Reliability · Security · Transparency · Customer-First</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-20 bg-gray-50">
      <div class="section-container">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-4xl font-extrabold text-gray-900 mb-1">{{ stat.value }}</div>
            <div class="text-sm text-gray-500">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-24">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="section-heading text-gray-900">สิ่งที่เราให้ความสำคัญ</h2>
          <p class="section-subheading">หลักการที่ขับเคลื่อนทุกสิ่งที่เราทำ</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="value in values" :key="value.title" class="card card-hover p-6 text-center">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" :class="value.bgClass">
              <Icon :name="value.icon" class="w-7 h-7" :class="value.iconClass" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">{{ value.title }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gray-50">
      <div class="section-container text-center">
        <h2 class="section-heading text-gray-900 mb-4">พร้อมเป็นส่วนหนึ่งกับเรา?</h2>
        <p class="section-subheading mb-8">ให้เราช่วยขับเคลื่อนธุรกิจดิจิทัลของคุณ</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="btn-primary !py-3.5">
            <Icon name="lucide:message-circle" class="w-5 h-5" />
            ติดต่อเราวันนี้
          </NuxtLink>
          <NuxtLink to="/services" class="btn-secondary !py-3.5">
            ดูบริการของเรา
            <Icon name="lucide:arrow-right" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'เกี่ยวกับเรา — OneSiamSoft',
  description: 'OneSiamSoft ผู้ให้บริการ Cloud Infrastructure ชั้นนำของประเทศไทย ด้วยประสบการณ์กว่า 10 ปี และลูกค้ากว่า 10,000 ราย',
})

const stats = [
  { value: '10+', label: 'ปีประสบการณ์' },
  { value: '10,000+', label: 'ลูกค้าที่ไว้วางใจ' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '24/7', label: 'Technical Support' },
]

const values = [
  { icon: 'lucide:server', title: 'Reliability', desc: 'ระบบเสถียรด้วย 99.9% Uptime SLA และ Redundant Infrastructure', bgClass: 'bg-blue-50', iconClass: 'text-blue-600' },
  { icon: 'lucide:shield-check', title: 'Security', desc: 'ปกป้องข้อมูลของคุณด้วยมาตรฐานความปลอดภัยระดับสูงสุด', bgClass: 'bg-emerald-50', iconClass: 'text-emerald-600' },
  { icon: 'lucide:eye', title: 'Transparency', desc: 'ไม่มี hidden costs ราคาชัดเจน สัญญาโปร่งใส', bgClass: 'bg-amber-50', iconClass: 'text-amber-600' },
  { icon: 'lucide:heart-handshake', title: 'Customer First', desc: 'ทุกการตัดสินใจเริ่มจากความต้องการของลูกค้าเป็นอันดับแรก', bgClass: 'bg-rose-50', iconClass: 'text-rose-600' },
]
</script>
