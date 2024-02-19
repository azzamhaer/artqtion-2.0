<template>
  <div class="flex flex-col items-center py-20 w-full justify-center">
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
  </div>
  <div class="bg-slate-800 rounded-3xl p-5 text-lg font-semibold">
    <a href="https://online.flippingbook.com/view/1034532067/" class="fbo-embed" data-fbo-id="5902288749" data-fbo-ratio="3:2" data-fbo-lightbox="yes" data-fbo-width="100%" data-fbo-height="auto" data-fbo-version="1" style="max-width: 100%"
      >Booklet ArtQtion 3.0 (Klik disini jika tidak muncul)
    </a>
  </div>
</template>

<script setup>
import TabsWrapper from "./TabsWrapper.vue";
import Tab from "./Tab.vue";
import { useModalStore } from "@/stores/modal.js";

const { events, eventTitles, openModal, modal, modalData } = useModalStore();
</script>
