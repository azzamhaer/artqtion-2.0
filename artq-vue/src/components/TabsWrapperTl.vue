<template>
  <div class="relative w-full flex flex-col justify-center items-center">
    <ul class="flex mb-2 lg:mb-3">
      <li class="text-xl lg:text-4xl font-semibold cursor-pointer uppercase mx-4 lg:mx-20" v-for="title in tabTitles" :key="title" @click="selectedTitle = title">
        {{ title }}
      </li>
    </ul>
    <div
      :class="{
        'w-[4.5rem] lg:w-32 -translate-x-24 lg:-translate-x-[17rem]': selectedTitle === tabTitles[0],
        'w-[4.5rem] lg:w-32 -translate-x-2.5 lg:-translate-x-4': selectedTitle === tabTitles[1],
        'w-20 lg:w-36 translate-x-[5.25rem] lg:translate-x-64': selectedTitle === tabTitles[2],
      }"
      class="duration-300 text-slate-300 h-0.5 bg-gold-500 mb-12"
    ></div>
    <slot></slot>
  </div>
  <div class="relative w-full">
    <ul class="flex justify-center text-center mb-10 gap-10">
      <li class="text-xl text-center lg:text-4xl font-semibold cursor-pointer uppercase" v-for="tabTitle in tabTitles" :key="tabTitle" :class="{ selected: tabTitle === selectedTitle }" @click="selectedTitle = tabTitle">
        {{ tabTitle }}
      </li>
    </ul>
    <div
      :class="{
        'w-20 lg:w-32 translate-x-[55%]  lg:translate-x-[12.5%]': selectedTitle === tabTitles[0],
        'w-20 lg:w-32 translate-x-[177.5%] lg:translate-x-[155.25%]': selectedTitle === tabTitles[1],
        'w-20 lg:w-36 translate-x-[298%] lg:translate-x-[215%] ': selectedTitle === tabTitles[2],
      }"
      class="duration-300 left-0 text-slate-300 h-0.5 absolute top-12 bg-gold-500"
    ></div>
    <slot></slot>
  </div>
  <div class="relative w-full">
    <ul class="flex justify-end mb-10">
      <li class="text-xl lg:text-4xl font-semibold cursor-pointer uppercase mr-10" v-for="title in tabTitles" :key="title" :class="{ selected: title == selectedTitle }" @click="selectedTitle = title">
        {{ title }}
      </li>
    </ul>
    <div
      :class="{ 'w-20 lg:w-32 right-[14.5rem] lg:right-[20.5rem]': selectedTitle === tabTitles[0], 'w-20 lg:w-32 right-[8.5rem] lg:right-48': selectedTitle === tabTitles[1], 'w-24 lg:w-36 right-7': selectedTitle === tabTitles[2] }"
      class="duration-300 text-slate-300 h-0.5 absolute top-12 bg-gold-500"
    ></div>
    <slot></slot>
  </div>
</template>

<script>
import { ref, provide } from "vue";
export default {
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(tabTitles.value[0]);

    provide("selectedTitle", selectedTitle);
    return {
      selectedTitle,
      tabTitles,
    };
  },
};
</script>
