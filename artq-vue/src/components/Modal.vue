<template>
  <div @click="modal.modalState = false" :class="{ 'translate-x-full duration-700': !modal.modalState, 'translate-x-0 duration-700': modal.modalState }" class="fixed w-screen duration-100 h-screen top-0 left-0 bg-black bg-opacity-50 z-50">
    <div @click.stop :class="{ 'translate-x-full duration-300 ': !modal.modalState, 'translate-x-0 duration-1000': modal.modalState }" class="w-3/4 lg:w-1/2 h-screen bg-slate-100 absolute top-0 right-0">
      <div @click="modal.modalState = false" class="absolute top-5 left-5 w-6 lg:w-10 opacity-80 h-auto">
        <CloseBtn />
      </div>
      <div class="flex grow h-full p-12">
        <div class="w-full h-full justify-center grow flex flex-col gap-5">
          <div class="w-full justify-center flex flex-col grow gap-5">
            <div class="flex items-center justify-between">
              <h1 class="lg:text-4xl text-xl font-bold">{{ modal.modalData.title }}</h1>
              <img class="lg:w-20 w-16" :src="modal.modalData.imgUrl" alt="" />
            </div>
            <div>
              <p class="text-sm lg:text-xl">{{ modal.modalData.description }}</p>
            </div>
          </div>
          <div class="w-full text-white">
            <RouterLink class="p-4 bg-gradient-to-tr from-green-500 to-green-300 lg:text-xl rounded-xl w-full flex justify-between items-center" :to="modal.modalData.btnLink"
              >{{ modal.modalData.btnTitle }} <ArrowRight class="w-7"
            /></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CloseBtn from "./icons/CloseBtn.vue";
import ArrowRight from "./icons/ArrowRight.vue";
import { useModalStore } from "@/stores/modal";
const modal = useModalStore();
</script>
