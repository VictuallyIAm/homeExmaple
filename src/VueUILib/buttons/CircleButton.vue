<template>
  <v-btn
    icon
    class="border-thin"
    height="30"
    width="30"
    @click="onClick"
    :title="title"
    :type="type || 'button'"
  >
    <svg-icon type="mdi" :path="path" size="18" color="gray"></svg-icon>
  </v-btn>
</template>
<script>
import SvgIcon from '@jamescoyle/vue-icon';

export default {
  props: ['onClick', 'path', 'title', 'type'],
  components: {
    SvgIcon,
  },
  data() {
    return {};
  },
};
</script>
<style lang="css" scoped>
.border-thin {
  border: 1px solid #ddd;
}
</style>
