<template>
  <div v-if="props.events">
    <Swiper
      id="event-slider"
      class="slider-with-margin-on-first-and-last-item mt-6 w-full rounded-2xl"
      :modules="[SwiperMousewheel, SwiperNavigation, SwiperFreeMode]"
      :navigation="{
        nextEl: '.btn-next-events',
        prevEl: '.btn-prev-events',
      }"
      slidesPerView="auto"
      :spaceBetween="0"
      :grabCursor="true"
      :mousewheel="{
        forceToAxis: true,
      }"
      :freeMode="false"
      :touchStartPreventDefault="false"
      :centerInsufficientSlides="true"
    >
      <SwiperSlide
        v-for="(event, index) in props.events.slice(0, 10)"
        :key="index"
        class="relative !h-auto"
      >
        <EventCard :event="event" :truncateTitle="true" />
      </SwiperSlide>
    </Swiper>

    <div class="container hidden lg:mt-4 lg:block">
      <div class="flex items-center justify-end gap-x-2">
        <button
          class="btn-prev-events flex aspect-square h-16 items-center justify-center rounded-full bg-gray-100 transition active:scale-95 dark:bg-gray-900"
          aria-label="previous"
        >
          <IconChevronLeft class="h-4" />
        </button>

        <button
          class="btn-next-events flex aspect-square h-16 items-center justify-center rounded-full bg-gray-100 transition active:scale-95 dark:bg-gray-900"
          aria-label="next"
        >
          <IconChevronRight class="h-4" />
        </button>

        <!-- <nuxt-link
          to="/events"
          class="flex aspect-square h-16 items-center justify-center rounded-full bg-black text-white transition hover:bg-gray-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          <IconGrid class="h-5" />
        </nuxt-link> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  events: Array,
});
</script>

<style lang="scss">
@reference "tailwindcss";
#event-slider {
  .swiper-slide {
    @apply w-[320px] rounded-2xl lg:w-[360px];

    &:not(:first-child) {
      @apply ml-6;
    }
  }
}
</style>
