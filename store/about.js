import axiosApi from "~/config/axios";
import { defineStore } from "pinia";

export const useAboutStore = defineStore("about", {
  state: () => {
    return {
      about: {},
      loading: false,
    };
  },

  getters: {
    getAbout: (state) => state.about,
  },

  actions: {
    async index() {
      try {
        this.loading = true;
        var response = await axiosApi.get("about");
        if (response.status == 200) {
          this.about = response.data.data;
        }
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
  },
});
