<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4"
      >
        <a href="/" class="flex items-center">
          <img
            :src="companyStore.company.logo"
            class="h-8 mr-3"
            alt="logo.png"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >{{ companyStore.company.name }}</span
          >
        </a>
        <div class="flex items-center">
          <a
            href="tel:5541251234"
            class="mr-6 text-sm text-gray-500 dark:text-white hover:underline"
            >(977) {{ companyStore.company.contact }}</a
          >
          <a
            href="#"
            class="text-sm text-blue-600 dark:text-blue-500 hover:underline"
            >Login</a
          >
        </div>
      </div>
    </nav>
    <nav class="bg-gray-50 dark:bg-gray-700">
      <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
          <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
            <li>
              <a
                href="/"
                class="text-gray-900 dark:text-white hover:underline"
                aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a
                href="/about"
                class="text-gray-900 dark:text-white hover:underline"
                >About</a
              >
            </li>
            <li>
              <a
                href="/activities"
                class="text-gray-900 dark:text-white hover:underline"
                >Activities</a
              >
            </li>
            <li>
              <a
                href="/guides"
                class="text-gray-900 dark:text-white hover:underline"
                >Guides</a
              >
            </li>
            <li>
              <a
                href="/contact"
                class="text-gray-900 dark:text-white hover:underline"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useCompanyStore } from "~/store/company";
const companyStore = useCompanyStore();
</script>

<style lang="scss" scoped>
</style>