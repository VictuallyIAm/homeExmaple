<template>
  <v-btn
    variant="flat"
    color="#d42f2f"
    height="33px"
    min-width="90px"
    class="mx-1 text-none"
    @click="onClick"
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
  letter-spacing: 0;
}
</style>
