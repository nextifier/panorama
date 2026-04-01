export default defineNuxtConfig({
  extends: ["../../layers/base"],

  css: ["~/assets/css/app.css"],

  runtimeConfig: {
    public: {
      siteUrl: "https://panoramaevents.id",
      blogUsernames: "pe.blog",
    },
  },

  app: {
    head: {
      title: "Panorama Events: HR-Driven Corporate Outings for Team Growth",
    },
  },

  colorMode: { preference: "light", fallback: "light" },

  site: {
    url: "https://panoramaevents.id",
    name: "Panorama Events",
  },

  image: {
    cloudflare: {
      baseURL: "https://panoramaevents.id",
    },
  },

  i18n: {
    baseUrl: "https://panoramaevents.id",
  },

  schemaOrg: {
    enabled: true,
  },

  gtag: {
    tags: [
      { id: "G-343DPRDD5M" },
      // { id: "AW-17143448749" },
    ],
  },

  routeRules: {
    "/blog/**": { redirect: "/news/**", statusCode: 301 },
  },

  sitemap: {
    urls: ["/", "/about", "/services", "/events", "/faq", "/contact", "/news"],
  },

  nitro: {
    preset: "cloudflare-pages",
  },
});
