<template>
  <div class="relative w-full justify-center flex flex-col gap-12">
    <div class="grid gap-y-4 py-4 bg-slate-800 rounded-full lg:w-3/5 self-center text-center relative mb-3 lg:mb-6 overflow-hidden" :class="`grid-cols-${tabTitles.length}`">
      <span
        v-for="(tabTitle, index) in tabTitles"
        :key="tabTitle"
        :class="{ selected: tabTitle === selectedTitle }"
        @click="selectedTitle = tabTitle"
        class="text-2xl z-20 px-3 text-center lg:text-4xl font-semibold cursor-pointer uppercase"
      >
        {{ tabTitle }}
      </span>
      <div :style="{ transform: `translateX(${tabTitles.indexOf(selectedTitle)}00%)` }" class="duration-300 border-8 border-slate-800 left-0 text-slate-300 h-full absolute w-1/3 top-0 rounded-full z-10 bg-blue-500"></div>
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
