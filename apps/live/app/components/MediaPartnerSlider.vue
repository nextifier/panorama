<template>
  <div
    v-if="mediaPartners?.length"
    class="flex flex-col items-center justify-center gap-y-2"
  >
    <span class="tracking-tight">Media Partners</span>

    <Swiper
      id="media-partners-slider"
      ref="mediaPartnersSlider"
      class="slider-with-margin-on-first-and-last-item w-full"
      :modules="[SwiperAutoplay, SwiperMousewheel, SwiperFreeMode]"
      slidesPerView="auto"
      :spaceBetween="2"
      :loop="true"
      :grabCursor="true"
      :centerInsufficientSlides="true"
      :mousewheel="{
        forceToAxis: true,
      }"
      :freeMode="true"
      :autoplay="{
        delay: 1,
        disableOnInteraction: false,
      }"
      :speed="4000"
    >
      <SwiperSlide
        v-for="(item, index) in mediaPartners"
        :key="index"
        class="!w-auto"
      >
        <div class="aspect-[3/2] h-20 sm:h-24">
          <NuxtImg
            :src="`/img/credits/media-partners/${item}`"
            alt=""
            class="pointer-events-none h-full w-full select-none object-contain dark:brightness-90 dark:contrast-200 dark:grayscale dark:invert-[75%]"
            width="300"
            height="200"
            loading="lazy"
            format="webp"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
const mediaPartners = usePartnerStore().media;
const mediaPartnersSlider = ref(null);
</script>

<style>
#media-partners-slider .swiper-wrapper {
  transition-timing-function: linear !important;
}
</style>
