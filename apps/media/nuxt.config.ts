export default defineNuxtConfig({
  extends: ["../../layers/base"],

  css: ["~/assets/css/app.css"],

  runtimeConfig: {
    public: {
      siteUrl: "https://panoramamedia.co.id",
      blogUsernames: "pm.blog",
    },
  },

  app: {
    head: {
      title: "Panorama Media",
    },
  },

  colorMode: { preference: "light", fallback: "light" },

  site: {
    url: "https://panoramamedia.co.id",
    name: "Panorama Media",
  },

  schemaOrg: {
    enabled: true,
  },

  gtag: {
    tags: [{ id: "G-4ZNWF3G5DM" }],
  },

  i18n: {
    baseUrl: "https://panoramamedia.co.id",
  },

  routeRules: {
    "/blog/**": { redirect: "/news/**", statusCode: 301 },
  },

  sitemap: {
    urls: [
      "/",
      "/about",
      "/products",
      "/brands",
      "/events",
      "/faq",
      "/contact",
      "/news",
    ],
  },

  nitro: {
    preset: "cloudflare-pages",
  },
});
