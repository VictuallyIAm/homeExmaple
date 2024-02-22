<template lang="">
  <div class="modal-body">{{ text }}</div>
  <div class="modal-footer mb-0 pb-0 pr-0">
    <NarrowGrayButton :title="cancelTitle" :onClick="onCancel" />
    <NarrowRedButton :title="okTitle" :onClick="onConfirm" />
  </div>
</template>
<script>
export default {
  props: ['text', 'onConfirm', 'onCancel', 'cancelTitle', 'okTitle'],
};
</script>
<style lang=""></style>
