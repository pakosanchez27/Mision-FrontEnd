<template>
  <div class="redes">
    <img src="./assets/img/facebook.png" alt="" />
    <img src="./assets/img/instagram.png" alt="" />
    <img src="./assets/img/twitter.png" alt="" />
  </div>

  <nav class="nav">
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
        <img src="../src/assets/img/logoB.png" alt="Logo" />
        <div class="footer-redes">
          <img src="../src/assets/img/fb.png" alt="facebook" />
          <img src="../src/assets/img/in.png" alt="instagram" />
          <img src="../src/assets/img/tw.png" alt="Twitter" />
        </div>
      </div>

      <div class="footer-contenido">
        <div class="footer-seccion">
          <h3>Recursos</h3>
          <a href="#">Aviso de Privacidad</a>
          <a href="#">Contact US</a>
          <a href="#">FAQ</a>
          <a href="#">Administrador</a>
        </div>
        <div class="footer-seccion">
          <h3>Menú</h3>
          <a href="#">Home</a>
          <a href="#">Nosotros</a>
          <a href="#">Menú</a>
          <a href="#">Crear</a>
          <a href="#">Contacto</a>
        </div>
        <div class="footer-seccion">
          <h3>Servicios</h3>
           <a href="#">Delivery</a>
          <a href="#">Entrega en Sucursal</a>
          <a href="#">Pedidos</a>
          <a href="#">Quejas</a>
          
        </div>
        <div class="footer-seccion">
          <h3>Contacto</h3>
          <div class="direccion">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-map-pin"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#10A0A0"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="11" r="3" />
              <path
                d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
              />
            </svg>
            <p>
              Calle Pichirilo #475, Col. Buena Aventura, <br />
              Chimalhuacan, Estado de México
            </p>
          </div>
          <div class="email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-mail"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#10A0A0"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
            <p>lunapastel@gmail.com</p>
          </div>
          <div class="telefono">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-phone"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#10A0A0"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
              />
            </svg>
            <p>+52 5525368948</p>
          </div>
        </div>
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
.direccion,
.email,
.telefono {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  margin-top: 1rem;
  color: var(--blanco);
  font-size: 1rem;
}
.footer{
  background-color: var(--negro);
  padding: 0 5rem 2rem 5rem;
}
.footer-up{
  display: flex;
 justify-content: space-between;
  align-items: center;



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
.footer-contenido{
  display: flex;
  gap: 5rem;
  margin-right: 5rem;
  text-align: center;
  margin-top: 5rem;
}
.footer-seccion h3{
 color:var(--blanco);
 font-size: 2rem;

}

.footer-seccion{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.footer-seccion a{
  text-decoration: none;
  color: var(--blanco);
  font-size: 1rem;
}
</style>
