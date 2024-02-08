<template>
    <TabsWrapper>
        <Tab title="SI">
            <div class="grid grid-cols-4 gap-4 w-full h-full">
                <div class="relative h-96 rounded-lg bg-gray-600 pb-2 flex overflow-hidden">
                    <img class="object-cover brightness-50 rounded-lg" src="../assets/img/bg-1.jpg" alt="">
                    <h1 class="absolute text-5xl uppercase text-center text-white self-end mb-2">art expression</h1>
                </div>
                <div class="relative h-96 rounded-lg bg-gray-600 pb-2 flex overflow-hidden">
                    <img class="object-cover brightness-50 rounded-lg" src="../assets/img/bg-1.jpg" alt="">
                    <h1 class="absolute text-5xl uppercase text-center text-white self-end mb-2">art expression</h1>
                </div>
                <div class="relative h-96 rounded-lg bg-gray-600 pb-2 flex overflow-hidden">
                    <img class="object-cover brightness-50 rounded-lg" src="../assets/img/bg-1.jpg" alt="">
                    <h1 class="absolute text-5xl uppercase text-center text-white self-end mb-2">art expression</h1>
                </div>
                <div class="relative h-96 rounded-lg bg-gray-600 pb-2 flex overflow-hidden">
                    <img class="object-cover brightness-50 rounded-lg" src="../assets/img/bg-1.jpg" alt="">
                    <h1 class="absolute text-5xl uppercase text-center text-white self-end mb-2">art expression</h1>
                </div>
            </div>
        </Tab>
        <Tab title="D'action">
            <div class="grid grid-cols-4 gap-4 w-full h-full">
                <div class="relative h-96 rounded-lg bg-gray-600 pb-2 flex overflow-hidden">
                    <img class="object-cover brightness-50 rounded-lg" src="../assets/img/bg-1.jpg" alt="">
                    <h1 class="absolute text-5xl uppercase text-center text-white self-end mb-2">stand up comedy</h1>
                </div>
                <div class="relative h-96 rounded-lg bg-gray-600 pb-2 flex overflow-hidden">
                    <img class="object-cover brightness-50 rounded-lg" src="../assets/img/bg-1.jpg" alt="">
                    <h1 class="absolute text-5xl uppercase text-center text-white self-end mb-2">stand up comedy</h1>
                </div>
                <div class="relative h-96 rounded-lg bg-gray-600 pb-2 flex overflow-hidden">
                    <img class="object-cover brightness-50 rounded-lg" src="../assets/img/bg-1.jpg" alt="">
                    <h1 class="absolute text-5xl uppercase text-center text-white self-end mb-2">stand up comedy</h1>
                </div>
                <div class="relative h-96 rounded-lg bg-gray-600 pb-2 flex overflow-hidden">
                    <img class="object-cover brightness-50 rounded-lg" src="../assets/img/bg-1.jpg" alt="">
                    <h1 class="absolute text-5xl uppercase text-center text-white self-end mb-2">stand up comedy</h1>
                </div>
            </div>
        </Tab>
    </TabsWrapper>
</template>

<script setup>
import TabsWrapper from "./TabsWrapper.vue";
import Tab from "./Tab.vue";
</script>