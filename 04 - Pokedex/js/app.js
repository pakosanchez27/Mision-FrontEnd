// Variables

const buscar = document.querySelector("#enter");
const pokemonImg = document.querySelector("#pokemon-img");
const nombrePokemon = document.querySelector("#nombre-pokemon");
const fondo = document.querySelector('#fondo');
let pokemon;

// Eventos
eventlistener();

function eventlistener() {
  buscar.addEventListener("click", buscarPokemon);
}

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
       };
    
  
    imprimirHTML(pokemonObj);
    });
}

function imprimirHTML(pokemon) {
  const { nombre, imagen, type, index } = pokemon;

  tipoFondo = document.createElement('style');
  tipoFondo.innerHTML =` 
 
      html {
        background-color: #${type};
      }
    
  `

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
  
  const types = document.createElement('div');
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


  nombrePokemon.appendChild(types);
  nombrePokemon.appendChild(nombreP);
  nombrePokemon.appendChild(indexP);
  pokemonImg.appendChild(imagenPokemon);
  
}

function limpiarHTML(div) {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}
