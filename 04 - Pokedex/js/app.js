// Variables

const buscar = document.querySelector("#enter");
const pokemonImg = document.querySelector("#pokemon-img");
const nombrePokemon = document.querySelector("#nombre-pokemon");
const fondo = document.querySelector("#fondo");
const stats = document.querySelector("#stats");
const colorTipo = document.querySelector("#stacts");
const btnDisplay = document.querySelector(".stats");
const btnDisplayM = document.querySelector(".moves");
const displayS = document.querySelector(".stats-data");
const displayM = document.querySelector(".move-data");
const moviminetosArray = document.querySelector("#lista-movimientos");
let pokemon;

// Eventos
eventlistener();

function eventlistener() {
  addEventListener("DOMContentLoaded", () => {
    const url = `https://pokeapi.co/api/v2/pokemon/bulbasaur`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        pokemonObj = {
          nombre: data.species.name,
          imagen: data.sprites.front_default,
          type: data.types[0].type.name,
          index: data.id,
          hp: data.stats[0].base_stat,
          atk: data.stats[1].base_stat,
          def: data.stats[2].base_stat,
          satk: data.stats[3].base_stat,
          sdef: data.stats[4].base_stat,
          spd: data.stats[5].base_stat,
          moves: data.moves,
        };
        
        imprimirHTML(pokemonObj);
        displayM.classList.add("none");
      });
    buscar.addEventListener("click", buscarPokemon);
    btnDisplay.addEventListener("click", () => {
      if (btnDisplayM.classList.contains("active")) {
        btnDisplayM.classList.remove("active");
        btnDisplay.classList.add("active");
        displayM.classList.add("none");
        displayS.classList.remove("none");
      }
    });
    btnDisplayM.addEventListener("click", () => {
      btnDisplayM.classList.add("active");
      btnDisplay.classList.remove("active");
      displayS.classList.add("none");
      displayM.classList.remove("none");
    });
  });

  // funciones

  function buscarPokemon(e) {
    const namePokemon = document.querySelector("#buscador").value.toLowerCase();
    hacerConsulta(namePokemon);
  }

  function hacerConsulta(nombre) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        pokemonObj = {
          nombre: data.species.name,
          imagen: data.sprites.front_default,
          type: data.types[0].type.name,
          index: data.id,
          hp: data.stats[0].base_stat,
          atk: data.stats[1].base_stat,
          def: data.stats[2].base_stat,
          satk: data.stats[3].base_stat,
          sdef: data.stats[4].base_stat,
          spd: data.stats[5].base_stat,
          moves: data.moves
        };

        console.log(pokemonObj);

        imprimirHTML(pokemonObj);
      });
  }

  function imprimirHTML(pokemon) {
    const { nombre, imagen, type, index, hp, atk, def, satk, sdef, spd, moves } =
      pokemon;

    const tipoFondo = document.createElement("style");
    tipoFondo.innerHTML = ` 
  
        html {
        background-color: var(--${type});
      }
      
      .stats{
        color: var(--${type});
      }
      .moves{
          color: var(--${type});
      }
      .active{
        background-color: var(--${type});
        color: var(--blanco);
      }
    
  `;

    limpiarHTML(pokemonImg);

    const imagenPokemon = document.createElement("img");
    imagenPokemon.src = imagen;
    imagenPokemon.setAttribute("width", "400");

    limpiarHTML(nombrePokemon);
    const nombreP = document.createElement("p");
    nombreP.textContent = nombre;

    const indexP = document.createElement("p");
    indexP.innerHTML = ` 
    <span>#00${index}</span>
  `;

    const types = document.createElement("div");
    types.innerHTML = `
  <div class="tipo ${type}">
        <div>
          <img src="src/img/icon/${type}.png" width="30" />
        </div>
        <div>
          <p>${type}</p>
        </div>
      </div>
  `;
    limpiarHTML(stats);
    const newStats = document.createElement("table");
    newStats.innerHTML = `
  <style>
  hr{
    border: solid 3px var(--${type});
    margin-top: 2rem;
}
td:nth-child(1){
    font-size: 2rem;
    color: var(--${type});
    
}
.move-data::-webkit-scrollbar-thumb {
    background-color: var(--${type});    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid var(--${type});  /* creates padding around scroll thumb */
  }
</style>
  
  <table >
  <tr>
      <th></th>
      <th></th>
      <th></th>
  </tr>
  <tr >
      <td id="poder">HP</td>
      <td id="puntaje">0${hp}</td>
      <td  class="${type} barra " width="${hp}"><div></div></td>
  </tr>
  <tr>
      <td id="poder">ATK</td>
      <td id="puntaje">0${atk}</td>
      <td class="${type} barra" width="${atk}"><div></div></td>
  </tr>
  <tr>
      <td id="poder">DEF</td>
      <td id="puntaje">0${def}</td>
      <td class="${type} barra" width="${def}"><div></div></td>
  </tr>
  <tr>
      <td id="poder">SATK</td>
      <td id="puntaje">0${satk}</td>
      <td class="${type} barra" width="${satk}"><div></div></td>
  </tr>
  <tr>
      <td id="poder">SDEF</td>
      <td id="puntaje">0${sdef}</td>
      <td class="${type} barra" width="${sdef}"><div></div></td>
  </tr>
  <tr>
      <td id="poder">SPD</td>
      <td id="puntaje">0${spd}</td>
      <td class="${type} barra" width="${spd}"><div></div></td>
  </tr>
</table>
  `;
 
   limpiarHTML(moviminetosArray)
    for(let i = 0; i < 10; i++){
        const movimientos = document.createElement("li");
        movimientos.classList.add("movimiento");
        movimientos.innerHTML = `
        <div >
           <p> ${moves[i].move.name}</p>
       </div>
       <div class="insignia ${type}">
           <img src="src/img/icon/${type}.png" width="30">
       </div>
    
    
  `;
  console.log(type);

    fondo.appendChild(tipoFondo);
    pokemonImg.appendChild(imagenPokemon);
    nombrePokemon.appendChild(nombreP);
    nombrePokemon.appendChild(indexP);
    nombrePokemon.appendChild(types);
    
    stats.appendChild(newStats);
    moviminetosArray.appendChild(movimientos);
    
  }

  function limpiarHTML(div) {
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
  }
}
}
