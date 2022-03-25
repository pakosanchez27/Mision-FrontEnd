import { createStore } from 'vuex'

export default createStore({
  state: {
    
  },
  getters: {
  },
  mutations: {
   mostrarCarrito() {
      const carrito = document.querySelector('.carrito-box');
      if(carrito.classList.contains('active')){
        carrito.classList.remove('active');
      }else{
        carrito.classList.add('active')
      }
      
    },
  },
  actions: {
  },
  modules: {
  }
})
