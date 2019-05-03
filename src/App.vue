<template>
  <div id="app">
    <Header/>
    <Search/>
    <Carousel v-bind:carouselData="cardBook"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import Categories from "./components/Categories.vue";
import Carousel from "./components/Carousel.vue";
import CardBookBox from "./components/CardBookBox.vue";

export default {
  name: "app",
  components: {
    Header,
    Search,
    Categories,
    Carousel,
    CardBookBox
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: "john",
          email: "john@mail.com",
          password: "123456",
          login: false
        },
        {
          id: 2,
          name: "maik",
          email: "maik@mail.com",
          password: "123456",
          login: false
        },
        {
          id: 3,
          name: "uzi",
          email: "uzi@mail.com",
          password: "123456",
          login: false
        }
      ],
      category: [
        {
          id: 1,
          name: "Action",
          icon: "snowboarding",
          color: "#0075f6"
        },
        {
          id: 2,
          name: "Drama",
          icon: "theater-masks",
          color: "#b824a4"
        },
        {
          id: 3,
          name: "Comedy",
          icon: "grin-squint-tears",
          color: "#fdd043"
        },
        {
          id: 4,
          name: "Romance",
          icon: "heart",
          color: "#ff0b55"
        },
        {
          id: 5,
          name: "Tragedy",
          icon: "car-crash",
          color: "#014441"
        },
        {
          id: 6,
          name: "Horror",
          icon: "ghost",
          color: "#01252a"
        }
      ],
      cardBook: [
        {
          id: 1,
          img: "https://picsum.photos/600/300/?image=25",
          title: "The World of Abstract Art",
          review: "24 Review"
        },
        {
          id: 2,
          img: "https://picsum.photos/600/300/?image=25",
          title: "Enchantment",
          review: "24 Review"
        },
        {
          id: 3,
          img: "https://picsum.photos/600/300/?image=25",
          title: "The Appentice",
          review: "24 Review"
        },
        {
          id: 4,
          img: "https://picsum.photos/600/300/?image=25",
          title: "The Appentice",
          review: "24 Review"
        },
        {
          id: 5,
          img: "https://picsum.photos/600/300/?image=25",
          title: "The Appentice",
          review: "24 Review"
        },
        {
          id: 6,
          img: "https://picsum.photos/600/300/?image=25",
          title: "The Appentice",
          review: "24 Review"
        },
        {
          id: 7,
          img: "https://picsum.photos/600/300/?image=25",
          title: "The Appentice",
          review: "24 Review"
        },
        {
          id: 8,
          img: "https://picsum.photos/600/300/?image=25",
          title: "The Appentice",
          review: "24 Review"
        },
        {
          id: 9,
          img: "https://picsum.photos/600/300/?image=25",
          title: "The Appentice",
          review: "24 Review"
        },
        {
          id: 10,
          img: "https://picsum.photos/600/300/?image=25",
          title: "The Appentice",
          review: "24 Review"
        }
      ]
    };
  }
};
</script>