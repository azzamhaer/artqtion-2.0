<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Modal from "./components/Modal.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar />
  <Modal />
  <div
    class="bg-[url('./assets/img/bg/bg-2.png')] bg-fixed bg-cover w-screen h-screen fixed -z-50 top-0 left-0 brightness-90">
    <div class="w-screen h-screen bg-black opacity-65"></div>
  </div>
  <div class="text-white min-h-screen items-center flex flex-col gap-5 justify-center">
    <RouterView />
  </div>
  <Footer></Footer>
</template>
