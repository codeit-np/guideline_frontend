import axiosApi from "~/config/axios";
import { defineStore } from "pinia";

export const useSlideStore = defineStore("slides", {
  state: () => {
    return {
      slides: {},
      loading: false,
    };
  },

  getters: {
    getSlides: (state) => state.slides,
  },

  actions: {
    async index() {
      try {
        this.loading = true;
        var response = await axiosApi.get("slides");
        if (response.status == 200) {
          this.slides = response.data.data;
        }
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
  },
});
