<template>
  <div v-if="ticketsCopy?.length" class="grid grid-cols-1 gap-y-10 lg:gap-y-16">
    <div
      v-for="(ticketCategory, index) in ticketsCopy"
      :key="index"
      :id="ticketCategory.slug"
      class="scroll-mt-navbar"
    >
      <div
        class="flex flex-col items-center gap-y-2 text-center xl:items-start xl:text-left"
      >
        <h2 class="section-title">
          {{ ticketCategory.title }}
        </h2>

        <p
          v-if="ticketCategory.description"
          class="tracking-tight text-black dark:text-white"
        >
          {{ ticketCategory.description }}
        </p>

        <p
          class="text-balance text-xs !leading-normal tracking-tight sm:text-sm xl:text-pretty"
        >
          By continuing to purchase the ticket, you agree to
          <nuxt-link
            to="/ticket-policy"
            class="text-blue-600 hover:underline dark:text-blue-500"
            >Ticket Policy</nuxt-link
          >
          &
          <nuxt-link
            to="/event-policy"
            class="text-blue-600 hover:underline dark:text-blue-500"
            >Event Policy</nuxt-link
          >.
        </p>
      </div>

      <div
        class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-6 xl:grid-cols-1"
      >
        <div
          v-for="(ticket, index) in ticketCategory.list"
          :id="ticket.slug"
          class="scroll-mt-navbar overflow-hidden rounded-2xl"
        >
          <div
            class="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white transition-colors duration-100 dark:border-gray-700 dark:bg-gray-950"
            :class="{
              'hover:border-blue-600 hover:bg-blue-600/5 dark:hover:border-blue-600 dark:hover:bg-blue-600/10':
                ticket.status.toLowerCase() == 'available',
            }"
          >
            <div class="flex flex-grow flex-col px-4 pt-4 sm:px-6 sm:pt-6">
              <div class="flex items-center gap-x-2 sm:gap-x-3">
                <nuxt-link
                  :to="ticket.disableLink ? '' : ticket.button_url"
                  v-if="ticket.image"
                  class="block aspect-square w-16 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 lg:w-[4.5rem]"
                >
                  <NuxtImg
                    :src="ticket.image"
                    :alt="ticket.title"
                    class="h-full w-full object-cover"
                    sizes="250px"
                    width="250"
                    height="250"
                    loading="lazy"
                    format="webp"
                  />
                </nuxt-link>

                <div class="flex flex-col items-start gap-y-1">
                  <nuxt-link
                    :to="ticket.disableLink ? '' : ticket.button_url"
                    class="text-black dark:text-white"
                  >
                    <span
                      v-if="ticket.name"
                      class="font-condensed text-3xl !leading-[0.9]"
                      >{{ ticket.name }}</span
                    >
                    <span v-else class="text-base font-bold tracking-tight">{{
                      ticket.title
                    }}</span>
                  </nuxt-link>

                  <div
                    v-if="ticket.status"
                    class="flex items-center gap-x-1.5 text-xs"
                  >
                    <span class="relative flex aspect-square w-2">
                      <span
                        class="absolute inline-flex h-full w-full animate-ping-slow rounded-full opacity-75"
                        :class="{
                          'bg-green-500':
                            ticket.status.toLocaleLowerCase() == 'available',
                          'bg-yellow-400':
                            ticket.status.toLocaleLowerCase() == 'coming soon',
                          'bg-red-500':
                            ticket.status.toLocaleLowerCase() == 'sold out',
                        }"
                      ></span>
                      <span
                        class="relative inline-flex aspect-square w-2 rounded-full"
                        :class="{
                          'bg-green-500':
                            ticket.status.toLocaleLowerCase() == 'available',
                          'bg-yellow-400':
                            ticket.status.toLocaleLowerCase() == 'coming soon',
                          'bg-red-500':
                            ticket.status.toLocaleLowerCase() == 'sold out',
                        }"
                      ></span>
                    </span>
                    <span class="tracking-tight">{{ ticket.status }}</span>

                    <span
                      v-if="
                        (ticket.starts_in && ticket.showStartCountdownLabel) ||
                        (ticket.ends_in && ticket.showEndCountdownLabel)
                      "
                      class="h-1.5 w-px bg-gray-300 dark:bg-gray-700"
                    ></span>

                    <div
                      v-if="
                        (ticket.starts_in && ticket.showStartCountdownLabel) ||
                        (ticket.ends_in && ticket.showEndCountdownLabel)
                      "
                    >
                      <TooltipProvider
                        v-if="
                          ticket.starts_in && ticket.showStartCountdownLabel
                        "
                      >
                        <Tooltip>
                          <TooltipTrigger as-child>
                            <span class="text-xs tracking-tight">
                              <Countdown
                                :textBeforeCountdown="`Starts in`"
                                :countdownDate="new Date(ticket.starts_in)"
                            /></span>
                          </TooltipTrigger>
                          <TooltipContent>
                            {{
                              $dayjs(ticket.starts_in).format(
                                "MMMM D, YYYY [at] h:mm A",
                              )
                            }}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider
                        v-if="ticket.ends_in && ticket.showEndCountdownLabel"
                      >
                        <Tooltip>
                          <TooltipTrigger as-child>
                            <span class="text-xs tracking-tight">
                              <Countdown
                                :textBeforeCountdown="`Ends in`"
                                :countdownDate="new Date(ticket.ends_in)"
                            /></span>
                          </TooltipTrigger>
                          <TooltipContent>
                            {{
                              $dayjs(ticket.ends_in).format(
                                "MMMM D, YYYY [at] h:mm A",
                              )
                            }}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>

                  <Spinner v-else class="mt-1" />
                </div>
              </div>

              <div
                v-if="ticket.day_pass && ticket.entrance"
                class="mt-4 flex w-full items-center justify-between gap-x-2"
              >
                <span
                  v-if="ticket.day_pass"
                  class="line-clamp-1 flex h-full items-center justify-center rounded-full px-2.5 py-1.5 text-xs font-semibold !leading-none tracking-tight sm:text-sm"
                  :class="{
                    'gradient-gold text-white':
                      ticket.day_pass == 'Two-day pass',
                    'gradient-silver text-white':
                      ticket.day_pass == 'One-day pass',
                  }"
                  >{{ ticket.day_pass }}</span
                >

                <span
                  v-if="ticket.entrance"
                  class="line-clamp-1 flex h-full items-center gap-x-1.5 rounded-full bg-gray-100 px-2.5 py-1.5 text-xs tracking-tight text-black dark:bg-gray-900 dark:text-white sm:text-sm"
                >
                  <IconImport class="h-4 sm:h-5" />
                  <span>{{ ticket.entrance }}</span>
                </span>
              </div>

              <div
                v-if="ticket.benefits && ticket.benefits.length"
                class="mt-2 flex flex-col items-start"
              >
                <div class="mt-1.5 flex flex-col gap-y-1">
                  <div
                    v-for="(benefit, index) in ticket.benefits"
                    :key="index"
                    class="flex gap-x-2 sm:gap-x-3"
                  >
                    <IconCheck
                      class="h-4 flex-shrink-0 text-green-500 sm:h-5"
                    />
                    <span
                      class="text-xs !leading-normal tracking-tight sm:text-sm"
                      >{{ benefit }}</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <div
              class="relative mt-4 flex flex-grow-0 items-center justify-between gap-x-3 border-t border-dashed border-gray-200 px-5 py-2.5 dark:border-gray-700 sm:mt-6 sm:px-8 sm:py-4"
              :class="{
                'group-hover:border-blue-600 dark:group-hover:border-blue-600':
                  ticket.status.toLowerCase() == 'available',
              }"
            >
              <div
                class="absolute left-0 top-0 aspect-square h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white transition-colors duration-100 dark:border-gray-700 dark:bg-gray-950 sm:h-10"
                :class="{
                  'group-hover:border-blue-600 dark:group-hover:border-blue-600':
                    ticket.status.toLowerCase() == 'available',
                }"
              ></div>

              <div
                class="absolute right-0 top-0 aspect-square h-8 -translate-y-1/2 translate-x-1/2 rounded-full border border-gray-200 bg-white transition-colors duration-100 dark:border-gray-700 dark:bg-gray-950 sm:h-10"
                :class="{
                  'group-hover:border-blue-600 dark:group-hover:border-blue-600':
                    ticket.status.toLowerCase() == 'available',
                }"
              ></div>

              <div v-if="ticket.price" class="flex flex-col">
                <span
                  v-if="ticket.price_before_discounted"
                  class="text-xs text-red-500 line-through"
                  >{{ ticket.price_before_discounted }}</span
                >
                <span
                  class="text-base font-semibold tracking-tighter text-black dark:text-white"
                  >{{ ticket.price }}</span
                >
              </div>

              <div class="flex-shrink-0">
                <button
                  v-if="ticket.disableLink"
                  @click="
                    toast.info(
                      ticket.status.toLowerCase() == 'sold out'
                        ? 'Sorry, tiket sudah habis 🥲'
                        : 'Tiket akan segera hadir 🤩',
                      {
                        action: {
                          label: 'Okay',
                          onClick: (t) => toast.dismiss(t),
                        },
                      },
                    )
                  "
                  class="flex items-center gap-x-1 rounded-2xl p-2.5 font-semibold tracking-tight transition active:scale-95"
                  :class="{
                    'bg-red-600/10 text-red-700 dark:text-red-600':
                      ticket.status.toLowerCase() == 'sold out',
                    'gradient-gold':
                      ticket.status.toLowerCase() == 'available' &&
                      ticket.is_vip,
                    'bg-blue-600 text-white hover:bg-blue-700':
                      ticket.status.toLowerCase() == 'available' &&
                      !ticket.is_vip,
                    'bg-yellow-600/10 text-yellow-700 dark:text-yellow-600': ![
                      'available',
                      'sold out',
                    ].includes(ticket.status.toLowerCase()),
                  }"
                >
                  <span v-if="ticket.status.toLowerCase() == 'sold out'"
                    >Tiket habis</span
                  >
                  <span v-else-if="ticket.status.toLowerCase() == 'available'"
                    >Beli tiket</span
                  >
                  <span v-else>Segera hadir</span>
                </button>
                <nuxt-link
                  v-else
                  :to="ticket.button_url"
                  class="flex items-center gap-x-1 rounded-2xl p-2.5 font-semibold tracking-tight text-white transition active:scale-95"
                  :class="
                    ticket.is_vip
                      ? 'gradient-gold'
                      : 'bg-blue-600 hover:bg-blue-700'
                  "
                >
                  <span>{{ ticket.button_label }}</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toast } from "vue-sonner";

const props = defineProps({
  tickets: {
    type: Array,
    required: true,
  },
});

// Create a local copy of the tickets prop to modify
const ticketsCopy = ref(JSON.parse(JSON.stringify(props.tickets)));

onMounted(() => {
  const allTickets = ticketsCopy.value.reduce(
    (acc, category) => acc.concat(category.list),
    [],
  );

  setInterval(() => {
    const now = Date.now();

    allTickets.forEach((ticket) => {
      if (
        ticket.starts_in &&
        ticket.ends_in &&
        ticket.status.toLowerCase() !== "sold out"
      ) {
        // Convert string to Date object
        const startsIn = new Date(ticket.starts_in).getTime();
        const endsIn = new Date(ticket.ends_in).getTime();

        if (now < startsIn) {
          ticket.disableLink = true;
          ticket.showStartCountdownLabel = true;
          ticket.showEndCountdownLabel = false;
          ticket.status = "Coming soon";
        } else if (startsIn < now && now < endsIn) {
          ticket.disableLink = false;
          ticket.showStartCountdownLabel = false;
          ticket.showEndCountdownLabel = true;
          ticket.status = "Available";
        } else if (endsIn < now) {
          ticket.disableLink = true;
          ticket.showStartCountdownLabel = false;
          ticket.showEndCountdownLabel = false;
          ticket.status = "Sold out";
        }
      }
    });
  }, 1000);
});
</script>

<style lang="scss" scoped></style>
