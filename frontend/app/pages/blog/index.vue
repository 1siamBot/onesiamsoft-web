<template>
  <div class="bg-black min-h-screen">
    <!-- Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-950 via-black to-gray-950"></div>
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      <div class="section-container relative z-10 text-center">
        <div class="badge-primary mx-auto mb-6">
          <Icon name="lucide:book-open" class="w-3.5 h-3.5" />
          Knowledge Base
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4">บทความและความรู้</h1>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">
          อัพเดทเทรนด์เทคโนโลยี เทคนิคการใช้งาน Cloud และแนวทางพัฒนาธุรกิจออนไลน์
        </p>
      </div>
    </section>

    <!-- Featured Post -->
    <section class="py-16">
      <div class="section-container">
        <div class="glass-card overflow-hidden">
          <div class="grid lg:grid-cols-2">
            <div class="h-64 lg:h-auto overflow-hidden">
              <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80" 
                alt="Cloud Server" class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="p-8 lg:p-12 flex flex-col justify-center">
              <div class="flex items-center gap-2 mb-4">
                <span class="badge-primary">Featured</span>
                <span class="text-gray-500 text-xs">12 ก.พ. 2026</span>
              </div>
              <h2 class="text-2xl font-bold text-white mb-3">Cloud Server คืออะไร? ทำไมธุรกิจคุณถึงต้องใช้</h2>
              <p class="text-gray-400 leading-relaxed mb-6">เรียนรู้พื้นฐานของ Cloud Server และข้อดีที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างมั่นคงบนโลกดิจิทัล</p>
              <div>
                <span class="text-primary-400 font-semibold text-sm flex items-center gap-1 cursor-pointer hover:gap-2 transition-all">
                  อ่านบทความ
                  <Icon name="lucide:arrow-right" class="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="pb-24">
      <div class="section-container">
        <!-- Category Filters -->
        <div class="flex flex-wrap items-center gap-2 mb-10">
          <button v-for="cat in categories" :key="cat"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
            :class="selectedCategory === cat
              ? 'bg-primary-600 text-white shadow-sm shadow-primary-500/25'
              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'"
            @click="selectedCategory = cat">
            {{ cat }}
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article v-for="post in filteredPosts" :key="post.slug"
            class="glass-card-hover overflow-hidden group cursor-pointer">
            <div class="h-48 relative overflow-hidden">
              <img :src="post.image" :alt="post.title" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="badge text-xs" :class="post.categoryClass">{{ post.category }}</span>
                <span class="text-gray-500 text-xs">{{ post.date }}</span>
                <span class="text-gray-600 text-xs">·</span>
                <span class="text-gray-500 text-xs">{{ post.readTime }}</span>
              </div>
              <h2 class="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {{ post.title }}
              </h2>
              <p class="text-sm text-gray-400 leading-relaxed">{{ post.excerpt }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'บทความ — OneSiamSoft Knowledge Base',
  description: 'อ่านบทความเกี่ยวกับ Cloud Server, Web Hosting, Security, SEO และเทคโนโลยีจาก OneSiamSoft',
})

const categories = ['ทั้งหมด', 'Cloud', 'Security', 'Hosting', 'SEO', 'WordPress', 'Tips']
const selectedCategory = ref('ทั้งหมด')

const posts = [
  { slug: 'cloud-server-101', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80', category: 'Cloud', categoryClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/20', date: '12 ก.พ. 2026', readTime: '5 นาที', title: 'Cloud Server คืออะไร? ทำไมธุรกิจคุณถึงต้องใช้', excerpt: 'เรียนรู้พื้นฐานของ Cloud Server และข้อดีที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างมั่นคง' },
  { slug: 'ssl-importance', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80', category: 'Security', categoryClass: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20', date: '10 ก.พ. 2026', readTime: '4 นาที', title: 'ทำไม SSL ถึงสำคัญสำหรับเว็บไซต์ทุกเว็บ', excerpt: 'SSL Certificate ไม่ใช่แค่เรื่องความปลอดภัย แต่ยังส่งผลต่อ SEO และความน่าเชื่อถือ' },
  { slug: 'choose-hosting', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', category: 'Hosting', categoryClass: 'bg-purple-500/10 text-purple-400 border border-purple-500/20', date: '8 ก.พ. 2026', readTime: '6 นาที', title: 'วิธีเลือก Web Hosting ที่เหมาะกับธุรกิจของคุณ', excerpt: 'แนะนำปัจจัยสำคัญในการเลือก hosting ตั้งแต่ความเร็ว ความเสถียร ไปจนถึงบริการหลังการขาย' },
  { slug: 'seo-basics', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80', category: 'SEO', categoryClass: 'bg-amber-500/10 text-amber-400 border border-amber-500/20', date: '5 ก.พ. 2026', readTime: '7 นาที', title: 'SEO พื้นฐาน: ทำเว็บไซต์ให้ติดหน้าแรก Google', excerpt: 'เทคนิค SEO เบื้องต้นที่ทุกเว็บไซต์ควรทำ เพื่อเพิ่มการมองเห็นบน Search Engine' },
  { slug: 'wordpress-optimization', image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80', category: 'WordPress', categoryClass: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20', date: '3 ก.พ. 2026', readTime: '8 นาที', title: 'ปรับแต่ง WordPress ให้เร็วขึ้น 10 เท่า', excerpt: 'เทคนิค optimize WordPress ตั้งแต่ caching, image optimization ไปจนถึงการเลือก hosting' },
  { slug: 'backup-strategy', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80', category: 'Tips', categoryClass: 'bg-rose-500/10 text-rose-400 border border-rose-500/20', date: '1 ก.พ. 2026', readTime: '5 นาที', title: 'กลยุทธ์ Backup ที่ทุกธุรกิจต้องมี', excerpt: 'การ backup ข้อมูลไม่ใช่ทางเลือก แต่เป็นสิ่งจำเป็น เรียนรู้วิธีวาง backup strategy ที่มีประสิทธิภาพ' },
]

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'ทั้งหมด') return posts
  return posts.filter(p => p.category === selectedCategory.value)
})
</script>
