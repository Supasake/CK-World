<template>
  <ClientOnly>
    <button
      class="btn btn-circle btn-sm"
      aria-label="Toggle theme"
      @click="toggleTheme"
    >
      <!-- Lemonade -->
      <Icon
        v-if="currentTheme === 'lemonade'"
        name="line-md:sunny-twotone-loop"
        size="20"
      />

      <!-- Sunset -->
      <Icon
        v-else-if="currentTheme === 'coffee'"
        name="line-md:moon-rising-filled-loop"
        size="20"
      />

      <!-- Aqua -->
      <Icon v-else name="line-md:compass-loop" size="20" />
    </button>
  </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode();

const themeMap = {
  lemonade: "lemonade",
  coffee: "coffee",
  aqua: "aqua",
};

const currentTheme = computed(() => {
  return themeMap[colorMode.value] || "aqua";
});

const modes = ["lemonade", "coffee", "aqua"];

const toggleTheme = () => {
  const index = modes.indexOf(colorMode.preference);
  colorMode.preference = modes[(index + 1) % modes.length];
};

onMounted(() => {
  document.documentElement.setAttribute(
    "data-theme",
    themeMap[colorMode.value] || "aqua",
  );
});

watch(
  () => colorMode.value,
  (mode) => {
    document.documentElement.setAttribute(
      "data-theme",
      themeMap[mode] || "aqua",
    );
  },
);
</script>
