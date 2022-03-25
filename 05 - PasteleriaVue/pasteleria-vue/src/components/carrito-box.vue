<template>
  <div class="carrito-box">
      <div class="carrito-contenedor">
          <table class="carrito-tabla">
              <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th></th>
              </tr>
              <tr>
                  <td><img width="100" src="../../src/assets/img/pastel1.jpg"></td>
                  <td>Pastel de Fresa</td>
                  <td>$250.00</td>
                  <td>1</td>
                  <td class="eliminar"><p>X</p> </td>
              </tr>
          </table>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.carrito-box{
    z-index: 1;
    border: solid 1px beige;
    position: absolute;
    background: var(--negro);
    right: 1%;
    bottom: 33%;
    width: 40rem;
    display: none;    
    
    
    
}
.active{
    display: block;
}
.carrito-contenedor{
    border: solid 1px beige;
    color: var(--blanco);
    text-align: center;
    height: 30rem;
    overflow: auto;
    padding: .5rem;

}
.carrito-tabla{
    width: 100%;
    border-collapse: collapse;
    
}
.carrito-tabla th{
background-color: var(--azul) ;
border: none;

}
.carrito-tabla td{
color: var(--azul);
font-size: 1.4rem;

}
 th,td {
   width: 25%;
    border-bottom: 1px solid var(--azul);
    padding: 1rem;
    

}
.eliminar p {
    background-color: rgb(190, 20, 20);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    
}
</style>