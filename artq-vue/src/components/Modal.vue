<template>
  <div :class="{ 'translate-x-full': !modal.modalState }" class="fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-50 z-50">
    <div :class="{ 'translate-x-full': !modal.modalState }" class="w-3/5 h-screen bg-slate-100 absolute top-0 right-0">
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
import { useModalStore } from "@/stores/modal";
const modal = useModalStore();
</script>
