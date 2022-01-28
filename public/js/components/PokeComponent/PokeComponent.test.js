import PokeComponent from "./PokeComponent.js";

describe("Given a PokeComponent component", () => {
  describe("When it is instantiated", () => {
    test("Then it should show a div", () => {
      const container = document.createElement("div");

      const pokeCard = new PokeComponent(container, "");

      expect(pokeCard).not.toBeNull();
    });
  });
});
