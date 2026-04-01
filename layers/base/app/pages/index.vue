<template>
  <div class="space-y-16 pb-16 lg:space-y-24 lg:pb-24">
    <Hero />
    <LazyBlogPostSlider
      :headline="useContentStore().components.postSlider.title.default"
    />
  </div>
</template>

<script setup>
usePageMeta("home");
</script>
