<template>
  <div>
    <b-container class="pt-custom-1 pb-3">
      <b-row class="custom_row text-center">
        <b-col cols="6" md="6" v-bind:key="kategori.id" v-for="kategori in categori" class="custom_col">
          <CategoriesItem v-bind:categoryItem="kategori"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { truncate } from "fs";
import CategoriesItem from "./CategoriesItem.vue";
export default {
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    }
  },
  components: {
    CategoriesItem
  },
  props: { categori: Array },
  name: "Categories"
};
</script>

<style scoped>
.custom_list-group-item {
  border: none;
}
.custom_col {
  padding: 5px;
}
</style>
