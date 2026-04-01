<template>
  <div
    class="relative rounded-3xl border border-gray-200 px-4 pb-8 pt-10 dark:border-gray-800 sm:pt-12 3xl:px-6"
  >
    <div
      class="absolute inset-x-0 top-0 flex -translate-y-1/2 items-center justify-center"
    >
      <span
        class="rounded-2xl border border-gray-200 bg-white px-4 py-2 font-semibold tracking-tight text-black dark:border-gray-800 dark:bg-gray-950 dark:text-white"
        >Gallery</span
      >
    </div>

    <div class="gallery-preview relative">
      <div class="relative">
        <client-only>
          <vue-picture-swipe
            :items="selectedImages"
            @open="hideScrollbar"
            @close="showScrollbar"
          ></vue-picture-swipe>
        </client-only>
      </div>

      <div class="absolute bottom-0 right-0 w-1/4">
        <nuxt-link
          to="/gallery"
          class="mx-0.5 my-0.5 flex aspect-square items-center justify-center bg-gray-100 text-center text-sm tracking-tight text-black transition hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
        >
          View more
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const gallery = useGalleryStore();
const imageObjects = gallery.images.map((image) => ({
  src: `/img/gallery/${image}`,
  thumbnail: `/img/gallery/thumb/${image}`,
  w: 1600,
  h: 900,
}));
const selectedImages = imageObjects.slice(0, 19);

const hideScrollbar = () => {
  document.querySelector("html").classList.add("no-scrollbar");
};

const showScrollbar = () => {
  document.querySelector("html").classList.remove("no-scrollbar");
};
</script>

<style lang="scss">
@reference "tailwindcss";
.gallery-preview .my-gallery {
  @apply grid grid-cols-4;

  & .gallery-thumbnail {
    @apply mx-0.5 my-0.5 aspect-square;

    & img {
      @apply h-full w-full bg-gray-100 object-cover dark:bg-gray-900;
    }
  }
}
</style>
