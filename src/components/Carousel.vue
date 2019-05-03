<template>
  <div>
    <div class="container custom_container">
      <h3 class="header_tittle">Popular Story</h3>
      <carousel
        :autoplay="true"
        :per-page="4"
        spacePaddingMaxOffsetFactor="10"
        touchDrag="true"
      >
        <slide v-bind:key="karusel.id" v-for="karusel in carouselData">
          <CardBookBox v-bind:cardItem="karusel"/>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import CardBookBox from "./CardBookBox.vue";

export default {
  data() {
    return {
      pagerSize: [
        {
          pSize: ""
        }
      ]
    };
  },
  methods: {
    handleSize() {
      let pSize = this.pagerSize;
      if (window.matchMedia("screen and (max-width: 500px)").matches) {
        pSize = '2';
      }
      return pSize.length;
    }
  },
  props: { carouselData: Array },
  components: {
    Carousel,
    Slide,
    CardBookBox
  }
};
</script>
