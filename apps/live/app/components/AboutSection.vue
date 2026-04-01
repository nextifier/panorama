<template>
  <section id="about">
    <div class="container flex flex-col items-center text-center">
      <span>
        <span
          class="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text uppercase tracking-wide text-transparent"
          >About Us</span
        >
        ✨
      </span>
      <h2
        class="mt-2.5 text-balance text-4xl font-semibold !leading-[1.2] tracking-tighter text-black dark:text-white sm:text-5xl lg:text-6xl 2xl:text-7xl"
      >
        Crafting Moments, Building Dreams
      </h2>
      <div
        class="mt-4 max-w-3xl tracking-tight text-gray-600 dark:text-gray-400 lg:mt-6"
      >
        <p>
          At Panorama Live, we go beyond event planning. We craft experiences
          that resonate with your vision. With a legacy of excellence,
          innovation, and impeccable execution spanning over 20 years, discover
          why we are the preferred choice for those seeking exceptional event
          experiences.
        </p>
      </div>

      <div class="mt-8 flex items-center justify-center lg:mt-10">
        <nuxt-link to="/about" class="magnetic">
          <div class="relative transition-transform active:scale-95">
            <NuxtImg
              src="/img/decorative/about-circular-text.svg"
              alt=""
              class="animate-spin-clockwise pointer-events-none w-40 select-none dark:invert"
              width="160"
              height="160"
            />

            <div class="absolute inset-0 scale-[75%]">
              <NuxtImg
                src="/img/decorative/marble-gradient.webp"
                alt=""
                class="animate-spin-anticlockwise pointer-events-none w-full select-none"
                width="160"
                height="160"
                loading="lazy"
              />

              <div class="absolute inset-0 flex items-center justify-center">
                <IconArrowUpRight class="h-10 text-white" />
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style>
@keyframes spin-clockwise {
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-anticlockwise {
  to {
    transform: rotate(-360deg);
  }
}

.animate-spin-clockwise {
  animation: spin-clockwise 12s linear infinite;
}

.animate-spin-anticlockwise {
  animation: spin-anticlockwise 10s linear infinite;
}
</style>
