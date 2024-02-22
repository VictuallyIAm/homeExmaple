<template>
  <div class="sideBar">
    <v-list-item-title tag="h2"> {{ title }} </v-list-item-title>
    <v-list-item-subtitle tag="h3">{{ subtitle }} </v-list-item-subtitle>
    <v-divider></v-divider>
    <slot></slot>
    <v-list-item
      v-for="item in items"
      :key="item.title"
      link
      :title="item.title"
      :height="height"
      :active="active"
      @click="onclick"
    ></v-list-item>
  </div>
</template>
<script>
export default {
  props: ['items', 'title', 'subtitle', 'height', 'active', 'onclick'],
};
</script>
<style lang="css" scoped>
.sideBar {
  position: sticky;
  width: 100%;
  top: 10px;
  height: 100vh;
}
h2 {
  font-size: 1.5rem;
  padding: 5px 5px 0 5px !important;
  white-space: normal;
  margin-bottom: 5px !important;
}
h3 {
  font-size: 0.775rem;
  padding: 0 5px 5px 5px !important;
  margin-top: 0px !important;
}
</style>
<style>
.v-list-item {
  border-radius: 7px 0 0 7px !important;
}
</style>
