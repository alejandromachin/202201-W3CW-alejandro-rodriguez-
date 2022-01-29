import Component from "../Component.js";

class CardButtonComponent extends Component {
  actionOnClick;
  text;

  constructor(parentElement, className, actionOnClick, text) {
    super(parentElement, className, "button");
    this.actionOnClick = actionOnClick;
    this.text = text;
    this.generateHTML();
    this.addListeners();
  }

  generateHTML() {
    this.element.textContent = this.text;
  }

  addListeners() {
    this.element.addEventListener("click", this.actionOnClick);
  }
}

export default CardButtonComponent;
