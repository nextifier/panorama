<template>
  <div
    class="rounded-2xl lg:rounded-3xl px-6 py-10 sm:px-8 sm:py-12 xl:px-12 xl:py-16 flex flex-col items-start bg-gray-50 text-black dark:bg-gray-900 dark:text-gray-300"
  >
    <h6 class="uppercase tracking-widest text-black dark:text-white">
      Service Soul ✨
    </h6>

    <p class="mt-2.5 text-base sm:text-lg tracking-tight">
      We are a service company and serving people is deeply rooted in our
      beliefs and actions. We believe that there should be a high standard in
      how everyone, especially us, should serve others.
    </p>

    <div class="grid grid-cols-1 gap-6 mt-8">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex items-start gap-x-4"
      >
        <IconSvgRender
          :name="item.icon"
          class="size-7 sm:size-8 flex-shrink-0"
          :style="`color: ${item.color};`"
        />
        <div class="flex flex-col gap-y-0.5 items-start">
          <span
            class="text-black dark:text-white font-semibold tracking-tight text-base sm:text-lg"
            >{{ item.title }}</span
          >
          <span
            class="text-sm sm:text-base tracking-tight text-gray-700 dark:text-gray-300"
            >{{ item.description }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = ref([
  {
    title: "Reliability",
    description: "Delivering as promised, consistently.",
    icon: "shield-tick",
    color: "#3B82F6",
  },
  {
    title: "Convenience",
    description: "Making things easy for customers.",
    icon: "like",
    color: "#EC4899",
  },
  {
    title: "Comfort",
    description: "Making customers feel good.",
    icon: "happyemoji",
    color: "#22C55E",
  },
  {
    title: "Fair Value",
    description: "Providing best-possible benefits.",
    icon: "tag",
    color: "#F43F5E",
  },
  {
    title: "Unique Experience",
    description: "Creating “one-of-a-kind” moments.",
    icon: "crown",
    color: "#6366F1",
  },
  {
    title: "Flexible Solutions",
    description: "Smartly addressing customers needs & expectations.",
    icon: "convertshape-2",
    color: "#84CC16",
  },
  {
    title: "Recognition",
    description: "Valuing customers by meaningful appreciation & respect.",
    icon: "star",
    color: "#EAB308",
  },
]);
</script>

<style lang="scss" scoped></style>
