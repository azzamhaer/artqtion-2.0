<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Competition from "./components/Competition.vue";
</script>

<template>
  <Navbar />
  <div class="mt-16 bg-slate-800 text-white">
    <RouterView />
  </div>
</template>
