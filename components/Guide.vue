<template>
  <div>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div
        class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6"
      >
        <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2
            class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            We Provide your best Guide
          </h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Unlock Limitless Experiences: Hire a Guide and Journey with
            Confidence!
          </p>
        </div>
        <div
          class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <div
            class="text-center text-gray-500 dark:text-gray-400"
            v-for="(guide, index) in guideStore.guides"
            :key="index"
          >
            <img
              class="mx-auto mb-4 w-36 h-36 rounded-full"
              :src="guide.photo"
              alt="Bonnie Avatar"
            />
            <h3
              class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <a href="#">{{ guide.name }}</a>
            </h3>
            <p>{{ guide.gender }} / {{ guide.age }} Years</p>
            <div class="flex justify-center my-4">
              <Rating />
            </div>
          </div>
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

<style  scoped>
</style>