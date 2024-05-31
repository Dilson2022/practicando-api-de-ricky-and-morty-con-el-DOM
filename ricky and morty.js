const boton = document.getElementById("btnPersonaje");
const filtrar = document.getElementById("Filtrar");
const paginas = document.getElementById("pagina");

let data;

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
  boton.addEventListener("click", (e) => obtenerPersonajePorSuName(e, data));
  filtrar.addEventListener("change", () => filtrarPersonajes(data));
  paginas.addEventListener("change", paginado);
});

//  HACEMOS LA PETICION A LA URL, PARA OBTENER LOS CHARACTER
const fetchData = async (pagina) => {
  try {
    loadingData(true);
    const res = await fetch(
      "https://rickandmortyapi.com/api/character/?page=" + pagina
    );
    data = await res.json();

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
    clone.querySelector("h3").textContent = item.name;
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

const BuscarCharacter = (data, name) => {
  if (data) {
    return data.results.filter(
      (character) => character.name.toLowerCase() === name.toLowerCase()
    );
  } else {
    return [];
  }
};

const obtenerPersonajePorSuName = (e, data) => {
  e.preventDefault(); // Evitar que la página se recargue
  const input = document.getElementById("input").value.trim();
  const alerta = document.getElementById("alert");
  if (input !== "") {
    const BuascarPorName = BuscarCharacter(data, input);
    if (BuascarPorName.length > 0) {
      pintarData({ results: BuascarPorName });
      alerta.style.display = "none"; // Ocultar la alerta si se encuentran personajes
    } else {
      alerta.textContent = `Personaje con el nombre "${input}" no existe`;
      alerta.style.display = "block"; // Mostrar la alerta si no se encuentra el personaje
    }

    document.getElementById("input").value = "";
  } else {
    // Si el campo está vacío, mostramos todos los personajes nuevamente
    pintarData(data);
    alerta.style.display = "none"; // Ocultar la alerta si se muestra todo
  }
};

const filtrarPersonajes = (data) => {
  const filtrar = document.getElementById("Filtrar").value;
  if (filtrar === "") {
    pintarData(data);
  } else {
    const filtrado = data.results.filter(
      (character) => character.species === filtrar
    );
    pintarData({ results: filtrado });
  }
};

const paginado = () => {
  const paginado = document.getElementById("pagina").value;
  // console.log(pagina)
  fetchData(paginado);
};
