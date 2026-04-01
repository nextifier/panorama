import { defineStore } from "pinia";

export const useContentStore = defineStore("content", {
  state: () => ({
    pages: {
      home: {
        title: "",
        description: "",
        ogImage: "/og/og-home.jpg",
        withoutTitleTemplate: true,
      },
      contact: {
        title: "Contact us",
        description:
          "Need assistance or have questions? Reach out to us and we'll be happy to help.",
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
          "Stay updated with the latest insights, news, and trends. Read our blog for expert articles and updates.",
      },
      terms: {
        title: "Terms of Service",
        description: "",
      },
      privacy: {
        title: "Privacy Policy",
        description: "",
      },
    },

    components: {
      hero: {
        title: "",
        description: "",
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
          "Need assistance or have questions? Contact us and we'll get back to you.",
      },

      faq: {
        title: "Frequently Asked Questions",
        description:
          "Find answers to common questions about our services and products.",
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
    /**
     * Mengambil metadata untuk halaman tertentu berdasarkan kuncinya.
     * @param {object} state - State store.
     * @returns {function(string): object | null}
     */
    getMetaByKey: (state) => (key) => {
      return state.pages[key] || null;
    },
  },
});
