<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Modal from "./components/Modal.vue";
import Footer from "./components/Footer.vue";
import { useModalStore } from "./stores/modal";
const modal = useModalStore();
</script>

<template>
  <Navbar />
<<<<<<< HEAD
  <Modal v-if="modal.modalState" />
  <div
    class="bg-[url('./assets/img/bg/bg-2.png')] bg-fixed bg-cover w-screen h-screen fixed -z-50 top-0 left-0 brightness-90">
=======
  <Modal />
  <div class="bg-[url('./assets/img/bg/bg-2.png')] bg-fixed bg-cover w-screen h-screen fixed -z-50 top-0 left-0 brightness-90">
>>>>>>> dc5f11272cc71fc11893421f9048d55f69568669
    <div class="w-screen h-screen bg-black opacity-65"></div>
  </div>
  <div class="text-white min-h-screen items-center flex flex-col p-5 gap-5 justify-center">
    <RouterView />
  </div>
  <Footer></Footer>
</template>
