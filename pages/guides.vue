<template>
  <div>
    <section>
      <img src="~/assets/images/guide.png" class="w-full" alt="" />
    </section>

    <section class="py-10 text-center">
      <div class="flex justify-center items-center">
        <div class="line"></div>
        <h1 class="text-3xl px-5">Do you want guide?</h1>
        <div class="line"></div>
      </div>
      <div class="w-full flex justify-center">
        <div class="w-96">
          <p>Pick your guide for traveling your destination.</p>
        </div>
      </div>
    </section>

    <section class="py-10">
      <div class="container m-auto grid lg:grid-cols-2 gap-4">
        <div v-for="(guide, index) in guideStore.guides" :key="index">
          <GuideProfileCard :guide="guide" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useGuideStore } from "~/store/guide";
const guideStore = useGuideStore();
await guideStore.index();
</script>

<style lang="scss" scoped>
</style>