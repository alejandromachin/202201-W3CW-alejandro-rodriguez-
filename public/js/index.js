import PageComponent from "./components/PageComponent/PageComponent.js";
import PokeComponent from "./components/PokeComponent/PokeComponent.js";
import PreviewCardComponent from "./components/PreviewCardComponent/PreviewCardComponent.js";

const divContainer = document.querySelector(".container-fluid");

new PageComponent(divContainer);

const pageContainer = document.querySelector(".card-container");
// eslint-disable-next-line no-unused-vars
const pokeCard = new PokeComponent(pageContainer, "poke-card");

// eslint-disable-next-line no-unused-vars
// const card = new PreviewCardComponent(pageContainer, "poke-card", pokemon);

async function getPokemonInfo() {
  const pokemonInfo = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const object = await pokemonInfo.json();
  const nextObject = object.next;
  const pokemonArray = [object.results, nextObject];

  return pokemonArray;

  // return gifUrl;
}
(async () => {
  const prueba = await getPokemonInfo();

  prueba[0].forEach((prueb) => {
    new PreviewCardComponent(pageContainer, "poke-card", prueb);
  });
})();
