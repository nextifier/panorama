import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: () => ({
    appName: "Panorama Live",
    darkModeEnabled: false,
    email: "live@panoramamedia.co.id",
    whatsapp: "6281119220003",
    whatsappLabel: "+62 811-1922-0003",
    whatsappText: `Halo! Saya mendapat WhatsApp ini dari website Panorama Live. Mau tanya-tanya, boleh?`,
    instagram: "panoramalive.id",
    website: "panoramalive.id",
    showModal: {
      sharePage: false,
      teaserVideo: false,
    },
  }),
});
