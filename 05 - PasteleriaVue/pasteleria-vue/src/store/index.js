import { createStore } from "vuex";

export default createStore({
  state: {
    contador: 0,
  },
  getters: {},
  mutations: {
    mostrarCarrito() {
      const carrito = document.querySelector(".carrito-box");
      carrito.classList.add("active");
    },
    ocultarCarrito() {
      const carrito = document.querySelector(".carrito-box");

      carrito.classList.remove("active");
    },
    btnAumentar(state) {
      state.contador++;
    },
    btnMenos(state) {
      state.contador--;
    },
  },

  actions: {},
  modules: {},
});
