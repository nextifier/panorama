<template>
  <div
    class="rounded-2xl lg:rounded-3xl bg-gray-50 text-black dark:bg-gray-900 dark:text-gray-300 pt-10 pb-4 sm:pt-12 sm:pb-6 xl:pt-16 xl:pb-10"
  >
    <div class="px-6 sm:px-8 xl:px-12 flex flex-col items-start">
      <h6 class="uppercase tracking-widest text-black dark:text-white">
        Values ✨
      </h6>

      <p class="mt-2.5 text-base sm:text-lg tracking-tight">
        Our core values stemmed from our SPIRIT, with each letter representing a
        strong identity of ourselves and what is important to us.
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

    <div class="px-4 sm:px-6 xl:px-10 mt-8">
      <div
        class="bg-white dark:bg-gray-800/40 rounded-2xl pr-6 sm:pr-8 py-8 flex items-start"
      >
        <div
          class="size-20 sm:size-24 -mt-1 sm:-mt-2 flex-shrink-0 flex items-center justify-center"
        >
          <client-only>
            <Vue3Lottie :animationData="growingPlant" class="w-full h-full" />
          </client-only>
        </div>

        <div class="flex flex-col items-start">
          <span
            class="font-semibold text-black dark:text-white tracking-tight text-base sm:text-lg"
            >We embrace
            <span class="uppercase text-green-500"
              >Green Initiatives</span
            ></span
          >

          <div class="flex flex-col gap-y-2 mt-2">
            <div class="flex gap-x-1">
              <IconCheck class="text-green-500 size-6 flex-shrink-0" />
              <p class="tracking-tight text-xs sm:text-sm !leading-normal">
                Eco-friendly venues to reduce carbon footprint, along with local
                and sustainable sourcing to minimize waste.
              </p>
            </div>

            <div class="flex gap-x-1">
              <IconCheck class="text-green-500 size-6 flex-shrink-0" />
              <p class="tracking-tight text-xs sm:text-sm !leading-normal">
                Green Team: Engage in team-building activities focused on
                environmental sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import growingPlant from "@/assets/lottie/growingPlant.json";

const items = ref([
  {
    title: "Synergy",
    description:
      "Complementing and taking advantage of our various strengths to achieve greater results.",
    icon: "share",
    color: "#22C55E",
  },
  {
    title: "Pursuite of Excellence",
    description: "Striving continuously to be the best in everything we do.",
    icon: "flash-circle",
    color: "#6366F1",
  },
  {
    title: "Integrity",
    description:
      "Fairness in business dealings and consistently respects the highest standard of business ethics.",
    icon: "category-2",
    color: "#F97316",
  },
  {
    title: "Reliability",
    description: "Going the extra-mile to consistently deliver as promised.",
    icon: "verify",
    color: "#3B82F6",
  },
  {
    title: "Innovative & Proactive",
    description:
      "Continuously seek for new ways to deliver unique services and values.",
    icon: "lamp-charge",
    color: "#EAB308",
  },
  {
    title: "Truly Care",
    description: "Being compassionate and bringing smiles to millions.",
    icon: "lovely",
    color: "#EC4899",
  },
]);
</script>

<style lang="scss" scoped></style>
