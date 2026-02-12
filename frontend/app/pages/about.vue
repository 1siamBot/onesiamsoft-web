<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-sm text-sky-400 font-medium tracking-wide uppercase mb-4">About Us</p>
          <h1 class="heading-xl mb-6">เกี่ยวกับ<span class="accent">เรา</span></h1>
          <p class="text-lg text-gray-400 leading-relaxed">บริษัท วัน สยามซอฟท์ จำกัด ผู้ให้บริการโครงสร้างพื้นฐานคลาวด์และโซลูชันซอฟต์แวร์สำหรับธุรกิจไทย</p>
        </div>
      </div>
    </section>

    <!-- Story -->
    <section class="py-20 border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 class="heading-md mb-6">เรื่องราวของเรา</h2>
            <div class="space-y-4 text-gray-400 leading-relaxed">
              <p>OneSiamSoft ก่อตั้งขึ้นด้วยวิสัยทัศน์ที่จะทำให้เทคโนโลยีคลาวด์เข้าถึงได้สำหรับทุกธุรกิจในประเทศไทย ไม่ว่าจะเป็นสตาร์ทอัพหรือองค์กรขนาดใหญ่</p>
              <p>ด้วยประสบการณ์กว่า 10 ปีในอุตสาหกรรม IT เราเข้าใจความต้องการของธุรกิจไทยอย่างลึกซึ้ง และมุ่งมั่นพัฒนาบริการที่ตอบโจทย์ทุกความต้องการ</p>
              <p>ทีมงานของเราประกอบด้วยผู้เชี่ยวชาญที่มีความรู้ความสามารถในด้าน Cloud Computing, DevOps, Cybersecurity และ Software Development</p>
            </div>
          </div>
          <div class="glass-card p-8">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team" class="rounded-xl w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 class="heading-lg mb-16 text-center">ค่านิยมของเรา</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="v in values" :key="v.title" class="glass-card p-8">
            <div class="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center mb-6">
              <Icon :name="v.icon" class="w-6 h-6 text-sky-400" />
            </div>
            <h3 class="text-lg font-semibold text-white mb-3">{{ v.title }}</h3>
            <p class="text-sm text-gray-400 leading-relaxed">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'เกี่ยวกับเรา — OneSiamSoft',
  description: 'บริษัท วัน สยามซอฟท์ จำกัด ผู้ให้บริการ Cloud Infrastructure สำหรับธุรกิจไทย',
})

const values = [
  { icon: 'lucide:shield-check', title: 'ความน่าเชื่อถือ', desc: 'ระบบ Uptime 99.9% พร้อมทีมดูแลตลอด 24 ชั่วโมง เพราะธุรกิจของคุณหยุดไม่ได้' },
  { icon: 'lucide:zap', title: 'ประสิทธิภาพสูง', desc: 'ใช้เทคโนโลยีล่าสุด SSD NVMe และ Infrastructure ระดับ Enterprise' },
  { icon: 'lucide:heart-handshake', title: 'ใส่ใจลูกค้า', desc: 'ทีมซัพพอร์ตคนไทย พร้อมช่วยเหลือทุกปัญหา ตอบเร็ว แก้ไขทันที' },
  { icon: 'lucide:lock', title: 'ความปลอดภัย', desc: 'ระบบป้องกัน DDoS, Firewall ระดับสูง และ Backup อัตโนมัติทุกวัน' },
  { icon: 'lucide:trending-up', title: 'รองรับการเติบโต', desc: 'ปรับขนาดทรัพยากรได้ตามความต้องการ Auto-scaling ไม่มีสะดุด' },
  { icon: 'lucide:lightbulb', title: 'นวัตกรรม', desc: 'ติดตามเทรนด์เทคโนโลยีใหม่ๆ อยู่เสมอ เพื่อนำเสนอสิ่งที่ดีที่สุดให้ลูกค้า' },
]
</script>
