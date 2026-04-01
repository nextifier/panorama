<template>
  <div class="py-10 lg:py-16">
    <div class="-2xl container">
      <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <AboutHeader />

        <div class="grid grid-cols-1 gap-5 self-end">
          <AboutWhatWeAre />
          <AboutOurPhilosophy />
        </div>

        <AboutVision />
        <AboutMission />
        <AboutValues />
        <AboutServiceSoul class="self-start" />
      </div>
    </div>

    <CareerSection class="pt-10 lg:pt-16" />
  </div>
</template>

<script setup>
usePageMeta("about");
</script>
