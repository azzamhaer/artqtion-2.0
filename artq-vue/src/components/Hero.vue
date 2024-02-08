<script setup>
import { ref } from "vue";
import Arrow from "@/components/icons/ArrowDown.vue";

const countdownDate = new Date("Feb 24, 2024 00:00:00").getTime();

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
};

setInterval(updateCountdown, 1000);
updateCountdown();
</script>

<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center">
    <div class="uppercase font-black flex flex-col justify-center items-center">
      <h1 class="text-8xl">Artqtion</h1>

      <h1 class="text-[5.3rem]">Three.Zero</h1>
    </div>
    <div class="py-8 px-20 rounded-[3rem] bg-gold-500 gap-y-1 gap-x-5 shadow-gold-400 shadow-lg bg-opacity-65 grid grid-cols-7 text-center justify-center items-center my-5">
      <h2 class="font-bold text-7xl">{{ days }}</h2>
      <h2 class="font-bold text-7xl">:</h2>
      <h2 class="font-bold text-7xl">{{ hours }}</h2>
      <h2 class="font-bold text-7xl">:</h2>
      <h2 class="font-bold text-7xl">{{ minutes }}</h2>
      <h2 class="font-bold text-7xl">:</h2>
      <h2 class="font-bold text-7xl">{{ seconds }}</h2>
      <h3 class="font-semibold text-lg">Days</h3>
      <span></span>
      <h3 class="font-semibold text-lg">Hours</h3>
      <span></span>
      <h3 class="font-semibold text-lg">Minutes</h3>
      <span></span>
      <h3 class="font-semibold text-lg">Seconds</h3>
      <div class="w-full"></div>
    </div>
    <div>
      <Arrow />
    </div>
  </div>
</template>
