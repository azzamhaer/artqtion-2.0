<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Modal from "./components/Modal.vue";
import Footer from "./components/Footer.vue";
import { useModalStore } from "./stores/modal";
import Loading from "./components/loading.vue";
const modal = useModalStore();
</script>

<template>
  <Loading />
  <Navbar />
  <Modal />
  <div class="bg-fixed bg-slate-900 bg-cover w-screen h-screen fixed -z-50 top-0 left-0 brightness-90">
    <!-- <div class="w-screen h-screen bg-black opacity-65"></div> -->
  </div>
  <div class="text-white min-h-screen items-center flex flex-col p-5 gap-5 justify-center">
    <RouterView />
  </div>
  <Footer></Footer>
</template>
