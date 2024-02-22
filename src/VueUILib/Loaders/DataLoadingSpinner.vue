<template>
  <div id="loadingOverlayEdit">
    <div class="cv-spinnerEdit">
      <span class="spinnerEdit"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataLoadingSpinner',
}
</script>

<style scoped>
#loadingOverlayEdit {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  display: block;
  background: rgba(0, 0, 0, 0.6);
}

.cv-spinnerEdit {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinnerEdit {
  width: 60px;
  height: 60px;
  border: 4px #ddd solid;
  border-top: 4px #2e93e6 solid;
  border-radius: 50%;
  animation: sp-anime 0.8s infinite linear;
}

@keyframes sp-anime {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(359deg);
  }
}
</style>
