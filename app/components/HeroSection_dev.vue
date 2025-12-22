<template>
  <section
    id="feature"
    class="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto container"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 y-8 my-15 items-center">
      <div
        class="flex flex-col items-start justify-center ml-auto w-full lg:w-10/12 space-y-3"
      >
        <div class="text-2xl lg:text-3xl font-bold text-stone-50">
          Hi there, We're <span class="tracking-wider">Modern Express</span>
        </div>
        <p class="my-2 text-stone-300 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          <a
            class="text-cyan-400 cursor-pointer hover:underline"
            href="/#service_box"
          >
            malesuada
          </a>
          nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,
          <a
            class="text-cyan-400 cursor-pointer hover:underline"
            href="/#service_box"
          >
            consectetur
          </a>
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div class="flex gap-5">
          <q-icon
            name="fa-brands fa-facebook"
            class="text-blue-500 text-2xl cursor-pointer border-2 rounded-full bg-white"
          />
          <q-icon
            name="fa-brands fa-instagram"
            class="text-pink-500 text-2xl cursor-pointer border-2 rounded-full bg-slate-50"
            style="overflow: hidden"
          />
          <q-icon
            name="fa-brands fa-line"
            class="text-green-500 text-2xl cursor-pointer border-2 rounded-full bg-white"
            style="overflow: hidden"
          />
          <q-icon
            name="fa-brands fa-youtube"
            class="text-rose-500 text-2xl cursor-pointer border-2 rounded-full bg-white"
            style="overflow: hidden"
          />
          <q-icon
            name="fa-brands fa-linkedin"
            class="text-blue-700 text-2xl cursor-pointer border-2 rounded-full bg-slate-50"
            style="overflow: hidden"
          />
        </div>
      </div>
      <div class="flex w-full justify-end">
        <div class="h-full w-full p-2">
          <q-img src="~assets/Logo.png" alt="VPN Illustrasi" class="w-82" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
