<template>
  <div class="flex justify-center items-center max-lg:flex-col p-4 w-screen fixed top-0 left-0 text-slate-50 z-50">
    <div class="flex items-center lg:flex-row flex-col gap-5 bg-slate-800 p-5 lg:p-3 rounded-2xl lg:rounded-full">
      <div class="w-6 lg:w-10 h-auto">
        <img class="max-lg:scale-150" src="../assets/img/ArtqLogoo.png" alt="" />
      </div>
      <div class="flex gap-5 relative px-3 font-semibold h-full items-center">
        <div
          :class="{
            'translate-x-0 ': $route.path === '/',
            'translate-x-[calc(48.3px+20px)]  ': $route.path === '/competition',
            'translate-x-[calc(48.3px+20px+102.5px+20px)]  ': $route.path === '/schedule',
            'translate-x-[calc(48.3px+20px+102.5px+20px+75.5833px+20px)]  ': $route.path === '/about',
            'translate-x-[calc(48.3px+20px+102.5px+20px+75.5833px+20px+49.2833px+20px)]  ': $route.path === '/terms',
          }"
          class="bg-slate-700 absolute h-full duration-300 py-5 px-3 left-0 z-30 rounded-full"
        >
          <div
            class="h-full duration-300"
            :class="{
              'w-[48.3px]': $route.path === '/',
              ' w-[102.5px] ': $route.path === '/competition',
              ' w-[75.5833px] ': $route.path === '/schedule',
              ' w-[49.2833px] ': $route.path === '/about',
              ' w-[52.0333px] ': $route.path === '/terms',
            }"
          ></div>
        </div>
        <RouterLink class="nav-link z-40" to="/">Home</RouterLink>
        <RouterLink class="nav-link z-40" to="/competition">Competition</RouterLink>
        <RouterLink class="nav-link z-40" to="/schedule">Schedule</RouterLink>
        <RouterLink class="nav-link z-40" to="/about">About</RouterLink>
      </div>
    </div>
  </div>
</template>

<style></style>

<script setup>
import BurgerIcon from "./icons/BurgerIcon.vue";
import { ref } from "vue";

const navState = ref(false);
</script>
