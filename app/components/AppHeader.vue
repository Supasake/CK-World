<template>
  <header
    id="header"
    class="bg-base-200 fixed w-full top-0 left-0 pb-4 transition duration-500 z-30"
  >
    <div class="flex justify-end px-4 lg:px-8 py-1 gap-1 bg-base-300">
      <button class="btn btn-circle btn-xs bg-[#03C755] text-white border-[#00b544]">
        <svg
          aria-label="Line logo"
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <g fill-rule="evenodd" stroke-linejoin="round" fill="white">
            <path
              fill-rule="nonzero"
              d="M12.91 6.57c.232 0 .42.19.42.42 0 .23-.188.42-.42.42h-1.17v.75h1.17a.42.42 0 1 1 0 .84h-1.59a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42h1.59a.42.42 0 0 1-.002.84h-1.17v.75h1.17zm-2.57 2.01a.421.421 0 0 1-.757.251l-1.63-2.217V8.58a.42.42 0 0 1-.42.42.42.42 0 0 1-.418-.42V5.4a.418.418 0 0 1 .755-.249L9.5 7.366V5.4c0-.23.188-.42.42-.42.23 0 .42.19.42.42v3.18zm-3.828 0c0 .23-.188.42-.42.42a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42.23 0 .418.19.418.42v3.18zM4.868 9h-1.59c-.23 0-.42-.19-.42-.42V5.4c0-.23.19-.42.42-.42.232 0 .42.19.42.42v2.76h1.17a.42.42 0 1 1 0 .84M16 6.87C16 3.29 12.41.376 8 .376S0 3.29 0 6.87c0 3.208 2.846 5.896 6.69 6.405.26.056.615.172.705.394.08.2.053.518.026.722 0 0-.092.565-.113.685-.035.203-.16.79.693.432.854-.36 4.607-2.714 6.285-4.646C15.445 9.594 16 8.302 16 6.87"
            />
          </g>
        </svg>
      </button>
      <button class="btn btn-circle btn-xs bg-[#1A77F2] text-white border-[#005fd8]">
        <svg
          aria-label="Facebook logo"
          width="14"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z" />
        </svg>
      </button>
      <button class="btn btn-circle btn-xs bg-black text-white border-black">
        <svg
          aria-label="X logo"
          width="14"
          height="10"
          viewBox="0 0 300 271"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
          />
        </svg>
      </button>
    </div>
    <nav class="container flex items-center justify-between h-16">
      <NuxtLink to="/" class="flex items-center gap-5 ml-3 mt-4 xl:ml-12">
        <!-- <Logo /> -->
        <!-- <span id="brandName"
          class="text-3xl text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-widest transition-colors duration-1000">
          <span class="logo__alphabet text-3xl">C</span>
          <span class="logo__alphabet text-3xl">K</span>
          <span class="logo__alphabet text-3xl ml-3">W</span>
          <span class="logo__alphabet">o</span>
          <span class="logo__alphabet">r</span>
          <span class="logo__alphabet">l</span>
          <span class="logo__alphabet">d</span>

        </span> -->
        <svg
          width="180"
          height="80"
          viewBox="0 0 180 80"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current text-primary"
        >
          <!-- C -->
          <path
            d="M40 10 C20 10 10 20 10 30 C10 40 20 50 40 50 L40 44 C26 44 18 38 18 30 C18 22 26 16 40 16 Z"
          />

          <!-- K -->
          <path d="M55 10 H63 V30 L80 10 H90 L70 32 L90 50 H80 L63 34 V50 H55 Z" />

          <!-- WORLD (below baseline) -->
          <text
            x="55"
            y="68"
            font-size="14"
            letter-spacing="4"
            font-family="sans-serif"
            font-weight="500"
          >
            WORLD
          </text>
        </svg>
      </NuxtLink>
      <!-- <TopbarMenu /> -->
      <!-- <ul class="xl:w-[calc(30%+2rem)] flex items-center pl-8 pr-4 xl:backdrop-blur">
        <AppTopbar />
      </ul> -->
      <div class="mx-4 w-full mt-4">
        <AppTopbar />
      </div>
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
  const ScrollReveal = (await import('scrollreveal')).default
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
    origin: 'top',
    distance: '50px',
    duration: 3500,
    delay: 150,
    reset: false,
  })

  // window.addEventListener("scroll", scrollHeader)
  // document.addEventListener("click", scrollHeader)
  // window.addEventListener("scroll", BrandNameColor)
  sr.reveal('.logo__alphabet', {
    origin: 'bottom',
    interval: 500,
    duration: 3000,
  })
})
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
