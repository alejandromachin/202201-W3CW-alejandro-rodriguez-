import CardButtonComponent from "./CardButtonComponent.js";

describe("Given a CardButtonComponent", () => {
  describe("When it it's instantiated with the text 'POKEMON' ", () => {
    test("Then it should render a button with a text 'POKMENON' on it", () => {
      const container = document.createElement("div");
      const text = "POKEMON";
      const action = jest.fn();

      const button = new CardButtonComponent(container, "", action, "POKEMON");

      expect(button.element.textContent).toBe(text);
    });
  });

  describe("When it its instantiated and given an action", () => {
    test("Then it should do the action on click", () => {
      const container = document.createElement("div");
      const action = jest.fn();

      const button = new CardButtonComponent(container, "", action, "");

      button.element.click();

      expect(action).toHaveBeenCalled();
    });
  });
});
