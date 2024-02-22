<template>
  <div class="inputLineLabel">
    <span>{{ label }}</span>
    <div v-if="propName">
      <v-textarea
        auto-grow
        rows="10"
        :type="type"
        v-model="localValue"
        :rules="rules"
        @input="onInput"
        @update:focused="onFocused"
        :disabled="disabled"
      >
        <template v-slot:append-inner v-if="innerPath">
          <CircleButton :onClick="onBtnInnerClick" :path="innerPath" />
        </template>
      </v-textarea>
    </div>
    <div class="text-right" v-if="replacePath || replaceBtnTitle">
      <WideGrayButton :onClick="onBtnReplaceClick" :title="replaceBtnTitle" />
    </div>
    <div v-if="outerPath" class="outerContainer">
      <CircleButton :onClick="onBtnOuterClick" :path="outerPath" />
    </div>
    <slot></slot>
  </div>
</template>

<script lang="js">

export default {
  components: {
  },
  props: [
    'label',
    'type',
    'rules',
    'onInput',
    'onFocused',
    'propName',
    'propValue',
    'disabled',
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
    }
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
}
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
<style></style>
