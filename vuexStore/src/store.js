import { createStore } from "vuex";

const store = createStore({
    state() {
      return {
        count: 123,
      };
    },
    mutations: {
      addOne(state) {
        console.log("addOne");
        state.count++;
      },
    },
  });

  export default store