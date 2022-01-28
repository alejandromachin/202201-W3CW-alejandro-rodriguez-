import PageComponent from "./components/PageComponent/PageComponent.js";
import PokeComponent from "./components/PokeComponent/PokeComponent.js";

const divContainer = document.querySelector(".container");

new PageComponent(divContainer);

const pageContainer = document.querySelector(".card-container");

// eslint-disable-next-line no-unused-vars
const pokeCard = new PokeComponent(pageContainer, "poke-card");
