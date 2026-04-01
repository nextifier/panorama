<template>
  <section id="hero" class="overflow-hidden">
    <div class="container">
      <div class="flex flex-col items-center justify-center text-center">
        <Announcement class="mb-4" />

        <div>
          🌟
          <span
            class="bg-gradient-to-r from-orange-400 to-rose-600 bg-clip-text font-medium tracking-tight text-transparent"
            >Exclusive Shows & Festival</span
          >
          🎉
        </div>

        <h1 id="hero-headline" class="section-title mt-1 inline text-center">
          Bawa Semua Rasa Kamu ke Sini: Dari Patah Hati
          <NuxtImg
            src="/img/kv/patah-hati.svg"
            alt=""
            class="pointer-events-none hidden h-[1.25em] select-none align-text-bottom lg:inline"
            width="183.51"
            height="198.38"
          />
          Sampai Cinta Mati
          <NuxtImg
            src="/img/kv/cinta-mati.svg"
            alt=""
            class="pointer-events-none hidden h-[1.25em] select-none align-text-bottom lg:inline"
            width="354.1"
            height="176.37"
          />
        </h1>

        <p class="mt-3 max-w-screen-md text-base tracking-tight sm:text-xl">
          Nggak peduli kamu lagi
          <span class="font-semibold italic">galau</span> atau lagi
          <span class="font-semibold italic">berbunga-bunga</span>, di sini
          tempatnya
          <span class="font-semibold italic">semua rasa kumpul jadi satu</span>.
          Yuk, seru-seruan bareng kita!
        </p>

        <div
          class="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 lg:mt-8"
        >
          <!-- <nuxt-link
            to="/ticket"
            class="flex items-center justify-center rounded-[1.25rem] bg-black p-4 text-center font-semibold tracking-tight text-white transition hover:bg-opacity-80 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-opacity-80"
            v-ripple
            >Beli tiket</nuxt-link
          >
          <nuxt-link
            to="/events"
            class="flex items-center justify-center rounded-[1.25rem] p-4 text-center font-semibold tracking-tight text-black transition hover:bg-gray-100 hover:bg-opacity-80 active:scale-95 dark:text-white dark:hover:bg-gray-900 dark:hover:bg-opacity-80"
            v-ripple
            >Lihat semua event</nuxt-link
          > -->

          <nuxt-link
            to="/events"
            class="flex items-center justify-center rounded-[1.25rem] bg-black p-4 text-center font-semibold tracking-tight text-white transition hover:bg-opacity-80 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-opacity-80"
            v-ripple
            >Lihat semua event</nuxt-link
          >
        </div>
      </div>
    </div>

    <MarqueeIllustration class="mt-10" />
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
