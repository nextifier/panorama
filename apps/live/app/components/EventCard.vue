<template>
  <div
    class="group grid grid-cols-1 gap-x-10 gap-y-4"
    :class="{
      'lg:grid-cols-2 lg:items-center': props.fullWidthOnDesktop,
    }"
  >
    <NuxtLink
      :to="`/${props.event.slug}`"
      class="relative block"
      :class="{
        'lg:group-even:order-last': props.fullWidthOnDesktop,
      }"
    >
      <NuxtImg
        :src="props.event.cover_image"
        :alt="props.event.title"
        class="h-full w-full rounded-2xl object-cover"
        sizes="100vw sm:600px lg:800px"
        width="1080"
        height="1350"
        loading="lazy"
        format="webp"
      />

      <InvertedBorderRadius location="bottom-right" buttonColor="soft" />
    </NuxtLink>

    <div class="flex flex-col">
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

      <EventStatus
        class="h-[1.5em] self-start"
        :startTime="new Date(props.event.starts_in)"
        :endTime="new Date(props.event.ends_in)"
      />

      <NuxtLink :to="`/${props.event.slug}`" class="mt-2">
        <h6
          class="text-lg font-bold !leading-[1.25] tracking-tighter text-black dark:text-white"
          :class="{
            'lg:text-5xl': props.fullWidthOnDesktop,
            'line-clamp-1': props.truncateTitle,
          }"
        >
          {{ props.event.title }}
        </h6>
      </NuxtLink>

      <div
        v-if="props.event.description_short && props.showDescription"
        class="mb-1 mt-2"
      >
        <p class="!leading-[1.6] tracking-tight sm:text-lg">
          {{ props.event.description_short }}
        </p>
      </div>

      <div v-if="props.event.categories?.length" class="relative mt-2.5">
        <div class="no-scrollbar flex gap-1 overflow-x-scroll pr-10">
          <span
            v-for="(category, index) in props.event.categories"
            :key="index"
            class="text-nowrap rounded-md bg-gray-100 px-2 py-1 text-xs tracking-tight dark:bg-gray-900 sm:text-sm"
            >{{ category }}</span
          >
        </div>

        <div
          class="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white dark:from-gray-950"
        ></div>
      </div>

      <div
        v-if="props.event.date || props.event.location"
        class="mt-4 flex flex-col gap-y-2"
      >
        <div v-if="props.event.date" class="flex items-center gap-x-2">
          <IconCalendar class="h-5 flex-shrink-0" />
          <span class="line-clamp-1 tracking-tight">{{
            props.event.date
          }}</span>
        </div>

        <div v-if="props.event.location" class="flex items-center gap-x-2">
          <IconLocation class="h-5 flex-shrink-0" />
          <span class="line-clamp-1 tracking-tight">{{
            props.event.location
          }}</span>
        </div>
      </div>

      <div v-if="props.event.guests?.length" class="relative mt-2.5">
        <div class="no-scrollbar flex -space-x-3 overflow-x-scroll pr-10">
          <div
            v-for="(guest, index) in props.event.guests"
            :key="index"
            class="aspect-square size-14 flex-shrink-0 overflow-hidden rounded-full border-2 border-white bg-gray-100 dark:border-gray-950 dark:bg-gray-900"
            :style="`z-index: ${props.event.guests.length - index}`"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <NuxtImg
                    :src="guest.img"
                    :alt="guest.name"
                    class="h-full w-full object-cover"
                    sizes="100px"
                    loading="lazy"
                    format="webp"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  {{ guest.name }}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div
          class="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white dark:from-gray-950"
        ></div>
      </div>

      <div class="mt-4 flex items-start justify-between">
        <div
          v-if="props.event.starting_price"
          class="flex flex-col items-start"
        >
          <span
            class="text-xs tracking-tight text-gray-500 dark:text-gray-400 sm:text-sm"
            >Mulai dari</span
          >
          <span
            class="text-base font-bold tracking-tight text-black dark:text-white sm:text-lg"
            >{{ props.event.starting_price }}</span
          >
        </div>

        <NuxtLink
          :to="`/${props.event.slug}`"
          class="rounded-xl p-3 tracking-tight transition active:scale-95"
          :class="{
            'font-medium text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900':
              props.event.status.toLowerCase() == 'completed',
            'bg-blue-600 font-bold text-white hover:bg-blue-700':
              props.event.status.toLowerCase() !== 'completed',
          }"
        >
          <span
            v-if="props.event.status.toLowerCase() == 'completed'"
            class="flex items-center gap-x-1"
          >
            <span>Event details</span>
            <IconArrowRight class="size-4" />
          </span>
          <span v-if="props.event.status.toLowerCase() !== 'completed'"
            >Cek event</span
          >
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
  fullWidthOnDesktop: {
    type: Boolean,
    default: false,
  },
  showDescription: {
    type: Boolean,
    default: false,
  },
  truncateTitle: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
