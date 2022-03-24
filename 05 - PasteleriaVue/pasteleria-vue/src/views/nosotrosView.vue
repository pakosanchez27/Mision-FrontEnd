<template>
  <main>
    <div class="nosotros">
      <div class="nosotros-img">
      <img src="../../src/assets/img/nosotros.jpg" alt="imagen nosotros" width="1000">
    </div>
    <div class="nosotros-contenido">
      <h2>Mas sobre Nosotros <br><span>Desde 1998</span></h2>
     
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quibusdam odio adipisci vitae pariatur nulla culpa rerum architecto incidunt blanditiis possimus dolorem debitis obcaecati nemo. Obcaecati fugiat natus hic soluta.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quibusdam odio adipisci vitae pariatur nulla culpa rerum architecto incidunt blanditiis possimus dolorem debitis obcaecati nemo. Obcaecati fugiat natus hic soluta.
      </p>
    </div>
    </div>
    
  </main>
</template>

<script>
export default {

}
</script>

<style>
 .nosotros{
    padding: 5rem;
    display: grid;
    grid-template-columns: repeat(2, 40% 60%);
    gap: 2rem;
  }
  .nosotros-img img{
    width: 100%;
  }
  .nosotros-contenido{
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  .nosotros-contenido h2{
    font-size: 4rem;
  }
  .nosotros-contenido span{
    color: var(--azul);
    font-family: var(--logo);
    font-size: 3rem;
    
  }
  .nosotros-contenido p{
    font-size: 2rem;
    text-align: left;
    line-height: 1.5;
    margin-bottom: 5rem;
  }
</style>