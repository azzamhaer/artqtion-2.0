<template>
  <div class="flex justify-center items-center max-lg:flex-col p-4 w-screen fixed top-0 left-0 text-slate-50 z-50">
    <div class="flex items-center lg:flex-row flex-col lg:gap-5 bg-slate-800 p-5 lg:p-4 rounded-2xl lg:rounded-full">
      <div :class="navState ? 'mb-5' : 'mb-0'" class="flex duration-500 grow max-lg:w-full justify-between items-center">
        <img class="max-lg:scale-150 w-6 lg:w-10 h-auto" src="../assets/img/ArtqLogoo.png" alt="" />
        <BurgerIcon class="lg:hidden h-10" @click="navState = !navState" />
      </div>
      <div
        :class="{
          'max-lg:max-h-0 ease-out ': !navState,
          'max-lg:max-h-[100vh] py-2': navState,
        }"
        class="flex gap-5 lg:py-2 overflow-hidden relative duration-300 px-3 font-semibold h-full items-center"
      >
        <div
          :class="{
            'translate-x-0 ': $route.path === '/',
            'translate-x-[calc(48.3px+20px)]  ': $route.path === '/competition',
            'translate-x-[calc(48.3px+20px+102.5px+20px)]  ': $route.path === '/schedule',
            'translate-x-[calc(48.3px+20px+102.5px+20px+75.5833px+20px)]  ': $route.path === '/about',
            'translate-x-[calc(48.3px+20px+102.5px+20px+75.5833px+20px+49.2833px+20px)]  ': $route.path === '/terms',
          }"
          class="bg-slate-700 absolute h-full duration-300 py-4 px-3 left-0 z-30 rounded-full"
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
