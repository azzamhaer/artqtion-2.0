import { ref } from "vue";
import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", () => {
  const days = ref([
    {
      id: 1,
      title: "Day 1",
      schedules: [
        {
          id: 1,
          acara: "Gladi Kotor",
        },
        {
          id: 2,
          acara: "Gladi Resik",
        },
      ],
    },
    {
      id: 2,
      title: "Day 2", // Corrected title
      schedules: [
        {
          id: 3,
          acara: "Grand Opening",
        },
        {
          id: 4,
          acara: "Penyambutan",
        },
        {
          id: 5,
          acara: "Kanvas Sejarah",
          imgUrl: "http://cdn.artqtion.com/kanvas-sejarah.png",
        },
        {
          id: 6,
          acara: "Debat",
          imgUrl: "http://cdn.artqtion.com/debate.png",
        },
        {
          id: 7,
          acara: "Grand Closing",
        },
      ],
    },
    {
      id: 3,
      title: "Online",
      schedules: [
        {
          id: 8,
          acara: "Pendaftaran",
          tanggal: "15 - 22 Februari 2024",
        },
        {
          id: 9,
          acara: "Pengumpulan Akhir",
          tanggal: "",
        },
        {
          id: 10,
          acara: "Grand Closing",
          tanggal: "2 Maret 2024", // Corrected date
        },
      ],
    },
  ]);
  const events = ref([
    {
      id: 1,
      name: "Online",
      competitions: [
        {
          id: "web-landing-page",
          title: "Web Landing Page",
          imgUrl: "http://cdn.artqtion.com/landing-page.png",
          btnLink: "/register",
          description:
            "Lomba membuat Landing Page merupakan ajang untuk mengekspresikan dan meningkatkan kemampuan kreativitas dan pemrograman peserta dalam menciptakan Landing Page, dengan tema “Historical Event of Islam”. Maka, peserta akan ditantang untuk membuat Landing page dengan kemampuan programmingnya dan mengkolaborasikannya dengan kemampuan kreatif dan inovatif.",
          btnTitle: "Register Here",
          terms: [
            {
              nama: "Syarat Peserta",
              isi: ["Lomba terbuka untuk umum.", "Peserta berupa perorangan dengan batasan usia maksimal 20 tahun.", "Setiap peserta hanya diperbolehkan mengirimkan satu entri."],
            },
            {
              nama: "Ketentuan Teknis",
              isi: [
                "Web landing page harus dibuat menggunakan HTML, CSS, dan jika diperlukan JavaScript.",
                "Peserta diperbolehkan menggunakan efek paralaks atau teknik lainnya untuk mempercantik web landing page mereka.",
                "File entri harus diunggah dalam format .zip yang berisi semua file terkait (HTML, CSS, gambar, dll.).",
                "Ukuran maksimum file yang diunggah adalah 20 MB.",
              ],
            },
            {
              nama: "Hak Cipta dan Kepemilikan",
              isi: ["Peserta tetap memiliki hak cipta penuh atas karya yang dikirimkan.", "Dengan mengirimkan entri, peserta atau tim memberikan izin kepada panitia untuk menggunakan entri tersebut untuk keperluan promosi dan pemasaran."],
            },
          ],
        },
        {
          id: "news-anchor",
          title: "News Anchor",
          imgUrl: "http://cdn.artqtion.com/news-anchor.png",
          btnLink: "/register",
          description:
            "Lomba news anchor merupakan salah satu kompetisi video yang para pesertanya akan memposisikan dirinya (peserta) sebagai seorang penyiar televisi. Lomba news anchor berharap dapat mengasah kemampuan public speaking di depan kamera dengan membahas sebuah topik yang akan di tentukan di lomba ini. Serta dapat memberikan edukasi terhadap khalayak serta membangun jiwa kompetitif diantara para peserta",
          btnTitle: "Register Here",
          terms: [
            {
              nama: "Syarat Peserta",
              isi: ["Lomba terbuka untuk umum.", "Peserta berupa perorangan dengan batasan usia maksimal 20 tahun.", "Setiap peserta hanya diperbolehkan mengirimkan satu entri."],
            },
            {
              nama: "Hak Cipta",
              isi: ["Dengan mengirimkan entri, peserta setuju bahwa video yang dikirimkan dapat digunakan oleh panitia lomba untuk keperluan promosi dan publikasi, tanpa memerlukan persetujuan tambahan dari peserta."],
            },
          ],
        },
        {
          id: "komik-antologi",
          title: "Komik Antologi",
          imgUrl: "http://cdn.artqtion.com/komik-antalogi.png",
          btnLink: "/register",
          description:
            "Lomba komik antologi merupakan kompetisi untuk membuat karya komik edukatif yang berbentuk komik strip dengan tema yang telah ditentukan. Dari hasil karya komik peserta, akan diseleksi dan yang terpilih komiknya nantinya akan dikumpulkan lalu diterbitkan agar bisa disebarluaskan. Komik yang dihasilkan bertujuan untuk mengedukasi dan memberikan wawasan yang luas untuk masyarakat yang membacanya.",
          btnTitle: "Register Here",
          terms: [
            {
              nama: "Syarat Peserta",
              isi: ["Lomba terbuka untuk umum.", "Peserta berupa perorangan dengan batasan usia maksimal 20 tahun.", "Setiap peserta hanya diperbolehkan mengirimkan satu entri.", "peserta diwajibkan membayar Rp.50.000 saat mendaftar"],
            },
            {
              nama: "Ketentuan Lomba",
              isi: [
                {
                  nama: "Format Komik:",
                  content: ["Komik dikirimkan dalam bentuk digital.", "Ukuran komik: - Minimal 6 panel dalam 1 halaman. - Maksimal 9 panel dalam 1 halaman.", "Peserta diwajibkan membuat 4 halaman komik."],
                },
                { nama: "Penyerahan Karya:", content: ["Karya komik harus dikirimkan melalui website ArtQtion.", "Setiap peserta harus memberikan informasi kontak yang valid untuk keperluan komunikasi selanjutnya."] },
                {
                  nama: "Seleksi dan Pengumuman Finalis:",
                  content: ["Setiap komik akan diseleksi oleh panel juri.", "Hingga 8 komik terbaik akan dipilih sebagai finalis.", "Pengumuman finalis akan dilakukan melalui media sosial dan situs resmi lomba."],
                },
              ],
            },
          ],
        },
        {
          id: "gamejam",
          title: "GameJam",
          imgUrl: "http://cdn.artqtion.com/gamjam.png",
          btnLink: "/register",
          description:
            "Lomba Membuat Game , ajang membuat sebuah “Game” bukan hanya sekedar menjadi hiburan tapi dapat menjadi sarana peserta dalam belajar mengembangkan hardskill yang dimiliki , serta menjadi media bagi para peserta untuk mengembangkan kreativitas. Pada Kompetisi ini peserta dapat menggunakan aplikasi Scratch dengan tema yaitu “Back to Islamic Golden Age” dan di harapkan para peserta dapat mengembangkan ide sesuai dengan tema yang telah di tentukan.",
          btnTitle: "Register Here",
          terms: [
            {
              nama: "Syarat Peserta",
              isi: ["Lomba terbuka untuk umum.", "Peserta berupa perorangan dengan batasan usia maksimal 20 tahun.", "Setiap peserta hanya diperbolehkan mengirimkan satu entri."],
            },
            {
              nama: "Ketentuan Lomba",
              isi: [
                {
                  nama: "Platform Pengembangan Game",
                  content: ["Peserta harus menggunakan aplikasi Scratch dalam mengembangkan game mereka.", "Segala jenis bantuan atau kolaborasi dengan pihak lain di luar tim yang terdaftar tidak diperbolehkan"],
                },
                {
                  nama: "Pengumpulan Entri",
                  content: ["Setiap entri harus dikirimkan dalam format proyek Scratch yang lengkap.", "Entri dikirimkan melalui web ArtQtion", "Peserta harus memastikan bahwa entri mereka dapat diakses dan dimainkan secara publik."],
                },
                {
                  nama: "Hak Cipta dan Lisensi",
                  content: [
                    "Peserta akan tetap memiliki hak cipta penuh atas karya mereka.",
                    "Dengan mengirimkan entri, peserta setuju untuk memberikan izin kepada penyelenggara untuk menggunakan karya mereka untuk keperluan promosi, termasuk namun tidak terbatas pada penggunaan di media sosial, situs web, dan materi pemasaran.",
                  ],
                },
                {
                  nama: "Perilaku Etis",
                  content: ["Peserta diharapkan untuk mematuhi semua aturan etika dan hukum yang berlaku dalam pengembangan game.", "Konten yang mengandung unsur kekerasan, pelecehan, atau diskriminasi tidak akan diterima."],
                },
              ],
            },
          ],
        },
        {
          id: "solo-showcase",
          title: "Solo Showcase",
          imgUrl: "http://cdn.artqtion.com/monolog.png",
          btnLink: "/register",
          description:
            "Lomba Solo Showcase merupakan sebuah kompetisi yang bertujuan agar para peserta dapat mengembangkan potensi secara literal maupun kemampuan dalam berperan. Lomba ini juga dapat menjadi media bagi peserta untuk memberikan perspektif unik yang sesuai dengan tema yang telah di tentukan. Melalui Solo Showcase , para peserta dilatih untuk menghadapi ",
          btnTitle: "Register Here",
          terms: [
            {
              nama: "Ketentuan Pengumpulan Karya",
              isi: [
                "Karya yang dilombakan adalah karya sendiri, belum pernah dipublikasikan dan belum pernah diikutsertakan pada lomba lain.",
                "Karya yang dikumpulkan tidak mengandung unsur provokasi yang bersifat negatif, pornografi, maupun SARA (Suku, Agama, Ras, dan Antar golongan) serta segala hal yang melanggar etika, moral dan hukum.",
                "Peserta hanya diperkenankan untuk mengirim satu karya monolog. Durasi karya Video Monolog, minimal 3 menit dan maksimal 7 menit.",
                { nama: "Format dan Resolusi Video:", content: ["Resolusi : 1280 x 720", "Format : mp4"] },
                "Buat karya dengan kualitas gambar dan suara yang dapat dicerna (ditonton dan didengar dengan baik), dan lebih disarankan agar peserta dapat menambahkan subtitle pada masing-masing video yang dilombakan.",
                "Karya yang dikirim menjadi hak panitia penyelenggara dan karenanya panitia penyelenggara berhak mempublikasikan karya di media apapun seperti sosial media, sampai publikasi acara.",
                "Karya diupload kepada medsos masing-masing lalu dikirim ke web ArtQtion peserta, baik perorangan maupun tim dengan format nama:",
                '"VIDEO LOMBA SOLO SHOWCASE_NAMA PESERTA_ASAL SEKOLAH" dan mencantumkan hastag: #ARTQTION2024, #IslamicGoldenAge, #TakmirFuture, #LombaSoloShowcase.',
                "Panitia akan memberikan konfirmasi melalui email dan WhatsApp bahwa karya Anda sudah masuk dan sedang dalam proses verifikasi.",
              ],
            },
          ],
        },
        {
          id: "thematic-tafakkur",
          title: "Thematic Tafakkur",
          imgUrl: "http://cdn.artqtion.com/tadabbur.png",
          btnLink: "/register",
          description:
            "Lomba Thematic Tafakkur merupakan lomba dengan konsep video singkat yang didalamnya terkandung ayat Al-quran yang dikupas menjadi se-demikian menarik bagi banyak kalangan. Diharapkan melalui lomba Thematic Tafakkur masyarakat dapat mendapatkan banyak wawasan yang bermanfaat tentang ayat-ayat Al-Quran.",
          btnTitle: "Register Here",
          terms: [
            {
              nama: "Syarat Peserta",
              isi: ["Lomba terbuka untuk umum.", "Peserta berupa perorangan dengan batasan usia maksimal 20 tahun.", "Setiap peserta hanya diperbolehkan mengirimkan satu entri."],
            },
            {
              nama: "Persyaratan Video",
              isi: [
                "Durasi video maksimal 5 menit.",
                "Video harus memuat penjelasan pemahaman mendalam terhadap ayat Al-Qur'an yang ditentukan.",
                "Penjelasan dalam video harus disampaikan dengan jelas dan informatif.",
                "Peserta diharapkan untuk menampilkan kreativitas dalam penyampaian materi.",
                "Bahasa yang digunakan dalam video harus baku dan sesuai dengan tata bahasa yang benar.",
              ],
            },
            {
              nama: "Pengunggahan dan Penyebaran",
              isi: [
                "Peserta wajib mengunggah video mereka ke platform media sosial short (seperti TikTok) dengan menggunakan tagar #artqtion2024 #taddaburmodern #alquran #sekolahimpian.",
                "Peserta bertanggung jawab untuk memastikan bahwa video mereka terunggah dengan benar dan dapat diakses oleh publik.",
              ],
            },
            {
              nama: "Hak Cipta dan Penggunaan Materi",
              isi: ["Peserta bertanggung jawab atas hak cipta materi yang disampaikan dalam video.", "Panitia lomba berhak untuk menggunakan dan mempublikasikan video pemenang untuk kepentingan promosi dan dokumentasi lomba."],
            },
            {
              nama: "Penilaian dan Pengumuman Pemenang",
              isi: ["Penilaian akan dilakukan oleh juri yang ditunjuk oleh panitia lomba. Keputusan juri bersifat mutlak dan tidak dapat diganggu gugat.", "Pemenang akan diumumkan melalui platform yang ditetapkan oleh panitia."],
            },
            {
              nama: "KETENTUAN UMUM",
              isi: [
                "Panitia lomba berhak untuk mengubah atau membatalkan lomba jika terjadi keadaan yang memaksa tanpa pemberitahuan sebelumnya.",
                "Keputusan panitia lomba bersifat mutlak dan tidak dapat diganggu  gugat.",
                "Dengan mengikuti lomba ini, peserta dianggap telah menyetujui semua syarat dan ketentuan yang telah ditetapkan oleh panitia lomba.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Offline",
      competitions: [
        {
          id: "KanvasSejarah",
          title: "Kanvas Sejarah",
          imgUrl: "http://cdn.artqtion.com/kanvas-sejarah.png",
          btnLink: "/offlineregister",
          description:
            "Lomba kanvas sejarah merupakan kompetisi melukis menggunakan cat minyak dengan media kanvas. Diperbolehkan bagi para peserta untuk menumpahkan seluruh imajinasinya melalui karya seni dalam kompetisi ini, asalkan masih berada di dalam lingkup tema yang telah ditentukan. Lomba kanvas sejarah ini mengasah keahlian seni dari para peserta melalui karya lukisnya.",
          btnTitle: "Register Here",
          terms: [
            {
              nama: "Syarat Peserta",
              isi: [
                "Peserta adalah Siswa/I SMP dan SMA sederajat.",
                "Melampirkan surat keterangan siswa (SKS) dari sekolah.",
                "Pas foto 3x4 (2 lembar).",
                "Mengisi formulir pendaftaran.",
                "setiap tim diwajibkan membayar Rp. 150.000 saat mendaftar",
                "Peserta lomba wajib menggunakan seragam sekolah saat mengikuti lomba.",
                "Setiap sekolah maksimal mengirimkan 2 peserta lomba untuk mengerjakan kanvas.",
              ],
            },
            {
              nama: "Ketentuan Lomba",
              isi: [
                "Peserta wajib mendaftar ulang 30 menit sebelum lomba dimulai.",
                "Perlengkapan melukis sudah disiapkan oleh panitia, namun peserta diperbolehkan membawa alat lukis pribadi.",
                "Media yang digunakan peserta adalah kanvas 60x60 (disediakan dari panitia).",
                "Peserta lomba diberikan waktu 4 jam menyeleseikan lukisannya. Setelah waktu yang ditentukan selesai, peserta diwajibkan berhenti melukis.",
                "Peserta dipersilahkan untuk membawa gambaran lukisan yang akan di lukis dalam bentuk kertas.",
                "Peserta dilarang keras berbuat curang dengan cara apa pun.",
                "Bila melanggar peraturan di atas, maka peserta akan didiskualifikasi.",
                "Lukisan peserta harus mengikuti tema yang ditentukan.",
                "Keputusan juri adalah mutlak dan tidak dapat digangu gugat.",
                "Penggunaan spidol, pensil dan tipex dilarang pada saat sudah mulai melukis",
              ],
            },
          ],
        },
        {
          id: "Debat",
          title: "Debat",
          imgUrl: "http://cdn.artqtion.com/debate.png",
          btnLink: "/offlineregister",
          description:
            "Lomba debat merupakan perlombaan adu argumen yang dilakukan oleh 2 pihak dengan isu atau topik bahasan yang telah ditentukan oleh pihak panitia. Tentunya dalam mengikuti lomba debat ini diperlukan keterampilan dalam berargumentasi, juga memiliki pengetahuan yang mendalam tentang isu yang dijadikan sebagai topik bahasan. Melalui lomba ini penyelenggara berharap dapat memberikan pengalaman serta meningkatkan kemampuan merespon suatu masalah dengan cepat",
          btnTitle: "Register Here",
          terms: [
            {
              nama: "Syarat Peserta",
              isi: [
                "Peserta lomba adalah siswa berumur 14-17 wilayah Jabodetabek.",
                "Peserta lomba adalah tim yang terdiri dari 3 siswa yang berasal dari sekolah yang sama (laki-laki dan perempuan dilarang bergabung dalam satu tim).",
                "Setiap sekolah diperbolehkan mengirim lebih dari 1 tim untuk tahap seleksi esai, dan hanya diambil maksimal 2 tim dari tiap sekolah untuk tahap kompetisi debat.",
                "Setiap tim yang lolos seleksi esai diwajibkan membayar biaya pendaftaran sebesar Rp 100.000,- per tim. Setiap tim yang lolos tahap esai diwajibkan melunasi biaya pendaftaran paling lambat Tanggal Acara.",
                "Setiap tim hanya diperbolehkan mengirim 1 esai.",
                "Peserta atau anggota tim yang sudah terdaftar tidak dapat diganti dengan alasan apapun.",
              ],
            },
            {
              nama: "Ketentuan Lomba",
              isi: [
                "Lomba terdiri dari tahap seleksi esai dan tahap lomba debat.",
                {
                  nama: "Setiap tim mengirimkan esai berbahasa Indonesia dengan panjang tulisan 750-1000 kata di kertas ukuran A4 dengan ketentuan:",
                  content: ["Font : Times New Roman", "Font Size : 12 (untuk judul dibold)", "Align : Justify", "Spasi : 1.5", "Margin : 4-4-3-3"],
                },
                "Panitia hanya akan mengambil 8 tim dari tahap seleksi esai untuk maju ke tahap lomba debat.",
                "Topik debat serta tim yang menjadi pro dan kontra akan diundi di hari perlombaan.",
                "Setiap tim menyiapkan bahan untuk debat di hari perlombaan dengan waktu persiapan 30 menit.",
                "Peserta diperbolehkan menggunakan fasilitas hp, laptop atau internet untuk menyiapkan bahan.",
                {
                  nama: "Setiap tim mengikuti babak penyisihan dengan sistem sebagai berikut:",
                  content: [
                    "Tim pro memaparkan argumen selama 2 menit",
                    "Tim kontra memaparkan argumen selama 2 menit",
                    "Tim pro dan kontra saling menyanggah pendapat selama 10 menit",
                    "Tim pro memaparkan kesimpulan selama 2 menit",
                    "Tim kontra memaparkan kesimpulan selama 2 menit",
                  ],
                },
                "Berdasarkan babak penyisihan, akan dipilih 4 tim yang lolos ke babak semifinal.",
                "Sebelum babak semifinal dimulai, dilakukan pengundian topik dan tim pro-kontra, serta akan diberi waktu penyiapan bahan selama 30 menit.",
                "Berdasarkan babak semifinal, akan dipilih 2 tim yang lolos ke babak final.",
                "Sebelum babak final dimulai, dilakukan pengundian topik dan tim pro-kontra, serta akan diberi waktu penyiapan bahan selama 15 menit.",
                "Babak final dan semifinal dilakukan dengan sistem pertandingan yang sama dengan babak penyisihan.",
                "Peserta debat diwajibkan untuk menggunakan dan mencantumkan dalil (Quran/Hadits) saat mengeluarkan argumentasi di setiap babak (min. 1x).",
                "Peserta debat tidak boleh menggunakan bahasa kasar atau yang mengandung unsur yang bertentangan dengan peraturan perundang-undangan yang berlaku di Indonesia seperti kesusilaan, moral, kekerasan dan tidak mengandung unsur pornografi, serta bertentangan dengan SARA (suku, agama, dan ras).",
                "Peserta menggunakan Bahasa Indonesia yang sesuai dengan EYD.",
                "Peserta menjaga sopan santun selama pertandingan.",
                "Essay yang dilombakan pada tahap seleksi essay merupakan karya asli tim dan belum pernah diikut sertakan atau dipublikasikan di kompetisi lain.",
                "Apabila dikemudian hari terdapat gugatan hak cipta, pihak panitia tidak bertanggung jawab atas hal tersebut, panitia akan berasumsi bahwa seluruh karya yang diikutsertakan merupakan karya orisinil peserta.",
                "Panitia berhak menggunakan karya untuk keperluan publikasi.",
              ],
            },
          ],
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
    terms: [{}],
  });

  const openModal = (event) => {
    modalState.value = true;
    modalData.value = event;
  };

  const eventTitles = events.value.map((event) => event.name);
  const daysTitles = days.value.map((event) => event.title);

  return { events, eventTitles, openModal, modalState, modalData, days, daysTitles };
});
