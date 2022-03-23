<template>
    

  <nav class="nav">
    <div class="logo">
      <router-link to="/">
        <img src="../../src/assets/img/logoB.png" alt="" />
      </router-link>
      |
    </div>
    <div class="enlaces">
      <router-link to="/">Home</router-link> |
      <router-link to="/nosotros">Nosotros</router-link>
      <router-link to="/menu">Menú</router-link>
      <router-link to="/crear">Crear</router-link>
      <router-link to="/contacto">Contacto</router-link>
      <router-link to="/#" class="carrito">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-shopping-cart"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="6" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>
        <div class="contador">
          <p>1</p>
        </div>
      </router-link>
    </div>
  </nav>
  <footer/> 
  <router-view />
</template>

<script>
export default {

}
</script>

<style>

</style>