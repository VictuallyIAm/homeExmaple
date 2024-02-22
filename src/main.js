import { registerPlugins } from "@/plugins";

import App from "./App.vue";
import FormWide from "@/VueUILib/forms/FormWide.vue";
import InputWide from "@/VueUILib/inputLines/InputWide.vue";
import SelectWide from "@/VueUILib/inputLines/SelectWide.vue";
import TextAreaWide from "@/VueUILib/inputLines/TextAreaWide.vue";
import InputNarrow from "@/VueUILib/inputLines/InputNarrow.vue";
import FormLayoutWithSideBar from "@/VueUILib/containers/FormLayoutWithSideBar.vue";
import SideNavBar from "@/VueUILib/containers/SideNavBar.vue";
import modalTemplate from "@/VueUILib/modal/modalTemplate.vue";
import CircleButton from "@/VueUILib/buttons/CircleButton.vue";
import WideGrayButton from "@/VueUILib/buttons/WideGrayButton.vue";
import SvgIcon from "@jamescoyle/vue-icon";

import { createApp } from "vue";

const app = createApp(App);

registerPlugins(app);

app
  .component("FormWide", FormWide)
  .component("InputWide", InputWide)
  .component("SelectWide", SelectWide)
  .component("TextAreaWide", TextAreaWide)
  .component("FormLayoutWithSideBar", FormLayoutWithSideBar)
  .component("SideNavBar", SideNavBar)
  .component("InputNarrow", InputNarrow)
  .component("modalTemplate", modalTemplate)
  .component("CircleButton", CircleButton)
  .component("WideGrayButton", WideGrayButton)
  .component("SvgIcon", SvgIcon);

app.mount("#app");
