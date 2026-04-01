<template>
  <section
    id="hero"
    class="min-h-screen-offset relative flex items-center overflow-hidden"
  >
    <div class="container-wider relative z-10">
      <div class="flex max-w-2xl flex-col items-start gap-y-4 py-16">
        <h1
          class="text-foreground text-4xl !leading-[1.2] font-medium tracking-tighter text-balance sm:text-5xl"
        >
          {{ content.title }}
        </h1>

        <p
          v-if="content.description"
          class="text-muted-foreground max-w-xl text-base tracking-tight text-pretty sm:text-lg"
        >
          {{ content.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const content = computed(() => useContentStore().components.hero);
</script>
