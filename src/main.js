import { createApp } from "vue";
import App from "./App.vue";

import InputField from "@/components/InputField.vue";
import AddButton from "@/components/AddButton.vue";
import Checkbox from "@/components/Checkbox.vue";

const app = createApp(App);
app.component("InputField", InputField);
app.component("AddButton", AddButton);
app.component("CheckBox", Checkbox);
app.mount("#app");
