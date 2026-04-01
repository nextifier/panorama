import { defineStore } from "pinia";

export const useContentStore = defineStore("content", {
  state: () => ({
    pages: {
      home: {
        title: "Panorama Live: Event Seru, Galau, dan Penuh Cinta!",
        description:
          "Selamat datang di Panorama Live! Temukan acara seru yang bikin galau, jatuh cinta, dan semua rasa. Yuk, cek event-event keren yang siap bikin kamu terpukau!",
        ogImage: "/og/og-home.jpg",
        withoutTitleTemplate: true,
      },
      about: {
        title: "About Panorama Live",
        description:
          "Learn more about Panorama Live, your destination for exciting live events, concerts, and experiences.",
      },
      events: {
        title: "Events",
        description:
          "Discover upcoming and past events by Panorama Live. From concerts to festivals, find the perfect event for you.",
      },
      contact: {
        title: "Contact us",
        description:
          "Get in touch with Panorama Live for event inquiries, partnerships, and more.",
        ogImage: "/og/og-contact.jpg",
      },
      faq: {
        title: "FAQ",
        description: `Find answers to frequently asked questions about ${useAppConfig().app.name}.`,
      },
      links: {
        title: "Links",
        description: "Explore our collection of essential links.",
      },
      news: {
        title: "News",
        description:
          "Stay updated with the latest news and updates from Panorama Live.",
      },
      terms: {
        title: "Terms of Service",
        description: "",
      },
      privacy: {
        title: "Privacy Policy",
        description: "",
      },
      ticket: {
        title: "Tickets",
        description: "Get your tickets for upcoming Panorama Live events.",
      },
      eventPolicy: {
        title: "Event Policy",
        description: "Read the event policy for Panorama Live events.",
      },
      ticketPolicy: {
        title: "Ticket Policy",
        description:
          "Read the ticket policy for Panorama Live events.",
      },
    },

    components: {
      hero: {
        title: "Event Seru, Galau, dan Penuh Cinta!",
        description:
          "Temukan acara seru yang bikin galau, jatuh cinta, dan semua rasa. Yuk, cek event-event keren yang siap bikin kamu terpukau!",
        cta: {},
        announcements: [],
      },

      postSlider: {
        title: {
          default: "Latest Updates",
          morePosts: "You might also like",
        },
      },

      contact: {
        title: "Contact us",
        description:
          "Get in touch with us for event inquiries, partnerships, and more.",
      },

      faq: {
        title: "Frequently Asked Questions",
        description: "Find answers to common questions about our events.",
        emptyStateDescription:
          "We are gathering commonly asked questions. Please come back later.",
        contactTitle: "Have any questions? Just send it to us!",
      },

      links: {
        title: "Links",
        list: [],
      },
    },
  }),

  getters: {
    getMetaByKey: (state) => (key) => {
      return state.pages[key] || null;
    },
  },
});
