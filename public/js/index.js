import PageComponent from "./components/PageComponent/PageComponent.js";
import PokeComponent from "./components/PokeComponent/PokeComponent.js";

const divContainer = document.querySelector(".main-container");

new PageComponent(divContainer);

const pageContainer = document.querySelector(".pageContainer");

const pokeCard = new PokeComponent(pageContainer, "poke-card");
