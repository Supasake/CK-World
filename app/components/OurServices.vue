<template>
  <section id="services" class="services scroll-m-12 bg-base-200 mx-auto">
    <div class="section-header">
      <span class="section-tag">บริการของเรา</span>
      <h2>โซลูชั่นครบวงจร สำหรับทุกความต้องการ</h2>
      <p>เราให้บริการขนส่งที่หลากหลาย ตอบโจทย์ทุกธุรกิจและทุกไลฟ์สไตล์</p>
    </div>
    <div
      class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mx-auto max-w-full px-4 md:px-20 text-accent-content"
    >
      <div
        v-for="(item, index) in services"
        :key="index"
        class="service__item group relative overflow-hidden rounded-2xl h-64 sm:h-72 lg:h-80 cursor-pointer"
      >
        <!-- Background image (parallax hover) -->
        <div
          class="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          :style="{ backgroundImage: `url(${item.url})` }"
        />

        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-accent/50 transition-colors duration-700 group-hover:bg-accent/80"
        />

        <!-- Content -->
        <div
          class="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4 transition-transform duration-500 group-hover:-translate-y-2"
        >
          <!-- Icon with circle -->
          <div
            class="mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-white/15 backdrop-blur ring-1 ring-white/30"
          >
            <Icon :name="item.icon" size="28" />
          </div>

          <!-- Title -->
          <h3 class="text-base sm:text-lg font-semibold mb-2">
            {{ item.title }}
          </h3>

          <!-- Description (longer) -->
          <p class="text-xs sm:text-sm leading-relaxed opacity-90 max-w-xs line-clamp-5">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>

<script setup>
const services = [
  {
    url: 'https://cdn.pixabay.com/photo/2017/12/15/22/25/hamburg-3021820_960_720.jpg',
    title: 'ขนส่งระหว่างประเทศ',
    icon: 'carbon:earth-filled',
    desc: 'บริการขนส่งสินค้าไปทั่วโลก ด้วยระบบโลจิสติกส์ที่ทันสมัย และเครือข่ายพันธมิตรระดับสากล พร้อมทีมงานมืออาชีพดูแลทุกขั้นตอน',
  },
  {
    url: '/img/Services/Management.jpg',
    title: 'บริการจัดการสินค้า',
    icon: 'carbon:ibm-devops-control',
    desc: 'จัดการสินค้าทุกประเภทอย่างระมัดระวัง บรรจุภัณฑ์มาตรฐาน พร้อมระบบติดตามสินค้าแบบเรียลไทม์ เพื่อความปลอดภัยสูงสุด',
  },
  {
    url: '/img/Services/Delivery.jpg',
    title: 'จัดส่งตรงเวลา',
    icon: 'carbon:network-time-protocol',
    desc: 'มุ่งมั่นส่งมอบสินค้าตรงเวลาทุกครั้ง ด้วยระบบวางแผนเส้นทางที่มีประสิทธิภาพ และการประสานงานที่เป็นเลิศ',
  },
  {
    url: '/img/Services/E-commerce.jpg',
    title: 'E-commerce',
    icon: 'carbon:shopping-cart',
    desc: 'บริการจัดส่งสำหรับร้านค้าออนไลน์ ทั้งรับสินค้าที่ร้าน (Drop off) และรับถึงที่ (Pick up)',
  },
  {
    url: '/img/Services/Consulting.jpg',
    title: 'ให้คำปรึกษาด้านโลจิสติกส์',
    icon: 'carbon:chart-histogram',
    desc: 'บริการให้คำปรึกษาและวางแผนระบบโลจิสติกส์ที่เหมาะสมกับธุรกิจ เพื่อลดต้นทุนและเพิ่มประสิทธิภาพในการขนส่ง',
  },
  {
    url: '/img/Services/Fast.jpg',
    title: 'ขนส่งด่วนพิเศษ',
    icon: 'carbon:flash-filled',
    desc: 'บริการจัดส่งด่วนสำหรับสินค้าที่ต้องการความรวดเร็ว รับประกันส่งถึงมือภายในเวลาที่กำหนด พร้อมระบบติดตามตลอด 24 ชั่วโมง',
  },
  {
    url: '/img/Services/CustomsDepartment.jpg',
    title: 'บริการผ่านพิธีการศุลกากร',
    icon: 'carbon:ai-agent-invocation',
    desc: 'ดำเนินการด้านเอกสารและพิธีการศุลกากรอย่างครบวงจร ช่วยให้สินค้าผ่านด่านได้รวดเร็วและถูกต้องตามกฎหมาย',
  },
  {
    url: '/img/Services/Security.jpg',
    title: 'ประกันภัยและความปลอดภัย',
    icon: 'carbon:ibm-cloud-key-protect',
    desc: 'คุ้มครองทุกการขนส่งด้วยประกันภัยสินค้า พร้อมมาตรฐานความปลอดภัยระดับสากล เพื่อความมั่นใจในทุกการส่งมอบ',
  },
]

onMounted(async () => {
  const ScrollReveal = (await import('scrollreveal')).default

  ScrollReveal().reveal('.service__item', {
    origin: 'bottom',
    distance: '40px',
    duration: 1200,
    easing: 'ease-out',
    interval: 250,
    opacity: 0,
    scale: 0.95,
    reset: false,
  })
})
</script>

<style scoped>
.services {
  padding: 6rem 5%;
  /* background: white; */
}

.section-header {
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
}

.section-tag {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: rgba(255, 107, 53, 0.1);
  color: var(--primary);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.section-header h2 {
  font-family: 'Outfit', sans-serif;
  font-size: 3rem;
  color: var(--dark);
  margin-bottom: 1rem;
  font-weight: 800;
}

.section-header p {
  font-size: 1.2rem;
  color: #718096;
  line-height: 1.6;
}

/* .services-grid {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
} */

/* .service-card {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    padding: 2.5rem;
    border-radius: 20px;
    border: 1px solid #e2e8f0;
    transition: all 0.4s;
    position: relative;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 107, 53, 0.05) 0%, transparent 70%);
    transition: all 0.6s;
    transform: scale(0);
}

.service-card:hover::before {
    transform: scale(1);
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
    border-color: var(--primary);
}

.service-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;
}

.service-card h3 {
    font-family: 'Outfit', sans-serif;
    font-size: 1.5rem;
    color: var(--dark);
    margin-bottom: 1rem;
    font-weight: 700;
    position: relative;
    z-index: 1;
}

.service-card p {
    color: #718096;
    line-height: 1.7;
    position: relative;
    z-index: 1;
} */
</style>
