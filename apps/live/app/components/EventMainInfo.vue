<template>
  <div class="flex flex-col items-start">
    <EventStatus
      class="h-[1.5em]"
      :startTime="new Date(props.event.starts_in)"
      :endTime="new Date(props.event.ends_in)"
    />

    <!-- <div v-if="props.event.status">
      <div
        v-if="props.event.status.toLowerCase() === 'upcoming'"
        class="flex items-center gap-x-2"
      >
        <span class="relative flex size-2 sm:size-2.5">
          <span
            class="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-blue-600 opacity-75"
          ></span>
          <span
            class="relative inline-flex size-2 rounded-full bg-blue-600 sm:size-2.5"
          ></span>
        </span>

        <span class="inline tracking-tight text-black dark:text-white"
          >Event akan dimulai
          {{ $dayjs().to($dayjs(new Date(props.event.starts_in))) }}</span
        >
      </div>

      <div
        v-else-if="props.event.status.toLowerCase() === 'live'"
        class="flex h-full items-end gap-x-2"
      >
        <LiveAnimation />

        <span class="uppercase text-black dark:text-white">Live </span>
      </div>

      <div
        v-else-if="props.event.status.toLowerCase() === 'completed'"
        class="flex h-full items-end gap-x-1"
      >
        <IconCompleted class="size-5 text-green-500" />

        <span class="text-sm uppercase text-black dark:text-white"
          >Completed
        </span>
      </div>
    </div> -->

    <h1
      class="mt-4 text-3xl font-bold !leading-[1.25] tracking-tighter text-black dark:text-white sm:mt-3 sm:text-4xl xl:text-5xl"
    >
      {{ props.event.title }}
    </h1>

    <div v-if="props.event.categories?.length" class="mt-2.5">
      <div class="flex gap-1">
        <span
          v-for="(category, index) in props.event.categories"
          :key="index"
          class="text-nowrap rounded-md bg-gray-100 px-2 py-1 text-xs tracking-tight dark:bg-gray-900 sm:text-sm"
          >{{ category }}</span
        >
      </div>
    </div>

    <div class="mt-4 grid w-full grid-cols-2 gap-2 lg:mt-6">
      <div
        v-if="props.event.date"
        class="event-info-card bg-gray-100 text-black dark:bg-gray-900 dark:text-white"
      >
        <span class="info-label">
          <IconCalendar
            class="info-icon text-indigo-600 dark:text-indigo-500"
          />
          <span class="info-label-text">Date</span>
        </span>
        <span class="info-value">{{ props.event.date }}</span>
      </div>

      <div
        v-if="props.event.time"
        class="event-info-card bg-gray-100 text-black dark:bg-gray-900 dark:text-white"
      >
        <span class="info-label">
          <IconTime class="info-icon text-green-600 dark:text-green-500" />
          <span class="info-label-text">Time</span>
        </span>
        <span class="info-value">{{ props.event.time }}</span>
      </div>

      <nuxt-link
        :to="props.event.locationMap ?? ''"
        target="_blank"
        v-if="props.event.location"
        class="event-info-card group bg-gray-100 text-black transition duration-150 hover:bg-rose-600 hover:text-white active:scale-95 dark:bg-gray-900 dark:text-white dark:hover:bg-rose-600 dark:hover:text-white"
      >
        <span class="info-label">
          <IconLocation
            class="info-icon text-rose-600 transition duration-150 group-hover:text-white dark:text-rose-500 dark:group-hover:text-white"
          />
          <span class="info-label-text">Location</span>
        </span>
        <span class="info-value">{{ props.event.location }}</span>
      </nuxt-link>

      <nuxt-link
        :to="props.event.locationMap ?? ''"
        target="_blank"
        v-if="props.event.hall"
        class="event-info-card group bg-gray-100 text-black transition duration-150 hover:bg-blue-600 hover:text-white active:scale-95 dark:bg-gray-900 dark:text-white dark:hover:bg-blue-600 dark:hover:text-white"
      >
        <span class="info-label">
          <IconHall
            class="info-icon text-blue-600 transition duration-150 group-hover:text-white dark:text-blue-500 dark:group-hover:text-white"
          />
          <span class="info-label-text">Hall</span>
        </span>
        <span class="info-value">{{ props.event.hall ?? "Coming Soon" }}</span>
      </nuxt-link>
    </div>

    <div
      v-if="props.event.in_conjunction_with?.list?.length"
      class="mt-6 flex items-center gap-x-2"
    >
      <div class="relative isolate flex flex-shrink-0 -space-x-3">
        <div
          class="z-20 aspect-square size-14 flex-shrink-0 overflow-hidden rounded-full border border-gray-200 bg-gray-100 dark:border-2 dark:border-gray-950 dark:bg-gray-900"
        >
          <NuxtImg
            src="/img/profile-pictures/panorama-live.jpg"
            alt="Panorama Live"
            class="h-full w-full object-contain"
            sizes="100px"
            format="webp"
            loading="lazy"
          />
        </div>

        <NuxtLink
          v-for="(partner, index) in props.event.in_conjunction_with.list"
          :key="index"
          :to="partner.link"
          target="_blank"
          :style="`z-index: ${props.event.in_conjunction_with.list.length - index}`"
          class="aspect-square size-14 flex-shrink-0 overflow-hidden rounded-full border border-gray-200 bg-gray-100 dark:border-2 dark:border-gray-950 dark:bg-gray-900"
        >
          <NuxtImg
            :src="partner.image"
            :alt="partner.name"
            class="h-full w-full object-contain"
            sizes="100px"
            format="webp"
            loading="lazy"
          />
        </NuxtLink>
      </div>

      <div class="tracking-tight">
        {{ props.event.in_conjunction_with.label }}
        <NuxtLink
          v-for="(partner, index) in props.event.in_conjunction_with.list"
          :key="index"
          :to="partner.link"
          target="_blank"
          class="font-semibold text-black dark:text-white"
        >
          <!-- Case for 2 items -->
          <template v-if="props.event.in_conjunction_with.list.length === 2">
            {{ partner.name }}
            <span v-if="index === 0"> & </span>
          </template>

          <!-- Case for more than 2 items -->
          <template v-else-if="props.event.in_conjunction_with.list.length > 2">
            <!-- Add comma between items -->
            <span
              v-if="
                index > 0 &&
                index < props.event.in_conjunction_with.list.length - 1
              "
              >,
            </span>
            <!-- Add ", and" before the last item -->
            <span
              v-if="index === props.event.in_conjunction_with.list.length - 1"
              >, and
            </span>
            {{ partner.name }}
          </template>

          <!-- Case for single item -->
          <template v-else>
            {{ partner.name }}
          </template>
        </NuxtLink>
      </div>
    </div>

    <div
      v-if="props.event.description_full"
      class="prose prose-zinc mt-8 break-words tracking-tight dark:prose-invert sm:prose-lg"
      v-html="props.event.description_full"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@reference "tailwindcss";
.event-info-card {
  @apply flex flex-col items-start justify-start gap-y-1.5 rounded-3xl px-3 py-6 @container sm:gap-y-2 sm:px-5 sm:py-8 3xl:px-5 3xl:py-10;

  & .info-label {
    @apply flex items-center gap-x-1;

    & .info-icon {
      @apply size-5 flex-shrink-0;
    }

    & .info-label-text {
      @apply text-sm tracking-tight;
    }
  }

  & .info-value {
    @apply text-base font-semibold tracking-tighter @[200px]:text-lg @[240px]:text-xl;
  }
}
</style>
