<template>
  <Redes/>
  <Header/>
  <Footer/>
</template>


<script>
import Footer from './components/footer.vue';
import Header from './components/header.vue'; 
import Redes from './components/redes.vue'; 

console.log(window);

export default {
 

 components:{
   Footer,
   Header,
   Redes
   
 }

  
};


  Footer</script>



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
