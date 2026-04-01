export default defineNuxtConfig({
  extends: ["../../layers/base"],

  css: ["~/assets/css/app.css"],

  runtimeConfig: {
    public: {
      siteUrl: "https://panoramalive.id",
    },
  },

  app: {
    head: {
      title: "Panorama Live",
    },
  },

  colorMode: { preference: "dark", fallback: "dark" },

  fonts: {
    families: [
      {
        name: "PlusJakartaSans",
        src: "/fonts/PlusJakartaSans-VariableFont.woff2",
        weight: "200 800",
        display: "swap",
      },
    ],
  },

  site: {
    url: "https://panoramalive.id",
    name: "Panorama Live",
  },

  schemaOrg: {
    enabled: true,
  },

  gtag: {
    tags: [{ id: "G-B3WW3L7K6M" }],
  },

  i18n: {
    baseUrl: "https://panoramalive.id",
  },

  modules: ["@vite-pwa/nuxt"],

  pwa: {
    registerType: "autoUpdate",
    registerWebManifestInRouteRules: true,
    manifest: {
      name: "Panorama Live",
      short_name: "Panorama Live",
      description:
        "Selamat datang di Panorama Live! Temukan acara seru yang bikin galau, jatuh cinta, dan semua rasa.",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      icons: [
        {
          src: "icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
      ],
    },
    workbox: {
      navigateFallback: null,
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      type: "module",
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
    },
  },

  sitemap: {
    urls: ["/", "/about", "/events", "/contact"],
  },

  nitro: {
    preset: "cloudflare-pages",
  },
});
