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
    this.element.innerHTML = `<img src="" alt="${this.name}">
    <div class="${this.element.className}__info"> Name: ${this.name}</div> 
    <div class="${this.element.className}__button-container"></div>`;
  }
}

export default PreviewCardComponent;
