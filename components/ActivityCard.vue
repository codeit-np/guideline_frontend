<template>
  <div>
    <div
      class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <div style="height: 200px">
          <img
            class="rounded-t-lg"
            :src="activity.image"
            :alt="activity.title"
            style="height: 200px; width: 100%; object-fit: cover"
          />
        </div>
      </a>
      <div class="p-5">
        <a href="#">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ activity.title }}
          </h5>
        </a>
        <div
          class="mb-3 font-normal text-gray-700 dark:text-gray-400 multiLine"
          v-html="activity.description"
        ></div>
        <NuxtLink
         :to="`/activity/${activity.id}`"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  activity: {},
});
</script>

<style scoped>
.multiLine {
  line-clamp: 2;
  height: 50px;
  text-overflow: ellipsis;
  display: block;
  overflow: hidden;
}
</style>