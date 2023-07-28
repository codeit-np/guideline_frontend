import axiosApi from "~/config/axios";
import { defineStore } from "pinia";

export const useGuideStore = defineStore("guides", {
  state: () => {
    return {
      guides: [],
      loading: false,
    };
  },

  getters: {
    getGuides: (state) => state.guides,
  },

  actions: {
    async index() {
      try {
        this.loading = true;
        var response = await axiosApi.get("guides");
        if (response.status == 200) {
          this.guides = response.data.data;
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },
  },
});
