<template>
  <div class="py-20 container">
    <TabsWrapperTl :tabTitles="modal.daysTitles">
      <Tab class="flex justify-center" :title="day.title" v-for="day in modal.days" :key="day.id">
        <div class="w-3/4 flex justify-center bg-gradient-to-bl from-blue-500 to-blue-900 rounded-3xl py-5" :style="`height: ${day.schedules.length * 20}rem`">
          <div class="w-1 h-full bg-gold-700 rounded-full flex flex-col justify-around items-center">
            <div v-for="(schedule, index) in day.schedules" :key="schedule.id" class="w-4 h-4 bg-gold-900 capitalize border-white border rounded-full relative">
              <div class="w-3 h-3 bg-gold-900 border-white border rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div :class="{ 'right-0 translate-x-[110%]': schedule.id % 2 === 0, 'left-0 -translate-x-[110%]': schedule.id % 2 !== 0 }" class="lg:p-6 p-4 absolute top-0 -translate-y-1/2 bg-gold-900 rounded-2xl">
                <p class="text-xl md:text-3xl lg:text-4xl font-semibold w-full flex">
                  {{ schedule.acara }}
                </p>
              </div>
              <div
                v-if="schedule.tanggal"
                :class="{ 'right-0 translate-x-[110%]': schedule.id % 2 !== 0, 'left-0 -translate-x-[110%]': schedule.id % 2 === 0 }"
                class="lg:p-6 font-semibold p-3 absolute top-0 -translate-y-1/2 text-white rounded-2xl"
              >
                <p class="text-xl lg:text-2xl font-medium">
                  {{ schedule.tanggal }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Tab>
    </TabsWrapperTl>
  </div>
</template>
<script setup>
import TabsWrapperTl from "./TabsWrapperTl.vue";
import Tab from "./Tab.vue";
import { ref } from "vue";
import { useModalStore } from "@/stores/modal.js";
const modal = useModalStore();
</script>
