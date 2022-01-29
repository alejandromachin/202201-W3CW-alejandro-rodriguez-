import Component from "../Component.js";
import PreviewCardComponent from "../PreviewCardComponent/PreviewCardComponent.js";

class PageComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "pageContainer row", "div");
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `<header class="navigation-container col-12">
      <div class="navigation">
        <ul class="navigation__menu">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </header>
    <div class="card-container col-12"></div>
    <footer class="footer col-12"></footer>
    `;
  }
}
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
  return prueba;

  prueba[0].forEach((prueba) => {
    new PreviewCardComponent(pageContainer);
  });
})();

export default PageComponent;
