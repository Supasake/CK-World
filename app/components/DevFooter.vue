<template>
  <footer
    class="footer sm:footer-horizontal bg-base-200 text-base-content p-10"
  >
    <aside class="w-auto">
      <svg
        width="180"
        height="80"
        viewBox="0 0 180 80"
        xmlns="http://www.w3.org/2000/svg"
        class="fill-current text-primary"
      >
        <!-- C -->
        <path
          d="M40 10
         C20 10 10 20 10 30
         C10 40 20 50 40 50
         L40 44
         C26 44 18 38 18 30
         C18 22 26 16 40 16
         Z"
        />

        <!-- K -->
        <path
          d="M55 10 H63 V30 L80 10 H90 L70 32 L90 50 H80 L63 34 V50 H55 Z"
        />

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
      <p class="text-secondary-content text-xs italic">
        Logistics & Freight Forwarding
      </p>
      <p>{{ $t("welcome_subtitle") }}</p>
    </aside>
    <div class="grid grid-cols-2 gap-6 sm:flex sm:w-full justify-evenly">
      <nav class="flex flex-col gap-2">
        <h6 class="footer-title">Our Services</h6>
        <NuxtLink
          v-for="item in items"
          :key="item.label"
          class="link link-hover"
          :to="item.to"
          >{{ item.label }}</NuxtLink
        >
      </nav>
      <!-- <nav class="flex flex-col gap-2">
        <h6 class="footer-title">Company</h6>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </nav>
      <nav class="flex flex-col gap-2">
        <h6 class="footer-title">Legal</h6>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </nav> -->
      <nav>
        <h6 class="footer-title">Community</h6>
        <div class="grid grid-flow-col gap-4">
          <a class="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
          </a>
          <a class="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              />
            </svg>
          </a>
          <a class="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  </footer>
  <footer
    class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4"
  >
    <aside>
      <p>
        Copyright © {{ new Date().getFullYear() }} - All right reserved by CK
        World
      </p>
    </aside>
  </footer>
</template>

<script setup>
const { locale } = useI18n();

const items = computed(() => {
  const loc = locale.value;
  return [
    {
      label: "Home",
      to: `/${loc == "en" ? "" : loc}`,
      icon: "solar:home-bold-duotone",
    },
    {
      label: "Check Price",
      to: `/${loc == "en" ? "" : loc}#check_price`,
      icon: "solar:chat-round-money-bold-duotone",
    },
    {
      label: "Blog",
      to: `/${loc == "en" ? "" : loc}#blog`,
      icon: "solar:notebook-bookmark-line-duotone",
    },
    {
      label: "Contact us",
      to: `/${loc == "en" ? "" : loc}#contact_us`,
      icon: "solar:mailbox-bold-duotone",
    },
  ];
});
</script>

<style lang="scss" scoped></style>
