<template>
  <SidebarProvider>
    <SidebarInset>
      <Header />
      <main class="flex-auto">
        <slot />
      </main>

      <Footer
        v-if="!['links'].some((n) => route.name?.toString().startsWith(n))"
      />

      <DialogInquiry />
      <!-- <DialogEmbedMedia /> -->
    </SidebarInset>
  </SidebarProvider>
</template>

<script setup>
const route = useRoute();
</script>
