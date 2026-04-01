<template>
  <div class="min-h-screen-offset flex flex-col justify-between">
    <div
      class="container flex flex-grow flex-col items-center justify-center sm:max-w-xl"
    >
      <h1
        class="text-balance text-center text-4xl font-extrabold leading-[1.25] tracking-tighter text-black dark:text-white sm:text-5xl sm:leading-[1.25]"
      >
        Pilih Show
      </h1>

      <div class="mt-6 grid w-full grid-cols-3 gap-1.5 sm:gap-3">
        <NuxtLink
          v-for="(event, index) in upcomingEvents"
          :key="index"
          :to="`/${event.slug}`"
          class="flex flex-col items-center gap-1.5 transition active:scale-95"
        >
          <div
            class="block aspect-[4/5] w-full flex-shrink-0 overflow-hidden rounded-xl bg-gray-100 transition duration-300 hover:z-10 hover:scale-105 dark:bg-gray-900"
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
          </div>

          <div>
            <h3
              class="text-center font-semibold !leading-tight tracking-tight text-black dark:text-white"
            >
              {{ event.shortTitle }}
            </h3>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div
      class="container flex flex-wrap items-center justify-between gap-3 py-6 sm:max-w-xl"
    >
      <NuxtLink
        :to="`https://www.instagram.com/${store.instagram}`"
        target="_blank"
        class="flex items-center gap-x-1.5 text-sm tracking-tight transition hover:text-black active:scale-95 dark:hover:text-white"
      >
        <IconInstagram class="size-4 flex-shrink-0" />
        <span>{{ store.instagram }}</span>
      </NuxtLink>

      <NuxtLink
        to="/"
        class="flex items-center gap-x-1.5 text-sm tracking-tight transition hover:text-black active:scale-95 dark:hover:text-white"
      >
        <IconWebsite class="size-4 flex-shrink-0" />
        <span>{{ store.website }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
usePageMeta("links");

const appConfig = useAppConfig();
const store = { instagram: appConfig.social.instagram, website: appConfig.app.shortName };

const events = useEventStore();
const upcomingEvents = events.getEventsByStatus("upcoming");

const links = [
  {
    label: "Guests",
    url: "/guests",
    openInNewTab: false,
    iconName: "star",
  },
  {
    label: "Tenants",
    url: "/tenants",
    openInNewTab: false,
    iconName: "shop",
  },
  {
    label: "Rundown",
    url: "/rundown",
    openInNewTab: false,
    iconName: "rundown",
  },
  {
    label: "Floor Plan",
    url: "",
    openInNewTab: true,
    iconName: "map",
  },
  {
    label: "Tickets",
    url: "/ticket",
    openInNewTab: false,
    iconName: "ticket",
  },
];
</script>
