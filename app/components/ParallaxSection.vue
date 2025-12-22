<template>
  <ClientOnly>
    <section
      class="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mx-auto max-w-full px-5 md:px-32"
    >
      <div
        v-for="(item, index) in services"
        :key="index"
        class="service__item group relative overflow-hidden rounded-3xl h-[320px] sm:h-[380px] lg:h-[420px] cursor-pointer"
      >
        <!-- Background image (parallax hover) -->
        <div
          class="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          :style="{ backgroundImage: `url(${item.url})` }"
        />

        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/60"
        />

        <!-- Content -->
        <div
          class="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-6 transition-transform duration-500 group-hover:-translate-y-2"
        >
          <!-- Icon with circle -->
          <div
            class="mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-white/15 backdrop-blur ring-1 ring-white/30"
          >
            <Icon :name="item.icon" size="35" />
          </div>

          <!-- Title -->
          <h3 class="text-xl font-semibold mb-3">
            {{ item.title }}
          </h3>

          <!-- Description (longer) -->
          <p class="text-sm leading-relaxed opacity-90 max-w-sm">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </section>
  </ClientOnly>
</template>

<script setup lang="ts">
const services = [
  {
    url: "https://cdn.pixabay.com/photo/2017/12/15/22/25/hamburg-3021820_960_720.jpg",
    title: "Global Shipping Solutions",
    icon: "carbon:airport-01",
    desc: "We provide comprehensive international shipping services designed to move your goods safely and efficiently across borders, supported by a reliable global logistics network and experienced professionals.",
  },
  {
    url: "https://cdn.pixabay.com/photo/2018/01/26/20/54/crane-3109757_1280.jpg",
    title: "Professional Cargo Handling",
    icon: "carbon:agriculture-analytics",
    desc: "Our cargo handling services ensure that every shipment is carefully managed, securely packed, and handled with precision, minimizing risk while maximizing efficiency throughout the supply chain.",
  },
  {
    url: "https://cdn.pixabay.com/photo/2016/08/03/14/41/model-planes-1566822_1280.jpg",
    title: "Reliable On-Time Delivery",
    icon: "carbon:category-new-each",
    desc: "With a strong commitment to punctuality, we guarantee timely delivery through optimized routing, real-time tracking, and proactive coordination to meet your business deadlines without compromise.",
  },
];

onMounted(async () => {
  const ScrollReveal = (await import("scrollreveal")).default;

  ScrollReveal().reveal(".service__item", {
    origin: "bottom",
    distance: "40px",
    duration: 1200,
    easing: "ease-out",
    interval: 250,
    opacity: 0,
    scale: 0.95,
    reset: false,
  });
});
</script>
