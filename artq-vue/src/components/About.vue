<script setup>
import { ref } from "vue";

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
    <h1 class="text-7xl uppercase font-black">Artqtion Three.Zero</h1>
    <div class="py-8 px-16 rounded-[3rem] bg-gold-500 shadow-gold-400 shadow-lg bg-opacity-65 flex items-center justify-center my-5">
      <h2 class="font-bold text-9xl">{{ days }} : {{ hours }} : {{ minutes }} : {{ seconds }}</h2>
    </div>
  </div>
</template>
