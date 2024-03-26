import { createApp } from "vue";
import { createStore } from "vuex";
import "./index.css";

import App from "./App.vue";

const store = createStore({
  state() {
    return {
      count: 1,
    };
  },
  mutations: {
    addOne(state) {
      console.log("addOne");
      state.count++;
    },
  },
});

createApp(App).use(store).mount("#app");
