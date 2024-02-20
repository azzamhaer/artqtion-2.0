<template>
  <div class="flex flex-col items-center gap-3 py-20 w-full justify-center">
    <TabsWrapper class="container" :tabTitles="eventTitles">
      <Tab v-for="event in events" :key="event.id" :title="event.name">
        <div class="w-full flex">
          <div class="flex gap-5 p-3 overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 container">
            <div @click="openModal(competition)" :class="event.id === 2 ? 'lg:min-w-[49%]' : ''" class="bg-blue-800 min-w-[20rem] h-80 rounded-xl cursor-pointer group" v-for="competition in event.competitions" :key="competition.id">
              <div class="h-1/2 p-5 uppercase flex flex-row-reverse">
                <img class="w-auto h-full" :src="competition.imgUrl" alt="" />
              </div>
              <div class="h-1/2 p-5 uppercase flex text-3xl font-bold flex-col-reverse">
                <div class="w-3/4 overflow-hidden">
                  <h3>{{ competition.title }}</h3>
                  <div class="bg-gradient-to-tr from-slate-100 to-slate-400 rounded-e-full h-2 w-full mt-3 -translate-x-full duration-300 group-hover:translate-x-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
    </TabsWrapper>
    <div class="bg-slate-800 container h-auto flex flex-col items-center rounded-3xl p-5 text-2xl font-semibold">
      <p class="">Booklet ArtQtion 3.0</p>
      <a
        href="https://online.flippingbook.com/view/850248975/"
        class="fbo-embed text-blue-600"
        data-fbo-id="ddfb24107a"
        data-fbo-ratio="4:3"
        data-fbo-lightbox="yes"
        data-fbo-width="75%"
        data-fbo-height="auto"
        data-fbo-version="1"
        style="max-width: 75%"
        >(Klik disini jika tidak muncul)
      </a>
    </div>
  </div>
</template>

<script setup>
import TabsWrapper from "./TabsWrapper.vue";
import Tab from "./Tab.vue";
import { useModalStore } from "@/stores/modal.js";

const { events, eventTitles, openModal, modal, modalData } = useModalStore();
</script>
