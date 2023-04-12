import Vuex from "vuex";
const createStore = () => {
  return new Vuex.Store({
    state: {
      cart: [],
      axios: useNuxtApp().$axios,
      baseUrl: "https://limitless-lake-55070.herokuapp.com/",
    },
    mutations: {
      addToCart(state, product) {
        state.cart.push(product);
      },
    },
    actions: {
      addToCart({ commit }, product) {
        // Make the API call to add the product to the cart
        // ...

        // Update the store with the added product
        commit("addToCart", product);
      },
    },
    getters: {
      cartCount(state) {
        return state.cart.length;
      },
    },
  });
};
