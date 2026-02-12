<template>
  <div class="relative">
    <section
      :ref="heroRef"
      class="relative min-h-200 bg-linear-to-br py-20 from-gray-900 via-blue-900 to-gray-900 overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        :style="{
          backgroundImage: `url('/img/hero-section.jpg')`,
          backgroundPositionY: bgOffset + 'px',
          backgroundAttachment: 'fixed',
        }"
      >
        <div class="absolute inset-0 bg-linear-to-r from-black/80 via-black/70 to-transparent" />
      </div>

      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          class="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"
        />
        <div
          class="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float"
        />
      </div>

      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 min-h-200 flex items-center">
        <div class="w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20">
          <div class="relative space-y-8 animate-fade-left">
            <div
              class="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-3xl border border-cyan-500/30 rounded-full px-5 py-2.5"
            >
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span class="text-primary font-extrabold">CK WORLD</span>
              <span class="text-sm font-medium text-cyan-300 tracking-wider">
                #1 Logistics Provider</span
              >
            </div>

            <div class="space-y-4">
              <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span class="text-white">ผู้นำด้าน</span>
                <br />
                <span
                  class="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent bg-size-[200%_100%] animate-gradient"
                >
                  การขนส่ง
                </span>
                <br />
                <span class="text-white/90">ระหว่างประเทศ</span>
              </h1>
            </div>

            <p class="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
              บริการขนส่งครบวงจร มาตรฐานระดับสากล พร้อมทีมงานมืออาชีพ ดูแลทุกขั้นตอน
              ด้วยประสบการณ์กว่า 10 ปี
            </p>
          </div>
        </div>
      </div>
    </section>
    <MasonryBlock />
  </div>
</template>

<script setup>
const heroRef = ref(null)
const displayYears = ref(0)
const displayShips = ref(0)
const bgOffset = ref(0)
const mouseRotate = ref(0)

/* ===== Animated Counters ===== */
const animateCounters = () => {
  const yearsTarget = 40
  const shipsTarget = 50
  const duration = 2500
  const startTime = performance.now()

  const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

  const update = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOutExpo(progress)

    displayYears.value = Math.floor(eased * yearsTarget)
    displayShips.value = Math.floor(eased * shipsTarget)

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  requestAnimationFrame(update)
}

/* ===== Parallax Effect ===== */
const handleScroll = () => {
  if (window.innerWidth > 768) {
    bgOffset.value = window.scrollY * 0.3
  }
}

onMounted(() => {
  animateCounters()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }

  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }
}

@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-10px) rotate(2deg);
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes fade-right {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-left {
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
}

.animate-gradient {
  animation: gradient 8s ease infinite;
  background-size: 200% 200%;
}

.animate-fade-right {
  opacity: 0;
  animation: fade-right 1s ease-out forwards;
}

.animate-fade-left {
  opacity: 0;
  animation: fade-left 1s ease-out forwards;
}

.animate-fade-up {
  opacity: 0;
  animation: fade-up 0.8s ease-out forwards;
}

/* Responsive */
@media (max-width: 768px) {
  .grid {
    margin-top: -60px !important;
  }

  .group {
    transform: translateY(0) !important;
  }
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #111827;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #06b6d4, #2563eb);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #0891b2, #1d4ed8);
}
</style>
