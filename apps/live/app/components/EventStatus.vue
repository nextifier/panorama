<template>
  <div class="flex items-center justify-center">
    <Spinner v-if="!eventStatus" />

    <div
      v-else-if="eventStatus.toLowerCase() === 'upcoming'"
      class="flex items-center gap-x-2"
    >
      <span
        v-if="props.countdownType == 'inline'"
        class="relative flex size-2 sm:size-2.5"
      >
        <span
          class="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-blue-600 opacity-75"
        ></span>
        <span
          class="relative inline-flex size-2 rounded-full bg-blue-600 sm:size-2.5"
        ></span>
      </span>

      <span class="inline tracking-tight text-black dark:text-white">
        <Countdown
          textBeforeCountdown="The event starts in"
          :countdownDate="startTime"
          :countdownType="countdownType"
        />
      </span>
    </div>

    <div
      v-else-if="eventStatus.toLowerCase() === 'live'"
      class="flex h-full items-end gap-x-2"
    >
      <LiveAnimation />

      <span class="uppercase text-black dark:text-white">Live </span>
    </div>

    <div
      v-else-if="eventStatus.toLowerCase() === 'completed'"
      class="flex h-full items-end gap-x-1"
    >
      <IconCompleted class="size-5 text-green-500" />

      <span class="text-sm uppercase text-black dark:text-white"
        >Completed
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  countdownType: {
    type: String,
    default: "inline", // Available values: "box", "inline"
  },
  startTime: Date,
  endTime: Date,
});

const eventStatus = ref("");

onMounted(() => {
  setInterval(() => {
    if (
      props.startTime &&
      props.endTime &&
      eventStatus.value.toLowerCase() !== "completed"
    ) {
      let now = new Date();
      if (now < props.startTime) {
        eventStatus.value = "upcoming";
      } else if (props.startTime < now && now < props.endTime) {
        eventStatus.value = "live";
      } else if (props.endTime < now) {
        eventStatus.value = "completed";
      }
    }
  }, 1000);
});
</script>

<style lang="scss" scoped></style>
