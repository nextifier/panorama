<template>
  <div>
    <Hero class="pt-12" />
    <AllEvents class="py-10 lg:py-20" />
  </div>
</template>

<script setup>
defineOptions({
  name: "index",
});

usePageMeta("home");
</script>
