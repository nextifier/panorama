<template>
  <div v-if="ticketsCopy?.length" class="grid grid-cols-1 gap-y-10 lg:gap-y-16">
    <div
      v-for="(ticketCategory, index) in ticketsCopy"
      :key="index"
      :id="ticketCategory.slug"
      class="scroll-mt-navbar"
    >
      <div class="grid grid-cols-1 divide-y">
        <div
          v-for="(ticket, index) in ticketCategory.list"
          :id="ticket.slug"
          class="scroll-mt-navbar"
        >
          <div class="group flex flex-col py-5">
            <div class="flex flex-col items-start gap-y-1">
              <nuxt-link
                :to="ticket.disableLink ? '' : ticket.button_url"
                class="font-condensed text-3xl !leading-[0.9] text-black dark:text-white"
                >{{ ticket.name }}</nuxt-link
              >

              <div class="flex w-full items-center gap-x-3">
                <div>
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
                      class="h-1.5 w-px bg-gray-300 dark:bg-gray-700"
                    ></span>

                    <div>
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

                  <LoadingChaoticOrbit v-else class="" />
                </div>
              </div>
            </div>

            <div
              class="relative mt-1.5 flex flex-grow-0 items-center justify-between gap-x-3"
            >
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
                  class="flex items-center gap-x-1 rounded-2xl p-2.5 text-sm font-semibold tracking-tight text-white transition active:scale-95"
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
