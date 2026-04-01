<template>
  <div id="event-gallery" class="pb-0.5">
    <div class="flex flex-col items-center px-4 text-center sm:px-0">
      <h1 class="section-title text-center">Gallery</h1>
    </div>

    <div
      class="mt-3 px-0.5 sm:container lg:mt-6 xl:max-w-[1400px] 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl"
    >
      <client-only>
        <vue-picture-swipe
          :items="imageObjects"
          @open="hideScrollbar"
          @close="showScrollbar"
        ></vue-picture-swipe>
      </client-only>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  galleryImages: {
    type: Array,
    required: true,
  },
  eventFolderName: {
    type: String,
    required: true,
  },
});

const imageObjects = props.galleryImages.map((image) => ({
  src: `/img/events/${props.eventFolderName}/gallery/${image}`,
  thumbnail: `/img/events/${props.eventFolderName}/gallery/${image}`,
  w: 1080,
  h: 1080,
}));

const hideScrollbar = () => {
  document.querySelector("html").classList.add("no-scrollbar");
};

const showScrollbar = () => {
  document.querySelector("html").classList.remove("no-scrollbar");
};
</script>

<style lang="scss">
@reference "tailwindcss";
#event-gallery .my-gallery {
  @apply grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3;

  & .gallery-thumbnail {
    @apply mx-0.5 my-0.5;

    & img {
      @apply h-full w-full object-cover sm:aspect-square;
    }
  }
}

img.pswp__img {
  @apply object-contain;
}
</style>
