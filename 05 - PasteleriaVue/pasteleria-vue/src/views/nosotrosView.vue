<template>
  <main>
    <div class="nosotros-img">
      <img src="../../src/assets/img/nosotros.jpg" alt="imagen nosotros" width="1000">
    </div>
    <div class="nosotros-contenido">
      <h2>Mas sobre Nosotros</h2><br>
      <span>Desde 1998</span>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style>
 main{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 40% 60%);
  }
  .nosotro-img img{
    width: 10rem;
  }
</style>