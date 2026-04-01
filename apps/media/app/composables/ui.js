import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", {
  state: () => ({
    isEmbedVideoDialogOpen: false,
    embedVideoSrc: null,

    isContactDialogOpen: false,
    isEventGalleryDialogOpen: false,
  }),
  actions: {
    openEmbedVideoDialog(src) {
      this.embedVideoSrc = src;
      this.isEmbedVideoDialogOpen = true;
    },
    closeEmbedVideoDialog() {
      this.isEmbedVideoDialogOpen = false;
      this.embedVideoSrc = null;
    },

    openContactDialog() {
      this.isContactDialogOpen = true;
    },
    closeContactDialog() {
      this.isContactDialogOpen = false;
    },

    openEventGalleryDialog() {
      this.isEventGalleryDialogOpen = true;
    },
    closeEventGalleryDialog() {
      this.isEventGalleryDialogOpen = false;
    },
  },
});
