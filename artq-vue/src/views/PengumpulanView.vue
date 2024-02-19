<template>
  <div v-for="event in modal.events" class="container gap-3 flex flex-wrap justify-center">
    <RouterLink :to="`/pengumpulan/${competition.id}`" v-for="competition in event.competitions" class="w-1/4 h-44 bg-gradient-to-tr from-blue-800 to-blue-600 p-3 rounded-xl">
      <div class="h-3/4 flex flex-row-reverse">
        <img class="w-auto h-full" :src="competition.imgUrl" alt="" />
      </div>
      <div class="flex justify-start h-1/4 flex-col-reverse">
        <h2 class="text-2xl font-semibold">{{ competition.title }}</h2>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
import { useModalStore } from "@/stores/modal";

const modal = useModalStore();
</script>
