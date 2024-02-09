import { ref } from "vue";
import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", () => {
  const events = ref([
    {
      id: 1,
      name: "Offline",
      competitions: [
        {
          id: 1,
          title: "Web Landing Page",
          imgUrl: "https://cdn.artqtion.com/NFT%20Monitoring.png",
          btnLink: "http://artqtion.com/register",
          description:
            "Lomba membuat Landing Page merupakan ajang untuk mengekspresikan dan meningkatkan kemampuan kreativitas dan pemrograman peserta dalam menciptakan Landing Page, dengan tema “Historical Event of Islam”. Maka, peserta akan ditantang untuk membuat Landing page dengan kemampuan programmingnya dan mengkolaborasikannya dengan kemampuan kreatif dan inovatif.",
          btnTitle: "Register Here",
        },
        {
          id: 2,
          title: "News Anchor",
          imgUrl: "https://cdn.artqtion.com/4%20Breaking%20News.png",
          btnLink: "http://artqtion.com/register",
          description:
            "Lomba news anchor merupakan salah satu kompetisi video yang para pesertanya akan memposisikan dirinya (peserta) sebagai seorang penyiar televisi. Lomba news anchor berharap dapat mengasah kemampuan public speaking di depan kamera dengan membahas sebuah topik yang akan di tentukan di lomba ini. Serta dapat memberikan edukasi terhadap khalayak serta membangun jiwa kompetitif diantara para peserta",
          btnTitle: "Register Here",
        },
        {
          id: 3,
          title: "Komik Antologi",
          imgUrl: "https://cdn.artqtion.com/crayon.png",
          btnLink: "http://artqtion.com/register",
          description:
            "Lomba komik antologi merupakan kompetisi untuk membuat karya komik edukatif yang berbentuk komik strip dengan tema yang telah ditentukan. Dari hasil karya komik peserta, akan diseleksi dan yang terpilih komiknya nantinya akan dikumpulkan lalu diterbitkan agar bisa disebarluaskan. Komik yang dihasilkan bertujuan untuk mengedukasi dan memberikan wawasan yang luas untuk masyarakat yang membacanya.",
          btnTitle: "Register Here",
        },
        {
          id: 4,
          title: "GamJam",
          imgUrl: "https://cdn.artqtion.com/1.png",
          btnLink: "http://artqtion.com/register",
          description:
            "Lomba Membuat Game , ajang membuat sebuah “Game” bukan hanya sekedar menjadi hiburan tapi dapat menjadi sarana peserta dalam belajar mengembangkan hardskill yang dimiliki , serta menjadi media bagi para peserta untuk mengembangkan kreativitas. Pada Kompetisi ini peserta dapat menggunakan aplikasi Scratch dengan tema yaitu “Back to Islamic Golden Age” dan di harapkan para peserta dapat mengembangkan ide sesuai dengan tema yang telah di tentukan.",
          btnTitle: "Register Here",
        },
        {
          id: 5,
          title: "Monolog",
          imgUrl: "https://cdn.artqtion.com/15%20Story.png",
          btnLink: "http://artqtion.com/register",
          description:
            "Lomba Monolog merupakan sebuah kompetisi yang bertujuan agar para peserta dapat mengembangkan potensi secara literal maupun kemampuan dalam berperan. Lomba ini juga dapat menjadi media bagi peserta untuk memberikan perspektif unik yang sesuai dengan tema yang telah di tentukan. Melalui monolog , para peserta dilatih untuk menghadapi ",
          btnTitle: "Register Here",
        },
        {
          id: 6,
          title: "Tadabbur+",
          imgUrl: "https://cdn.artqtion.com/Al%20Quran%20Book%20Read.png",
          btnLink: "http://artqtion.com/register",
          description:
            "Lomba tadabbur merupakan lomba dengan konsep video singkat yang didalamnya terkandung ayat Al-quran yang dikupas menjadi se-demikian menarik bagi banyak kalangan. Diharapkan melalui lomba tadabbur masyarakat dapat mendapatkan banyak wawasan yang bermanfaat tentang ayat-ayat Al-Quran.",
          btnTitle: "Register Here",
        },
      ],
    },
    {
      id: 2,
      name: "Online",
      competitions: [
        {
          id: 7,
          title: "Kanvas Sejarah",
          imgUrl: "https://cdn.artqtion.com/canvas.png",
          btnLink: "http://artqtion.com/register",
          description:
            "Lomba kanvas sejarah merupakan kompetisi melukis menggunakan cat minyak dengan media kanvas. Diperbolehkan bagi para peserta untuk menumpahkan seluruh imajinasinya melalui karya seni dalam kompetisi ini, asalkan masih berada di dalam lingkup tema yang telah ditentukan. Lomba kanvas sejarah ini mengasah keahlian seni dari para peserta melalui karya lukisnya.",
          btnTitle: "Register Here",
        },
        {
          id: 8,
          title: "Debat",
          imgUrl: "https://cdn.artqtion.com/Microphone.png",
          btnLink: "http://artqtion.com/register",
          description:
            "Lomba debat merupakan perlombaan adu argumen yang dilakukan oleh 2 pihak dengan isu atau topik bahasan yang telah ditentukan oleh pihak panitia. Tentunya dalam mengikuti lomba debat ini diperlukan keterampilan dalam berargumentasi, juga memiliki pengetahuan yang mendalam tentang isu yang dijadikan sebagai topik bahasan. Melalui lomba ini penyelenggara berharap dapat memberikan pengalaman serta meningkatkan kemampuan merespon suatu masalah dengan cepat",
          btnTitle: "Register Here",
        },
      ],
    },
  ]);

  const modalState = ref(false);
  const modalData = ref({
    id: 0,
    title: "Lorem ipsum",
    imgUrl: "https://cdn.artqtion.com/1.png",
    btnLink: "",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi excepturi minima eos distinctio ipsum nesciunt voluptatem, qui, ad temporibus iusto facilis? Optio facilis modi ipsa, placeat adipisci voluptas impedit dolores?",
    btnTitle: "Register Here",
  });

  const openModal = (event) => {
    modalState.value = true;
    modalData.value = event;
  };

  const eventTitles = events.value.map((event) => event.name);

  return { events, eventTitles, openModal, modalState, modalData };
});
