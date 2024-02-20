<script setup>
import { ref } from "vue";
import YoutubeIcon from "./icons/YoutubeIcon.vue";
import InstagramIcon from "./icons/InstagramIcon.vue";
import TiktokIcon from "./icons/TiktokIcon.vue";

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
  <div class="py-20 px-5 lg:px-10 min-h-screen flex items-center justify-center">
    <div class="grid container grid-cols-1 lg:grid-cols-3">
      <div class="h-full">
        <img class="h-full object-cover rounded-bl-[3.5rem] rounded-tr-[3.5rem] rounded-tl-xl rounded-br-xl" src="../assets/img/DSC08317.jpg" alt="" />
      </div>
      <div class="col-span-2 lg:ml-20 py-5">
        <div>
          <h2 class="text-4xl lg:text-5xl uppercase font-semibold">About</h2>
          <div class="duration-300 text-slate-300 w-36 lg:w-48 h-0.5 mt-3 mb-4 bg-blue-700"></div>
          <p class="text-sm lg:text-lg mb-5 lg:mb-10">
            Art, Quranic, Technology, dan Competition atau ArtQTion adalah kegiatan tahunan yang di adakan oleh Santri Sekolah Impian sejak tahun 2022. <br />
            <br />
            ArtQTion adalah acara edukasi yang bertemakan "The Beauty of Science and Technology, heritage of Islamic Civilization". Acara ini bertujuan untuk mengedukasi santri sekaligus siswa/siswi tentang bagaimana masyarakat menanggapi
            disrupsi AI dewasa ini. Terkadang, perkembangan teknologi yang amat masif membuat masyarakat tertinggal dan tidak tahu untuk menanggapinya. Sehingga acara ini dihadirkan untuk membuka wawasan dan pemahaman bahwa AI dapat menjadi
            alat yang bermanfaat dan positif dalam memajukan kehidupan manusia dan tentunya Umat Islam.
            <br /><br />
            Melalui pendekatan inovatif, ArtQTion mengajak para peserta untuk berpikir kreatif dan mengembangkan visi yang jauh ke depan tentang teknologi dalam Islam. Dalam acara ini, akan disiapkan kompetisi-kompetisi menarik untuk
            memberikan inspirasi dan pencerahan kepada para peserta.
          </p>
        </div>
        <div class="w-auto lg:w-auto flex-wrap flex gap-5">
          <a class="bg-blue-800 p-3 gap-2 rounded-full flex text-sm lg:text-lg font-semibold capitalize" href="https://www.youtube.com/@art-qtionofficial2273"><YoutubeIcon class="w-6 h-auto" /> our youtube</a>
          <a class="bg-blue-800 p-3 gap-2 rounded-full flex text-sm lg:text-lg font-semibold capitalize" href="https://www.instagram.com/artqtion.official"><InstagramIcon class="w-6 h-auto" /> our instagram</a>
          <a class="bg-blue-800 p-3 gap-2 rounded-full flex text-sm lg:text-lg font-semibold capitalize" href="https://www.tiktok.com/@artqtion.official"><TiktokIcon class="w-6 h-auto" /> our TikTok</a>
        </div>
        <div class="flex mt-8">
          <div class="h-12 lg:h-28 mx-3 lg:mx-5">
            <img class="h-full object-cover" src="../assets/img/logo-os.png" alt="" />
          </div>
          <div class="duration-300 text-slate-300 w-px mx-5 bg-blue-500"></div>
          <div class="h-12 lg:h-28 mx-3 lg:mx-5">
            <img class="h-full object-cover" src="../assets/img/logo-si.png" alt="" />
          </div>
          <div class="duration-300 text-slate-300 w-px mx-5 bg-blue-500"></div>
          <div class="h-12 lg:h-28 mx-3 lg:mx-5 scale-150">
            <img class="h-full object-cover" src="../assets/img/ArtqLogoo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
