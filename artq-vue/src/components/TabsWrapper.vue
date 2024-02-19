<template>
  <div class="relative w-full">
    <div class="flex flex-row-reverse">
      <div class="grid relative grid-cols-2 justify-center mb-10 bg-slate-800 py-3 rounded-full">
        <span class="text-3xl z-20 text-center font-semibold cursor-pointer uppercase w-44" v-for="title in tabTitles" :key="title" @click="selectedTitle = title">
          {{ title }}
        </span>
        <div
          :class="{
            '-translate-x-full': selectedTitle === tabTitles[0],
            'translate-x-0 ': selectedTitle === tabTitles[1],
          }"
          class="duration-300 text-slate-300 w-1/2 h-full absolute top-0 z-10 right-0 rounded-full border-8 border-slate-800 bg-blue-700"
        ></div>
      </div>
    </div>
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
