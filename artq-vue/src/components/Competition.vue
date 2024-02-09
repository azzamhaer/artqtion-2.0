<template>
  <div class="min-h-screen flex items-center py-20 w-full justify-center">
    <TabsWrapper class="container" :tabTitles="eventTitles">
      <Tab v-for="event in events" :key="event.id" :title="event.name">
        <div class="w-full flex justify-center">
          <div class="grid grid-cols-3 container gap-16 w-full h-full">
            <div v-for="competition in event.competitions" :key="competition.id" class="group relative shadow-lg shadow-gold-200 p-5 items-center h-40 rounded-[2rem] bg-gray-900 pb-2 flex overflow-hidden">
              <div class="p-1 overflow-hidden">
                <h1 class="text-4xl font-semibold uppercase text-center text-white self-end mx-4 mb-3">{{ competition.name }}</h1>
                <div class="w-full group-hover:translate-x-0 -translate-x-[200%] duration-300 ease-in-out h-1 bg-gold-900"></div>
                <!-- <div class="h-0 group-hover:h-auto duration-300 transition-all ease-in-out">
                  <p>
                    {{ competition.description }}
                  </p>
                </div> -->
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

const { events, eventTitles } = useModalStore();
</script>
