<template>
  <header
    id="header"
    class="fixed w-full top-0 left-0 py-2 backdrop-blur transition duration-500 z-30"
  >
    <nav class="container flex items-center justify-between h-16">
      <NuxtLink to="/" class="flex items-center gap-5 ml-3 xl:ml-12">
        <!-- <Logo /> -->
        <span
          id="brandName"
          class="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-widest transition-colors duration-1000"
        >
          <span class="logo__alphabet text-3xl">C</span>
          <span class="logo__alphabet text-3xl">K</span>
          <span class="logo__alphabet text-3xl ml-3">W</span>
          <span class="logo__alphabet">o</span>
          <span class="logo__alphabet">r</span>
          <span class="logo__alphabet">l</span>
          <span class="logo__alphabet">d</span>
        </span>
      </NuxtLink>
      <!-- <TopbarMenu /> -->
      <ul
        class="xl:w-[calc(30%+2rem)] flex items-center pl-8 pr-4 xl:backdrop-blur"
      >
        <AppTopbar />
        <!-- <li v-for="link in settings?.data.navigation" :key="link.key" class="hidden xl:block">
                    <PrismicLink :field="link" class="cta" />
                </li> -->
        <!-- <li class="ml-auto">
                    <NuxtLink to="/#cart" class="cta">
                        Cart (<ClientOnly fallback="~">{{ totalItems }}</ClientOnly>)
                    </NuxtLink>
                </li> -->
      </ul>
    </nav>
  </header>
</template>

<!-- <script lang="ts" setup>
// import type { Content } from '@prismicio/client'

// defineProps<{
//     settings?: Content.SettingsDocument
// }>()


// const { totalItems } = useCart()
// </script> -->

<!-- // <style scoped>
// @reference "~/assets/css/main.css";

// a {
//     @apply transition-opacity duration-300 ease-in-out;
// }

// header:has(a:hover) a:not(:hover) {
//     @apply opacity-25
// }
</style> -->

<script setup>
// import ScrollReveal from "scrollreveal";

onMounted(async () => {
  const ScrollReveal = (await import("scrollreveal")).default;
  // const scrollHeader = () => {
  //     const header = document.getElementById("header")
  //     if (window.scrollY >= 200) {
  //         // header?.classList.add("border-b", "border-yellow-500")
  //         if (document.documentElement.classList.contains('dark')) {
  //             header?.classList.add("dark:bg-[#091a28]")
  //         } else {
  //             // header?.classList.add("bg-white") // backdrop-blur
  //             header?.classList.add("backdrop-blur")
  //         }
  //     } else {
  //         header?.classList.remove("border-b", "border-yellow-500", "bg-white", "dark:bg-[#091a28]")
  //         // header?.classList.add("bg-transparent")
  //         header?.classList.add("backdrop-blur")
  //     }
  // }
  // const BrandNameColor = () => {
  //     const brandName = document.getElementById("brandName")
  //     if (window.scrollY >= 50) {
  //         brandName?.classList.add("text-primary")
  //         // brandName?.classList.remove("text-yellow-900",)
  //     } else {
  //         brandName?.classList.add("text-primary")
  //         // brandName?.classList.remove("text-teal-300",)
  //         // brandName?.classList.add("text-yellow-900")
  //     }
  // }

  const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 3500,
    delay: 150,
    reset: false,
  });

  // window.addEventListener("scroll", scrollHeader)
  // document.addEventListener("click", scrollHeader)
  // window.addEventListener("scroll", BrandNameColor)
  sr.reveal(".logo__alphabet", {
    origin: "bottom",
    interval: 500,
    duration: 3000,
  });
});
</script>

<style>
@reference "~/tailwind.css";

a {
  @apply transition-opacity duration-300 ease-in-out;
}

header:has(a:hover) a:not(:hover) {
  @apply opacity-25;
}
</style>
