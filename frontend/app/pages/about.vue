<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 relative overflow-hidden">
      <div class="gradient-orb w-[500px] h-[500px] bg-sky-500 -top-40 -left-40"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h1 v-scroll-animate class="text-4xl lg:text-6xl font-bold text-white tracking-tight">เกี่ยวกับเรา</h1>
        <p v-scroll-animate="100" class="section-subtitle mt-4">เรื่องราวของ OneSiamSoft</p>
      </div>
    </section>

    <!-- Story -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6">
        <div v-scroll-animate class="flex flex-col lg:flex-row gap-12 items-center">
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

    <!-- Timeline -->
    <section class="section-padding border-y border-white/[0.06]">
      <div class="max-w-4xl mx-auto px-6">
        <h2 v-scroll-animate class="section-title text-center mb-16">เส้นทางของเรา</h2>
        <div class="relative">
          <!-- Line -->
          <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/30 via-sky-500/10 to-transparent" />

          <div v-for="(milestone, i) in milestones" :key="milestone.year" v-scroll-animate="i * 100"
            :class="['relative flex items-start gap-8 mb-12', i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse']">
            <div class="hidden md:block w-1/2" :class="i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'">
              <div class="text-2xl font-bold text-sky-400">{{ milestone.year }}</div>
              <h3 class="text-lg font-semibold text-white mt-1">{{ milestone.title }}</h3>
              <p class="text-gray-500 text-sm mt-2">{{ milestone.desc }}</p>
            </div>
            <!-- Dot -->
            <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-sky-400 border-4 border-[#0c1222] z-10" />
            <!-- Mobile content -->
            <div class="md:hidden pl-10">
              <div class="text-2xl font-bold text-sky-400">{{ milestone.year }}</div>
              <h3 class="text-lg font-semibold text-white mt-1">{{ milestone.title }}</h3>
              <p class="text-gray-500 text-sm mt-2">{{ milestone.desc }}</p>
            </div>
            <div class="hidden md:block w-1/2" />
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6">
        <h2 v-scroll-animate class="section-title text-center mb-16">คุณค่าหลักของเรา</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(v, i) in values" :key="v.title" v-scroll-animate="i * 120" class="glass-card p-8 text-center">
            <div class="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center mx-auto mb-5">
              <Icon :name="v.icon" class="w-7 h-7 text-sky-400" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">{{ v.title }}</h3>
            <p class="text-gray-500 leading-relaxed">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Culture -->
    <section class="section-padding border-y border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6">
        <div v-scroll-animate class="flex flex-col lg:flex-row gap-12 items-center">
          <div class="w-full lg:w-1/2">
            <h2 class="text-3xl font-bold text-white mb-6">วัฒนธรรมของเรา</h2>
            <div class="space-y-4 text-gray-400 leading-relaxed">
              <p>เราเชื่อว่าทีมที่ดีสร้างผลงานที่ดี ที่ OneSiamSoft เราส่งเสริมสภาพแวดล้อมที่ทุกคนสามารถเรียนรู้ เติบโต และสร้างสรรค์สิ่งใหม่ๆ ได้อย่างอิสระ</p>
              <p>เราทำงานแบบ Remote-First เน้นผลลัพธ์มากกว่ากระบวนการ และเปิดกว้างสำหรับไอเดียจากทุกคนในทีม</p>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
              <div v-for="culture in cultures" :key="culture" class="flex items-center gap-2 text-sm text-gray-400">
                <Icon name="lucide:check-circle" class="w-4 h-4 text-sky-400 shrink-0" />
                {{ culture }}
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <div class="glass-card overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop"
                alt="Culture" class="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(stat, i) in stats" :key="stat.label" v-scroll-animate="i * 100" class="text-center">
            <div class="text-4xl font-bold text-white">{{ stat.value }}</div>
            <div class="text-gray-500 mt-2">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Info -->
    <section class="pb-24 lg:pb-32">
      <div class="max-w-3xl mx-auto px-6">
        <div v-scroll-animate class="glass-card p-8 lg:p-10">
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
import { useScrollAnimation } from '~/composables/useScrollAnimation'

useSeoMeta({ title: 'เกี่ยวกับเรา - OneSiamSoft', description: 'เรื่องราวและคุณค่าหลักของ OneSiamSoft' })

const { vScrollAnimate } = useScrollAnimation()

const milestones = [
  { year: '2015', title: 'ก่อตั้งบริษัท', desc: 'เริ่มต้นจากทีมเล็กๆ ที่หลงใหลในเทคโนโลยี Cloud' },
  { year: '2017', title: 'ลูกค้า 100 ราย', desc: 'ขยายบริการครอบคลุม Web Hosting, Domain และ Email' },
  { year: '2019', title: 'เปิดตัว Cloud Server', desc: 'เปิดบริการ Cloud Server ด้วย Infrastructure ของตัวเอง' },
  { year: '2022', title: 'ลูกค้า 300+ ราย', desc: 'ขยายทีมงานและเปิดบริการ Managed Service' },
  { year: '2024', title: 'Enterprise Solutions', desc: 'เริ่มให้บริการ Custom Solutions สำหรับองค์กรขนาดใหญ่' },
  { year: '2026', title: '500+ ลูกค้า', desc: 'ก้าวสู่ผู้นำด้าน Cloud Infrastructure ในประเทศไทย' },
]

const values = [
  { icon: 'lucide:heart', title: 'ใส่ใจลูกค้า', desc: 'เราให้ความสำคัญกับทุกความต้องการของลูกค้า และพร้อมช่วยเหลือเสมอ' },
  { icon: 'lucide:target', title: 'มุ่งมั่นคุณภาพ', desc: 'ทุกบริการผ่านมาตรฐานสูงสุด เพื่อให้ลูกค้าได้รับสิ่งที่ดีที่สุด' },
  { icon: 'lucide:trending-up', title: 'พัฒนาไม่หยุด', desc: 'เราอัพเดตเทคโนโลยีอยู่เสมอ เพื่อให้ลูกค้าได้ใช้สิ่งที่ดีที่สุด' },
]

const cultures = [
  'Remote-First',
  'เน้นผลลัพธ์',
  'เรียนรู้ตลอดเวลา',
  'เปิดกว้างทุกไอเดีย',
  'Work-Life Balance',
  'ทีมเวิร์ค',
]

const stats = [
  { value: '10+', label: 'ปีประสบการณ์' },
  { value: '500+', label: 'ลูกค้าที่ไว้วางใจ' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'ซัพพอร์ต' },
]
</script>
