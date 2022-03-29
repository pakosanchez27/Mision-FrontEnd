<template>
  <div class="carrito-box" >
    <div class="carrito-header">
      <h3>Tu carrito</h3>

      <a href="#" btnSalir><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <path d="M10 10l4 4m0 -4l-4 4" />
</svg></a>
    </div>
    <div class="carrito-body">
      <div class="carrito-articulo">
          <div class="carrito-img">
            <img src="../../src/assets/img/pastel1.jpg" width="100 " height="100">
        </div>
        <div class="carrito-resumen">
          <p>Past el de Fresa</p>
          <p><span>cantidad: 1</span></p>
          <div class="carrito-contador">
            <div class="btnCantidad">-</div>
            <p>0</p>
            <div class="btnCantidad">+</div>
          </div>
        </div>
        <div class="eliminar">
          <a href="#" class="btnEliminar"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-x" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <path d="M10 10l4 4m0 -4l-4 4" />
</svg></a>
        </div>
      </div>
      

      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

.carrito-box{
    padding: 2rem;
    width: 50rem;
    border: solid 1px black;
    background-color: #1F1E1E;
    /* background-color: #FFFFFF; */
    position: absolute;
    z-index: 1;
    right: 4%;
    bottom: 37%;
    /* display: none; */



}
.active {
  display: block;
}

.carrito-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: solid 1px var(--blanco);
}
.carrito-header h3{
 text-transform: uppercase;
 color: var(--blanco);
 font-size: 2rem;
}
.carrito-body{
  overflow: auto;
  height: 17rem;
}
.carrito-articulo{
 
  padding: 3rem 2rem 3rem 1rem;
  display: flex;
  gap: 2rem;
  border-bottom: solid 1px var(--blanco);
 
  
}
.carrito-body p{
  font-size: 2rem;
  color: var(--blanco);
  font-weight: bold;
}
.carrito-body span{
  font-size: 1.5rem;
  font-weight: normal;
  text-transform: uppercase;
  color: #464442;
}
.carrito-contador{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
   
  justify-content: center;
  text-align: center;


}
.carrito-contador p{  
border: 1px solid #464442;
}

.carrito-resumen{
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.btnCantidad{
    border: 1px solid #464442;
width: 100%;
font-size: 2rem;
text-align: center;
color: var(--blanco);
}
.btnCantidad:hover{
  cursor: pointer;
  border: 1px solid var(--azul);
}
.eliminar{
  width: 30%;
  text-align: center;
  
}
</style>