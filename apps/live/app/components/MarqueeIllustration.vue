<template>
  <div class="relative isolate overflow-hidden">
    <div
      class="relative z-10 flex aspect-[8/1] h-[140px] animate-[marquee_24s_linear_infinite] items-center xl:h-[160px] 2xl:h-[200px] 3xl:h-[240px]"
    >
      <NuxtImg
        v-for="index in 2"
        :key="index"
        src="/img/kv/hero-img.svg"
        alt=""
        width="3200"
        height="400"
        class="pointer-events-none h-full w-full select-none object-cover"
      />
    </div>

    <div
      class="relative inset-0 bottom-0 z-20 -mt-12 flex items-end justify-between lg:-mt-16"
    >
      <NuxtImg
        src="/img/kv/speakers.svg"
        alt=""
        class="pointer-events-none h-36 w-auto -translate-x-[10%] select-none lg:h-44"
      />

      <button
        class="absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 items-center justify-center rounded-full bg-white/70 p-4 backdrop-blur transition active:scale-95 dark:bg-gray-950/60"
      >
        <KVLoveMelody class="h-7 text-black dark:text-white lg:h-8" />
      </button>

      <NuxtImg
        src="/img/kv/trees.svg"
        alt=""
        class="pointer-events-none h-32 w-auto translate-x-[10%] select-none lg:h-40"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
@reference "tailwindcss";
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
