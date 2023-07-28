<template>
  <div>
    <section>
      <img src="~/assets/images/attraction.png" class="w-full" alt="" />
    </section>

    <section class="py-10 text-center">
      <div class="flex justify-center items-center">
        <div class="line"></div>
        <h1 class="text-3xl px-5">Our Main Attractions</h1>
        <div class="line"></div>
      </div>
      <div class="w-full flex justify-center">
        <div class="w-96">
          <p>
            Visit difference places and explore Nepal.It is filled with beauty
          </p>
        </div>
      </div>
    </section>

    <section>
      <Activity />
    </section>
  </div>
</template>

<script setup>
</script>

<style>
.line {
  width: 200px;
  height: 1px;
  background-color: black;
}
</style>