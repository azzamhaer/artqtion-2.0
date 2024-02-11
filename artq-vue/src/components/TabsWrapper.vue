<template>
  <div class="relative w-full">
    <ul class="flex justify-end mb-10">
      <li class="text-3xl font-semibold cursor-pointer uppercase mr-10" v-for="title in tabTitles" :key="title" @click="selectedTitle = title">
        {{ title }}
      </li>
    </ul>
    <div
      :class="{
        '-translate-x-[118%]': selectedTitle === tabTitles[0],
        'translate-x-0 ': selectedTitle === tabTitles[1],
      }"
      class="duration-300 text-slate-300 w-32 h-0.5 absolute top-12 right-7 bg-gold-500"
    ></div>
    <slot></slot>
  </div>
</template>

<script>
import { ref, provide } from "vue";
export default {
  props: ["tabTitles"],
  setup(props) {
    const selectedTitle = ref(props.tabTitles[0]);

    provide("selectedTitle", selectedTitle);
    return {
      selectedTitle,
    };
  },
};
</script>
