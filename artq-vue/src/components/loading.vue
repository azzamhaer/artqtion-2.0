<template>
  <div v-if="isLoaded" :class="{ 'opacity-0': !isLoading, 'opacity-100': isLoading }" class="fixed duration-700 w-screen h-screen top-0 z-[99999] left-0 flex justify-center items-center bg-[#091831]">
    <div class="overflow-hidden w-52 relative border border-[#091831]">
      <img class="z-50 relative top-0 left-0 border border-[#091831]" src="../assets/img/artqlogo.png" alt="" />
      <div :style="{ transform: `translatey(${100 - progress}%)` }" class="w-full h-full z-40 bg-slate-50 absolute top-0 left-0"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const progress = ref(0);
const isLoaded = ref(true);
const isLoading = ref(true);
const interval = setInterval(() => {
  if (progress.value < 100) {
    progress.value += 1 / 2;
  } else {
    clearInterval(interval);

    isLoading.value = false;
    setTimeout(() => {
      isLoaded.value = false;
    }, 1000);
  }
}, 10);
</script>
