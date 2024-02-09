<template>
    <div class="h-full py-20">
        <TabsWrapper>
            <Tab title="SI">
                <div class="px-10">
                    <div class="grid grid-cols-3 gap-28 w-full h-full">
                        <div v-for="item in intCompetition" :key="item.nama"
                            class="relative h-96 rounded-lg bg-gray-900 pb-2 flex justify-center overflow-hidden">
                            <img class="object-cover brightness-50 rounded-lg" src="../assets/img/bg/bg-1.jpg" alt="">
                            <h1 class="absolute text-4xl font-semibold uppercase text-center text-white self-end mb-5"
                                v-text="item.nama"></h1>
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab title="D'action">
                <div class="px-10">
                    <div class="grid grid-cols-3 gap-28 w-full h-full">
                        <div v-for="item in extCompetition" :key="item.nama"
                            class="relative h-96 rounded-lg bg-gray-900 pb-2 flex justify-center overflow-hidden">
                            <img class="object-cover brightness-50 rounded-lg" src="../assets/img/bg/bg-1.jpg" alt="">
                            <h1 class="absolute text-4xl font-semibold uppercase text-center text-white self-end mb-5"
                                v-text="item.nama"></h1>
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
import { ref } from "vue";

const intCompetition = ref([
    {
        nama: "Art Expression"
    },
    {
        nama: "Stand Up Comedy"
    },
    {
        nama: "Water Color Punch"
    },
])

const extCompetition = ref([
    {
        nama: "Gartic io"
    },
    {
        nama: "Debate"
    },
    {
        nama: "WSIB"
    },
])


</script>