<template>
  <section id="careers" class="container">
    <div
      class="flex flex-col items-center justify-center rounded-3xl bg-gray-50 px-4 py-16 text-center dark:bg-gray-900 sm:px-8 lg:py-24 xl:rounded-[64px]"
    >
      <span
        ><span
          class="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text uppercase tracking-wide text-transparent dark:from-blue-400 dark:to-indigo-400"
          >Careers </span
        >✨</span
      >

      <h3
        class="mt-2.5 text-balance text-4xl font-semibold !leading-[1.2] tracking-tighter text-black dark:text-white sm:text-5xl lg:text-6xl 2xl:text-7xl"
      >
        Join Our Creative Family
      </h3>

      <p class="mt-3 text-balance text-base tracking-tight sm:mt-4 sm:text-lg">
        Want to use your talent to build something that makes a difference to
        businesses, people and local societies around the world? Then you’ll
        love working here.
      </p>

      <nuxt-link
        to="mailto:hr@panoramamedia.co.id"
        target="_blank"
        class="glowing-button-indigo mt-8 rounded-full px-6 py-5 dark:hover:shadow-[0px_0px_60px_rgba(99,102,241,0.6),0px_0px_0px_4px_rgba(255,255,255,0.07),inset_0px_-4px_0px_rgba(0,0,0,0.2),inset_0px_1px_0px_rgba(255,255,255,0.4)] xl:mt-10"
      >
        <span class="text-base sm:text-lg">Join Our Team</span>
        <IconArrowUpRight class="h-4" />
      </nuxt-link>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@reference "tailwindcss";
.glowing-button-indigo {
  @apply flex items-center justify-center gap-1.5 bg-[radial-gradient(50%_50%_at_50%_100%,#6366f1_0%,#4338ca_100%)] font-semibold tracking-tight text-white shadow-[0px_0px_0px_4px_rgba(255,255,255,0.07),inset_0px_-4px_0px_rgba(0,0,0,0.2),inset_0px_1px_0px_rgba(255,255,255,0.4)] transition duration-200 hover:scale-105 active:scale-95;
}
</style>
