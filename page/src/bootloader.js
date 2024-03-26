import { createApp } from "vue";
import Store from "store/Store";

import "./index.css";

import App from "./App.vue";

createApp(App).use(Store).mount("#app");
