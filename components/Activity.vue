<template>
  <div class="py-10">
    <div class="container m-auto">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 py-10 gap-5">
        <div v-for="(activity, index) in activityStore.activities" :key="index">
          <ActivityCard :activity="activity" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useActivityStore } from "~/store/activity";
const activityStore = useActivityStore();

await activityStore.index();
</script>

<style lang="scss" scoped>
</style>