<template>

   <div class="redes">
     <img src="./assets/img/facebook.png" alt="">
      <img src="./assets/img/instagram.png" alt="">
      <img src="./assets/img/twitter.png" alt="">
  </div>

  <nav class=" nav ">
    <div class="logo">
      <router-link to="/">
        <img src="../src/assets/img/logoB.png" alt="" />
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
  
  <router-view />
 <footer class="footer">
   <div class="footer-up">
     <div class="footer-logo">
       <img src="../src/assets/img/logoB.png" alt="Logo">
       <div class="footer-redes">
         <img src="../src/assets/img/fb.png" alt="facebook">
         <img src="../src/assets/img/in.png" alt="instagram">
         <img src="../src/assets/img/tw.png" alt="Twitter">
       </div>
     </div>
      
   
   <div class="footer-contenido">
     </div>
   </div>
   <div class="footer-down">
     <p>Todos los derechos reservados @ClenKode 2022</p>
   </div>
   
 </footer>
</template>


<script>
export default {
  setup(props) {},
};
</script>



<style>
:root{
  /* colors */
  --blanco: #fff;
  --negro: #000; 
  --azul: #10A0A0;

  /* Fonts */
  --principal: 'Roboto', sans-serif;

  /* font-weight */
  --lite: 300;
  --normal: 400:;
  --semiBold: 500;
  --bold: 700;
}
#app {
  font-family: var(--principal);
  
}
html {
    box-sizing: border-box;
    font-size: 62.5%; /* 1 rem = 10px */    
}
*, *:before, *:after {
    box-sizing: inherit;
}
body{
 
  margin: 0;
  

}
h1,h2,h3,p{
  margin: 0;
  padding: 0;
}
.nav { 
  min-width: 100%;
  display: flex;
  padding: 0 5rem;
  justify-content: space-between;
  align-items: center;
  position:absolute;
  z-index: 1;

}
.nav a {
 text-decoration: none;
 color: var(--blanco);
 font-size: 2.5rem;
}

.nav a.router-link-exact-active {
  color: var(--azul);
}
.logo img{
  width: 20rem;
  height: rem;

} 
.enlaces{
  display: flex;
  gap: 2rem;
  align-items: center;
}
.carrito{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.contador{
  background-color: var(--blanco);
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
}

.redes{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  top: 40%;
  position: fixed;
  z-index: 1;

  
}
.redes img{
  
  width: 5rem;
  height: 5rem;
}
.home{
  position: fixed;
  background-color: transparent;
}
.footer{
  background-color: var(--negro);
  padding: 0 5rem 2rem 5rem;
}
.footer-up{
  display: flex;
  flex-direction: column;
  align-items: flex-start;


}
.footer-logo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
.footer-logo img{
  width: 15rem;
 
}
.footer-redes{
  display: flex;
  gap: 1rem;
  margin-top: -2em;
  
}
.footer-redes img{
  width: 3rem;
}

.footer-down p{
  color: var(--blanco);
  text-align: center;
  margin-top: 3rem;
  font-size: 1.5rem;
}
</style>
