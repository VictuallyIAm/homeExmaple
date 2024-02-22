<template>
  <v-card class="pa-4">
    <v-card-title
      tag="h1"
      :style="{ margin: subtitle ? '0 0 -0.2rem 0' : ' 0 0 0.5rem 0' }"
    >
      <div class="header">
        <span>{{ title }}</span
        ><v-spacer></v-spacer>
        <v-btn
          icon
          width="15px"
          height="15px"
          style="margin-top: -0.5rem"
          variant="plain"
          color="black"
          @click="hide"
        >
          <v-icon size="13" color="black">mdi-close</v-icon>
        </v-btn>
      </div>
    </v-card-title>
    <v-card-subtitle tag="h4" v-if="subtitle" style="margin: 0 0 -1rem 0"
      >{{ subtitle }}
    </v-card-subtitle>
    <hr />
    <v-card-item>
      <slot></slot>
    </v-card-item>
    <div class="modal-footer mb-0 pb-0 pr-0" v-if="cancelTitle || okTitle">
      <div v-if="cancelTitle">
        <v-btn
          variant="outlined"
          rounded="1"
          height="33px"
          width="90px"
          class="mx-1 text-none"
          @click="hide"
        >
          {{ cancelTitle }}
        </v-btn>
      </div>
      <div v-if="okTitle">
        <v-btn
          variant="flat"
          color="#d42f2f"
          height="33px"
          width="90px"
          class="mx-1 text-none"
          @click="onsubmit"
        >
          {{ okTitle }}
        </v-btn>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  props: ['subtitle', 'title', 'hide', 'onsubmit', 'cancelTitle', 'okTitle'],
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
hr {
  margin: 0;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
}
h1 {
  font-size: 1.5rem;
  padding: 0;
  margin-bottom: 0;
  white-space: normal;
  color: #444;
}

h4 {
  padding: 0 0 20px 0;
  margin-top: 0;
  color: #555;
}
</style>
