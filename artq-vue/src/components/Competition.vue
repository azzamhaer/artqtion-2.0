<template>
  <div class="flex items-center py-20 w-full justify-center">
    <TabsWrapper class="container" :tabTitles="eventTitles">
      <Tab v-for="event in events" :key="event.id" :title="event.name">
        <div class="w-full flex">
          <div class="flex gap-5 p-3 overflow-x-scroll container">
            <div @click="openModal(competition)" :class="event.id === 2 ? 'min-w-[49%]' : 'min-w-[20rem]'" class="bg-gold-900 h-96 rounded-xl cursor-pointer group" v-for="competition in event.competitions" :key="competition.id">
              <div class="h-1/2 p-5 uppercase flex flex-row-reverse">
                <img class="w-auto h-full" :src="competition.imgUrl" alt="" />
              </div>
              <div class="h-1/2 p-5 uppercase flex text-3xl font-bold flex-col-reverse">
                <div class="w-3/4 overflow-hidden">
                  <h3>{{ competition.title }}</h3>
                  <div class="bg-blue-900 h-2 w-full mt-3 -translate-x-full duration-300 group-hover:translate-x-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
    </TabsWrapper>
  </div>
</template>

<script setup>
import TabsWrapper from "./TabsWrapper.vue";
import Tab from "./Tab.vue";
import { useModalStore } from "@/stores/modal.js";

const { events, eventTitles, openModal, modal, modalData } = useModalStore();
</script>
