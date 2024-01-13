import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";

export default createVuetify({
  defaults: {
    VAppBar: {
      VBtn: { variant: "plain", rounded: "1" },
    },
    VBtn: { variant: "outlined", rounded: "1" },
    VTextField: {
      variant: "outlined",
      density: "compact",
      baseColor: "blue-grey-lighten-1",
      color: "grey-darken-1",
    },
    VTextarea: {
      variant: "outlined",
      density: "compact",
      baseColor: "blue-grey-lighten-1",
      color: "grey-darken-1",
    },
    VSelect: {
      variant: "outlined",
      density: "compact",
      baseColor: "blue-grey-lighten-1",
      color: "grey-darken-1",
    },
    VCombobox: {
      variant: "outlined",
      density: "compact",
      baseColor: "blue-grey-lighten-1",
      color: "grey-darken-1",
    },
  },
  //
});
