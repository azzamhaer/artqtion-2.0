<template>
    <div class="relative w-full">
        <ul class="flex justify-end mb-10">
            <li class="text-xl lg:text-4xl font-semibold cursor-pointer uppercase mr-10" v-for="title in tabTitles"
                :key="title" :class="{ selected: title == selectedTitle }" @click="selectedTitle = title">
                {{ title }}
            </li>
        </ul>
        <div :class="{ 'w-20 lg:w-32 right-[14.5rem] lg:right-[20.5rem]': selectedTitle === tabTitles[0], 'w-20 lg:w-32 right-[8.5rem] lg:right-48': selectedTitle === tabTitles[1], 'w-24 lg:w-36 right-7': selectedTitle === tabTitles[2] }"
            class="duration-300 text-slate-300 h-0.5 absolute top-12 bg-gold-500"></div>
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