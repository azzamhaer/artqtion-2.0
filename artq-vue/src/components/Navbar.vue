<template>
  <div class="flex max-lg:flex-col bg-black bg-opacity-10 p-3 w-screen fixed top-0 left-0 text-white z-50">
    <div class="max-lg:flex max-lg:grow max-lg:flex-row max-lg:justify-between">
      <img src="../assets/img/ArtqLogoo.png" class="w-12 aspect-square scale-130 translate-x-2" alt="" />
      <div @click="navState = !navState" class="lg:hidden block">
        <BurgerIcon class="w-10" />
      </div>
    </div>
    <div class="flex grow lg:justify-center duration-300">
      <div
        :class="{
          'max-lg:p-5 max-lg:max-h-screen max-lg:mt-3': navState,
          'max-lg:p-0 max-lg:max-h-0 max-lg:mt-0': !navState,
        }"
        class="max-lg:grid capitalize duration-200 lg:flex lg:gap-4 max-lg:overflow-hidden max-lg:gap-4 lg:grid-cols-5 max-lg:grid-rows-4 max-lg:bg-slate-900 max-lg:bg-opacity-55 rounded-xl max-lg:w-full lg:text-center items-center font-bold relative transition-height"
      >
        <div
          :class="{
            'lg:translate-x-0 lg:w-[48.7px] max-lg:lg:translate-x-0 ': $route.path === '/',
            'lg:translate-x-[64.7px] lg:w-[103.483px] max-lg:translate-y-[125%]': $route.path === '/competition',
            'lg:translate-x-[184.183px] lg:w-[76.3667px] max-lg:translate-y-[250%]': $route.path === '/schedule',
            'lg:translate-x-[276.5497px] lg:w-[50.15px] max-lg:translate-y-[375%]': $route.path === '/about',
            'lg:translate-x-[342.6997px] lg:w-[52.0333px] max-lg:translate-y-[500%]': $route.path === '/terms',
          }"
          class="duration-300 h-8 w-1 max-lg:top-4 nav-line lg:h-1 absolute lg:-bottom-3 bg-blue-500 left-0"
        ></div>
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/competition">Competition</RouterLink>
        <RouterLink class="nav-link" to="/schedule">Schedule</RouterLink>
        <RouterLink class="nav-link" to="/about">About</RouterLink>
        <!-- <RouterLink class="nav-link" to="/terms">Terms</RouterLink> -->
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
