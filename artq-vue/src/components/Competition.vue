<template>
    <div class="h-screen py-20">
        <TabsWrapper>
            <Tab title="SI">
                <div class="px-10">
                    <div class="grid grid-cols-3 gap-28 w-full h-full">
                        <div class="relative h-96 rounded-lg bg-gray-900 pb-2 flex overflow-hidden">
                            <img class="object-cover brightness-50 rounded-lg" src="../assets/img/bg-1.jpg" alt="">
                            <h1 class="absolute text-4xl font-semibold uppercase text-center text-white self-end mx-5 mb-3">
                                art
                                expression</h1>
                        </div>
                        <div class="relative h-96 rounded-lg bg-gray-900 pb-2 flex overflow-hidden">
                            <img class="object-cover brightness-50 rounded-lg" src="../assets/img/bg-1.jpg" alt="">
                            <h1 class="absolute text-4xl font-semibold uppercase text-center text-white self-end mx-5 mb-3">
                                art
                                expression</h1>
                        </div>
                        <div class="relative h-96 rounded-lg bg-gray-900 pb-2 flex overflow-hidden">
                            <img class="object-cover brightness-50 rounded-lg" src="../assets/img/bg-1.jpg" alt="">
                            <h1 class="absolute text-4xl font-semibold uppercase text-center text-white self-end mx-5 mb-3">
                                art
                                expression</h1>
                        </div>
                        <div class="relative h-96 rounded-lg bg-gray-900 pb-2 flex overflow-hidden">
                            <img class="object-cover brightness-50 rounded-lg" src="../assets/img/bg-1.jpg" alt="">
                            <h1 class="absolute text-4xl font-semibold uppercase text-center text-white self-end mx-5 mb-3">
                                art
                                expression</h1>
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab title="D'action">
                <div class="px-10">
                    <div class="grid grid-cols-3 gap-28 w-full h-full">
                        <div class="relative h-96 rounded-lg bg-gray-900 pb-2 flex overflow-hidden">
                            <img class="object-cover brightness-50 rounded-lg" src="../assets/img/bg-1.jpg" alt="">
                            <h1 class="absolute text-4xl font-semibold uppercase text-center text-white self-end mx-5 mb-3">
                                stand
                                up comedy
                            </h1>
                        </div>
                        <div class="relative h-96 rounded-lg bg-gray-900 pb-2 flex overflow-hidden">
                            <img class="object-cover brightness-50 rounded-lg" src="../assets/img/bg-1.jpg" alt="">
                            <h1 class="absolute text-4xl font-semibold uppercase text-center text-white self-end mx-5 mb-3">
                                stand
                                up comedy
                            </h1>
                        </div>
                        <div class="relative h-96 rounded-lg bg-gray-900 pb-2 flex overflow-hidden">
                            <img class="object-cover brightness-50 rounded-lg" src="../assets/img/bg-1.jpg" alt="">
                            <h1 class="absolute text-4xl font-semibold uppercase text-center text-white self-end mx-5 mb-3">
                                stand
                                up comedy
                            </h1>
                        </div>
                        <div class="relative h-96 rounded-lg bg-gray-900 pb-2 flex overflow-hidden">
                            <img class="object-cover brightness-50 rounded-lg" src="../assets/img/bg-1.jpg" alt="">
                            <h1 class="absolute text-4xl font-semibold uppercase text-center text-white self-end mx-5 mb-3">
                                stand
                                up comedy
                            </h1>
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
</script>