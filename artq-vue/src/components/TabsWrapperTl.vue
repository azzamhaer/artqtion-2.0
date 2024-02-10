<template>
    <div class="relative w-full flex flex-col justify-center items-center">
        <ul class="flex mb-2 lg:mb-3">
            <li class="text-xl lg:text-4xl font-semibold cursor-pointer uppercase mx-4 lg:mx-20" v-for="title in tabTitles"
                :key="title" @click="selectedTitle = title">
                {{ title }}
            </li>
        </ul>
        <div :class="{ 'w-[4.5rem] lg:w-32 -translate-x-24 lg:-translate-x-[17rem]': selectedTitle === tabTitles[0], 'w-[4.5rem] lg:w-32 -translate-x-2.5 lg:-translate-x-4': selectedTitle === tabTitles[1], 'w-20 lg:w-36 translate-x-[5.25rem] lg:translate-x-64': selectedTitle === tabTitles[2] }"
            class="duration-300 text-slate-300 h-0.5 bg-gold-500 mb-12"></div>
        <slot></slot>
    </div>
</template>

<script>
import { ref, provide } from 'vue'
export default {
    setup(props, { slots }) {
        const tabTitles = ref(slots.default().map((tab) => tab.props.title))
        const selectedTitle = ref(tabTitles.value[0])

        provide('selectedTitle', selectedTitle)
        return {
            selectedTitle,
            tabTitles,
        }
    },
}
</script>