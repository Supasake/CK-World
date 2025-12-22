<template>
  <div class="px-8 mt-8 md:mt-12 max-h-[75dvh] overflow-auto">
    <div>
      <h1
        class="text-3xl font-semibold text-neutral-content mb-6 ml-8 overline decoration-double"
      >
        ▶︎▶︎ Recommended
      </h1>
      <div
        v-for="(row, rIndex) in rows"
        :key="rIndex"
        class="grid gap-6 mb-8"
        :class="{
          'grid-cols-2': row.cols === 2,
          'grid-cols-1 md:grid-cols-3': row.cols === 3,
        }"
      >
        <div
          v-for="card in row.items"
          :key="card.id"
          class="card image-full shadow-sm"
        >
          <figure
            :class="{
              'h:100 md:h-75': row.cols === 2,
              'h-45': row.cols === 3,
            }"
          >
            <NuxtImg
              :src="card.image"
              alt="img"
              class="h-full w-full object-cover"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ card.origin_source }}</h2>
            <p class="">{{ card.description }}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-ghost">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  blogs: {
    type: Object,
    required: true,
  },
});

const rows = computed(() => {
  const blogs = props.blogs;

  return [
    { cols: 2, items: blogs.slice(0, 2) },
    { cols: 3, items: blogs.slice(2, 5) },
    { cols: 3, items: blogs.slice(5) },
  ];
});
</script>

<style lang="scss" scoped></style>
