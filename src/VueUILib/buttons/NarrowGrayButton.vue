<template>
  <v-btn
    height="33px"
    min-width="90px"
    class="mx-1 text-none"
    @click="onClick"
    style="border: 1px solid gray"
    :type="type || 'button'"
  >
    <svg-icon
      class="mr-2"
      type="mdi"
      :path="pathBefore"
      v-if="pathBefore"
    ></svg-icon>
    {{ title }}
    <svg-icon
      class="mr-2"
      type="mdi"
      :path="pathAfter"
      v-if="pathAfter"
    ></svg-icon>
  </v-btn>
</template>
<script>
export default {
  props: ['title', 'onClick', 'type', 'pathBefore', 'pathAfter'],
};
</script>
<style lang="css">
.v-btn__content {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
  letter-spacing: 0;
}
</style>
