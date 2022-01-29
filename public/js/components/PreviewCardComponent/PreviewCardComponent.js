import Component from "../Component.js";
import CardButtonComponent from "../CardButtonComponent/CardButtonComponent.js";

class PreviewCardComponent extends Component {
  pokemon;
  name;
  url;
  // id;

  constructor(parentElement, className, pokemon) {
    super(parentElement, className);
    this.pokemon = pokemon;
    this.name = pokemon.name;
    // this.id = pokemon.id;
    this.url = pokemon.url;

    this.generateHTML();
  }

  generateHTML() {
    async function getPokemonCardInfo(url) {
      const pokemonCardInfo = await fetch(url);
      const objectCardInfo = await pokemonCardInfo.json();

      return objectCardInfo;
    }

    (async () => {
      const pokemonObject = await getPokemonCardInfo(this.url);

      this.element.innerHTML = `<img src="${
        pokemonObject.sprites.front_default
      }" alt="">
  <div class="${
    this.element.className
  }__info"> ${pokemonObject.forms[0].name.toUpperCase()}</div>
  <div class="${this.element.className}__button-container"></div>`;

      const buttonContainer = this.element.querySelector(
        ".poke-card__button-container"
      );

      new CardButtonComponent(
        buttonContainer,
        "button button--more-info",
        () => {},
        "MORE INFO"
      );
      new CardButtonComponent(
        buttonContainer,
        "button button--add-list",
        () => {},
        "CATCH IT"
      );
    })();
  }
}

export default PreviewCardComponent;
