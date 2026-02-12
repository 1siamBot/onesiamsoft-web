<template>
  <div class="bg-black min-h-screen">
    <!-- Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-950 via-black to-gray-950"></div>
      <div class="absolute top-0 left-1/3 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div class="section-container relative z-10 text-center">
        <div class="badge-primary mx-auto mb-6">
          <Icon name="lucide:building-2" class="w-3.5 h-3.5" />
          About Us
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4">เกี่ยวกับ OneSiamSoft</h1>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">
          บริษัท วัน สยามซอฟท์ จำกัด — ผู้ให้บริการ Cloud Infrastructure และ IT Solutions ชั้นนำของประเทศไทย
        </p>
      </div>
    </section>

    <!-- Company Story -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-3xl"></div>
      <div class="section-container relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 class="text-3xl font-bold text-white mb-6">เรื่องราวของเรา</h2>
            <div class="space-y-4 text-gray-400 leading-relaxed">
              <p>
                OneSiamSoft (บริษัท วัน สยามซอฟท์ จำกัด) ก่อตั้งขึ้นด้วยวิสัยทัศน์ในการมอบบริการ Cloud Infrastructure 
                และ IT Solutions ระดับ Enterprise ให้กับธุรกิจไทยทุกขนาด ด้วยราคาที่เข้าถึงได้
              </p>
              <p>
                ด้วยประสบการณ์กว่า 10 ปีในอุตสาหกรรม เราเข้าใจถึงความท้าทายและความต้องการของธุรกิจดิจิทัลในประเทศไทย 
                ทีมงานของเราประกอบด้วยวิศวกรและผู้เชี่ยวชาญที่มีความรู้ความสามารถ พร้อมให้บริการ 24/7
              </p>
              <p>
                เรามุ่งมั่นที่จะเป็นพันธมิตรทางเทคโนโลยีที่ธุรกิจไว้วางใจ โดยนำเสนอโซลูชันที่เสถียร ปลอดภัย 
                และพร้อมรองรับการเติบโตของธุรกิจในอนาคต
              </p>
            </div>
          </div>
          <div class="rounded-2xl overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
              alt="ทีมงาน OneSiamSoft" class="w-full h-[400px] object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl"></div>
      <div class="section-container relative z-10">
        <div class="text-center mb-16">
          <h2 class="section-heading">คุณค่าที่เรายึดมั่น</h2>
          <p class="section-subheading">หลักการที่ขับเคลื่อนทุกการตัดสินใจและการบริการของเรา</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="v in values" :key="v.title" class="glass-card-hover p-8 text-center">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" :class="v.bgClass">
              <Icon :name="v.icon" class="w-7 h-7" :class="v.iconClass" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">{{ v.title }}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-white/[0.02]"></div>
      <div class="section-container relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="glass-card p-6 text-center">
            <div class="text-3xl font-extrabold text-primary-400 mb-1">{{ stat.value }}</div>
            <div class="text-sm text-gray-500">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Info -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-3xl"></div>
      <div class="section-container relative z-10">
        <div class="glass-card p-8 lg:p-12">
          <h2 class="text-2xl font-bold text-white mb-8">ข้อมูลบริษัท</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <Icon name="lucide:building-2" class="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div class="text-gray-500 text-sm">ชื่อบริษัท</div>
                  <div class="text-white">บริษัท วัน สยามซอฟท์ จำกัด (OneSiamSoft)</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <Icon name="lucide:map-pin" class="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div class="text-gray-500 text-sm">ที่อยู่</div>
                  <div class="text-white">28/99 ซอยหมู่บ้านบ่อฝ้าย ต.หัวหิน อ.หัวหิน จ.ประจวบคีรีขันธ์ 77110</div>
                </div>
              </div>
            </div>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <Icon name="lucide:mail" class="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div class="text-gray-500 text-sm">อีเมล</div>
                  <div class="text-white">support@onesiamsoft.com</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <Icon name="lucide:globe" class="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div class="text-gray-500 text-sm">เว็บไซต์</div>
                  <div class="text-white">www.onesiamsoft.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'เกี่ยวกับเรา — OneSiamSoft',
  description: 'บริษัท วัน สยามซอฟท์ จำกัด ผู้ให้บริการ Cloud Infrastructure และ IT Solutions ชั้นนำ ด้วยประสบการณ์กว่า 10 ปี',
})

const values = [
  { icon: 'lucide:shield-check', title: 'ความน่าเชื่อถือ', desc: 'เรามุ่งมั่นรักษามาตรฐานการบริการระดับสูงสุด ด้วย 99.9% Uptime SLA และระบบ Monitoring 24/7', bgClass: 'bg-emerald-500/20', iconClass: 'text-emerald-400' },
  { icon: 'lucide:users', title: 'ลูกค้าเป็นศูนย์กลาง', desc: 'ทุกโซลูชันออกแบบเพื่อตอบโจทย์ธุรกิจของลูกค้า ด้วยทีมซัพพอร์ตที่พร้อมดูแลตลอด 24 ชั่วโมง', bgClass: 'bg-blue-500/20', iconClass: 'text-blue-400' },
  { icon: 'lucide:rocket', title: 'นวัตกรรม', desc: 'เรานำเทคโนโลยีล่าสุดมาใช้อย่างต่อเนื่อง เพื่อให้ลูกค้าได้รับประสิทธิภาพสูงสุดเสมอ', bgClass: 'bg-blue-500/20', iconClass: 'text-purple-400' },
]

const stats = [
  { value: '10+ ปี', label: 'ประสบการณ์' },
  { value: '10,000+', label: 'ลูกค้า' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
]
</script>
