<template>
  <div class="relative w-full justify-center flex flex-col gap-12">
    <div class="grid gap-y-4 py-4 w-3/5 self-center text-center relative mb-10" :class="`grid-cols-${tabTitles.length}`">
      <span v-for="(tabTitle, index) in tabTitles" :key="tabTitle" :class="{ selected: tabTitle === selectedTitle }" @click="selectedTitle = tabTitle" class="text-2xl px-3 text-center lg:text-4xl font-semibold cursor-pointer uppercase">
        {{ tabTitle }}
      </span>
      <div :style="{ transform: `translateX(${tabTitles.indexOf(selectedTitle)}00%)` }" class="duration-300 left-0 text-slate-300 h-1 absolute w-1/3 -bottom-2 bg-blue-500"></div>
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
