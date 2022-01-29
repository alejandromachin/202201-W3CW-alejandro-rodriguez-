import PageComponent from "./components/PageComponent/PageComponent.js";
import PokeComponent from "./components/PokeComponent/PokeComponent.js";
import PreviewCardComponent from "./components/PreviewCardComponent/PreviewCardComponent.js";

const divContainer = document.querySelector(".container-fluid");

new PageComponent(divContainer);

const pageContainer = document.querySelector(".card-container");
// eslint-disable-next-line no-unused-vars

const pokeCard = new PokeComponent(pageContainer, "poke-card");
const pokemon = { name: "Bulbasaul" };
// eslint-disable-next-line no-unused-vars

const card = new PreviewCardComponent(pageContainer, "poke-card", pokemon);
