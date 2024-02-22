<template lang="">
  <v-card>
    <div class="formLayout">
      <div
        :style="{
          width: width + 'px',
          height: height,
          minWidth: minWidth,
          minHeight: minHeight,
        }"
      >
        <v-card-title tag="h1">{{ title }}</v-card-title>
        <v-card-subtitle tag="h4">{{ subtitle }}</v-card-subtitle>
        <slot></slot>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  props: ['title', 'subtitle', 'width', 'height', 'minWidth', 'minHeight'],
};
</script>
<style lang="css" scoped>
.formLayout {
  margin: 2rem;
  display: flex;
  justify-content: center;
}

h1 {
  font-size: 1.5rem;
  padding: 0;
  margin-bottom: 0;
  white-space: normal;
  color: #444
}

h4 {
  padding: 0 0 20px 0;
  margin-top: 0;
  color: #555
}
</style>
<style>
input.v-field__input::-webkit-calendar-picker-indicator {
  filter: invert(0.4);
}
.v-label--clickable {
  margin-top: 5px !important;
}
.mdi-menu-down::before {
  color: #333 !important;
}
</style>
