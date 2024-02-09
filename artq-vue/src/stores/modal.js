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
          id: 7,
          title: "Kanvas Sejarah",
          btnLink: "../assets/img/bg-1.jpg",
          description: "Lorem Ipsum",
          btnTitle: "Register Here",
        },
        {
          id: 8,
          title: "Debat",
          btnLink: "../assets/img/bg-1.jpg",
          description: "Lorem Ipsum",
          btnTitle: "Register Here",
        },
        {
          id: 9,
          title: "Talkshow",
          btnLink: "../assets/img/bg-1.jpg",
          description: "Lorem Ipsum",
          btnTitle: "Register Here",
        },
        // Other competitions...
      ],
    },
  ]);

  const modalState = ref(false);
  const modalData = ref({
    id: 0,
    title: "Lorem ipsum",
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

  return { events, eventTitles, openModal, modal, modalData };
});
