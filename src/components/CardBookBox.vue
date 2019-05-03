<template>
  <div>
    <div class="card cardC">
      <img class="card-img-top img-card-c" :src="cardItem.img">
      <div class="card-body card-body-custom">
        <h5 class="card-title">{{cardItem.title}}</h5>
        <p>{{cardItem.review}}</p>
        <b-button class="btn_outline_yellow-custom1">See detail</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBookBox",
  props: { cardItem: Object }
};
</script>

<style scoped>

</style>
