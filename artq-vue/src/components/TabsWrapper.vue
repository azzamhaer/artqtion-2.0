<template>
    <div class="w-full">
        <ul class="flex justify-end mb-10">
            <li class="text-3xl cursor-pointer uppercase mr-5" v-for="title in tabTitles" :key="title"
                @click="selectedTitle = title">
                {{ title }}
            </li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
import { ref, provide } from 'vue'
export default {
    setup(prps, { slots }) {
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