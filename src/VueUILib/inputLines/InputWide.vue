<template>
  <div class="inputLineLabel">
    <span>{{ label }}</span>
    <div v-if="propName || propKey">
      <v-text-field
        :type="type"
        v-model="localValue"
        :rules="rules"
        @input="onInput"
        @update:focused="onFocused"
        @change="
          (e) => {
            if (onChange) {
              onChange(e);
            }
          }
        "
        :disabled="disabled"
        :id="id"
      >
        <template v-slot:append-inner v-if="innerPath">
          <CircleButton :onClick="onBtnInnerClick" :path="innerPath" />
        </template>
      </v-text-field>
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

  props: [
    'label',
    'type',
    'rules',
    'onInput',
    'onChange',
    'onFocused',
    'propName',
    'propValue',
    'propObject',
    'propKey',
    'disabled',
    'onBtnOuterClick',
    'onBtnInnerClick',
    'onBtnReplaceClick',
    'replaceBtnTitle',
    'innerPath',
    'outerPath',
    'replacePath',
    'id'
  ],
  data() {
    return {
      localValue: this.propValue || this.propObject?.[this.propKey],

    }
  },
  computed: {
    propObjValue() {
      return this.propObject?.[this.propKey];
    }
  },
  watch: {
    propValue(newVal) {
      if (this.localValue !== newVal) {
        this.localValue = newVal;
      }
    },
    propObjValue(newVal) {
      if (this.localValue !== newVal) {
        this.localValue = newVal;
      }
    },

    localValue(newVal) {
        this.$emit('updateProp', this.propName ||  this.propKey , newVal);
    },
  },
  created() {
    this.localValue = this.propValue;
  }

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
.v-input {
  margin-bottom: 0.3rem !important;
}
</style>
<style></style>
