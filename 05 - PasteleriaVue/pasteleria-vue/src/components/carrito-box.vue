<template>
  <div class="carrito-box">
    <div class="carrito-header">
      <h3>Tu carrito</h3>

      <a href="#" id="btnSalir" @click="$store.commit('ocultarCarrito')"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-square-x"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ff2825"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M10 10l4 4m0 -4l-4 4" /></svg
      ></a>
    </div>
    <div class="carrito-body">
      <div class="carrito-articulo">
        <div class="carrito-img">
          <img
            src="../../src/assets/img/pastel1.jpg"
            width="100 "
            height="100"
          />
        </div>
        <div class="carrito-resumen">
           <p>Past el de Fresa</p>
          <div class="carrito-precio">
            
            <p><span>$250,00</span></p>
             <p><span>cantidad:  {{$store.state.contador}}</span></p>
          </div>
         
         
          <div class="carrito-contador">
            <div class="btnCantidad" @click="$store.commit('btnMenos')">-</div>
            <p> {{$store.state.contador}}</p>
            <div class="btnCantidad"  @click="$store.commit('btnAumentar')">+</div>
          </div>
        </div>
        <div class="eliminar">
          <a href="#" class="btnEliminar"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-square-x"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ff2825"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M10 10l4 4m0 -4l-4 4" /></svg
          ></a>
        </div>
      </div>
    </div>
    <div class="carrito-footer">
      <div class="carrito-subtotal">
        <p>Subtotal</p>
        <p>$250,00</p>
      </div>
      <p>Envio Gratis en compras mayores de <span>$999.00 </span>MXN</p>
      <a href="#" class="btnOrdenar">Vaciar Carrito</a>
      <a href="#" class="btnOrdenar">Ordenar Ahora</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

.carrito-box {
  padding: 2rem;
  width: 45rem;
  height: 100vh;
  border: solid 1px black;
  background-color: #1f1e1e;
  /* background-color: #FFFFFF; */
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  right: 0%;
  display: none;
  
}

.active {
  display: block;
}

.carrito-precio{
  display: flex;
  gap: 2rem;
}
.carrito-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: solid 1px var(--blanco);
}
.carrito-header h3 {
  text-transform: uppercase;
  color: var(--blanco);
  font-size: 2rem;
}
.carrito-body {
  overflow: auto;
  height: 17rem;
    border-bottom: solid 1px var(--blanco);
}
.carrito-articulo {
  padding: 3rem 2rem 3rem 1rem;
  display: flex;
  gap: 2rem;

}
.carrito-body p {
  font-size: 2rem;
  color: var(--blanco);
  font-weight: bold;
}
.carrito-body span {
  font-size: 1.5rem;
  font-weight: normal;
  text-transform: uppercase;
  color: #464442;
}
.carrito-contador {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  justify-content: center;
  text-align: center;
}
.carrito-contador p {
  border: 1px solid #464442;
}

.carrito-resumen {
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
}
.btnCantidad {
  border: 1px solid #464442;
  width: 100%;
  font-size: 2rem;
  text-align: center;
  color: var(--blanco);
}
.btnCantidad:hover {
  cursor: pointer;
  border: 1px solid var(--azul);
}
.eliminar {
  width: 30%;
  text-align: right;
}
.carrito-footer{
  padding: 1rem;
}

.carrito-subtotal{
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  font-size: 2rem;
  margin: 2rem 0 2rem 0;
}
.carrito-footer p {
  font-size: 1.5rem;
  text-transform: uppercase;
   color: var(--blanco);
   margin-bottom: 2rem;
}
.carrito-footer span{
  color: var(--azul);
}
.btnOrdenar{
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 2rem;
background-color: var(--azul);
height: 5rem;
color: var(--blanco);
font-size: 2rem;
text-transform: uppercase;
font-weight: bold;
}
</style>