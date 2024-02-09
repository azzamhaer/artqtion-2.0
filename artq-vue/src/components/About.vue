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
  <div class="py-20 px-10 flex items-center justify-center">
    <div class="grid container grid-cols-3">
      <div class="h-full">
        <img class="h-full object-cover rounded-bl-[3.5rem] rounded-tr-[3.5rem] rounded-tl-xl rounded-br-xl" src="../assets/img/bg/bg-1.jpg" alt="" />
      </div>
      <div class="col-span-2 ml-20 py-5">
        <div>
          <h2 class="text-5xl uppercase font-semibold">About</h2>
          <div class="duration-300 text-slate-300 w-48 h-0.5 mt-3 mb-4 bg-gold-500"></div>
          <p class="text-lg mb-2">
            Art, Quranic, Technology, dan Competition atau ArtQTion adalah kegiatan tahunan yang di adakan oleh Santri Sekolah Impian sejak tahun 2022. <br />
            <br />
            ArtQTion adalah acara edukasi yang bertemakan "Back to Golden Age of Islam to fight AI Disruption". Acara ini bertujuan untuk mengedukasi santri sekaligus siswa/siswi tentang bagaimana masyarakat menanggapi disrupsi AI dewasa
            ini. Terkadang, perkembangan teknologi yang amat masif membuat masyarakat tertinggal dan tidak tahu untuk menanggapinya. Sehingga acara ini dihadirkan untuk membuka wawasan dan pemahaman bahwa AI dapat menjadi alat yang
            bermanfaat dan positif dalam memajukan kehidupan manusia dan tentunya Umat Islam.
            <br /><br />
            Melalui pendekatan inovatif, ArtQTion mengajak para peserta untuk berpikir kreatif dan mengembangkan visi yang jauh ke depan tentang teknologi dalam Islam. Dalam acara ini, akan disiapkan kompetisi-kompetisi menarik untuk
            memberikan inspirasi dan pencerahan kepada para peserta.
          </p>
        </div>
        <div class="w-64 flex justify-between">
          <button class="bg-gradient-to-r from-gold-400 p-2 rounded-full"><a class="text-lg font-semibold capitalize" href="">our youtube</a></button>
          <button class="bg-gradient-to-r from-gold-400 p-2 rounded-full"><a class="text-lg font-semibold capitalize" href="">our youtube</a></button>
        </div>
        <div class="flex mt-8">
          <div class="h-28 mx-5">
            <img class="h-full object-cover" src="../assets/img/logo-os.png" alt="" />
          </div>
          <div class="duration-300 text-slate-300 w-px mx-5 bg-gold-500"></div>
          <div class="h-28 mx-5">
            <img class="h-full object-cover" src="../assets/img/logo-si.png" alt="" />
          </div>
          <div class="duration-300 text-slate-300 w-px mx-5 bg-gold-500"></div>
        </div>
      </div>
    </div>
  </div>
</template>
