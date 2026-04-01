<template>
  <div class="py-10 lg:py-16">
    <div
      class="container prose prose-sm prose-yellow max-w-xl break-words dark:prose-invert sm:prose"
    >
      <h1 class="section-title !mb-6 text-center font-semibold">
        Ticket Policy
      </h1>

      <ul>
        <li v-for="(item, index) in terms" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
usePageMeta("ticketPolicy");

const terms = [
  "Tickets are valid only for the specified event, date, time, and value.",
  "E-ticket will be delivered by email.",
  "Tickets will be exchanged in the form of wristbands at the venue upon re-registration.",
  "All ticket sales are final. There are no refunds and no exchanges.",
  "Panorama Live only responsible for tickets that are purchased through our official ticket platform. Any tickets acquired from unauthorized sellers or secondary markets outside our official ticketing platform are done so at your own risk.",
  "The ticket holder must follow the event rules and regulations, including codes of conduct or instructions provided by the organizer or venue staff.",
  "Lost and stolen tickets may not be replaced.",
  "Do not take photos/screenshots of online e-tickets and upload them to social media to avoid taking data or e-tickets from other people.",
  "Tickets cannot be transferred to other people who are not registered when purchasing the ticket.",
];
</script>
