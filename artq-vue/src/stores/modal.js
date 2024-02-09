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
          btnLink: "../assets/img/bg-1.jpg",
          description: "Lorem Ipsum",
          btnTitle: "Register Here",
        },
        {
          id: 2,
          title: "News Anchor",
          btnLink: "../assets/img/bg-1.jpg",
          description: "Lorem Ipsum",
          btnTitle: "Register Here",
        },
        {
          id: 3,
          title: "Komik Antologi",
          btnLink: "../assets/img/bg-1.jpg",
          description: "Lorem Ipsum",
          btnTitle: "Register Here",
        },
        {
          id: 4,
          title: "GamJam",
          btnLink: "../assets/img/bg-1.jpg",
          description: "Lorem Ipsum",
          btnTitle: "Register Here",
        },
        {
          id: 5,
          title: "Monolog",
          btnLink: "../assets/img/bg-1.jpg",
          description: "Lorem Ipsum",
          btnTitle: "Register Here",
        },
        {
          id: 6,
          title: "Tadabbur+",
          btnLink: "../assets/img/bg-1.jpg",
          description: "Lorem Ipsum",
          btnTitle: "Register Here",
        },
      ],
    },
    {
      id: 2,
      name: "Online",
      competitions: [
        {
          id: 1,
          title: "Kanvas Sejarah",
          btnLink: "../assets/img/bg-1.jpg",
          description: "Lorem Ipsum",
          btnTitle: "Register Here",
        },
        {
          id: 1,
          title: "Debat",
          btnLink: "../assets/img/bg-1.jpg",
          description: "Lorem Ipsum",
          btnTitle: "Register Here",
        },
        {
          id: 1,
          title: "Talkshow",
          btnLink: "../assets/img/bg-1.jpg",
          description: "Lorem Ipsum",
          btnTitle: "Register Here",
        },
        // Other competitions...
      ],
    },
  ]);

  const modal = ref(false);
  const modalAttributes = ref({
    title: "",
    content: "",
    btnTitle: "",
    btnLink: "",
  });

  const eventTitles = events.value.map((event) => event.title);

  return { events, eventTitles };
});
