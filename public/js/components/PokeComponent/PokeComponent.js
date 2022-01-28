import Component from "../Component.js";

class PokeComponent extends Component {
  nombre;
  tipo;

  constructor(parentElement, className) {
    super(parentElement, className);

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt=""> <ul><li>NOMBRE:</li><li>INFO:</li></ul>`;
  }
}

export default PokeComponent;
