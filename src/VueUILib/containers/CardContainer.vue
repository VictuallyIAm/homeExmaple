<template>
  <v-container fluid>
    <div class="centeringLayout">
      <div class="listContainer">
        <slot></slot>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.listContainer {
  display: flex;
  flex-wrap: wrap;
}
</style>
