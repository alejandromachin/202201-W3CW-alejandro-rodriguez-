import Component from "../Component.js";
import CardButtonComponent from "../CardButtonComponent/CardButtonComponent.js";
import PreviewCardComponent from "../PreviewCardComponent/PreviewCardComponent.js";

class PageComponent extends Component {
  currentHtml;
  constructor(parentElement) {
    super(parentElement, "pageContainer row", "div");
    this.generateHTML();
    this.renderAll();
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
    <div><div class="card-container col-12"></div><div class="page-jump"></div></div>
    <footer class="footer col-12"></footer>
    `;
  }

  renderAll() {
    const pageContainer = document.querySelector(".card-container");
    const nextPageContainer = this.element.querySelector(".page-jump");

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

      new CardButtonComponent(
        nextPageContainer,
        "button button--next-page",
        () => {
          this.element.innerHTML = "";
          this.generateHTML();
          this.renderAll();
        },
        "NEXT PAGE"
      );
    })();
  }
}
export default PageComponent;
