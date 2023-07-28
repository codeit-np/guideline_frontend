import axiosApi from "~/config/axios";
import { defineStore } from "pinia";
export const useBookingStore = defineStore("booking", {
  state: () => {
    return {
      loading: false,
      message: "",
    };
  },

  getters: {
    getMessage: (state) => state.message,
  },

  actions: {
    async store(request) {
      try {
        console.warn(request);
        this.loading = true;
        var response = await axiosApi.post("booking", request);
        if (response.status == 200) {
          this.message = response.data["message"];
          console.warn(response.data["message"]);
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },
  },
});
