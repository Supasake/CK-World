<template>
  <!-- Main Footer -->
  <footer
    class="relative bg-linear-to-br from-base-200 via-base-200 to-base-300 text-base-content overflow-hidden"
  >
    <!-- Decorative Background -->
    <div class="absolute inset-0 opacity-5">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div class="relative container mx-auto px-6 py-16 lg:py-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <!-- Brand Section -->
        <aside class="lg:col-span-5 space-y-6">
          <!-- Logo -->
          <div class="transform transition-transform duration-300 hover:scale-105">
            <svg
              width="200"
              height="90"
              viewBox="0 0 200 90"
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current text-primary drop-shadow-lg"
            >
              <!-- Enhanced C -->
              <path
                d="M45 12
                C22 12 10 24 10 35
                C10 46 22 58 45 58
                L45 50
                C28 50 20 42 20 35
                C20 28 28 20 45 20
                Z"
              />

              <!-- Enhanced K -->
              <path d="M60 12 H70 V35 L90 12 H103 L80 37 L103 58 H90 L70 40 V58 H60 Z" />

              <!-- WORLD text -->
              <text
                x="60"
                y="78"
                font-size="16"
                letter-spacing="5"
                font-family="system-ui, -apple-system, sans-serif"
                font-weight="600"
                class="fill-current"
              >
                WORLD
              </text>
            </svg>
          </div>

          <!-- Tagline -->
          <div class="space-y-2">
            <p class="text-accent text-sm font-semibold tracking-wider uppercase">
              Logistics & Freight Forwarding
            </p>
            <p class="text-base-content/70 text-base max-w-md leading-relaxed">
              {{ $t('welcome_subtitle') }}
            </p>
          </div>

          <!-- Contact Info (Optional) -->
          <div class="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:info@ckworld.com"
              class="text-sm text-base-content/60 hover:text-primary transition-colors duration-200 flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              contact@company.com
            </a>
            <a
              href="tel:+1234567890"
              class="text-sm text-base-content/60 hover:text-primary transition-colors duration-200 flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +66 123-4567
            </a>
          </div>
        </aside>
        <!-- Links Section -->
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <!-- Our Services -->
          <nav class="space-y-4">
            <h6
              class="text-base font-bold text-base-content mb-4 pb-2 border-b-2 border-primary/20"
            >
              Our Services
            </h6>
            <ul class="space-y-3">
              <li v-for="item in items" :key="item.label">
                <NuxtLink
                  :to="item.to"
                  class="group inline-flex items-center text-sm text-base-content/70 hover:text-primary transition-all duration-200"
                >
                  <span
                    class="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200 mr-0 group-hover:mr-2"
                  />
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <!-- Quick Links (Placeholder for future use) -->
          <nav class="space-y-4">
            <h6
              class="text-base font-bold text-base-content mb-4 pb-2 border-b-2 border-primary/20"
            >
              Company
            </h6>
            <ul class="space-y-3">
              <li>
                <NuxtLink
                  to="/contact_us"
                  class="group inline-flex items-center text-sm text-base-content/70 hover:text-primary transition-all duration-200"
                >
                  <span
                    class="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200 mr-0 group-hover:mr-2"
                  />
                  Contact Us
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :to="{ path: '/', hash: '#why_us' }"
                  class="group inline-flex items-center text-sm text-base-content/70 hover:text-primary transition-all duration-200"
                >
                  <span
                    class="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200 mr-0 group-hover:mr-2"
                  />
                  Why CK World
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <!-- Social & Community -->
          <nav class="space-y-4">
            <h6
              class="text-base font-bold text-base-content mb-4 pb-2 border-b-2 border-primary/20"
            >
              Connect With Us
            </h6>
            <p class="text-sm text-base-content/60 mb-4">Follow us on social media for updates</p>
            <div class="flex gap-3">
              <!-- LINE APPLICATION -->
              <a
                href="#"
                class="group p-3 rounded-lg bg-accent hover:bg-[#03C755] hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg
                  aria-label="Line logo"
                  width="20"
                  height="20"
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
              </a>
              <!-- FACEBOOK -->
              <a
                href="#"
                class="group p-3 rounded-lg bg-accent hover:bg-[#1A77F2] hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Facebook"
              >
                <svg
                  aria-label="Facebook logo"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="white"
                    d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
                  />
                </svg>
              </a>
              <!-- X -->
              <a
                href="#"
                class="group p-3 rounded-lg text-white bg-accent hover:text-white hover:bg-black hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="LinkedIn"
              >
                <svg
                  aria-label="X logo"
                  width="20"
                  height="16"
                  viewBox="0 0 300 271"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
                  />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </footer>

  <!-- Copyright Bar -->
  <footer class="bg-base-300 border-t border-base-content/10">
    <div class="container mx-auto px-6 py-0">
      <div
        class="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-base-content/60"
      >
        <p class="text-center sm:text-left">
          Copyright © {{ new Date().getFullYear() }}
          <span class="text-primary font-semibold">CK World</span>. All rights reserved.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3 lg:gap-6">
          <a href="#" class="hover:text-primary transition-colors duration-200">Privacy Policy</a>
          <span class="hidden sm:inline text-base-content/30">•</span>
          <a href="#" class="hover:text-primary transition-colors duration-200">Terms of Service</a>
          <span class="hidden sm:inline text-base-content/30">•</span>
          <a href="#" class="hover:text-primary transition-colors duration-200">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const items = [
  {
    label: 'Check Price',
    to: { path: '/', hash: '#check_price' },
  },
  { label: 'Features', to: { path: '/', hash: '#services' } },
]
</script>

<style scoped>
/* Additional custom animations if needed */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Optional: Add smooth scroll behavior */
a[href^='#'] {
  scroll-behavior: smooth;
}
</style>
