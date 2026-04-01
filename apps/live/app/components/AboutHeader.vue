<template>
  <div
    class="flex flex-col items-center text-center lg:items-start lg:text-left"
  >
    <span
      class="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text uppercase tracking-wide text-transparent lg:pl-1"
      >About Us</span
    >

    <h1
      class="mt-2.5 text-balance text-4xl font-semibold !leading-[1.2] tracking-tighter text-black dark:text-white xs:text-5xl sm:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
    >
      Crafting Moments, Building Dreams✨
    </h1>

    <div
      class="mt-6 aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 lg:mt-8 lg:rounded-3xl"
    >
      <NuxtImg
        src="/img/about-img.jpg"
        alt="About Panorama Live"
        class="pointer-events-none h-full w-full select-none object-cover"
        loading="lazy"
        sizes="100vw lg:800px"
        width="960"
        height="540"
        format="webp"
      />
    </div>
  </div>
</template>
