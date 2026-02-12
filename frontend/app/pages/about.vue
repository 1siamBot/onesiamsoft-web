<template>
  <div>
    <!-- Hero with Image -->
    <section class="relative pt-16">
      <div class="absolute inset-0 h-[450px]">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=600&fit=crop&q=80"
          alt="Team" class="img-cover" />
        <div class="absolute inset-0 bg-gradient-to-b from-[#0c1222]/80 via-[#0c1222]/70 to-[#0c1222]"></div>
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 class="text-4xl lg:text-6xl font-bold text-white tracking-tight">เกี่ยวกับเรา</h1>
        <p class="section-subtitle mt-4">เรื่องราวของ OneSiamSoft</p>
      </div>
    </section>

    <!-- Story -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <div class="w-full lg:w-1/2">
            <div class="rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80"
                alt="Office" class="w-full h-80 object-cover" />
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

    <!-- Timeline -->
    <section class="section-padding border-y border-white/[0.06]">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="section-title text-center mb-16">เส้นทางของเรา</h2>
        <div class="space-y-12">
          <div v-for="(event, i) in timeline" :key="event.year"
            :class="['flex gap-6 items-start', i % 2 === 0 ? '' : '']">
            <div class="shrink-0 w-20 text-right">
              <div class="text-2xl font-bold text-sky-400">{{ event.year }}</div>
            </div>
            <div class="relative pb-12">
              <div class="absolute top-3 -left-[5px] w-2.5 h-2.5 rounded-full bg-sky-400"></div>
              <div class="absolute top-3 left-0 -bottom-4 w-px bg-white/[0.08]" v-if="i < timeline.length - 1"></div>
              <div class="ml-6">
                <h3 class="text-lg font-semibold text-white">{{ event.title }}</h3>
                <p class="text-gray-400 text-sm mt-1">{{ event.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values with Images -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="section-title text-center mb-16">คุณค่าหลักของเรา</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="v in values" :key="v.title" class="glass-card overflow-hidden">
            <div class="h-48 overflow-hidden">
              <img :src="v.image" :alt="v.title" class="img-cover" loading="lazy" />
            </div>
            <div class="p-6 text-center">
              <div class="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mx-auto -mt-12 relative z-10">
                <Icon :name="v.icon" class="w-6 h-6 text-sky-400" />
              </div>
              <h3 class="text-xl font-semibold text-white mt-4 mb-2">{{ v.title }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed">{{ v.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-20 border-y border-white/[0.06]">
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
    <section class="section-padding">
      <div class="max-w-3xl mx-auto px-6">
        <div class="glass-card p-8 lg:p-10">
          <h3 class="text-xl font-semibold text-white mb-6">ข้อมูลบริษัท</h3>
          <div class="space-y-4 text-gray-400">
            <div class="flex items-start gap-3">
              <Icon name="lucide:building-2" class="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <span>บริษัท วัน สยามซอฟท์ จำกัด (สำนักงานใหญ่)</span>
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

const timeline = [
  { year: '2015', title: 'ก่อตั้งบริษัท', desc: 'เริ่มต้นให้บริการ Web Hosting และ Domain Registration' },
  { year: '2017', title: 'เปิดบริการ Cloud Server', desc: 'ขยายบริการ Cloud Infrastructure รองรับธุรกิจขนาดกลาง' },
  { year: '2019', title: 'ลูกค้า 200+ ราย', desc: 'เติบโตอย่างต่อเนื่อง เพิ่มทีม Support 24/7' },
  { year: '2021', title: 'Dedicated Server & Custom Solutions', desc: 'เปิดบริการ Dedicated Server และรับทำระบบ IT ครบวงจร' },
  { year: '2024', title: 'ลูกค้า 500+ ราย', desc: 'เป็นผู้ให้บริการที่ได้รับความไว้วางใจจากธุรกิจทั่วประเทศ' },
]

const values = [
  { icon: 'lucide:heart', title: 'ใส่ใจลูกค้า', desc: 'เราให้ความสำคัญกับทุกความต้องการของลูกค้า และพร้อมช่วยเหลือเสมอ', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=300&fit=crop&q=80' },
  { icon: 'lucide:target', title: 'มุ่งมั่นคุณภาพ', desc: 'ทุกบริการผ่านมาตรฐานสูงสุด เพื่อให้ลูกค้าได้รับสิ่งที่ดีที่สุด', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop&q=80' },
  { icon: 'lucide:trending-up', title: 'พัฒนาไม่หยุด', desc: 'เราอัพเดตเทคโนโลยีอยู่เสมอ เพื่อให้ลูกค้าได้ใช้สิ่งที่ดีที่สุด', image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&h=300&fit=crop&q=80' },
]

const stats = [
  { value: '10+', label: 'ปีประสบการณ์' },
  { value: '500+', label: 'ลูกค้าที่ไว้วางใจ' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'ซัพพอร์ต' },
]
</script>
