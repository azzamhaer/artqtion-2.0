<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Competition from "./components/Competition.vue";
</script>

<template>
  <Navbar />
  <div class="bg-[url('./assets/img/bg/bg-2.png')] bg-fixed bg-cover w-screen h-screen fixed -z-50 top-0 left-0 brightness-90">
    <div class="w-screen h-screen bg-black opacity-25"></div>
  </div>
  <div class="text-white">
    <RouterView />
  </div>
</template>
