<template>
  <div
    class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-16 px-5 md:px-28"
  >
    <div
      class="service__box opacity-0 translate-y-10 scroll:opacity-100 scroll:translate-y-0 scroll:transition-all scroll:duration-1000 scroll:ease-out scroll:delay-300"
    >
      <div
        v-for="(item, index) in features"
        :key="index"
        class="service__box flex gap-4 items-center"
      >
        <div
          :class="item.color"
          class="rounded-full p-2 w-8 h-8 shrink-0 flex items-center justify-center"
        >
          <q-icon :name="item.icon" class="text-white w-4 h-4" />
        </div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
      <!-- Your content -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import ScrollReveal from "scrollreveal";
const features = [
  {
    title: "Global Connectivity",
    description:
      "Connect to hundreds of destinations worldwide with seamless network integration and partnerships.",
    icon: "public",
    color: "bg-blue-500",
  },
  {
    title: "Efficient Fleet Management",
    description:
      "Utilize advanced technology for optimized fleet operations and real-time tracking.",
    icon: "airplane_ticket",
    color: "bg-green-500",
  },
  {
    title: "Passenger Experience",
    description:
      "Enhance traveler satisfaction with cutting-edge in-flight entertainment and personalized services.",
    icon: "flight",
    color: "bg-yellow-500",
  },
  {
    title: "Sustainability",
    description:
      "Adopt eco-friendly practices with fuel-efficient aircraft and carbon offset programs.",
    icon: "eco",
    color: "bg-lime-500",
  },
  {
    title: "Safety & Reliability",
    description:
      "Prioritize passenger safety with rigorous maintenance and compliance standards.",
    icon: "verified",
    color: "bg-red-500",
  },
  {
    title: "Global Support",
    description:
      "Leverage a robust global support network for smooth operations and customer assistance.",
    icon: "support_agent",
    color: "bg-purple-500",
  },
];

onMounted(() => {
  ScrollReveal().reveal(".service__box", {
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    interval: 350,
    reset: true,
  });
});
</script>

<style scoped></style>
