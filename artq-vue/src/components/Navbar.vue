<template>
  <div class="flex max-lg:flex-col bg-black bg-opacity-10 p-3 w-full fixed top-0 left-0 text-white z-50">
    <div class="max-lg:flex max-lg:w-full max-lg:flex-row max-lg:justify-between">
      <img src="../assets/img/dh_bner_kn_bro.png" class="w-12" alt="" />
      <div @click="navState = !navState" class="lg:hidden block p-2">
        <BurgerIcon class="w-10" />
      </div>
    </div>
    <div class="flex grow lg:justify-center max-lg:mt-3">
      <div
        :class="{
          'max-lg:p-5 max-lg:max-h-full': navState,
          'max-lg:p-0 max-lg:h-0': !navState,
        }"
        class="grid duration-200 max-lg:overflow-hidden max-lg:gap-4 lg:grid-cols-4 max-lg:grid-rows-4 max-lg:bg-slate-900 max-lg:bg-opacity-55 rounded-xl max-lg:w-full lg:text-center items-center font-bold relative"
      >
        <div
          :class="{
            'translate-x-0': $route.path === '/',
            'translate-x-[100%]': $route.path === '/competition',
            'translate-x-[200%]': $route.path === '/schedule',
            'translate-x-[300%]': $route.path === '/about',
          }"
          class="duration-300 w-28 nav-line h-1 absolute -bottom-3 bg-gold-500 left-0"
        ></div>
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/competition">Competition</RouterLink>
        <RouterLink class="nav-link" to="/schedule">Schedule</RouterLink>
        <RouterLink class="nav-link w-28" to="/about">About</RouterLink>
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
