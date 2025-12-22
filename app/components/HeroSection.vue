<template>
  <div
    class="relative min-h-[450px] min-h-[550px] bg-cover bg-right xl:bg-center bg-no-repeat"
    style="background-image: url(&quot;/img/hero-section.jpg&quot;)"
  >
    <div class="absolute inset-0 bg-black/40 xl:bg-black/20" />

    <div class="relative grid xl:grid-cols-[3fr_2fr] h-full">
      <div class="hidden xl:block" />

      <div
        class="flex items-center justify-center px-6 pt-92 xl:justify-start xl:px-12"
      >
        <div class="rich-text text-center text-white xl:text-left">
          <div class="text-5xl font-bold text-primary">CK World</div>
          <p class="mt-4 text-lg text-justify text-neutral-content">
            {{ $t("welcome_subtitle") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
