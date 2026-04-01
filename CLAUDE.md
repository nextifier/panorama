# Panorama - Nuxt Layers Monorepo

## Overview

Monorepo berisi 3 website Panorama yang masing-masing consume API dari backend **PM One** (`api.pmone.id`). Kode shared ada di base layer, setiap app hanya berisi konfigurasi, aset, dan komponen/halaman unik.

**Backend**: Laravel 12 + PostgreSQL di `/Users/nextifier/Herd/pmone` (domain: `api.pmone.id`, dev: `localhost:8000`)
**Frontend**: Nuxt 4 monorepo di `/Users/nextifier/Frontend/panorama/` (deploy ke Cloudflare Pages per app)

## Architecture

```
panorama/
├── pnpm-workspace.yaml          # packages: layers/*, apps/*
├── package.json                  # Root: dev/build scripts for all 3 apps
├── layers/
│   └── base/                     # @panorama/base - semua shared code
│       ├── nuxt.config.ts        # Shared modules, runtime config, plugins
│       ├── package.json          # Semua shared dependencies
│       └── app/
│           ├── app.config.ts     # Default values (contract/schema)
│           ├── app.vue           # Root component
│           ├── assets/css/       # main.css (Tailwind v4)
│           ├── components/       # ~44 shared components
│           ├── composables/      # 12 shared composables
│           ├── layouts/          # default.vue
│           ├── lib/              # utils.ts (cn helper)
│           ├── pages/            # 8 shared pages
│           └── plugins/          # 9 shared plugins
└── apps/
    ├── media/                    # @panorama/media (panoramamedia.co.id)
    ├── events/                   # @panorama/events (panoramaevents.id)
    └── live/                     # @panorama/live (panoramalive.id)
```

## Dev Commands

```bash
pnpm dev:media     # Dev server for Panorama Media
pnpm dev:events    # Dev server for Panorama Events
pnpm dev:live      # Dev server for Panorama Live
pnpm build:media   # Build for Cloudflare Pages
pnpm build:events  # Build for Cloudflare Pages
pnpm build:live    # Build for Cloudflare Pages
pnpm build:all     # Build all 3 apps
```

## How Each App Works

Setiap app di `apps/*/` memiliki struktur minimal:

```
apps/media/
├── nuxt.config.ts              # extends: ["../../layers/base"]
├── package.json                # depends on @panorama/base workspace:*
├── .env                        # NUXT_PM_ONE_API_KEY
└── app/
    ├── app.config.ts           # App-specific configuration (WAJIB)
    ├── assets/css/app.css      # App-specific Tailwind @source directives
    ├── composables/content.js  # App-specific content store (override base)
    ├── components/
    │   ├── Hero.vue            # App-specific hero section (WAJIB override)
    │   ├── Logo.vue            # App-specific logo (WAJIB override)
    │   └── ...                 # App-specific components
    ├── pages/
    │   └── index.vue           # Custom home page (WAJIB override)
    └── public/                 # Logo, favicon, OG images
```

### Nuxt Auto-import Priority

File di app/ otomatis override file dengan nama sama dari base layer. Ini berlaku untuk components, composables, pages, dan public assets.

## 3 Apps Overview

| App | Domain | Color Mode | Unique Features |
|---|---|---|---|
| media | panoramamedia.co.id | light | Brand showcase, products, events, gallery |
| events | panoramaevents.id | light | Services page, testimonials, Disqus comments |
| live | panoramalive.id | light | PWA, ticketing, Lottie animations, GSAP |

## App Config Contract

`app.config.ts` di base layer mendefinisikan schema/defaults. Setiap app WAJIB override:

```ts
defineAppConfig({
  app: { name, shortName, projectUsername, url, company: { name, address } },
  settings: {
    header: { logoClass }, footer: { logoClass },
    blog: { showPostCardAuthor, showPostCardExcerpt },
    ogImage: { isDarkMode },
    terms: { lastUpdate }
  },
  contact: { email, whatsapp, whatsappMarketing },
  social: { instagram, facebook, linkedin, youtube, tiktok, x },
  contactLinks: Record<string, { label, path }>,
  socialLinks: Record<string, { label, path, iconName }>,
  routes: { header: [], dialog: [], footer: [] }
})
```

## Backend API Integration

Runtime config di base layer:
- `NUXT_PM_ONE_API_KEY` (server-side) - API key per app
- `NUXT_PUBLIC_SITE_URL` - App domain
- `NUXT_PUBLIC_API_URL` - Default `https://api.pmone.id` (prod), `http://localhost:8000` (dev)
- `NUXT_PUBLIC_BLOG_USERNAMES` - PM One project username for blog/news

Server routes di `layers/base/server/` proxy request ke PM One API.

## Key Technology Stack

| Category | Packages |
|---|---|
| Framework | Nuxt 4, Vue 3, Pinia |
| Styling | Tailwind CSS v4, shadcn-vue (reka-ui), tw-animate-css |
| Animation | GSAP 3, @formkit/auto-animate, canvas-confetti |
| Carousel | embla-carousel-vue + autoplay/auto-scroll/wheel-gestures |
| UI | vue-sonner (toast), vue-tippy (tooltips), vaul-vue (drawer), v-wave (ripple) |
| Images | @nuxt/image (Cloudflare provider in prod) |
| SEO | @nuxtjs/seo, nuxt-gtag |
| i18n | @nuxtjs/i18n (English default) |
| Icons | @nuxt/icon (hugeicons, lucide, ri) |
| Deployment | Cloudflare Pages (nitro preset: cloudflare-pages) |

## Shared Pages (Base Layer)

8 halaman tersedia dari base layer:

```
/                  # index.vue (setiap app WAJIB override)
/contact           # Contact form
/faq               # FAQ
/links             # Linktree-style page
/privacy           # Privacy policy
/terms             # Terms and conditions
/news              # Blog listing
/news/[slug]       # Blog detail
```

### Extra Pages per App

- **media**: `/about`, `/products`, `/brands`, `/brands/[slug]`, `/events`, `/events/[slug]`
- **events**: `/about`, `/services`, `/events`, `/events/[slug]`
- **live**: `/about`, `/ticket`, `/event-policy`, `/ticket-policy`, `/events`, `/events/[slug]`

## CRITICAL Gotchas

### 1. Hero.vue dan Logo.vue WAJIB Override

Base layer Hero.vue dan Logo.vue berisi placeholder. Setiap app **HARUS** punya Hero.vue dan Logo.vue sendiri di `app/components/` untuk override.

### 2. Content Store Override

Setiap app punya `app/composables/content.js` (Pinia store) yang override base layer. Berisi teks hero, section headings, page meta, dll.

### 3. Path Resolution di Layer nuxt.config

Relative paths di layer `nuxt.config.ts` resolve dari APP, bukan layer. Selalu gunakan absolute paths:

```ts
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));
css: [resolve(__dirname, "app/assets/css/main.css")],
shadcn: { componentDir: resolve(__dirname, "app/components/ui") },
```

### 4. app.config.ts Lokasi

Di Nuxt 4, `app.config.ts` harus di dalam `app/` directory:
- Benar: `apps/media/app/app.config.ts`
- Salah: `apps/media/app.config.ts`

### 5. Auto-imports di Layers

- Composable files di `composables/` auto-imported dari layers
- Subdirectory `composables/stores/` TIDAK auto-imported
- Store files harus langsung di `composables/` (bukan subdirectory)

### 6. Tailwind v4 @source di Layers

Tailwind v4 dengan `@tailwindcss/vite` TIDAK otomatis scan files dari Nuxt layers. Harus tambah explicit `@source` directives di main.css:

```css
@source "../../components/**/*.vue";
@source "../../composables/**/*.js";
@source "../../layouts/**/*.vue";
@source "../../pages/**/*.vue";
@source "../../plugins/**/*.js";
```

### 7. TypeScript Dependency

`typescript` harus ada di base layer `devDependencies` untuk Vue SFC compiler resolve imported types.

### 8. App Manifest Disabled

`experimental.appManifest` harus `false` di base layer untuk mencegah error 404 di dev mode.

## Deployment

Setiap app di-deploy ke Cloudflare Pages secara terpisah.
- Build command: `cd apps/<app> && pnpm build`
- Output directory: `apps/<app>/.output/public`
- Preset: `cloudflare-pages`

## Original Source Projects

| App | Original Path |
|---|---|
| media | ~/Frontend/panoramamedia-v4/ |
| events | ~/Frontend/panoramaevents-v4/ |
| live | ~/Frontend/panoramalive/ |

## Panorama Live Migration Notes

Panorama Live di-migrasi dari Nuxt 3.14 ke Nuxt 4. Perubahan yang diperlukan:
- Directory structure: root → `app/` folder
- radix-vue → reka-ui (via base layer)
- Tailwind CSS v3 (PostCSS) → Tailwind v4 (Vite plugin, via base layer)
- nuxt-swiper → embla-carousel-vue (via base layer)
- nuxt-icon v0.6 → @nuxt/icon v2 (via base layer)
- pinia v2 → pinia v3 (via base layer)
- dayjs-nuxt → manual dayjs plugin (via base layer)
- Old shadcn-nuxt → shadcn-nuxt 2.4 (via base layer)

Komponen Live yang menggunakan library lama (Swiper, radix-vue) perlu di-update secara manual untuk menggunakan API baru.

## Conventions

- Semua app menggunakan `nitro.preset: "cloudflare-pages"`
- Route rules standar: `/blog/** -> /news/**` (301)
- shadcn-vue components di `layers/base/app/components/ui/` (tanpa prefix)
- Icon sets: hugeicons (primary), lucide, ri
- Image optimization: Cloudflare provider (prod), ipx (dev), quality 85, webp format
- Navigation dikonfigurasi via `routes` di `app.config.ts` (header, dialog arrays)
- Color mode default: light (semua 3 apps)
