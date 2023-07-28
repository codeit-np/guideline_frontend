<template>
  <div class="">
    <div
      class="w-full bg-blue-100 flex items-center justify-center"
      style="min-height: 150px;max-height-150px"
    >
      <img src="~/assets/images/about.png" class="w-full" alt="About" />
    </div>
    <div class="container m-auto py-10">
      <h1 class="text-3xl">{{ aboutStore.about.title }}</h1>
      <div class="py-5">
        <img
          :src="aboutStore.about.image"
          class="lg:w-2/5 lg:pe-5 rounded float-right lg:p-5"
          alt=""
        />
        <div v-html="aboutStore.about.description"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAboutStore } from "~/store/about";
const aboutStore = useAboutStore();
await aboutStore.index();
</script>

<style lang="scss" scoped>
</style>