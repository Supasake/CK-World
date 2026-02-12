<template>
  <section
    id="why_us"
    ref="sectionRef"
    class="scroll-m-12 relative overflow-hidden py-24 px-6 md:px-12 bg-base-100"
  >
    <!-- <div class="absolute top-0 -left-[20%] w-[50%] h-full bg-base-200 blur-3xl -skew-x-12" /> -->

    <div
      class="absolute h-full inset-0 bg-cover bg-center bg-no-repeat"
      :style="{
        backgroundImage: `url('/img/why-us-section.jpg')`,
        backgroundAttachment: 'fixed',
      }"
    >
      <div
        class="absolute inset-0 bg-linear-to-br from-slate-700/80 via-slate-500/70 to-transparent"
      />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <!-- LEFT CONTENT -->
      <div>
        <h2 class="font-['Outfit'] text-4xl md:text-5xl font-extrabold mb-8 text-teal-300">
          ทำไมต้องเลือกเรา
        </h2>

        <div class="flex flex-col gap-6">
          <!-- ITEM -->
          <div class="flex gap-6 items-start">
            <div
              class="w-12 h-12 bg-teal-300 rounded-xl flex items-center justify-center text-white text-xl shrink-0"
            >
              ✓
            </div>
            <div>
              <h4 class="text-lg font-semibold text-amber-500 mb-2">ติดตามแบบเรียลไทม์</h4>
              <p class="text-sm text-white italic leading-relaxed">
                ระบบมาตรฐานระดับสากลที่ทันสมัย ช่วยให้คุณติดตามพัสดุได้ทุกขั้นตอน
              </p>
            </div>
          </div>

          <div class="flex gap-6 items-start">
            <div
              class="w-12 h-12 bg-teal-300 rounded-xl flex items-center justify-center text-white text-xl shrink-0"
            >
              ✓
            </div>
            <div>
              <h4 class="text-lg font-semibold text-amber-500 mb-2">ใส่ใจในทุกขั้นตอน</h4>
              <p class="text-white leading-relaxed">
                การจัดส่งทุกครั้ง เราดูแลพัสดุของคุณเหมือนของเราเอง
              </p>
            </div>
          </div>

          <div class="flex gap-6 items-start">
            <div
              class="w-12 h-12 bg-teal-300 rounded-xl flex items-center justify-center text-white text-xl shrink-0"
            >
              ✓
            </div>
            <div>
              <h4 class="text-lg font-semibold text-amber-500 mb-2">บริการ 24/7</h4>
              <p class="text-white leading-relaxed">
                ทีมงานพร้อมให้บริการและแก้ไขปัญหาตลอด 24 ชั่วโมง
              </p>
            </div>
          </div>

          <div class="flex gap-6 items-start">
            <div
              class="w-12 h-12 bg-teal-300 rounded-xl flex items-center justify-center text-white text-xl shrink-0"
            >
              ✓
            </div>
            <div>
              <h4 class="text-lg font-semibold text-amber-500 mb-2">ประกันความเสียหาย</h4>
              <p class="text-white leading-relaxed">
                ทุกพัสดุได้รับการคุ้มครองด้วยประกันภัย เพื่อความอุ่นใจสูงสุด
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT CONTENT -->
      <div class="relative z-10 max-w-7xl mx-auto">
        <!-- Stats Grid -->
        <div class="grid grid-cols-2 gap-6">
          <div
            v-for="(stat, i) in stats"
            :key="i"
            :class="[
              'bg-white p-8 rounded-2xl text-center shadow-lg transition-all duration-700',
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
            ]"
            :style="{ transitionDelay: `${i * 150}ms` }"
          >
            <!-- NUMBER -->
            <div
              class="font-['Outfit'] text-4xl md:text-5xl font-extrabold mb-3 transition-all duration-300"
              :class="[
                counting
                  ? 'animate-pulse text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]'
                  : 'text-primary',
              ]"
            >
              {{ format(displayValues[i]) }}{{ stat.suffix }}
            </div>

            <!-- LABEL -->
            <div class="text-sm text-gray-500 font-medium">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const sectionRef = ref(null)
const visible = ref(false)
const counting = ref(false)

const stats = [
  { target: 15, suffix: '+', label: 'ปีประสบการณ์' },
  { target: 30, suffix: '+', label: 'พันธมิตรธุรกิจ' },
  { target: 99, suffix: '%', label: 'จัดส่งตรงเวลา' },
  { target: 500, suffix: '+', label: 'พัสดุ/เดือน' },
]

const displayValues = ref(stats.map(() => 0))

const format = (num) => {
  return num.toLocaleString()
}

const animateValue = (index, target, duration = 7000) => {
  const startTime = performance.now()

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

  const update = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    const eased = easeOutCubic(progress)

    displayValues.value[index] = Math.floor(eased * target)

    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      displayValues.value[index] = target
    }
  }

  requestAnimationFrame(update)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        visible.value = true
        counting.value = true

        stats.forEach((stat, i) => {
          setTimeout(() => {
            animateValue(i, stat.target)
          }, i * 200)
        })

        setTimeout(() => {
          counting.value = false
        }, 2500)

        observer.disconnect()
      }
    },
    { threshold: 0.4 }
  )

  observer.observe(sectionRef.value)
})
</script>

<style></style>
