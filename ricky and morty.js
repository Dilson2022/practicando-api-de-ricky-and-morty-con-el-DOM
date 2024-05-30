const boton = document.getElementById("btnPersonaje");

let data;

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
  boton.addEventListener("click", (e) => obtenerPersonajesFiltrados(e, data));
});

//  HACEMOS LA PETICION A LA URL, PARA OBTENER LOS CHARACTER
const fetchData = async () => {
  try {
    loadingData(true);
    const res = await fetch("https://rickandmortyapi.com/api/character");
    data = await res.json();
    //console.log(data.results);

    pintarData(data);
  } catch (error) {
    console.log(error);
  } finally {
    loadingData(false);
  }
};

// PINTAMOS TODOS LOS PERSONAJES DE FORMA DINAMICA
const pintarData = (data) => {
  const cards = document.getElementById("card-dinamicas");
  const templateCard = document.getElementById("template-card").content;
  const fragment = document.createDocumentFragment();

  // Limpiar todos los elementos dentro de "cards"
  cards.innerHTML = "";

  data.results.forEach((item) => {
    //console.log(item);
    const clone = templateCard.cloneNode(true);
    clone.querySelector("h5").textContent = item.name;
    clone.querySelector("p").textContent = item.species;
    clone.querySelector("img").setAttribute("src", item.image);

    // Guardamos en el fragment para evitar reflow
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};

const loadingData = (estado) => {
  const loading = document.getElementById("loading");
  if (estado) {
    loading.classList.remove("d-none");
  } else {
    loading.classList.add("d-none");
  }
};

const filtrarCharacter = (data, species) => {
  //console.log(data, species);
  if (data) {
    return data.results.filter(
      (character) => character.species.toLowerCase() === species.toLowerCase()
    );
  } else {
    return [];
  }
};

const obtenerPersonajesFiltrados = (e, data) => {
  e.preventDefault(); // Evitar que la página se recargue
  //console.log(data);
  const input = document.getElementById("input").value.trim();
  //console.log(input);
  if (input !== "") {
    const personajesFiltrado = filtrarCharacter(data, input);
    pintarData({ results: personajesFiltrado });
    document.getElementById("input").value = "";
  } else {
    // Si el campo está vacío, mostramos todos los personajes nuevamente
    pintarData(data);
  }
};
