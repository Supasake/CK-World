<template>
  <section class="bg-gray-900 py-20">
    <div class="container px-4">
      <div class="flex flex-col lg:flex-row gap-12 items-center">
        <!-- Left: Masonry Gallery - 15 รูป 5 columns (3 แถว) -->
        <div class="order-2 lg:order-1 w-full lg:w-auto items-center justify-center">
          <div class="masonry-container mx-auto">
            <div
              v-for="(image, index) in images"
              :key="index"
              class="masonry-item cursor-pointer relative overflow-hidden -mt-2"
              :style="{ height: image.height + 'px' }"
              @click="openLightbox(index)"
            >
              <NuxtImg
                :src="getImageSrc(image)"
                :alt="image.alt"
                :width="image.width"
                :height="image.height"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                placeholder
              />
              <!-- <div
                                class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                <svg class="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                </svg>
                            </div> -->
            </div>
          </div>
        </div>

        <!-- Right: Content - ตรงกลาง -->
        <div
          class="order-1 lg:order-2 w-full lg:w-auto lg:flex-1 text-center lg:text-left flex items-center"
        >
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              ส่งมอบไม่ใช่แค่สินค้า แต่คือความไว้วางใจ
            </h2>
            <p class="text-gray-400 max-w-2xl mx-auto lg:mx-0">
              ทุกเส้นทางที่เราวิ่ง คือคำมั่นสัญญาที่เรารักษา
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Transition name="fade">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
        @click="closeLightbox"
      >
        <button
          class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          @click="closeLightbox"
        >
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <button
          class="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
          @click.stop="prevImage"
        >
          <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <NuxtImg
          :src="currentImageSrc"
          :alt="currentImageAlt"
          class="max-w-[90vw] max-h-[90vh] object-contain"
          @click.stop
          placeholder
        />

        <button
          class="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
          @click.stop="nextImage"
        >
          <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div
          class="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white bg-black/60 px-6 py-3 rounded-full text-lg"
        >
          {{ currentImageIndex + 1 }} / {{ images.length }}
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const lightboxOpen = ref(false)
const currentImageIndex = ref(0)
const fallbackImage = '/img/unknow-section.jpg'

// 15 รูป - ขนาดตายตัว แนวตั้งและแนวนอนสลับกัน (5 columns x 3 แถว)
const images = ref([
  { src: '/img/Masonry/23.jpg', alt: 'รถขนส่งสินค้า 1', width: 150, height: 200 },
  { src: '/img/Masonry/24.jpg', alt: 'คลังสินค้า', width: 150, height: 110 },
  { src: '/img/Masonry/25.jpg', alt: 'รถขนส่งสินค้า 2', width: 150, height: 170 },
  { src: '/img/Masonry/26.jpg', alt: 'การจัดการสินค้า', width: 150, height: 110 },
  // { src: '/img/Masonry/27.jpg', alt: 'ขนส่งทางอากาศ', width: 150, height: 190 },
  { src: '/img/Masonry/28.jpg', alt: 'รถบรรทุก', width: 150, height: 110 },
  { src: '/img/Masonry/29.jpg', alt: 'ท่าเรือ', width: 150, height: 220 },
  { src: '/img/Masonry/30.jpg', alt: 'คลังสินค้า 2', width: 150, height: 110 },
  { src: '/img/Masonry/31.jpg', alt: 'โลจิสติกส์', width: 150, height: 175 },
  { src: '/img/Masonry/34.jpg', alt: 'ขนส่งสินค้า', width: 150, height: 110 },
  { src: '/img/Masonry/35.jpg', alt: 'การขนส่ง', width: 150, height: 200 },
  { src: '/img/Masonry/36.jpg', alt: 'รถบรรทุกใหญ่', width: 150, height: 110 },
  { src: '/img/Masonry/37.jpg', alt: 'ท่าอากาศยาน', width: 150, height: 180 },
  { src: '/img/Masonry/38.jpg', alt: 'โกดังสินค้า', width: 150, height: 110 },
  // { src: '/img/Masonry/23.jpg', alt: 'ระบบโลจิสติกส์', width: 150, height: 195 },
])

// Computed: รูปปัจจุบันใน Lightbox
const currentImageSrc = computed(() => {
  const image = images.value[currentImageIndex.value]
  return image?.src || fallbackImage
})

const currentImageAlt = computed(() => {
  const image = images.value[currentImageIndex.value]
  return image?.alt || 'Image not found'
})

// Function: ดึง src ของรูปพร้อม fallback
const getImageSrc = (image) => {
  if (!image || !image.src) {
    return fallbackImage
  }
  return image.src
}

const openLightbox = (index) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length
}

const prevImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + images.value.length) % images.value.length
}

const handleKeydown = (e) => {
  if (!lightboxOpen.value) return

  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'Escape') closeLightbox()
}

if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleKeydown)
}
</script>

<style scoped>
.masonry-container {
  column-count: 5;
  column-gap: 0;
  width: 750px;
  /* 150px × 5 columns */
}

@media (max-width: 1024px) {
  .masonry-container {
    column-count: 3;
    width: 450px;
    /* 150px × 3 columns */
  }
}

@media (max-width: 640px) {
  .masonry-container {
    column-count: 2;
    width: 300px;
    /* 150px × 2 columns */
  }
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 0;
  display: inline-block;
  width: 150px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
