<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
//Import
import { useCompanyStore } from "~/store/company";
const companyStore = useCompanyStore();
await companyStore.index();
</script>

<style scoped>
</style>