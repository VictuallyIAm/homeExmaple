<template>
  <div class="layoutWithForm">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.layoutWithForm {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  position: relative;
  font-size: larger;
  margin-bottom: 2rem;
}
</style>
