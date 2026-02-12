<template>
  <div>
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">ติดต่อเรา</h1>
        <p class="text-blue-100 text-lg">พร้อมให้บริการและคำปรึกษา ติดต่อทีมผู้เชี่ยวชาญของเราได้ทันที</p>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">ส่งข้อความถึงเรา</h2>
            <form @submit.prevent class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อ</label>
                  <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none" placeholder="ชื่อของคุณ">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">อีเมล</label>
                  <input type="email" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none" placeholder="email@example.com">
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">เรื่อง</label>
                <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none" placeholder="หัวข้อที่ต้องการสอบถาม">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">ข้อความ</label>
                <textarea rows="5" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none" placeholder="รายละเอียดที่ต้องการสอบถาม"></textarea>
              </div>
              <button type="submit" class="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                ส่งข้อความ
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">ข้อมูลติดต่อ</h2>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-xl">📧</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">อีเมล</h3>
                  <p class="text-gray-600">info@onesiamsoft.com</p>
                  <p class="text-gray-600">support@onesiamsoft.com</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-xl">💬</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Live Chat</h3>
                  <p class="text-gray-600">พูดคุยกับทีมซัพพอร์ทของเราได้ทันที</p>
                  <p class="text-gray-600">ให้บริการ 24/7</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-xl">📍</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">ที่อยู่</h3>
                  <p class="text-gray-600">กรุงเทพมหานคร, ประเทศไทย</p>
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
  title: 'ติดต่อเรา - OneSiamSoft',
  description: 'ติดต่อทีม OneSiamSoft สำหรับคำปรึกษาด้าน Cloud Server, Hosting และบริการด้านเทคโนโลยี',
})
</script>
