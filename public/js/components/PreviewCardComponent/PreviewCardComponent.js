import Component from "../Component.js";

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
    console.log(this.url);

    async function getPokemonCardInfo(url) {
      const pokemonCardInfo = await fetch(url);
      const objectCardInfo = await pokemonCardInfo.json();

      return objectCardInfo;
    }

    (async () => {
      const pokemonObject = await getPokemonCardInfo(this.url);

      this.element.innerHTML = `<img src="${pokemonObject.sprites.front_default}" alt="">
  <div class="${this.element.className}__info"> Name: ${pokemonObject.forms[0].name}</div>
  <div class="${this.element.className}__button-container"></div>`;
    })();
  }
}

export default PreviewCardComponent;
