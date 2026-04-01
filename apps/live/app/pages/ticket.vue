<template>
  <div class="pb-12 pt-6 lg:pb-20 lg:pt-10">
    <div class="container">
      <div class="flex flex-col items-center justify-center text-center">
        <div>
          <span
            class="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text font-medium uppercase text-transparent"
            >All Tickets</span
          >
          ✨
        </div>

        <h1 id="hero-headline" class="section-title mt-1 text-center">
          Dapatkan Tiket Event Panorama Live di Sini!
        </h1>

        <p class="mt-3 max-w-screen-lg text-base tracking-tight sm:text-xl">
          Pilih event yang kamu suka, cek ketersediaan tiket, dan pesan sekarang
          juga sebelum kehabisan.
        </p>
      </div>

      <div
        id="event-list"
        class="scroll-mt-navbar mt-10 grid grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2 lg:mt-14 xl:grid-cols-3"
      >
        <div
          v-for="(event, index) in upcomingEvents"
          :key="index"
          class="flex flex-col"
        >
          <div class="flex items-start gap-x-2.5 3xl:gap-x-3">
            <NuxtLink
              :to="`/${event.slug}`"
              class="block aspect-[4/5] w-[20%] flex-shrink-0 overflow-hidden rounded-xl bg-gray-100 transition active:scale-95 dark:bg-gray-900"
            >
              <NuxtImg
                :src="event.cover_image"
                :alt="event.title"
                class="h-full w-full object-cover"
                sizes="100px sm:200px"
                width="1080"
                height="1350"
                loading="lazy"
                format="webp"
              />
            </NuxtLink>

            <div class="flex w-full flex-col">
              <NuxtLink :to="`/${event.slug}`" class="mt-1.5">
                <h6
                  class="!line-clamp-1 text-base font-bold !leading-[1.25] tracking-tighter text-black dark:text-white"
                >
                  {{ event.title }}
                </h6>
              </NuxtLink>

              <div
                v-if="event.date || event.location"
                class="mt-2 flex flex-col gap-y-2"
              >
                <div v-if="event.date" class="flex items-center gap-x-2">
                  <IconCalendar class="h-5 flex-shrink-0" />
                  <span class="line-clamp-1 text-sm tracking-tight">{{
                    event.date
                  }}</span>
                </div>

                <div v-if="event.location" class="flex items-center gap-x-2">
                  <IconLocation class="h-5 flex-shrink-0" />
                  <span class="line-clamp-1 text-sm tracking-tight">{{
                    event.location
                  }}</span>
                </div>
              </div>

              <NuxtLink
                :to="`/${event.slug}`"
                class="mt-2.5 flex items-center justify-center gap-x-1 self-end rounded-xl bg-gray-100 p-2.5 text-sm font-semibold tracking-tight text-black transition hover:bg-opacity-80 active:scale-95 dark:bg-gray-900 dark:text-white dark:hover:bg-opacity-80"
              >
                <span>Detail Event</span>
                <IconArrowUpRight class="h-3.5" />
              </NuxtLink>
            </div>
          </div>

          <TicketsSimple
            :tickets="event.tickets"
            class="scroll-mt-navbar mt-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
usePageMeta("ticket");

const events = useEventStore();
const upcomingEvents = events.getEventsByStatus("upcoming");

defineOptions({
  name: "ticket",
});
</script>
