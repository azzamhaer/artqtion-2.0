<template>
  <div class="flex items-center justify-center w-full bg-slate-900 text-white p-12">
    <div class="flex lg:flex-row flex-col gap-4 w-full items-center justify-center">
      <div class="flex lg:flex-row lg:w-1/2 flex-col sm:flex-row gap-4 items-center">
        <img class="w-32" src="../assets/img/ArtqLogoo.png" alt="" />
        <p class="text-justify max-sm:hidden">
          <strong>Artqtion</strong> merupakan sebuah acara yang di adakan di Sekolah Impian dengan rangkaian acara yang mencakup bidang teknologi, quran, dan seni. Dibuatnya acara ini adalah dengan tujuan mempererat ukhuwah antar santri
          serta mendorong santri untuk berkompetisi dengan cerdas dan sehat, juga mengasah kemampuan kreatifitas, kompetitif, inovatif, antisipatif, dan monetitatif yang di miliki oleh santri.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row lg:flex-row gap-5 capitalize">
        <div class="flex-col sm:flex-row lg:flex-col flex gap-5">
          <div class="flex gap-2 flex-col">
            <h1 class="font-semibold">More Information</h1>
            <a class="flex gap-2 items-center" href="https://online.flippingbook.com/view/1034532067/"><BookletIcon class="w-6 h-auto" /> Booklet Artqtion 3.0</a>
          </div>
          <div class="flex gap-2 flex-col">
            <h1 class="font-semibold">Contact Person (Fast Response 20.00-22.30)</h1>
            <a href="https://wa.me/+6285776342312" class="flex gap-2 items-center"><WhatsappIcon class="w-6 h-auto" /> Ibrahim (+62 857-7634-2312)</a>
            <a href="https://wa.me/+6285711115452" class="flex gap-2 items-center"><WhatsappIcon class="w-6 h-auto" /> Baiq Hana (+62 857-1111-5452)</a>
          </div>
        </div>
        <div class="flex gap-2 flex-col">
          <h1 class="font-semibold">Our Social Media</h1>
          <a class="flex gap-2 items-center" href="https://www.youtube.com/@art-qtionofficial2273"><YoutubeIcon class="w-6 h-auto" /> Art-Qtion Official </a>
          <a class="flex gap-2 items-center" href="https://www.instagram.com/artqtion.official"><InstagramIcon class="w-6 h-auto" /> @artqtion.official</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import WhatsappIcon from "./icons/WhatsappIcon.vue";
import InstagramIcon from "./icons/InstagramIcon.vue";
import YoutubeIcon from "./icons/YoutubeIcon.vue";
import BookletIcon from "./icons/BookletIcon.vue";
</script>
