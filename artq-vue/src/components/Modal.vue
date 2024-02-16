<template>
  <div @click="modal.modalState = false" :class="{ 'translate-x-full duration-700': !modal.modalState, 'translate-x-0 duration-700': modal.modalState }" class="fixed w-screen duration-100 h-screen top-0 left-0 bg-black bg-opacity-50 z-50">
    <div @click.stop :class="{ 'translate-x-full duration-300 ': !modal.modalState, 'translate-x-0 duration-1000': modal.modalState }" class="w-3/4 lg:w-1/2 h-screen bg-slate-100 absolute top-0 right-0">
      <div @click="modal.modalState = false" class="absolute top-3 left-3 w-6 lg:w-8 opacity-80 h-auto">
        <CloseBtn />
      </div>
      <div class="flex grow h-full p-12">
        <div class="w-full h-full justify-center grow flex flex-col gap-5">
          <div class="w-full justify-center flex flex-col grow gap-5">
            <div class="flex items-center justify-between">
              <h1 class="lg:text-4xl text-xl font-bold">{{ modal.modalData.title }}</h1>
              <img class="lg:w-20 w-16" :src="modal.modalData.imgUrl" alt="" />
            </div>
            <div class="flex flex-col gap-5">
              <div @click="openDropdown('desc')" class="flex flex-col border-b border-black pb-5">
                <div class="text-xl flex justify-between"><span>Deskripsi</span> <Arrow class="w-7 duration-300" :class="{ '-rotate-90': dropdown != 'desc' }" /></div>
                <div
                  :class="{
                    'max-h-0 overflow-hidden': dropdown != 'desc',
                    'md:max-h-[60vh] max-h-[50vh] overflow-y-scroll mt-2': dropdown == 'desc',
                  }"
                  class="duration-500 ease-in-out scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500"
                >
                  <p class="text-sm lg:text-xl">{{ modal.modalData.description }}</p>
                </div>
              </div>
              <div @click="openDropdown('term')" class="flex flex-col border-b border-black pb-5">
                <div class="text-xl flex justify-between"><span>Syarat & Ketentuan</span> <Arrow class="w-7 duration-300" :class="{ '-rotate-90': dropdown != 'term' }" /></div>
                <div
                  :class="{
                    'max-h-0 overflow-hidden': dropdown != 'term',
                    'md:max-h-[60vh] max-h-[50vh] overflow-y-scroll mt-2': dropdown == 'term',
                  }"
                  class="duration-500 flex flex-col gap-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500"
                >
                  <div class="ms-6" v-for="term in modal.modalData.terms">
                    <h3 class="text-lg font-semibold lg:text-2xl">{{ term.nama }}</h3>
                    <ul class="list-decimal list-outside">
                      <li class="text-sm md:text-base lg:text-lg capitalize" v-for="list in term.isi">
                        <p v-if="typeof list == 'string'">{{ list }}</p>
                        <div v-else>
                          <h4 class="text-lg lg:text-2xl font-medium">{{ list.nama }}</h4>
                          <ul class="list-decimal list-inside">
                            <li class="text-sm md:text-base lg:text-lg capitalize" v-for="subList in list.content">{{ subList }}</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col gap-4 text-white">
            <RouterLink class="p-4 bg-gradient-to-tr from-green-500 to-green-300 lg:text-xl rounded-xl w-full flex justify-between items-center" :to="modal.modalData.btnLink"
              >{{ modal.modalData.btnTitle }} <ArrowRight class="w-7"
            /></RouterLink>
            <!-- <RouterLink class="p-4 bg-gradient-to-tr from-blue-500 to-blue-300 lg:text-xl rounded-xl w-full flex justify-between items-center" :to="'/terms'">Syarat & Ketentuan <ArrowRight class="w-7" /></RouterLink> -->
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
import Arrow from "@/components/icons/ArrowDown.vue";
import { ref } from "vue";

const modal = useModalStore();
const dropdown = ref("");
const openDropdown = (dropdownName) => {
  if (dropdown.value === dropdownName) {
    dropdown.value = "";
  } else {
    dropdown.value = dropdownName;
  }
};
</script>
