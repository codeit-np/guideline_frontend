import axiosApi from "~/config/axios";
import { defineStore } from "pinia";

export const useActivityStore = defineStore("activities", {
  state: () => {
    return {
      activities: [],
      activity: {},
      loading: false,
    };
  },

  getters: {
    getActivities: (state) => state.activities,
  },

  actions: {
    async index() {
      try {
        this.loading = true;
        var response = await axiosApi.get("activities");
        if (response.status == 200) {
          this.activities = response.data.data;
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },

    async show(id) {
      try {
        this.loading = true;
        var response = await axiosApi.get(`activity/${id}`);
        if (response.status == 200) {
          this.activity = response.data.data;
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },
  },
});
