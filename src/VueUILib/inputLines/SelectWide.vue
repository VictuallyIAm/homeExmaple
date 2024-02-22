<template>
  <div class="inputLineLabel">
    <span>{{ label }}</span>
    <div v-if="propName">
      <v-select
        v-model="localValue"
        :disabled="disabled"
        :items="items"
        :item-title="itemTitle"
        :item-value="itemValue"
        @change="onChange"
      >
        <template v-slot:append-inner v-if="innerPath">
          <CircleButton :onClick="onBtnInnerClick" :path="innerPath" />
        </template>
      </v-select>
    </div>
    <div class="text-right" v-if="replacePath || replaceBtnTitle">
      <WideGrayButton :onClick="onBtnReplaceClick" :title="replaceBtnTitle" />
    </div>
    <div v-if="outerPath" class="outerContainer">
      <CircleButton :onClick="onBtnOuterClick" :path="outerPath" />
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'label',
    'items',
    'itemTitle',
    'itemValue',
    'propName',
    'propValue',
    'disabled',
    'onChange',
    'onBtnOuterClick',
    'onBtnInnerClick',
    'onBtnReplaceClick',
    'replaceBtnTitle',
    'innerPath',
    'outerPath',
    'replacePath',
  ],
  data() {
    return {
      localValue: this.propValue,
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
<style lang="css" scoped>
.inputLineLabel {
  display: grid;
  grid-template-columns: 3fr 6fr 1fr;
  align-items: start;
  margin-bottom: 1rem;
}
span {
  margin-top: 0.5rem;
}
.outerContainer {
  margin-top: 0.4rem;
  margin-left: 0.5rem;
}
</style>
