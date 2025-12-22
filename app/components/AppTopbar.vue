<template>
  <div class="hidden md:block">
    <ul
      id="topBar"
      class="flex gap-3 text-md font-bold capitalize items-center"
    >
      <li v-for="item in items" :key="item.label">
        <NuxtLink :to="item.to" class="stroked-text">{{ item.label }}</NuxtLink>
      </li>
      <div class="flex gap-1 items-center">
        <AppLanguage />
        <AppColorMode />
      </div>
    </ul>
  </div>
  <div class="md:hidden flex mt-2 gap-1 items-center">
    <div class="drawer">
      <input id="my-drawer-1" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <label for="my-drawer-1" class="btn drawer-button btn-circle btn-sm">
          <Icon
            for="my-drawer-1"
            name="line-md:coffee-half-empty-twotone-loop"
            size="20"
          />
        </label>
      </div>
      <div class="drawer-side">
        <label
          for="my-drawer-1"
          aria-label="close sidebar"
          class="drawer-overlay"
        />
        <div class="menu bg-base-300 w-80 p-4 m-4 rounded-3xl">
          <div class="flex justify-between items-center">
            <p>Our Menu</p>
            <div class="flex items-center gap-1">
              <AppLanguage /> <AppColorMode />
            </div>
          </div>

          <ul class="space-y-4">
            <div class="divider mb-2" />
            <li v-for="(item, index) in items" :key="index">
              <NuxtLink :to="item.to">
                <Icon class="mr-2" :name="item.icon" size="20" />
                {{ item.label }}</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
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

<style scoped></style>
