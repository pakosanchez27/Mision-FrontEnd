<template>
  
  <main class="contacto main">
    <h2>Contacto</h2>
<div class="hero-contact"></div>
    <form class="formulario">
      <div class="campo">
        <label for="nombre" class="campo-label">Nombre:</label>
        <input type="text" class="campo-input" id="nombre" placeholder="Tu Nombre" required>
        
      </div>
       <div class="campo">
        <label for="email" class="campo-label">E-mail:</label>
        <input type="text" class="campo-input" id="email" placeholder="Tu E-mail" required>
        
      </div>
       <div class="campo">
        <label for="mensaje" class="campo-label">Mensaje:</label>
        <textarea  id="mensaje" cols="30" rows="10" class="campo-input" placeholder="Tu mensaje" required></textarea>
      </div>

      <div class="total">
          <input type="submit" class="boton" value="Enviar" />
        </div>
    </form>
  </main>
  
</template>

<script>
export default {

}
</script>



<style>

.contacto{
   padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  
}
  .hero-contact{
     background-image: url(../../src/assets/img/contacto.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 33rem;
  padding: 5rem
  }
  #nombre, #email, #mensaje{
    text-align: left;
    
  }
  #nombre, #email{
    height: 6rem;
  }
   #mensaje{
     height: 19rem;
   }
 
</style>