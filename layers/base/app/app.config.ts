export default defineAppConfig({
  app: {
    name: "",
    shortName: "",
    projectUsername: "",
    url: "",
    company: {
      name: "",
      address: "",
    },
  },

  settings: {
    header: {
      logoClass: "h-6 text-primary",
    },
    footer: {
      logoClass: "h-8 text-primary",
    },
    blog: {
      showPostCardAuthor: false,
      showPostCardExcerpt: false,
    },
    ogImage: {
      isDarkMode: false,
    },
    terms: {
      lastUpdate: "",
    },
  },

  contact: {
    email: "",
    whatsapp: "",
    whatsappMarketing: "",
  },

  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    tiktok: "",
    x: "",
  },

  contactLinks: {} as Record<string, { label: string; path: string }>,
  socialLinks: {} as Record<
    string,
    { label: string; path: string; iconName: string }
  >,

  routes: {
    header: [] as any[],
    dialog: [] as any[],
    footer: [] as any[],
  },
});
