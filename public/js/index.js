import CardButtonComponent from "./components/CardButtonComponent/CardButtonComponent.js";
import PageComponent from "./components/PageComponent/PageComponent.js";
// import PokeComponent from "./components/PokeComponent/PokeComponent.js";
import PreviewCardComponent from "./components/PreviewCardComponent/PreviewCardComponent.js";

const divContainer = document.querySelector(".container-fluid");

new PageComponent(divContainer);

const pageContainer = document.querySelector(".card-container");

async function getPokemonInfo() {
  const pokemonInfo = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const object = await pokemonInfo.json();
  const nextObject = object.next;
  const pokemonArray = [object.results, nextObject];

  return pokemonArray;
}

(async () => {
  const pokemonArray = await getPokemonInfo();

  pokemonArray[0].forEach((pokemon) => {
    new PreviewCardComponent(pageContainer, "poke-card", pokemon);
  });
})();
