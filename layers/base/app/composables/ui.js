import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", {
  state: () => ({
    isEmbedVideoDialogOpen: false,
    embedVideoSrc: null,
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
  },
});
