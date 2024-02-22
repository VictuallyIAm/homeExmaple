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
        :disabled="disabled"
      >
        <template v-slot:append-inner v-if="innerPath">
          <v-btn
            icon
            class="border-thin"
            height="30"
            width="30"
            @click="onBtnInnerClick"
          >
            <svg-icon
              type="mdi"
              :path="innerPath"
              size="18"
              color="gray"
            ></svg-icon>
          </v-btn>
        </template>
      </v-text-field>
    </div>
    <div class="text-right" v-if="replacePath || replaceBtnTitle">
      <v-btn
        height="40px"
        width="130px"
        class="mx-1 text-none"
        @click="onBtnReplaceClick"
      >
        {{ replaceBtnTitle }}
      </v-btn>
    </div>
    <div v-if="outerPath" class="outerContainer">
      <v-btn
        icon
        class="border-thin"
        height="30"
        width="30"
        @click="onBtnOuterClick"
      >
        <svg-icon
          type="mdi"
          :path="outerPath"
          size="18"
          color="gray"
        ></svg-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="javascript">
import SvgIcon from '@jamescoyle/vue-icon';

export default {
  components: {
    SvgIcon,
  },
  props: [
    'label',
    'type',
    'rules',
    'onInput',
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
  grid-template-columns: 3fr 3fr 1fr 3fr;
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
