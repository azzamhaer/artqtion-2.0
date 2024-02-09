<template>
  <div @click="modal.modalState = false" :class="{ 'translate-x-full duration-700': !modal.modalState, 'translate-x-0 duration-700': modal.modalState }" class="fixed w-screen duration-100 h-screen top-0 left-0 bg-black bg-opacity-50 z-50">
    <div @click.stop :class="{ 'translate-x-full duration-300 ': !modal.modalState, 'translate-x-0 duration-1000': modal.modalState }" class="w-3/5 lg:w-1/2 h-screen bg-slate-100 absolute top-0 right-0">
      <div @click="modal.modalState = false" class="absolute top-5 left-5 w-10 opacity-80 h-auto">
        <CloseBtn />
      </div>
      <div class="flex grow h-full p-16">
        <div class="w-full h-full justify-center flex flex-col grow gap-5">
          <div>
            <h1 class="text-4xl font-bold">{{ modal.modalData.title }}</h1>
          </div>
          <div>
            <p class="text-lg">{{ modal.modalData.description }}</p>
          </div>
          <div>
            <a class="p-3 bg-gold-800 rounded-xl" :href="modal.modalData.btnLink">{{ modal.modalData.btnTitle }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CloseBtn from "./icons/CloseBtn.vue";
import { useModalStore } from "@/stores/modal";
const modal = useModalStore();
</script>
