<template>
  <main class="main">
    <h2>crear</h2>
    <div class="form-hero"></div>
    <form class="formulario">
      <legend><span>Personaliza</span> Tu Pastel</legend>
      <div class="primera-parte">
        <div class="campo">
          <label for="kilos" class="campo-label">Numero de kilos:</label>
          <select name="kilos" id="kilos" class="campo-input">
            <option disabled selected>0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div class="campo">
          <label for="pisos" class="campo-label">Numero de Pisos:</label>
          <select name="pisos" id="pisos" class="campo-input">
            <option disabled selected>0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div class="campo">
          <label for="color" class="campo-label">Color:</label>
          <select name="color" id="color" class="campo-input">
            <option disabled selected>--Selected--</option>
            <option value="1">Azul</option>
            <option value="2">Amarillo</option>
            <option value="3">Rojo</option>
            <option value="4">Verde</option>
            <option value="5">Violeta</option>
            <option value="6">Cafe</option>
            <option value="7">Blanco</option>
            <option value="8">Negro</option>
          </select>
        </div>
      </div>
      <div class="segunda-parte">
        <div class="campo">
          <label for="sabor" class="campo-label">Sabor del Pastel:</label>
          <select name="sabor" id="sabor" class="campo-input">
            <option disabled selected>--Selected--</option>
            <option value="1">Vainilla</option>
            <option value="2">Chocolate</option>
            <option value="3">Fresa</option>
            <option value="4">Mango</option>
            <option value="5">Zarzamora</option>
            <option value="6">Cafe</option>
            <option value="7">Mermelada</option>
            <option value="8">Envinado</option>
          </select>
        </div>
        <div class="campo">
          <label for="dedicatoria" class="campo-label">Dedicatoria:</label>
          <input type="text" class="campo-input" id="dedicatoria" />
        </div>
        <div class="campo">
          <label for="decoraciones" class="campo-label">Decoraciones:</label>
          <select name="decoraciones" id="decoraciones" class="campo-input">
            <option disabled selected>--Selected--</option>
            <option value="1">Chantilli</option>
            <option value="2">Chispas de Chocolate</option>
            <option value="3">Chispas Arcoiris</option>
            <option value="4">Nuez</option>
            <option value="5">Chocoretas</option>
            <option value="6">Tiras de chocolate</option>
            <option value="7">Chocolate Blanco</option>
          </select>
        </div>
        <div class="campo">
          <label for="observaciones" class="campo-label">Observaciones</label>
          <textarea
            id="observaciones"
            cols="30"
            rows="10"
            class="campo-input"
          ></textarea>
        </div>
        <div class="total">
          <p>Total: <span>$3500.00</span></p>
          <input type="sumbmit" class="boton" value="Ordenar" />
        </div>
      </div>
    </form>
  </main>
</template>

<script>
export default {};
</script>

<style>
.main {
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
h2{
  font-size: 5rem;
  margin-bottom: 5rem;
}
.form-hero {
  border: solid 1px black;
  width: 100%;
  height: 33rem;
  background-image: url(../../src/assets/img/crea.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.formulario {
  -webkit-box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.75);
  width: 90%;
  margin: 0 auto;
  margin-top: -5rem;
  background-color: var(--blanco);
  padding: 2rem 5rem;
}
.formulario legend {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 2rem;
}
.formulario span {
  color: var(--azul);
}
.primera-parte {
  display: flex;
}
.primera-parte label {
  width: 68%;
}
.campo {
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
}
.campo-label {
  font-size: 2rem;
  font-weight: bold;
  width: 30%;
  text-align: right;
}
.campo-input {
  border: solid 2px var(--azul);
  text-align: center;
}

#pisos,
#kilos {
  width: 5rem;
  height: 5rem;
}
#color {
  height: 5rem;
}

.segunda-parte {
  display: flex;
  flex-direction: column;
}
input,
textarea,
select {
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  font-size: 2rem;
}
.total {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 2rem;
}
.total p {
  font-size: 3rem;
}
.total input {
  text-align: center;
  font-size: 4rem;
  height: 10rem;
}
</style>