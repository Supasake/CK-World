<template>
  <div class="hidden md:block">
    <ul id="topBar" class="flex ml-32 gap-8 text-md font-bold capitalize items-center">
      <li v-for="item in items" :key="item.label" class="text-base-content">
        <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
      </li>
      <div class="flex gap-1 items-center ml-auto">
        <AppLanguage />
        <AppColorMode />
      </div>
    </ul>
  </div>
  <div class="md:hidden flex gap-1 items-center text-end">
    <div class="drawer">
      <input id="my-drawer-1" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <label for="my-drawer-1" class="btn drawer-button btn-circle btn-sm">
          <Icon for="my-drawer-1" name="line-md:coffee-half-empty-twotone-loop" size="20" />
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-1" aria-label="close sidebar" class="drawer-overlay" />
        <div class="menu bg-base-300 w-80 p-4 m-4 rounded-3xl">
          <div class="flex justify-between items-center">
            <p>Our Menu</p>
            <div class="flex items-center gap-1">
              <AppLanguage />
              <AppColorMode />
            </div>
          </div>

          <ul class="space-y-4">
            <div class="divider mb-2" />
            <li v-for="(item, index) in items" :key="index">
              <NuxtLink :to="item.to">
                <Icon class="mr-2" :name="item.icon" size="20" />
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()

const items = computed(() => {
  const loc = locale.value
  const basePath = loc === 'en' ? '' : `/${loc}`

  return [
    {
      label: 'หน้าหลัก',
      to: basePath || '/',
      icon: 'solar:home-bold-duotone',
    },
    {
      label: 'ตรวจสอบราคา',
      to: `${basePath}/#check_price`,
      icon: 'solar:chat-round-money-bold-duotone',
    },
    {
      label: 'บริการ',
      to: `${basePath}/#services`,
      icon: 'carbon:cobol-upgrade-advisor',
    },
    {
      label: 'ทำไมต้องเรา',
      to: `${basePath}/#why_us`,
      icon: 'carbon:array-users',
    },
    // {
    //   label: "บทความ",
    //   to: `${basePath}/#blog`,
    //   icon: "solar:notebook-bookmark-line-duotone",
    // },
    {
      label: 'ติดต่อเรา',
      to: `${basePath}/contact_us`,
      icon: 'solar:mailbox-bold-duotone',
    },
  ]
})
</script>

<style scoped></style>
