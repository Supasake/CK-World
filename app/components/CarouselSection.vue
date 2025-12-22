<template>
  <div class="">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      navigation-position="right"
      control-color="orange"
      style="height: fit-content"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        name="hero"
        class="bg-gradient-to-r from-cyan-600 to-purple-600"
      >
        <HeroSection />
      </q-carousel-slide>
      <q-carousel-slide name="feature">
        <FeatureSection />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script setup>
import { ref } from "vue";
import HeroSection from "./HeroSection.vue";
import FeatureSection from "./FeatureSection.vue";

const slide = ref("hero");
const autoplay = ref(true);
</script>

<style></style>
