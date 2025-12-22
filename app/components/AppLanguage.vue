<template>
  <div>
    <button class="cursor-pointer" @click="switchLanguage()">
      <kbd class="kbd">{{ currentLocale.toUpperCase() }}</kbd>
    </button>
  </div>
</template>

<script setup>
const { locale: currentLocale, locales, setLocale } = useI18n();

const localeCodes = locales.value.map((l) => l.code);

function switchLanguage() {
  const currentIndex = localeCodes.indexOf(currentLocale.value);

  const nextIndex = (currentIndex + 1) % localeCodes.length;

  setLocale(localeCodes[nextIndex]);
}
</script>
