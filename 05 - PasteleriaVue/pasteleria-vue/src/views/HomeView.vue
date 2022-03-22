<template>
  <div class="hero">
    <div class="hero-oscuro">
      <div class="hero-texto">
        <p><span>Siempre</span> es un buen <br> momento para un <span>Pastel</span></p>
        <button class="boton">Ordena Ahora</button>
      </div>
    </div>
  </div>

  <section class="sugerencias">
    <h2>sugerencias</h2>
    <hr>
    <div class="cards-Sugerencias">
      <div class="card">
        <img src="../../src/assets/img/pastel1.jpg" alt="Pastel 1">
        <p>Pastel de Fresa</p>
        <p><span>$250.00</span></p>
        <button class="boton">Agregar</button>
      </div> <!--Termina card -->
      <div class="card">
        <img src="../../src/assets/img/pastel2.jpg" alt="Pastel 1">
        <p>chocopastel</p>
        <p><span>$250.00</span></p>
        <button class="boton">Agregar</button>
      </div> <!--Termina card -->
      <div class="card">
        <img src="../../src/assets/img/pastel3.jpg" alt="Pastel 1">
        <p>Pastel de mango</p>
        <p><span>$250.00</span></p>
        <button class="boton">Agregar</button>
      </div> <!--Termina card -->
       <div class="card">
        <img src="../../src/assets/img/pastel4.jpg" alt="Pastel 1">
        <p>Pastel de ceral</p>
        <p><span>$250.00</span></p>
        <button class="boton">Agregar</button>
      </div> <!--Termina card -->
      
    </div>
  </section>
  <section class="vendidos">
    <h2>Más vendidos</h2>
    <hr>
    <div class="cards-vendidos">
         <div class="card">
        <img src="../../src/assets/img/pastel5.jpg" alt="Pastel 1">
        <p>Pastel de Pepino</p>
        <p><span>$250.00</span></p>
        <button class="boton">Agregar</button>
      </div> <!--Termina card -->
      <div class="card">
        <img src="../../src/assets/img/pastel6.jpg" alt="Pastel 1">
        <p>hotcake</p>
        <p><span>$250.00</span></p>
        <button class="boton">Agregar</button>
      </div> <!--Termina card -->
      <div class="card">
        <img src="../../src/assets/img/pastel7.jpg" alt="Pastel 1">
        <p>Pastel de cerezas</p>
        <p><span>$250.00</span></p>
        <button class="boton">Agregar</button>
      </div> <!--Termina card -->
       <div class="card">
        <img src="../../src/assets/img/pastel8.jpg" alt="Pastel 1">
        <p>Pastel de canela</p>
        <p><span>$250.00</span></p>
        <button class="boton">Agregar</button>
      </div> <!--Termina card -->
    </div>
  </section>
</template>

<script>

export default {


   setup() {
    const home = true; 
    
    return{
       home,
     
    }
  }

}
</script>
 

<style>




.hero{
  
    background-image: url(/src/assets/img/hero.png);
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-box-shadow: 0px 4px 13px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 4px 13px 0px rgba(0,0,0,0.75);
box-shadow: 0px 4px 13px 0px rgba(0,0,0,0.75);
}
.hero-oscuro{
position: relative;
height: 100%;
width: 100%;
background: rgba(000, 000, 000, .5);
}

.hero-texto {
 position: absolute;
 text-align: center;
 top: 40%;
 /* right: 50%; */
 /* left: 50%; */
 bottom: 50%;
 width: 100%;
  
}
.hero-texto p{
  color: var(--blanco);
  font-size: 5rem;
  font-weight: bold;
}
.hero-texto span{
  color: var(--azul)
}

.boton {
  border: none;
  background-color: var(--azul);
  color: var(--blanco);
  font-size: 2rem;
  font-weight: bold;
  padding: 2rem;
  border-radius: 1.2rem;
  width: 30rem;
  margin-top: 2rem;
}
.boton:hover{
  cursor: pointer;
  background-color: ;
}
.sugerencias{
  padding: 5rem;

}
.sugerencias h2{  
  text-transform: uppercase;
  font-weight: var(--lite);
  text-align: center;
  font-size: 4rem;
}
.sugerencias hr{
  width: 10%;
  border:solid 2px var(--azul);
  background-color: var(--azul);
}

.cards-Sugerencias{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 5rem;
}


.card{
  width: 25rem;
  height: 40rem;
  margin: 0 auto;
}
.card img{
  width: 25rem;
  height: 25rem;
  border-radius: 1.2rem;
}
.card p{
  text-align: center;
  font-size: 2.5rem;
  font-weight: var(--lite);
  text-transform: uppercase;

}
.card span{
  color: var(--azul);
  font-weight: var(--normal);
}
.card button{
  width: 100%;
}

.vendidos{
  padding: 5rem;
  margin-top: 5rem;
  

}
.vendidos h2{
  text-transform: uppercase;
  font-weight: var(--lite);
  text-align: center;
  font-size: 4rem;
}
.vendidos hr{
  width: 10%;
  border:solid 2px var(--azul);
  background-color: var(--azul);
}

.cards-vendidos{
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr );
  gap: 5rem;
  margin-top: 5rem;
   
}

</style>>

