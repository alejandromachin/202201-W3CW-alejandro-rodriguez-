import PreviewCardComponent from "./PreviewCardComponent.js";

describe("Given a PreviewCardComponent", () => {
  describe("When it is instantiated with a pokemon", () => {
    test("Then it should render a div with the name of the pokemon", () => {
      const container = document.createElement("div");
      const pokemon = { name: "Bulbasaul" };

      const previewCard = new PreviewCardComponent(
        container,
        "pokemon",
        pokemon
      );

      debugger;

      expect(previewCard.element.textContent).toMatch(pokemon.name);
    });
  });
});
