<template>
  <div>
    <div class="container m-auto py-10">
      <h1 class="text-3xl">{{ activityStore.activity.title }}</h1>
      <h5 class="text-4xl font-medium my-3">
        Price: {{ activityStore.activity.sellingPrice }}
      </h5>
      <div class="flex" v-if="activityStore.activity.discount > 0">
        <h5 class="line-through text-red-500">
          {{ activityStore.activity.price }}
        </h5>
        <h5
          v-if="activityStore.activity.discount > 0"
          class="bg-red-500 w-20 text-center text-white rounded-md ms-4"
        >
          -{{ activityStore.activity.discount }} % off
        </h5>
      </div>

      <div class="py-10">
        <img
          :src="activityStore.activity.image"
          class="lg:w-2/4 lg:pe-5"
          style="float: left"
          alt=""
        />
        <div v-html="activityStore.activity.description"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useActivityStore } from "~/store/activity";
const activityStore = useActivityStore();
const route = useRoute();
await activityStore.show(route.params.id);
</script>

<style lang="scss" scoped>
</style>