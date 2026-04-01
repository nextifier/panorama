import { defineStore } from "pinia";

export const usePartnerStore = defineStore("partners", {
  state: () => ({
    partnerCategories: [
      // {
      //   category: "Sponsored by",
      //   fullWidth: true,
      //   list: [
      //     {
      //       name: "wondr by BNI",
      //       img: "/img/credits/sponsor/wondr-by-bni.svg",
      //       link: "https://wondr.bni.co.id/",
      //     },
      //   ],
      // },
    ],

    media: [],
  }),
});
