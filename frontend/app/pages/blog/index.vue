<template>
  <div>
    <!-- Hero with Image -->
    <section class="relative pt-16 overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=600&fit=crop&q=80"
          alt="Blog" class="img-cover" />
        <div class="absolute inset-0 bg-gradient-to-b from-[#0c1222]/80 via-[#0c1222]/70 to-[#0c1222]"></div>
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 class="text-4xl lg:text-6xl font-bold text-white tracking-tight">บล็อก</h1>
        <p class="section-subtitle mt-4">ความรู้และเทคนิคเกี่ยวกับ Cloud, Hosting และ IT</p>
      </div>
    </section>

    <!-- Featured Post -->
    <section class="pb-12">
      <div class="max-w-7xl mx-auto px-6">
        <NuxtLink :to="`/blog/${posts[0].slug}`" class="glass-card-hover overflow-hidden block">
          <div class="flex flex-col lg:flex-row">
            <div class="w-full lg:w-1/2 h-64 lg:h-auto overflow-hidden">
              <img :src="`https://images.unsplash.com/${posts[0].image}?w=800&h=500&fit=crop&q=80`"
                :alt="posts[0].title" class="img-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="w-full lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
              <span class="inline-block text-xs font-medium text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full mb-4 w-fit">
                {{ posts[0].category }}
              </span>
              <h2 class="text-2xl lg:text-3xl font-bold text-white mb-3">{{ posts[0].title }}</h2>
              <p class="text-gray-400 leading-relaxed mb-4">{{ posts[0].excerpt }}</p>
              <div class="flex items-center gap-4 text-sm text-gray-500">
                <span>{{ posts[0].date }}</span>
                <span>•</span>
                <span>{{ posts[0].readTime }} นาทีอ่าน</span>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink v-for="post in posts.slice(1)" :key="post.slug" :to="`/blog/${post.slug}`" class="glass-card-hover overflow-hidden group block">
            <div class="h-48 overflow-hidden">
              <img :src="`https://images.unsplash.com/${post.image}?w=600&h=340&fit=crop&q=80`"
                :alt="post.title" class="img-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div class="p-6">
              <span class="inline-block text-xs font-medium text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full mb-3">{{ post.category }}</span>
              <h3 class="text-white font-semibold text-lg mb-2 group-hover:text-sky-400 transition-colors">{{ post.title }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed mb-4">{{ post.excerpt }}</p>
              <div class="flex items-center gap-4 text-xs text-gray-600">
                <span>{{ post.date }}</span>
                <span>•</span>
                <span>{{ post.readTime }} นาทีอ่าน</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({ title: 'บล็อก - OneSiamSoft', description: 'ความรู้เกี่ยวกับ Cloud, Hosting และ IT' })

const posts = [
  { slug: 'what-is-cloud-server', image: 'photo-1451187580459-43490279c0fa', category: 'Cloud', title: 'Cloud Server คืออะไร? ทำไมธุรกิจยุคใหม่ต้องมี', excerpt: 'ทำความรู้จัก Cloud Server และเหตุผลที่ธุรกิจยุคดิจิทัลควรใช้งาน เพื่อความเสถียร ปลอดภัย และประหยัดค่าใช้จ่ายในระยะยาว', date: '10 ก.พ. 2026', readTime: 5 },
  { slug: 'prevent-ddos-attack', image: 'photo-1555066931-4365d14bab8c', category: 'Security', title: 'วิธีป้องกันเว็บไซต์จาก DDoS Attack', excerpt: 'เรียนรู้วิธีป้องกันเว็บไซต์จากการโจมตี DDoS อย่างมีประสิทธิภาพ', date: '5 ก.พ. 2026', readTime: 7 },
  { slug: 'choose-web-hosting', image: 'photo-1504639725590-34d0984388bd', category: 'Hosting', title: 'เลือก Web Hosting อย่างไรให้เหมาะกับเว็บไซต์', excerpt: 'คู่มือเลือก Web Hosting ที่เหมาะสมกับความต้องการของคุณ', date: '1 ก.พ. 2026', readTime: 4 },
  { slug: 'dedicated-vs-cloud', image: 'photo-1558494949-ef010cbdcc31', category: 'Server', title: 'Dedicated vs Cloud Server: เลือกอะไรดี?', excerpt: 'เปรียบเทียบข้อดีข้อเสียของ Dedicated Server กับ Cloud Server', date: '28 ม.ค. 2026', readTime: 6 },
  { slug: 'choose-domain-name', image: 'photo-1563986768609-322da13575f2', category: 'Domain', title: 'วิธีเลือกชื่อโดเมนให้ปัง', excerpt: 'เทคนิคการเลือกชื่อโดเมนที่ดีและจดจำง่ายสำหรับธุรกิจ', date: '20 ม.ค. 2026', readTime: 3 },
  { slug: 'speed-up-wordpress', image: 'photo-1507238691740-187a5b1d37b8', category: 'WordPress', title: 'เร่งความเร็ว WordPress ให้โหลดไวสุดๆ', excerpt: 'รวมเทคนิคปรับแต่ง WordPress ให้โหลดเร็ว ติดอันดับ Google', date: '15 ม.ค. 2026', readTime: 8 },
  { slug: 'why-business-email', image: 'photo-1596526131083-e8c633c948d2', category: 'Email', title: 'ทำไมธุรกิจต้องใช้ Business Email', excerpt: 'อีเมลธุรกิจ @yourdomain.com สร้างความน่าเชื่อถือได้อย่างไร', date: '10 ม.ค. 2026', readTime: 4 },
]
</script>
