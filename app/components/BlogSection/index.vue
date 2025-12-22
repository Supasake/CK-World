<template>
  <div id="blog" class="scroll-mt-20 py-8">
    <div class="grid md:grid-cols-2">
      <div
        class="flex bg-accent rounded-r-full mr-10 md:mr-0 items-center justify-end"
      >
        <h1 class="text-5xl font-bold text-primary m-6 text-end">Our Blog</h1>
      </div>
      <p class="flex items-center mx-auto font-bold p-12">
        " {{ $t("blog_quote") }} "
        <span
          class="absolute right-10 mt-25 text-xs italic text-secondary-content/55"
          >Frederick W. Smith, FedEx Founder</span
        >
      </p>
    </div>
    <div class="grid xl:grid-cols-[3fr_1fr]">
      <div>
        <BlogSectionRecommended :blogs="blogLists" />
      </div>
      <div>
        <BlogSectionLatest :blogs="blogLists" />
      </div>
    </div>
  </div>
</template>

<script setup>
const blogLists = [
  {
    topic: "The Future of Smart Logistics",
    description:
      "An overview of how digital technology is transforming modern logistics operations.",
    content:
      "Smart logistics leverages technologies such as IoT, AI, and big data to optimize transportation, warehousing, and inventory management. Companies adopting smart logistics can reduce costs, improve delivery speed, and enhance supply chain visibility. Real-time tracking and predictive analytics are becoming standard tools for logistics providers worldwide.",
    author: "John Miller",
    origin_source: "Logistics Today Blog",
    time_created: "2025-01-10T09:30:00Z",
    image:
      "https://previews.123rf.com/images/mikkiorso/mikkiorso2504/mikkiorso250407297/244208943-industrial-port-at-sunset-with-trucks-and-planes-showcasing-cargo-logistics-and-shipping-activities.jpg",
  },
  {
    topic: "Last-Mile Delivery Challenges",
    description:
      "Key obstacles logistics companies face in last-mile delivery and how to overcome them.",
    content:
      "Last-mile delivery is often the most expensive and complex part of the supply chain. Challenges include traffic congestion, failed deliveries, and rising customer expectations. Logistics providers are adopting solutions such as route optimization, local fulfillment centers, and crowd-sourced delivery to address these issues effectively.",
    author: "Emily Chen",
    origin_source: "Global Supply Chain Review",
    time_created: "2025-01-15T13:45:00Z",
    image:
      "https://previews.123rf.com/images/nazim0011/nazim00112511/nazim0011251102337/260665464-a-forklift-stands-behind-a-pallet-of-concrete-blocks-on-a-wet-city-street-at-sunset-the-scene.jpg",
  },
  {
    topic: "Warehouse Automation Trends",
    description:
      "A look at the latest automation technologies shaping modern warehouses.",
    content:
      "Warehouse automation is rapidly evolving with the use of robotics, automated storage and retrieval systems, and AI-powered inventory management. These technologies help reduce human error, improve picking speed, and increase overall efficiency. As labor shortages continue, automation is becoming a strategic investment for logistics companies.",
    author: "Michael Rodriguez",
    origin_source: "Warehouse Insight",
    time_created: "2025-01-20T08:20:00Z",
    image:
      "https://images.unsplash.com/photo-1592085198739-ffcad7f36b54?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    topic: "Sustainable Logistics Practices",
    description:
      "How logistics companies are reducing their environmental impact.",
    content:
      "Sustainable logistics focuses on minimizing carbon emissions and reducing waste across the supply chain. Common practices include using electric vehicles, optimizing delivery routes, and adopting eco-friendly packaging. Sustainability not only benefits the environment but also improves brand reputation and long-term operational efficiency.",
    author: "Sarah Thompson",
    origin_source: "Green Transport Journal",
    time_created: "2025-01-25T11:00:00Z",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    topic: "Cross-Border Logistics Explained",
    description:
      "Understanding the complexities of international logistics and trade.",
    content:
      "Cross-border logistics involves managing transportation, customs clearance, and regulatory compliance across multiple countries. Challenges include differing regulations, documentation requirements, and transit delays. Successful cross-border logistics relies on strong partnerships, digital documentation, and compliance expertise.",
    author: "David Lee",
    origin_source: "International Trade Weekly",
    time_created: "2025-01-30T16:10:00Z",
    image:
      "https://images.unsplash.com/photo-1561475699-fa66c7246834?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
</script>

<style lang="scss" scoped></style>
