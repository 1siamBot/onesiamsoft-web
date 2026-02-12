<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 relative overflow-hidden">
      <div class="gradient-orb w-[500px] h-[500px] bg-sky-500 -top-40 -left-40"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h1 class="text-4xl lg:text-6xl font-bold text-white tracking-tight">เกี่ยวกับเรา</h1>
        <p class="section-subtitle mt-4">เรื่องราวของ OneSiamSoft</p>
      </div>
    </section>

    <!-- Story -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <div class="w-full lg:w-1/2">
            <div class="glass-card overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop"
                alt="Team" class="w-full h-80 object-cover" />
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <h2 class="text-3xl font-bold text-white mb-6">บริษัท วัน สยามซอฟท์ จำกัด</h2>
            <div class="space-y-4 text-gray-400 leading-relaxed">
              <p>OneSiamSoft ก่อตั้งขึ้นด้วยความมุ่งมั่นในการให้บริการ Cloud Infrastructure และ IT Solutions ที่มีคุณภาพ เชื่อถือได้ และราคาเข้าถึงได้สำหรับธุรกิจทุกขนาดในประเทศไทย</p>
              <p>ด้วยประสบการณ์กว่า 10 ปีในวงการ IT เราได้ดูแลลูกค้ากว่า 500 รายทั่วประเทศ ตั้งแต่ธุรกิจขนาดเล็กจนถึงองค์กรขนาดใหญ่ โดยทีมงานผู้เชี่ยวชาญที่พร้อมให้บริการ 24 ชั่วโมง</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding border-y border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="section-title text-center mb-16">คุณค่าหลักของเรา</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="v in values" :key="v.title" class="glass-card p-8 text-center">
            <div class="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center mx-auto mb-5">
              <Icon :name="v.icon" class="w-7 h-7 text-sky-400" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">{{ v.title }}</h3>
            <p class="text-gray-500 leading-relaxed">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-4xl font-bold text-white">{{ stat.value }}</div>
            <div class="text-gray-500 mt-2">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Info -->
    <section class="pb-24 lg:pb-32">
      <div class="max-w-3xl mx-auto px-6">
        <div class="glass-card p-8 lg:p-10">
          <h3 class="text-xl font-semibold text-white mb-6">ข้อมูลบริษัท</h3>
          <div class="space-y-4 text-gray-400">
            <div class="flex items-start gap-3">
              <Icon name="lucide:building-2" class="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <span>บริษัท วัน สยามซอฟท์ จำกัด</span>
            </div>
            <div class="flex items-start gap-3">
              <Icon name="lucide:map-pin" class="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <span>28/99 ซอยหมู่บ้านบ่อฝ้าย ต.หัวหิน อ.หัวหิน จ.ประจวบคีรีขันธ์ 77110</span>
            </div>
            <div class="flex items-start gap-3">
              <Icon name="lucide:mail" class="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <span>support@onesiamsoft.com</span>
            </div>
            <div class="flex items-start gap-3">
              <Icon name="lucide:clock" class="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <span>เปิดให้บริการ 24 ชั่วโมง ทุกวัน</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({ title: 'เกี่ยวกับเรา - OneSiamSoft', description: 'เรื่องราวและคุณค่าหลักของ OneSiamSoft' })

const values = [
  { icon: 'lucide:heart', title: 'ใส่ใจลูกค้า', desc: 'เราให้ความสำคัญกับทุกความต้องการของลูกค้า และพร้อมช่วยเหลือเสมอ' },
  { icon: 'lucide:target', title: 'มุ่งมั่นคุณภาพ', desc: 'ทุกบริการผ่านมาตรฐานสูงสุด เพื่อให้ลูกค้าได้รับสิ่งที่ดีที่สุด' },
  { icon: 'lucide:trending-up', title: 'พัฒนาไม่หยุด', desc: 'เราอัพเดตเทคโนโลยีอยู่เสมอ เพื่อให้ลูกค้าได้ใช้สิ่งที่ดีที่สุด' },
]

const stats = [
  { value: '10+', label: 'ปีประสบการณ์' },
  { value: '500+', label: 'ลูกค้าที่ไว้วางใจ' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'ซัพพอร์ต' },
]
</script>
