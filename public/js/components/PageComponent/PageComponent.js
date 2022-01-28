import Component from "../Component.js";

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

export default PageComponent;
