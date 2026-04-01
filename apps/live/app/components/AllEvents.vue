<template>
  <div>
    <div class="container">
      <div class="flex flex-col items-center justify-center text-center">
        <div>
          <span
            class="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text font-medium tracking-tight text-transparent"
            >All Events</span
          >
          ✨
        </div>

        <h1 id="hero-headline" class="section-title mt-1 text-center">
          Serunya Event Panorama Live: Bawa Semua Rasa Kamu di Sini!
        </h1>

        <p class="mt-3 max-w-screen-md text-base tracking-tight sm:text-xl">
          Lihat semua event seru dari Panorama Live yang siap bikin harimu lebih
          berwarna! Mulai dari konser, festival, hingga experience show yang
          bakal bikin kamu nggak mau pulang!
        </p>
      </div>

      <div
        id="event-list"
        class="scroll-mt-navbar mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-14 xl:grid-cols-3"
      >
        <EventCard
          v-for="(event, index) in events"
          :key="index"
          :event="event"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const events = useEventStore().list;
</script>

<style lang="scss" scoped></style>
