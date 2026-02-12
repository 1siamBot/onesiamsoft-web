<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-slate-950 pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-950 via-slate-950 to-slate-900"></div>
      <div class="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      <div class="section-container relative z-10 text-center">
        <div class="badge-primary mx-auto mb-6">
          <Icon name="lucide:headphones" class="w-3.5 h-3.5" />
          Contact Us
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4">ติดต่อเรา</h1>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">
          พร้อมให้คำปรึกษาและบริการ ติดต่อทีมผู้เชี่ยวชาญของเราได้ทันที
        </p>
      </div>
    </section>

    <!-- Contact Cards -->
    <section class="py-16 bg-gray-50">
      <div class="section-container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-32 relative z-10">
          <div v-for="info in contactCards" :key="info.title" class="card p-6 text-center">
            <div class="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" :class="info.bgClass">
              <Icon :name="info.icon" class="w-6 h-6" :class="info.iconClass" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">{{ info.title }}</h3>
            <p class="text-sm text-gray-500" v-html="info.detail"></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Form Section -->
    <section class="py-24">
      <div class="section-container">
        <div class="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <!-- Form -->
          <div class="lg:col-span-3">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">ส่งข้อความถึงเรา</h2>
            <p class="text-gray-500 mb-8">กรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง</p>

            <form @submit.prevent class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">ชื่อ-นามสกุล</label>
                  <input type="text" class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition" placeholder="ชื่อของคุณ">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">อีเมล</label>
                  <input type="email" class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition" placeholder="email@example.com">
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">เบอร์โทรศัพท์</label>
                  <input type="tel" class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition" placeholder="0xx-xxx-xxxx">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">บริการที่สนใจ</label>
                  <select class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition text-gray-500">
                    <option>เลือกบริการ</option>
                    <option>Cloud Server</option>
                    <option>Web Hosting</option>
                    <option>Domain</option>
                    <option>Dedicated Server</option>
                    <option>Custom Solution</option>
                    <option>อื่นๆ</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">ข้อความ</label>
                <textarea rows="5" class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition resize-none" placeholder="รายละเอียดที่ต้องการสอบถาม..."></textarea>
              </div>
              <button type="submit" class="btn-primary !py-3">
                <Icon name="lucide:send" class="w-4 h-4" />
                ส่งข้อความ
              </button>
            </form>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-2 space-y-6">
            <div class="card p-6">
              <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Icon name="lucide:clock" class="w-5 h-5 text-primary-500" />
                เวลาทำการ
              </h3>
              <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-500">จันทร์ - ศุกร์</span>
                  <span class="font-medium text-gray-900">09:00 - 18:00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-500">เสาร์ - อาทิตย์</span>
                  <span class="font-medium text-gray-900">หยุดทำการ</span>
                </div>
                <div class="pt-3 border-t border-gray-100">
                  <div class="flex items-center gap-2 text-accent-600">
                    <div class="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                    <span class="text-sm font-medium">Technical Support 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="card p-6">
              <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Icon name="lucide:zap" class="w-5 h-5 text-amber-500" />
                ต้องการความช่วยเหลือด่วน?
              </h3>
              <p class="text-sm text-gray-500 mb-4">สำหรับลูกค้าปัจจุบันที่มีปัญหาเร่งด่วน สามารถติดต่อ Technical Support ได้ตลอด 24 ชั่วโมง</p>
              <a href="mailto:support@onesiamsoft.com" class="btn-secondary !text-sm !py-2.5 w-full">
                <Icon name="lucide:mail" class="w-4 h-4" />
                support@onesiamsoft.com
              </a>
            </div>

            <div class="card p-6 bg-primary-50 border-primary-100">
              <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Icon name="lucide:gift" class="w-5 h-5 text-primary-500" />
                ปรึกษาฟรี
              </h3>
              <p class="text-sm text-gray-600">ไม่แน่ใจว่าบริการไหนเหมาะกับคุณ? ทีมผู้เชี่ยวชาญพร้อมให้คำปรึกษาฟรี ไม่มีค่าใช้จ่าย</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'ติดต่อเรา — OneSiamSoft',
  description: 'ติดต่อทีม OneSiamSoft สำหรับคำปรึกษาด้าน Cloud Server, Hosting และบริการด้านเทคโนโลยี พร้อมให้บริการ 24/7',
})

const contactCards = [
  { icon: 'lucide:mail', title: 'อีเมล', detail: 'info@onesiamsoft.com<br>support@onesiamsoft.com', bgClass: 'bg-blue-50', iconClass: 'text-blue-600' },
  { icon: 'lucide:message-circle', title: 'Live Chat', detail: 'พูดคุยกับทีมซัพพอร์ท<br>ให้บริการ 24/7', bgClass: 'bg-emerald-50', iconClass: 'text-emerald-600' },
  { icon: 'lucide:map-pin', title: 'ที่อยู่', detail: '28/99 ซอยหมู่บ้านบ่อฝ้าย<br>ต.หัวหิน อ.หัวหิน จ.ประจวบคีรีขันธ์ 77110', bgClass: 'bg-purple-50', iconClass: 'text-purple-600' },
]
</script>
