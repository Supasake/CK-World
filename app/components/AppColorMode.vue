<template>
  <ClientOnly>
    <button class="btn btn-circle btn-sm" aria-label="Toggle theme" @click="toggleTheme">
      <!-- corporate -->
      <Icon v-if="currentTheme === 'bumblebee'" name="line-md:sunny-twotone-loop" size="20" />

      <!-- Sunset -->
      <Icon v-else name="line-md:moon-rising-filled-loop" size="20" />
      <!-- <Icon v-else-if="currentTheme === 'bumblebee'" name="line-md:moon-rising-filled-loop" size="20" /> -->

      <!-- Aqua -->
      <!-- <Icon v-else name="line-md:compass-loop" size="20" /> -->
    </button>
  </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode()

const themeMap = {
  bumblebee: 'bumblebee',
  corporate: 'corporate',
  // aqua: "aqua",
}

const currentTheme = computed(() => {
  return themeMap[colorMode.value] || 'bumblebee'
})

const modes = ['bumblebee', 'corporate']

const toggleTheme = () => {
  const index = modes.indexOf(colorMode.preference)
  colorMode.preference = modes[(index + 1) % modes.length]
}

onMounted(() => {
  document.documentElement.setAttribute('data-theme', themeMap[colorMode.value] || 'bumblebee')
})

watch(
  () => colorMode.value,
  (mode) => {
    document.documentElement.setAttribute('data-theme', themeMap[mode] || 'bumblebee')
  }
)
</script>
