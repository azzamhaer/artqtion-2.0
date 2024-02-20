<template>
  <div class="flex items-center justify-center w-full bg-slate-900 text-white p-12">
    <div class="flex lg:flex-row flex-col gap-4 w-full items-center justify-center">
      <div class="flex lg:flex-row lg:w-1/2 flex-col sm:flex-row gap-4 items-center">
        <img class="w-32" src="../assets/img/ArtqLogoo.png" alt="" />
        <p class="text-justify">
          <strong>Artqtion</strong> merupakan sebuah acara yang di adakan di Sekolah Impian dengan rangkaian acara yang mencakup bidang teknologi, quran, dan seni. Dibuatnya acara ini adalah dengan tujuan mempererat ukhuwah antar santri
          serta mendorong santri untuk berkompetisi dengan cerdas dan sehat, juga mengasah kemampuan kreatifitas, kompetitif, inovatif, antisipatif, dan monetitatif yang di miliki oleh santri.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row lg:flex-col gap-5 capitalize">
        <div class="flex gap-2 flex-col">
          <h1>Contact Person (Aktif 20.00-22.30)</h1>
          <a href="https://wa.me/+6285776342312" class="flex gap-2 items-center"><WhatsappIcon class="w-6 h-auto" /> Ibrahim</a>
          <a href="https://wa.me/+6285711115452" class="flex gap-2 items-center"><WhatsappIcon class="w-6 h-auto" /> Baiq Hana</a>
        </div>
        <div class="flex gap-2 flex-col">
          <h1>Our Social Media</h1>
          <a class="flex gap-2" href="https://www.youtube.com/@art-qtionofficial2273"><YoutubeIcon class="w-6 h-auto" /> our youtube</a>
          <a class="flex gap-2" href="https://www.instagram.com/artqtion.official"><InstagramIcon class="w-6 h-auto" /> our instagram</a>
        </div>
        <div class="flex gap-2 flex-col">
          <h1>More Information</h1>
          <a href="https://online.flippingbook.com/view/1034532067/">Booklet Artqtion 3.0</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import WhatsappIcon from "./icons/WhatsappIcon.vue";
import InstagramIcon from "./icons/InstagramIcon.vue";
import YoutubeIcon from "./icons/YoutubeIcon.vue";
</script>
