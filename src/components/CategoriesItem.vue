<template>
  <div>
    <b-list-group>
      <b-list-group-item button class="custom_list-group-item" >
        <font-awesome-icon :icon="['fas', categoryItem.icon]" class="colorStyle" :style="{'color': categoryItem.color}"/>
        {{categoryItem.name}} 
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "CategoriesItem",
  props: { categoryItem: Object },
};
</script>

<style scoped>
.custom_list-group-item {
  border: none;
}
.colorStyle {
  float:left;
}
</style>
