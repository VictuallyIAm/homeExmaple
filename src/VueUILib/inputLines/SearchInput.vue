<template>
  <v-text-field
    type="text"
    :placeholder="placeholder"
    :label="label"
    v-model="localValue"
    @input="onInput"
    v-on:keyup.enter="onEnter"
    ><template v-slot:append-inner>
      <svg-icon
        type="mdi"
        :path="mdiMagnify"
        size="25"
        color="gray"
        @click="onClick"
        style="cursor: pointer"
      ></svg-icon> </template
  ></v-text-field>
</template>
<script>
import { mdiMagnify } from '@mdi/js';

export default {
  props: [
    'label',
    'onEnter',
    'placeholder',
    'onInput',
    'onClick',
    'propValue',
    'propName',
  ],
  data() {
    return {
      localValue: this.propValue,
      mdiMagnify: mdiMagnify,
    };
  },
  watch: {
    propValue(newVal) {
      if (this.localValue !== newVal) {
        this.localValue = newVal;
      }
    },
    localValue(newVal) {
      this.$emit('updateProp', this.propName, newVal);
    },
  },
};
</script>
<style lang=""></style>
