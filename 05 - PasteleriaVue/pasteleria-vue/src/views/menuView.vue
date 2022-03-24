<template>
  <section>
    <div class="menu-hero">
      <div class="menu-negro"></div>
      <div class="menu-titulo">
        <h2>Nuestro Menú</h2>
        <p>Pasteles a Domicilio</p>
      </div>
    </div>
  </section>
  <main class="productos">
    <div class="menu-categoria">
      <h3>Pasteleria</h3>
      <a href="#" class="enlace">Todos los pasteles</a>
      <a href="#" class="enlace">Pasteles Mini</a>
      <a href="#" class="enlace">Pasteles Bodas</a>
      <a href="#" class="enlace">Pasteles XV años</a>
      <a href="#" class="enlace">Pasteles Infantil</a>
    </div>
    <div class="menu-contenido">
      <div class="menu-total">
        <p>Todos los Pasteles</p>
        <p>30 Productos</p>
      </div>
      <div class="menu-producto">
        <div class="card-producto">
        <img src="../../src/assets/img/pastel1.jpg" alt="Pastel 1">
        <p>Pastel de Fresa</p>
        <p><span>$250.00</span></p>
        <button class="boton">Agregar</button>
        </div> <!--Termina Card-->
         <div class="card-producto">
        <img src="../../src/assets/img/pastel1.jpg" alt="Pastel 1">
        <p>Pastel de Fresa</p>
        <p><span>$250.00</span></p>
        <button class="boton">Agregar</button>
        </div> <!--Termina Card-->
         <div class="card-producto">
        <img src="../../src/assets/img/pastel1.jpg" alt="Pastel 1">
        <p>Pastel de Fresa</p>
        <p><span>$250.00</span></p>
        <button class="boton">Agregar</button>
        </div> <!--Termina Card-->
         <div class="card-producto">
        <img src="../../src/assets/img/pastel1.jpg" alt="Pastel 1">
        <p>Pastel de Fresa</p>
        <p><span>$250.00</span></p>
        <button class="boton">Agregar</button>
        </div> <!--Termina Card-->
         <div class="card-producto">
        <img src="../../src/assets/img/pastel1.jpg" alt="Pastel 1">
        <p>Pastel de Fresa</p>
        <p><span>$250.00</span></p>
        <button class="boton">Agregar</button>
        </div> <!--Termina Card-->
         <div class="card-producto">
        <img src="../../src/assets/img/pastel1.jpg" alt="Pastel 1">
        <p>Pastel de Fresa</p>
        <p><span>$250.00</span></p>
        <button class="boton">Agregar</button>
        </div> <!--Termina Card-->
         <div class="card-producto">
        <img src="../../src/assets/img/pastel1.jpg" alt="Pastel 1">
        <p>Pastel de Fresa</p>
        <p><span>$250.00</span></p>
        <button class="boton">Agregar</button>
        </div> <!--Termina Card-->
         <div class="card-producto">
        <img src="../../src/assets/img/pastel1.jpg" alt="Pastel 1">
        <p>Pastel de Fresa</p>
        <p><span>$250.00</span></p>
        <button class="boton">Agregar</button>
        </div> <!--Termina Card-->
         <div class="card-producto">
        <img src="../../src/assets/img/pastel1.jpg" alt="Pastel 1">
        <p>Pastel de Fresa</p>
        <p><span>$250.00</span></p>
        <button class="boton">Agregar</button>
        </div> <!--Termina Card-->
      </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style>
  .menu-hero{
    background-image: url(/src/assets/img/hero-munu.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 40rem;
    position: relative;
    display: flex;
    align-items: center;
    
  }
  .menu-negro{
    position: absolute;
    background-color: rgba(000, 000, 000, 0.5);
    width: 100%;
    height: 40rem;
}
.menu-titulo{
  position: absolute;
  text-align: center;
  border: solid 10px var(--azul);
  width: 65rem;
  height: 18rem;
  color: var(--blanco);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5rem;
 
}
.menu-titulo h2{
  font-size: 6rem;
   font-weight:var(--normal);
}
.menu-titulo p {
  font-size: 2rem;
}
.productos{
  padding: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 20% 80%);
  gap: 2rem;

}
.menu-categoria{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
 text-transform: uppercase;
  height: 70rem;
}

.menu-total{
  border: solid 1px rgb(167, 166, 166);
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}
.menu-total p{
  font-size: 1.5rem;
  color: gray;
}

.menu-categoria h3{
  font-size: 2rem;
  color: var(--azul);
  height: 5rem;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
 border-top: solid 3px gray; 
 border-bottom: solid 2px gray; 
 padding-left: 2rem ;

  
  
}
.enlace{
  height: 4rem;
  display: flex;

  align-items: center;
  font-size: 1.5rem;
  border-top: solid 1px gray;
  color: var(--negro);
  width: 100%;
  padding-left: 2rem ;
}
.enlace:first-child{
  border: none;
}
.enlace:last-child{
  border-bottom: solid 1px gray;
  
}

.enlace:nth-child(2){
  border-top: solid 1px gray;
}
.enlace:hover{
  font-size: 2rem;
}

.menu-producto{
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  height: 70rem;
  
}
.menu-producto{
   overflow-y: auto;       
   
}
.card-producto{
  width: 20rem;
  height: 30rem;
  
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 1rem;
}
.card-producto img{
  width: 20rem ;
  border-radius: 1.2rem;
}
.card-producto button{
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .5rem;
  margin-top: -1rem;
  
}
.card-producto p {
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
}
.card-producto span{
  color: var(--azul);
  font-size: 2rem;
   margin-top: -1rem;
  
}

</style>