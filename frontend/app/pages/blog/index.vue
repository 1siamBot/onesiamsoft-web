<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 relative overflow-hidden">
      <div class="gradient-orb w-[500px] h-[500px] bg-sky-500 -top-40 -left-40"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h1 class="text-4xl lg:text-6xl font-bold text-white tracking-tight">บล็อก</h1>
        <p class="section-subtitle mt-4">ความรู้และเทคนิคเกี่ยวกับ Cloud, Hosting และ IT</p>
      </div>
    </section>

    <!-- Articles -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article v-for="post in posts" :key="post.title" class="glass-card-hover overflow-hidden group">
            <div class="overflow-hidden">
              <img :src="`https://images.unsplash.com/${post.image}?w=600&h=340&fit=crop`"
                :alt="post.title" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div class="p-6">
              <span class="inline-block text-xs font-medium text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full mb-3">{{ post.category }}</span>
              <h3 class="text-white font-semibold text-lg mb-2 group-hover:text-sky-400 transition-colors">{{ post.title }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed mb-4">{{ post.excerpt }}</p>
              <span class="text-xs text-gray-600">{{ post.date }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({ title: 'บล็อก - OneSiamSoft', description: 'ความรู้เกี่ยวกับ Cloud, Hosting และ IT' })

const posts = [
  { image: 'photo-1451187580459-43490279c0fa', category: 'Cloud', title: 'Cloud Server คืออะไร? ทำไมธุรกิจยุคใหม่ต้องมี', excerpt: 'ทำความรู้จัก Cloud Server และเหตุผลที่ธุรกิจยุคดิจิทัลควรใช้งาน', date: '10 ก.พ. 2026' },
  { image: 'photo-1555066931-4365d14bab8c', category: 'Security', title: 'วิธีป้องกันเว็บไซต์จาก DDoS Attack', excerpt: 'เรียนรู้วิธีป้องกันเว็บไซต์จากการโจมตี DDoS อย่างมีประสิทธิภาพ', date: '5 ก.พ. 2026' },
  { image: 'photo-1504639725590-34d0984388bd', category: 'Hosting', title: 'เลือก Web Hosting อย่างไรให้เหมาะกับเว็บไซต์', excerpt: 'คู่มือเลือก Web Hosting ที่เหมาะสมกับความต้องการของคุณ', date: '1 ก.พ. 2026' },
  { image: 'photo-1558494949-ef010cbdcc31', category: 'Server', title: 'Dedicated vs Cloud Server: เลือกอะไรดี?', excerpt: 'เปรียบเทียบข้อดีข้อเสียของ Dedicated Server กับ Cloud Server', date: '28 ม.ค. 2026' },
  { image: 'photo-1563986768609-322da13575f2', category: 'Domain', title: 'วิธีเลือกชื่อโดเมนให้ปัง', excerpt: 'เทคนิคการเลือกชื่อโดเมนที่ดีและจดจำง่ายสำหรับธุรกิจ', date: '20 ม.ค. 2026' },
  { image: 'photo-1507238691740-187a5b1d37b8', category: 'WordPress', title: 'เร่งความเร็ว WordPress ให้โหลดไวสุดๆ', excerpt: 'รวมเทคนิคปรับแต่ง WordPress ให้โหลดเร็ว ติดอันดับ Google', date: '15 ม.ค. 2026' },
]
</script>
