<template>
  <div class="w-max-svw lg:p-4">
    <div
      class="flex p-4 bg-base-200 space-x-4 xl:grid md:gap-1 lg:gap-3 max-w-svw max-h-[75dvh] overflow-auto"
    >
      <h1 class="px-4 text-2xl font-semibold text-primary">
        <span class="md:hidden flex gap-4">
          <span class="flex flex-col tracking-tight leading-tight">
            {{ "LATEST".split("").join("\n") }}
          </span>
          <span class="flex flex-col tracking-tight leading-tight">
            {{ "BLOG".split("").join("\n") }}
          </span>
        </span>
        <div class="hidden md:inline underline items-end">
          <span>Latest Blog</span>
          <Icon
            name="line-md:speed-twotone-loop"
            class="absolute mt-1.5 mx-2"
            size="25"
          />
        </div>
      </h1>

      <div
        v-for="(blog, index) in blogs"
        :id="`blog-slide-${index}`"
        :key="index"
        class="carousel-item"
      >
        <div class="card bg-base-300 w-64 max-w-72 md:w-full shadow-sm">
          <figure class="h-48 relative">
            <p
              class="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded"
            >
              {{ formatDate(blog.time_created) }}
            </p>
            <img
              :src="blog.image"
              alt="Shoes"
              class="w-full h-full object-cover"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ blog.topic }}</h2>
            <p>{{ blog.description }}</p>
            <div class="card-actions items-center justify-end">
              <p class="text-sm text-gray-500">{{ blog.origin_source }}</p>
              <button class="btn btn-secondary btn-sm text-amber-100">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  blogs: {
    type: Object,
    required: true,
  },
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return `${day} ${month} ${year} | ${time}`;
};
</script>

<style scoped></style>
