<template>
  <div v-if="event" class="relative pb-10 lg:pb-14 lg:pt-6">
    <div
      class="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center"
    >
      <div
        class="flex h-16 justify-center gap-x-1 rounded-full border border-gray-200 bg-white/70 p-1 shadow-soft-md backdrop-blur dark:border-white/10 dark:bg-gray-950/80 dark:shadow-none sm:p-1.5"
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button @click="router.back()" class="action-button">
                <IconArrowLeft class="h-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <span>Back</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button
                v-if="event.tickets?.length"
                @click="scrollToTickets"
                class="action-button"
              >
                <IconTicket class="h-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <span>Tickets</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button
                v-if="event.guests?.length"
                @click="scrollToGuests"
                class="action-button"
              >
                <IconStar class="h-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <span>Guests</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DialogResponsive modalName="sharePage">
          <template #trigger>
            <button class="action-button">
              <IconShare class="h-5" />
            </button>
          </template>

          <template #title>
            <div class="px-4">
              <div
                class="text-center text-lg font-semibold tracking-tight text-black dark:text-white sm:text-xl"
              >
                Share this event
              </div>
            </div>
          </template>

          <template #default>
            <div class="mt-3 px-4 pb-6">
              <UtilSharePage
                :title="event.title"
                :url="`${config.public.siteUrl}/${event.slug}`"
              />
            </div>
          </template>
        </DialogResponsive>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <button @click="scrollToTop" class="action-button">
                <IconArrowGoToTop class="h-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <span>Scroll to top</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>

    <div class="relative z-10">
      <div
        class="relative sm:container xl:max-w-[1400px] 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl"
      >
        <div
          class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 xl:grid-cols-12"
        >
          <div class="flex flex-col gap-y-10 xl:col-span-4">
            <div
              class="relative aspect-[4/5] w-full overflow-hidden border-gray-100 bg-gray-100 dark:border-gray-900 dark:bg-gray-900 sm:rounded-2xl lg:border"
            >
              <NuxtImg
                :src="event.cover_image"
                :alt="event.title"
                class="h-full w-full select-none object-cover"
                sizes="100vw sm:600px lg:800px"
                width="1080"
                height="1350"
                loading="lazy"
                format="webp"
              />
            </div>

            <div
              v-if="event.seating_plan"
              id="seating-plan"
              class="hidden flex-col items-center gap-y-2 text-center lg:flex"
            >
              <h2
                class="text-balance text-center text-4xl font-bold leading-[1.2] tracking-tighter text-black dark:text-white sm:text-4xl sm:leading-[1.2]"
              >
                Seating Plan
              </h2>

              <NuxtImg
                :src="event.seating_plan"
                alt="Seating Plan"
                class="mt-2 h-full w-full rounded-3xl border border-gray-200 px-4 py-4 dark:border-gray-800"
                width="1080"
                height="831"
                loading="lazy"
              />
            </div>
          </div>

          <div class="px-4 pt-2 sm:px-0 lg:pt-6 xl:col-span-4">
            <EventMainInfo :event="event" />
          </div>

          <div
            v-if="event.tickets?.length"
            class="flex flex-col gap-y-8 px-4 pt-4 sm:px-0 lg:col-span-2 lg:pt-2 xl:col-span-4"
          >
            <div
              v-if="event.seating_plan"
              id="seating-plan"
              class="flex flex-col items-center gap-y-2 text-center lg:hidden xl:items-start xl:text-left"
            >
              <h2 class="section-title">Seating Plan</h2>

              <NuxtImg
                :src="event.seating_plan"
                alt="Seating Plan"
                class="mt-1 h-full w-full rounded-3xl border border-gray-200 px-4 py-4 dark:border-gray-800"
                width="1080"
                height="831"
                loading="lazy"
              />
            </div>

            <Tickets
              :tickets="event.tickets"
              id="tickets"
              class="scroll-mt-navbar"
            />
          </div>
        </div>

        <div
          v-if="event.guests?.length"
          id="guests"
          class="scroll-mt-navbar mt-10 px-4 sm:px-0 lg:mt-16"
        >
          <h3 class="section-title text-center">Featuring</h3>

          <div
            class="mt-4 grid grid-cols-2 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6 lg:mt-8 lg:grid-cols-4"
          >
            <div
              v-for="(guest, index) in event.guests"
              :key="index"
              class="@container"
            >
              <div class="relative isolate aspect-square overflow-hidden">
                <div
                  class="absolute z-0 bg-gray-100 dark:bg-gray-900"
                  :class="
                    guest.isBgTransparent
                      ? 'inset-x-0 bottom-0 h-[93%] rounded-xl'
                      : 'inset-0'
                  "
                ></div>

                <NuxtImg
                  :src="guest.img"
                  :alt="guest.name"
                  class="relative z-10 h-full w-full object-cover"
                  :class="guest.isBgTransparent ? 'rounded-b-xl' : ''"
                  sizes="400px lg:600px"
                  format="webp"
                  loading="lazy"
                />
              </div>

              <div class="flex flex-col pt-1 sm:pt-2">
                <div class="flex items-start justify-between gap-x-1">
                  <div class="flex flex-col gap-y-0.5">
                    <span
                      class="text-base font-semibold !leading-[1.25] tracking-tight text-black @[300px]:text-xl dark:text-white"
                      >{{ guest.name }}</span
                    >

                    <span
                      v-if="guest.categories"
                      class="text-xs tracking-tight @[300px]:text-sm"
                      >{{ guest.categories.join(", ") }}</span
                    >
                  </div>

                  <div
                    v-if="
                      guest.appearanceDate?.date && guest.appearanceDate?.month
                    "
                    class="flex aspect-square w-11 flex-shrink-0 flex-col items-center justify-center gap-y-0.5 rounded-2xl bg-gray-100 text-center text-black dark:bg-gray-900 dark:text-white sm:w-14"
                  >
                    <span
                      class="font-semibold !leading-none tracking-tighter"
                      >{{ guest.appearanceDate.date }}</span
                    >
                    <span class="text-xs !leading-none">{{
                      guest.appearanceDate.month
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="event.rundownImages?.length"
          class="mt-10 px-4 sm:px-0 lg:mt-16"
        >
          <h3 class="section-title text-center">Rundown</h3>

          <div
            class="mt-4 grid grid-cols-1 gap-x-2 gap-y-6 sm:gap-x-4 sm:gap-y-6 lg:mt-8"
            :class="{
              'mx-auto max-w-screen-sm': event.rundownImages.length == 1,
              'lg:grid-cols-2': event.rundownImages.length == 2,
            }"
          >
            <div
              v-for="(item, index) in event.rundownImages"
              :key="index"
              class="flex flex-col items-center gap-y-3 text-center"
            >
              <NuxtImg
                :src="item.img"
                :alt="item.title"
                class="block h-full w-full rounded-2xl bg-gray-100 object-cover dark:bg-gray-900"
                sizes="400px sm:600px xl:960px"
                format="webp"
                loading="lazy"
                :width="item.w"
                :height="item.h"
              />

              <div>
                <span
                  class="text-base font-semibold !leading-[1.25] tracking-tight text-black dark:text-white sm:text-lg"
                  >{{ item.title }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <LazyEventGallery
          v-if="event.gallery?.length"
          :galleryImages="event.gallery"
          :eventFolderName="event.slug"
          class="mt-10 lg:mt-16"
        />
      </div>

      <Credits
        v-if="event.partners?.length"
        :partners="event.partners"
        class="py-16 lg:py-24"
      />

      <div v-if="otherEvents?.length" class="mt-10 lg:mt-16">
        <div class="container">
          <h2 class="section-title text-center">Cek event menarik lainnya</h2>
        </div>
        <LazyEventSlider :events="otherEvents" />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();

const events = useEventStore();
const event = events.getEventBySlug(route.params.slug);

const otherEvents = computed(() => {
  return events.list.filter(
    (event) =>
      event.slug !== route.params.slug &&
      event.status.toLowerCase() != "completed",
  );
});

const title = `${event.title} · ${useAppConfig().app.name}`;
const description = event.description_short;

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogUrl: config.public.siteUrl + route.fullPath,
  twitterCard: "summary_large_image",
});

defineOgImageComponent("Page", {
  headline: useAppConfig().app.name,
  title: title,
  description: description,
});

const showScrollButton = ref(false);

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollToTickets = () => {
  const ticketsSection = document.getElementById("tickets");
  if (ticketsSection) {
    ticketsSection.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToGuests = () => {
  const guestsSection = document.getElementById("guests");
  if (guestsSection) {
    guestsSection.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
@reference "tailwindcss";
.action-button {
  @apply flex aspect-square h-full items-center justify-center rounded-full bg-gray-200/50 text-black transition hover:bg-black hover:text-white active:scale-95 dark:bg-gray-800/50 dark:text-white dark:hover:bg-white dark:hover:text-black;
}
</style>
